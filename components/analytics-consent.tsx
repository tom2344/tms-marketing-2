'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  analyticsId,
  metaPixelId,
  readAnalyticsChoice,
  readConsentSnapshot,
  readMetaConsentChoice,
  saveAnalyticsChoice,
  saveMetaConsentChoice,
  type AnalyticsChoice,
} from '@/lib/analytics'

type MetaPixelFunction = NonNullable<Window['fbq']> & {
  push?: (...args: unknown[]) => void
}

let analyticsInitialized = false
let pixelInitialized = false
const choiceChanged = 'kiszely:analytics-choice-changed'

function subscribeToChoice(callback: () => void) {
  window.addEventListener(choiceChanged, callback)
  return () => window.removeEventListener(choiceChanged, callback)
}

function startAnalytics() {
  if (analyticsInitialized || !analyticsId) return
  analyticsInitialized = true

  window.dataLayer = window.dataLayer ?? []
  // Google tag processes its commands as Arguments objects.
  // eslint-disable-next-line prefer-rest-params
  window.gtag = function () { window.dataLayer?.push(arguments) }
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
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(analyticsId)
  document.head.appendChild(script)
}

function createMetaPixelQueue(): MetaPixelFunction {
  let fbq: MetaPixelFunction
  fbq = (...args: unknown[]) => {
    if (fbq.callMethod) fbq.callMethod(...args)
    else fbq.queue?.push(args)
  }
  fbq.queue = []
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.push = fbq
  return fbq
}

function startMetaPixel() {
  if (pixelInitialized || !metaPixelId) return

  const fbq = (window.fbq as MetaPixelFunction | undefined) ?? createMetaPixelQueue()
  window.fbq = fbq
  window._fbq = window._fbq ?? fbq

  // Keep Meta's pixel paused until the visitor has actively opted in.
  fbq('consent', 'revoke')
  fbq('init', metaPixelId)

  const pixelScriptUrl = 'https://connect.facebook.net/en_US/fbevents.js'
  if (!document.querySelector('script[src="' + pixelScriptUrl + '"]')) {
    const script = document.createElement('script')
    script.async = true
    script.src = pixelScriptUrl
    document.head.appendChild(script)
  }

  fbq('consent', 'grant')
  pixelInitialized = true
}

export function AnalyticsConsent() {
  const pathname = usePathname()
  const snapshot = useSyncExternalStore(subscribeToChoice, readConsentSnapshot, () => 'unset|unset')
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false)
  const [metaAllowed, setMetaAllowed] = useState(false)
  const lastPage = useRef<string | null>(null)
  const lastMetaPage = useRef<string | null>(null)
  const [savedAnalyticsChoice, savedMetaChoice] = snapshot.split('|')

  useEffect(() => {
    const openSettings = () => setSettingsOpen(true)
    window.addEventListener('kiszely:analytics-settings', openSettings)
    return () => window.removeEventListener('kiszely:analytics-settings', openSettings)
  }, [])

  useEffect(() => {
    setAnalyticsAllowed(readAnalyticsChoice() === 'accepted')
    setMetaAllowed(readMetaConsentChoice() === 'accepted')
  }, [snapshot, settingsOpen])

  useEffect(() => {
    const page = window.location.origin + window.location.pathname

    if (analyticsId && readAnalyticsChoice() === 'accepted') {
      startAnalytics()
      if (lastPage.current !== page) {
        lastPage.current = page
        window.gtag?.('event', 'page_view', { page_location: page, page_title: document.title })
      }
    } else {
      lastPage.current = null
      window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
    }

    if (metaPixelId && readMetaConsentChoice() === 'accepted') {
      startMetaPixel()
      if (lastMetaPage.current !== page) {
        lastMetaPage.current = page
        window.fbq?.('track', 'PageView')
      }
    } else {
      lastMetaPage.current = null
      window.fbq?.('consent', 'revoke')
    }
  }, [snapshot, pathname])

  const needsChoice =
    (Boolean(analyticsId) && savedAnalyticsChoice === 'unset') ||
    (Boolean(metaPixelId) && savedMetaChoice === 'unset')

  if ((!analyticsId && !metaPixelId) || (!needsChoice && !settingsOpen)) return null

  const decide = (allowAnalytics: boolean, allowMeta: boolean) => {
    const wasAnalyticsAllowed = readAnalyticsChoice() === 'accepted'
    const wasMetaAllowed = readMetaConsentChoice() === 'accepted'

    if (analyticsId) saveAnalyticsChoice(allowAnalytics ? 'accepted' : 'rejected')
    if (metaPixelId) saveMetaConsentChoice(allowMeta ? 'accepted' : 'rejected')

    window.dispatchEvent(new Event(choiceChanged))
    setSettingsOpen(false)

    const revokedAnalytics = wasAnalyticsAllowed && !allowAnalytics
    const revokedMeta = wasMetaAllowed && !allowMeta
    if (revokedAnalytics) window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
    if (revokedMeta) window.fbq?.('consent', 'revoke')
    if (revokedAnalytics || revokedMeta) window.location.reload()
  }

  return (
    <aside role="dialog" aria-label="Mérési beállítások" className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-border bg-background p-5 shadow-2xl sm:p-6">
      <h2 className="text-lg font-bold text-foreground">Mérési beállítások</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Az alábbi választható mérések nem szükségesek az oldal vagy az űrlap használatához. Ha valamelyiket elutasítja, attól még elküldheti a jelentkezését. A választását később a láblécben módosíthatja.{' '}
        <Link href="/hu/adatkezeles/" className="text-primary underline">Részletek az adatkezelésről</Link>.
      </p>

      <div className="mt-4 grid gap-3">
        {analyticsId && (
          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3">
            <input type="checkbox" checked={analyticsAllowed} onChange={(event) => setAnalyticsAllowed(event.target.checked)} className="mt-1" />
            <span className="text-sm leading-relaxed text-muted-foreground">
              <strong className="block text-foreground">Statisztikai mérés (Google Analytics)</strong>
              Segít megérteni, mely oldalakat látogatják meg, és hogy sikeresen elküldhető-e az űrlap.
            </span>
          </label>
        )}
        {metaPixelId && (
          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3">
            <input type="checkbox" checked={metaAllowed} onChange={(event) => setMetaAllowed(event.target.checked)} className="mt-1" />
            <span className="text-sm leading-relaxed text-muted-foreground">
              <strong className="block text-foreground">Hirdetési mérés és célzás (Meta)</strong>
              A Meta Pixel az oldalmegtekintést, a Conversions API a sikeresen elküldött prototípus-jelentkezést méri. A Meta az oldal és a böngésző technikai adatait, valamint az elérhető Meta böngésző- és hirdetéskattintás-azonosítókat kapja meg; az űrlap mezőinek tartalmát nem.
            </span>
          </label>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" className="button-primary" onClick={() => decide(analyticsAllowed, metaAllowed)}>Beállítások mentése</button>
        <button type="button" className="button-outline" onClick={() => decide(true, true)}>Mindet elfogadom</button>
        <button type="button" className="button-outline" onClick={() => decide(false, false)}>Mindet elutasítom</button>
      </div>
    </aside>
  )
}

export function AnalyticsSettingsButton() {
  if (!analyticsId && !metaPixelId) return null
  return <button type="button" className="hover:text-foreground" onClick={() => window.dispatchEvent(new Event('kiszely:analytics-settings'))}>Mérési beállítások</button>
}
