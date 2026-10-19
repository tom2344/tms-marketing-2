import { ContentPage, PageHero } from '@/components/content-page'

export function LegalPage({ title, lead, children }: { title: string; lead: string; children: React.ReactNode }) {
  return (
    <ContentPage>
      <main>
        <PageHero eyebrow="Tájékoztatás" title={title} lead={<p>{lead}</p>} breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: title }]} />
        <div className="section">
          <div className="site-shell max-w-4xl space-y-10 leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline [&_h2]:mb-3 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:leading-tight [&_h2]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_p+p]:mt-3">
            {children}
          </div>
        </div>
      </main>
    </ContentPage>
  )
}
