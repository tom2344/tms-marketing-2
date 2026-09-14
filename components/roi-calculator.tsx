'use client'

import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'

type Language = 'hu' | 'en'

const copy = {
  hu: {
    label: 'Kalkulátor',
    title: 'Becsülje meg, mekkora értéket jelenthet egy jobb weboldal és online láthatóság.',
    intro: 'Állítsa be a saját számait, és nézze meg, mekkora havi többletbevételt hozhatnak az extra megkeresések egy profi weboldalból és jobb Google-láthatóságból.',
    visitors: 'Havi online látogatók',
    visitorsHint: 'weboldal + Google profil együtt',
    enquiryRate: 'Érdeklődési arány',
    enquiryRateHint: 'látogatókból megkeresés',
    conversion: 'Érdeklődőből ügyfél arány',
    value: 'Egy ügyfél átlagos értéke',
    improvement: 'Becsült javulás',
    improvementHint: 'profi weboldal + Google Térkép helyezés hatása',
    resultCurrent: 'Jelenlegi becsült havi megkeresés',
    resultImproved: 'Javított becsült havi megkeresés',
    resultExtra: 'Becsült havi többletbevétel',
    note: 'Az eredmény tájékoztató becslés, nem garantált üzleti eredmény. A tényleges számok az ajánlattól, a piactól és a kivitelezéstől függenek.',
    cta: 'Kérek pontos ajánlatot',
    currency: (n: number) => new Intl.NumberFormat('hu-HU').format(Math.round(n)) + ' Ft',
    plain: (n: number) => new Intl.NumberFormat('hu-HU', { maximumFractionDigits: 1 }).format(n),
    per: '/ hó',
  },
  en: {
    label: 'Calculator',
    title: 'Estimate the value a better website and online visibility could bring.',
    intro: 'Adjust your own numbers and see the monthly revenue potential from extra enquiries through a professional website and improved Google visibility.',
    visitors: 'Monthly online visitors',
    visitorsHint: 'website + Google profile combined',
    enquiryRate: 'Enquiry rate',
    enquiryRateHint: 'visitors who contact you',
    conversion: 'Enquiry-to-customer rate',
    value: 'Average customer value',
    improvement: 'Estimated improvement',
    improvementHint: 'impact of pro website + local SEO',
    resultCurrent: 'Current estimated monthly enquiries',
    resultImproved: 'Improved estimated monthly enquiries',
    resultExtra: 'Estimated extra monthly revenue',
    note: 'This result is an informational estimate, not a guaranteed business outcome. Actual figures depend on your offer, market and execution.',
    cta: 'Request an exact quote',
    currency: (n: number) => new Intl.NumberFormat('en-US').format(Math.round(n)) + ' Ft',
    plain: (n: number) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(n),
    per: '/ mo',
  },
} as const

function Slider({
  id, label, hint, min, max, step, value, onChange, display,
}: {
  id: string; label: string; hint?: string; min: number; max: number; step: number; value: number; onChange: (v: number) => void; display: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <label htmlFor={id} className="text-sm font-semibold">{label}</label>
          {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
        </div>
        <span className="font-serif text-xl text-primary">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="calc-slider"
        aria-valuetext={display}
      />
    </div>
  )
}

export function RoiCalculator({ language }: { language: Language }) {
  const t = copy[language]
  const [visitors, setVisitors] = useState(300)
  const [enquiryRate, setEnquiryRate] = useState(3)
  const [conversion, setConversion] = useState(25)
  const [customerValue, setCustomerValue] = useState(40000)
  const [improvement, setImprovement] = useState(40)

  const { currentEnquiries, improvedEnquiries, extraRevenue } = useMemo(() => {
    const current = visitors * (enquiryRate / 100)
    const improved = current * (1 + improvement / 100)
    const extraCustomers = (improved - current) * (conversion / 100)
    return {
      currentEnquiries: current,
      improvedEnquiries: improved,
      extraRevenue: extraCustomers * customerValue,
    }
  }, [visitors, enquiryRate, conversion, customerValue, improvement])

  const results = [
    { label: t.resultCurrent, value: t.plain(currentEnquiries) },
    { label: t.resultImproved, value: t.plain(improvedEnquiries) },
    { label: t.resultExtra, value: t.currency(extraRevenue), highlight: true },
  ]

  return (
    <section className="section muted-section">
      <div className="site-shell flex flex-col gap-12">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="eyebrow">{t.label}</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">{t.title}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{t.intro}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="flex flex-col gap-8 rounded-2xl border border-border bg-background p-7 lg:p-9">
            <Slider id="visitors" label={t.visitors} hint={t.visitorsHint} min={50} max={5000} step={50} value={visitors} onChange={setVisitors} display={t.plain(visitors)} />
            <Slider id="enquiry" label={t.enquiryRate} hint={t.enquiryRateHint} min={0.5} max={10} step={0.5} value={enquiryRate} onChange={setEnquiryRate} display={`${enquiryRate}%`} />
            <Slider id="conversion" label={t.conversion} min={5} max={60} step={1} value={conversion} onChange={setConversion} display={`${conversion}%`} />
            <Slider id="value" label={t.value} min={5000} max={500000} step={5000} value={customerValue} onChange={setCustomerValue} display={t.currency(customerValue)} />
            <Slider id="improvement" label={t.improvement} hint={t.improvementHint} min={10} max={100} step={5} value={improvement} onChange={setImprovement} display={`+${improvement}%`} />
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-foreground p-7 text-background lg:p-9">
            <div className="flex flex-1 flex-col justify-center gap-6">
              {results.map((r) => (
                <div key={r.label} className="flex flex-col gap-1 border-b border-background/15 pb-5 last:border-b-0 last:pb-0">
                  <span className="text-sm text-background/60">{r.label} {t.per}</span>
                  <span className={r.highlight ? 'font-serif text-5xl text-background' : 'font-serif text-4xl text-background/90'}>{r.value}</span>
                </div>
              ))}
            </div>
            <p className="text-xs leading-relaxed text-background/55">{t.note}</p>
            <a href="#kapcsolat" className="button-light w-full">{t.cta}<ArrowRight data-icon="inline-end" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
