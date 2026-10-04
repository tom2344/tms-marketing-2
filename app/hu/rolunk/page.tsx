import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/rolunk/`
const title = 'A Kiszely Marketingről'
const description = 'Ismerje meg Tamást, a Kiszely Marketing alapítóját, a szolgáltatásokat és az átlátható együttműködés alapelveit.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'profile', images: [{ url: '/images/tamas-founder.webp', width: 1122, height: 1402, alt: 'Tamás, a Kiszely Marketing alapítója' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/tamas-founder.webp'] },
  robots: { index: true, follow: true },
}

export default function AboutPage() {
  return (
    <ContentPage>
      <main>
        <PageHero eyebrow="Kiszely Marketing" title="Személyes figyelem. Átlátható munka." lead={<p>A Kiszely Marketing magyar kisvállalkozásoknak segít a Google Térképen való láthatóságban és professzionális weboldalak elkészítésében.</p>} breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Rólunk' }]} />

        <section className="section">
          <div className="site-shell grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div className="overflow-hidden rounded-2xl"><Image src="/images/tamas-founder.webp" alt="Tamás, a Kiszely Marketing alapítója" width={1122} height={1402} sizes="(max-width: 1023px) calc(100vw - 40px), 38vw" className="w-full object-cover" priority /></div>
            <div className="flex flex-col gap-6"><p className="eyebrow">Tamás · alapító</p><h2 className="font-serif text-4xl leading-tight md:text-6xl">Közvetlen kapcsolat azzal, aki a munkát végzi.</h2><p className="text-lg leading-relaxed text-muted-foreground">A megkeresésekre Tamás személyesen válaszol. Az egyeztetés célja annak tisztázása, hogy mire van szüksége a vállalkozásnak, milyen eredmény mérhető, és melyik szolgáltatás illik a helyzethez.</p><p className="leading-relaxed text-muted-foreground">A weboldalon nem jelenítünk meg kitalált eredményeket, ügyfélidézeteket vagy referenciákat. Valós esettanulmányok és munkák akkor kerülnek fel, amikor azokhoz ellenőrizhető adatok és ügyféljóváhagyás áll rendelkezésre.</p><Link href="/hu/kapcsolat/" className="button-primary self-start">Beszéljünk róla <ArrowRight data-icon="inline-end" /></Link></div>
          </div>
        </section>

        <section className="section muted-section">
          <div className="site-shell flex flex-col gap-12">
            <SectionHeading eyebrow="Két szolgáltatási terület" title="A láthatóság és a weboldal külön is kérhető." />
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-border bg-background p-7 lg:p-9"><h2 className="font-serif text-4xl">Google Térkép Top 3</h2><p className="mt-4 leading-relaxed text-muted-foreground">Google Cégprofil- és weboldal-optimalizálás, versenytárselemzés, frissítések és helyezéskövetés helyi szolgáltató vállalkozásoknak.</p><Link href="/hu/google-terkep-top-3/" className="mt-6 inline-flex font-bold text-primary hover:underline">A szolgáltatás részletei <ArrowRight className="ml-2 size-4" /></Link></article>
              <article className="rounded-2xl border border-border bg-background p-7 lg:p-9"><h2 className="font-serif text-4xl">Weboldal készítés</h2><p className="mt-4 leading-relaxed text-muted-foreground">Mobilbarát bemutatkozó és összetettebb weboldalak kisvállalkozásoknak, önálló szolgáltatásként is.</p><Link href="/hu/weboldal-keszites-budapest/" className="mt-6 inline-flex font-bold text-primary hover:underline">Weboldalcsomagok <ArrowRight className="ml-2 size-4" /></Link></article>
            </div>
          </div>
        </section>

        <ContactBand />
      </main>
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Rólunk', url: canonicalUrl }])} />
    </ContentPage>
  )
}
