'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { getDict, type Locale } from '@/lib/i18n'
import styles from './HeroPipeline.module.css'

/**
 * Hero visual: three fixed cards (input → mil&dez automation → output) whose content swaps to a new
 * scenario every 4 s, with a pulse travelling the connectors. React port of the `workflow-pipeline-v3`
 * portrait animation (miledez-git-org/animations). Copy lives in `home.pipeline` in lib/i18n.
 */

const PERIOD = 4000
const ON = [200, 1200, 2400] // ms into each window when each card lights up
const GO = [600, 1800] // ms into each window when the pulse leaves card 1 and card 2

type Visual = { logo: string; alt: string } | { icon: 'shield' | 'shuffle' | 'search' }

// One row per scenario: input, automation, output. Logos come from public/software-company-logos.
const VISUALS: [Visual, Visual, Visual][] = [
  [{ logo: 'google-sheets', alt: 'Google Sheets' }, { icon: 'shield' }, { logo: 'excel', alt: 'Excel' }],
  [{ logo: 'gmail', alt: 'Gmail' }, { icon: 'shuffle' }, { logo: 'contaazul', alt: 'Conta Azul' }],
  [{ logo: 'hubspot', alt: 'HubSpot' }, { icon: 'search' }, { logo: 'google-docs', alt: 'Google Docs' }],
]

const ICONS: Record<'shield' | 'shuffle' | 'search', ReactNode> = {
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  shuffle: (
    <>
      <path d="m18 14 4 4-4 4" />
      <path d="m18 2 4 4-4 4" />
      <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" />
      <path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" />
      <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
}

function Tile({ visual }: { visual: Visual }) {
  if ('icon' in visual) {
    return (
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-zinc-900 text-white">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {ICONS[visual.icon]}
        </svg>
      </div>
    )
  }
  return (
    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-zinc-200 bg-zinc-50">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/software-company-logos/${visual.logo}.svg`} alt={visual.alt} className="h-6 w-6" />
    </div>
  )
}

// Smooth vertical connector from the centre of the bottom edge of `a` to the centre of the top edge of `b`.
function connector(a: HTMLElement, b: HTMLElement) {
  const x0 = a.offsetLeft + a.offsetWidth / 2
  const y0 = a.offsetTop + a.offsetHeight
  const x1 = b.offsetLeft + b.offsetWidth / 2
  const y1 = b.offsetTop
  const gap = y1 - y0
  const dy = Math.min(gap * 0.95, Math.max(gap * 0.5, Math.abs(x1 - x0) * 0.5, 24))
  const r = (n: number) => Math.round(n * 10) / 10
  return `M${r(x0)} ${r(y0)} C${r(x0)} ${r(y0 + dy)}, ${r(x1)} ${r(y1 - dy)}, ${r(x1)} ${r(y1)}`
}

export default function HeroPipeline({ locale = 'pt' }: { locale?: Locale }) {
  const t = getDict(locale).home.pipeline
  const [cycle, setCycle] = useState(0)
  const [geo, setGeo] = useState<{ w: number; h: number; paths: string[] }>({ w: 0, h: 0, paths: [] })
  const rootRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const scenario = cycle % t.scenarios.length

  // Connector geometry from layout boxes (offset* ignores the entrance transform), kept in sync on resize.
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const measure = () => {
      const [c1, c2, c3] = cardRefs.current
      if (!c1 || !c2 || !c3) return
      setGeo({ w: root.offsetWidth, h: root.offsetHeight, paths: [connector(c1, c2), connector(c2, c3)] })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(root)
    return () => ro.disconnect()
  }, [])

  // Rotate scenarios while the visual is on screen; stay on the first one when reduced motion is requested.
  useEffect(() => {
    const root = rootRef.current
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let timer: ReturnType<typeof setInterval> | undefined
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !timer) timer = setInterval(() => setCycle((c) => c + 1), PERIOD)
      if (!entry.isIntersecting && timer) { clearInterval(timer); timer = undefined }
    })
    io.observe(root)
    return () => { io.disconnect(); if (timer) clearInterval(timer) }
  }, [])

  const stages = [
    (s: (typeof t.scenarios)[number]) => s.input,
    (s: (typeof t.scenarios)[number]) => s.task,
    (s: (typeof t.scenarios)[number]) => s.output,
  ]

  return (
    <div ref={rootRef} role="img" aria-label={t.summary} className="relative mx-auto w-full max-w-[400px] select-none">
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" viewBox={`0 0 ${geo.w || 1} ${geo.h || 1}`} fill="none">
        {geo.paths.map((d, i) => (
          <path key={`base-${i}`} d={d} className="stroke-zinc-200" strokeWidth="2" strokeLinecap="round" />
        ))}
        {geo.paths.map((d, i) => (
          <path key={`trace-${i}-${cycle}`} d={d} pathLength={1} className={`stroke-zinc-900 ${styles.trace}`} strokeWidth="2" strokeLinecap="round"
            style={{ '--go': `${GO[i]}ms` } as CSSProperties} />
        ))}
      </svg>
      {geo.paths.map((d, i) => (
        <span key={`dot-${i}-${cycle}`} aria-hidden="true" className={`h-2.5 w-2.5 rounded-full bg-zinc-900 ring-4 ring-zinc-900/10 ${styles.dot}`}
          style={{ offsetPath: `path("${d}")`, '--go': `${GO[i]}ms` } as CSSProperties} />
      ))}

      <div aria-hidden="true" className="relative flex flex-col gap-10">
        {t.stages.map((label, i) => (
          <div key={label} ref={(el) => { cardRefs.current[i] = el }}
            className={`relative w-[92%] rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm ${i === 1 ? 'self-end' : 'self-start'} ${styles.rise}`}
            style={{ '--in': `${150 + i * 150}ms` } as CSSProperties}>
            <span key={`lit-${cycle}`} className={`pointer-events-none absolute -inset-px rounded-2xl shadow-md ring-1 ring-zinc-900 ${styles.lit}`}
              style={{ '--on': `${ON[i]}ms` } as CSSProperties} />
            {i === 2 && (
              <span key={`ok-${cycle}`} className={`absolute -right-2.5 -top-2.5 grid h-7 w-7 place-items-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm ${styles.ok}`}>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
            )}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-500">{label}</span>
              <span className="font-mono text-[11px] text-zinc-400">0{i + 1}</span>
            </div>
            {/* Every scenario sits in the same grid cell, so the card keeps the height of the longest one.
                Tile above the text on small screens (the tight portrait layout); beside it from lg up, so the stack fits a laptop hero. */}
            <div className="mt-3 grid">
              {t.scenarios.map((sc, s) => {
                const copy = stages[i](sc)
                const on = s === scenario
                return (
                  <div key={on ? `on-${cycle}` : `off-${s}`} className={`flex flex-col items-start gap-3 [grid-area:1/1] lg:flex-row lg:items-center lg:gap-4 ${on ? styles.layerOn : styles.layerOff}`}>
                    <Tile visual={VISUALS[s][i]} />
                    <div className="flex flex-col gap-1">
                      <p className="text-base font-semibold leading-snug tracking-tight text-zinc-900 sm:text-lg">{copy.title}</p>
                      <p className="text-sm leading-relaxed text-body">{copy.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
