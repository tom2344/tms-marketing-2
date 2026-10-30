import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'

const title = 'Ügyfélszolgálat'
const canonicalUrl = 'https://www.kiszelymarketing.com/hu/ugyfelszolgalat/'

export const metadata: Metadata = {
  title,
  description: 'Kiszely Marketing ügyfélszolgálat: elérhetőség, segítség számlázási, fizetési és szolgáltatási kérdésekben.',
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
}

export default function CustomerSupportPage() {
  return (
    <LegalPage title={title} lead="Szolgáltatással, számlával vagy fizetéssel kapcsolatos kérdés esetén közvetlenül írhat nekünk.">
      <section><h2>Kapcsolat</h2><p>Szolgáltató: Kiszely SRL, Kiszely Marketing néven. Ügyfélszolgálati e-mail: <a href="mailto:tamas@kiszelymarketing.com">tamas@kiszelymarketing.com</a>.</p><p>Írja meg röviden, melyik projektről vagy számláról van szó, és miben kér segítséget. Bankkártyaszámot vagy biztonsági kódot e-mailben nem kérünk.</p></section>
      <section><h2>Fizetés, lemondás, visszatérítés</h2><p>Ha nem ismer fel egy terhelést, hibásnak tart egy számlát, módosítaná vagy lemondaná a szolgáltatást, illetve visszatérítést kérne, írjon a fenti címre. A <Link href="/hu/fizetes-lemondas-visszaterites/">fizetésről, lemondásról és visszatérítésről szóló oldal</Link> leírja az alapelveket és a kezdeményezés módját. A konkrét projekt írásos megállapodását is figyelembe vesszük.</p></section>
      <section><h2>Új projekt</h2><p>Ha még nem ügyfelünk, a <Link href="/hu/kapcsolat/">kapcsolatfelvételi oldalon</Link> is írhat nekünk. A szolgáltatások általános feltételei az <Link href="/hu/aszf/">ÁSZF-ben</Link>, az adatok kezelésének részletei az <Link href="/hu/adatkezeles/">adatkezelési tájékoztatóban</Link> találhatók.</p></section>
    </LegalPage>
  )
}
