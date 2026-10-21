import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/legutobb-keszult-weboldalak/`
const title = 'Legutóbb készült weboldalak'
const description = 'Nézzen meg két működő weboldalt, amelyet a Kiszely Marketing készített: a NARA-Car Autószerviz és Lángi Sándor oldalát.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'website', images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Kiszely Marketing' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}

const projects = [
  {
    name: 'NARA-Car Autószerviz',
    category: 'Autószerviz · Szigetszentmiklós',
    description: 'Az oldal bemutatja a műhely szolgáltatásait, és lehetőséget ad ajánlatkérésre vagy közvetlen telefonos kapcsolatfelvételre.',
    image: '/images/reference-nara-car.webp',
    imageAlt: 'A NARA-Car Autószerviz weboldalának nyitóképernyője',
    url: 'https://naracarautoszerviz.hu/',
  },
  {
    name: 'Lángi Sándor',
    category: 'Kőműves és burkoló · Hódmezővásárhely',
    description: 'A weboldalon a szolgáltatások, a korábbi munkák képei és a telefonos elérhetőség is megtalálható.',
    image: '/images/reference-langi-sandor.webp',
    imageAlt: 'Lángi Sándor kőműves és burkoló weboldalának nyitóképernyője',
    url: 'https://langisandorkomuvesburkolo.com/',
  },
] as const

export default function RecentWebsitesPage() {
  return (
    <ContentPage>
      <main>
        <PageHero
          eyebrow="Weboldal-készítés · Valódi munkák"
          title={title}
          lead="Itt olyan működő weboldalakat mutatunk, amelyeket a Kiszely Marketing készített. A képek az oldalak nyitóképernyőjét mutatják; a teljes oldalak külön is megnyithatók."
          breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: title }]}
        />

        <section className="section">
          <div className="site-shell flex flex-col gap-12">
            <SectionHeading eyebrow="Elkészült oldalak" title="Nézze meg őket működés közben." description="Két eltérő szakma, saját szolgáltatásokkal és elérhetőségekkel. A képernyőképek mellett az élő weboldalakat is megnyithatja." />
            <div className="grid gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <article key={project.url} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} weboldalának megnyitása új lapon`}>
                    <Image src={project.image} alt={project.imageAlt} width={1200} height={750} sizes="(max-width: 1023px) calc(100vw - 40px), 48vw" className="h-auto w-full border-b border-border" />
                  </a>
                  <div className="flex flex-col items-start gap-4 p-6 md:p-8">
                    <p className="eyebrow">{project.category}</p>
                    <h2 className="font-serif text-3xl leading-tight md:text-4xl">{project.name}</h2>
                    <p className="leading-relaxed text-muted-foreground">{project.description}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-bold text-primary hover:underline">Az élő weboldal megnyitása <ExternalLink aria-hidden="true" className="size-4" /></a>
                  </div>
                </article>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">A képernyőképek 2026. október 21-én készültek. Az élő weboldalak tartalma időközben változhat.</p>
          </div>
        </section>

        <section className="section muted-section">
          <div className="site-shell flex flex-col items-start gap-6">
            <SectionHeading eyebrow="Saját weboldalt szeretne?" title="Beszéljük át, mire van szüksége." description="Az Ön szolgáltatásaihoz, tartalmához és céljaihoz illő weboldal terjedelmét és díját az egyeztetés után, írásban rögzítjük." />
            <Link href="/hu/weboldal-keszites-budapest/" className="button-outline">Weboldal-készítés és csomagok <ArrowRight data-icon="inline-end" /></Link>
          </div>
        </section>

        <ContactBand title="Mondja el, milyen weboldalra van szüksége." />
      </main>
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: title, url: canonicalUrl }])} />
    </ContentPage>
  )
}
