import { WebsiteGuidePage, websiteGuideMetadata } from '@/components/website-guide-page'

const slug = 'weboldal-keszites-elokeszites'
const title = 'Mire van szükség a weboldal-készítés megkezdéséhez?'
const description = 'Weboldal-készítési ellenőrzőlista kisvállalkozásoknak: cél, célközönség, tartalom, arculat, hozzáférések, funkciók és jóváhagyás.'

export const metadata = websiteGuideMetadata({ slug, title, description })

const sections = [
  {
    eyebrow: 'Üzleti alapok',
    title: 'Először azt kell tisztázni, mit tegyen a látogató.',
    paragraphs: [
      'A weboldal célja lehet ajánlatkérés, telefonhívás, időpontfoglalás vagy egyszerű bemutatkozás. Ha a fő cselekvés nincs meghatározva, a tartalom és a szerkezet könnyen egymással versengő üzenetekből áll majd.',
      'Fogalmazza meg röviden, kinek szól a szolgáltatás, milyen problémát old meg, mely földrajzi területen érhető el, és mi különbözteti meg az alternatíváktól. Ezekből készülhet el az oldal elsődleges tartalmi sorrendje.',
    ],
    points: ['A weboldal elsődleges célja', 'A kívánt kapcsolatfelvételi mód', 'Célközönség és szolgáltatási terület', 'Szolgáltatások végleges listája', 'Árak vagy ajánlatkérési feltételek', 'Fontos bizalmi és jogi információk'],
  },
  {
    eyebrow: 'Tartalom és arculat',
    title: 'A használható anyag többet ér a nagy, rendezetlen mappánál.',
    paragraphs: [
      'Gyűjtse össze a végleges cégnevet, kapcsolati adatokat, szolgáltatásleírásokat, logót, színeket és azokat a fényképeket, amelyekhez valóban rendelkezik felhasználási joggal. A régi szövegeknél jelölje, mi maradhat, és mit kell újraírni.',
      'A referenciákhoz és ügyfélidézetekhez kérjen publikálási engedélyt. Ne kerüljön fel nem ellenőrizhető eredmény, kitalált értékelés vagy olyan kép, amely nem a saját munkát mutatja.',
      'Ha valamelyik elem még hiányzik, azt a kezdés előtt érdemes rögzíteni: ki készíti el, milyen formátumban és milyen határidővel.',
    ],
    points: ['Logó és arculati fájlok', 'Jogtisztán használható fényképek', 'Jóváhagyott szolgáltatásleírások', 'Kapcsolati és számlázási adatok', 'Engedélyezett referenciák', 'Adatkezelési információk'],
  },
  {
    eyebrow: 'Technika és döntések',
    title: 'A hozzáférések és felelősségek legyenek írásban tiszták.',
    paragraphs: [
      'A meglévő domain, tárhely, e-mail, analitikai és foglalási rendszer hozzáféréseit még a munka előtt ellenőrizni kell. Jelszót nem érdemes egyszerű e-mailben küldeni; ahol lehet, külön felhasználói jogosultságot vagy biztonságos megosztást kell használni.',
      'Döntse el, ki adhat végleges jóváhagyást. Egy kijelölt kapcsolattartó összesített visszajelzése gyorsabb és egyértelműbb, mint több, egymástól független módosítási lista.',
      'Az ajánlat rögzítse a projekt terjedelmét, a vállalt funkciókat, a tartalomért való felelősséget, a határidőt, az esetleges külső díjakat és az átadás utáni támogatást.',
    ],
  },
] as const

const questions = [
  { question: 'Kell kész szöveggel érkezni?', answer: 'Nem feltétlenül, de előre tisztázni kell, hogy a végleges szöveget ki készíti és ki hagyja jóvá. A hiányzó tartalom hatással lehet az árra és a határidőre.' },
  { question: 'Mi történik, ha még nincs domain?', answer: 'A megfelelő domain kiválasztása és regisztrációja a projekt elején rendezhető. Előre rögzíteni kell, kinek a nevén lesz, ki kezeli és milyen megújítási díja van.' },
  { question: 'Használhatók az internetről letöltött képek?', answer: 'Csak akkor, ha a felhasználási jog ezt egyértelműen megengedi. Biztonságosabb saját fotót, engedélyezett ügyfélanyagot vagy megfelelő licencű képet használni.' },
  { question: 'Ki adja a végleges jóváhagyást?', answer: 'Ezt a vállalkozásnak kell kijelölnie. A projekt akkor halad kiszámíthatóan, ha egy felelős személy ad összesített, végleges visszajelzést.' },
] as const

const related = [
  { href: '/hu/tudastar/mennyi-ido-alatt-keszul-el-egy-weboldal/', title: 'Mennyi idő alatt készül el egy weboldal?', description: 'Mely előkészületek segítik a kiszámítható ütemezést?' },
  { href: '/hu/tudastar/weboldal-keszites-arak-2026/', title: 'Weboldal-készítés árak 2026-ban', description: 'Mely döntések és funkciók befolyásolják a végleges ajánlatot?' },
] as const

export default function WebsitePreparationGuidePage() {
  return <WebsiteGuidePage slug={slug} title={title} description={description} readTime="8 perc" introduction="A gyors induláshoz nem hosszú technikai dokumentáció kell, hanem tiszta üzleti cél, rendezett tartalom, használható hozzáférések és egyértelmű döntési felelősség." sections={sections} questions={questions} related={related} contactTitle="Készítsük elő a weboldal projektjét lépésről lépésre." />
}
