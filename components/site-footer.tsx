import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="site-shell flex flex-col gap-6 text-sm text-muted-foreground">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold text-foreground">Kiszely Marketing</p>
          <p>Marketing kisvállalkozásoknak Magyarországon</p>
          <p>© 2026 Kiszely Marketing. Minden jog fenntartva.</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-3" aria-label="Lábléc navigáció">
          <Link href="/hu/google-terkep-top-3/" className="hover:text-foreground">Google Térkép Top 3</Link>
          <Link href="/hu/weboldal-keszites-budapest/" className="hover:text-foreground">Weboldal készítés</Link>
          <Link href="/hu/modszertan/" className="hover:text-foreground">Módszertan</Link>
          <Link href="/hu/tudastar/" className="hover:text-foreground">Tudástár</Link>
          <Link href="/hu/rolunk/" className="hover:text-foreground">Rólunk</Link>
          <Link href="/hu/kapcsolat/" className="hover:text-foreground">Kapcsolat</Link>
          <a href="https://www.facebook.com/profile.php?id=61580542712105&locale=hu_HU" target="_blank" rel="noopener noreferrer" className="inline-flex size-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground" aria-label="Kiszely Marketing Facebook-oldala" title="Facebook">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="currentColor"><path d="M13.5 22v-9h3l.45-3H13.5V8.1c0-.87.24-1.46 1.52-1.46H17V3.96c-.34-.05-1.52-.15-2.9-.15-2.87 0-4.84 1.75-4.84 4.97V10H6v3h3.26v9h4.24Z" /></svg>
          </a>
        </nav>
      </div>
    </footer>
  )
}
