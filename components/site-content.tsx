'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowRight, Check, ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { RoiCalculator } from '@/components/roi-calculator'

type Language = 'hu' | 'en'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2YubVuqtaTh64zIc4twGOQiIKif9h5.png'

const content = {
  hu: {
    nav: ['Weboldal', 'Top 3 helyezés a Google Térképen 90 napon belül', 'Folyamat', 'Árak', 'Kapcsolat'],
    navIds: ['weboldal', 'seo', 'folyamat', 'arak', 'kapcsolat'],
    cta: 'Ingyenes konzultáció',
    menu: 'Menü megnyitása',
    close: 'Menü bezárása',
    lang: 'EN',
    eyebrow: 'Weboldal-készítés helyi vállalkozásoknak',
    hero: 'Professzionális weboldalak helyi vállalkozásoknak amelyek ügyfeleket hoznak',
    heroText: 'A TMS Marketing egyedi, mobilbarát weboldalakat készít villanyszerelőknek, vízvezeték-szerelőknek, fogorvosoknak, éttermeknek és más helyi szolgáltatóknak, hogy az online jelenlétük valódi megkereséseket hozzon.',
    heroPrimary: 'Kérek ingyenes konzultációt',
    heroSecondary: 'Ismerje meg a szolgáltatásokat',
    heroNote: 'Egyedi dizájn · Mobilbarát · Kapcsolatfelvétel',
    problemLabel: 'A probléma',
    problemTitle: 'Ha a weboldala nem meggyőző, az ügyfelek máshol keresnek megoldást.',
    problems: [
      ['Elavult vagy hiányzó weboldal', 'Sok helyi vállalkozásnak nincs modern, megbízható online megjelenése, pedig a potenciális ügyfelek először az interneten keresnek.'],
      ['Gyenge online jelenlét', 'Ha Önt nem találják meg vagy nem érzik profinak, a látogatók továbblépnek a konkurenciához.'],
      ['Nem működik jól mobilon', 'Az ügyfelek telefonról böngésznek. Ha az oldal lassú vagy nehezen használható, elveszíti az érdeklődőket.'],
      ['Nem jönnek megkeresések', 'A látogatók megnézik az oldalt, de nem veszik fel Önnel a kapcsolatot, mert hiányzik a világos felhívás vagy az egyszerű űrlap.'],
      ['A konkurencia profibbnak tűnik', 'Ha a környékbeli versenytársak jobb weboldallal rendelkeznek, Ön hátrányban van anélkül, hogy rosszabbul dolgozna.'],
    ],
    webLabel: 'Fő szolgáltatás',
    webTitle: 'Professzionális weboldal-készítés',
    webIntro: 'Egy jól megtervezett weboldal nem dísz, hanem üzleti eszköz, amely bemutatja a szolgáltatásait és megkönnyíti a kapcsolatfelvételt.',
    webFeatures: [
      ['Egyedi dizájn', 'Az Ön vállalkozásához és célközönségéhez igazított megjelenés, nem sablon, hanem személyre szabott arculat.'],
      ['Mobilbarát kialakítás', 'Minden eszközön jól működő, gyorsan betöltődő oldal, amely telefonról is kényelmesen használható.'],
      ['Kapcsolatfelvételi űrlap', 'Egyszerű, megbízható űrlap, amelyen keresztül az érdeklődők könnyen üzenetet küldhetnek.'],
      ['Foglalási rendszerek', 'Időpontfoglalás vagy ajánlatkérés integrálása, ha az üzleti modellje ezt igényli.'],
      ['SEO alapok', 'Technikai és tartalmi alapok a keresőben való megjelenéshez, hogy az Ön környékén megtalálják.'],
      ['Gyors betöltés', 'Optimalizált oldal, amely nem veszít el látogatókat a lassú megjelenés miatt.'],
    ],
    seoLabel: 'Kiegészítő szolgáltatás',
    seoTitle: 'Top 3 helyezés a Google Térképen 90 napon belül és Google Cégprofil optimalizálás',
    seoIntro: 'A weboldal az alap. A Top 3 helyezés a Google Térképen 90 napon belül segít, hogy az Ön környékén megtalálják a Google-ben és a Google Térképen is.',
    seoFeatures: [
      ['Google Cégprofil optimalizálás', 'Profil kitöltése, kategóriák, leírás és képek rendezése, hogy megbízhatóan jelenjen meg a keresésben.'],
      ['Helyi keresőoptimalizálás', 'Célzott munka azért, hogy az Ön szolgáltatási területén jobban látható legyen.'],
      ['Versenytárs elemzés', 'Áttekintjük, hogyan jelennek meg a környékbeli konkurensek, és hol van lehetőség előnyre.'],
      ['Helyezés követés', 'Rendszeres riport arról, hogyan alakul az online láthatóság.'],
    ],
    processLabel: 'Hogyan dolgozunk?',
    processTitle: 'Négy lépésben az ötlettől az éles weboldalig.',
    process: [
      ['01', 'Ingyenes konzultáció', 'Megismerjük a vállalkozását, céljait és azt, mire van szüksége az online jelenlétben.'],
      ['02', 'Tervezés', 'Kialakítjuk az oldal struktúráját, megjelenését és a szükséges funkciókat.'],
      ['03', 'Weboldal készítés', 'Elkészítjük az oldalt: dizájn, tartalom, űrlapok és technikai beállítások.'],
      ['04', 'Beüzemeltetés', 'Élesítjük az oldalt és elérhetővé tesszük az interneten a megbeszélt domain név alatt.'],
    ],
    pricingLabel: 'Árazás',
    pricingTitle: 'Átlátható csomagok helyi vállalkozásoknak.',
    pricingIntro: 'A végleges árat a projekt méretétől, az oldalak számától és az egyedi igényektől függően határozzuk meg konzultáció után.',
    plans: [
      ['Website Starter', '90.000 – 160.000 Ft', 'Első professzionális weboldal helyi vállalkozásoknak', ['Egyedi webdizájn', 'Mobilbarát kialakítás', 'Kapcsolatfelvételi űrlap', 'Alap SEO beállítás']],
      ['Premium Website', '170.000 Ft+', 'Összetettebb igényekre, több funkcióval', ['Több aloldal', 'Egyedi funkciók', 'Foglalási rendszerek', 'Fejlett SEO alapok']],
      ['Top 3 helyezés a Google Térképen 90 napon belül', '80.000 Ft / hó', 'Google láthatóság a szolgáltatási területén', ['Google Cégprofil optimalizálás', 'Google Térkép optimalizálás', 'Versenytárs elemzés', 'Helyezés követés']],
    ],
    maintenanceTitle: 'Karbantartás',
    maintenancePrice: '15.000 Ft / hó (opcionális)',
    maintenanceText: 'A weboldal karbantartás nélkül is elérhető marad az interneten. Ez egy kényelmi és biztonsági szolgáltatás, nem kötelező havidíj. Ha nem igényli ezt a szolgáltatást, és beüzemeltetés után változtatást szeretne az oldalon, azt előre megbeszélt összegért vállalom, a munka mennyiségétől függően.',
    quote: 'Ajánlatot kérek',
    recommended: 'Legnépszerűbb',
    faqLabel: 'Gyakori kérdések',
    faqTitle: 'Amit érdemes tudni, mielőtt weboldalt készíttet.',
    faqs: [
      ['Hogyan zajlik a weboldal készítés folyamata?', 'Először egy ingyenes konzultáción átbeszéljük az igényeit. Ezután következik a tervezés, majd az oldal elkészítése, végül a beüzemeltetés. Minden lépésnél egyeztetünk Önnel.'],
      ['Mennyi idő alatt készül el egy weboldal?', '1-2 hét'],
      ['Mi befolyásolja az árat?', 'Az oldalak száma, a dizájn összetettsége, az egyedi funkciók (pl. foglalási rendszer), valamint a szükséges beállítások. A konzultáció után pontos, írásbeli ajánlatot adunk.'],
      ['Mi a karbantartás, és kötelező-e?', 'A karbantartás opcionális havi szolgáltatás biztonsági frissítésekre és kisebb technikai támogatásra. Az oldal karbantartás nélkül is működik. Ha később változtatást szeretne, azt külön, megbeszélt díjazásért vállaljuk.'],
      ['Mikor érdemes a Top 3 helyezés a Google Térképen 90 napon belül szolgáltatást igénybe venni?', 'Ha már van weboldala, de a Google-ben és a Google Térképen kevésbé látható, mint szeretné. A Top 3 helyezés a Google Térképen 90 napon belül szolgáltatás kiegészíti a weboldalt, nem helyettesíti azt.'],
    ],
    aboutLabel: 'Rólunk',
    aboutTitle: 'Személyes figyelem, átlátható munka.',
    aboutText: 'A TMS Marketing tulajdonosa Tamás. Célom, hogy helyi vállalkozások számára profi, működő weboldalakat készítsek, amelyek valódi megkereséseket hoznak, és amelyek mögött egy elérhető, megbízható partner áll.',
    contactLabel: 'Kapcsolat',
    contactTitle: 'Beszéljük át, mire van szüksége az online jelenlétben.',
    contactText: 'Írja meg röviden, mivel foglalkozik és milyen weboldalt szeretne. Tamás személyesen válaszol a megkeresésére.',
    contactInfo: [['E-mail', 'tokolitamas7@gmail.com'], ['Tulajdonos', 'Tamás']],
    footer: 'Professzionális weboldal-készítés és Top 3 helyezés a Google Térképen 90 napon belül helyi vállalkozásoknak.',
    copyright: 'Minden jog fenntartva.',
  },
  en: {
    nav: ['Websites', 'Top 3 ranking on Google Maps within 90 days', 'Process', 'Pricing', 'Contact'],
    navIds: ['weboldal', 'seo', 'folyamat', 'arak', 'kapcsolat'],
    cta: 'Free consultation',
    menu: 'Open menu',
    close: 'Close menu',
    lang: 'HU',
    eyebrow: 'Website development for local businesses',
    hero: 'Professional websites for local businesses that bring in customers.',
    heroText: 'TMS Marketing builds custom, mobile-friendly websites for electricians, plumbers, dentists, restaurants and other local service providers, so your online presence generates real enquiries.',
    heroPrimary: 'Request a free consultation',
    heroSecondary: 'Explore our services',
    heroNote: 'Custom design · Mobile-friendly · Contact forms',
    problemLabel: 'The problem',
    problemTitle: 'If your website does not inspire trust, customers look elsewhere.',
    problems: [
      ['Outdated or missing website', 'Many local businesses lack a modern, trustworthy online presence, yet potential customers search online first.'],
      ['Weak online visibility', 'If you are hard to find or do not look professional, visitors move on to competitors.'],
      ['Poor mobile experience', 'Customers browse on their phones. A slow or awkward site loses enquiries before they happen.'],
      ['No enquiries coming in', 'People visit your site but do not reach out, because the call to action is unclear or the contact form is missing.'],
      ['Competitors look more professional', 'If nearby businesses have better websites, you are at a disadvantage, even if your work is just as good.'],
    ],
    webLabel: 'Primary service',
    webTitle: 'Professional website development',
    webIntro: 'A well-designed website is not decoration, it is a business tool that showcases your services and makes it easy to get in touch.',
    webFeatures: [
      ['Custom design', 'A look tailored to your business and audience, not a generic template, but a personalised brand presence.'],
      ['Mobile-friendly layout', 'A fast-loading site that works well on every device and is comfortable to use on a phone.'],
      ['Contact forms', 'A simple, reliable form so interested visitors can send you a message easily.'],
      ['Booking systems', 'Appointment booking or quote requests integrated when your business model requires it.'],
      ['SEO foundations', 'Technical and content basics so you can be found in search, in your local area.'],
      ['Fast loading', 'An optimised site that does not lose visitors to slow page loads.'],
    ],
    seoLabel: 'Additional service',
    seoTitle: 'Top 3 ranking on Google Maps within 90 days and Google Business Profile optimisation',
    seoIntro: 'Your website is the foundation. Top 3 ranking on Google Maps within 90 days helps you get found on Google and Google Maps in your service area.',
    seoFeatures: [
      ['Google Business Profile optimisation', 'Profile setup, categories, description and photos arranged so you appear reliably in search.'],
      ['Local search optimisation', 'Targeted work to improve visibility in your service area.'],
      ['Competitor analysis', 'We review how nearby competitors appear online and where opportunities exist.'],
      ['Ranking tracking', 'Regular reporting on how your online visibility is developing.'],
    ],
    processLabel: 'How we work',
    processTitle: 'Four steps from idea to live website.',
    process: [
      ['01', 'Free consultation', 'We learn about your business, goals and what you need from your online presence.'],
      ['02', 'Design', 'We define the site structure, visual direction and required features.'],
      ['03', 'Website build', 'We create the site: design, content, forms and technical setup.'],
      ['04', 'Deployment', 'We launch the site and make it accessible on the internet under the agreed domain name.'],
    ],
    pricingLabel: 'Pricing',
    pricingTitle: 'Clear packages for local businesses.',
    pricingIntro: 'The final price depends on project size, number of pages and custom requirements, confirmed after consultation.',
    plans: [
      ['Website Starter', '90,000 – 160,000 Ft', 'A first professional website for local businesses', ['Custom web design', 'Mobile-responsive layout', 'Contact form', 'Basic SEO setup']],
      ['Premium Website', '170,000 Ft+', 'For more complex needs with additional features', ['Multiple pages', 'Custom features', 'Booking systems', 'Advanced SEO foundations']],
      ['Top 3 ranking on Google Maps within 90 days', '40,000 Ft / month', 'Google visibility in your service area', ['Google Business Profile optimisation', 'Google Maps optimisation', 'Competitor analysis', 'Ranking tracking']],
    ],
    maintenanceTitle: 'Maintenance',
    maintenancePrice: '15,000 Ft / month (optional)',
    maintenanceText: 'Your website remains online without a maintenance plan. This is a convenience and security service, not a mandatory monthly fee. If you do not need it and want changes after launch, I will handle those at an agreed price depending on the scope of work.',
    quote: 'Request a quote',
    recommended: 'Most popular',
    faqLabel: 'FAQ',
    faqTitle: 'What to know before commissioning a website.',
    faqs: [
      ['How does the website development process work?', 'We start with a free consultation to understand your needs. Then comes design, build and finally launch and handover. We align with you at every step.'],
      ['How long does a website take to build?', '1-2 weeks'],
      ['What affects the price?', 'Number of pages, design complexity, custom features (e.g. booking system) and setup. We provide a clear written quote after consultation.'],
      ['What is maintenance, and is it required?', 'Maintenance is an optional monthly service for security updates and minor technical support. Your site works without it. If you need changes later, we handle those separately at an agreed fee.'],
      ['When is Top 3 ranking on Google Maps within 90 days worth considering?', 'When you already have a website but are less visible on Google and Google Maps than you would like. Top 3 ranking on Google Maps within 90 days complements your website, it does not replace it.'],
    ],
    aboutLabel: 'About',
    aboutTitle: 'Personal attention. Transparent work.',
    aboutText: 'TMS Marketing is owned by Tamás. My goal is to build professional, effective websites for local businesses, sites that generate real enquiries, backed by an accessible and reliable partner.',
    contactLabel: 'Contact',
    contactTitle: 'Let us discuss what you need for your online presence.',
    contactText: 'Tell us briefly what your business does and what kind of website you need. Tamás will respond personally.',
    contactInfo: [['Email', 'tokolitamas7@gmail.com'], ['Owner', 'Tamás']],
    footer: 'Professional website development and Top 3 ranking on Google Maps within 90 days for local businesses.',
    copyright: 'All rights reserved.',
  },
} as const

