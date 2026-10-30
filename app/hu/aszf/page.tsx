import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'

const title = 'Általános szerződési feltételek'
const canonicalUrl = 'https://www.kiszelymarketing.com/hu/aszf/'

export const metadata: Metadata = {
  title,
  description: 'A Kiszely Marketing weboldal-készítési és Google Térkép Top 3 szolgáltatásainak általános feltételei.',
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <LegalPage title={title} lead="A Kiszely Marketing szolgáltatásainak általános feltételei. A konkrét feladatot és díjat minden munka előtt írásban egyeztetjük.">
      <section><h2>Szolgáltató és kapcsolat</h2><p>A Kiszely Marketing szolgáltatást a romániai Kiszely SRL nyújtja. E-mail: <a href="mailto:tamas@kiszelymarketing.com">tamas@kiszelymarketing.com</a>. Szolgáltatási vagy fizetési kérdéssel az <Link href="/hu/ugyfelszolgalat/">ügyfélszolgálati oldalon</Link> megadott módon fordulhat hozzánk.</p></section>
      <section><h2>Szolgáltatások és megrendelés</h2><p>Weboldalakat készítünk, valamint jogosult helyi vállalkozásoknak Google Térkép Top 3 szolgáltatást nyújtunk. A weboldal bemutatja a szolgáltatásokat, de önmagában nem hoz létre megrendelést vagy előfizetést. Az együttműködés terjedelmét, az elvégzendő feladatokat, a szükséges ügyfélanyagokat és hozzáféréseket, a díjat, a fizetési ütemezést és az átadást külön, írásos ajánlatban vagy megállapodásban rögzítjük. A munka az ajánlat írásos elfogadása után indul.</p><p>A Google Térkép Top 3 célja egy előre egyeztetett fő keresésre, szolgáltatási területre és mérési módra vonatkozik. A <Link href="/hu/google-terkep-top-3/">szolgáltatási oldalon</Link> található 90 napos pénzvisszafizetési garancia csak erre a szolgáltatásra érvényes. A weboldal-készítésre és az organikus Google-találatokra nem terjed ki.</p></section>
      <section><h2>Díjak és fizetés</h2><p>A weboldalon szereplő árak forintban jelennek meg; a konkrét munka végleges díját, a fizetés pénznemét és esedékességét az elfogadott ajánlat, számla vagy fizetési link tartalmazza. Ha Stripe-fizetési linket küldünk, a fizetés a Stripe felületén történik. A weboldalon jelenleg nincs közvetlen bankkártyás fizetés.</p></section>
      <section><h2>Teljesítés és együttműködés</h2><p>Az ütemezés a vállalt munkától és a szükséges anyagok, jóváhagyások és hozzáférések rendelkezésre állásától függ. Az átadás tartalmát és a későbbi módosítások vagy fenntartás körét az adott megállapodás rögzíti. A Google találatai a keresés helyétől és egyéb tényezőktől változhatnak; a vállalt Top 3 cél ellenőrzési módját ezért előre egyeztetjük.</p></section>
      <section><h2>Lemondás, visszatérítés és panasz</h2><p>A havi szolgáltatás következő, még meg nem kezdett időszaka előtt lemondható, új havi munka és díj nélkül. Az egyedi munka megszakításakor a már elvégzett feladatokat és az előre egyeztetett külső költségeket elszámoljuk, a még nem teljesített munkára jutó előleget visszatérítjük. A Google Térkép Top 3 garanciájának külön szabályát, valamint a lemondás és visszatérítés kezdeményezésének módját a <Link href="/hu/fizetes-lemondas-visszaterites/">fizetési és visszatérítési tájékoztató</Link> részletezi. Panasz vagy számlavita esetén írjon a <a href="mailto:tamas@kiszelymarketing.com">tamas@kiszelymarketing.com</a> címre az érintett projekt vagy számla megjelölésével.</p><p>E feltételek nem korlátozzák az alkalmazandó jog alapján Önt megillető kötelező jogokat. Ha egy konkrét írásos megállapodás valamely kérdésben eltérően rendelkezik, az abban rögzített feltételeket a kötelező jogszabályok keretei között alkalmazzuk.</p></section>
      <section><h2>Adatkezelés</h2><p>A kapcsolatfelvételhez, teljesítéshez és fizetéshez kapcsolódó személyes adatok kezelését az <Link href="/hu/adatkezeles/">adatkezelési tájékoztató</Link> írja le.</p></section>
    </LegalPage>
  )
}
