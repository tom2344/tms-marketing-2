'use client'

import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const businessOptions = ['Ácsmunkák', 'Bádogos munkák', 'Burkolás', 'Duguláselhárítás', 'Favágás', 'Fürdőszoba felújítás', 'Gipszkartonozás', 'Kerítésépítés', 'Kertépítés', 'Klímaszerelés', 'Kocsibeálló építés', 'Kőműves munkák', 'Konyha felújítás', 'Külső festés', 'Lakásfelújítás', 'Napelem telepítés', 'Nyílászárócsere', 'Térkövezés', 'Terasz építés', 'Tetőjavítás', 'Tetőszigetelés', 'Villanyszerelés', 'Vízvezeték szerelés', 'Zárszerviz']
const cityOptions = ['Kisváros', 'Közepes város', 'Nagyváros']
const conversionOptions = [{ label: '5 hívásból 1 munka', value: 5 }, { label: '4 hívásból 1 munka', value: 4 }, { label: '3 hívásból 1 munka', value: 3 }, { label: '2 hívásból 1 munka', value: 2 }]
const currency = (value: number) => `${new Intl.NumberFormat('hu-HU').format(Math.round(value))} Ft`
const number = (value: number) => new Intl.NumberFormat('hu-HU', { maximumFractionDigits: 1 }).format(value)
const validPercentage = (value: string) => value !== '' && Number(value) > 0 && Number(value) <= 100

