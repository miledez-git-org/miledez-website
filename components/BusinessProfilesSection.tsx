'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { getDict, type Locale } from '@/lib/i18n'

interface BusinessProfilesSectionProps {
  onContactClick?: () => void
  locale?: Locale
}

export default function BusinessProfilesSection({ onContactClick, locale = 'pt' }: BusinessProfilesSectionProps) {
  const t = getDict(locale).home.profiles
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <div ref={ref}>
      {/* Section header */}
      <div
        className="mb-12 md:mb-16"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <h2 className="heading-display text-[2.25rem] md:text-5xl lg:text-6xl text-zinc-900 max-w-4xl">
          {t.title}
        </h2>
      </div>

      {/* One card per example above */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {t.items.map((profile, index) => {
          const delay = 150 + index * 100

          return (
            <div
              key={index}
              className="bg-white border border-zinc-200 p-6 lg:p-8 flex flex-col shadow-sm"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
              }}
            >
              <h3 className="text-xl font-semibold text-zinc-900">{profile.automation}</h3>
              <p className="text-sm text-zinc-500 mt-1">{profile.type}</p>

              {/* Net gain is the headline; the monthly fee stays small underneath */}
              <div className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-sky-800">{t.gainLabel}</p>
                <p className="mt-1 text-sky-700">
                  <span className="text-4xl lg:text-5xl font-bold tracking-tight tabular-nums">{profile.gain}</span>
                  <span className="text-lg font-medium">{t.perMonth}</span>
                </p>
                <p className="mt-3 text-sm text-zinc-500 tabular-nums">
                  {t.subscription} {profile.subscription}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="mt-12">
        <button
          onClick={onContactClick}
          className="btn btn-primary btn-lg"
        >
          {t.ctaPrimary}
        </button>
      </div>
    </div>
  )
}
