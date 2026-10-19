import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'

const title = 'Fizetés, lemondás és visszatérítés'
const canonicalUrl = 'https://www.kiszelymarketing.com/hu/fizetes-lemondas-visszaterites/'

export const metadata: Metadata = {
  title,
  description: 'A Kiszely Marketing szolgáltatásainak fizetési, lemondási, visszatérítési és számlavitával kapcsolatos tájékoztatója.',
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
}

export default function PaymentPolicyPage() {
  return (
    <LegalPage title={title} lead="A weboldal-készítés és a Google Térkép Top 3 szolgáltatás eltérő munkát jelent. A pontos vállalást és díjat minden munka előtt írásban egyeztetjük.">
      <section><h2>Árak és fizetés</h2><p>A weboldalon látható árak magyar forintban (HUF) szerepelnek. A <Link href="/hu/google-terkep-top-3/">Google Térkép Top 3 szolgáltatás</Link> egyszeri induló díja 300.000 Ft, a folyamatos fenntartás díja 35.000 Ft havonta. A <Link href="/hu/weboldal-keszites-budapest/">weboldal-készítési csomagok</Link> árát a szolgáltatási oldalon találja; a végleges díj a konkrét feladatoktól függ. A fizetendő összeg, a pénznem, a fizetési mód és a határidő az elfogadott ajánlaton és a számlán vagy fizetési linken szerepel. A weboldalon jelenleg nincs közvetlen bankkártyás fizetés.</p></section>
      <section><h2>Munka és átadás</h2><p>Weboldal készítésénél a terjedelmet, a funkciókat, a szükséges ügyfélanyagokat és az átadás módját előre tisztázzuk. A Google Térkép-szolgáltatás induló munkából és havi folytatásból áll. Nem kérünk minden projekthez külön aláírt papírszerződést; a konkrét megállapodást írásban, például e-mailben rögzítjük.</p></section>
      <section><h2>Lemondás</h2><p>Ha lemondaná a munkát vagy a havi szolgáltatást, írjon a <a href="mailto:tamas@kiszelymarketing.com">tamas@kiszelymarketing.com</a> címre, és nevezze meg az érintett projektet. Nincs hosszú felmondási idő vagy külön lemondási díj. A következő, még meg nem kezdett havi időszakra nem folytatjuk a munkát és nem számlázunk új fenntartási díjat. A már megkezdett munkát az addigi teljesítés alapján számoljuk el.</p></section>
      <section><h2>Visszatérítés egyedi munkánál</h2><p>Weboldal-készítésnél és más egyedi munkánál nincs minden projektre azonos visszatérítési összeg. Lemondás esetén együtt áttekintjük az elfogadott feladatokat, a már elvégzett munkát és a befizetett összeget. Ha a befizetésből még nem teljesített munkára eső rész marad, azt visszatérítjük. A már elvégzett munka és az előre egyeztetett külső költségek elszámolását a konkrét projekt alapján tisztázzuk.</p></section>
      <section><h2>A Google Térkép Top 3 garanciája</h2><p>A kezdés előtt írásban rögzítjük a megbeszélt keresést, szolgáltatási területet és az ellenőrzés módját. Ha addig nem érjük el a megbeszélt Top 3 helyezést, Ön nem fizet tovább, és az addig befizetett teljes összeget visszafizetjük. Nincs kilépési díj, nincs vita, minden addig befizetett forintot visszakap. Ez a 90 napos garancia a <Link href="/hu/google-terkep-top-3/">Google Térkép Top 3 szolgáltatásra</Link> vonatkozik, nem minden weboldal-készítési munkára.</p></section>
      <section><h2>Számlázási kérdés vagy fizetési vita</h2><p>Ha nem ismer fel egy terhelést, hibásnak tart egy számlát, vagy visszatérítést kér, írjon a <a href="mailto:tamas@kiszelymarketing.com">tamas@kiszelymarketing.com</a> címre. Adja meg az érintett számla vagy projekt adatait, hogy ellenőrizhessük a fizetést és a teljesítést. Bankkártyaszámot e-mailben nem kérünk.</p></section>
    </LegalPage>
  )
}
