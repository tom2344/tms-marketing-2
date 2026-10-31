import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { ArticleCard, ContactBand, ContentPage, PageHero, SectionHeading } from '@/components/content-page'
import { JsonLd, breadcrumbData } from '@/components/seo-json-ld'

const siteUrl = 'https://www.kiszelymarketing.com'
const canonicalUrl = `${siteUrl}/hu/weboldal-felujitas/`
const title = 'Weboldal felújítás és korszerűsítés vállalkozásoknak'
const description = 'Elavult a céges weboldal? Átnézzük, mi tartható meg, és mire kell új megoldás. Weboldal-felújítás egyszeri projektként, egyeztetett terjedelemmel.'
export const metadata: Metadata = {
  title, description, alternates: { canonical: canonicalUrl },
  openGraph: { title, description, url: canonicalUrl, type: 'website', locale: 'hu_HU', images: ['/images/og-image.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.webp'] },
  robots: { index: true, follow: true },
}
const questions = [
  ['Mennyibe kerül a weboldal felújítása?', 'Először a meglévő oldalt és a kért változásokat nézzük át. A felújításra külön ajánlat készül. Ha teljesen új bemutatkozó oldal indokolt, a Starter 160.000–200.000 Ft, a többoldalas Premium 250.000 Ft-tól indul. Ezek új oldalak kiinduló árai, nem minden felújításra érvényes díjak.'],
  ['Megmaradhat a domainem és a tartalmam?', 'Igen, ezek megtartását a projekt elején megtervezzük. Ellenőrizzük, mely tartalmak használhatók tovább, milyen hozzáférések kellenek, és szükséges-e a tárhely vagy a rendszer cseréje.'],
  ['WordPress-oldal esetén is érdemes jelentkeznem?', 'Igen, küldje el a linkjét és a kért változásokat. Az ajánlat előtt tisztázzuk, megoldható-e a feladat a jelenlegi rendszerben, vagy újraépítést javaslunk. Vírusmentesítést, sürgősségi helyreállítást és minden bővítmény javítását ez az ajánlat nem ígéri.'],
  ['Megmaradnak a Google-helyezéseim?', 'Változatlan helyezést nem lehet garantálni. A fontos URL-ek, tartalmak és szükséges átirányítások megtervezése része a megbeszélt átállásnak. A konkrét ellenőrzéseket az ajánlatban rögzítjük.'],
  ['Mennyi ideig tart a korszerűsítés?', 'A feladat és a meglévő rendszer alapján adunk határidőt. Tartalomátvétel, új funkció vagy több jóváhagyó hosszabb folyamatot jelenthet. Az ütemezést a kezdés előtt tisztázzuk.'],
  ['Egyszeri munka is kérhető?', 'Igen. A weboldal felújítása önálló, egyszeri projekt. A domain, tárhely és választott külső rendszerek esetleges díját külön tisztázzuk.'],
] as const

