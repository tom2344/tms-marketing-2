import { WebsiteGuidePage, websiteGuideMetadata } from '@/components/website-guide-page'

const slug = 'weboldal-keszites-arak-2026'
const title = 'Weboldal készítés árak 2026: mit kap a pénzéért?'
const description = 'Honlapkészítés árak konkrét csomagokkal: Starter 160.000–200.000 Ft, Premium 250.000 Ft-tól. Terjedelem, külön költségek és ajánlat-ellenőrzőlista.'
const dateModified = '2026-10-31'
export const metadata = websiteGuideMetadata({ slug, title, description, dateModified })

const sections = [
  {
    eyebrow: 'Csomagok és árak', title: 'Először azt nézze meg, mi készül el.',
    paragraphs: [
      'Egyetlen oldalon is el lehet mondani, mit vállal a cége, kinek segít, és hogyan lehet ajánlatot kérni. Ha ennyi a feladat, nincs szükség egy tízoldalas rendszerre. Több külön szolgáltatás bemutatásához viszont hamar szűk lehet ugyanaz az egy oldal.',
      'A Kiszely Marketing két kiinduló csomagja ezt a döntést teszi egyszerűbbé. Az alábbi összegek a saját weboldalkészítési díjaink, nem a magyar piac átlagárai. A végleges feladatot és árat írásos ajánlatban rögzítjük.',
    ],
    table: {
      caption: 'Kiszely Marketing honlapkészítés árak és csomagtartalom',
      columns: ['Szempont', 'Starter', 'Premium'],
      rows: [
        ['Elkészítési díj', '160.000–200.000 Ft, egyszeri díj', '250.000 Ft-tól, egyedi ajánlat szerint'],
        ['Felépítés', 'Egyoldalas bemutatkozó weboldal', 'Több tartalmi aloldal, egyeztetett terjedelemmel'],
        ['Tipikus cél', 'A szolgáltatás bemutatása és kapcsolatfelvétel', 'Külön szolgáltatások, referenciák, részletesebb tájékoztatás'],
        ['Alapok', 'Egyedi dizájn, mobilnézet, kapcsolatfelvételi űrlap, keresőbarát technikai alapok', 'Többoldalas szerkezet és a projektben egyeztetett funkciók'],
        ['Foglalás, egyedi működés', 'Külön egyeztetést igényel', 'Igény szerint, az ajánlatban részletezve'],
        ['Pontos ár és határidő', 'A tartalom és a feladat tisztázása után', 'Az oldalak és funkciók tisztázása után'],
      ],
    },
  },
  {
    eyebrow: 'Két szemléltető példa', title: 'Ugyanaz a vállalkozás is kérhet két egészen más oldalt.',
    paragraphs: [
      'Vegyünk egy képzeletbeli helyi szolgáltatót. Egy helyen szeretné megmutatni a munkáit, a vállalt területet és a telefonszámát. Nincs szüksége foglalásra vagy külön szolgáltatási oldalakra. Ez a Starter csomaghoz illő kiindulás.',
      'Ha ugyanez a vállalkozás több szolgáltatásnak szeretne önálló oldalt, külön referenciákat és időpontfoglalást, már más a munka. Oldalstruktúrát, tartalmat és működést is tervezünk. Itt a Premium lehet a megfelelő kiindulópont; a 250.000 Ft nem minden funkciót tartalmazó végösszeg.',
      'Ezek szemléltető projektleírások, nem ügyféltörténetek vagy külön árajánlatok. A honlapkészítés árát az elvégzendő munka alapján érdemes összehasonlítani.',
    ],
  },
  {
    eyebrow: 'Költségtényezők', title: 'A szöveget és az átadást is írassa bele az ajánlatba.',
    paragraphs: [
      'Kész szöveget és képeket kapunk, vagy ezek rendszerezésében is segítség kell? Van már domain és tárhely? Egy egyszerű űrlap kell, vagy foglalási rendszerhez kapcsolódik az oldal? Ezek ugyanúgy részei a feladatnak, mint a megjelenés.',
      'Az is számít, hányan hagyják jóvá az oldalt, hány módosítási körrel dolgozunk, és milyen hozzáféréseket kell átadni. Ezeket a kezdés előtt tisztázzuk, hogy a kész oldal és az ajánlat ugyanarról szóljon.',
    ],
    points: ['Oldalak és funkciók pontos köre', 'Szövegek, fotók és logó felelőse', 'Meglévő tartalom átvétele', 'Módosítási körök és jóváhagyás', 'Űrlapok és külső kapcsolatok', 'Átadás és hozzáférések'],
  },
  {
    eyebrow: 'Egyszeri és későbbi költségek', title: 'Az elkészítési díj mellé nézze oda a működés költségeit is.',
    paragraphs: [
      'A weboldal elkészítése egyszeri projekt. A domain, a tárhely vagy egy választott külső rendszer előfizetése ettől külön tétel lehet. Ezek díját és költségviselőjét az ajánlatban egyértelművé tesszük.',
      'Kérdezzen rá arra is, kinek a nevén lesz a domain, ki fér hozzá a fiókokhoz, és milyen költséggel jár egy később kért új funkció. Az ajánlatban a fizetendő végösszegnek és az áfakezelésnek is szerepelnie kell.',
      'A keresőbarát felépítés a weboldal alapja. A későbbi Google-helyezés és ügyfélszerzés függ a kereslettől, a versenytől és a tartalomtól is. A technikai alapok önmagukban nem jelentenek biztos első helyet.',
    ],
  },
  {
    eyebrow: 'Ajánlatok összehasonlítása', title: 'Ezt az öt kérdést tegye fel, mielőtt választ.',
    paragraphs: ['Két végösszeg csak akkor hasonlítható össze, ha ugyanazt a munkát tartalmazza. Ezt a listát nyugodtan használhatja bármelyik ajánlat átnézéséhez.'],
    points: ['Pontosan mely oldalak és funkciók készülnek el?', 'Ki biztosítja a végleges szöveget és képeket?', 'Mi indítja a határidőt, és ki hagy jóvá?', 'Mit kapok meg az átadáskor?', 'Milyen külön vagy ismétlődő díjjal kell számolnom?'],
  },
] as const

