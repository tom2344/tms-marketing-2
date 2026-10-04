import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/tudastar/google-cegprofil-optimalizalas/`
const title = 'Google Cégprofil-optimalizálási ellenőrzőlista'
const description = 'Gyakorlati Google Cégprofil-ellenőrzőlista: jogosultság, üzleti adatok, kategóriák, szolgáltatási terület, értékelések, fotók, weboldal és mérés.'
const published = '2026-10-04'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'article', publishedTime: published, modifiedTime: published, authors: [`${siteUrl}/hu/rolunk/`], images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: title }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}

const checks = [
  ['Jogosultság', 'A vállalkozás a megadott nyitvatartási időben személyesen kapcsolatba lép az ügyfelekkel. A kizárólag online működő vállalkozások nem jogosultak Cégprofilra.'],
  ['Valós üzleti név', 'A név ugyanaz, amelyet a vállalkozás a valós világban, például táblán, számlán vagy weboldalon használ. Nincs hozzáadott városnév vagy szolgáltatás csak a rangsorolás kedvéért.'],
  ['Egy profil', 'Egy vállalkozáshoz és helyszínhez egy profil tartozik, kivéve a Google irányelveiben meghatározott különleges eseteket.'],
  ['Cím vagy szolgáltatási terület', 'A címet csak akkor mutatja a profil, ha ott az ügyfeleket ténylegesen fogadják. Kiszálló szolgáltatásnál a valós szolgáltatási területet kell beállítani.'],
  ['Kategóriák', 'A fő kategória a vállalkozás legfontosabb valós tevékenységét írja le; további kategória csak ténylegesen kínált szolgáltatáshoz kerül be.'],
  ['Elérhetőségek és nyitvatartás', 'A telefon, webcím, normál és rendkívüli nyitvatartás pontos és naprakész.'],
  ['Szolgáltatások és bemutatkozás', 'A szolgáltatások közérthetően, tényszerűen szerepelnek. A leírás nem tartalmaz félrevezető ajánlatot vagy keresőkifejezés-halmozást.'],
  ['Fotók', 'Saját, valós és jó minőségű képek mutatják be a vállalkozást, a csapatot, a helyszínt vagy az elvégzett munkát.'],
  ['Értékelések', 'Minden valódi ügyféltől azonos módon kérhető értékelés. Nincs ösztönző, értékelésvásárlás vagy csak elégedett ügyfelekre szűkített kérés.'],
  ['Kapcsolódó weboldal', 'A profil a vállalkozás saját, biztonságos és releváns oldalára vezet; azon ugyanazok az üzleti adatok és valós szolgáltatások jelennek meg.'],
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

export default function BusinessProfileChecklistPage() {
  return (
    <ContentPage>
      <main>
        <PageHero
          eyebrow="Tudástár · 10 perc"
          title={title}
          lead={<><p>Az optimalizálás első lépése nem egy keresőkifejezés hozzáadása, hanem a jogosultság és a valós üzleti adatok ellenőrzése. Ez a lista a Google hivatalos irányelvei alapján rendszerezi az alapokat.</p><p className="mt-4 text-base">Szerző: Tamás · Frissítve: 2026. október 4.</p></>}
          breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Tudástár', href: '/hu/tudastar/' }, { label: title }]}
        />

        <article>
          <section className="section">
            <div className="site-shell flex flex-col gap-10">
              <SectionHeading eyebrow="10 ellenőrzési pont" title="A jó profil pontos, teljes és igazolható." description="A lista nem rangsorolási trükk. Arra szolgál, hogy a felhasználó és a Google ugyanazt a valós vállalkozást lássa minden fontos felületen." />
              <div className="grid gap-4 lg:grid-cols-2">
                {checks.map(([heading, text]) => (
                  <section key={heading} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                    <Check className="mt-1 size-5 shrink-0 text-primary" />
                    <div><h2 className="font-serif text-2xl">{heading}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></div>
                  </section>
                ))}
              </div>
            </div>
          </section>

          <section className="section muted-section">
            <div className="site-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <SectionHeading eyebrow="Fontos határ" title="Nem minden vállalkozás jogosult profilra." />
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>A Google Cégprofil azoknak a vállalkozásoknak készült, amelyek a megadott nyitvatartási időben személyesen találkoznak az ügyfeleikkel. Ez lehet ügyfélfogadás egy valós helyszínen vagy kiszállás az ügyfélhez.</p>
                <p>A kizárólag online működő vállalkozás nem hozhat létre profilt csak azért, hogy megjelenjen a Térképen. Ilyenkor az organikus webes láthatóságot kell fejleszteni; nem érdemes hamis magyar címmel vagy virtuális irodával kockáztatni a felfüggesztést.</p>
                <p>Ha a jogosultság bizonytalan, előbb az üzleti működést és a Google aktuális szabályait kell tisztázni, és csak utána módosítani a profilt.</p>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="site-shell max-w-4xl">
              <p className="eyebrow">Karbantartás és mérés</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">A profil nem egyszeri űrlap.</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>A nyitvatartás, szolgáltatások, elérhetőségek és fotók változhatnak. Ezeket rendszeresen ellenőrizni kell, az értékelésekre pedig érdemes tényszerűen és udvariasan válaszolni.</p>
                <p>A teljesítményt nem egyetlen saját telefonon látott keresés alapján mérjük. A megállapodott kereséseket és földrajzi pontokat következetesen, azonos módszerrel kell vizsgálni.</p>
              </div>
              <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Elsődleges források:</strong>{' '}
                <a href="https://support.google.com/business/answer/3038177?hl=hu" target="_blank" rel="noreferrer" className="text-primary underline">Irányelvek a vállalkozás Google-on való megjelenítéséhez</a>{' '}és{' '}
                <a href="https://support.google.com/business/answer/13763036?hl=en-419" target="_blank" rel="noreferrer" className="text-primary underline">Business eligibility and ownership guidelines</a>.
              </div>
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/hu/google-terkep-top-3/" className="button-primary">Google Térkép Top 3 szolgáltatás</Link><Link href="/hu/modszertan/" className="button-outline">Mérési módszertan</Link></div>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Link href="/hu/tudastar/google-cegprofil-kategoria-valasztas/" className="rounded-2xl border border-border bg-card p-5 font-bold text-primary hover:underline">Kategóriaválasztási útmutató →</Link>
                <Link href="/hu/tudastar/szolgaltatasi-terulet-beallitas/" className="rounded-2xl border border-border bg-card p-5 font-bold text-primary hover:underline">Szolgáltatási terület beállítása →</Link>
              </div>
            </div>
          </section>
        </article>

        <ContactBand title="Ellenőrizzük, hogy a Cégprofil és a weboldal ugyanazt mutatja-e." />
      </main>
      <JsonLd data={articleData} />
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Tudástár', url: `${siteUrl}/hu/tudastar/` }, { name: title, url: canonicalUrl }])} />
    </ContentPage>
  )
}
