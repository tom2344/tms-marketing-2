import type { Metadata } from 'next'
import { ArticleCard, ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/tudastar/`
const title = 'Helyi keresési és weboldal-készítési tudástár'
const description = 'Közérthető útmutatók a Google Térkép rangsorolásáról, az organikus találatokról és a kisvállalkozói weboldalak megtervezéséről.'

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
    { '@type': 'Article', url: `${canonicalUrl}google-cegprofil-kategoria-valasztas/`, headline: 'Google Cégprofil-kategória választása lépésről lépésre' },
    { '@type': 'Article', url: `${canonicalUrl}szolgaltatasi-terulet-beallitas/`, headline: 'Google Cégprofil szolgáltatási terület beállítása' },
    { '@type': 'Article', url: `${canonicalUrl}helyi-helyezesmero-racs/`, headline: 'Helyi helyezésmérő rács: mit mutat és hogyan mérünk?' },
    { '@type': 'Article', url: `${canonicalUrl}weboldal-keszites-arak-2026/`, headline: 'Weboldal-készítés árak 2026-ban: mitől függ a végösszeg?' },
    { '@type': 'Article', url: `${canonicalUrl}egyoldalas-vagy-tobboldalas-weboldal/`, headline: 'Egyoldalas vagy többoldalas weboldal: melyik a jobb választás?' },
    { '@type': 'Article', url: `${canonicalUrl}mennyi-ido-alatt-keszul-el-egy-weboldal/`, headline: 'Mennyi idő alatt készül el egy céges weboldal?' },
    { '@type': 'Article', url: `${canonicalUrl}keresobarat-weboldal-mit-jelent/`, headline: 'Mit jelent valójában a keresőbarát weboldal?' },
    { '@type': 'Article', url: `${canonicalUrl}weboldal-keszites-elokeszites/`, headline: 'Mire van szükség a weboldal-készítés megkezdéséhez?' },
  ],
}

export default function KnowledgeHubPage() {
  return (
    <ContentPage>
      <main>
        <PageHero
          eyebrow="Tudástár"
          title="Helyi láthatóság és weboldalak, érthetően."
          lead={<p>Gyakorlati útmutatók a Google Térkép, az organikus keresés és a kisvállalkozói weboldalak megtervezéséhez. A bizonytalanságokat nem rejtjük el, a külső állításokat pedig elsődleges forrásokhoz kötjük.</p>}
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

        <section className="section">
          <div className="site-shell flex flex-col gap-10">
            <SectionHeading eyebrow="Weboldal-készítés" title="Döntések az ajánlatkérés előtt." description="Árak, oldalstruktúra, ütemezés, keresőbarát alapok és egy gyakorlati előkészítési ellenőrzőlista." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <ArticleCard href="/hu/tudastar/weboldal-keszites-arak-2026/" title="Weboldal-készítés árak 2026-ban" description="Csomagok, költségtényezők és az ajánlatok összehasonlításának szempontjai." />
              <ArticleCard href="/hu/tudastar/egyoldalas-vagy-tobboldalas-weboldal/" title="Egyoldalas vagy többoldalas weboldal?" description="Mikor elég egy bemutatkozó oldal, és mikor szükségesek külön aloldalak?" />
              <ArticleCard href="/hu/tudastar/mennyi-ido-alatt-keszul-el-egy-weboldal/" title="Mennyi idő alatt készül el?" description="Munkafázisok, irányadó idő és a leggyakoribb késések." />
              <ArticleCard href="/hu/tudastar/keresobarat-weboldal-mit-jelent/" title="Mit jelent a keresőbarát weboldal?" description="Technikai hozzáférhetőség, hasznos tartalom és hitelesség." />
              <ArticleCard href="/hu/tudastar/weboldal-keszites-elokeszites/" title="Mire van szükség a kezdéshez?" description="Tartalom, arculat, hozzáférések és jóváhagyás egy ellenőrzőlistában." />
            </div>
          </div>
        </section>

        <section className="section muted-section">
          <div className="site-shell flex flex-col gap-10">
            <SectionHeading eyebrow="Gyakorlati beállítások és mérés" title="A következő lépések részletesen." description="Egy kérdés, egy önálló útmutató: kategóriadöntés, szolgáltatási terület és összehasonlítható helyezésmérés." />
            <div className="grid gap-5 md:grid-cols-3">
              <ArticleCard href="/hu/tudastar/google-cegprofil-kategoria-valasztas/" title="Google Cégprofil-kategória választása" description="A fő és további kategóriák kiválasztása a Google hivatalos szabályai alapján." />
              <ArticleCard href="/hu/tudastar/szolgaltatasi-terulet-beallitas/" title="Szolgáltatási terület beállítása" description="Útmutató kiszálló és hibrid vállalkozásoknak a címről és a kiszolgált területről." />
              <ArticleCard href="/hu/tudastar/helyi-helyezesmero-racs/" title="Helyi helyezésmérő rács" description="Mit mutat a területi mérés, és hogyan marad összehasonlítható az eredmény?" />
            </div>
          </div>
        </section>

        <section className="section">
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
