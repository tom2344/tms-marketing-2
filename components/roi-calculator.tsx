'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

// Illustrative monthly search scenarios, not measured keyword volumes.
const searchScenarios = {
  'Ácsmunkák': [60, 150, 350],
  'Bádogos munkák': [50, 120, 300],
  'Burkolás': [120, 260, 600],
  'Duguláselhárítás': [140, 320, 750],
  'Favágás': [60, 140, 330],
  'Fürdőszoba felújítás': [90, 200, 480],
  'Gipszkartonozás': [80, 180, 420],
  'Kerítésépítés': [55, 130, 300],
  'Kertépítés': [90, 200, 450],
  'Klímaszerelés': [120, 300, 750],
  'Kocsibeálló építés': [40, 100, 240],
  'Kőműves munkák': [100, 230, 550],
  'Konyha felújítás': [80, 180, 420],
  'Külső festés': [70, 160, 380],
  'Lakásfelújítás': [150, 330, 750],
  'Napelem telepítés': [50, 120, 280],
  'Nyílászárócsere': [90, 200, 480],
  'Térkövezés': [85, 190, 450],
  'Terasz építés': [45, 110, 260],
  'Tetőjavítás': [90, 200, 500],
  'Tetőszigetelés': [55, 130, 320],
  'Villanyszerelés': [150, 350, 800],
  'Vízvezeték szerelés': [180, 420, 900],
  'Zárszerviz': [110, 260, 600],
} as const

type Business = keyof typeof searchScenarios
type CitySize = 0 | 1 | 2
type Calculation = {
  searches: number
  clicks: number
  calls: number
  jobs: number
  monthlyRevenue: number
  annualRevenue: number
  business: Business
  city: CitySize
}

const cityOptions = ['Kisváros', 'Közepes város', 'Nagyváros'] as const
const conversionOptions = [
  { label: '5 hívásból 1 munka', value: 5 },
  { label: '4 hívásból 1 munka', value: 4 },
  { label: '3 hívásból 1 munka', value: 3 },
  { label: '2 hívásból 1 munka', value: 2 },
] as const
const integer = (value: number) => new Intl.NumberFormat('hu-HU').format(value)
const decimal = (value: number) => new Intl.NumberFormat('hu-HU', { maximumFractionDigits: 1 }).format(value)
const currency = (value: number) => `${integer(Math.round(value))} Ft`

