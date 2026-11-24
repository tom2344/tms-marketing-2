'use client'

import Link from 'next/link'
import { useState, type FormEvent } from 'react'
import styles from './page.module.css'

export default function PrototypeLeadForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch('/api/weboldalprototipus/', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error('submission_failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <div className={styles.formSuccess} role="status" aria-live="polite">
      <p className={styles.eyebrow}>Köszönöm a jelentkezést</p>
      <h2>Elkészítem a prototípust.</h2>
      <p className={styles.formIntro}>A személyre szabott első változattal 4 napon belül jelentkezem.</p>
    </div>
  }

  return (
    <form onSubmit={submit}>
      <div className={styles.honeypot} aria-hidden="true"><label htmlFor="company-website">Hagyd üresen ezt a mezőt</label><input id="company-website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
      <div className={styles.field}><label htmlFor="business">Vállalkozás neve</label><input id="business" name="business" type="text" autoComplete="organization" placeholder="Például: Kovács Építő Kft." maxLength={160} required /></div>
      <div className={styles.field}><label htmlFor="current-presence">Jelenlegi weboldal vagy közösségi oldal linkje</label><input id="current-presence" name="current_presence" type="url" inputMode="url" placeholder="https://…" maxLength={2048} required /><p className={styles.hint}>Ha nincs weboldalad, add meg a Facebook-, Instagram- vagy bármely másik oldalad linkjét, ahol jelen vagy.</p></div>
      <div className={styles.field}><label htmlFor="goal">Mit szeretnél elérni az új weboldallal?</label><textarea id="goal" name="goal" placeholder="Például: több ajánlatkérést, új szolgáltatás bemutatását…" maxLength={3000} required /></div>
      <div className={styles.field}><label htmlFor="contact">Neved és a legjobb elérhetőséged</label><input id="contact" name="contact" type="text" autoComplete="name" placeholder="Név, e-mail-cím vagy telefonszám" maxLength={300} required /></div>
      <button className={styles.submit} type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Küldés folyamatban…' : 'Jelentkezem az ingyenes prototípusra'}</button>
      {status === 'error' && <p className={styles.formError} role="alert">Most nem sikerült elküldeni a jelentkezést. Kérlek, próbáld meg újra, vagy írj a tamas@kiszelymarketing.com címre.</p>}
      <p className={styles.privacy}>Az adataidat a jelentkezésed és a kapcsolatfelvétel érdekében használjuk. Részletek az <Link href="/hu/adatkezeles/">adatkezelési tájékoztatóban</Link>.</p>
      <p className={styles.reviewNote}><strong>Mi történik ezután?</strong> A megadott információkból elkészítem a személyre szabott prototípust. 4 napon belül jelentkezem vele, utána pedig te döntöd el, szeretnéd-e véglegesíteni a weboldalt.</p>
    </form>
  )
}
