'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { getDict, type Locale } from '@/lib/i18n'
import styles from './DecisionFlow.module.css'

/**
 * "Como funciona" visual: one ERP order goes through an automatic check and branches. Approved orders produce a
 * PDF confirmation and a CRM update; divergent ones send the manager an alert. 9 s cycle that restarts while on
 * screen. React port of the `workflow-branch` animation (miledez-git-org/animations). Copy lives in `home.decision`.
 */

const CYCLE = 9000

type CardId = 'trigger' | 'check' | 'ok' | 'warn' | 'pdf' | 'crm' | 'alert'
type Tone = 'ink' | 'ok' | 'warn'
type Link = { from: CardId; to: CardId; go: number; dur: number; tone: Tone }

const TRACE: Record<Tone, string> = { ink: 'stroke-zinc-900', ok: 'stroke-emerald-600', warn: 'stroke-amber-500' }
const DOT: Record<Tone, string> = {
  ink: 'bg-zinc-900 ring-zinc-900/10',
  ok: 'bg-emerald-600 ring-emerald-600/15',
  warn: 'bg-amber-500 ring-amber-500/20',
}
const RING: Record<Tone, string> = { ink: 'ring-zinc-900', ok: 'ring-emerald-600', warn: 'ring-amber-500' }

// Layout box of `el` relative to `root`, from offset* so the entrance transform does not skew it.
function box(el: HTMLElement, root: HTMLElement) {
  let x = 0
  let y = 0
  let node: HTMLElement | null = el
  while (node && node !== root) {
    x += node.offsetLeft
    y += node.offsetTop
    node = node.offsetParent as HTMLElement | null
  }
  return { x, y, w: el.offsetWidth, h: el.offsetHeight }
}

// Smooth vertical connector from the centre of the bottom edge of `a` to the centre of the top edge of `b`,
// plus its midpoint (cubic Bézier at t = 0.5) for the branch labels.
function connector(a: ReturnType<typeof box>, b: ReturnType<typeof box>) {
  const x0 = a.x + a.w / 2
  const y0 = a.y + a.h
  const x1 = b.x + b.w / 2
  const y1 = b.y
  const gap = y1 - y0
  const dy = Math.min(gap * 0.95, Math.max(gap * 0.5, Math.abs(x1 - x0) * 0.5, 24))
  const r = (n: number) => Math.round(n * 10) / 10
  const d = `M${r(x0)} ${r(y0)} C${r(x0)} ${r(y0 + dy)}, ${r(x1)} ${r(y1 - dy)}, ${r(x1)} ${r(y1)}`
  const mid = { x: (x0 + 3 * x0 + 3 * x1 + x1) / 8, y: (y0 + 3 * (y0 + dy) + 3 * (y1 - dy) + y1) / 8 }
  return { d, mid }
}

const ICONS = {
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  alert: (
    <>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </>
  ),
}

function Icon({ children, className }: { children: ReactNode; className: string }) {
  return (
    <div className={`grid shrink-0 place-items-center rounded-xl ${className}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </div>
  )
}

function Logo({ name, alt }: { name: string; alt: string }) {
  return (
    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-zinc-200 bg-zinc-50 sm:h-10 sm:w-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/software-company-logos/${name}.svg`} alt={alt} className="h-5 w-5" />
    </div>
  )
}

