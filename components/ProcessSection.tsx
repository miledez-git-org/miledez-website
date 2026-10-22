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
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] text-zinc-900 leading-tight">
          {t.titleLead}{' '}
          <span className="text-zinc-900">{t.titleAccent}</span>
        </h2>
        <p className="mt-4 text-xl text-body max-w-2xl">
          {t.subtitle}
        </p>
      </div>

      {/* Promise card — burgundy */}
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

      {/* Timeline */}
      <div className="relative">
        {/* Continuous vertical line */}
        <div className="absolute left-[28px] md:left-[36px] lg:left-[44px] top-0 bottom-0 w-px bg-zinc-200" />

        {/* Steps */}
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {t.steps.map((step, index) => (
            <div
              key={index}
              className="relative flex gap-6 md:gap-8 lg:gap-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 120}ms`,
              }}
            >
              {/* Number node — sits on the vertical line */}
              <div className="relative z-10 flex-shrink-0 w-14 md:w-[72px] lg:w-[88px]">
                <div className="bg-white">
                  <span className="heading-display text-[2.5rem] md:text-[3rem] lg:text-[4rem] text-zinc-200 leading-none block text-center">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Step content */}
              <div className="pt-1 md:pt-2 lg:pt-3 max-w-xl">
                {/* Horizontal rule */}
                <div className="hidden md:block h-px bg-zinc-200 mb-3 md:mb-4" />

                {/* Title */}
                <h3 className="heading-component text-xl md:text-2xl lg:text-[1.75rem] text-zinc-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-body mt-2">
                  {step.description}
                </p>

                {/* Duration — below description, left-aligned */}
                <span className="inline-flex items-center gap-2 text-base font-medium text-zinc-900 mt-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
