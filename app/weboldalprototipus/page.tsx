import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PrototypeLeadForm from './prototype-lead-form'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Ingyenes weboldal-prototípus vállalkozásoknak',
  description: 'Kérj személyre szabott weboldal-prototípust a vállalkozásodnak. Töltsd ki a rövid űrlapot, és 4 napon belül jelentkezem az első változattal.',
  robots: { index: false, follow: true },
}

export default function WebsitePrototypePage() {
  return (
    <main className={styles.page}>
      <header className={styles.top}>
        <div className={styles.wrap + ' ' + styles.topInner}>
          <Link className={styles.brand} href="/hu/" aria-label="Kiszely Marketing kezdőlap">
            <Image src="/images/kiszely-logo.webp" alt="" width={48} height={48} priority />
            <span>KISZELY MARKETING</span>
          </Link>
          <a className={styles.headerCta} href="#jelentkezes">Jelentkezem</a>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.wrap + ' ' + styles.heroGrid}>
          <div>
            <p className={styles.eyebrow}>Weboldal-prototípus vállalkozásoknak</p>
            <h1>Nézd meg, hogyan nézhetne ki a vállalkozásod weboldala.</h1>
            <div className={styles.offer}><span className={styles.offerMark} aria-hidden="true">✓</span><span>Ingyenes prototípus, kötelezettség nélkül.</span></div>
            <p className={styles.heroNote}>A jelentkezés elküldése után 4 napon belül elkészítem az első, személyre szabott prototípust. Ezután megnézheted az elképzelést, és eldöntheted, szeretnéd-e véglegesíteni az oldalt.</p>
          </div>
          <div className={styles.formCard} id="jelentkezes">
            <h2>Mutasd meg, mivel foglalkozol</h2>
            <p className={styles.formIntro}>Töltsd ki ezt a rövid űrlapot, és 4 napon belül elkészítem a vállalkozásodra szabott prototípust.</p>
            <PrototypeLeadForm />
          </div>
        </div>
      </section>

      <section className={styles.how} aria-labelledby="how-title">
        <div className={styles.wrap + ' ' + styles.howInner}>
          <div><p className={styles.eyebrow}>Egyszerű jelentkezés</p><h2 id="how-title">Nézd meg az elképzelést, mielőtt döntesz a végleges weboldalról.</h2></div>
          <ol className={styles.steps}>
            <li><span className={styles.stepDot}>1</span><span><strong>Elküldöd a rövid űrlapot.</strong>Megadod a vállalkozásod nevét, jelenlegi oldalát és azt, mit vársz az új weboldaltól.</span></li>
            <li><span className={styles.stepDot}>2</span><span><strong>Elkészítem a személyre szabott prototípust.</strong>A vállalkozásod és a megadott cél alapján megtervezem az első változatot.</span></li>
            <li><span className={styles.stepDot}>3</span><span><strong>4 napon belül megkapod az első változatot.</strong>Díjmentesen megnézheted, hogyan nézhet ki az új weboldalad. A folytatásról csak ezután döntesz.</span></li>
          </ol>
        </div>
      </section>
      <footer className={styles.footer}><div className={styles.wrap + ' ' + styles.footerInner}><span>© 2026 Kiszely Marketing · Kiszely SRL</span><Link href="/hu/adatkezeles/">Adatkezelési tájékoztató</Link></div></footer>
    </main>
  )
}
