import { Resend } from 'resend'

export const runtime = 'nodejs'


type MetaLeadEvent = { eventId: string; userAgent: string; pageUrl: string }

async function sendMetaLeadEvent({ eventId, userAgent, pageUrl }: MetaLeadEvent) {
  const datasetId = process.env.META_CAPI_DATASET_ID
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN
  if (!datasetId || !accessToken) return

  const endpoint = new URL(`https://graph.facebook.com/v25.0/${encodeURIComponent(datasetId)}/events`)
  endpoint.searchParams.set('access_token', accessToken)
  const payload = {
    data: [{
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      action_source: 'website',
      event_source_url: pageUrl,
      user_data: { client_user_agent: userAgent },
    }],
    ...(process.env.META_CAPI_TEST_EVENT_CODE ? { test_event_code: process.env.META_CAPI_TEST_EVENT_CODE } : {}),
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(5000),
    })
    const result = await response.json().catch(() => null) as {
      events_received?: unknown
      error?: { code?: unknown; error_subcode?: unknown; message?: unknown }
    } | null

    if (!response.ok) {
      const apiError = result?.error
      console.error('[meta-capi] Lead event was rejected:', JSON.stringify({
        status: response.status,
        code: typeof apiError?.code === 'number' ? apiError.code : undefined,
        error_subcode: typeof apiError?.error_subcode === 'number' ? apiError.error_subcode : undefined,
        message: typeof apiError?.message === 'string' ? apiError.message.slice(0, 240) : undefined,
      }))
      return
    }

    console.info('[meta-capi] Lead event accepted:', JSON.stringify({
      events_received: typeof result?.events_received === 'number' ? result.events_received : undefined,
    }))
  } catch {
    console.error('[meta-capi] Lead event could not be sent')
  }
}

const clean = (value: unknown, limit: number) =>
  typeof value === 'string'
    ? value.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, limit)
    : ''

const json = (body: Record<string, boolean | string>, status = 200) =>
  Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } })

export async function POST(request: Request) {
  const origin = request.headers.get('origin')
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) return json({ error: 'invalid_origin' }, 403)
    } catch {
      return json({ error: 'invalid_origin' }, 403)
    }
  }

  let body: Record<string, unknown>
  try {
    body = await request.json() as Record<string, unknown>
  } catch {
    return json({ error: 'invalid_request' }, 400)
  }

  if (clean(body.website, 200)) return json({ ok: true })
  const business = clean(body.business, 160)
  const currentPresence = clean(body.current_presence, 2048)
  const goal = clean(body.goal, 3000)
  const contact = clean(body.contact, 300)

  if (!business || !currentPresence || !goal || !contact) return json({ error: 'missing_fields' }, 400)
  try {
    const url = new URL(currentPresence)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return json({ error: 'invalid_url' }, 400)
  } catch {
    return json({ error: 'invalid_url' }, 400)
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[prototype-lead] RESEND_API_KEY is not configured')
    return json({ error: 'not_configured' }, 503)
  }

  const replyTo = contact.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0]
  const text = [
    'Új weboldal-prototípus jelentkezés',
    '',
    `Vállalkozás: ${business}`,
    `Jelenlegi oldal: ${currentPresence}`,
    '',
    'Cél az új weboldallal:',
    goal,
    '',
    `Kapcsolat: ${contact}`,
  ].join('\n')

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: 'Kiszely Marketing <idopont@kiszelymarketing.com>',
      to: ['tamas@kiszelymarketing.com'],
      ...(replyTo ? { replyTo } : {}),
      subject: `Új prototípus-jelentkezés – ${business}`,
      text,
    })
    if (error) {
      console.error('[prototype-lead] Resend rejected the message:', error.message)
      return json({ error: 'email_send_failed' }, 502)
    }
    if (body.measurement_consent === true && process.env.META_CAPI_ACCESS_TOKEN && process.env.META_CAPI_DATASET_ID) {
      const eventId = clean(body.event_id, 36)
      const userAgent = request.headers.get('user-agent')
      if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(eventId) && userAgent) {
        await sendMetaLeadEvent({ eventId, userAgent, pageUrl: new URL('/weboldalprototipus/', request.url).href })
      }
    }
    return json({ ok: true })
  } catch {
    console.error('[prototype-lead] Email submission failed')
    return json({ error: 'email_send_failed' }, 502)
  }
}
