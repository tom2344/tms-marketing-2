'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, Menu, X } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { RoiCalculator } from '@/components/roi-calculator'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HpVwXi91yoonvKMYsveI3dcnZJdWfl.png'
const mapGreenUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Wiy4oFynSb4D83BYxxd5Tkm85UqSKs.png'
const mapRedUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qJiF3P7KItL1ue8why3gI2uBrtwQDU.png'
const founderUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y88XjYdJnxwVQIKpJuP6T5fGVjwBKj.png'

const problems = [
  ['Elavult vagy hiányzó weboldal', 'A potenciális ügyfelek először az interneten keresnek, ezért a hiteles online jelenlét ma már alapvető.'],
  ['Gyenge Google-láthatóság', 'Ha nem jelenik meg a keresőben vagy a Térképen, a környékbeli ügyfelek a konkurenciát választják.'],
  ['Nem jönnek megkeresések', 'A jó oldal nem csak szép: világosan megmutatja, miben segít, és egyszerűvé teszi a kapcsolatfelvételt.'],
]

const webFeatures = [
  ['Egyedi dizájn', 'Az Ön vállalkozásához és célközönségéhez igazított megjelenés.'],
  ['Mobilbarát kialakítás', 'Gyors, átlátható és kényelmes használat minden eszközön.'],
  ['Kapcsolatfelvételi űrlap', 'Egyszerű út az érdeklődőktől az első üzenetig.'],
  ['SEO alapok', 'Technikai és tartalmi alapok a jobb online megtalálhatóságért.'],
  ['Foglalási rendszerek', 'Időpontfoglalás vagy ajánlatkérés, ha a vállalkozásának erre van szüksége.'],
  ['Gyors betöltés', 'Optimalizált oldal, amely nem veszíti el a látogatókat.'],
]

const steps = [
  ['01', 'Ingyenes konzultáció', 'Megismerjük a vállalkozását, céljait és a jelenlegi online jelenlétét.'],
  ['02', 'Stratégia és tervezés', 'Kialakítjuk a megfelelő üzenetet, struktúrát és megjelenést.'],
  ['03', 'Megvalósítás', 'Elkészítjük a weboldalt, a tartalmat és a szükséges funkciókat.'],
  ['04', 'Indulás és támogatás', 'Élesítjük az oldalt, majd segítünk, hogy jól működjön a mindennapokban.'],
]

const faqs = [
  ['Mennyi idő alatt készül el egy weboldal?', 'Egy egyszerűbb bemutatkozó weboldal általában 1–2 hét alatt elkészül. A pontos idő a tartalom és a funkciók mennyiségétől függ.'],
  ['Mit tartalmaz a weboldal készítés?', 'Egyedi dizájnt, mobilbarát kialakítást, kapcsolatfelvételi lehetőséget, alap SEO-beállításokat és a szükséges technikai beüzemelést.'],
  ['Garantált a Top 3 helyezés?', 'A szolgáltatás célja a Top 3 Google Térkép-helyezés elérése 90 napon belül. Az eredmény a piac, a verseny és a profil állapotának függvénye, ezért minden projektet előzetesen felmérünk.'],
  ['Kötelező a havi karbantartás?', 'Nem. A havi 15.000 Ft-os karbantartás opcionális kényelmi és biztonsági szolgáltatás.'],
]

function Intro({ label, title }: { label: string; title: string }) {
  return <div className="flex max-w-3xl flex-col gap-4"><p className="eyebrow">{label}</p><h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">{title}</h2></div>
}

