import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/modszertan/`
const title = 'Módszertan | Hogyan mérjük a Google Térkép-helyezést?'
const description = 'A Kiszely Marketing átlátható módszertana: kiinduló állapot, keresőkifejezések, mérési terület, elvégzett munka és a Top 3 cél ellenőrzése.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'website', images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Kiszely Marketing – helyezésmérési módszertan' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}

const steps = [
  ['1. Kiinduló állapot', 'Rögzítjük a Cégprofil, a weboldal és a megállapodott keresőkifejezés induló állapotát.'],
  ['2. Keresés és terület', 'Közösen meghatározzuk azt a keresőkifejezést és szolgáltatási területet, amelyre a cél és a garancia vonatkozik.'],
  ['3. Versenytárselemzés', 'Megvizsgáljuk, mely vállalkozások jelennek meg a térképes találatok között, és milyen valós különbségek láthatók.'],
  ['4. Optimalizálási munka', 'Rendbe tesszük a szükséges Cégprofil- és weboldalelemeket, majd elindítjuk a rendszeres feladatokat.'],
  ['5. Helyezéskövetés', 'Ugyanazon megállapodott keresés és mérési terület alapján követjük a változást.'],
  ['6. Eredmény és következő lépés', 'A 90. napon a rögzített feltételek alapján ellenőrizzük, teljesült-e a Top 3 cél.'],
] as const

export default function MethodologyPage() {
  return (
    <ContentPage>
      <main>
        <PageHero eyebrow="Módszertan" title="A helyezést nem érzésre mérjük." lead={<p>A Google Térkép eredményei helyenként eltérhetnek. Ezért a munka megkezdése előtt rögzíteni kell, mely keresésnél, mely szolgáltatási területen és milyen módon ellenőrizzük a helyezést.</p>} breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Módszertan' }]} />

        <section className="section">
          <div className="site-shell flex flex-col gap-12">
            <SectionHeading eyebrow="Hat lépés" title="Így lesz összehasonlítható az indulás és az eredmény." />
            <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {steps.map(([heading, text]) => <li key={heading} className="rounded-2xl border border-border bg-card p-7"><h2 className="text-xl font-bold">{heading}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{text}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="section muted-section">
          <div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <SectionHeading eyebrow="Mitől változhat az eredmény?" title="A helyi találat valóban helyi." description="Ugyanaz a keresés két különböző városrészből vagy településről eltérő vállalkozásokat mutathat. A személyre szabás, a kereső pontos helye és a profilok relevanciája egyaránt számít." />
            <div className="grid gap-4 sm:grid-cols-2">
              {['A kereső földrajzi helye', 'A választott keresőkifejezés', 'A Cégprofil kategóriái és tartalma', 'A vállalkozás ismertsége és külső említései', 'A weboldal helyi relevanciája', 'A Google aktuális adatfeldolgozása'].map(item => <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-background p-5"><Check className="mt-0.5 size-5 shrink-0 text-primary" /><p>{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-7 lg:p-9"><p className="eyebrow">Átláthatóság</p><h2 className="mt-4 font-serif text-4xl">Mit rögzítünk előre?</h2><ul className="mt-6 space-y-3 text-muted-foreground">{['A fő keresőkifejezést', 'A szolgáltatási területet', 'A mérési pontokat vagy az ellenőrzés módját', 'A kiinduló helyezést', 'A szükséges hozzáféréseket', 'A garancia feltételeit'].map(item => <li key={item} className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-primary" />{item}</li>)}</ul></article>
            <article className="rounded-2xl border border-border bg-card p-7 lg:p-9"><p className="eyebrow">Korlátok</p><h2 className="mt-4 font-serif text-4xl">Mit nem állítunk?</h2><p className="mt-6 leading-relaxed text-muted-foreground">Nem állítjuk, hogy a Google találatai minden felhasználónál azonosak, vagy hogy a Google algoritmusa közvetlenül irányítható. A vállalás a közösen rögzített keresésre, területre és mérési módra vonatkozik.</p><a href="https://support.google.com/business/answer/7091?hl=hu" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex font-bold text-primary hover:underline">Google: a helyi rangsorolás tényezői <ArrowRight className="ml-2 size-4" /></a></article>
          </div>
        </section>

        <ContactBand title="Rögzítsük előre, mit tekintünk sikernek." />
      </main>
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Módszertan', url: canonicalUrl }])} />
    </ContentPage>
  )
}
