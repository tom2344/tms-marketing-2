import { WebsiteGuidePage, websiteGuideMetadata } from '@/components/website-guide-page'

const slug = 'mennyi-ido-alatt-keszul-el-egy-weboldal'
const title = 'Mennyi idő alatt készül el egy céges weboldal?'
const description = 'A weboldal-készítés időigénye, fő munkafázisai és gyakori késések. Mit érdemes előkészíteni, hogy a projekt kiszámíthatóan haladjon?'

export const metadata = websiteGuideMetadata({ slug, title, description })

const sections = [
  {
    eyebrow: 'Várható idő',
    title: 'Egy egyszerű bemutatkozó oldal általában 1–2 hét.',
    paragraphs: [
      'Ez a Kiszely Marketing egyszerűbb, egyoldalas projektjeinek irányadó elkészítési ideje. A pontos határidő attól függ, hogy rendelkezésre áll-e a jóváhagyott tartalom, hány funkció szükséges, és milyen gyorsan születnek meg a döntések.',
      'Egy többoldalas vagy egyedi működést igénylő projekt hosszabb lehet. Ennek határidejét csak a szükséges aloldalak, tartalmak, integrációk és jóváhagyási lépések ismeretében lehet felelősen rögzíteni.',
    ],
    points: ['Egyszerű bemutatkozó oldal: általában 1–2 hét', 'Összetettebb projekt: egyedi ütemezés', 'Kezdés: szükséges anyagok és hozzáférések után', 'Átadás: ellenőrzés és jóváhagyás után'],
  },
  {
    eyebrow: 'Munkafázisok',
    title: 'A fejlesztés előtt a szerkezetnek is el kell készülnie.',
    paragraphs: [
      'Az igényfelmérés tisztázza a célt, a célközönséget, az oldalak számát és a funkciókat. Ezután következik a szerkezet és a tartalom sorrendjének meghatározása.',
      'A dizájn és fejlesztés során készül el a mobilos és asztali megjelenés, valamint a szükséges működés. Az utolsó szakasz az ellenőrzés: a linkek, űrlapok, mobilos elrendezés és indexelhetőség vizsgálata.',
      'A szakaszok nem puszta adminisztrációk. Egy korán tisztázott tartalmi kérdés később kevesebb átalakítást és kiszámíthatóbb átadást jelent.',
    ],
  },
  {
    eyebrow: 'Gyakori késések',
    title: 'A hiányzó döntések több időt visznek el, mint egy technikai részlet.',
    paragraphs: [
      'A projekt akkor tud folyamatosan haladni, ha van kijelölt kapcsolattartó, egyértelmű jóváhagyási rend, végleges szolgáltatáslista és használható képanyag. A több forrásból érkező, egymásnak ellentmondó visszajelzés rendszerint újratervezést okoz.',
      'Késést jelenthet a domain- vagy tárhelyhozzáférés hiánya, a külső foglalási rendszer bizonytalan kiválasztása, illetve az is, ha az adatkezeléshez szükséges üzleti információk csak az átadás előtt derülnek ki.',
    ],
    points: ['Hiányzó vagy változó szövegek', 'Későn érkező képek és logók', 'Több, egymásnak ellentmondó döntéshozó', 'Ismeretlen hozzáférések', 'Utólag hozzáadott funkciók', 'Elhúzódó jóváhagyás'],
  },
] as const

const questions = [
  { question: 'Az 1–2 hét garantált határidő?', answer: 'Nem minden projektnél. Ez az egyszerűbb bemutatkozó oldal irányadó ideje, ha a szükséges tartalom és döntések rendelkezésre állnak. A vállalt határidőt a konkrét ajánlat rögzíti.' },
  { question: 'Mikor kezdődik az elkészítési idő számítása?', answer: 'A projekt ütemezésében kell rögzíteni. Jellemzően akkor tud elindulni a folyamatos munka, amikor a szükséges anyagok, hozzáférések és jóváhagyási felelős rendelkezésre állnak.' },
  { question: 'Gyorsítható a folyamat?', answer: 'Igen, ha előre elkészül a szolgáltatáslista, a kapcsolati adat, a logó, a használható képanyag, és egy személy ad összesített visszajelzést.' },
  { question: 'Mi történik, ha közben új funkcióra lesz szükség?', answer: 'Először tisztázni kell a hatását a terjedelemre, az árra és a határidőre. A módosított vállalás csak írásos egyeztetés után legyen része a projektnek.' },
] as const

const related = [
  { href: '/hu/tudastar/weboldal-keszites-elokeszites/', title: 'Mire van szükség a kezdéshez?', description: 'Gyakorlati ellenőrzőlista a gyorsabb, tisztább induláshoz.' },
  { href: '/hu/tudastar/egyoldalas-vagy-tobboldalas-weboldal/', title: 'Egyoldalas vagy többoldalas weboldal?', description: 'Az oldalstruktúra a várható munkamennyiséget is befolyásolja.' },
] as const

export default function WebsiteTimelineGuidePage() {
  return <WebsiteGuidePage slug={slug} title={title} description={description} readTime="7 perc" introduction="Egy weboldal elkészítési idejét nem csak a fejlesztés határozza meg. A tartalom készültsége, a funkciók, a hozzáférések és a jóváhagyási folyamat ugyanúgy része az ütemezésnek." sections={sections} questions={questions} related={related} contactTitle="Tervezzük meg a weboldal reális ütemezését." />
}