export function SiteContent() {
  const [open, setOpen] = useState(false)
  return <>
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="site-shell flex h-20 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Kiszely Marketing kezdőlap"><Image src={logoUrl} alt="Kiszely Marketing logó" width={56} height={56} className="size-12 rounded-lg object-cover" priority /><span className="hidden font-bold tracking-tight sm:block">KISZELY MARKETING</span></a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Fő navigáció"><a className="nav-link" href="#weboldal">Weboldal</a><a className="nav-link" href="#top3">Top 3 Google Térkép</a><a className="nav-link" href="#folyamat">Folyamat</a><a className="nav-link" href="#arak">Árak</a><a className="nav-link" href="#kapcsolat">Kapcsolat</a></nav>
        <div className="flex items-center gap-2"><a href="#kapcsolat" className="button-primary hidden sm:inline-flex">Ingyenes konzultáció <ArrowRight data-icon="inline-end" /></a><button className="button-ghost lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}>{open ? <X /> : <Menu />}</button></div>
      </div>
      {open && <nav className="site-shell flex flex-col gap-1 border-t border-border py-4 lg:hidden" aria-label="Mobil navigáció">{[['weboldal','Weboldal'],['top3','Top 3 Google Térkép'],['folyamat','Folyamat'],['arak','Árak'],['kapcsolat','Kapcsolat']].map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 font-semibold hover:bg-muted">{label}</a>)}<a href="#kapcsolat" className="button-primary mt-2">Ingyenes konzultáció</a></nav>}
    </header>

    <main id="top">
      <section className="site-shell grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
        <div className="flex flex-col items-start gap-7"><p className="eyebrow">Weboldal és Google Térkép marketing helyi vállalkozásoknak</p><h1 className="font-serif text-5xl leading-[.98] tracking-[-.045em] text-balance sm:text-6xl lg:text-8xl">Legyen Ön az első, akit megtalálnak a Google-ben.</h1><p className="max-w-xl text-lg leading-relaxed text-muted-foreground">Professzionális weboldalt készítek és segítek elérni a Top 3 Google Térkép-helyezést 90 napon belül, hogy több helyi érdeklődő találjon Önre.</p><div className="flex flex-wrap gap-3"><a href="#kapcsolat" className="button-primary">Kérek ingyenes konzultációt <ArrowRight data-icon="inline-end" /></a><a href="#top3" className="button-outline">Megnézem, hogyan működik</a></div><p className="text-sm font-semibold text-muted-foreground">Egyedi dizájn · Mobilbarát · Mérhető eredmény</p></div>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-xl"><Image src={mapGreenUrl} alt="Google Térkép helyi láthatóság szemléltetése Kecskeméten" width={1632} height={964} className="h-auto w-full rounded-xl" priority /><div className="absolute bottom-7 left-7 rounded-xl bg-background/95 p-4 shadow-lg"><p className="text-xs font-bold uppercase tracking-wider text-primary">Cél</p><p className="font-serif text-2xl">Top 3 helyezés</p><p className="text-sm text-muted-foreground">90 napon belül</p></div></div>
      </section>

      <section className="section muted-section"><div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><Intro label="A probléma" title="A jó munkája nem maradhat láthatatlan." /><div className="flex flex-col">{problems.map(([title,text],i) => <article key={title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-border py-7"><span className="font-serif text-2xl text-primary">0{i+1}</span><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{text}</p></div></article>)}</div></div></section>

      <section id="weboldal" className="section"><div className="site-shell flex flex-col gap-12"><div className="grid gap-8 lg:grid-cols-[1fr_.7fr]"><Intro label="Weboldal készítés" title="Az első benyomásból bizalom lesz." /><p className="self-end leading-relaxed text-muted-foreground">Olyan weboldalt kap, amely érthetően bemutatja a szolgáltatásait, bizalmat épít, és megkönnyíti, hogy az érdeklődőből ügyfél legyen.</p></div><div className="grid gap-px border-y border-border bg-border md:grid-cols-2 lg:grid-cols-3">{webFeatures.map(([title,text],i)=><article key={title} className="flex min-h-64 flex-col justify-between gap-8 bg-background p-7 lg:p-9"><span className="font-serif text-3xl text-primary">0{i+1}</span><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{text}</p></div></article>)}</div></div></section>

      <section id="top3" className="section bg-foreground text-background"><div className="site-shell grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]"><div className="flex flex-col gap-6"><p className="eyebrow text-accent">Google Térkép láthatóság</p><h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">Top 3 helyezés a Google Térképen 90 napon belül.</h2><p className="leading-relaxed text-background/70">Segítek, hogy a szolgáltatási területén a megfelelő emberek találjanak Önre akkor, amikor éppen az Ön szolgáltatását keresik.</p><ul className="flex flex-col gap-3">{['Google Cégprofil optimalizálás','Helyi keresőoptimalizálás','Versenytársak elemzése','Helyezés követése és riportolás'].map(item=><li key={item} className="flex items-center gap-3"><Check className="size-5 text-accent" /><span>{item}</span></li>)}</ul><a href="#kapcsolat" className="button-light self-start">Kérek konzultációt <ArrowRight data-icon="inline-end" /></a></div><div className="rounded-2xl bg-background p-3"><Image src={mapRedUrl} alt="Google Térkép optimalizálás előtti láthatóság szemléltetése" width={1632} height={964} className="w-full rounded-xl" /></div></div></section>

      <section id="folyamat" className="section"><div className="site-shell flex flex-col gap-12"><Intro label="Hogyan dolgozunk?" title="Négy lépésben az ötlettől az eredményig." /><div className="grid gap-px border-y border-border bg-border md:grid-cols-2 lg:grid-cols-4">{steps.map(([num,title,text])=><article key={num} className="flex min-h-72 flex-col justify-between gap-8 bg-background p-7"><span className="font-serif text-4xl text-primary">{num}</span><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{text}</p></div></article>)}</div></div></section>

      <RoiCalculator language="hu" />

      <section id="arak" className="section muted-section"><div className="site-shell flex flex-col gap-12"><div className="flex max-w-3xl flex-col gap-4"><p className="eyebrow">Árazás</p><h2 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">Átlátható csomagok, rejtett költségek nélkül.</h2><p className="text-lg leading-relaxed text-muted-foreground">A végleges ajánlatot a projekt mérete és az egyedi igények alapján, a konzultáció után adom.</p></div><div className="grid gap-5 lg:grid-cols-3"><article className="price-card"><p className="eyebrow">Weboldal</p><h3>Starter</h3><strong>90.000–160.000 Ft</strong><p>Első professzionális weboldal helyi vállalkozásoknak.</p><ul>{['Egyedi webdizájn','Mobilbarát kialakítás','Kapcsolatfelvételi űrlap','Alap SEO beállítás'].map(x=><li key={x}><Check />{x}</li>)}</ul><a href="#kapcsolat" className="button-outline">Ajánlatot kérek <ArrowRight data-icon="inline-end" /></a></article><article className="price-card featured"><p className="eyebrow">Weboldal</p><h3>Premium</h3><strong>170.000 Ft-tól</strong><p>Összetettebb igényekre, több funkcióval.</p><ul>{['Több aloldal','Egyedi funkciók','Foglalási rendszerek','Fejlett SEO alapok'].map(x=><li key={x}><Check />{x}</li>)}</ul><a href="#kapcsolat" className="button-primary">Ajánlatot kérek <ArrowRight data-icon="inline-end" /></a></article><article className="price-card"><p className="eyebrow">Google Térkép</p><h3>Top 3</h3><strong>80.000 Ft / hó</strong><p>Google láthatóság a szolgáltatási területén.</p><ul>{['Google Cégprofil optimalizálás','Google Térkép optimalizálás','Versenytárs elemzés','Helyezés követés'].map(x=><li key={x}><Check />{x}</li>)}</ul><a href="#kapcsolat" className="button-outline">Ajánlatot kérek <ArrowRight data-icon="inline-end" /></a></article></div><p className="max-w-3xl text-sm leading-relaxed text-muted-foreground"><strong>Karbantartás:</strong> 15.000 Ft / hó, opcionális. A weboldal enélkül is működik; későbbi módosításokat külön, előre egyeztetett díjért vállalok.</p></div></section>

      <section className="section"><div className="site-shell grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]"><div className="overflow-hidden rounded-2xl"><Image src={founderUrl} alt="Tamás, a Kiszely Marketing alapítója" width={1120} height={1400} className="w-full object-cover" /></div><div className="flex flex-col gap-5"><p className="eyebrow">Rólam</p><h2 className="font-serif text-4xl leading-tight md:text-6xl">Személyes figyelem. Átlátható munka.</h2><p className="text-lg leading-relaxed text-muted-foreground">Tamás vagyok, a Kiszely Marketing alapítója. Helyi vállalkozásoknak készítek profi, működő weboldalakat és építek erősebb Google-jelenlétet — közérthetően, felesleges körök nélkül.</p><a href="#kapcsolat" className="button-primary self-start">Beszéljünk <ArrowRight data-icon="inline-end" /></a></div></div></section>

      <section className="section muted-section"><div className="site-shell flex max-w-4xl flex-col gap-8"><Intro label="Gyakori kérdések" title="Amit érdemes tudni az indulás előtt." />{faqs.map(([q,a])=><details key={q} className="group border-t border-border py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold">{q}<ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" /></summary><p className="max-w-3xl pt-4 leading-relaxed text-muted-foreground">{a}</p></details>)}</div></section>

      <section id="kapcsolat" className="section"><div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div className="flex flex-col gap-5"><p className="eyebrow">Kapcsolat</p><h2 className="font-serif text-4xl leading-tight md:text-6xl">Tegyük láthatóbbá a vállalkozását.</h2><p className="text-lg leading-relaxed text-muted-foreground">Írja meg röviden, mivel foglalkozik és mire van szüksége. Tamás személyesen válaszol.</p><div className="border-t border-border pt-5 text-sm"><p className="font-bold">E-mail</p><a href="mailto:tokolitamas7@gmail.com" className="text-primary hover:underline">tokolitamas7@gmail.com</a></div></div><ContactForm language="hu" /></div></section>
    </main>

    <footer className="border-t border-border py-10"><div className="site-shell flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p className="font-bold text-foreground">KISZELY MARKETING</p><p>Professzionális weboldal és Google Térkép marketing helyi vállalkozásoknak.</p><p>© {new Date().getFullYear()} Minden jog fenntartva.</p></div></footer>
  </>
}