export function RoiCalculator() {
  const [business, setBusiness] = useState<Business>('Ácsmunkák')
  const [city, setCity] = useState<CitySize>(0)
  const [callsPerJob, setCallsPerJob] = useState(4)
  const [jobValue, setJobValue] = useState('')
  const [result, setResult] = useState<Calculation | null>(null)
  const [error, setError] = useState('')

  function calculate() {
    const value = Number(jobValue)
    if (!jobValue || !Number.isFinite(value) || value <= 0) {
      setResult(null)
      setError('Adja meg, mennyi az átlagos árbevétel egy munkából.')
      return
    }

    const searches = searchScenarios[business][city]
    const clicks = Math.round(searches * 0.11)
    const calls = Math.round(clicks * 0.35)
    const jobs = calls / callsPerJob
    const monthlyRevenue = jobs * value
    setResult({ searches, clicks, calls, jobs, monthlyRevenue, annualRevenue: monthlyRevenue * 12, business, city })
    setError('')
  }

  function invalidate() {
    setResult(null)
    setError('')
  }

  return (
    <section id="kalkulator" className="section muted-section scroll-mt-20" aria-labelledby="kalkulator-cim">
      <div className="site-shell flex flex-col gap-10">
        <div className="max-w-4xl">
          <p className="eyebrow">Google Térkép kalkulátor</p>
          <h2 id="kalkulator-cim" className="mt-4 font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">Becsülje meg, mennyi hívást és munkát hozhat a Google Top 3.</h2>
        </div>
        <div className="grid items-start gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-background p-5 sm:p-7 lg:p-9">
            <label className="form-field">
              <span>Válassza ki, mivel foglalkozik a vállalkozása.</span>
              <select value={business} onChange={event => { setBusiness(event.target.value as Business); invalidate() }}>
                {Object.keys(searchScenarios).map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
            <label className="form-field">
              <span>Adja meg, mekkora településen dolgozik leggyakrabban.</span>
              <select value={city} onChange={event => { setCity(Number(event.target.value) as CitySize); invalidate() }}>
                {cityOptions.map((option, index) => <option key={option} value={index}>{option}</option>)}
              </select>
            </label>
            <label className="form-field">
              <span>Átlagosan hány telefonhívásból lesz valódi megrendelés?</span>
              <select value={callsPerJob} onChange={event => { setCallsPerJob(Number(event.target.value)); invalidate() }}>
                {conversionOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
            </label>
            <label className="form-field">
              <span>Mennyi az átlagos árbevétel egy munkából?</span>
              <div className="relative">
                <input type="number" min="1" step="1000" value={jobValue} onChange={event => { setJobValue(event.target.value); invalidate() }} inputMode="numeric" placeholder="Adja meg forintban" aria-invalid={Boolean(error)} />
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">Ft</span>
              </div>
            </label>
            {error && <p role="alert" className="text-sm font-semibold text-destructive">{error}</p>}
            <button type="button" onClick={calculate} className="button-primary w-full">Számolás <ArrowRight data-icon="inline-end" /></button>
          </div>
          <div className="rounded-2xl border border-border bg-background p-5 sm:p-7 lg:p-9" aria-live="polite">
            <h3 className="font-serif text-3xl">Eredmények</h3>
            {result ? (
              <div className="mt-6 flex flex-col gap-5">
                <p className="text-sm text-muted-foreground">{result.business} · {cityOptions[result.city]} · Illusztratív forgatókönyv, nem előrejelzés.</p>
                <Result label="Példaként feltételezett havi keresések" value={integer(result.searches)} />
                <Result label="Becsült kattintások / hó" value={integer(result.clicks)} />
                <Result label="Becsült híváskattintások / hó" value={integer(result.calls)} />
                <Result label="Számolt munkák / hó" value={decimal(result.jobs)} />
                <div className="rounded-xl bg-primary/10 p-5 text-primary">
                  <p className="text-sm font-semibold">Havi lehetséges árbevétel</p>
                  <p className="mt-1 font-serif text-3xl sm:text-4xl">{currency(result.monthlyRevenue)}</p>
                </div>
                <div className="rounded-xl bg-primary/10 p-5 text-primary">
                  <p className="text-sm font-semibold">Éves forgatókönyv, ha minden hónap ilyen</p>
                  <p className="mt-1 font-serif text-3xl sm:text-4xl">{currency(result.annualRevenue)}</p>
                </div>
              </div>
            ) : (
              <p className="mt-6 text-muted-foreground">Adja meg az átlagos munkadíjat, majd kattintson a Számolás gombra.</p>
            )}
          </div>
        </div>
        <div className="max-w-4xl rounded-xl border border-border bg-background p-5 text-sm leading-relaxed text-muted-foreground sm:p-6">
          <p className="font-bold text-foreground">Hogyan számolunk?</p>
          <p className="mt-2">A szakmához és a település méretéhez rendelt havi keresésszám csak illusztratív feltevés, nem mért helyi adat. A példában a keresések 11%-ából kattintás, a kattintások 35%-ából híváskattintás lesz. Ezek nem igazolt, minden vállalkozásra érvényes iparági átlagok. A híváskattintás nem feltétlenül jelent tényleges hívást.</p>
          <p className="mt-2">A munkák számát a megadott hívás/megrendelés arányból számoljuk. A havi összeg várható árbevétel, nem nyereség; az éves szám ugyanilyen hónapokat feltételez. Egyik sem garantált vagy ténylegesen kiesett bevétel. Pontosabb becsléshez a saját <a href="https://support.google.com/business/answer/9918094?hl=hu" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">Google Cégprofil teljesítményadatait</a> és a célzott keresések valódi adatait kell használni.</p>
        </div>
      </div>
    </section>
  )
}

function Result({ label, value }: { label: string; value: string }) {
  return <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4 text-sm last:border-b-0 last:pb-0"><span className="text-muted-foreground">{label}</span><strong className="text-lg tabular-nums text-foreground">{value}</strong></div>
}