const questions = [
  { question: 'Mennyibe kerül egy egyszerű céges weboldal?', answer: 'Nálunk a Starter egyoldalas bemutatkozó weboldal 160.000–200.000 Ft közötti egyszeri díjjal indul. A pontos tartalmat és végösszeget az egyeztetés után írásban rögzítjük.' },
  { question: 'Miért 250.000 Ft-tól indul a Premium?', answer: 'Mert a külön aloldalak, a foglalás és az egyedi funkciók terjedelme projektenként változik. Az induló ár kiindulópont; az ajánlat felsorolja, mi készül el a végleges összegért.' },
  { question: 'Miért térhet el ennyire két honlapkészítési ajánlat?', answer: 'Lehet, hogy az egyik csak a kész anyagok elrendezését tartalmazza, a másik szövegmunkát, több aloldalt és külső rendszer bekötését is. A végösszeg előtt a vállalt feladatokat és az átadást hasonlítsa össze.' },
  { question: 'Meglévő weboldal felújítása is ennyibe kerül?', answer: 'A felújítás külön felmérést igényel. Lehet, hogy néhány oldal átalakítása elég, de az is lehet, hogy új felépítésre van szükség. Az új weboldalcsomagok ára nem automatikusan felújítási árajánlat.' },
  { question: 'Mennyi idő alatt készül el?', answer: 'Egy egyszerűbb bemutatkozó weboldal általában 1–2 hét alatt készül el. Az anyagok, a funkciók és a jóváhagyás alapján a saját projekt határidejét külön rögzítjük.' },
] as const
const related = [
  { href: '/hu/weboldal-felujitas/', title: 'Weboldal felújítás vagy újraépítés?', description: 'Mi tartható meg a meglévő oldalból, és mit kell előbb átnézni?' },
  { href: '/hu/tudastar/egyoldalas-vagy-tobboldalas-weboldal/', title: 'Egyoldalas vagy többoldalas weboldal?', description: 'Mikor elég a kisebb terjedelem, és mikor kell külön hely a szolgáltatásoknak?' },
] as const

export default function WebsitePricingGuidePage() {
  return <WebsiteGuidePage slug={slug} title={title} description={description} dateModified={dateModified} readTime="7 perc" introduction="Két ajánlat érkezik ugyanarra a weboldalra. Az egyik olcsóbb, a másik drágább. Mielőtt a végösszeg alapján döntene, tegye egymás mellé, pontosan mit adnak át. Itt a saját csomagjainkon mutatjuk meg, mire érdemes figyelni." sections={sections} questions={questions} related={related} contactTitle="Írja meg, mire kell az oldal. Adunk rá egy konkrét ajánlatot." />
}
