'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  ['/hu/google-terkep-top-3/', 'Google Térkép Top 3'],
  ['/hu/weboldal-keszites-budapest/', 'Weboldal készítés'],
  ['/hu/modszertan/', 'Módszertan'],
  ['/hu/tudastar/', 'Tudástár'],
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="site-shell flex h-20 items-center justify-between gap-6">
        <Link href="/hu/" className="flex items-center gap-3" aria-label="Kiszely Marketing kezdőlap">
          <Image src="/images/kiszely-logo.webp" alt="Kiszely Marketing logó" width={512} height={512} sizes="48px" className="size-12 rounded-lg object-cover" priority />
          <span className="hidden font-bold tracking-tight sm:block">KISZELY MARKETING</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Fő navigáció">
          {navigation.map(([href, label]) => <Link key={href} className="nav-link" href={href}>{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/hu/kapcsolat/" className="button-primary hidden sm:inline-flex">Ingyenes konzultáció <ArrowRight data-icon="inline-end" /></Link>
          <button className="button-ghost lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <nav className="site-shell flex flex-col gap-1 border-t border-border py-4 lg:hidden" aria-label="Mobil navigáció">
          {navigation.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 font-semibold hover:bg-muted">{label}</Link>)}
          <Link href="/hu/kapcsolat/" onClick={() => setOpen(false)} className="button-primary mt-2">Ingyenes konzultáció</Link>
        </nav>
      )}
    </header>
  )
}
