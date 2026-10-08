import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { ArticleCard, ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/tudastar/legjobb-weboldalkeszito-magyarorszagon/`
const title = 'Legjobb weboldalkészítő Magyarországon? Így válasszon'
const description = 'Legjobb weboldalkészítő Magyarországon? Nézze meg, mikor elég egy weboldalkészítő program, mikor érdemes szakembert választani, és hogyan dolgozik a Kiszely Marketing.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'article', publishedTime: '2026-10-08', modifiedTime: '2026-10-08', authors: [`${siteUrl}/hu/rolunk/`], images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Kiszely Marketing: útmutató a weboldalkészítő kiválasztásához' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}

const criteria = [
  ['Érti az üzleti célt?', 'Az ajánlat előtt tisztázza, kinek szól az oldal, mit kell megértenie a látogatónak, és hogyan tud kapcsolatba lépni Önnel.'],
  ['Pontosan mit kap?', 'Legyen világos az oldalak száma, a szövegek és képek feladata, az űrlap, valamint minden külön kért funkció.'],
  ['Működik telefonon is?', 'A szöveg, a navigáció és a kapcsolatfelvétel kis képernyőn is legyen könnyen használható.'],
  ['Tiszták a hozzáférések?', 'Kérdezzen rá, kié a domain és a tárhely, ki kezeli a szolgáltatásokat, és mit kap meg az átadáskor.'],
  ['Van keresőbarát alapja?', 'Az oldal legyen indexelhető, jól tagolt és technikailag hozzáférhető. Egy adott Google-helyezést ettől még nem lehet ígérni.'],
  ['Mi szerepel az ajánlatban?', 'A végleges díj, a határidő, a módosítási körök és az esetleges külső költségek legyenek írásban rögzítve.'],
] as const

const articleData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  url: canonicalUrl,
  mainEntityOfPage: canonicalUrl,
  inLanguage: 'hu-HU',
  datePublished: '2026-10-08',
  dateModified: '2026-10-08',
  author: { '@type': 'Person', '@id': `${siteUrl}/#founder`, name: 'Tamás', url: `${siteUrl}/hu/rolunk/` },
  publisher: { '@id': `${siteUrl}/#organization` },
  image: `${siteUrl}/images/og-image.webp`,
}

