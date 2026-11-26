export const analyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ''
export const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ''

const analyticsConsentKey = 'kiszely-measurement-consent-v2'
const legacyAnalyticsConsentKey = 'kiszely-analytics-consent'
const metaConsentKey = 'kiszely-meta-consent-v1'
const consentLifetime = 180 * 24 * 60 * 60 * 1000
let sessionAnalyticsChoice: AnalyticsChoice | null = null
let sessionMetaChoice: AnalyticsChoice | null = null

export type AnalyticsChoice = 'accepted' | 'rejected'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void
      queue?: unknown[]
      loaded?: boolean
      version?: string
    }
    _fbq?: Window['fbq']
  }
}

function readStoredChoice(key: string): AnalyticsChoice | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = JSON.parse(window.localStorage.getItem(key) ?? 'null') as { choice?: unknown; time?: unknown } | null
    if (stored && (stored.choice === 'accepted' || stored.choice === 'rejected') && typeof stored.time === 'number' && Date.now() - stored.time < consentLifetime) {
      return stored.choice
    }
  } catch {
    // A blocked storage API leaves this category off until the visitor chooses.
  }
  return null
}

export function readAnalyticsChoice(): AnalyticsChoice | null {
  if (typeof window === 'undefined') return null
  if (sessionAnalyticsChoice) return sessionAnalyticsChoice
  return readStoredChoice(analyticsConsentKey) ?? readStoredChoice(legacyAnalyticsConsentKey)
}

export function readMetaConsentChoice(): AnalyticsChoice | null {
  if (typeof window === 'undefined') return null
  if (sessionMetaChoice) return sessionMetaChoice
  return readStoredChoice(metaConsentKey)
}

export function readConsentSnapshot(): string {
  return (readAnalyticsChoice() ?? 'unset') + '|' + (readMetaConsentChoice() ?? 'unset')
}

export function saveAnalyticsChoice(choice: AnalyticsChoice) {
  sessionAnalyticsChoice = choice
  try {
    window.localStorage.setItem(analyticsConsentKey, JSON.stringify({ choice, time: Date.now() }))
  } catch {
    // The visitor's choice still applies for this page session.
  }
}

export function saveMetaConsentChoice(choice: AnalyticsChoice) {
  sessionMetaChoice = choice
  try {
    window.localStorage.setItem(metaConsentKey, JSON.stringify({ choice, time: Date.now() }))
  } catch {
    // The visitor's choice still applies for this page session.
  }
}

export function trackSuccessfulLead(eventId?: string) {
  if (typeof window === 'undefined') return
  if (analyticsId && readAnalyticsChoice() === 'accepted') {
    window.gtag?.('event', 'generate_lead')
  }
  if (metaPixelId && readMetaConsentChoice() === 'accepted' && eventId) {
    window.fbq?.('track', 'Lead', {}, { eventID: eventId })
  }
}

export function shouldTrackSuccessfulLead(status: 'idle' | 'success' | 'error', sentId?: string, trackedSentId?: string | null) {
  return status === 'success' && Boolean(sentId) && trackedSentId !== sentId
}
