import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

const title = 'Adatkezelési tájékoztató'
const canonicalUrl = 'https://www.kiszelymarketing.com/hu/adatkezeles/'

export const metadata: Metadata = {
  title,
  description: 'A Kiszely Marketing kapcsolatfelvételi űrlapjának és weboldalának adatkezelési tájékoztatója.',
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <LegalPage title={title} lead="A kapcsolatfelvételhez szükséges adatokat kezeljük, és összesített adatokat használunk a weboldal látogatottságának megértéséhez.">
      <section><h2>Ki kezeli az adatokat?</h2><p>A Kiszely Marketing szolgáltatást a Kiszely SRL romániai társaság nyújtja. Adatkezelési kérdéssel a <a href="mailto:tamas@kiszelymarketing.com">tamas@kiszelymarketing.com</a> címen érhet el minket.</p></section>
      <section><h2>Kapcsolatfelvétel</h2><p>Az űrlapon a név, telefonszám és az érdeklődés tárgya kötelező. Az e-mail-cím, a vállalkozás neve és a projekt rövid leírása opcionális. Az Ön által megadott adatokat a megkeresés megválaszolására, a szolgáltatás egyeztetésére és az esetleges ajánlat előkészítésére használjuk. Az ajánlatkérés kezelése az Ön kérésére történik; a kapcsolódó üzleti levelezést az egyeztetés és az esetleges igények rendezéséhez szükséges ideig őrizzük meg.</p><p>Az űrlapos üzeneteket a Resend továbbítja a Google által üzemeltetett e-mail-fiókunkba. A weboldal nem tárol külön érdeklődői adatbázist. Közvetlen e-mail esetén az üzenetében önként megadott adatokat kezeljük.</p></section>
      <section><h2>Weboldalhasználat</h2><p>A weboldalt a Vercel szolgálja ki, amely a működéshez szükséges technikai adatokat kezelhet. A Vercel Web Analytics összesített látogatási statisztikát ad. A Vercel tájékoztatása szerint ez a megoldás nem használ harmadik féltől származó követősütit, és a statisztika nem azonosítja név szerint a látogatót. A weboldal kódjában nincs Google Analytics, hirdetési pixel vagy beágyazott Stripe-fizetés. A weboldalon nem kérünk bankkártyaadatot.</p></section>
      <section><h2>Hozzáférés és jogok</h2><p>Az adatokhoz a megkeresést kezelő Kiszely Marketing és a fenti technikai szolgáltatók férhetnek hozzá a szolgáltatás működtetéséhez szükséges mértékben. Ha az adatairól tájékoztatást, hozzáférést, helyesbítést vagy törlést kérne, írjon a fenti e-mail-címre. Az alkalmazandó adatvédelmi szabályok szerint más jogok is megillethetik, és panasszal fordulhat az illetékes adatvédelmi hatósághoz.</p></section>
      <section><h2>Változások</h2><p>Ha új mérési vagy fizetési megoldást vezetünk be a weboldalon, a tájékoztatót a használat előtt frissítjük. A később külön küldött Stripe-számla vagy fizetési link nem része a jelenlegi weboldali űrlapnak.</p></section>
    </LegalPage>
  )
}
