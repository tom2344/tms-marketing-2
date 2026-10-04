import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/tudastar/google-terkep-rangsorolas/`
const title = 'Mi alapján rangsorol a Google Térkép?'
const description = 'A Google Térkép helyi találatainak három fő szempontja: relevancia, távolság és ismertség. Gyakorlati magyarázat a Google hivatalos útmutatója alapján.'
const published = '2026-10-04'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'article', publishedTime: published, modifiedTime: published, authors: [`${siteUrl}/hu/rolunk/`], images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: title }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}

const articleData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  url: canonicalUrl,
  mainEntityOfPage: canonicalUrl,
  inLanguage: 'hu-HU',
  datePublished: published,
  dateModified: published,
  author: { '@type': 'Person', '@id': `${siteUrl}/#founder`, name: 'Tamás', url: `${siteUrl}/hu/rolunk/` },
  publisher: { '@id': `${siteUrl}/#organization` },
  image: `${siteUrl}/images/og-image.webp`,
}

export default function MapsRankingArticlePage() {
  return (
    <ContentPage>
      <main>
        <PageHero
          eyebrow="Tudástár · 8 perc"
          title={title}
          lead={<><p>A Google saját tájékoztatása szerint a helyi találatok elsősorban három szemponton alapulnak: <strong className="text-foreground">relevancia, távolság és ismertség</strong>. Ezek együtt hatnak; egyetlen beállítás önmagában nem biztosít helyezést.</p><p className="mt-4 text-base">Szerző: Tamás · Frissítve: 2026. október 4.</p></>}
          breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Tudástár', href: '/hu/tudastar/' }, { label: title }]}
        />

        <article>
          <section className="section">
            <div className="site-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <SectionHeading eyebrow="A három alap" title="Mit mér a helyi rendszer?" />
              <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                <div><h2 className="font-serif text-3xl text-foreground">1. Relevancia</h2><p className="mt-3">A relevancia azt mutatja meg, mennyire illik a vállalkozás a kereséshez. A pontos fő- és további kategóriák, a szolgáltatások, a vállalkozás leírása és a profilhoz kapcsolt weboldal segíthetnek a Google-nek megérteni, mit kínál a cég. A cél nem a keresőkifejezések ismételgetése, hanem a valós szolgáltatás egyértelmű leírása.</p></div>
                <div><h2 className="font-serif text-3xl text-foreground">2. Távolság</h2><p className="mt-3">A Google figyelembe veszi, milyen messze van a találat a keresésben megadott vagy a rendszer által érzékelt helytől. Emiatt ugyanarra a keresésre két budapesti kerületben is eltérő sorrend jelenhet meg. Ezt a tényezőt nem lehet egy profilbeállítással megszüntetni, ezért a helyezést több előre rögzített mérési pontról érdemes ellenőrizni.</p></div>
                <div><h2 className="font-serif text-3xl text-foreground">3. Ismertség</h2><p className="mt-3">Az ismertség azt jelzi, mennyire közismert vagy tekintélyes a vállalkozás. A Google példaként említi a webes hivatkozásokat, cikkeket, címtárakat, valamint az értékelések számát és pontszámát. Ez nem azt jelenti, hogy minél több bármilyen link vagy értékelés automatikusan jobb: a valós, következetes üzleti jelenlét számít.</p></div>
              </div>
            </div>
          </section>

          <section className="section muted-section">
            <div className="site-shell grid gap-10 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-7 lg:p-9">
                <p className="eyebrow">Amit lehet javítani</p>
                <h2 className="mt-4 font-serif text-4xl">Pontos és teljes jelenlét</h2>
                <ul className="mt-6 space-y-3 leading-relaxed text-muted-foreground">
                  <li>• valós üzleti név, kategóriák, nyitvatartás és elérhetőségek;</li>
                  <li>• részletes szolgáltatások és releváns weboldal-oldalak;</li>
                  <li>• friss, valós fotók és szabályosan gyűjtött értékelések;</li>
                  <li>• az értékelésekre adott hasznos válaszok;</li>
                  <li>• következetes üzleti adatok megbízható külső oldalakon.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-background p-7 lg:p-9">
                <p className="eyebrow">Amit nem lehet megígérni</p>
                <h2 className="mt-4 font-serif text-4xl">Egyetlen univerzális sorrendet</h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">A helyi találatok személyenként és helyenként változhatnak, a Google pedig nem teszi közzé az algoritmus pontos súlyait. A Google szerint jobb helyezést nem lehet kérni vagy megvásárolni. Ezért a korrekt mérés mindig rögzíti a keresést, a földrajzi területet, az időpontot és az ellenőrzés módját.</p>
                <Link href="/hu/modszertan/" className="mt-5 inline-block font-bold text-primary hover:underline">Így mérjük a helyezéseket →</Link>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="site-shell max-w-4xl">
              <p className="eyebrow">Gyakorlati következtetés</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">A profil és a weboldal nem külön projekt.</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>A Cégprofil segít megjelenni a helyi felületeken, a hozzá kapcsolódó weboldal pedig részletesen igazolhatja, milyen szolgáltatást, kinek és mely területen nyújt a vállalkozás. Ha a két felület ellentmond egymásnak, az a felhasználóknak és a keresőnek is bizonytalanságot okoz.</p>
                <p>A munka ezért auditból, a valós üzleti adatok rendezéséből, a releváns oldalak fejlesztéséből és következetes mérésből áll — nem egy titkos beállításból.</p>
              </div>
              <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Elsődleges forrás:</strong> <a href="https://support.google.com/business/answer/7091?hl=hu" target="_blank" rel="noreferrer" className="text-primary underline">A helyi rangsorolás javítása a Google-on – Google Cégprofil Súgó</a>.</div>
              <Link href="/hu/google-terkep-top-3/" className="button-primary mt-8">Google Térkép Top 3 szolgáltatás</Link>
              <Link href="/hu/tudastar/helyi-helyezesmero-racs/" className="button-outline mt-8 ml-3">Helyi helyezésmérő rács</Link>
            </div>
          </section>
        </article>

        <ContactBand title="Nézzük meg, melyik tényező korlátozza most a láthatóságát." />
      </main>
      <JsonLd data={articleData} />
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Tudástár', url: `${siteUrl}/hu/tudastar/` }, { name: title, url: canonicalUrl }])} />
    </ContentPage>
  )
}