export function RoiCalculator() {
  const [business, setBusiness] = useState('')
  const [city, setCity] = useState('')
  const [mode, setMode] = useState<'searches' | 'calls'>('searches')
  const [searches, setSearches] = useState('')
  const [profileRate, setProfileRate] = useState('')
  const [callRate, setCallRate] = useState('')
  const [extraCalls, setExtraCalls] = useState('')
  const [conversion, setConversion] = useState('')
  const [jobValue, setJobValue] = useState('')

  const result = useMemo(() => {
    const callsPerJob = Number(conversion)
    const averageJobValue = Number(jobValue)
    if (!Number.isFinite(callsPerJob) || !Number.isFinite(averageJobValue) || callsPerJob <= 0 || averageJobValue <= 0) return null
    let calls: number
    if (mode === 'searches') {
      if (!searches || !Number.isFinite(Number(searches)) || Number(searches) <= 0 || !validPercentage(profileRate) || !validPercentage(callRate)) return null
      calls = Number(searches) * Number(profileRate) / 100 * Number(callRate) / 100
    } else {
      if (!extraCalls || !Number.isFinite(Number(extraCalls)) || Number(extraCalls) <= 0) return null
      calls = Number(extraCalls)
    }
    const jobs = calls / callsPerJob
    return { calls, jobs, revenue: jobs * averageJobValue }
  }, [callRate, conversion, extraCalls, jobValue, mode, profileRate, searches])

  return (
    <section id="kalkulator" className="section muted-section scroll-mt-20" aria-labelledby="kalkulator-cim">
      <div className="site-shell flex flex-col gap-10">
        <div className="flex max-w-4xl flex-col gap-4">
          <p className="eyebrow">Google Térkép kalkulátor</p>
          <h2 id="kalkulator-cim" className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">Mennyi hívást és munkát hozhat a Top 3?</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Nézzen meg egy havi forgatókönyvet a saját számaival. A helyezés önmagában nem árulja el, hányan fognak telefonálni, ezért minden számítási feltételt Ön ad meg.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-background p-5 sm:p-7 lg:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-field"><span>Mivel foglalkozik?</span><select value={business} onChange={event => setBusiness(event.target.value)}><option value="">Válasszon</option>{businessOptions.map(option => <option key={option}>{option}</option>)}</select></label>
              <label className="form-field"><span>Hol dolgozik leggyakrabban?</span><select value={city} onChange={event => setCity(event.target.value)}><option value="">Válasszon</option>{cityOptions.map(option => <option key={option}>{option}</option>)}</select></label>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">A szakma és a település mérete segít elhelyezni a forgatókönyvet, de nem módosítja automatikusan a számokat.</p>
            <fieldset className="flex flex-col gap-3 border-t border-border pt-6">
              <legend className="font-semibold">Miből induljunk ki?</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 text-sm font-semibold ${mode === 'searches' ? 'border-primary bg-primary/5' : 'border-border'}`}><input type="radio" name="calculator-mode" checked={mode === 'searches'} onChange={() => setMode('searches')} /> Havi keresésekből</label>
                <label className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 text-sm font-semibold ${mode === 'calls' ? 'border-primary bg-primary/5' : 'border-border'}`}><input type="radio" name="calculator-mode" checked={mode === 'calls'} onChange={() => setMode('calls')} /> Várt plusz hívásokból</label>
              </div>
            </fieldset>
            {mode === 'searches' ? (
              <div className="flex flex-col gap-6">
                <label className="form-field"><span>Hány releváns keresés történik havonta a célzott kifejezésre?</span><input type="number" min="1" step="1" value={searches} onChange={event => setSearches(event.target.value)} inputMode="numeric" /><small>Ha nem tudja, ezt a célzott keresés és terület felmérésével lehet megbecsülni.</small></label>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="form-field"><span>A keresők hány %-a nyitná meg a Cégprofilt?</span><input type="number" min="0.1" max="100" step="0.1" value={profileRate} onChange={event => setProfileRate(event.target.value)} inputMode="decimal" /><small>Az Ön forgatókönyve, nem iparági átlag.</small></label>
                  <label className="form-field"><span>A profil megtekintői közül hány % kattintana a hívásra?</span><input type="number" min="0.1" max="100" step="0.1" value={callRate} onChange={event => setCallRate(event.target.value)} inputMode="decimal" /><small>Az Ön forgatókönyve, nem iparági átlag.</small></label>
                </div>
              </div>
            ) : (
              <label className="form-field"><span>Hány plusz hívással számol havonta?</span><input type="number" min="1" step="1" value={extraCalls} onChange={event => setExtraCalls(event.target.value)} inputMode="numeric" /><small>Ez az Ön becslése, nem a kalkulátor által előre jelzett hívásszám.</small></label>
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-field"><span>Hány hívásból lesz átlagosan egy munka?</span><select value={conversion} onChange={event => setConversion(event.target.value)}><option value="">Válasszon</option>{conversionOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
              <label className="form-field"><span>Mennyi az átlagos árbevétel egy munkából?</span><div className="relative"><input type="number" min="1" step="1000" value={jobValue} onChange={event => setJobValue(event.target.value)} inputMode="numeric" className="pr-12" /><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">Ft</span></div></label>
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-2xl border border-border bg-foreground p-5 text-background sm:p-7 lg:p-9" aria-live="polite">
            {result ? (
              <div className="flex flex-1 flex-col justify-center gap-6">
                <Result label={mode === 'searches' ? 'Forgatókönyv szerinti híváskattintások / hó' : 'Az Ön által megadott plusz hívások / hó'} value={number(result.calls)} />
                <Result label="Lehetséges munkák / hó" value={number(result.jobs)} />
                <Result label="Lehetséges árbevétel / hó" value={currency(result.revenue)} highlight />
              </div>
            ) : (
              <div className="flex flex-1 flex-col justify-center gap-3">
                <p className="font-serif text-3xl">Adja meg a számokat, és itt látja az eredményt.</p>
                <p className="text-sm leading-relaxed text-background/70">Nincs előre kitöltött eredmény vagy rejtett iparági szorzó.</p>
              </div>
            )}
            <p className="text-xs leading-relaxed text-background/70">{mode === 'searches' ? 'Képlet: havi keresések × profilmegnyitási arány × híváskattintási arány = híváskattintások. ' : ''}Munkák = hívások ÷ hívás/munkaszám. Árbevétel = munkák × átlagos árbevétel. A híváskattintás nem feltétlenül jelent tényleges telefonbeszélgetést. Az árbevétel nem nyereség, és a szolgáltatás díját sem vonja le. Ez forgatókönyv, nem ígéret.</p>
            <a href="/hu/#kapcsolat" className="button-light w-full">Beszéljük át az Ön piacát<ArrowRight data-icon="inline-end" /></a>
          </div>
        </div>
        <p className="max-w-4xl text-sm leading-relaxed text-muted-foreground">Pontosabb kiindulópontot a saját <a href="https://support.google.com/business/answer/9918094?hl=hu" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">Google Cégprofil teljesítményadatai</a> adhatnak. Ott a hívásmutató a hívás gombjára kattintásokat számolja, nem az összes beérkező telefonhívást.</p>
      </div>
    </section>
  )
}

function Result({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return <div className="flex flex-col gap-1 border-b border-background/20 pb-5 last:border-b-0 last:pb-0"><span className="text-sm text-background/75">{label}</span><span className={highlight ? 'font-serif text-4xl text-background sm:text-5xl' : 'font-serif text-4xl text-background/90'}>{value}</span></div>
}
