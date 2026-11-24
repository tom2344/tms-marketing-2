export const analyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ''
export const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ''

const consentKey = 'kiszely-measurement-consent-v2'
const consentLifetime = 180 * 24 * 60 * 60 * 1000
let sessionChoice: AnalyticsChoice | null = null

export type AnalyticsChoice = 'accepted' | 'rejected'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue?: unknown[]; loaded?: boolean; version?: string }
  }
}

export function readAnalyticsChoice(): AnalyticsChoice | null {
  if (typeof window === 'undefined') return null
  if (sessionChoice) return sessionChoice
  try {
    const stored = JSON.parse(window.localStorage.getItem(consentKey) ?? 'null') as { choice?: unknown; time?: unknown } | null
    if (stored && (stored.choice === 'accepted' || stored.choice === 'rejected') && typeof stored.time === 'number' && Date.now() - stored.time < consentLifetime) {
      return stored.choice
    }
  } catch {
    // A blocked storage API leaves analytics off until the visitor chooses again.
  }
  return null
}

export function saveAnalyticsChoice(choice: AnalyticsChoice) {
  sessionChoice = choice
  try {
    window.localStorage.setItem(consentKey, JSON.stringify({ choice, time: Date.now() }))
  } catch {
    // The visitor's choice still applies for this page session.
  }
}

export function trackSuccessfulLead(eventId: string) {
  if (typeof window === 'undefined' || readAnalyticsChoice() !== 'accepted') return
  if (analyticsId) window.gtag?.('event', 'generate_lead')
  if (metaPixelId) window.fbq?.('track', 'Lead', {}, { eventID: eventId })
}
