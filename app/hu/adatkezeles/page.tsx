import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'

const title = 'Adatkezelési tájékoztató'
const canonicalUrl = 'https://www.kiszelymarketing.com/hu/adatkezeles/'

export const metadata: Metadata = {
  title,
  description: 'A Kiszely Marketing weboldalának, kapcsolatfelvételének és fizetési ügyintézésének adatkezelési tájékoztatója.',
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <LegalPage title={title} lead="Itt olvashatja, milyen adatokat használunk a kapcsolatfelvétel, a szolgáltatás és a fizetési ügyintézés során.">
      <section><h2>Adatkezelő és elérhetőség</h2><p>A szolgáltatást a romániai Kiszely SRL nyújtja Kiszely Marketing néven. Az adatkezeléssel kapcsolatos kérdéseit és kérelmeit a <a href="mailto:tamas@kiszelymarketing.com">tamas@kiszelymarketing.com</a> címre küldheti.</p></section>
      <section><h2>Kapcsolatfelvétel és ajánlatkérés</h2><p>Az űrlapon a név, a telefonszám és az érdeklődés tárgya kötelező; az e-mail-cím, a vállalkozás neve és a projekt leírása opcionális. Közvetlen e-mail esetén az üzenetében megadott adatokat kapjuk meg. Ezeket a megkeresés megválaszolására, az igények egyeztetésére és egy esetleges ajánlat előkészítésére használjuk. Ennek jogalapja az Ön kérésére történő szerződéskötés előtti egyeztetés, illetve a kapcsolattartáshoz fűződő jogos érdekünk.</p><p>Az űrlapos üzeneteket a Resend továbbítja az e-mail-fiókunkba. A weboldal nem épít külön érdeklődői adatbázist. A levelezést addig őrizzük meg, amíg a megkeresés és az abból eredő esetleges igények kezelése indokolja; ha szerződés jön létre, a kapcsolódó dokumentumokra az alábbi megőrzési szabályok vonatkoznak.</p></section>
      <section><h2>Szolgáltatás, számlázás és Stripe-fizetés</h2><p>Ha együtt dolgozunk, a kapcsolattartó és a számlázási adatokat, az elfogadott ajánlatot, a teljesítéshez szükséges információkat, a számlákat és a fizetés állapotát kezeljük a megállapodás teljesítéséhez, az ügyintézéshez és a jogszabályi kötelezettségekhez. Az ehhez szükséges adatok megadása nélkül a szerződés teljesítése vagy a számla kiállítása nem feltétlenül lehetséges.</p><p>Ha Stripe-számlát vagy fizetési linket küldünk, a fizetés a Stripe felületén történik. A Stripe a fizetéshez szükséges adatokat a saját tájékoztatója szerint is kezeli; mi a fizetéshez kapcsolódó ügyfél-, számla- és tranzakciós adatokat kapjuk meg. A weboldalunkon nem kérünk és nem tárolunk bankkártyaszámot. A Stripe adatkezeléséről a <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe adatvédelmi tájékoztatójában</a> olvashat.</p><p>A szerződéses és számlázási iratokat a vonatkozó számviteli és adójogi megőrzési idő végéig, az esetleges igényekkel kapcsolatos adatokat az igények rendezéséhez szükséges ideig kezeljük.</p></section>
      <section><h2>Weboldalhasználat és technikai szolgáltatók</h2><p>A weboldalt a Vercel szolgálja ki, amely a működéshez és a biztonsághoz szükséges technikai adatokat kezelhet. A Vercel Web Analytics összesített látogatási statisztikát ad. A weboldal kódjában nincs Google Analytics, hirdetési pixel vagy beágyazott Stripe-fizetési űrlap. A szolgáltatás működtetéséhez a Vercel, a Resend, az e-mail-szolgáltatónk és fizetés esetén a Stripe férhet hozzá a feladatukhoz szükséges adatokhoz.</p><p>A weboldal HTTPS-kapcsolatot használ. A szolgáltatói fiókokhoz való hozzáférést jogosultságok korlátozzák. Az említett szolgáltatók nemzetközi infrastruktúrát is igénybe vehetnek; az ilyen adatkezelés részleteit és az alkalmazott védelmi intézkedéseket saját adatvédelmi tájékoztatóik ismertetik.</p></section>
      <section><h2>Az Ön jogai</h2><p>Az alkalmazandó adatvédelmi szabályok szerint kérhet tájékoztatást és hozzáférést az adataihoz, azok helyesbítését vagy törlését, a kezelés korlátozását, illetve adott esetben adathordozhatóságot; jogos érdeken alapuló kezelés ellen tiltakozhat. Kérelmét a fenti e-mail-címen fogadjuk. Panasszal a román adatvédelmi hatósághoz, az <a href="https://www.dataprotection.ro/" target="_blank" rel="noopener noreferrer">ANSPDCP-hez</a> vagy az illetékes másik felügyeleti hatósághoz fordulhat.</p></section>
      <section><h2>Változások és kapcsolódó oldalak</h2><p>Ha az adatkezelésünk vagy a weboldal fizetési megoldása változik, ezt a tájékoztatót frissítjük. A fizetéssel, lemondással és visszatérítéssel kapcsolatos tudnivalókat a <Link href="/hu/fizetes-lemondas-visszaterites/">külön tájékoztató</Link>, az ügyintézés módját az <Link href="/hu/ugyfelszolgalat/">ügyfélszolgálati oldal</Link> tartalmazza.</p></section>
    </LegalPage>
  )
}
