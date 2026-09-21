import type { Metadata } from 'next'
import { SiteContent } from '@/components/site-content'
import { StructuredData } from '@/components/structured-data'

const title = 'Kiszely Marketing | Google Térkép Top 3 kisvállalkozásoknak'
const description = 'Google Térkép Top 3 helyezés kisvállalkozásoknak Magyarországon 90 napon belül, weboldal-készítéssel és Google Cégprofil-optimalizálással.'
const canonicalUrl = 'https://www.kiszelymarketing.com/hu/'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: 'Kiszely Marketing',
    locale: 'hu_HU',
    type: 'website',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Kiszely Marketing' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}

export default function HungarianHomePage() {
  return (
    <>
      <SiteContent />
      <StructuredData />
    </>
  )
}
