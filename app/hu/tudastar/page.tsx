import type { Metadata } from 'next'
import { ArticleCard, ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/tudastar/`
const title = 'Helyi keresési és weboldal-készítési tudástár'
const description = 'Közérthető, forrásokra épülő útmutatók a Google Térkép rangsorolásáról, a Google Cégprofil beállításairól és az organikus találatok működéséről.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'website', images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Kiszely Marketing tudástár' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}

const collectionData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: title,
  description,
  url: canonicalUrl,
  inLanguage: 'hu-HU',
  isPartOf: { '@id': `${siteUrl}/#website` },
  hasPart: [
    { '@type': 'Article', url: `${canonicalUrl}google-terkep-rangsorolas/`, headline: 'Mi alapján rangsorol a Google Térkép?' },
    { '@type': 'Article', url: `${canonicalUrl}google-cegprofil-optimalizalas/`, headline: 'Google Cégprofil-optimalizálási ellenőrzőlista' },
    { '@type': 'Article', url: `${canonicalUrl}organikus-talalat-vagy-google-terkep/`, headline: 'Organikus találat vagy Google Térkép?' },
  ],
}

export default function KnowledgeHubPage() {
  return (
    <ContentPage>
      <main>
        <PageHero
          eyebrow="Tudástár"
          title="Helyi láthatóság, érthetően."
          lead={<p>Gyakorlati útmutatók arról, hogyan működik a Google Térkép és az organikus keresés. Az állításokat elsődleges forrásokhoz kötjük, a bizonytalanságokat pedig nem rejtjük el.</p>}
          breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Tudástár' }]}
        />

        <section className="section">
          <div className="site-shell flex flex-col gap-10">
            <SectionHeading eyebrow="Kezdő útmutatók" title="Először a döntéshez szükséges alapok." description="A tartalmak nem helyettesítik az egyedi auditot: a verseny, a keresési hely és a vállalkozás valós helyzete minden esetben számít." />
            <div className="grid gap-5 md:grid-cols-3">
              <ArticleCard href="/hu/tudastar/google-terkep-rangsorolas/" title="Mi alapján rangsorol a Google Térkép?" description="A relevancia, a távolság és az ismertség szerepe a Google hivatalos útmutatója alapján." />
              <ArticleCard href="/hu/tudastar/google-cegprofil-optimalizalas/" title="Google Cégprofil-optimalizálási ellenőrzőlista" description="A jogosultságtól és kategóriáktól az értékeléseken át a kapcsolódó weboldalig." />
              <ArticleCard href="/hu/tudastar/organikus-talalat-vagy-google-terkep/" title="Organikus találat vagy Google Térkép?" description="Két külön találati rendszer, eltérő belépési feltételekkel és lehetőségekkel." />
            </div>
          </div>
        </section>

        <section className="section muted-section">
          <div className="site-shell grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Szerkesztési elv</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Nem a cikkek száma a cél.</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>Minden útmutató egy konkrét kérdést válaszol meg, és a kapcsolódó szolgáltatás felé vezet. Nem készítünk egymást ismétlő, pusztán egy városnévvel vagy keresőkifejezéssel átírt oldalakat.</p>
              <p>A későbbi esettanulmányok csak mérhető eredménnyel, ellenőrizhető bizonyítékokkal és az ügyfél publikálási engedélyével kerülhetnek fel.</p>
            </div>
          </div>
        </section>

        <ContactBand />
      </main>
      <JsonLd data={collectionData} />
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Tudástár', url: canonicalUrl }])} />
    </ContentPage>
  )
}
