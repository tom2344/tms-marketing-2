import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/tudastar/organikus-talalat-vagy-google-terkep/`
const title = 'Organikus találat vagy Google Térkép?'
const description = 'Miért kerülhet előre egy weboldal a normál Google-találatok között akkor is, ha a vállalkozás nem jelenik meg a Térképen? Különbségek és gyakorlati stratégia.'
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

export default function OrganicVsMapsArticlePage() {
  return (
    <ContentPage>
      <main>
        <PageHero
          eyebrow="Tudástár · 7 perc"
          title={title}
          lead={<><p>A Google találati oldalán egymás mellett jelenhetnek meg fizetett hirdetések, térképes helyi találatok és normál — organikus — webes találatok. Ezek nem ugyanannak a rangsornak a részei.</p><p className="mt-4 text-base">Szerző: Tamás · Frissítve: 2026. október 4.</p></>}
          breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Tudástár', href: '/hu/tudastar/' }, { label: title }]}
        />

        <article>
          <section className="section">
            <div className="site-shell grid gap-6 lg:grid-cols-2">
              <section className="rounded-2xl border border-border bg-card p-7 lg:p-9">
                <p className="eyebrow">Organikus találatok</p>
                <h2 className="mt-4 font-serif text-4xl">Weboldalakat rangsorolnak.</h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">Itt egy részletes szolgáltatási oldal akkor is megjelenhet, ha a vállalkozásnak nincs Google Cégprofilja. A kereső azt próbálja eldönteni, melyik weboldal adja a leghasznosabb és legmegbízhatóbb választ a keresésre.</p>
                <ul className="mt-5 space-y-3 leading-relaxed text-muted-foreground"><li>• önálló, egyértelmű keresési szándékot kiszolgáló oldal;</li><li>• feltérképezhető technikai felépítés és helyes canonical;</li><li>• hasznos tartalom, belső hivatkozások és külső említések;</li><li>• a vállalkozás és a szerző kilétének átláthatósága.</li></ul>
              </section>
              <section className="rounded-2xl border border-primary/30 bg-accent/40 p-7 lg:p-9">
                <p className="eyebrow">Térképes találatok</p>
                <h2 className="mt-4 font-serif text-4xl">Jogosult helyi vállalkozásokat rangsorolnak.</h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">A térképes megjelenéshez jogosult és megfelelően kezelt Google Cégprofil szükséges. A sorrendet többek között a relevancia, a keresőtől mért távolság és a vállalkozás ismertsége befolyásolja.</p>
                <ul className="mt-5 space-y-3 leading-relaxed text-muted-foreground"><li>• valós helyszín vagy személyes kiszállás;</li><li>• pontos kategóriák és üzleti adatok;</li><li>• értékelések, fotók és profilaktivitás;</li><li>• a kapcsolódó weboldal és külső üzleti jelenlét.</li></ul>
              </section>
            </div>
          </section>

          <section className="section muted-section">
            <div className="site-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
              <SectionHeading eyebrow="Ezért láthat eltérő eredményt" title="Lehet valaki elöl a webes listán, de hiányozhat a térképről." />
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>Egy erős szolgáltatási oldal a normál találatok között jó helyet érhet el akkor is, ha nincs hozzá Cégprofil. Ez különösen olyan szolgáltatásnál fordulhat elő, amelyet távolról vagy országosan is lehet nyújtani.</p>
                <p>A térképes mezőnyben viszont a helyi jogosultság és a fizikai közelség is szerepet kap. Egy kizárólag online működő szolgáltató ezért összpontosíthat szabályosan az organikus találatokra, de nem hozhat létre fiktív címmel profilt a térképes rész megszerzéséhez.</p>
                <p>A két csatorna kiegészítheti egymást, ha a vállalkozás mindkettőre jogosult. Ettől még külön kell mérni őket: az organikus pozíció nem bizonyít térképes Top 3 helyezést, és fordítva.</p>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="site-shell max-w-4xl">
              <p className="eyebrow">Melyikre érdemes építeni?</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">A valós üzleti modell dönti el.</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p><strong className="text-foreground">Helyi, személyes szolgáltatásnál</strong> a Cégprofil és a hozzá illeszkedő szolgáltatási oldalak együtt fontosak. Ilyen lehet például egy fogorvos, szerelő vagy helyszínre járó szakember.</p>
                <p><strong className="text-foreground">Online szolgáltatásnál</strong> az önálló, valóban hasznos kereskedelmi és tudástár-oldalak, a technikai minőség, a hiteles üzleti információ és a megszerzett külső említések adják az organikus alapot.</p>
                <p>Egy budapesti szolgáltatási oldal csak akkor indokolt, ha a vállalkozás ténylegesen kiszolgál budapesti ügyfeleket, és az oldal a helyi keresési szándékra külön értéket ad. A városnév puszta cseréje sok hasonló oldalon nem ilyen érték.</p>
              </div>
              <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Elsődleges források:</strong> <a href="https://support.google.com/business/answer/7091?hl=hu" target="_blank" rel="noreferrer" className="text-primary underline">A helyi rangsorolás javítása – Google</a> és <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noreferrer" className="text-primary underline">AI-funkciók és a webhely – Google Kereső dokumentáció</a>.</div>
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/hu/weboldal-keszites-budapest/" className="button-primary">Weboldalkészítés budapesti vállalkozásoknak</Link><Link href="/hu/google-terkep-top-3/" className="button-outline">Google Térkép Top 3</Link></div>
            </div>
          </section>
        </article>

        <ContactBand title="Válasszuk szét, melyik találati rendszerben van reális lehetősége." />
      </main>
      <JsonLd data={articleData} />
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Tudástár', url: `${siteUrl}/hu/tudastar/` }, { name: title, url: canonicalUrl }])} />
    </ContentPage>
  )
}
