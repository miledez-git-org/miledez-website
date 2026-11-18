'use client'

import { Fragment, type CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { getDict, localePath, type Locale } from '@/lib/i18n'

/**
 * Example workflows as a card grid on the zinc-100 band: each card has the name, the chain of systems
 * (logo tiles joined by arrows) and the numbered steps. Copy lives in `home.explainer`.
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

export default function WorkflowExplainerSection({ locale = 'pt' }: { locale?: Locale }) {
  const t = getDict(locale).home.explainer
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 })

  const reveal = (delay: number, y: number): CSSProperties => ({
    transform: isVisible ? 'translateY(0)' : `translateY(${y}px)`,
    opacity: isVisible ? 1 : 0,
    transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  })

  return (
    <section id="exemplos" className="bg-zinc-100 border-y border-zinc-200 py-24 md:py-36">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl" style={reveal(0, 20)}>
          <h2 className="heading-display text-[2.25rem] md:text-5xl lg:text-6xl text-zinc-900">
            {t.titleLead} {t.titleAccent}
          </h2>
          <p className="mt-6 text-lg text-body leading-relaxed max-w-2xl">{t.subtitle}</p>
        </div>

        <ul className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.workflows.map((workflow, i) => (
            <li key={workflow.title}
              className="flex flex-col gap-5 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
              style={reveal(150 + i * 80, 16)}>
              <h3 className="text-lg font-extrabold tracking-tight text-zinc-900">{workflow.title}</h3>

              {/* Systems chain */}
              <div className="flex items-center gap-2" aria-hidden="true">
                {LOGOS[i].map((logo, j) => (
                  <Fragment key={logo}>
                    {j > 0 && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-zinc-400">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    )}
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-zinc-50">
                      <Image src={`/software-company-logos/${logo}.svg`} alt="" width={24} height={24} draggable={false} className="h-6 w-6" />
                    </div>
                  </Fragment>
                ))}
              </div>

              <ol className="flex flex-col gap-2 text-sm">
                {workflow.steps.map((stepCopy, j) => (
                  <li key={stepCopy.title} className="flex gap-3">
                    <span className="w-4 shrink-0 tabular-nums text-zinc-400">{j + 1}</span>
                    <span>
                      <span className="font-semibold text-zinc-900">{stepCopy.title}</span>{' '}
                      <span className="text-zinc-500">· {stepCopy.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ul>

        <div className="mt-10" style={reveal(150 + t.workflows.length * 80, 16)}>
          <Link href={localePath(locale, 'atWork')} className="inline-flex items-center gap-2 font-semibold text-sky-700 hover:text-sky-800">
            {t.atWorkLink}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
