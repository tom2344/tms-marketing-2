import { WebsiteGuidePage, websiteGuideMetadata } from '@/components/website-guide-page'

const slug = 'egyoldalas-vagy-tobboldalas-weboldal'
const title = 'Egyoldalas vagy többoldalas weboldal: melyik a jobb választás?'
const description = 'Egyoldalas és többoldalas céges weboldalak összehasonlítása: mikor elég egy bemutatkozó oldal, és mikor indokolt külön aloldalakat készíteni?'

export const metadata = websiteGuideMetadata({ slug, title, description })

const sections = [
  {
    eyebrow: 'Egyoldalas weboldal',
    title: 'Egy világos ajánlat rövid, összefüggő bemutatása.',
    paragraphs: [
      'Az egyoldalas felépítésnél a legfontosabb információk egyetlen oldalon követik egymást: az ajánlat, a vállalkozás bemutatása, a bizalmi elemek és a kapcsolatfelvétel. A menüpontok gyakran ugyanazon oldal megfelelő részéhez vezetnek.',
      'Ez jó választás lehet egy induló vagy egyszerű szolgáltató vállalkozásnak, ha kevés szolgáltatást kell bemutatni, nincs nagy tartalmi mennyiség, és a fő cél az, hogy az érdeklődő gyorsan megértse az ajánlatot.',
    ],
    points: ['Egy fő ajánlat', 'Korlátozott tartalmi mennyiség', 'Egyszerű kapcsolatfelvételi út', 'Később bővíthető szerkezet'],
  },
  {
    eyebrow: 'Többoldalas weboldal',
    title: 'Külön oldal minden valóban önálló témának.',
    paragraphs: [
      'Többoldalas felépítésnél a szolgáltatások, a vállalkozás bemutatása, a referenciák és más fontos témák saját oldalt kaphatnak. Ez átláthatóbb lehet, ha a látogatók eltérő problémákra keresnek választ.',
      'Az önálló szolgáltatási oldalak organikus keresésben is hasznosak lehetnek, mert egy-egy konkrét keresési szándékot részletesen tudnak kiszolgálni. Ettől még minden oldalnak saját, érdemi tartalomra van szüksége. A név vagy a város puszta cseréje nem teremt értéket.',
    ],
    points: ['Több különálló szolgáltatás', 'Részletesebb bemutatkozás', 'Referenciák vagy tudástár', 'Eltérő organikus keresési szándékok'],
  },
  {
    eyebrow: 'Döntési sorrend',
    title: 'Először a tartalmat válassza szét, ne a menüpontokat szaporítsa.',
    paragraphs: [
      'Írja össze, milyen kérdéssel érkezhet egy leendő ügyfél, és milyen információ szükséges a döntéséhez. Ha több téma külön-külön is részletes választ igényel, valószínűleg indokoltak az aloldalak.',
      'Ha minden tartalom ugyanazt az egy ajánlatot támogatja, és röviden elmondható, az egyoldalas megoldás egyszerűbb lehet. A későbbi bővítés lehetőségét már a kezdeti szerkezetnél érdemes figyelembe venni.',
      'A több oldal önmagában nem jelent jobb keresőhelyezést. A világos szerkezet, a hasznos tartalom, a technikai hozzáférhetőség és a hitelesség együtt ad értéket.',
    ],
  },
] as const

const questions = [
  { question: 'Lehet egy egyoldalas weboldal keresőbarát?', answer: 'Igen. Lehet gyors, mobilbarát és technikailag indexelhető. Ugyanakkor több, egymástól eltérő szolgáltatási keresés kiszolgálására a különálló, részletes aloldalak gyakran alkalmasabbak.' },
  { question: 'Később bővíthető az egyoldalas oldal?', answer: 'Igen, ha a technikai felépítés ezt lehetővé teszi. A bővítés során a valóban önálló témák külön URL-t és saját tartalmat kaphatnak.' },
  { question: 'Minden szolgáltatásnak külön oldal kell?', answer: 'Nem. Csak annak érdemes önálló oldalt készíteni, amely külön ügyféligényt szolgál ki, és amelyről érdemi, önálló információ adható.' },
  { question: 'Melyik csomag tartozik a két felépítéshez?', answer: 'A Starter az egyoldalas bemutatkozó weboldalhoz, a Premium pedig a több tartalmi aloldalt és összetettebb funkciókat igénylő projektekhez készült.' },
] as const

const related = [
  { href: '/hu/tudastar/weboldal-keszites-arak-2026/', title: 'Weboldal-készítés árak 2026-ban', description: 'Mi határozza meg a csomag és a végleges ajánlat összegét?' },
  { href: '/hu/tudastar/keresobarat-weboldal-mit-jelent/', title: 'Mit jelent a keresőbarát weboldal?', description: 'Technikai alapok, tartalom és hitelesség közérthetően.' },
] as const

export default function OnePageVsMultiPageGuidePage() {
  return <WebsiteGuidePage slug={slug} title={title} description={description} readTime="7 perc" introduction="Nem az a kérdés, hogy melyik felépítés divatosabb. A megfelelő választás attól függ, hány önálló témát kell bemutatni, hogyan keresnek a leendő ügyfelek, és milyen bővítés várható később." sections={sections} questions={questions} related={related} contactTitle="Válasszuk ki az ajánlatához illő oldalstruktúrát." />
}
