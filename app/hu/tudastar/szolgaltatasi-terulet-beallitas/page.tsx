import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { ArticleCard, ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/tudastar/szolgaltatasi-terulet-beallitas/`
const title = 'Google Cégprofil szolgáltatási terület beállítása'
const description = 'Google Cégprofil útmutató kiszálló és hibrid vállalkozásoknak: cím elrejtése, szolgáltatási területek, jogosultság és gyakori hibák.'
const published = '2026-10-04'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'article', publishedTime: published, modifiedTime: published, authors: [`${siteUrl}/hu/rolunk/`], images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: title }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}

const businessTypes = [
  ['Üzlethelyiséggel működő vállalkozás', 'Az ügyfeleket a megadott címen, a közzétett nyitvatartási időben fogadja. A cím megjelenhet a profilban.'],
  ['Szolgáltatási területes vállalkozás', 'Az ügyfélhez kiszáll vagy kézbesít, de a saját címén nem fogad ügyfeleket. A címet el kell rejteni, és a valós szolgáltatási területet kell megadni.'],
  ['Hibrid vállalkozás', 'Az ügyfeleket a saját, megfelelően jelzett helyszínén is fogadja, és ki is száll hozzájuk. A cím és a szolgáltatási terület együtt szerepelhet.'],
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

export default function ServiceAreaGuidePage() {
  return (
    <ContentPage>
      <main>
        <PageHero
          eyebrow="Tudástár · 8 perc"
          title={title}
          lead={<><p>A szolgáltatási terület azt mutatja meg, hol keresi fel a vállalkozás az ügyfeleit. Nem helyettesít egy valós működési címet, és nem tesz jogosulttá egy kizárólag online vállalkozást a Google Cégprofil használatára.</p><p className="mt-4 text-base">Szerző: Tamás · Frissítve: 2026. október 4.</p></>}
          breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Tudástár', href: '/hu/tudastar/' }, { label: title }]}
        />

        <article>
          <section className="section">
            <div className="site-shell flex flex-col gap-10">
              <SectionHeading eyebrow="Először a működési forma" title="Három helyzetet kell megkülönböztetni." description="A cím láthatóságát nem marketingcél, hanem az dönti el, hogy az ügyfél valóban felkeresheti-e ott a vállalkozást." />
              <div className="grid gap-5 lg:grid-cols-3">{businessTypes.map(([heading, text]) => <section key={heading} className="rounded-2xl border border-border bg-card p-7"><h2 className="font-serif text-3xl">{heading}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{text}</p></section>)}</div>
            </div>
          </section>

          <section className="section muted-section">
            <div className="site-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
              <SectionHeading eyebrow="Beállítás" title="A terület legyen pontos és ténylegesen kiszolgálható." />
              <div>
                <ul className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  {[
                    'A területek település, irányítószám vagy a Google által felajánlott más földrajzi egység alapján adhatók meg.',
                    'Legfeljebb 20 szolgáltatási terület állítható be.',
                    'A Google iránymutatása szerint a teljes terület határa lehetőleg ne legyen körülbelül két órányi autóútnál messzebb a vállalkozás bázisától.',
                    'A korábbi sugaras beállítás már nem szerkeszthető; helyette konkrét földrajzi területeket kell választani.',
                    'Ha a vállalkozás a címén nem fogad ügyfeleket, a címet el kell rejteni a nyilvános profilból.',
                    'Egy szolgáltatási területes vállalkozás általában egy profillal képviseli a teljes kiszolgált területét.',
                  ].map(item => <li key={item} className="flex gap-3"><Check className="mt-1 size-5 shrink-0 text-primary" />{item}</li>)}
                </ul>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="site-shell grid gap-8 lg:grid-cols-2">
              <article className="rounded-2xl border border-border bg-card p-7 lg:p-9"><p className="eyebrow">Példa</p><h2 className="mt-4 font-serif text-4xl">Kiszálló szakember</h2><p className="mt-6 leading-relaxed text-muted-foreground">Egy vízvezeték-szerelő, aki az ügyfelek otthonában dolgozik, de a saját címén nem fogad látogatókat, szolgáltatási területes vállalkozás. A valós címet az igazoláshoz megadhatja, de a nyilvános profilban el kell rejtenie, és csak a ténylegesen vállalt településeket vagy területeket szabad felsorolnia.</p></article>
              <article className="rounded-2xl border border-border bg-card p-7 lg:p-9"><p className="eyebrow">Fontos korlát</p><h2 className="mt-4 font-serif text-4xl">A terület nem helyezési kapcsoló</h2><p className="mt-6 leading-relaxed text-muted-foreground">Egy település hozzáadása nem garantál ott jobb helyezést. A Google helyi találatait a relevancia, a távolság és az ismertség együtt alakítja. A szolgáltatási terület elsősorban az ügyfelek tájékoztatására szolgál arról, hol érhető el a vállalkozás.</p></article>
            </div>
          </section>

          <section className="section muted-section">
            <div className="site-shell max-w-4xl">
              <p className="eyebrow">Jogosultság</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Az online szolgáltatás önmagában nem elég.</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground"><p>A Google Cégprofilhoz a vállalkozásnak személyesen kapcsolatba kell lépnie az ügyfelekkel: vagy a saját helyszínén fogadja őket, vagy kiszáll hozzájuk. Egy kizárólag online működő vállalkozás nem válik jogosulttá attól, hogy szolgáltatási területként Magyarországot vagy Budapestet választja.</p><p>Virtuális iroda, postafiók vagy nem valós ügyfélfogadási cím használata felfüggesztési kockázatot jelenthet. A profil létrehozása előtt ezért mindig a tényleges működési modellt kell tisztázni.</p></div>
              <div className="mt-8 rounded-2xl border border-border bg-background p-6 text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Elsődleges források:</strong>{' '}<a href="https://support.google.com/business/answer/9157481?hl=hu" target="_blank" rel="noreferrer" className="text-primary underline">Szolgáltatási területek kezelése</a>,{' '}<a href="https://support.google.com/business/answer/2853879?hl=hu" target="_blank" rel="noreferrer" className="text-primary underline">A vállalkozás címének kezelése</a>{' '}és{' '}<a href="https://support.google.com/business/answer/7091?hl=hu" target="_blank" rel="noreferrer" className="text-primary underline">A helyi rangsorolás javítása</a>.</div>
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/hu/google-terkep-top-3/" className="button-primary">Google Térkép Top 3 szolgáltatás</Link><Link href="/hu/tudastar/google-cegprofil-optimalizalas/" className="button-outline">Cégprofil-ellenőrzőlista</Link></div>
            </div>
          </section>

          <section className="section">
            <div className="site-shell flex flex-col gap-8"><SectionHeading eyebrow="Kapcsolódó útmutatók" title="A terület mellett ezeket is rögzítse." /><div className="grid gap-5 md:grid-cols-2"><ArticleCard href="/hu/tudastar/google-cegprofil-kategoria-valasztas/" title="Google Cégprofil-kategória választása" description="A fő és további kategóriák szerepe, kiválasztása és gyakori hibái." /><ArticleCard href="/hu/tudastar/helyi-helyezesmero-racs/" title="Helyi helyezésmérő rács" description="Miért nem elég egyetlen telefonról ellenőrizni a térképes sorrendet?" /></div></div>
          </section>
        </article>

        <ContactBand title="Állítsuk be a profilt a vállalkozás valós működése alapján." />
      </main>
      <JsonLd data={articleData} />
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Tudástár', url: `${siteUrl}/hu/tudastar/` }, { name: title, url: canonicalUrl }])} />
    </ContentPage>
  )
}
