'use client'

import { useActionState } from 'react'
import { ArrowRight, LoaderCircle } from 'lucide-react'
import { sendContact, type ContactState } from '@/app/actions/sendContact'

const initialState: ContactState = { status: 'idle', message: '' }

const copy = {
  hu: {
    fields: { name: 'Név', email: 'E-mail cím', phone: 'Telefonszám', company: 'Vállalkozás neve', service: 'Miben segíthetünk?', message: 'Röviden a projektről' },
    optional: 'opcionális',
    choose: 'Válasszon szolgáltatást',
    services: ['Google Térkép Top 3', 'Google Cégprofil optimalizálás', 'Weboldal készítés', 'Más / még nem tudom'],
    placeholder: 'Mivel foglalkozik a vállalkozása, és milyen weboldalt vagy online megoldást szeretne?',
    submit: 'Üzenet küldése',
    pending: 'Küldés folyamatban…',
    privacy: 'A megadott adatokat kizárólag a megkeresés megválaszolására használjuk.',
  },
  en: {
    fields: { name: 'Name', email: 'Email address', phone: 'Phone number', company: 'Company name', service: 'How can we help?', message: 'Brief project details' },
    optional: 'optional',
    choose: 'Choose a service',
    services: ['New website', 'Existing website improvement', 'Top 3 ranking on Google Maps within 90 days / Google Business Profile', 'Not sure, request a consultation'],
    placeholder: 'What does your business do, and what kind of website or online solution do you need?',
    submit: 'Send enquiry',
    pending: 'Sending…',
    privacy: 'We use your details only to respond to this enquiry.',
  },
} as const

export function ContactForm({ language }: { language: 'hu' | 'en' }) {
  const t = copy[language]
  const [state, formAction, pending] = useActionState(sendContact, initialState)

  return (
    <form action={formAction} className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-7 shadow-sm lg:p-9">
      <input type="hidden" name="language" value={language} />
      <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-field"><span>{t.fields.name} *</span><input name="name" required maxLength={120} autoComplete="name" /></label>
        <label className="form-field"><span>{t.fields.email} *</span><input name="email" type="email" required maxLength={180} autoComplete="email" /></label>
        <label className="form-field"><span>{t.fields.phone} <small>({t.optional})</small></span><input name="phone" type="tel" maxLength={80} autoComplete="tel" /></label>
        <label className="form-field"><span>{t.fields.company} <small>({t.optional})</small></span><input name="company" maxLength={180} autoComplete="organization" /></label>
      </div>
      <label className="form-field"><span>{t.fields.service} *</span><select name="service" required defaultValue=""><option value="" disabled>{t.choose}</option>{t.services.map(item => <option key={item} value={item}>{item}</option>)}</select></label>
      <label className="form-field"><span>{t.fields.message} *</span><textarea name="message" required maxLength={4000} rows={6} placeholder={t.placeholder} /></label>
      {state.message && <p role="status" className={state.status === 'success' ? 'form-success' : 'form-error'}>{state.message}</p>}
      <button type="submit" className="button-primary w-full" disabled={pending}>{pending ? <><LoaderCircle data-icon="inline-start" className="animate-spin" />{t.pending}</> : <>{t.submit}<ArrowRight data-icon="inline-end" /></>}</button>
      <p className="text-xs leading-relaxed text-muted-foreground">{t.privacy}</p>
    </form>
  )
}
