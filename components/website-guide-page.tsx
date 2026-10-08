import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleCard, ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const published = '2026-10-08'

export function websiteGuideMetadata({ slug, title, description }: { slug: string; title: string; description: string }): Metadata {
  const canonicalUrl = `${siteUrl}/hu/tudastar/${slug}/`
  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'article', publishedTime: published, modifiedTime: published, authors: [`${siteUrl}/hu/rolunk/`], images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
    robots: { index: true, follow: true },
  }
}

type GuideSection = {
  eyebrow: string
  title: string
  paragraphs: readonly string[]
  points?: readonly string[]
}

type GuideQuestion = {
  question: string
  answer: string
}

type RelatedGuide = {
  href: string
  title: string
  description: string
}

type Source = {
  href: string
  label: string
}

export function WebsiteGuidePage({
  slug,
  title,
  description,
  readTime,
  introduction,
  sections,
  questions,
  related,
  sources = [],
  contactTitle,
}: {
  slug: string
  title: string
  description: string
  readTime: string
  introduction: string
  sections: readonly GuideSection[]
  questions: readonly GuideQuestion[]
  related: readonly RelatedGuide[]
  sources?: readonly Source[]
  contactTitle: string
}) {
  const canonicalUrl = `${siteUrl}/hu/tudastar/${slug}/`
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

  return (
    <ContentPage>
      <main>
        <PageHero
          eyebrow={`Tudástár · ${readTime}`}
          title={title}
          lead={<><p>{introduction}</p><p className="mt-4 text-base">Szerző: Tamás · Frissítve: 2026. október 8.</p></>}
          breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Tudástár', href: '/hu/tudastar/' }, { label: title }]}
        />

        <article>
          {sections.map((section, index) => (
            <section key={section.title} className={`section ${index % 2 === 1 ? 'muted-section' : ''}`}>
              <div className="site-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
                <SectionHeading eyebrow={section.eyebrow} title={section.title} />
                <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                  {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                  {section.points && (
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {section.points.map(point => <li key={point} className="rounded-2xl border border-border bg-card p-5 text-base text-foreground">{point}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          ))}

          <section className={`section ${sections.length % 2 === 1 ? 'muted-section' : ''}`}>
            <div className="site-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
              <SectionHeading eyebrow="Gyakori kérdések" title="Rövid válaszok a döntéshez." />
              <div className="space-y-7">
                {questions.map(item => <section key={item.question}><h2 className="text-xl font-bold">{item.question}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{item.answer}</p></section>)}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="site-shell max-w-4xl">
              <p className="eyebrow">Kapcsolódó szolgáltatás</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">A pontos terjedelem az üzleti céllal kezdődik.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">A Starter és Premium csomag tartalmát, a szükséges funkciókat, a határidőt és a végleges díjat minden projekt előtt írásban rögzítjük.</p>
              {sources.length > 0 && <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">További források:</strong>{' '}{sources.map((source, index) => <span key={source.href}>{index > 0 && ' · '}<a href={source.href} target="_blank" rel="noreferrer" className="text-primary underline">{source.label}</a></span>)}</div>}
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/hu/weboldal-keszites-budapest/" className="button-primary">Weboldalcsomagok és árak</Link><Link href="/hu/kapcsolat/" className="button-outline">Ajánlatot kérek</Link></div>
            </div>
          </section>

          <section className="section muted-section">
            <div className="site-shell flex flex-col gap-8">
              <SectionHeading eyebrow="Kapcsolódó útmutatók" title="Folytassa azzal, ami most segíti a döntését." />
              <div className="grid gap-5 md:grid-cols-2">{related.map(item => <ArticleCard key={item.href} {...item} />)}</div>
            </div>
          </section>
        </article>

        <ContactBand title={contactTitle} description="Írja meg röviden, milyen vállalkozáshoz és milyen céllal készülne az oldal. A következő lépést, a szükséges tartalmat és a várható terjedelmet az egyeztetésen pontosítjuk." />
      </main>
      <JsonLd data={articleData} />
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Tudástár', url: `${siteUrl}/hu/tudastar/` }, { name: title, url: canonicalUrl }])} />
    </ContentPage>
  )
}
