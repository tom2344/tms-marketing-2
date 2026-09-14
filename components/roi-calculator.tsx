'use client'

import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'

type Language = 'hu' | 'en'

const businessOptions = ['Ácsmunkák', 'Bádogos munkák', 'Burkolás', 'Duguláselhárítás', 'Favágás', 'Fürdőszoba felújítás', 'Gipszkartonozás', 'Kerítésépítés', 'Kertépítés', 'Klímaszerelés', 'Kocsibeálló építés', 'Kőműves munkák', 'Konyha felújítás', 'Külső festés', 'Lakásfelújítás', 'Napelem telepítés', 'Nyílászárócsere', 'Térkövezés', 'Terasz építés', 'Tetőjavítás', 'Tetőszigetelés', 'Villanyszerelés', 'Vízvezeték szerelés', 'Zárszerviz']
const cityOptions = ['Kisváros', 'Közepes város', 'Nagyváros']
const conversionOptions = [{ label: '5 hívásból 1 munka', value: 5 }, { label: '4 hívásból 1 munka', value: 4 }, { label: '3 hívásból 1 munka', value: 3 }, { label: '2 hívásból 1 munka', value: 2 }]

const copy = {
  hu: {
    label: 'Kalkulátor', title: 'Google Térkép megtérülési kalkulátor', intro: 'Becsüld meg, hogy a jobb Google Térkép-helyezés mennyi hívást és munkát hozhat reálisan.', business: 'Válaszd ki, mivel foglalkozik a vállalkozásod.', city: 'Add meg, mekkora településen dolgozol leggyakrabban.', conversion: 'Írd be, átlagosan hány telefonhívásból lesz valódi megrendelés.', value: 'Add meg, mennyit keresel egy átlagos munkával.', calls: 'Becsült extra hívások / hó', jobs: 'Becsült extra munkák / hó', revenue: 'Becsült extra árbevétel / hó', note: 'Ez becslés, nem garantált eredmény.', cta: 'Kérek pontos ajánlatot', placeholder: 'Válassz', currency: (n: number) => new Intl.NumberFormat('hu-HU').format(Math.round(n)) + ' Ft', number: (n: number) => new Intl.NumberFormat('hu-HU', { maximumFractionDigits: 1 }).format(n),
  },
  en: {
    label: 'Calculator', title: 'Google Maps return calculator', intro: 'Estimate how many calls and jobs better Google Maps visibility could realistically bring.', business: 'Choose what your business does.', city: 'Choose the size of the town where you work most often.', conversion: 'Enter how many calls typically become a real job.', value: 'Enter what you earn from an average job.', calls: 'Estimated extra calls / mo', jobs: 'Estimated extra jobs / mo', revenue: 'Estimated extra revenue / mo', note: 'This is an estimate, not a guaranteed result.', cta: 'Request an exact quote', placeholder: 'Choose', currency: (n: number) => new Intl.NumberFormat('en-US').format(Math.round(n)) + ' Ft', number: (n: number) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(n),
  },
} as const

export function RoiCalculator({ language }: { language: Language }) {
  const t = copy[language]
  const [business, setBusiness] = useState('')
  const [city, setCity] = useState('')
  const [conversion, setConversion] = useState(4)
  const [jobValue, setJobValue] = useState(150000)

  const { extraCalls, extraJobs, extraRevenue } = useMemo(() => {
    const cityCalls = city === 'Nagyváros' ? 24 : city === 'Közepes város' ? 16 : 10
    const businessFactor = business === 'Napelem telepítés' || business === 'Konyha felújítás' ? 1.15 : 1
    const calls = cityCalls * businessFactor
    const jobs = calls / conversion
    return { extraCalls: calls, extraJobs: jobs, extraRevenue: jobs * jobValue }
  }, [business, city, conversion, jobValue])

  const results = [{ label: t.calls, value: t.number(extraCalls) }, { label: t.jobs, value: t.number(extraJobs) }, { label: t.revenue, value: t.currency(extraRevenue), highlight: true }]

  return <section className="section muted-section"><div className="site-shell flex flex-col gap-12"><div className="flex max-w-3xl flex-col gap-4"><p className="eyebrow">{t.label}</p><h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">{t.title}</h2><p className="text-lg leading-relaxed text-muted-foreground">{t.intro}</p></div><div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]"><div className="flex flex-col gap-6 rounded-2xl border border-border bg-background p-7 lg:p-9"><label className="form-field"><span>{t.business}</span><select value={business} onChange={e => setBusiness(e.target.value)}><option value="">{t.placeholder}</option>{businessOptions.map(option => <option key={option}>{option}</option>)}</select></label><label className="form-field"><span>{t.city}</span><select value={city} onChange={e => setCity(e.target.value)}><option value="">{t.placeholder}</option>{cityOptions.map(option => <option key={option}>{option}</option>)}</select></label><label className="form-field"><span>{t.conversion}</span><select value={conversion} onChange={e => setConversion(Number(e.target.value))}>{conversionOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label><label className="form-field"><span>{t.value}</span><div className="relative"><input type="number" min="0" step="10000" value={jobValue} onChange={e => setJobValue(Math.max(0, Number(e.target.value)))} inputMode="numeric" /><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">Ft</span></div></label></div><div className="flex flex-col gap-4 rounded-2xl border border-border bg-foreground p-7 text-background lg:p-9"><div className="flex flex-1 flex-col justify-center gap-6">{results.map(result => <div key={result.label} className="flex flex-col gap-1 border-b border-background/15 pb-5 last:border-b-0 last:pb-0"><span className="text-sm text-background/60">{result.label}</span><span className={result.highlight ? 'font-serif text-5xl text-background' : 'font-serif text-4xl text-background/90'}>{result.value}</span></div>)}</div><p className="text-xs leading-relaxed text-background/55">{t.note}</p><a href="#kapcsolat" className="button-light w-full">{t.cta}<ArrowRight data-icon="inline-end" /></a></div></div></div></section>
}
