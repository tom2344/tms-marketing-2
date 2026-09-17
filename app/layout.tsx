import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({ subsets: ['latin', 'latin-ext'], variable: '--font-serif', weight: ['500', '600', '700'] })
const sans = Manrope({ subsets: ['latin', 'latin-ext'], variable: '--font-sans' })

const siteUrl = 'https://kiszelymarketing.com'
const title = 'Kiszely Marketing | Google Térkép Top 3 kisvállalkozásoknak'
const description = 'Google Térkép Top 3 helyezés kisvállalkozásoknak Magyarországon 90 napon belül, weboldal készítéssel és Google Cégprofil-optimalizálással.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: { title, description, url: siteUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'website', images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Kiszely Marketing' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.jpg'] },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: '#f4f0e8', colorScheme: 'light', width: 'device-width', initialScale: 1 }

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kiszely Marketing',
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  email: 'tamas@kiszelymarketing.com',
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
