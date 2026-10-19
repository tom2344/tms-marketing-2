import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ArticleCard, ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/tudastar/legjobb-marketing-ugynokseg-kisvallalkozasoknak-magyarorszagon/`
const title = 'Legjobb marketing ügynökség kisvállalkozásoknak Magyarországon'
const description = 'Marketingpartnert keres kisvállalkozásának? Nézze meg, mikor segít a Kiszely Marketing a helyi Google-jelenlétben és a weboldalkészítésben, és hogyan válasszon partnert.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, siteName: 'Kiszely Marketing', locale: 'hu_HU', type: 'article', authors: [`${siteUrl}/hu/rolunk/`], images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Kiszely Marketing: útmutató marketingpartner választásához' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}

const situations = [
  ['A közelben kereső ügyfeleket szeretné elérni', 'A Google Térkép és a Cégprofil a fontos felület. Olyan partnert válasszon, aki a jogosultságot, a célzott keresést, a területet és a helyezés mérését is tisztázza.', '/hu/google-terkep-top-3/', 'Google Térkép szolgáltatás'],
  ['Új vagy jobb weboldalra van szüksége', 'A látogatónak gyorsan meg kell értenie, mit kínál, és hogyan léphet kapcsolatba Önnel. A tartalom, a mobilos használhatóság és a technikai alapok együtt számítanak.', '/hu/weboldal-keszites-budapest/', 'Weboldal-készítés'],
  ['Hirdetés vagy országos keresőoptimalizálás a fő cél', 'Fizetett kampányokhoz vagy nagy, országos tartalmi projekthez az adott feladatra szakosodott partnert keressen. Ezek nem tartoznak a Kiszely Marketing itt bemutatott szolgáltatásai közé.', null, null],
] as const

const questions = [
  ['Milyen üzleti célt vállalnak?', 'Tisztázzák, hogy kapcsolatfelvételt, ajánlatkérést, foglalást vagy vásárlást szeretne. A megjelenés önmagában nem ugyanaz, mint az új ügyfél.'],
  ['Mi lesz az első konkrét munka?', 'Kérjen írásos feladatlistát: melyik profil, oldal, kampány vagy tartalom változik, ki készíti el, és mit kell Önnek biztosítania.'],
  ['Mit nem tartalmaz az ajánlat?', 'A hirdetési költés, a tárhely, a fotózás, a szövegírás vagy a külön funkciók könnyen kimaradhatnak egy rövid ajánlatból. Kérdezzen rájuk előre.'],
  ['Hogyan mérik a haladást?', 'A választott csatornához illő kiinduló adatot és követési módot rögzítsenek. Térképes munkánál a keresés és a mérési terület; weboldalnál a megkeresések útja is számít.'],
  ['Kié a hozzáférés és az elkészült munka?', 'A domain, a weboldal, a Cégprofil és a hirdetési fiókok hozzáférése maradjon rendezett. Az átadás és a megszűnés feltételeit írják le.'],
  ['Van a feladathoz illő bizonyíték?', 'Kérjen ellenőrizhető munkapéldát vagy jóváhagyott ügyféltörténetet az adott szolgáltatásról. Egy másik iparágban elért eredmény nem ígéret az Ön vállalkozására.'],
] as const

const articleData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  url: canonicalUrl,
  mainEntityOfPage: canonicalUrl,
  inLanguage: 'hu-HU',
  author: { '@type': 'Person', '@id': `${siteUrl}/#founder`, name: 'Tamás', url: `${siteUrl}/hu/rolunk/` },
  publisher: { '@id': `${siteUrl}/#organization` },
  image: `${siteUrl}/images/og-image.webp`,
}

