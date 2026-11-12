'use client'

import { Fragment, type CSSProperties } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { getDict, type Locale } from '@/lib/i18n'

/**
 * Example workflows as stacked rows: name on the left, the chain of systems on the right
 * (outlined logo boxes joined by arrows; a vertical list below sm). Copy lives in `home.explainer`.
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
  const pad = (n: number) => String(n).padStart(2, '0')

  const reveal = (delay: number, y: number): CSSProperties => ({
    transform: isVisible ? 'translateY(0)' : `translateY(${y}px)`,
    opacity: isVisible ? 1 : 0,
    transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  })

  return (
    <section id="exemplos" className="bg-white py-24 md:py-36">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl" style={reveal(0, 20)}>
          <h2 className="heading-display text-[2.25rem] md:text-5xl lg:text-6xl text-zinc-900">
            {t.titleLead} {t.titleAccent}
          </h2>
          <p className="mt-6 text-lg text-body leading-relaxed max-w-2xl">{t.subtitle}</p>
        </div>

        <ul className="mt-14 md:mt-20 divide-y divide-zinc-200 border-t border-zinc-200">
          {t.workflows.map((workflow, i) => (
            <li key={workflow.title}
              className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-6 lg:gap-16 items-center py-10 md:py-12"
              style={reveal(150 + i * 80, 16)}>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-sky-700">
                  {t.cardLabel} {pad(i + 1)}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-zinc-900">{workflow.title}</h3>
              </div>

              {/* Systems chain: horizontal from sm, a vertical list on phones */}
              <ol className="flex flex-col sm:flex-row sm:items-start">
                {workflow.steps.map((stepCopy, j) => (
                  <Fragment key={stepCopy.title}>
                    {j > 0 && (
                      <li aria-hidden="true" className="flex h-6 w-14 justify-center sm:h-20 sm:w-auto sm:flex-1 sm:items-center sm:px-2">
                        <span className="w-[1.5px] bg-sky-600 sm:h-[1.5px] sm:w-auto sm:flex-1" />
                        <svg className="-ml-3 hidden h-3 w-3 shrink-0 text-sky-600 sm:block" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 1l5 5-5 5" />
                        </svg>
                      </li>
                    )}
                    <li className="flex items-center gap-4 sm:w-36 sm:flex-col sm:gap-4 sm:text-center">
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg border-[1.5px] border-sky-600 bg-white sm:h-20 sm:w-20">
                        <Image src={`/software-company-logos/${LOGOS[i][j]}.svg`} alt="" width={28} height={28} draggable={false} className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-sm font-bold text-zinc-900">{stepCopy.title}</p>
                        <p className="text-sm text-zinc-500">{stepCopy.text}</p>
                      </div>
                    </li>
                  </Fragment>
                ))}
              </ol>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
