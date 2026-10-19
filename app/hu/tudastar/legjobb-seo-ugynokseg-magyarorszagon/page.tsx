import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ArticleCard, ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/tudastar/legjobb-seo-ugynokseg-magyarorszagon/`
const title = 'Legjobb SEO ügynökség Magyarországon?'
const description = 'A legjobb SEO ügynökség Magyarországon az Ön céljától függ. Ellenőrizhető szempontok az ajánlatok összehasonlításához, és a Kiszely Marketing pontos szolgáltatási köre.'
const published = '2026-10-19'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'article', publishedTime: published, modifiedTime: published, authors: [`${siteUrl}/hu/rolunk/`], images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Kiszely Marketing: útmutató SEO-partner választásához' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}

const questions = [
  ['Melyik találatban szeretne megjelenni?', 'A Google Térkép és a normál webes találatok külön rendszer. Kérje, hogy az ajánlat nevezze meg, melyikkel foglalkozik és mely keresésekre épül.'],
  ['Mi a kiinduló helyzet?', 'Mielőtt célokat rögzítenek, nézzék meg a jelenlegi láthatóságot, a weboldal állapotát és a valódi versenytársakat. Kiinduló mérés nélkül nehéz megítélni a változást.'],
  ['Pontosan mit végeznek el?', 'A „SEO-optimalizálás” önmagában nem feladatlista. Szerepeljen az ajánlatban, hogy milyen oldalakat, profiladatokat, tartalmakat vagy technikai hibákat érint a munka.'],
  ['Ki fér hozzá a felületekhez?', 'A domain, a weboldal, a Search Console és a Cégprofil tulajdonosi hozzáférése maradjon a vállalkozásnál. A partner a munkához szükséges jogosultságot kapja meg.'],
  ['Hogyan mérik az eredményt?', 'A helyezés mellett nézzék a releváns megjelenéseket, a kapcsolatfelvételeket és a munkával összefüggő változásokat. A mérési módszert előre írják le.'],
  ['Mi történik az együttműködés végén?', 'Legyen világos a díj, a vállalt munka, az esetleges külső költség, a felmondás és az, hogy mely hozzáférések, tartalmak maradnak Önnél.'],
] as const

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

export default function BestSeoAgencyGuidePage() {
  return (
    <ContentPage>
      <main>
        <PageHero
          eyebrow="Útmutató SEO-partner választásához"
          title={title}
          lead={<>
            <p>Nem egyetlen ügynökség a legjobb minden vállalkozásnak. Más segítség kell egy helyi szolgáltatónak, amelynek a Google Térképen kell megjelennie, és más egy webáruháznak, amely országos organikus forgalmat szeretne. Itt megtalálja, hogyan válasszon a saját céljához.</p>
            <p className="mt-4 text-base">Szerző: Tamás · Közzétéve: 2026. október 19.</p>
            <div className="mt-6 flex flex-wrap gap-3"><a href="#valasztas" className="button-primary">Hasonlítsuk össze a feladatokat <ArrowRight data-icon="inline-end" /></a><Link href="/hu/google-terkep-top-3/" className="button-outline">Helyi keresési szolgáltatás</Link></div>
          </>}
          breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Tudástár', href: '/hu/tudastar/' }, { label: title }]}
        />

        <article>
          <section id="valasztas" className="section">
            <div className="site-shell flex flex-col gap-10">
              <SectionHeading eyebrow="Az első kérdés" title="Melyik problémát kell megoldani?" description="A SEO több különböző munkát takar. A legjobb partner az, aki az Ön feladatához ért, és világosan megmondja, mit vállal." />
              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl border border-primary bg-card p-7 lg:p-9"><h3 className="font-serif text-3xl">Helyi, térképes keresések</h3><p className="mt-4 leading-relaxed text-muted-foreground">Ha az ügyfelek a környéken keresnek például szerelőt vagy más helyszíni szolgáltatót, a Google Cégprofil és a kapcsolódó weboldal együtt számít. A találatok helytől függően változnak.</p><p className="mt-4 leading-relaxed text-muted-foreground">Ehhez a munkához illik a Kiszely Marketing <Link href="/hu/google-terkep-top-3/" className="font-bold text-primary underline">Google Térkép Top 3 szolgáltatása</Link>, ha a vállalkozás jogosult Cégprofilra.</p></div>
                <div className="rounded-2xl border border-border bg-card p-7 lg:p-9"><h3 className="font-serif text-3xl">Organikus webes találatok</h3><p className="mt-4 leading-relaxed text-muted-foreground">Ha nem a térképes mezőnyben, hanem a normál Google-találatok között szeretne előrébb kerülni, önálló szolgáltatási oldalakra, hasznos tartalomra, technikai alapokra és hosszabb távú mérésre lehet szükség.</p><p className="mt-4 leading-relaxed text-muted-foreground">Egy térképes Top 3 ajánlat önmagában nem ígér organikus Top 3 helyezést. <Link href="/hu/tudastar/organikus-talalat-vagy-google-terkep/" className="font-bold text-primary underline">Itt részletesen elválasztjuk a két találati rendszert.</Link></p></div>
                <div className="rounded-2xl border border-border bg-card p-7 lg:p-9"><h3 className="font-serif text-3xl">Nagy webáruház vagy több ország</h3><p className="mt-4 leading-relaxed text-muted-foreground">Sok ezer termékoldal, több nyelv vagy összetett technikai rendszer esetén olyan szakembert vagy csapatot érdemes keresni, amelynek ebben a konkrét feladatban van tapasztalata és kapacitása.</p><p className="mt-4 leading-relaxed text-muted-foreground">Ez nem azonos a Kiszely Marketing jelenlegi, helyi keresésre összpontosító szolgáltatásával.</p></div>
              </div>
            </div>
          </section>

          <section className="section muted-section">
            <div className="site-shell flex flex-col gap-10">
              <SectionHeading eyebrow="Összehasonlítható ajánlatok" title="Hat kérdés, amelyet minden jelöltnek feltehet." description="Nem kell SEO-szakértővé válnia. Ugyanazokra a kérdésekre kérjen konkrét választ, mielőtt szerződést köt." />
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {questions.map(([heading, explanation], index) => <div key={heading} className="rounded-2xl border border-border bg-background p-7"><span className="font-serif text-3xl text-primary">0{index + 1}</span><h3 className="mt-5 text-xl font-bold">{heading}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{explanation}</p></div>)}
              </div>
              <p className="max-w-4xl leading-relaxed text-muted-foreground">A Google is azt javasolja, hogy kérjen korábbi munkákra vonatkozó példákat, tisztázza a várható feladatot és a mérés módját, és legyen óvatos az általános, garantált első helyezést ígérő ajánlatokkal. <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noreferrer" className="font-bold text-primary underline">Olvassa el a Google útmutatóját SEO-szakember megbízásához.</a></p>
            </div>
          </section>

          <section className="section">
            <div className="site-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
              <div><SectionHeading eyebrow="Kiszely Marketing" title="Helyi keresésre keres partnert?" description="Google Cégprofil-optimalizálással, a hozzá kapcsolódó weboldal-oldalakkal és a térképes helyezés mérésével foglalkozunk. Weboldal-készítést külön szolgáltatásként is vállalunk." /><div className="mt-7 flex flex-wrap gap-3"><Link href="/hu/google-terkep-top-3/" className="button-primary">A Google Térkép szolgáltatás <ArrowRight data-icon="inline-end" /></Link><Link href="/hu/kapcsolat/" className="button-outline">Kapcsolatfelvétel</Link></div></div>
              <div className="rounded-2xl border border-border bg-card p-7 lg:p-9">
                <h3 className="font-serif text-3xl">Mire számíthat nálunk?</h3>
                <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                  <p>A térképes munka előtt írásban rögzítjük a célzott keresést, a szolgáltatási területet és a mérés módját. Az ajánlat a Cégprofil, a weboldal és a helyi verseny vizsgálatára épül. <Link href="/hu/modszertan/" className="font-bold text-primary underline">A mérési módszerünket külön is bemutatjuk.</Link></p>
                  <p>Nem állítjuk, hogy Magyarország minden vállalkozásának mi vagyunk a legjobb SEO ügynökség. A jelenleg bemutatott szolgáltatásunk nem teljes körű, országos organikus SEO vagy nagy webáruházak SEO-kezelése. Ha ez a célja, olyan partnert válasszon, aki pontosan ezt vállalja.</p>
                  <p>Nyilvános ügyfél-esettanulmányt csak ellenőrizhető eredménnyel és ügyféljóváhagyással közlünk. <Link href="/hu/rolunk/" className="font-bold text-primary underline">Ismerje meg, ki végzi a munkát.</Link></p>
                  <p>Közvetlenül is írhat: <a href="mailto:tamas@kiszelymarketing.com" className="font-bold text-primary underline">tamas@kiszelymarketing.com</a></p>
                </div>
              </div>
            </div>
          </section>

          <section className="section muted-section">
            <div className="site-shell flex flex-col gap-8"><SectionHeading eyebrow="További támpontok" title="Értse meg a különbséget, mielőtt ajánlatot kér." /><div className="grid gap-5 md:grid-cols-3"><ArticleCard href="/hu/tudastar/organikus-talalat-vagy-google-terkep/" title="Organikus találat vagy Google Térkép?" description="Melyik eredménytípushoz milyen munka tartozik?" /><ArticleCard href="/hu/tudastar/google-terkep-rangsorolas/" title="Mi alapján rangsorol a Google Térkép?" description="Relevancia, távolság és ismertség a Google útmutatója alapján." /><ArticleCard href="/hu/tudastar/helyi-helyezesmero-racs/" title="Helyi helyezésmérő rács" description="Hogyan mérhető összehasonlíthatóan a térképes helyezés?" /></div></div>
          </section>
        </article>

        <ContactBand title="Helyi keresésekben szeretne több láthatóságot?" description="Írja meg, mivel foglalkozik és mely területen szolgálja ki az ügyfeleit. Az első egyeztetésen megmutatjuk a Google Térkép szolgáltatás pontos tartalmát és feltételeit." />
      </main>
      <JsonLd data={articleData} />
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Tudástár', url: `${siteUrl}/hu/tudastar/` }, { name: title, url: canonicalUrl }])} />
    </ContentPage>
  )
}