export default function SmallBusinessMarketingPartnerGuidePage() {
  return (
    <ContentPage>
      <main>
        <PageHero
          eyebrow="Útmutató magyar kisvállalkozásoknak"
          title={title}
          compactMobileTitle
          lead={<>
            <p>Helyi vállalkozásként több megkeresést szeretne? A Kiszely Marketing Google Térkép Top 3 szolgáltatással és weboldalkészítéssel foglalkozik. Nézze meg, hogyan dolgozunk, mit vállalunk, és mikor érdemes ajánlatot kérnie.</p>
            <div className="mt-6 flex flex-wrap gap-3"><Link href="/hu/kapcsolat/" className="button-primary">Kérek ingyenes konzultációt <ArrowRight data-icon="inline-end" /></Link><a href="#helyi-megoldas" className="button-outline">Mit vállalunk?</a></div>
          </>}
          breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Tudástár', href: '/hu/tudastar/' }, { label: title }]}
        />

        <article>
          <section id="helyi-megoldas" className="section">
            <div className="site-shell flex flex-col gap-10">
              <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
                <div className="flex flex-col gap-5">
                  <SectionHeading eyebrow="Helyi vállalkozásoknak" title="A kereséstől a kapcsolatfelvételig." description="Ha valaki a közelében keres szolgáltatót, a Térképen látható profil és a hozzá kapcsolódó weboldal segít eldönteni, felveszi-e Önnel a kapcsolatot. Mi ezekkel a felületekkel dolgozunk." />
                  <p className="leading-relaxed text-muted-foreground">A helyezést nem egyetlen számként kezeljük: a keresők helye szerint változhat. A célzott keresést, a területet és a mérési módot a térképes munka előtt írásban rögzítjük.</p>
                  <Link href="/hu/tudastar/helyi-helyezesmero-racs/" className="inline-flex self-start font-bold text-primary hover:underline">Így működik a területi mérés <ArrowRight className="ml-2 size-4" /></Link>
                </div>
                <figure>
                  <Image src="/images/map-green.webp" alt="Szemléltető Google Térkép-helyezésmérő rács különböző mérési pontokkal" width={1624} height={969} sizes="(max-width: 1023px) calc(100vw - 40px), 50vw" className="h-auto w-full rounded-2xl border border-border" />
                  <figcaption className="mt-3 text-sm text-muted-foreground">Szemléltető ábra, nem ügyféleredmény.</figcaption>
                </figure>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-7 lg:p-9">
                  <h3 className="font-serif text-3xl">Google Térkép Top 3</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">A jogosult Google Cégprofil, a kapcsolódó weboldal és a helyi jelenlét összehangolt fejlesztése. Az induló díj 300.000 Ft, a fenntartás 35.000 Ft havonta. A 90 napos cél és a pénzvisszafizetési garancia részletei a szolgáltatási oldalon olvashatók.</p>
                  <Link href="/hu/google-terkep-top-3/" className="mt-5 inline-flex font-bold text-primary hover:underline">Megnézem a térképes szolgáltatást <ArrowRight className="ml-2 size-4" /></Link>
                </div>
                <div className="rounded-2xl border border-border bg-card p-7 lg:p-9">
                  <h3 className="font-serif text-3xl">Weboldalkészítés</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">Egyoldalas bemutatkozó vagy többoldalas céges weboldal, a feladathoz igazított tartalommal és mobilbarát kialakítással. Önállóan is kérhető; nem kell hozzá térképes csomagot választania.</p>
                  <Link href="/hu/weboldal-keszites-budapest/" className="mt-5 inline-flex font-bold text-primary hover:underline">Megnézem a csomagokat és árakat <ArrowRight className="ml-2 size-4" /></Link>
                </div>
              </div>
            </div>
          </section>

          <section id="mire-van-szukseg" className="section muted-section">
            <div className="site-shell flex flex-col gap-10">
              <SectionHeading eyebrow="Melyik partner illik a feladathoz?" title="Ne az „ügynökség” szó alapján döntsön." description="A legjobb választás attól függ, hol szeretne ügyfeleket szerezni, és mi akadályozza ma a kapcsolatfelvételt. Ezek a helyzetek más munkát igényelnek." />
              <div className="grid gap-5 lg:grid-cols-3">
                {situations.map(([heading, explanation, href, linkText]) => <div key={heading} className="rounded-2xl border border-border bg-background p-7 lg:p-9"><h3 className="font-serif text-3xl">{heading}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{explanation}</p>{href && linkText && <Link href={href} className="mt-5 inline-flex font-bold text-primary hover:underline">{linkText} <ArrowRight className="ml-2 size-4" /></Link>}</div>)}
              </div>
              <p className="max-w-4xl leading-relaxed text-muted-foreground">A Google Cégprofil csak jogosult vállalkozások számára használható. A helyi sorrendet a Google szerint többek között a relevancia, a távolság és az ismertség alakítja. <a href="https://support.google.com/business/answer/7091?hl=hu" target="_blank" rel="noreferrer" className="font-bold text-primary underline">A Google helyi rangsorolási útmutatója</a> részletesebben leírja ezt.</p>
            </div>
          </section>

          <section className="section">
            <div className="site-shell flex flex-col gap-10">
              <SectionHeading eyebrow="Ajánlatok összehasonlítása" title="Hat kérdés, amelyre konkrét választ kérjen." description="Egyetlen rangsor nem dönthet Ön helyett. Ugyanazokat a kérdéseket tegye fel minden jelöltnek, majd a saját céljához hasonlítsa az ajánlatokat." />
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {questions.map(([heading, explanation], index) => <div key={heading} className="rounded-2xl border border-border bg-background p-7"><span className="font-serif text-3xl text-primary">0{index + 1}</span><h3 className="mt-5 text-xl font-bold">{heading}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{explanation}</p></div>)}
              </div>
            </div>
          </section>

          <section className="section muted-section">
            <div className="site-shell grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <SectionHeading eyebrow="Kiszely Marketing" title="Tudja, kivel dolgozna." description="Tamás személyesen válaszol a megkeresésekre. Az első egyeztetésen tisztázzuk, milyen munkára kér ajánlatot, milyen területen szolgálja ki az ügyfeleit, és hogyan történne a mérés vagy a weboldal átadása." />
              <div className="rounded-2xl border border-border bg-background p-7 lg:p-9">
                <p className="leading-relaxed text-muted-foreground">Az ajánlatban a feladatokat, a díjat és a hozzáféréseket írásban rögzítjük. A jelenleg bemutatott szolgáltatásaink nem tartalmaznak hirdetéskezelést vagy közösségimédia-kampányok vezetését.</p>
                <div className="mt-6 flex flex-wrap gap-3"><Link href="/hu/kapcsolat/" className="button-primary">Kérek ingyenes konzultációt <ArrowRight data-icon="inline-end" /></Link><Link href="/hu/rolunk/" className="button-outline">Rólunk</Link></div>
                <p className="mt-5 text-sm text-muted-foreground">Közvetlenül is írhat: <a href="mailto:tamas@kiszelymarketing.com" className="font-bold text-primary underline">tamas@kiszelymarketing.com</a></p>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="site-shell flex flex-col gap-8"><SectionHeading eyebrow="Kapcsolódó útmutatók" title="A döntéshez szükséges részletek." /><div className="grid gap-5 md:grid-cols-3"><ArticleCard href="/hu/tudastar/organikus-talalat-vagy-google-terkep/" title="Organikus találat vagy Google Térkép?" description="Melyik keresési felület milyen munkát igényel?" /><ArticleCard href="/hu/tudastar/google-terkep-rangsorolas/" title="Mi alapján rangsorol a Google Térkép?" description="Relevancia, távolság és ismertség a Google útmutatója alapján." /><ArticleCard href="/hu/tudastar/legjobb-weboldalkeszito-magyarorszagon/" title="Hogyan válasszon weboldalkészítőt?" description="Program vagy szakember, hozzáférések, tartalom és teljes költség." /></div></div>
          </section>
        </article>

        <ContactBand title="Beszéljünk a következő ügyfélszerző lépésről." description="Írja meg, mivel foglalkozik, hol szolgálja ki az ügyfeleit, és van-e már weboldala vagy Google Cégprofilja. Ezek alapján konkrétan a térképes vagy a weboldalas munkáról tudunk beszélni." />
      </main>
      <JsonLd data={articleData} />
      <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Tudástár', url: `${siteUrl}/hu/tudastar/` }, { name: title, url: canonicalUrl }])} />
    </ContentPage>
  )
}
