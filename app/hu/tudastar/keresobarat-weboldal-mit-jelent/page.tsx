import { WebsiteGuidePage, websiteGuideMetadata } from '@/components/website-guide-page'

const slug = 'keresobarat-weboldal-mit-jelent'
const title = 'Mit jelent valójában a keresőbarát weboldal?'
const description = 'A keresőbarát weboldal technikai és tartalmi alapjai: feltérképezhetőség, mobilos használhatóság, oldalcímek, belső linkek és hitelesség.'

export const metadata = websiteGuideMetadata({ slug, title, description })

const sections = [
  {
    eyebrow: 'Technikai alap',
    title: 'A keresőnek el kell érnie és helyesen kell értelmeznie az oldalt.',
    paragraphs: [
      'A keresőbarát technikai felépítés része az indexelhető oldal, az egyértelmű URL, a helyes canonical, a leíró oldalcím és a rendezett címsorhierarchia. A keresőrobotok számára fontos oldalakat nem szabad véletlenül tiltani vagy hibás oldalra irányítani.',
      'A mobilos használhatóság, az olvasható tartalom, a működő navigáció és az optimalizált képek egyszerre szolgálják a látogatót és a kereső általi feldolgozhatóságot.',
    ],
    points: ['Indexelhető, önálló URL-ek', 'Helyes canonical és metaadatok', 'Egyértelmű H1 és címsorok', 'Mobilbarát elrendezés', 'Optimalizált képek', 'Működő belső hivatkozások'],
  },
  {
    eyebrow: 'Tartalom és szándék',
    title: 'Egy oldal egyértelmű kérdésre adjon teljes választ.',
    paragraphs: [
      'A technikai megfelelés önmagában nem teszi az oldalt hasznossá. A szolgáltatási oldalnak világosan meg kell neveznie, mit kap az ügyfél, kinek szól az ajánlat, hogyan zajlik a folyamat, milyen korlátok vannak, és hogyan lehet továbblépni.',
      'A keresett kifejezéseket természetesen érdemes használni az oldalcímben, a főcímben és a leíró szövegben. A kulcsszavak ismétlése azonban nem helyettesíti az eredeti információt és az olvasó kérdéseinek megválaszolását.',
      'Ha több szolgáltatás külön keresési szándékot fed le, önálló oldalakat kaphatnak. Ezeknek valóban különböző, saját tartalommal kell rendelkezniük.',
    ],
  },
  {
    eyebrow: 'Hitelesség és eredmény',
    title: 'A keresőbarát alap nem jelent garantált helyezést.',
    paragraphs: [
      'Az organikus sorrendet nem kizárólag a weboldal kódja vagy egyetlen SEO-beállítás dönti el. Számít a verseny, a tartalom minősége, a vállalkozás és a szerző átláthatósága, a valódi referenciák, valamint az internet más részein megszerzett hiteles említések.',
      'Ezért felelősen azt lehet vállalni, hogy a weboldal technikai és tartalmi alapjai nem akadályozzák a kereső általi feldolgozást. Konkrét első helyezést egy új weboldal önmagában nem garantál.',
    ],
    points: ['Valós vállalkozási adatok', 'Azonosítható szerző vagy szolgáltató', 'Ellenőrizhető referenciák', 'Hasznos, eredeti tartalom', 'Természetes külső említések', 'Search Console-alapú mérés'],
  },
] as const

const questions = [
  { question: 'Elég, ha a weboldal gyors és mobilbarát?', answer: 'Nem. Ezek fontos alapok, de a keresőnek és az érdeklődőnek azt is értenie kell, miről szól az oldal, kinek segít, és miért hiteles az ajánlat.' },
  { question: 'Kell minden kulcsszónak külön oldal?', answer: 'Nem. Külön oldal akkor indokolt, ha a keresés mögött önálló ügyféligény van, és arról érdemi, különálló tartalom készíthető.' },
  { question: 'A strukturált adat automatikusan jobb helyezést ad?', answer: 'Nem. A strukturált adat segíthet a tartalom és az entitások értelmezésében, de nem helyettesíti a hasznos oldalt, és önmagában nem garantál kiemelt vagy jobb találati helyet.' },
  { question: 'Garantálható az első Google-hely?', answer: 'Nem. A weboldal keresőbarát alapokkal készülhet, de a tényleges helyezés több, folyamatosan változó tényezőtől és a versenytársaktól is függ.' },
] as const

const related = [
  { href: '/hu/tudastar/egyoldalas-vagy-tobboldalas-weboldal/', title: 'Egyoldalas vagy többoldalas weboldal?', description: 'Mikor segíti a különálló oldal a tartalmat és a keresési szándékot?' },
  { href: '/hu/tudastar/organikus-talalat-vagy-google-terkep/', title: 'Organikus találat vagy Google Térkép?', description: 'Miért két külön rendszer az organikus és a térképes rangsor?' },
] as const

const sources = [
  { href: 'https://developers.google.com/search/docs/essentials', label: 'Google Search Essentials' },
  { href: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content', label: 'Hasznos, megbízható tartalom' },
  { href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide', label: 'SEO-kezdő útmutató' },
] as const

export default function SearchFriendlyWebsiteGuidePage() {
  return <WebsiteGuidePage slug={slug} title={title} description={description} readTime="9 perc" introduction="A keresőbarát weboldal nem egy bekapcsolható funkció. Olyan technikai, tartalmi és hitelességi alapok együttese, amelyek segítik a látogatót, és lehetővé teszik, hogy a kereső helyesen dolgozza fel az oldalt." sections={sections} questions={questions} related={related} sources={sources} contactTitle="Készítsünk tiszta, mérhető alapot az organikus láthatósághoz." />
}
