import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Az oldal nem található',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="site-shell flex min-h-screen flex-col items-start justify-center gap-6 py-20">
      <p className="eyebrow">404</p>
      <h1 className="font-serif text-5xl leading-tight md:text-7xl">Az oldal nem található.</h1>
      <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">A keresett oldal nem létezik vagy más címre került.</p>
      <Link href="/hu/" className="button-primary">Vissza a kezdőlapra</Link>
    </main>
  )
}
