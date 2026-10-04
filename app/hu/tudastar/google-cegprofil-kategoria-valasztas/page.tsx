import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, X } from 'lucide-react'
import { ArticleCard, ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/tudastar/google-cegprofil-kategoria-valasztas/`
const title = 'Google Cégprofil-kategória választása lépésről lépésre'
const description = 'Hogyan válasszon fő- és további kategóriákat a Google Cégprofilhoz? Gyakorlati útmutató a Google hivatalos irányelvei alapján.'
const published = '2026-10-04'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'article', publishedTime: published, modifiedTime: published, authors: [`${siteUrl}/hu/rolunk/`], images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: title }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}

const steps = [
  ['1. Fogalmazza meg, mi a vállalkozás', 'A kategória a vállalkozás egészét írja le, nem egyetlen terméket vagy szolgáltatást. A Google szemléletes szabálya: azt fejezze ki, hogy „ez a vállalkozás egy…”, ne azt, hogy „ennek a vállalkozásnak van…”.'],
  ['2. Válassza a legpontosabb elérhető kategóriát', 'A Google előre meghatározott listájából lehet választani; saját kategória nem hozható létre. Ha nincs pontos megfelelő, a legközelebbi általános kategória a helyes választás.'],
  ['3. A fő kategória legyen a központi tevékenység', 'A fő kategória azt a valós üzleti tevékenységet jelölje, amely legjobban meghatározza a vállalkozást. Ne pusztán a legfontosabb keresőkifejezést másolja.'],
  ['4. Csak indokolt további kategóriákat adjon hozzá', 'További kategória akkor indokolt, ha a vállalkozás ténylegesen végzi azt a tevékenységet. Nem szükséges minden szolgáltatáshoz külön kategóriát keresni.'],
  ['5. Ellenőrizze a teljes online jelenlétet', 'A weboldal szolgáltatásai, a Cégprofil és a külső üzleti adatok ugyanazt a valós működést mutassák. A kategória nem pótolja a részletes, hiteles weboldalt.'],
  ['6. Dokumentálja a változtatást', 'Jegyezze fel a módosítás dátumát és a korábbi beállítást. A Google kategóriaváltoztatás után új igazolást is kérhet, ezért ne változtassa a kategóriákat indok nélkül.'],
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

export default function BusinessProfileCategoryGuidePage() {
  return (
    <ContentPage>
      <main>
        <PageHero
          eyebrow="Tudástár · 9 perc"
          title={title}
          lead={<><p>A kategóriák segítenek a Google-nek és a keresőknek megérteni, mivel foglalkozik a vállalkozás. A cél nem minél több kategória hozzáadása, hanem a valós főtevékenység lehető legpontosabb leírása.</p><p className="mt-4 text-base">Szerző: Tamás · Frissítve: 2026. október 4.</p></>}
          breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Tudástár', href: '/hu/tudastar/' }, { label: title }]}
        />

        <article>
          <section className="section">
            <div className="site-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
              <SectionHeading eyebrow="Fő kategória" title="Az első mező különösen fontos." description="A Google szerint a kiválasztott kategóriák hatással lehetnek a helyi rangsorolásra. A fő kategória legyen a legpontosabb válasz arra, hogy milyen vállalkozásról van szó." />
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>A kategória nem szabadon írható bemutatkozás. A Google által felkínált kategóriák közül kell választani, és a lehető legpontosabb, a valós működést leíró elemet kell elsődlegessé tenni.</p>
                <p>Például egy pékséget is működtető élelmiszerbolt fő kategóriája lehet élelmiszerbolt, a pékség pedig további kategória. Egy különálló, önállóan működő részleg azonban saját profilra is jogosult lehet; ezt nem érdemes a fő vállalkozás kategóriái közé rejteni.</p>
                <p>A kategória bizonyos profilfunkciókat is befolyásolhat. Éttermeknél megjelenhetnek étlap- vagy rendelési lehetőségek, egyes szolgáltatóknál pedig foglalási funkciók válhatnak elérhetővé.</p>
              </div>
            </div>
          </section>

          <section className="section muted-section">
            <div className="site-shell flex flex-col gap-10">
              <SectionHeading eyebrow="Hat lépés" title="Így hozható meg védhető kategóriadöntés." />
              <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {steps.map(([heading, text]) => <li key={heading} className="rounded-2xl border border-border bg-background p-7"><h2 className="text-xl font-bold">{heading}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{text}</p></li>)}
              </ol>
            </div>
          </section>

          <section className="section">
            <div className="site-shell grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-primary/30 bg-accent/40 p-7 lg:p-9">
                <p className="eyebrow">Helyes megközelítés</p>
                <h2 className="mt-4 font-serif text-4xl">Kevés, pontos, igazolható kategória</h2>
                <ul className="mt-6 space-y-3 text-muted-foreground">{['A fő kategória a vállalkozás központi tevékenysége.', 'A további kategóriák valóban végzett tevékenységeket jelölnek.', 'A weboldal tartalma alátámasztja a választást.', 'A módosítás előtt és után rögzítve van az állapot.'].map(item => <li key={item} className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-primary" />{item}</li>)}</ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-7 lg:p-9">
                <p className="eyebrow">Kerülendő</p>
                <h2 className="mt-4 font-serif text-4xl">A kategória nem kulcsszólista</h2>
                <ul className="mt-6 space-y-3 text-muted-foreground">{['Nem valós tevékenység hozzáadása csak a helyezésért.', 'Minden termék vagy szolgáltatás külön kategóriává alakítása.', 'A versenytárs kategóriáinak gondolkodás nélküli másolása.', 'Gyakori változtatás mérési terv és üzleti indok nélkül.'].map(item => <li key={item} className="flex gap-3"><X className="mt-0.5 size-5 shrink-0 text-destructive" />{item}</li>)}</ul>
              </div>
            </div>
          </section>

          <section className="section muted-section">
            <div className="site-shell max-w-4xl">
              <p className="eyebrow">Forrás és következő lépés</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">A kategória csak az egyik helyi jel.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">A pontos kategória segíti a relevancia értelmezését, de nem írja felül a kereső és a vállalkozás közötti távolságot, és nem helyettesíti az ismertséget, az értékeléseket vagy a kapcsolódó weboldalt.</p>
              <div className="mt-8 rounded-2xl border border-border bg-background p-6 text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Elsődleges források:</strong>{' '}<a href="https://support.google.com/business/answer/7249669?hl=hu" target="_blank" rel="noreferrer" className="text-primary underline">A vállalkozási kategória kezelése</a>{' '}és{' '}<a href="https://support.google.com/business/answer/3038177?hl=hu" target="_blank" rel="noreferrer" className="text-primary underline">Irányelvek a vállalkozás Google-on való megjelenítéséhez</a>.</div>
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/hu/google-terkep-top-3/" className="button-primary">Google Térkép Top 3 szolgáltatás</Link><Link href="/hu/tudastar/google-cegprofil-optimalizalas/" className="button-outline">Teljes Cégprofil-ellenőrzőlista</Link></div>
            </div>
          </section>

          <section className="section">
            <div className="site-shell flex flex-col gap-8"><SectionHeading eyebrow="Kapcsolódó útmutatók" title="A kategória után ezeket ellenőrizze." /><div className="grid gap-5 md:grid-cols-2"><ArticleCard href="/hu/tudastar/szolgaltatasi-terulet-beallitas/" title="Szolgáltatási terület beállítása" description="Mikor kell elrejteni a címet, és hogyan adható meg szabályosan a kiszolgált terület?" /><ArticleCard href="/hu/tudastar/google-terkep-rangsorolas/" title="Mi alapján rangsorol a Google Térkép?" description="A relevancia, a távolság és az ismertség szerepe a helyi találatokban." /></div></div>
          </section>
        </article>

        <ContactBand title="Ellenőrizzük, hogy a kategóriák a valós főtevékenységet mutatják-e." />
      </main>
      <JsonLd data={articleData} />
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Tudástár', url: `${siteUrl}/hu/tudastar/` }, { name: title, url: canonicalUrl }])} />
    </ContentPage>
  )
}
