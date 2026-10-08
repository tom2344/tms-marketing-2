import { WebsiteGuidePage, websiteGuideMetadata } from '@/components/website-guide-page'

const slug = 'weboldal-keszites-arak-2026'
const title = 'Weboldal-készítés árak 2026-ban: mitől függ a végösszeg?'
const description = 'Weboldal-készítési árak kisvállalkozásoknak: csomagok, költségtényezők, fenntartási tételek és az ajánlatok összehasonlításának szempontjai.'

export const metadata = websiteGuideMetadata({ slug, title, description })

const sections = [
  {
    eyebrow: 'Kiinduló árak',
    title: 'Az oldalak száma csak az egyik költségtényező.',
    paragraphs: [
      'A Kiszely Marketing Starter csomagja 160.000 és 200.000 Ft közötti egyszeri díjért készül. Ez az egyoldalas bemutatkozó megoldás az ajánlatot, a vállalkozás bemutatását és a kapcsolatfelvételt egy áttekinthető oldalon rendezi el.',
      'A Premium csomag 250.000 Ft-tól indul. Akkor indokolt, ha több tartalmi aloldalra, külön szolgáltatási oldalakra, referenciákra, foglalási rendszerre vagy más egyedi funkcióra van szükség.',
      'A végleges tartalmat, funkciókat, határidőt és árat az egyeztetés után írásos ajánlat rögzíti. A csomagnév önmagában nem helyettesíti a pontos feladatleírást.',
    ],
    points: ['Starter: 160.000–200.000 Ft', 'Premium: 250.000 Ft-tól', 'Végleges terjedelem és díj: írásos ajánlatban'],
  },
  {
    eyebrow: 'Költségtényezők',
    title: 'Ezek növelhetik a projekt terjedelmét.',
    paragraphs: [
      'Több önálló oldal több szerkezeti, tartalmi és ellenőrzési munkát jelent. Ugyanez igaz azokra a funkciókra, amelyek külső rendszerhez kapcsolódnak vagy a látogató adatait kezelik.',
      'A tartalom készültsége szintén meghatározza a feladatot. Más munkafolyamat szükséges akkor, ha a végleges szöveg, logó és képek rendelkezésre állnak, és akkor, ha ezek megtervezéséhez vagy rendszerezéséhez is segítség kell.',
    ],
    points: ['Tartalmi aloldalak száma', 'Foglalás vagy egyedi űrlap', 'Külső rendszer vagy mérés bekötése', 'Szövegek és képek előkészítettsége', 'Egyedi működés és jogosultságok', 'A jóváhagyási folyamat terjedelme'],
  },
  {
    eyebrow: 'Ajánlatok összehasonlítása',
    title: 'Ne csak a nyitóárat nézze.',
    paragraphs: [
      'Két hasonló árú ajánlat tartalma jelentősen eltérhet. Érdemes ellenőrizni az oldalak számát, a mobilos kialakítást, az űrlap működését, a keresőbarát technikai alapokat, az átadás módját és azt, hogy milyen későbbi díjak merülhetnek fel.',
      'A domain, tárhely, fizetős bővítmények és külső szolgáltatások díja külön tétel lehet. Ezek tulajdonosát, kezelőjét és költségviselőjét még a kezdés előtt célszerű írásban rögzíteni.',
      'A konkrét Google-helyezés ígérete nem helyettesíti a műszaki tartalmat. Egy keresőbarát weboldal jó alapot ad, de a későbbi organikus eredmény a versenytől, a tartalomtól, a hitelességtől és külső jelektől is függ.',
    ],
  },
] as const

const questions = [
  { question: 'A Starter csomag minden vállalkozásnak elegendő?', answer: 'Nem. Akkor megfelelő, ha egyetlen áttekinthető oldalon bemutatható az ajánlat, a vállalkozás és a kapcsolatfelvétel. Több külön szolgáltatás vagy organikus céloldal esetén általában a többoldalas felépítés indokoltabb.' },
  { question: 'A 250.000 Ft a Premium csomag végleges ára?', answer: 'Ez induló ár. A végleges díj a szükséges aloldalak és funkciók ismeretében, írásos ajánlatban kerül rögzítésre.' },
  { question: 'Mit kell tartalmaznia egy összehasonlítható ajánlatnak?', answer: 'Legalább az oldalak és funkciók körét, a tartalomért való felelősséget, a határidőt, a jóváhagyási folyamatot, az átadás módját és az egyszeri vagy ismétlődő díjakat.' },
] as const

const related = [
  { href: '/hu/tudastar/egyoldalas-vagy-tobboldalas-weboldal/', title: 'Egyoldalas vagy többoldalas weboldal?', description: 'Döntési szempontok a két felépítés közötti választáshoz.' },
  { href: '/hu/tudastar/weboldal-keszites-elokeszites/', title: 'Mire van szükség a kezdéshez?', description: 'A céloktól és tartalomtól a technikai hozzáférésekig.' },
] as const

export default function WebsitePricingGuidePage() {
  return <WebsiteGuidePage slug={slug} title={title} description={description} readTime="8 perc" introduction="A weboldal ára nem pusztán az oldalak darabszámából áll. A tartalom, a szükséges funkciók, a jóváhagyási folyamat és a későbbi működtetés együtt határozza meg, pontosan mi kerül az ajánlatba." sections={sections} questions={questions} related={related} contactTitle="Kérjen pontos ajánlatot a szükséges weboldalra." />
}
