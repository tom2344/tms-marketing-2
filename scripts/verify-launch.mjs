import assert from 'node:assert/strict'

const baseUrl = process.env.VERIFY_BASE_URL ?? 'http://127.0.0.1:3000'
const finalOrigin = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${finalOrigin}/hu/`

const request = (path, options = {}) => fetch(new URL(path, baseUrl), { redirect: 'manual', ...options })

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
assert.ok(sitemap.includes(`<loc>${canonicalUrl}</loc>`), 'Sitemap is missing /hu/')
assert.ok(!sitemap.includes('ttamasmarketing.com'), 'Old domain remains in sitemap.xml')

console.log('Launch verification passed:', { baseUrl, routes: ['/', '/hu', '/hu/', '/en/', '/nem-letezo-oldal/', '/robots.txt', '/sitemap.xml'] })
