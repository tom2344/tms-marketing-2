import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { ContactBand, ContentPage, PageHero, SectionHeading, ArticleCard } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/google-terkep-top-3/`
const title = 'Google Térkép Top 3 és Cégprofil-optimalizálás'
const description = 'Google Térkép Top 3 szolgáltatás kisvállalkozásoknak: Cégprofil- és weboldal-optimalizálás, versenytárselemzés, helyezéskövetés és átlátható 90 napos folyamat.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'website', images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Kiszely Marketing – Google Térkép Top 3' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}

const deliverables = [
  'Teljes térképes versenytárselemzés',
  'A Google Cégprofil kategóriáinak, szolgáltatásainak és szolgáltatási területének átvizsgálása',
  'A kapcsolódó weboldal-oldalak elkészítése vagy optimalizálása',
  'Kétheti Google Cégprofil-frissítések',
  'A megállapodott fő keresőkifejezés helyezésének követése',
  'Magas minőségű backlinkek építése',
] as const

const phases = [
  ['1–14. nap', 'Alapok', 'Audit, keresőkifejezések és mérési terület rögzítése, a Cégprofil és a szükséges weboldal-oldalak rendbetétele.'],
  ['15–45. nap', 'Tekintély', 'Rendszeres profilfrissítések, szabályos értékelésgyűjtési folyamat és a térképes versenytársak vizsgálata.'],
  ['46–90. nap', 'Top 3 cél', 'A megállapodott keresés és szolgáltatási terület helyezéseinek követése, majd a szükséges beállítások és tartalmak finomítása.'],
] as const

const serviceData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteUrl}/#service-google-terkep-top-3`,
  name: 'Google Térkép Top 3',
  serviceType: 'Google Cégprofil- és weboldal-optimalizálás helyi keresésekhez',
  url: canonicalUrl,
  provider: { '@id': `${siteUrl}/#organization` },
  areaServed: { '@type': 'Country', name: 'Magyarország' },
  offers: {
    '@type': 'Offer',
    price: '300000',
    priceCurrency: 'HUF',
    description: 'Egyszeri induló díj. A fenntartás díja 35.000 Ft havonta.',
  },
}

