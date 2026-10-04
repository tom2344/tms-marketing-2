import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { ContentPage, PageHero } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/kapcsolat/`
const title = 'Kapcsolat | Kiszely Marketing'
const description = 'Kérjen ingyenes konzultációt Google Térkép Top 3 vagy weboldal-készítés szolgáltatásról. Tamás személyesen válaszol.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'website', images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Kapcsolat – Kiszely Marketing' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}

export default function ContactPage() {
  return (
    <ContentPage>
      <main>
        <PageHero eyebrow="Kapcsolat" title="Beszéljük át, mire van szüksége." lead={<p>Írja meg röviden, mivel foglalkozik a vállalkozása és melyik szolgáltatás érdekli. Tamás személyesen válaszol a megkeresésére.</p>} breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Kapcsolat' }]} />
        <section className="section">
          <div className="site-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div className="flex flex-col gap-6"><p className="eyebrow">Közvetlen elérhetőség</p><h2 className="font-serif text-4xl leading-tight md:text-5xl">Tamás válaszol.</h2><p className="leading-relaxed text-muted-foreground">A beszélgetés célja először annak eldöntése, hogy a szolgáltatás megfelelő-e az Ön helyzetére. A megkeresés nem jelent kötelezettséget.</p><div className="border-t border-border pt-5"><p className="text-sm font-bold">E-mail</p><a href="mailto:tamas@kiszelymarketing.com" className="mt-1 inline-block text-primary hover:underline">tamas@kiszelymarketing.com</a></div></div>
            <ContactForm language="hu" />
          </div>
        </section>
      </main>
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Kapcsolat', url: canonicalUrl }])} />
    </ContentPage>
  )
}