export default function BestWebsiteCreatorGuidePage() {
  return (
    <ContentPage>
      <main>
        <PageHero
          eyebrow="Weboldal-készítési útmutató"
          title="Legjobb weboldalkészítő Magyarországon?"
          lead={<>
            <p>Nem ugyanaz a jó választás annak, aki maga szeretné összeállítani az oldalát, és annak, aki egy szakemberre bízná a tervezést és a kivitelezést. Az alábbi szempontok segítenek dönteni. Ha weboldalt szeretne készíttetni, megmutatjuk azt is, miben tud segíteni a Kiszely Marketing.</p>
            <p className="mt-4 text-base">Szerző: Tamás · Frissítve: 2026. október 8.</p>
            <div className="mt-6 flex flex-wrap gap-3"><Link href="/hu/kapcsolat/" className="button-primary">Kérek egy ajánlatot <ArrowRight data-icon="inline-end" /></Link><a href="#szempontok" className="button-outline">Mire figyeljek?</a></div>
          </>}
          breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Tudástár', href: '/hu/tudastar/' }, { label: 'Legjobb weboldalkészítő Magyarországon?' }]}
        />

        <article>
          <section className="section">
            <div className="site-shell flex flex-col gap-10">
              <SectionHeading eyebrow="Az első döntés" title="Programot használna, vagy szakembert keres?" description="A weboldalkészítő szó mindkettőt jelentheti. Érdemes először eldönteni, melyik munkát szeretné saját maga elvégezni." />
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-7 lg:p-9"><h2 className="font-serif text-3xl">Saját kezű építés</h2><p className="mt-4 leading-relaxed text-muted-foreground">Egy szerkesztőprogram megfelelő lehet, ha van ideje a szövegre, a képekre, az oldal felépítésére és a későbbi frissítésekre. Ilyenkor a technikai eszköz adott, de a döntések és a kivitelezés nagy része Önnél marad.</p></div>
                <div className="rounded-2xl border border-primary bg-card p-7 lg:p-9"><h2 className="font-serif text-3xl">Szakemberrel készülő oldal</h2><p className="mt-4 leading-relaxed text-muted-foreground">Ha inkább a vállalkozására koncentrálna, kérhet segítséget a szerkezet, a megjelenés és a működés megtervezéséhez. Itt nem csupán egy eszközt választ: azt is tisztázza, ki mit vállal a kész oldalig és az átadásig.</p></div>
              </div>
            </div>
          </section>

          <section id="szempontok" className="section muted-section">
            <div className="site-shell flex flex-col gap-10">
              <SectionHeading eyebrow="Hat ellenőrizhető szempont" title="Ezek alapján hasonlítsa össze az ajánlatokat." description="A látvány fontos, de önmagában nem mondja el, milyen oldalt kap és hogyan fogja használni. Ugyanazokat a kérdéseket tegye fel minden jelöltnek." />
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {criteria.map(([heading, explanation], index) => <div key={heading} className="rounded-2xl border border-border bg-background p-7"><span className="font-serif text-3xl text-primary">0{index + 1}</span><h3 className="mt-5 text-xl font-bold">{heading}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{explanation}</p></div>)}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="site-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
              <div><SectionHeading eyebrow="Kiszely Marketing" title="Weboldal az Ön céljaihoz, világos feladatokkal." description="Ha nem csak egy weboldalkészítő eszközt, hanem kivitelezőt keres, szívesen megbeszéljük az Ön projektjét. Magyarországi vállalkozásokkal online is együtt dolgozunk." /><div className="mt-7 flex flex-wrap gap-3"><Link href="/hu/weboldal-keszites-budapest/" className="button-primary">Szolgáltatás és csomagok <ArrowRight data-icon="inline-end" /></Link><Link href="/hu/kapcsolat/" className="button-outline">Kapcsolatfelvétel</Link></div></div>
              <div className="rounded-2xl border border-border bg-card p-7 lg:p-9">
                <h3 className="font-serif text-3xl">Így dolgozunk</h3>
                <ul className="mt-6 space-y-5">
                  <li className="flex gap-3"><Check className="mt-1 size-5 shrink-0 text-primary" /><span>Tamás személyesen válaszol a megkeresésekre, és a célok tisztázásával kezdjük a munkát.</span></li>
                  <li className="flex gap-3"><Check className="mt-1 size-5 shrink-0 text-primary" /><span>Egyoldalas bemutatkozó és többoldalas céges weboldal is kérhető. A terjedelmet az igények alapján választjuk meg.</span></li>
                  <li className="flex gap-3"><Check className="mt-1 size-5 shrink-0 text-primary" /><span>A mobilos használhatóságot, a kapcsolatfelvételt és a keresőbarát technikai alapokat az oldal részeként kezeljük.</span></li>
                  <li className="flex gap-3"><Check className="mt-1 size-5 shrink-0 text-primary" /><span>A pontos tartalmat, funkciókat, határidőt és díjat a kezdés előtt írásban rögzítjük.</span></li>
                </ul>
                <p className="mt-6 leading-relaxed text-muted-foreground">Nem állítjuk, hogy minden vállalkozásnak mi vagyunk a legjobb választás, és nem ígérünk garantált organikus első helyet. <Link href="/hu/rolunk/" className="font-bold text-primary underline">Ismerje meg, ki áll a Kiszely Marketing mögött.</Link></p>
                <p className="mt-4 leading-relaxed text-muted-foreground">Közvetlenül is írhat: <a href="mailto:tamas@kiszelymarketing.com" className="font-bold text-primary underline">tamas@kiszelymarketing.com</a></p>
              </div>
            </div>
          </section>

          <section className="section muted-section">
            <div className="site-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
              <SectionHeading eyebrow="Ajánlatkérés előtt" title="Három kérdés, amire jó választ kell kapnia." />
              <div className="space-y-7">
                <div><h3 className="text-xl font-bold">Miért ennyi oldal és funkció szükséges?</h3><p className="mt-3 leading-relaxed text-muted-foreground">A javaslat kapcsolódjon a céljához és a rendelkezésre álló tartalomhoz, ne csak egy előre összeállított funkciólistához.</p></div>
                <div><h3 className="text-xl font-bold">Mi tartozik a vállalt árba?</h3><p className="mt-3 leading-relaxed text-muted-foreground">Legyen egyértelmű a szövegek és képek előkészítése, a módosítások száma, az esetleges külső szolgáltatások díja és az átadás tartalma.</p></div>
                <div><h3 className="text-xl font-bold">Hogyan lesz az oldalból kapcsolatfelvétel?</h3><p className="mt-3 leading-relaxed text-muted-foreground">A látogató értse meg az ajánlatát, találjon választ a fő kérdéseire, és könnyen elérje Önt. Egy szép felület önmagában még nem oldja meg ezt.</p></div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="site-shell flex flex-col gap-8"><SectionHeading eyebrow="Kapcsolódó útmutatók" title="A döntés részletei." /><div className="grid gap-5 md:grid-cols-3"><ArticleCard href="/hu/tudastar/egyoldalas-vagy-tobboldalas-weboldal/" title="Egyoldalas vagy többoldalas?" description="Melyik felépítés illik a szolgáltatásaihoz?" /><ArticleCard href="/hu/tudastar/weboldal-keszites-arak-2026/" title="Weboldal-készítés árak" description="Mit tartalmazzon egy összehasonlítható ajánlat?" /><ArticleCard href="/hu/tudastar/keresobarat-weboldal-mit-jelent/" title="Mit jelent a keresőbarát alap?" description="Mire jó a technikai felépítés, és mire nem garancia?" /></div></div>
          </section>
        </article>

        <ContactBand title="Beszéljünk az Ön weboldaláról." description="Írja meg, mivel foglalkozik és milyen oldalra van szüksége. Megbeszéljük a szükséges tartalmat és funkciókat, majd írásban rögzítjük az ajánlatot." />
      </main>
      <JsonLd data={articleData} />
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Tudástár', url: `${siteUrl}/hu/tudastar/` }, { name: 'Legjobb weboldalkészítő Magyarországon?', url: canonicalUrl }])} />
    </ContentPage>
  )
}