export default function GoogleMapsTopThreePage() {
  return (
    <ContentPage>
      <main>
        <PageHero
          eyebrow="Google Térkép Top 3"
          title="Legyen látható ott, ahol a helyi ügyfelek keresnek."
          lead={<><p>A Google Térkép Top 3 szolgáltatás a Google Cégprofil, a weboldal és a helyi online jelenlét összehangolt fejlesztését jelenti. A cél a kezdés előtt írásban rögzített keresésnél és területen elérni a Top 3 helyezést 90 napon belül.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/hu/kapcsolat/" className="button-primary">Ingyenes konzultáció <ArrowRight data-icon="inline-end" /></Link><a href="#tartalom" className="button-outline">Mit tartalmaz?</a></div></>}
          breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Google Térkép Top 3' }]}
        />

        <section className="section">
          <div className="site-shell grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div className="flex flex-col gap-6">
              <SectionHeading eyebrow="Közérthetően" title="Egy szolgáltatás, több ismert elnevezés." />
              <p className="text-lg leading-relaxed text-muted-foreground">Mi <strong className="text-foreground">Google Térkép Top 3</strong> szolgáltatásnak nevezzük. A szakmai leírásokban ugyanez a terület gyakran Google Cégprofil-optimalizálásként, Google Térkép-optimalizálásként vagy helyi keresőoptimalizálásként – helyi SEO-ként – jelenik meg.</p>
              <p className="leading-relaxed text-muted-foreground">A név nem változtat a munkán: a Cégprofilnak, a weboldalnak és a vállalkozás külső online említéseinek ugyanazt a valós, következetes képet kell mutatniuk.</p>
            </div>
            <Image src="/images/map-green.webp" alt="Google Térkép Top 3 láthatóság szemléltetése" width={1624} height={969} sizes="(max-width: 1023px) calc(100vw - 40px), 45vw" className="rounded-2xl border border-border" priority />
          </div>
        </section>

        <section id="tartalom" className="section muted-section">
          <div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <SectionHeading eyebrow="A szolgáltatás tartalma" title="Nem egyetlen profilbeállítás." description="A helyi láthatóság több egymásra épülő feladat eredménye. Az induló munka ezeket egy rendszerben kezeli." />
            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map(item => <div key={item} className="flex gap-3 rounded-xl border border-border bg-background p-5"><Check className="mt-0.5 size-5 shrink-0 text-primary" /><p className="leading-relaxed">{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell flex flex-col gap-12">
            <SectionHeading eyebrow="A 90 napos folyamat" title="Előre meghatározott munka és mérés." description="A pontos keresőkifejezést és szolgáltatási területet még a munka megkezdése előtt közösen meghatározzuk és írásban rögzítjük." />
            <div className="grid gap-5 lg:grid-cols-3">
              {phases.map(([range, heading, text]) => <article key={range} className="rounded-2xl border border-border bg-card p-7"><p className="eyebrow">{range}</p><h3 className="mt-4 font-serif text-3xl">{heading}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{text}</p></article>)}
            </div>
            <div className="grid gap-6 rounded-2xl bg-foreground p-7 text-background md:grid-cols-[1fr_auto] md:items-end lg:p-10">
              <div><p className="eyebrow text-accent">Árak</p><p className="mt-4 font-serif text-4xl">300.000 Ft</p><p className="mt-2 text-background/70">Egyszeri induló díj. Fenntartás: <strong className="text-background">35.000 Ft / hónap</strong>.</p></div>
              <Link href="/hu/kapcsolat/" className="button-light">Konzultációt kérek <ArrowRight data-icon="inline-end" /></Link>
            </div>
          </div>
        </section>

        <section className="section muted-section">
          <div className="site-shell grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-7 lg:p-9">
              <p className="eyebrow">Mérés</p>
              <h2 className="mt-4 font-serif text-4xl">Mit jelent a Top 3?</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">Top 3 helyezést a Google Térkép találatai között azokra a keresésekre, amelyeket az ügyfelei valóban beírnak, a szolgáltatási területén belül. A keresőkifejezéseket és a területet kezdés előtt közösen meghatározzuk és írásban rögzítjük.</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">A helyezések a kereső tartózkodási helyétől függhetnek, ezért a mérési pontok és az ellenőrzés módja a megállapodás része.</p>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-accent/40 p-7 lg:p-9">
              <p className="eyebrow">A garancia</p>
              <h2 className="mt-4 font-serif text-4xl">Mi történik a 91. napon?</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">Ha addig nem érjük el a megbeszélt Top 3 helyezést, Ön nem fizet tovább, és az addig befizetett teljes összeget visszafizetjük. Nincs kilépési díj, nincs vita, minden addig befizetett forintot visszakap.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell flex flex-col gap-10">
            <SectionHeading eyebrow="Tudástár" title="Értse, mit és miért csinálunk." />
            <div className="grid gap-5 md:grid-cols-3">
              <ArticleCard href="/hu/tudastar/google-terkep-rangsorolas/" title="Mi alapján rangsorol a Google Térkép?" description="A relevancia, a távolság és az ismertség szerepe közérthetően." />
              <ArticleCard href="/hu/tudastar/google-cegprofil-optimalizalas/" title="Google Cégprofil-optimalizálási ellenőrzőlista" description="A legfontosabb profil-, weboldal- és bizalmi elemek rendszerezve." />
              <ArticleCard href="/hu/tudastar/organikus-talalat-vagy-google-terkep/" title="Organikus találat vagy Térképes Top 3?" description="Miért lehet egy weboldal elöl akkor is, ha a vállalkozás nincs a térképes találatok között?" />
              <ArticleCard href="/hu/tudastar/google-cegprofil-kategoria-valasztas/" title="Google Cégprofil-kategória választása" description="A fő és további kategóriák szerepe és szabályos kiválasztása." />
              <ArticleCard href="/hu/tudastar/szolgaltatasi-terulet-beallitas/" title="Szolgáltatási terület beállítása" description="Cím és kiszolgált terület helyes megadása kiszálló vállalkozásoknál." />
              <ArticleCard href="/hu/tudastar/helyi-helyezesmero-racs/" title="Helyi helyezésmérő rács" description="A térképes láthatóság összehasonlítható területi mérése." />
            </div>
          </div>
        </section>

        <ContactBand
          title="Indítsuk el a 90 napos Top 3 folyamatot."
          description="Az első egyeztetésen áttekintjük vállalkozása jelenlegi helyzetét, rögzítjük a célzott keresést és szolgáltatási területet, majd bemutatjuk a következő lépéseket."
        />
      </main>
      <JsonLd data={serviceData} />
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Google Térkép Top 3', url: canonicalUrl }])} />
    </ContentPage>
  )
}
