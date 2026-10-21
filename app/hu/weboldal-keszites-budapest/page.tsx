import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { ArticleCard, ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/weboldal-keszites-budapest/`
const title = 'Weboldal készítés Budapest | Kisvállalkozásoknak'
const description = 'Professzionális, mobilbarát weboldal-készítés Budapesten és országosan. Átlátható csomagok kisvállalkozásoknak 160.000 Ft-tól.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'website', images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Kiszely Marketing – weboldal-készítés' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}

const features = [
  ['Egyedi dizájn', 'A vállalkozáshoz és a célközönséghez igazított megjelenés.'],
  ['Mobilbarát kialakítás', 'Telefonon, táblagépen és asztali gépen is jól használható oldal.'],
  ['Kapcsolatfelvételi űrlap', 'Egyszerű út az érdeklődéstől az üzenetküldésig.'],
  ['Foglalási lehetőség', 'Időpontfoglaló vagy ajánlatkérő folyamat, ha a projekt igényli.'],
  ['Keresőbarát alapok', 'Indexelhető oldalak, egyértelmű címek, leírások és technikai alapok.'],
  ['Gyors betöltés', 'Optimalizált képek és a szükséges funkciókra koncentráló felépítés.'],
] as const

const projectQuestions = [
  ['Cél és célközönség', 'Mit kell megértenie vagy megtennie a látogatónak, és kinek szól az ajánlat?'],
  ['Tartalom és arculat', 'Mely szövegek, képek és arculati elemek állnak rendelkezésre, és miben szükséges segítség?'],
  ['Funkciók és hozzáférések', 'Kell-e foglalás, mérés vagy külső rendszer, és ki kezeli a domaint, tárhelyet és hozzáféréseket?'],
  ['Jóváhagyás és átadás', 'Ki ad végleges visszajelzést, hány módosítási kör része az ajánlatnak, és mi történik az átadás után?'],
] as const

const serviceData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteUrl}/#service-weboldal-keszites`,
  name: 'Weboldal készítés',
  serviceType: 'Professzionális weboldal-készítés kisvállalkozásoknak',
  url: canonicalUrl,
  provider: { '@id': `${siteUrl}/#organization` },
  areaServed: [{ '@type': 'City', name: 'Budapest' }, { '@type': 'Country', name: 'Magyarország' }],
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '160000',
    priceCurrency: 'HUF',
    offerCount: '2',
  },
}

