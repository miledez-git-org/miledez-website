'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { getDict, type Locale } from '@/lib/i18n'
import styles from './WorkflowExplainerSection.module.css'

/**
 * Example workflows as a horizontal card rail: CSS scroll snap moves it, the first card lines up with
 * the section title, and the script only steps the arrows and keeps the counter in sync.
 * Copy lives in `home.explainer`.
 */

// Logo per step, in the order of `home.explainer.workflows[].steps`. Files in public/software-company-logos.
const LOGOS: string[][] = [
  ['google-calendar', 'whatsapp', 'google-sheets'],
  ['hubspot', 'gmail', 'docusign'],
  ['whatsapp', 'google-sheets', 'gmail'],
  ['gmail', 'google-drive', 'contaazul'],
  ['hubspot', 'whatsapp', 'google-calendar'],
  ['google-sheets', 'google-docs', 'gmail'],
]

// Scroll position that brings each card to the gutter, capped at the end of the rail
// (the last cards are already fully in view there and share that position).
function snapPoints(scroller: HTMLElement, track: HTMLElement) {
  const cards = Array.from(track.children as HTMLCollectionOf<HTMLElement>)
  const max = scroller.scrollWidth - scroller.clientWidth
  return cards.map((card) => Math.min(max, card.offsetLeft - cards[0].offsetLeft))
}

// Ties go to the later card, so the counter reaches the last one at the end of the rail.
function nearest(scroller: HTMLElement, track: HTMLElement) {
  const points = snapPoints(scroller, track)
  const left = scroller.scrollLeft
  return points.reduce((best, p, i) => (Math.abs(p - left) <= Math.abs(points[best] - left) ? i : best), 0)
}

const ARROW_BUTTON =
  'grid h-12 w-12 place-items-center rounded-full bg-zinc-900 text-white shadow-sm transition-[background-color,box-shadow,color] duration-200 hover:bg-zinc-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900 aria-disabled:cursor-not-allowed aria-disabled:bg-zinc-200 aria-disabled:text-zinc-400 aria-disabled:shadow-none'

export default function WorkflowExplainerSection({ locale = 'pt' }: { locale?: Locale }) {
  const t = getDict(locale).home.explainer
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })
  const scrollerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLUListElement>(null)
  const [index, setIndex] = useState(0)
  const count = t.workflows.length
  const pad = (n: number) => String(n).padStart(2, '0')

  const goTo = (i: number) => {
    const scroller = scrollerRef.current
    const track = trackRef.current
    if (!scroller || !track) return
    const points = snapPoints(scroller, track)
    scroller.scrollTo({ left: points[Math.min(points.length - 1, Math.max(0, i))] })
  }
  const step = (delta: number) => {
    const scroller = scrollerRef.current
    const track = trackRef.current
    if (scroller && track) goTo(nearest(scroller, track) + delta)
  }

  useEffect(() => {
    const scroller = scrollerRef.current
    const track = trackRef.current
    if (!scroller || !track) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setIndex(nearest(scroller, track)))
    }
    scroller.addEventListener('scroll', onScroll, { passive: true })
    return () => { scroller.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  const reveal = (delay: number, y: number): CSSProperties => ({
    transform: isVisible ? 'translateY(0)' : `translateY(${y}px)`,
    opacity: isVisible ? 1 : 0,
    transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  })

  return (
    <section id="exemplos" className="bg-zinc-100 border-y border-zinc-200 py-24 md:py-32">
      <div ref={ref} role="region" aria-roledescription="carousel" aria-label={t.railLabel}>
        <div className="max-w-7xl mx-auto px-6 md:px-10" style={reveal(0, 20)}>
          <div className="max-w-2xl">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-zinc-900 leading-tight text-balance">
              {t.titleLead} {t.titleAccent}
            </h2>
            <p className="mt-4 text-lg text-body leading-relaxed">{t.subtitle}</p>
          </div>
        </div>

        {/* Arrow keys scroll natively; Home/End would scroll the block axis, so map them. */}
        <div ref={scrollerRef} role="region" tabIndex={0} aria-label={`${t.railLabel}, ${t.railHint}`}
          onKeyDown={(e) => {
            if (e.target !== e.currentTarget || (e.key !== 'Home' && e.key !== 'End')) return
            e.preventDefault()
            goTo(e.key === 'Home' ? 0 : count - 1)
          }}
          className={`${styles.scroller} mt-10 relative snap-x snap-mandatory scroll-smooth motion-reduce:scroll-auto overflow-x-auto overscroll-x-contain py-4 outline-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-zinc-900`}
          style={reveal(200, 16)}>
          <ul ref={trackRef} className={`${styles.track} relative flex w-max gap-6`}>
            {t.workflows.map((workflow, i) => (
              <li key={workflow.title}
                className="flex flex-none flex-col w-[min(26rem,82vw)] snap-start last:snap-end rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-zinc-900 text-balance">{workflow.title}</h3>
                  <span className="pt-1 font-mono text-xs text-zinc-400 tabular-nums" aria-hidden="true">{pad(i + 1)}</span>
                </div>
                {/* Pinned to the bottom so the steps line up across cards when a title wraps. */}
                <ol className="mt-auto flex flex-col gap-6 border-t border-zinc-100 pt-6">
                  {workflow.steps.map((stepCopy, j) => (
                    <li key={stepCopy.title} className="relative flex items-start gap-4">
                      {j < workflow.steps.length - 1 && (
                        <span aria-hidden="true" className="absolute left-6 top-12 -bottom-6 w-0.5 -translate-x-1/2 bg-zinc-200" />
                      )}
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-zinc-200 bg-zinc-50">
                        <Image src={`/software-company-logos/${LOGOS[i][j]}.svg`} alt="" width={24} height={24} draggable={false} />
                      </div>
                      <div className="flex min-h-12 flex-col justify-center gap-0.5">
                        <p className="text-base font-semibold leading-snug tracking-tight text-zinc-900">{stepCopy.title}</p>
                        <p className="text-sm leading-relaxed text-body">{stepCopy.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-7xl mx-auto mt-6 flex items-center gap-3 px-6 md:px-10" style={reveal(300, 12)}>
          <button type="button" aria-label={t.prevLabel} aria-disabled={index === 0} onClick={() => step(-1)} className={ARROW_BUTTON}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button type="button" aria-label={t.nextLabel} aria-disabled={index === count - 1} onClick={() => step(1)} className={ARROW_BUTTON}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
          </button>
          <span className="ml-2 text-sm text-zinc-500 tabular-nums" aria-live="polite">
            <span className="sr-only">{t.cardLabel} </span><span className="font-medium text-zinc-900">{pad(index + 1)}</span><span aria-hidden="true"> / </span>
            <span className="sr-only"> {t.ofLabel} </span>{pad(count)}
          </span>
        </div>
      </div>
    </section>
  )
}
