'use client'

import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const businessOptions = ['Ácsmunkák', 'Bádogos munkák', 'Burkolás', 'Duguláselhárítás', 'Favágás', 'Fürdőszoba felújítás', 'Gipszkartonozás', 'Kerítésépítés', 'Kertépítés', 'Klímaszerelés', 'Kocsibeálló építés', 'Kőműves munkák', 'Konyha felújítás', 'Külső festés', 'Lakásfelújítás', 'Napelem telepítés', 'Nyílászárócsere', 'Térkövezés', 'Terasz építés', 'Tetőjavítás', 'Tetőszigetelés', 'Villanyszerelés', 'Vízvezeték szerelés', 'Zárszerviz']
const cityOptions = ['Kisváros', 'Közepes város', 'Nagyváros']
const conversionOptions = [{ label: '5 hívásból 1 munka', value: 5 }, { label: '4 hívásból 1 munka', value: 4 }, { label: '3 hívásból 1 munka', value: 3 }, { label: '2 hívásból 1 munka', value: 2 }]

const currency = (value: number) => `${new Intl.NumberFormat('hu-HU').format(Math.round(value))} Ft`
const number = (value: number) => new Intl.NumberFormat('hu-HU', { maximumFractionDigits: 1 }).format(value)

export function RoiCalculator() {
  const [business, setBusiness] = useState('')
  const [city, setCity] = useState('')
  const [extraCalls, setExtraCalls] = useState('')
  const [conversion, setConversion] = useState('')
  const [jobValue, setJobValue] = useState('')

  const result = useMemo(() => {
    const calls = Number(extraCalls)
    const callsPerJob = Number(conversion)
    const averageJobValue = Number(jobValue)
    if (!business || !city || calls <= 0 || callsPerJob <= 0 || averageJobValue <= 0) return null

    const jobs = calls / callsPerJob
    return { calls, jobs, revenue: jobs * averageJobValue }
  }, [business, city, conversion, extraCalls, jobValue])

  return (
    <section className="section muted-section">
      <div className="site-shell flex flex-col gap-12">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="eyebrow">Kalkulátor</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">Google Térkép megtérülési kalkulátor</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Becsülje meg a lehetséges havi eredményt a saját adataival. A kalkulátor nem feltételez hívásszámot vagy iparági szorzót.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-background p-7 lg:p-9">
            <label className="form-field"><span>Válassza ki, mivel foglalkozik a vállalkozása.</span><select value={business} onChange={event => setBusiness(event.target.value)}><option value="">Válasszon</option>{businessOptions.map(option => <option key={option}>{option}</option>)}</select></label>
            <label className="form-field"><span>Adja meg, mekkora településen dolgozik leggyakrabban.</span><select value={city} onChange={event => setCity(event.target.value)}><option value="">Válasszon</option>{cityOptions.map(option => <option key={option}>{option}</option>)}</select></label>
            <label className="form-field"><span>Hány extra hívással számol havonta?</span><input type="number" min="1" step="1" value={extraCalls} onChange={event => setExtraCalls(event.target.value)} inputMode="numeric" placeholder="Például: 12" /></label>
            <label className="form-field"><span>Átlagosan hány telefonhívásból lesz valódi megrendelés?</span><select value={conversion} onChange={event => setConversion(event.target.value)}><option value="">Válasszon</option>{conversionOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
            <label className="form-field"><span>Mennyi az átlagos árbevétel egy munkából?</span><div className="relative"><input type="number" min="1" step="10000" value={jobValue} onChange={event => setJobValue(event.target.value)} inputMode="numeric" placeholder="Például: 150000" /><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">Ft</span></div></label>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-foreground p-7 text-background lg:p-9" aria-live="polite">
            {result ? (
              <div className="flex flex-1 flex-col justify-center gap-6">
                <Result label="Az Ön által megadott extra hívások / hó" value={number(result.calls)} />
                <Result label="Becsült extra munkák / hó" value={number(result.jobs)} />
                <Result label="Becsült extra árbevétel / hó" value={currency(result.revenue)} highlight />
              </div>
            ) : (
              <div className="flex flex-1 flex-col justify-center gap-3">
                <p className="font-serif text-3xl">Töltse ki az összes mezőt az eredményhez.</p>
                <p className="text-sm leading-relaxed text-background/65">Nem jelenítünk meg előre gyártott becslést. A számítás kizárólag az Ön által megadott havi extra hívásokból, konverzióból és átlagos munkadíjból készül.</p>
              </div>
            )}
            <p className="text-xs leading-relaxed text-background/55">Képlet: extra munkák = extra hívások ÷ hívás/munkaszám; extra árbevétel = extra munkák × átlagos árbevétel. Ez becslés, nem garantált eredmény.</p>
            <a href="/hu/#kapcsolat" className="button-light w-full">Kérek pontos ajánlatot<ArrowRight data-icon="inline-end" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Result({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return <div className="flex flex-col gap-1 border-b border-background/15 pb-5 last:border-b-0 last:pb-0"><span className="text-sm text-background/60">{label}</span><span className={highlight ? 'font-serif text-5xl text-background' : 'font-serif text-4xl text-background/90'}>{value}</span></div>
}
