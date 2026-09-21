const siteUrl = 'https://www.kiszelymarketing.com'
const homeUrl = `${siteUrl}/hu/`

const organizationId = `${siteUrl}/#organization`
const founderId = `${siteUrl}/#founder`
const mapsServiceId = `${siteUrl}/#service-google-terkep-top-3`
const websiteServiceId = `${siteUrl}/#service-weboldal-keszites`

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'Kiszely Marketing',
      url: homeUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/kiszely-logo.webp`,
      },
      image: `${siteUrl}/images/og-image.webp`,
      email: 'tamas@kiszelymarketing.com',
      areaServed: {
        '@type': 'Country',
        name: 'Magyarország',
      },
      founder: { '@id': founderId },
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@id': mapsServiceId } },
        { '@type': 'Offer', itemOffered: { '@id': websiteServiceId } },
      ],
    },
    {
      '@type': 'Person',
      '@id': founderId,
      name: 'Tamás',
      jobTitle: 'Alapító',
      worksFor: { '@id': organizationId },
      image: `${siteUrl}/images/tamas-founder.webp`,
    },
    {
      '@type': 'Service',
      '@id': mapsServiceId,
      name: 'Google Térkép Top 3',
      serviceType: 'Google Cégprofil- és weboldal-optimalizálás helyi keresésekhez',
      provider: { '@id': organizationId },
      areaServed: { '@type': 'Country', name: 'Magyarország' },
      url: `${homeUrl}#top3`,
    },
    {
      '@type': 'Service',
      '@id': websiteServiceId,
      name: 'Weboldal készítés',
      serviceType: 'Professzionális weboldal-készítés kisvállalkozásoknak',
      provider: { '@id': organizationId },
      areaServed: { '@type': 'Country', name: 'Magyarország' },
      url: `${homeUrl}#weboldal`,
    },
  ],
}

export function StructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
}
