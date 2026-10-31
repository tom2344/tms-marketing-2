import { WebsiteGuidePage, websiteGuideMetadata } from '@/components/website-guide-page'

const slug = 'google-cegprofil-letrehozasa'
const title = 'Google Cégprofil létrehozása: útmutató vállalkozóknak'
const description = 'Google Cégem létrehozása érthetően: meglévő profil keresése, jogosultság, adatok, igazolás és hozzáférés. Hivatalos Google-forrásokkal.'
const datePublished = '2026-10-31'
export const metadata = websiteGuideMetadata({ slug, title, description, datePublished })

const sections = [
  { eyebrow: 'Mielőtt elkezdi', title: 'Előbb keresse meg a vállalkozását.', paragraphs: [
    'Keressen rá a cég nevére és a településre a Google Keresőben vagy a Térképen. Lehet, hogy már van adatlapja, akkor is, ha Ön még nem állított be semmit. Ilyenkor a meglévő profil kezelését kell rendezni.',
    'Ha talál egy profilt, először ellenőrizze, valóban az Ön vállalkozásáról van-e szó. Egy hasonló nevű cég másik címen nem ugyanaz. A keresés és az igénylés hivatalos lépéseit a cikk alján belinkelt Google-útmutató mutatja.',
  ] },
  { eyebrow: '1. Jogosultság', title: 'Személyesen is kiszolgál ügyfeleket?', paragraphs: [
    'A Cégprofil személyes ügyfélkapcsolattal működő vállalkozásoknak való. Ez lehet egy üzletben történő kiszolgálás vagy kiszállás az ügyfélhez. A kizárólag online működő vállalkozások nem jogosultak rá.',
    'Kiszálló szolgáltatónál a szolgáltatási terület és az ügyfélfogadó cím nem ugyanaz. Ne adjon meg kitalált címet azért, hogy egy másik városban jelenjen meg. A pontos működés alapján válasszon beállítást.',
  ], points: ['Valós üzleti név', 'Tényleges tevékenység', 'Pontos ügyfélfogadó hely vagy szolgáltatási terület', 'A vállalkozás által kezelt elérhetőség'] },
  { eyebrow: '2. Hozzáadás vagy igénylés', title: 'Meglévő profilhoz hozzáférés kell. Újat akkor készítsen, ha nincs.', paragraphs: [
    'Ha a meglévő adatlap még nincs igazolva, a Google igénylési folyamatán keresztül kérheti a kezelését. Ha más már igazolt tulajdonos, a tulajdonjogot a hivatalos hozzáférés-kérési folyamatban kell rendezni. A második profil létrehozása nem oldja meg ezt.',
    'Ha a vállalkozásnak nincs profilja, a business.google.com/add oldalon indíthatja a hozzáadást. Egy Ön által kezelt Google-fiókot használjon, és kövesse a megjelenő utasításokat. A megadott adatokat még a továbblépés előtt ellenőrizze.',
  ] },
  { eyebrow: '3. Üzleti adatok', title: 'Az adatlap ugyanazt a céget mutassa, mint a valóság.', paragraphs: [
    'A név, a tevékenység, a cím vagy terület és az elérhetőség legyen pontos. Ehhez gyűjtse össze a saját vállalkozása adatait, ahelyett, hogy egy másik cég profilját másolná.',
    'A kategóriát a valódi fő tevékenységhez válassza. A nyitvatartás, a szolgáltatások és a saját képek segítik az érdeklődőt a tájékozódásban. Ha van weboldala, a profilról oda vezesse, ahol az adott vállalkozásról talál információt.',
  ], points: ['Üzleti név és fő tevékenység', 'Cím vagy valós kiszolgált terület', 'Telefon és weboldal', 'Nyitvatartás, szolgáltatások és saját fotók'] },
  { eyebrow: '4. Igazolás', title: 'A Google által felajánlott módon igazoljon.', paragraphs: [
    'Az igazolási lehetőségeket a Google határozza meg. Kövesse a profilnál megjelenő lépéseket; előfordulhat, hogy a helyszínen kell bemutatnia a vállalkozást. A beküldés után ellenőrzés is következhet.',
    'A jóváhagyást vagy annak időpontját egy szolgáltató sem tudja Ön helyett eldönteni. Ha elakad, a megjelenő hiba és a hivatalos súgó alapján keresse a következő lépést. Jelszót és igazolási kódot ne küldjön el másnak.',
  ] },
  { eyebrow: '5. Hozzáférés és következő lépés', title: 'A profil maradjon az Ön kezében.', paragraphs: [
    'Ha később más segít a munkában, megfelelő profilhozzáférést adjon neki a saját Google-jelszava helyett. A tulajdonosi szerepet, a feladatokat és az esetleges díjat előre tisztázzák.',
    'A profil létrehozása után nézze át a kategóriát, a területet és az ügyfél számára látható adatokat. Ehhez a kapcsolódó ellenőrzőlista és a részletes beállítási útmutatók adnak segítséget. A regisztráció önmagában nem jelent első helyet a Térképen.',
  ] },
] as const
const questions = [
  { question: 'Ingyenes a Google Cégprofil létrehozása?', answer: 'Igen. A profil hozzáadása és igénylése díjmentes. Ha szakembert bíz meg a munkával, az ő szolgáltatásáért fizethet, nem a Google-regisztráció kötelező díját fizeti.' },
  { question: 'A Google Cégem és a Google Cégprofil ugyanaz?', answer: 'A Google Cégem a korábbi elnevezés. A jelenlegi szolgáltatást Google Cégprofilnak, angolul Google Business Profile-nak hívják.' },
  { question: 'Kell hozzá Gmail-cím?', answer: 'Google-fiók szükséges. Ez meglévő, más szolgáltatónál használt e-mail-címmel is létrehozható; nem kötelező új Gmail-címet nyitni.' },
  { question: 'Akkor is lehet profilom, ha nincs üzletem?', answer: 'Kiszálló vállalkozás is jogosult lehet, ha személyesen szolgálja ki ügyfeleit. A kizárólag online működés más helyzet. A saját működést a Google jogosultsági szabályaival kell összevetni.' },
  { question: 'Mit tegyek, ha már más kezeli a profilt?', answer: 'Kérjen hozzáférést a hivatalos tulajdonjog-igénylési folyamatban. Először ellenőrizze a saját fiókjait és a korábbi kezelővel kötött megállapodást; ne indítson új adatlapot a hozzáférési probléma megkerülésére.' },
] as const
const related = [
  { href: '/hu/tudastar/google-cegprofil-optimalizalas/', title: 'A profil elkészült. Mit ellenőrizzen rajta?', description: 'Jogosultság, üzleti adatok, képek, weboldal és mérés.' },
  { href: '/hu/tudastar/szolgaltatasi-terulet-beallitas/', title: 'Cím vagy szolgáltatási terület?', description: 'A kiszálló és hibrid vállalkozások beállításai.' },
  { href: '/hu/tudastar/google-cegprofil-kategoria-valasztas/', title: 'Melyik kategóriát válassza?', description: 'A fő és további kategóriák szerepe.' },
] as const
const sources = [
  { href: 'https://support.google.com/business/answer/2911778?hl=hu', label: 'Google: profil hozzáadása vagy igénylése' },
  { href: 'https://support.google.com/business/answer/7107242?hl=hu', label: 'Google: a vállalkozás igazolása' },
  { href: 'https://support.google.com/business/answer/13763036?hl=en', label: 'Google: jogosultság és tulajdonjog' },
] as const
export default function BusinessProfileCreationGuide() {
  return <WebsiteGuidePage slug={slug} title={title} description={description} datePublished={datePublished} readTime="6 perc" introduction="Rákeres a saját vállalkozására, és nem találja az adatlapot. Vagy megtalálja, csak éppen nem tudja szerkeszteni. A két helyzethez más lépés kell. Ez az útmutató segít eldönteni, honnan induljon a Google Cégprofil létrehozásával vagy igénylésével." sections={sections} questions={questions} related={related} sources={sources} service={{ title: 'A profil megvan, de több helyi érdeklődőt szeretne?', description: 'A Google Térkép szolgáltatásunk a meglévő helyi jelenlét fejlesztéséről szól. A pontos feladatot, mérést, díjakat és feltételeket a szolgáltatás oldalán találja.', href: '/hu/google-terkep-top-3/', label: 'A helyi Google-szolgáltatás részletei' }} contactTitle="Írja meg, hol akadt el a cégprofiljával." contactDescription="Küldje el a vállalkozás nevét, a települést és a profil linkjét, ha van. Jelszót vagy igazolási kódot ne küldjön. Tamás személyesen válaszol a megkeresésére." />
}
