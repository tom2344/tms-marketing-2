import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { ArticleCard, ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/tudastar/helyi-helyezesmero-racs/`
const title = 'Helyi helyezésmérő rács: mit mutat és hogyan mérünk?'
const description = 'A Google Térkép-helyezés területi mérése: rögzített keresés, mérési pontok, összehasonlíthatóság, korlátok és a Kiszely Marketing módszere.'
const published = '2026-10-04'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'article', publishedTime: published, modifiedTime: published, authors: [`${siteUrl}/hu/rolunk/`], images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: title }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}

const fixedInputs = [
  'A pontos keresőkifejezés',
  'A vizsgált Google Cégprofil',
  'A földrajzi terület és a mérési pontok',
  'A pontok közötti távolság vagy a rács kiterjedése',
  'A mérés dátuma és az alkalmazott ellenőrzési mód',
  'Az induló és az összehasonlító mérés azonos beállításai',
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

export default function LocalRankGridGuidePage() {
  return (
    <ContentPage>
      <main>
        <PageHero
          eyebrow="Tudástár · 10 perc"
          title={title}
          lead={<><p>A helyi találatok a kereső földrajzi helyétől függhetnek. A helyezésmérő rács ugyanazt a keresést több, előre meghatározott pontról vizsgálja, így egyetlen rangsorszám helyett területi képet ad.</p><p className="mt-4 text-base">Szerző: Tamás · Frissítve: 2026. október 4.</p></>}
          breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Tudástár', href: '/hu/tudastar/' }, { label: title }]}
        />

        <article>
          <section className="section">
            <div className="site-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
              <SectionHeading eyebrow="Miért kell több pont?" title="A helyi sorrend nem egyetlen állandó lista." />
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>A Google hivatalos útmutatója szerint a helyi találatok fő tényezői a relevancia, a távolság és az ismertség. Mivel a távolság a kereső helyéhez kapcsolódik, ugyanaz a vállalkozás ugyanarra a keresésre eltérő pozícióban jelenhet meg két különböző városrészben.</p>
                <p>Egy saját telefonon végzett keresés ezért nem írja le megbízhatóan a teljes szolgáltatási területet. A rácsos mérés több földrajzi ponthoz rendel egy megfigyelt helyezést, majd térképszerűen mutatja meg a különbségeket.</p>
                <p>A helyezésmérő rács nem a Google hivatalos rangsorolási jelentése és nem tárja fel az algoritmust. Egy következetesen alkalmazott külső mérési módszer, amelynek értéke az azonos feltételek melletti összehasonlíthatóság.</p>
              </div>
            </div>
          </section>

          <section className="section muted-section">
            <div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <SectionHeading eyebrow="Összehasonlíthatóság" title="Ezeket előre rögzíteni kell." description="Ha a keresés, a terület vagy a pontok közötti távolság megváltozik, az új eredmény már nem közvetlenül hasonlítható a kiinduló méréshez." />
              <div className="grid gap-4 sm:grid-cols-2">{fixedInputs.map(item => <div key={item} className="flex gap-3 rounded-xl border border-border bg-background p-5"><Check className="mt-0.5 size-5 shrink-0 text-primary" /><p>{item}</p></div>)}</div>
            </div>
          </section>

          <section className="section">
            <div className="site-shell flex flex-col gap-10">
              <SectionHeading eyebrow="Kiszely Marketing" title="Így kapcsolódik a mérés a Top 3 vállaláshoz." />
              <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {[
                  ['01', 'Megállapodás', 'A munka előtt írásban rögzítjük a fő keresőkifejezést, a szolgáltatási területet és az ellenőrzés módját.'],
                  ['02', 'Kiinduló mérés', 'Az elfogadott területen és beállításokkal rögzítjük a kezdő állapotot.'],
                  ['03', 'Azonos követés', 'A változást ugyanazon keresés és mérési keret alapján követjük, hogy az eredmények összehasonlíthatók maradjanak.'],
                  ['04', '90. napi ellenőrzés', 'A vállalás teljesülését kizárólag az előre rögzített keresés, terület és mérési mód alapján ellenőrizzük.'],
                ].map(([number, heading, text]) => <li key={number} className="rounded-2xl border border-border bg-card p-7"><span className="font-serif text-3xl text-primary">{number}</span><h2 className="mt-5 text-xl font-bold">{heading}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></li>)}
              </ol>
              <p className="max-w-4xl text-lg leading-relaxed text-muted-foreground">A Top 3 vállalás nem azt jelenti, hogy minden felhasználó, minden eszköz és minden földrajzi pont ugyanazt a sorrendet látja. A pontos elfogadási feltételeket ezért a projekt kezdete előtt, nem pedig az eredmények ismeretében határozzuk meg.</p>
            </div>
          </section>

          <section className="section muted-section">
            <div className="site-shell grid gap-8 lg:grid-cols-2">
              <article className="rounded-2xl border border-border bg-background p-7 lg:p-9"><p className="eyebrow">Mit mutat?</p><h2 className="mt-4 font-serif text-4xl">A láthatóság területi mintázatát</h2><p className="mt-6 leading-relaxed text-muted-foreground">Megmutathatja, hogy a vizsgált profil hol jelenik meg erősebben vagy gyengébben ugyanarra a keresésre, és hogyan változik ez a rögzített mérési pontokon az idő során.</p></article>
              <article className="rounded-2xl border border-border bg-background p-7 lg:p-9"><p className="eyebrow">Mit nem mutat?</p><h2 className="mt-4 font-serif text-4xl">Önmagában üzleti eredményt</h2><p className="mt-6 leading-relaxed text-muted-foreground">A jobb térképes helyezés nem azonos automatikusan több bevétellel. A rács mellett a Cégprofil teljesítményében látható interakciókat, például a webhelykattintásokat, hívásgomb-kattintásokat és útvonaltervezéseket, valamint a vállalkozás saját érdeklődési adatait is külön kell értékelni.</p></article>
            </div>
          </section>

          <section className="section">
            <div className="site-shell max-w-4xl">
              <p className="eyebrow">Korlátok és források</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">A mérés bizonyíték, nem jóslat.</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground"><p>A találatok idővel változhatnak, a Google pedig nem közli a rangsorolási tényezők pontos súlyát. Egy mérés pillanatfelvétel; a trendet ismételt, azonos feltételű mérések mutatják meg.</p><p>A Cégprofil saját teljesítményadatai és a weboldal analitikája más kérdésekre válaszolnak. Ezeket nem szabad összekeverni a rácson megfigyelt helyezéssel.</p></div>
              <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Elsődleges források:</strong>{' '}<a href="https://support.google.com/business/answer/7091?hl=hu" target="_blank" rel="noreferrer" className="text-primary underline">A helyi rangsorolás tényezői</a>{' '}és{' '}<a href="https://support.google.com/business/answer/9918094?hl=hu" target="_blank" rel="noreferrer" className="text-primary underline">A Cégprofil teljesítményadatainak értelmezése</a>.</div>
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/hu/google-terkep-top-3/" className="button-primary">Google Térkép Top 3 szolgáltatás</Link><Link href="/hu/modszertan/" className="button-outline">Kiszely mérési módszertan</Link></div>
            </div>
          </section>

          <section className="section muted-section">
            <div className="site-shell flex flex-col gap-8"><SectionHeading eyebrow="Kapcsolódó útmutatók" title="Értse meg, mitől változhat a rács." /><div className="grid gap-5 md:grid-cols-2"><ArticleCard href="/hu/tudastar/google-terkep-rangsorolas/" title="Mi alapján rangsorol a Google Térkép?" description="A relevancia, a távolság és az ismertség szerepe a helyi eredményekben." /><ArticleCard href="/hu/tudastar/szolgaltatasi-terulet-beallitas/" title="Szolgáltatási terület beállítása" description="Mit jelent a szolgáltatási terület, és mit nem változtat meg a rangsorban?" /></div></div>
          </section>
        </article>

        <ContactBand title="Rögzítsük előre, hol és hogyan mérjük a cél teljesülését." />
      </main>
      <JsonLd data={articleData} />
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Tudástár', url: `${siteUrl}/hu/tudastar/` }, { name: title, url: canonicalUrl }])} />
    </ContentPage>
  )
}
