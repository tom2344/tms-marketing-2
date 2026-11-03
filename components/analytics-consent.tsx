'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { analyticsId, readAnalyticsChoice, saveAnalyticsChoice, type AnalyticsChoice } from '@/lib/analytics'

let initialized = false
const choiceChanged = 'kiszely:analytics-choice-changed'

function subscribeToChoice(callback: () => void) {
  window.addEventListener(choiceChanged, callback)
  return () => window.removeEventListener(choiceChanged, callback)
}

function startAnalytics() {
  if (initialized || !analyticsId) return
  initialized = true

  window.dataLayer = window.dataLayer ?? []
  window.gtag = (...args: unknown[]) => { window.dataLayer?.push(args) }
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
  window.gtag('consent', 'update', { analytics_storage: 'granted' })
  window.gtag('js', new Date())
  window.gtag('config', analyticsId, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_expires: 180 * 24 * 60 * 60,
    cookie_update: false,
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsId)}`
  document.head.appendChild(script)
}

export function AnalyticsConsent() {
  const pathname = usePathname()
  const choice = useSyncExternalStore(subscribeToChoice, readAnalyticsChoice, () => undefined)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const lastPage = useRef<string | null>(null)

  useEffect(() => {
    const openSettings = () => setSettingsOpen(true)
    window.addEventListener('kiszely:analytics-settings', openSettings)
    return () => window.removeEventListener('kiszely:analytics-settings', openSettings)
  }, [])

  useEffect(() => {
    if (choice !== 'accepted') return
    startAnalytics()
    const page = `${window.location.origin}${window.location.pathname}`
    if (lastPage.current === page) return
    lastPage.current = page
    window.gtag?.('event', 'page_view', { page_location: page, page_title: document.title })
  }, [choice, pathname])

  if (!analyticsId || (choice !== null && !settingsOpen)) return null

  const decide = (nextChoice: AnalyticsChoice) => {
    const wasAccepted = readAnalyticsChoice() === 'accepted'
    saveAnalyticsChoice(nextChoice)
    window.dispatchEvent(new Event(choiceChanged))
    setSettingsOpen(false)
    if (wasAccepted && nextChoice === 'rejected') {
      window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
      window.location.reload()
      return
    }
  }

  return (
    <aside role="dialog" aria-label="Látogatottságmérés beállításai" className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-border bg-background p-5 shadow-2xl sm:p-6">
      <h2 className="text-lg font-bold text-foreground">Segít mérni, mi működik?</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Az Ön engedélyével a Google Analytics segítségével mérjük az oldal használatát és a sikeres kapcsolatfelvételt. A megadott űrlapadatokat nem küldjük el a Google-nek. <Link href="/hu/adatkezeles/" className="text-primary underline">Részletek az adatkezelésről</Link>.</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" className="button-primary" onClick={() => decide('accepted')}>Engedélyezem</button>
        <button type="button" className="button-outline" onClick={() => decide('rejected')}>Nem kérem</button>
      </div>
    </aside>
  )
}

export function AnalyticsSettingsButton() {
  if (!analyticsId) return null
  return <button type="button" className="hover:text-foreground" onClick={() => window.dispatchEvent(new Event('kiszely:analytics-settings'))}>Mérési beállítások</button>
}
