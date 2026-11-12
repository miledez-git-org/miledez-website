'use client'

import { Fragment } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { getDict, type Locale } from '@/lib/i18n'

export default function ProcessSection({ locale = 'pt' }: { locale?: Locale }) {
  const t = getDict(locale).home.process
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <div ref={ref}>
      {/* Header */}
      <div className="mb-10 md:mb-12">
        <h2 className="heading-display text-[2.25rem] md:text-5xl lg:text-6xl text-zinc-900">
          {t.titleLead}{' '}
          <span className="text-zinc-900">{t.titleAccent}</span>
        </h2>
        <p className="mt-6 text-lg text-body leading-relaxed max-w-2xl">
          {t.subtitle}
        </p>
      </div>

      {/* Promise card */}
      <div
        className="bg-zinc-900 rounded-xl px-8 md:px-12 py-8 md:py-10 mb-14 md:mb-16"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 100ms',
        }}
      >
        <h3 className="heading-display text-2xl md:text-3xl text-white leading-snug font-bold text-center">
          {t.promiseTitle}
        </h3>
        <div className="mt-5 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {t.promiseItems.map((item, i) => (
            <Fragment key={item}>
              {i > 0 && <span className="hidden md:block text-white/30">·</span>}
              <span className="text-base text-white">{item}</span>
            </Fragment>
          ))}
        </div>
      </div>

      {/* Steps: 4-column grid with large pale numbers */}
      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14">
        {t.steps.map((step, index) => (
          <li
            key={step.title}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 120}ms`,
            }}
          >
            <span aria-hidden="true" className="heading-display block text-6xl lg:text-7xl text-zinc-200 tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-6 text-xl font-extrabold tracking-tight text-zinc-900">{step.title}</h3>
            {step.description.map((paragraph) => (
              <p key={paragraph} className="mt-2 text-base text-body leading-relaxed">
                {paragraph}
              </p>
            ))}
            <p className="mt-4 text-sm font-bold text-sky-700">{step.duration}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
