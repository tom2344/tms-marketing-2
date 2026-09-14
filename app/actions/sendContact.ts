'use server'

import { Resend } from 'resend'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;',
}[char] ?? char))

export async function sendContact(_: ContactState, formData: FormData): Promise<ContactState> {
  const language = formData.get('language') === 'en' ? 'en' : 'hu'
  const messages = language === 'hu'
    ? { invalid: 'Kérjük, töltse ki helyesen az összes kötelező mezőt.', success: 'Köszönjük! Az üzenetét megkaptuk, hamarosan jelentkezünk.', error: 'Az üzenet küldése most nem sikerült. Kérjük, próbálja újra, vagy írjon e-mailt.' }
    : { invalid: 'Please complete all required fields correctly.', success: 'Thank you. Your message has been received and we will be in touch shortly.', error: 'Your message could not be sent. Please try again or contact us by email.' }

  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const company = String(formData.get('company') ?? '').trim()
  const service = String(formData.get('service') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const honeypot = String(formData.get('website') ?? '').trim()

  if (honeypot) return { status: 'success', message: messages.success }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!name || !validEmail || !service || !message || name.length > 120 || email.length > 180 || phone.length > 80 || company.length > 180 || service.length > 160 || message.length > 4000) {
    return { status: 'error', message: messages.invalid }
  }

  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[Kiszely contact] RESEND_API_KEY environment variable is missing')
      throw new Error('RESEND_API_KEY is not configured')
    }

    const resend = new Resend(apiKey)
    const rows = [
      ['Név', name], ['E-mail', email], ['Telefon', phone || 'Nincs megadva'], ['Vállalkozás', company || 'Nincs megadva'], ['Érdeklődés', service], ['Üzenet', message],
    ]

    console.log('[Kiszely contact] Attempting to send email with form data:', {
      name,
      email,
      service,
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    })

    // Use a verified domain email for production. 
    // IMPORTANT: onboarding@resend.dev only works for testing. For production:
    // 1. Verify your domain in Resend dashboard: https://dashboard.resend.com/domains
    // 2. Set RESEND_FROM_EMAIL to your verified domain email (e.g., noreply@yourdomain.com)
    // If not configured, the form will fail. Please set RESEND_FROM_EMAIL environment variable.
    const senderEmail = process.env.RESEND_FROM_EMAIL
    if (!senderEmail) {
      console.error('[Kiszely contact] RESEND_FROM_EMAIL not configured. Set this environment variable to your verified domain email.')
      throw new Error('RESEND_FROM_EMAIL environment variable is required for production')
    }

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: ['tokolitamas7@gmail.com'],
      replyTo: email,
      subject: `Új érdeklődés – ${name}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#171717"><h1 style="font-size:24px">Új érdeklődés a Kiszely Marketing weboldalról</h1><table style="width:100%;border-collapse:collapse">${rows.map(([label, value]) => `<tr><th style="text-align:left;padding:12px;border-bottom:1px solid #ddd;vertical-align:top;width:140px">${escapeHtml(label)}</th><td style="padding:12px;border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join('')}</table></div>`,
    })

    if (error) {
      console.error('[Kiszely contact] Resend API error:', {
        error: error.message,
        code: (error as any).code,
        details: (error as any).details,
        timestamp: new Date().toISOString(),
      })
      throw error
    }

    console.log('[Kiszely contact] Email sent successfully:', {
      messageId: data?.id,
      timestamp: new Date().toISOString(),
    })

    return { status: 'success', message: messages.success }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('[Kiszely contact] Email delivery failed:', {
      error: errorMessage,
      type: error instanceof Error ? error.name : typeof error,
      timestamp: new Date().toISOString(),
    })
    return { status: 'error', message: messages.error }
  }
}
