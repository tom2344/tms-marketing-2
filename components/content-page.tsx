import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export type BreadcrumbItem = { label: string; href?: string }

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Morzsamenü" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-2">
          {index > 0 && <span aria-hidden="true">/</span>}
          {item.href ? <Link href={item.href} className="hover:text-primary hover:underline">{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  )
}

export function ContentPage({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>
}

export function PageHero({ eyebrow, title, lead, breadcrumbs }: { eyebrow: string; title: string; lead: React.ReactNode; breadcrumbs: BreadcrumbItem[] }) {
  return (
    <section className="border-b border-border py-14 md:py-20 lg:py-24">
      <div className="site-shell flex max-w-5xl flex-col gap-7">
        <Breadcrumbs items={breadcrumbs} />
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="max-w-5xl font-serif text-5xl leading-[1.02] tracking-[-.04em] text-balance sm:text-6xl lg:text-7xl">{title}</h1>
        <div className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">{lead}</div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: React.ReactNode }) {
  return (
    <div className="flex max-w-3xl flex-col gap-4">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">{title}</h2>
      {description && <div className="text-lg leading-relaxed text-muted-foreground">{description}</div>}
    </div>
  )
}

export function ContactBand({
  title = 'Beszéljük át az Ön helyzetét.',
  description = 'Az első egyeztetésen átbeszéljük az Ön céljait, a szükséges munkát és a megvalósítás következő lépéseit.',
}: {
  title?: string
  description?: React.ReactNode
}) {
  return (
    <section className="section bg-foreground text-background">
      <div className="site-shell flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent">Következő lépés</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{title}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-background/70">{description}</p>
        </div>
        <Link href="/hu/kapcsolat/" className="button-light shrink-0">Ingyenes konzultáció <ArrowRight data-icon="inline-end" /></Link>
      </div>
    </section>
  )
}

export function ArticleCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h3 className="font-serif text-2xl leading-tight"><Link href={href} className="hover:text-primary">{title}</Link></h3>
      <p className="leading-relaxed text-muted-foreground">{description}</p>
      <Link href={href} className="mt-auto inline-flex items-center font-bold text-primary hover:underline">Elolvasom <ArrowRight className="ml-2 size-4" /></Link>
    </article>
  )
}
