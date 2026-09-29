const siteUrl = 'https://www.kiszelymarketing.com'
const host = 'www.kiszelymarketing.com'
const key = 'bc8b780878dc40d5ab398ab4c13ab26a'
const keyLocation = `${siteUrl}/${key}.txt`
const sitemapUrl = `${siteUrl}/sitemap.xml`

const sitemapResponse = await fetch(sitemapUrl)

if (!sitemapResponse.ok) {
  throw new Error(`Could not read ${sitemapUrl}: HTTP ${sitemapResponse.status}`)
}

const sitemap = await sitemapResponse.text()
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])

if (urlList.length === 0) {
  throw new Error(`No URLs were found in ${sitemapUrl}`)
}

for (const value of urlList) {
  const url = new URL(value)

  if (url.protocol !== 'https:' || url.hostname !== host) {
    throw new Error(`Refusing to submit a non-production URL: ${value}`)
  }
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
})

if (response.status !== 200 && response.status !== 202) {
  throw new Error(`IndexNow rejected the submission: HTTP ${response.status} ${await response.text()}`)
}

console.log(`IndexNow accepted ${urlList.length} URL(s) with HTTP ${response.status}.`)
