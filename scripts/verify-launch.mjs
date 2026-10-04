import assert from 'node:assert/strict'

const baseUrl = process.env.VERIFY_BASE_URL ?? 'http://127.0.0.1:3000'
const finalOrigin = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${finalOrigin}/hu/`
const indexNowKey = 'bc8b780878dc40d5ab398ab4c13ab26a'
const publicPages = [
  '/hu/',
  '/hu/google-terkep-top-3/',
  '/hu/weboldal-keszites-budapest/',
  '/hu/tudastar/',
  '/hu/tudastar/google-terkep-rangsorolas/',
  '/hu/tudastar/google-cegprofil-optimalizalas/',
  '/hu/tudastar/organikus-talalat-vagy-google-terkep/',
  '/hu/modszertan/',
  '/hu/rolunk/',
  '/hu/kapcsolat/',
]

const request = (path, options = {}) => fetch(new URL(path, baseUrl), { redirect: 'manual', ...options })

const indexNowKeyResponse = await request(`/${indexNowKey}.txt`)
assert.equal(indexNowKeyResponse.status, 200, 'IndexNow key file must be publicly accessible')
assert.equal((await indexNowKeyResponse.text()).trim(), indexNowKey, 'IndexNow key file contents are wrong')

const root = await request('/')
assert.equal(root.status, 308, 'Root must permanently redirect')
assert.equal(new URL(root.headers.get('location'), baseUrl).pathname, '/hu/', 'Root redirect must target /hu/')

const untrailedHungarian = await request('/hu')
assert.equal(untrailedHungarian.status, 308, '/hu must permanently redirect to the trailing-slash URL')
assert.equal(new URL(untrailedHungarian.headers.get('location'), baseUrl).pathname, '/hu/', '/hu redirect must target /hu/')

const homeResponse = await request('/hu/')
assert.equal(homeResponse.status, 200, '/hu/ must return 200')
const home = await homeResponse.text()
assert.match(home, new RegExp(`<link[^>]+rel="canonical"[^>]+href="${canonicalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`), 'Homepage canonical is wrong')
assert.match(home, new RegExp(`<meta[^>]+property="og:url"[^>]+content="${canonicalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`), 'Open Graph URL is wrong')
assert.ok(home.includes('A helyi keresések 85%-a a Google Térkép első 3 találatához kerül. Ha nincs az első 3-ban, gyakorlatilag láthatatlan.'), 'Protected 85% sentence changed')
assert.ok(!home.includes('Helyi szolgáltató vállalkozásokat juttatunk be a Google Térkép első 3 találata közé. Nincs hosszú távú lekötés. Nincs 12 hónapnyi kifogás.'), 'Rejected hero paragraph remains')
assert.ok(home.includes('Átlátható csomagok.'), 'Pricing heading is not corrected')
assert.ok(!home.includes('Átláthat����'), 'Mojibake remains')
assert.ok(home.includes('Top 3 a Google Térképen 90 napon belül.'), 'Hero guarantee heading changed')
assert.ok(home.includes('Vagy minden forintot visszakap.'), 'Hero money-back guarantee changed')
assert.ok(!home.includes('ingyen dolgozunk tovább'), 'Old free-work guarantee remains')
assert.ok(!home.includes('díjmentesen folytatjuk'), 'Old free-continuation guarantee remains')
assert.ok(!home.includes('ttamasmarketing.com'), 'Old domain remains in homepage')
assert.ok(!/href="#/.test(home), 'Root-relative hash navigation remains')

const jsonLdBlocks = [...home.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]))
assert.ok(jsonLdBlocks.length > 0, 'Structured data is missing')
const graph = jsonLdBlocks.flatMap(block => block['@graph'] ?? [block])
assert.ok(graph.some(item => item['@type'] === 'Organization' && item['@id'] === `${finalOrigin}/#organization`), 'Organization entity is missing')
assert.ok(graph.some(item => item['@type'] === 'Person' && item['@id'] === `${finalOrigin}/#founder`), 'Person entity is missing')
const services = graph.filter(item => item['@type'] === 'Service')
assert.equal(services.length, 2, 'Exactly two Service entities are required')
assert.ok(services.every(item => item.provider?.['@id'] === `${finalOrigin}/#organization`), 'Service provider links are wrong')
assert.deepEqual(services.map(item => item.url).sort(), [
  `${finalOrigin}/hu/google-terkep-top-3/`,
  `${finalOrigin}/hu/weboldal-keszites-budapest/`,
], 'Homepage Service entities must link to the canonical commercial pages')