export default function WebsiteBudapestPage() {
  return (
    <ContentPage>
      <main>
        <PageHero
          eyebrow="Weboldal készítés · Budapest és országosan"
          title="Weboldal-készítés kisvállalkozásoknak, Budapesten és országosan."
          lead={<><p>Érthető szerkezet, mobilbarát megjelenés és egyszerű kapcsolatfelvétel. A tartalmat és a funkciókat az Ön céljaihoz igazítjuk, a terjedelmet és a díjat pedig előre, írásban rögzítjük.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/hu/kapcsolat/" className="button-primary">Ajánlatot kérek <ArrowRight data-icon="inline-end" /></Link><a href="#csomagok" className="button-outline">Csomagok és árak</a></div></>}
          breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Weboldal készítés Budapest' }]}
        />

        <section className="section">
          <div className="site-shell flex flex-col gap-12">
            <SectionHeading eyebrow="Mit kap?" title="A szükséges alapok egy rendszerben." description="Az oldal célja nem az, hogy technikai kifejezésekkel terhelje Önt, hanem hogy a látogató gyorsan megértse az ajánlatot és könnyen kapcsolatba léphessen." />
            <div className="grid gap-px border-y border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {features.map(([heading, text], index) => <article key={heading} className="flex min-h-56 flex-col justify-between gap-8 bg-background p-7 lg:p-9"><span className="font-serif text-3xl text-primary">0{index + 1}</span><div><h2 className="text-xl font-bold">{heading}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell flex flex-col gap-10">
            <SectionHeading eyebrow="Indulás előtt" title="A fontos döntéseket előre, írásban tisztázzuk." description="Így nem csak az ár lesz egyértelmű: a tartalomért, hozzáférésekért, jóváhagyásért és későbbi működtetésért való felelősség is követhető marad." />
            <div className="grid gap-5 md:grid-cols-2">
              {projectQuestions.map(([heading, text]) => <article key={heading} className="rounded-2xl border border-border bg-background p-7"><h2 className="text-xl font-bold">{heading}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="csomagok" className="section muted-section">
          <div className="site-shell flex flex-col gap-12">
            <SectionHeading eyebrow="Árak" title="Átlátható weboldalcsomagok." description="A végleges tartalmat, funkciókat és árat az egyeztetés után, írásban rögzítjük." />
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="price-card">
                <p className="eyebrow">Weboldal</p><h2>Starter</h2><strong>160.000–200.000 Ft</strong><p>Professzionális, mobilbarát bemutatkozó weboldal.</p>
                <p><strong>Minden fontos elem egy oldalon.</strong> Az ajánlat, a bemutatkozás és a kapcsolatfelvétel egyetlen, könnyen átlátható oldalon jelenik meg.</p>
                <ul>{['Egyedi dizájn', 'Mobilbarát kialakítás', 'Kapcsolatfelvételi űrlap', 'Keresőbarát technikai alapok'].map(item => <li key={item}><Check />{item}</li>)}</ul>
                <Link href="/hu/kapcsolat/" className="button-outline">Ajánlatot kérek <ArrowRight data-icon="inline-end" /></Link>
              </article>
              <article className="price-card featured">
                <p className="eyebrow">Weboldal</p><h2>Premium</h2><strong>250.000 Ft+</strong><p>Összetettebb igényekre, több oldallal és funkcióval.</p>
                <p><strong>Külön aloldalak minden fontos témának.</strong> A szolgáltatások, a vállalkozás bemutatása és a korábbi munkák külön oldalakon kaphatnak helyet.</p>
                <ul>{['Több tartalmi aloldal', 'Egyedi funkciók', 'Foglalási rendszerek', 'Fejlett keresőbarát alapok'].map(item => <li key={item}><Check />{item}</li>)}</ul>
                <Link href="/hu/kapcsolat/" className="button-primary">Ajánlatot kérek <ArrowRight data-icon="inline-end" /></Link>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <SectionHeading eyebrow="A folyamat" title="Az egyeztetéstől az átadásig." description="Egy egyszerűbb bemutatkozó weboldal általában 1–2 hét alatt készül el. A pontos idő a tartalom és a funkciók mennyiségétől függ." />
            <ol className="grid gap-5 sm:grid-cols-2">
              {[
                ['01', 'Igényfelmérés', 'Tisztázzuk a célt, a célközönséget, az oldalak számát és a szükséges funkciókat.'],
                ['02', 'Szerkezet és tartalom', 'Meghatározzuk, milyen információt milyen sorrendben kell bemutatni.'],
                ['03', 'Dizájn és fejlesztés', 'Elkészül a mobilbarát megjelenés és a szükséges működés.'],
                ['04', 'Ellenőrzés és átadás', 'Átnézzük a működést, a kapcsolatfelvételt és az indexelhetőség technikai alapjait.'],
              ].map(([number, heading, text]) => <li key={number} className="rounded-2xl border border-border bg-card p-6"><span className="font-serif text-3xl text-primary">{number}</span><h2 className="mt-5 text-xl font-bold">{heading}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="section muted-section">
          <div className="site-shell grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1"><SectionHeading eyebrow="Gyakori kérdések" title="Amit érdemes előre tisztázni." /></div>
            <div className="space-y-7 lg:col-span-2">
              <article><h2 className="text-xl font-bold">Csak budapesti vállalkozásoknak készül weboldal?</h2><p className="mt-3 leading-relaxed text-muted-foreground">Nem. Az együttműködés online történik, ezért Budapest mellett Magyarország más részeiről is vállalunk projekteket.</p></article>
              <article><h2 className="text-xl font-bold">Önálló szolgáltatás a weboldal-készítés?</h2><p className="mt-3 leading-relaxed text-muted-foreground">Igen. A weboldal-készítés külön szolgáltatás, és nem szükséges hozzá Google Térkép Top 3 csomagot választani.</p></article>
              <article><h2 className="text-xl font-bold">Garantálja a weboldal az első Google-helyezést?</h2><p className="mt-3 leading-relaxed text-muted-foreground">Nem. A weboldal keresőbarát technikai és tartalmi alapokkal készül, de egy konkrét organikus helyezést felelősen nem lehet garantálni.</p></article>
              <article><h2 className="text-xl font-bold">Ki biztosítja a szöveget és a képeket?</h2><p className="mt-3 leading-relaxed text-muted-foreground">Ezt a projekt előtt tisztázzuk. Írásban rögzítjük, mely anyagokat adja át Ön, és mely tartalmi feladatokhoz kér segítséget.</p></article>
              <article><h2 className="text-xl font-bold">Mi történik a domainnel, tárhellyel és hozzáférésekkel?</h2><p className="mt-3 leading-relaxed text-muted-foreground">Az ajánlatban rögzítjük, milyen szolgáltatások szükségesek, ki a tulajdonosuk vagy kezelőjük, és milyen egyszeri vagy ismétlődő díj tartozik hozzájuk.</p></article>
              <article><h2 className="text-xl font-bold">Hány módosítás fér bele?</h2><p className="mt-3 leading-relaxed text-muted-foreground">A módosítási körök számát és a jóváhagyás menetét a konkrét ajánlat tartalmazza. Az új funkció vagy a jóváhagyott terjedelem későbbi bővítése külön egyeztetést igényelhet.</p></article>
              <article><h2 className="text-xl font-bold">Mit tartalmaz az átadás?</h2><p className="mt-3 leading-relaxed text-muted-foreground">Az átadás előtt ellenőrizzük a mobilos és asztali megjelenést, a linkeket, a kapcsolatfelvételt és az indexelhetőség technikai alapjait. Az átadás pontos tartalma és a későbbi támogatás az írásos ajánlat része.</p></article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell flex flex-col gap-10">
            <SectionHeading eyebrow="Weboldal-készítési útmutatók" title="Részletes válaszok az ajánlatkérés előtt." description="A kapcsolódó útmutatók segítenek meghatározni a szükséges oldalstruktúrát, tartalmat, időkeretet és technikai alapokat." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <ArticleCard href="/hu/tudastar/weboldal-keszites-arak-2026/" title="Weboldal-készítés árak 2026-ban" description="Mi határozza meg a végleges összeget, és hogyan hasonlíthatók össze az ajánlatok?" />
              <ArticleCard href="/hu/tudastar/egyoldalas-vagy-tobboldalas-weboldal/" title="Egyoldalas vagy többoldalas weboldal?" description="Mikor elég egy bemutatkozó oldal, és mikor indokoltak külön aloldalak?" />
              <ArticleCard href="/hu/tudastar/mennyi-ido-alatt-keszul-el-egy-weboldal/" title="Mennyi idő alatt készül el?" description="A munkafázisok, az irányadó idő és a leggyakoribb késések." />
              <ArticleCard href="/hu/tudastar/keresobarat-weboldal-mit-jelent/" title="Mit jelent a keresőbarát weboldal?" description="Technikai hozzáférhetőség, hasznos tartalom és hitelesség egy rendszerben." />
              <ArticleCard href="/hu/tudastar/weboldal-keszites-elokeszites/" title="Mire van szükség a kezdéshez?" description="Gyakorlati ellenőrzőlista tartalomhoz, hozzáférésekhez és jóváhagyáshoz." />
              <ArticleCard href="/hu/tudastar/legjobb-weboldalkeszito-magyarorszagon/" title="Hogyan válasszon weboldalkészítőt?" description="Program vagy szakember, és milyen kérdéseket tegyen fel ajánlatkérés előtt?" />
            </div>
          </div>
        </section>

        <ContactBand title="Mondja el, milyen weboldalra van szüksége." />
      </main>
      <JsonLd data={serviceData} />
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Weboldal készítés Budapest', url: canonicalUrl }])} />
    </ContentPage>
  )
}