export default function DecisionFlow({ locale = 'pt' }: { locale?: Locale }) {
  const t = getDict(locale).home.decision
  const [cycle, setCycle] = useState(0)
  const [geo, setGeo] = useState<{ w: number; h: number; links: (Link & { d: string })[]; pills: { x: number; y: number }[] }>({
    w: 0, h: 0, links: [], pills: [],
  })
  const rootRef = useRef<HTMLDivElement>(null)
  const refs = useRef<Partial<Record<CardId, HTMLDivElement | null>>>({})
  const setRef = (id: CardId) => (el: HTMLDivElement | null) => { refs.current[id] = el }

  // Connector geometry from layout boxes, kept in sync on resize. On narrow screens the CRM card sits under the
  // PDF card, so its connector starts at the PDF card instead of the "tudo certo" card.
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const measure = () => {
      const b = {} as Record<CardId, ReturnType<typeof box>>
      for (const id of ['trigger', 'check', 'ok', 'warn', 'pdf', 'crm', 'alert'] as CardId[]) {
        const el = refs.current[id]
        if (!el) return
        b[id] = box(el, root)
      }
      const stacked = b.crm.y > b.pdf.y + b.pdf.h
      const plan: Link[] = [
        { from: 'trigger', to: 'check', go: 1400, dur: 600, tone: 'ink' },
        { from: 'check', to: 'ok', go: 3500, dur: 600, tone: 'ok' },
        { from: 'check', to: 'warn', go: 3500, dur: 600, tone: 'warn' },
        { from: 'ok', to: 'pdf', go: 4700, dur: 550, tone: 'ok' },
        stacked
          ? { from: 'pdf', to: 'crm', go: 5250, dur: 450, tone: 'ok' }
          : { from: 'ok', to: 'crm', go: 4900, dur: 550, tone: 'ok' },
        { from: 'warn', to: 'alert', go: 4700, dur: 550, tone: 'warn' },
      ]
      const built = plan.map((l) => ({ ...l, ...connector(b[l.from], b[l.to]) }))
      setGeo({ w: root.offsetWidth, h: root.offsetHeight, links: built, pills: [built[1].mid, built[2].mid] })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(root)
    return () => ro.disconnect()
  }, [])

  // Replay while the visual is on screen; reduced motion keeps the finished state. The CSS timeline keeps running
  // off screen and ends faded out, so on re-entry start a fresh cycle at once.
  useEffect(() => {
    const root = rootRef.current
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let timer: ReturnType<typeof setInterval> | undefined
    let left = false
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !timer) {
        if (left) setCycle((c) => c + 1)
        timer = setInterval(() => setCycle((c) => c + 1), CYCLE)
      }
      if (!entry.isIntersecting && timer) { clearInterval(timer); timer = undefined; left = true }
    }, { threshold: 0.25 })
    io.observe(root)
    return () => { io.disconnect(); if (timer) clearInterval(timer) }
  }, [])

  // One card: lit overlay (ring + lift) at `on` ms, optional check badge at `badge` ms.
  const card = (id: CardId, tone: Tone, on: number, enter: number, body: ReactNode, opts: { badge?: number; className?: string } = {}) => (
    <div ref={setRef(id)}
      className={`relative rounded-2xl border border-zinc-200 bg-white shadow-sm ${styles.rise} ${opts.className ?? ''}`}
      style={{ '--in': `${enter}ms` } as CSSProperties}>
      <span key={`lit-${cycle}`} className={`pointer-events-none absolute -inset-px rounded-2xl shadow-md ring-1 ${RING[tone]} ${styles.lit}`}
        style={{ '--on': `${on}ms` } as CSSProperties} />
      {opts.badge !== undefined && (
        <span key={`ok-${cycle}`} className={`absolute -right-2.5 -top-2.5 grid h-6 w-6 place-items-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm ${styles.ok}`}
          style={{ '--on': `${opts.badge}ms` } as CSSProperties}>
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{ICONS.check}</svg>
        </span>
      )}
      {body}
    </div>
  )

  const line = (title: string, text: string) => (
    <div className="flex min-w-0 flex-col gap-0.5">
      <p className="text-sm font-semibold leading-snug tracking-tight text-zinc-900 sm:text-base">{title}</p>
      <p className="text-xs leading-relaxed text-body sm:text-sm">{text}</p>
    </div>
  )

  return (
    <div ref={rootRef} role="img" aria-label={t.summary} className="relative mx-auto w-full max-w-3xl select-none">
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" viewBox={`0 0 ${geo.w || 1} ${geo.h || 1}`} fill="none">
        {geo.links.map((l, i) => (
          <path key={`base-${i}`} d={l.d} className="stroke-zinc-200" strokeWidth="2" strokeLinecap="round" />
        ))}
        {geo.links.map((l, i) => (
          <path key={`trace-${i}-${cycle}`} d={l.d} pathLength={1} className={`${TRACE[l.tone]} ${styles.trace}`} strokeWidth="2" strokeLinecap="round"
            style={{ '--go': `${l.go}ms`, '--dur': `${l.dur}ms` } as CSSProperties} />
        ))}
      </svg>
      {geo.links.map((l, i) => (
        <span key={`dot-${i}-${cycle}`} aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ring-4 ${DOT[l.tone]} ${styles.dot}`}
          style={{ offsetPath: `path("${l.d}")`, '--go': `${l.go}ms`, '--dur': `${l.dur}ms` } as CSSProperties} />
      ))}
      {geo.pills.map((p, i) => (
        <span key={`pill-${i}-${cycle}`} aria-hidden="true"
          className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-white px-2.5 py-0.5 text-[11px] font-semibold tracking-wide shadow-sm ${i === 0 ? 'border-emerald-200 text-emerald-700' : 'border-amber-200 text-amber-700'} ${styles.pill}`}
          style={{ left: p.x, top: p.y, '--in': '3900ms' } as CSSProperties}>
          {i === 0 ? t.ok.label : t.warn.label}
        </span>
      ))}

      <div aria-hidden="true" className="relative flex flex-col items-center gap-12">
        {card('trigger', 'ink', 1000, 150,
          <div className="flex items-center gap-3 p-3.5 sm:p-4"><Logo name="bling" alt="Bling" />{line(t.trigger.title, t.trigger.text)}</div>,
          { className: 'w-full max-w-sm' })}

        {card('check', 'ink', 2100, 250,
          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-3 sm:gap-4">
              <Icon className="h-11 w-11 bg-zinc-900 text-white sm:h-12 sm:w-12">{ICONS.shield}</Icon>
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-500">{t.check.kicker}</span>
                <p className="text-base font-semibold leading-snug tracking-tight text-zinc-900 sm:text-lg">{t.check.title}</p>
                <p className="text-xs leading-relaxed text-body sm:text-sm">{t.check.text}</p>
              </div>
            </div>
            <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-zinc-100">
              <i key={`scan-${cycle}`} className={`block h-full w-full bg-zinc-900 ${styles.scan}`} />
            </div>
          </div>,
          { className: 'w-full max-w-md' })}

        <div className="grid w-full grid-cols-2 gap-x-3 sm:gap-x-6 md:gap-x-10">
          <div className="flex flex-col gap-12">
            {card('ok', 'ok', 4100, 350,
              <div className="flex flex-col items-start gap-2.5 p-3.5 sm:p-4 md:flex-row md:items-center md:gap-3">
                <Icon className="h-9 w-9 bg-emerald-50 text-emerald-700 sm:h-10 sm:w-10">{ICONS.check}</Icon>
                {line(t.ok.title, t.ok.text)}
              </div>)}
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-3">
              {card('pdf', 'ink', 5300, 450,
                <div className="flex flex-col items-start gap-2.5 p-3.5 sm:p-4"><Logo name="google-docs" alt="Google Docs" />{line(t.outputs.pdf.title, t.outputs.pdf.text)}</div>,
                { badge: 5600 })}
              {card('crm', 'ink', 5700, 550,
                <div className="flex flex-col items-start gap-2.5 p-3.5 sm:p-4"><Logo name="hubspot" alt="HubSpot" />{line(t.outputs.crm.title, t.outputs.crm.text)}</div>,
                { badge: 6000 })}
            </div>
          </div>
          <div className="flex flex-col gap-12">
            {card('warn', 'warn', 4100, 400,
              <div className="flex flex-col items-start gap-2.5 p-3.5 sm:p-4 md:flex-row md:items-center md:gap-3">
                <Icon className="h-9 w-9 bg-amber-50 text-amber-700 sm:h-10 sm:w-10">{ICONS.alert}</Icon>
                {line(t.warn.title, t.warn.text)}
              </div>)}
            {card('alert', 'ink', 5300, 500,
              <div className="flex flex-col items-start gap-2.5 p-3.5 sm:p-4"><Logo name="gmail" alt="Gmail" />{line(t.outputs.alert.title, t.outputs.alert.text)}</div>,
              { badge: 5600, className: 'md:mx-auto md:w-1/2 md:min-w-[200px]' })}
          </div>
        </div>
      </div>
    </div>
  )
}