for (const path of publicPages) {
  const response = await request(path)
  assert.equal(response.status, 200, `${path} must return 200`)
  const html = await response.text()
  const expectedCanonical = `${finalOrigin}${path}`
  assert.match(html, new RegExp(`<link[^>]+rel="canonical"[^>]+href="${expectedCanonical.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`), `${path} canonical is wrong`)
  assert.ok(!html.includes('ttamasmarketing.com'), `${path} contains the old domain`)
  assert.ok(!/name="robots" content="noindex/.test(html), `${path} must be indexable`)
}

const mapsServiceResponse = await request('/hu/google-terkep-top-3/')
const mapsService = await mapsServiceResponse.text()
assert.ok(mapsService.includes('300.000 Ft'), 'Maps setup price changed')
assert.ok(mapsService.includes('35.000 Ft / hónap'), 'Maps maintenance price changed')
assert.ok(mapsService.includes('Ha addig nem érjük el a megbeszélt Top 3 helyezést, Ön nem fizet tovább, és az addig befizetett teljes összeget visszafizetjük. Nincs kilépési díj, nincs vita, minden addig befizetett forintot visszakap.'), 'Money-back guarantee explanation changed')
assert.ok(!mapsService.includes('ingyen dolgozunk tovább'), 'Old guarantee remains on Maps service page')

const notFoundResponse = await request('/nem-letezo-oldal/')
assert.equal(notFoundResponse.status, 404, 'Unknown route must return 404')
const notFound = await notFoundResponse.text()
assert.ok(!/rel="canonical"/.test(notFound), '404 must not contain a canonical')
assert.match(notFound, /name="robots" content="noindex, nofollow"/, '404 must be noindex, nofollow')

const englishResponse = await request('/en/')
assert.equal(englishResponse.status, 404, 'An English route must not exist')
const english = await englishResponse.text()
assert.ok(!/rel="canonical"/.test(english), 'Missing English route must not contain a canonical')
assert.match(english, /name="robots" content="noindex, nofollow"/, 'Missing English route must be noindex, nofollow')

const robotsResponse = await request('/robots.txt')
assert.equal(robotsResponse.status, 200, 'robots.txt must return 200')
const robots = await robotsResponse.text()
assert.ok(robots.includes(`Host: ${finalOrigin}`), 'robots.txt host is wrong')
assert.ok(robots.includes(`Sitemap: ${finalOrigin}/sitemap.xml`), 'robots.txt sitemap is wrong')
assert.ok(!robots.includes('ttamasmarketing.com'), 'Old domain remains in robots.txt')

const sitemapResponse = await request('/sitemap.xml')
assert.equal(sitemapResponse.status, 200, 'sitemap.xml must return 200')
const sitemap = await sitemapResponse.text()
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1])
assert.deepEqual(sitemapUrls.sort(), publicPages.map(path => `${finalOrigin}${path}`).sort(), 'Sitemap must contain exactly the public Kiszely Marketing URLs')
assert.ok(!sitemap.includes('ttamasmarketing.com'), 'Old domain remains in sitemap.xml')

console.log('Launch verification passed:', { baseUrl, routes: ['/', '/hu', ...publicPages, '/en/', '/nem-letezo-oldal/', '/robots.txt', '/sitemap.xml'] })