function SectionIntro({ label, title, align = 'left' }: { label: string; title: string; align?: 'left' | 'center' }) {
  return (
    <div className={align === 'center' ? 'mx-auto flex max-w-3xl flex-col items-center gap-4 text-center' : 'flex max-w-3xl flex-col gap-4'}>
      <p className="eyebrow">{label}</p>
      <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">{title}</h2>
    </div>
  )
}

export function SiteContent() {
  const [language, setLanguage] = useState<Language>('hu')
  const [open, setOpen] = useState(false)
  const t = content[language]
  useEffect(() => { document.documentElement.lang = language }, [language])

  return <>
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="site-shell flex h-20 items-center justify-between gap-6">
        <a href="#top" aria-label="TMS Marketing kezdőlap" className="flex items-center gap-3">
          <Image src={logoUrl} alt="TMS Marketing" width={104} height={104} className="size-14 rounded-md object-cover" priority />
          <span className="hidden font-semibold tracking-tight sm:block">TMS Marketing</span>
        </a>
        <nav aria-label="Fő navigáció" className="hidden items-center gap-7 lg:flex">
          {t.nav.map((item, i) => <a key={item} href={`#${t.navIds[i]}`} className="nav-link">{item}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setLanguage(language === 'hu' ? 'en' : 'hu')} className="button-ghost" aria-label={language === 'hu' ? 'Switch to English' : 'Váltás magyar nyelvre'}>{t.lang}</button>
          <a href="#kapcsolat" className="button-primary hidden sm:inline-flex">{t.cta}<ArrowRight data-icon="inline-end" /></a>
          <button className="button-ghost lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? t.close : t.menu}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobil navigáció" className="site-shell flex flex-col gap-1 border-t border-border py-4 lg:hidden">
          {t.nav.map((item, i) => <a key={item} href={`#${t.navIds[i]}`} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 font-medium hover:bg-muted">{item}</a>)}
          <a href="#kapcsolat" onClick={() => setOpen(false)} className="button-primary mt-2">{t.cta}</a>
        </nav>
      )}
    </header>

    <main id="top">
      <section className="site-shell flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center gap-10 py-16 text-center lg:py-24">
        <Image src={logoUrl} alt="TMS Marketing" width={120} height={120} className="size-24 rounded-xl object-cover" priority />
        <div className="flex max-w-4xl flex-col items-center gap-8">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="font-serif text-5xl leading-[1.02] tracking-[-.04em] text-balance sm:text-6xl lg:text-7xl">{t.hero}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{t.heroText}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#kapcsolat" className="button-primary">{t.heroPrimary}<ArrowRight data-icon="inline-end" /></a>
            <a href="#weboldal" className="button-outline">{t.heroSecondary}</a>
          </div>
          <p className="text-sm font-medium text-muted-foreground">{t.heroNote}</p>
        </div>
      </section>

      <section id="problema" className="section muted-section">
        <div className="site-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <SectionIntro label={t.problemLabel} title={t.problemTitle} />
          <div className="flex flex-col">
            {t.problems.map(([title, text], i) => (
              <article key={title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-border py-7">
                <span className="font-serif text-2xl text-primary">0{i + 1}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="weboldal" className="section">
        <div className="site-shell flex flex-col gap-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr]">
            <SectionIntro label={t.webLabel} title={t.webTitle} />
            <p className="self-end leading-relaxed text-muted-foreground">{t.webIntro}</p>
          </div>
          <div className="grid gap-px border-y border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {t.webFeatures.map(([title, text], i) => (
              <article key={title} className="flex min-h-64 flex-col justify-between gap-8 bg-background p-7 lg:p-9">
                <span className="font-serif text-3xl text-primary">0{i + 1}</span>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="seo" className="section muted-section">
        <div className="site-shell flex flex-col gap-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr]">
            <SectionIntro label={t.seoLabel} title={t.seoTitle} />
            <p className="self-end leading-relaxed text-muted-foreground">{t.seoIntro}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {t.seoFeatures.map(([title, text]) => (
              <article key={title} className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-7">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="folyamat" className="section">
        <div className="site-shell flex flex-col gap-14">
          <SectionIntro label={t.processLabel} title={t.processTitle} />
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {t.process.map(([num, title, text]) => (
              <li key={num} className="flex min-h-72 flex-col justify-between gap-8 bg-background p-7">
                <span className="font-serif text-4xl text-primary">{num}</span>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="arak" className="section muted-section">
        <div className="site-shell flex flex-col gap-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr]">
            <SectionIntro label={t.pricingLabel} title={t.pricingTitle} />
            <p className="self-end leading-relaxed text-muted-foreground">{t.pricingIntro}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {t.plans.map(([name, price, desc, features], i) => (
              <article key={name} className={`flex flex-col gap-8 rounded-2xl border p-7 ${i === 0 ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card'}`}>
                {i === 0 && <span className="text-xs font-bold uppercase tracking-[.18em]">{t.recommended}</span>}
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-3xl">{name}</h3>
                  <p className={`font-serif text-2xl ${i === 0 ? 'text-primary-foreground' : 'text-primary'}`}>{price}</p>
                  <p className={i === 0 ? 'text-primary-foreground/75' : 'text-muted-foreground'}>{desc}</p>
                </div>
                <ul className="flex flex-1 flex-col gap-4">
                  {features.map(feature => <li key={feature} className="flex gap-3"><Check className="shrink-0" />{feature}</li>)}
                </ul>
                <a href="#kapcsolat" className={i === 0 ? 'button-light' : 'button-outline'}>{t.quote}<ArrowRight data-icon="inline-end" /></a>
              </article>
            ))}
          </div>
          <article className="rounded-2xl border border-border bg-card p-7 lg:p-9">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="font-serif text-2xl">{t.maintenanceTitle}</h3>
                <p className="font-serif text-xl text-primary">{t.maintenancePrice}</p>
              </div>
              <p className="max-w-3xl leading-relaxed text-muted-foreground">{t.maintenanceText}</p>
            </div>
          </article>
        </div>
      </section>

      <RoiCalculator language={language} />

      <section id="gyik" className="section">
        <div className="site-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <SectionIntro label={t.faqLabel} title={t.faqTitle} />
          <div className="flex flex-col">
            {t.faqs.map(([question, answer]) => (
              <details key={question} className="group border-t border-border py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold">
                  <span>{question}</span>
                  <ChevronDown className="shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="max-w-2xl pt-4 leading-relaxed text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="rolunk" className="section bg-primary text-primary-foreground">
        <div className="site-shell grid gap-12 lg:grid-cols-[.55fr_1.45fr]">
          <p className="eyebrow text-primary-foreground/65">{t.aboutLabel}</p>
          <div className="flex flex-col gap-6">
            <h2 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">{t.aboutTitle}</h2>
            <p className="max-w-3xl text-lg leading-relaxed text-primary-foreground/75">{t.aboutText}</p>
          </div>
        </div>
      </section>

      <section id="kapcsolat" className="section">
        <div className="site-shell grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div className="flex flex-col gap-7">
            <SectionIntro label={t.contactLabel} title={t.contactTitle} />
            <p className="max-w-xl leading-relaxed text-muted-foreground">{t.contactText}</p>
            <div className="flex flex-col gap-4 pt-4">
              {t.contactInfo.map(([label, value], i) => (
                <div key={label} className="flex items-center gap-3">
                  {i === 0 ? <Mail className="text-primary" /> : <Phone className="text-primary" />}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
                    {i === 0 ? <a href={`mailto:${value}`} className="font-semibold hover:text-primary">{value}</a> : <p className="font-semibold">{value}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ContactForm language={language} />
        </div>
      </section>
    </main>

    <footer className="border-t border-border py-10">
      <div className="site-shell flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Image src={logoUrl} alt="TMS Marketing" width={56} height={56} className="size-12 rounded-md object-cover" />
            <strong>TMS Marketing</strong>
          </div>
          <p className="text-sm text-muted-foreground">{t.footer}</p>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} TMS Marketing. {t.copyright}</p>
      </div>
    </footer>
  </>
}
