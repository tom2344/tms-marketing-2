import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.kiszelymarketing.com'
  const lastModified = new Date('2026-10-04T00:00:00+03:00')

  return [
    { url: `${siteUrl}/hu/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/hu/google-terkep-top-3/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/hu/weboldal-keszites-budapest/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/hu/tudastar/`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${siteUrl}/hu/tudastar/google-terkep-rangsorolas/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/hu/tudastar/google-cegprofil-optimalizalas/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/hu/tudastar/organikus-talalat-vagy-google-terkep/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/hu/modszertan/`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/hu/rolunk/`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteUrl}/hu/kapcsolat/`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
  ]
}