export default function WebsiteRedesignPage() {
  return <ContentPage><main>
    <PageHero compactMobileTitle eyebrow="Weboldal felújítás · Egyszeri projekt" title="A cége már előrébb jár, mint a weboldala?" lead={<><p>Új szolgáltatásai vannak, más munkákat szeretne vállalni, az oldalon mégis a régi bemutatkozás fogadja az érdeklődőt. A weboldal felújítását azzal kezdjük, hogy megnézzük, mit kell megváltoztatni, és mi használható tovább.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/hu/kapcsolat/" className="button-primary">Megbeszélem a felújítást <ArrowRight className="size-4" /></Link><a href="#felujitas-vagy-ujraepites" className="button-outline">Melyik megoldás kell?</a></div></>} breadcrumbs={[{ label: 'Kezdőlap', href: '/hu/' }, { label: 'Weboldal készítés', href: '/hu/weboldal-keszites-budapest/' }, { label: 'Weboldal felújítás' }]} />

    <section id="felujitas-vagy-ujraepites" className="section"><div className="site-shell flex flex-col gap-10">
      <SectionHeading eyebrow="Felújítás vagy újraépítés?" title="A működő részeknek is van értékük." description="Nem minden régi oldalnál kell mindent elölről kezdeni. A jelenlegi rendszer és a kért változások együtt döntik el, melyik út ésszerű." />
      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card p-7"><p className="eyebrow">Célzott átalakítás</p><h2 className="mt-4 font-serif text-3xl">Ha az alap jó, a részleteken dolgozunk.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Az információk megvannak, de telefonon nehéz átlátni őket. Elbújik az ajánlatkérés, vagy a fontos szolgáltatás alig kap helyet. Ilyenkor a szerkezet, a szövegezés és a mobilos megjelenés célzott javítása is megfelelő lehet.</p></article>
        <article className="rounded-2xl border border-border bg-card p-7"><p className="eyebrow">Új felépítés</p><h2 className="mt-4 font-serif text-3xl">Ha más feladat kell, újratervezzük.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Ha a jelenlegi rendszerben a szükséges változások nehezen oldhatók meg, vagy az oldal már más üzletet mutat, újraépítés lehet indokolt. A tovább használható szövegeket, képeket és webcímeket ilyenkor is átnézzük.</p></article>
      </div>
    </div></section>

    <section className="section muted-section"><div className="site-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
      <SectionHeading eyebrow="Weboldal korszerűsítés" title="Az érdeklődő találja meg, amiért érkezett." />
      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground"><p>Gondoljon valakire, aki telefonon nyitja meg az oldalát. Azt keresi, vállalja-e az ő feladatát, hol dolgozik, és hogyan kérhet ajánlatot. Ezeket az információkat kell jó sorrendbe tenni.</p><p>A felújítás pontos körét a saját oldala alapján állítjuk össze. A következő feladatokból az kerül az ajánlatba, amire valóban szükség van:</p><ul className="grid gap-4 text-base sm:grid-cols-2">{['Érthető szolgáltatásbemutatás', 'Használható mobilos elrendezés', 'Látható ajánlatkérés és elérhetőség', 'Meglévő tartalom rendezése', 'Képek és betöltés átnézése', 'Webcímek és átállás megtervezése'].map(text => <li key={text} className="flex gap-3 rounded-xl border border-border bg-card p-5 text-foreground"><Check className="mt-1 size-4 shrink-0 text-primary" />{text}</li>)}</ul></div>
    </div></section>

    <section className="section"><div className="site-shell grid gap-10 lg:grid-cols-2"><SectionHeading eyebrow="Ár és indulás" title="Küldje el a linket, és írja mellé, mi változzon." /><div className="space-y-5 text-lg leading-relaxed text-muted-foreground"><p>Elsőre nem kell hosszú feladatleírás. Elég a weboldal címe és néhány mondat arról, mi hiányzik, mi nehézkes, vagy milyen új célt kell támogatnia.</p><p>Átnézzük a kérést, tisztázzuk a rendszerhez és tartalomhoz szükséges hozzáféréseket, majd rögzítjük a javasolt munkát, az árat és az átadás menetét. A felújítás egyszeri projektként kérhető.</p><Link href="/hu/kapcsolat/" className="button-primary">Írok a weboldalamról <ArrowRight className="size-4" /></Link><p className="text-base">Új oldalt tervez? <Link href="/hu/tudastar/weboldal-keszites-arak-2026/" className="font-semibold text-primary underline">Itt találja a weboldalkészítési csomagokat és árakat.</Link></p></div></div></section>

    <section className="section muted-section"><div className="site-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><SectionHeading eyebrow="Gyakori kérdések" title="A meglévő oldallal együtt tervezünk." /><div className="space-y-7">{questions.map(([question, answer]) => <section key={question}><h2 className="text-xl font-bold">{question}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{answer}</p></section>)}</div></div></section>
    <section className="section"><div className="site-shell grid gap-5 md:grid-cols-2"><ArticleCard href="/hu/tudastar/weboldal-keszites-arak-2026/" title="Mit tartalmaz a weboldal ára?" description="Egyszeri díj, terjedelem, külső költségek és összehasonlítható ajánlatok." /><ArticleCard href="/hu/tudastar/weboldal-keszites-elokeszites/" title="Mi kell a munka megkezdéséhez?" description="Szövegek, képek, hozzáférések és egyértelmű jóváhagyás." /></div></section>
    <ContactBand title="Mutassa meg az oldalát. Beszéljük át, mit érdemes változtatni." description="A link mellé írja meg a kívánt változást és az időzítést. Tamás személyesen válaszol, az egyeztetés nem jelent kötelezettséget." />
  </main>
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', '@id': `${canonicalUrl}#service`, name: title, serviceType: 'Weboldal felújítás és korszerűsítés', description, url: canonicalUrl, provider: { '@id': `${siteUrl}/#organization` }, areaServed: { '@type': 'Country', name: 'Magyarország' } }} />
    <JsonLd data={breadcrumbData([{ name: 'Kezdőlap', url: `${siteUrl}/hu/` }, { name: 'Weboldal készítés', url: `${siteUrl}/hu/weboldal-keszites-budapest/` }, { name: 'Weboldal felújítás', url: canonicalUrl }])} />
  </ContentPage>
}
