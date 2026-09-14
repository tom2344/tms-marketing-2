import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({ subsets: ['latin', 'latin-ext'], variable: '--font-serif', weight: ['500', '600', '700'] })
const sans = Manrope({ subsets: ['latin', 'latin-ext'], variable: '--font-sans' })

const siteUrl = 'https://ttamasmarketing.com'
const title = 'TMS Marketing | Weboldal készítés helyi vállalkozásoknak'
const description = 'Professzionális weboldal készítés helyi vállalkozásoknak. Top 3 helyezés a Google Térképen 90 napon belül, mobilbarát dizájn, kapcsolatfelvételi űrlapok, foglalási rendszerek és Google Cégprofil optimalizálás.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: { title, description, url: siteUrl, siteName: 'TMS Marketing', locale: 'hu_HU', type: 'website', images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'TMS Marketing' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.jpg'] },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: '#f4f0e8', colorScheme: 'light', width: 'device-width', initialScale: 1 }

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'TMS Marketing',
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  email: 'tokolitamas7@gmail.com',
  areaServed: 'Hungary',
  description,
  founder: { '@type': 'Person', name: 'Tamás' },
  serviceType: ['Weboldal készítés helyi vállalkozásoknak', 'Top 3 helyezés a Google Térképen 90 napon belül', 'Google Cégprofil optimalizálás'],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={`bg-background ${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
