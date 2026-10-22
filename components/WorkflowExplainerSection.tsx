'use client'

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { getDict, type Locale } from '@/lib/i18n'

// Logos per workflow step; copy lives in lib/i18n
// Order matches the pain points: repetitive task → scattered info → missed deadline
const workflowIcons: string[][] = [
  ['google-calendar', 'whatsapp', 'google-sheets'],
  ['whatsapp', 'google-sheets', 'slack', 'gmail', 'excel'],
  ['pipedrive', 'gmail', 'docusign', 'google-drive'],
]

const DownArrow = () => (
  <div className="flex justify-center py-2">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-zinc-400">
      <path d="M10 4L10 16M10 16L5 11M10 16L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
)

export default function WorkflowExplainerSection({ locale = 'pt' }: { locale?: Locale }) {
  const t = getDict(locale).home.explainer
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="exemplos" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        {/* Section header */}
        <div
          className="max-w-2xl"
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-zinc-900 leading-tight">
            {t.titleLead}{' '}
            <span className="text-zinc-900">{t.titleAccent}</span>
          </h2>
          <p className="mt-4 text-lg text-body leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Workflow cards — 3 vertical columns */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {t.workflows.map((workflow, wIndex) => {
            const delay = 200 + wIndex * 120

            return (
              <div
                key={wIndex}
                className="bg-white border border-zinc-200 p-6 shadow-sm"
                style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
                }}
              >
                {/* Card header */}
                <span className="text-sm uppercase tracking-[0.15em] font-semibold text-zinc-500">
                  {workflow.industry}
                </span>
                <h3 className="text-xl font-semibold text-zinc-900 mt-1">
                  {workflow.summary}
                </h3>
                <p className="text-sm text-zinc-900 font-medium mt-1">
                  {t.solvesLabel} {workflow.solves}
                </p>

                {/* Before: the manual version of this process */}
                <p className="mt-5 text-base text-body leading-relaxed">
                  <span className="font-semibold text-zinc-900">{t.beforeLabel}</span> {workflow.before}
                </p>

                {/* After: vertical steps */}
                <p className="mt-6 text-sm uppercase tracking-[0.15em] font-semibold text-zinc-500">
                  {t.afterLabel}
                </p>
                <div className="mt-3">
                  {workflow.steps.map((step, sIndex) => (
                    <div key={sIndex}>
                      <div className="flex items-start gap-3">
                        <Image src={`/software-company-logos/${workflowIcons[wIndex][sIndex]}.svg`} alt="" width={24} height={24} className="flex-shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="text-base font-medium text-zinc-900 leading-snug">
                            {step.title}
                          </p>
                          <p className="text-sm text-zinc-500 mt-0.5">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {sIndex < workflow.steps.length - 1 && <DownArrow />}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
