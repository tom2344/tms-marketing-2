import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({ subsets: ['latin', 'latin-ext'], variable: '--font-serif', weight: ['500', '600', '700'] })
const sans = Manrope({ subsets: ['latin', 'latin-ext'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kiszelymarketing.com'),
  title: { default: 'Kiszely Marketing', template: '%s | Kiszely Marketing' },
  description: 'Google Térkép Top 3 és weboldal-készítés kisvállalkozásoknak Magyarországon.',
  icons: {
    icon: [
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/icon-48x48.png',
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport: Viewport = { themeColor: '#f4f0e8', colorScheme: 'light', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={`bg-background ${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
