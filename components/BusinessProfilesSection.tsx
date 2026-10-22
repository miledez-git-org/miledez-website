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
        className="mb-12"
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
        <p className="mt-4 text-lg text-body max-w-2xl">
          {t.subtitle}
        </p>
      </div>

      {/* One card per example above */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {t.items.map((profile, index) => {
          const delay = 150 + index * 100

          return (
            <div
              key={index}
              className="bg-white border border-zinc-200 p-6 md:p-8 flex flex-col shadow-sm"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
              }}
            >
              {/* Business info */}
              <h3 className="text-xl font-semibold text-zinc-900">
                {profile.type}
              </h3>
              <p className="text-sm text-zinc-500 mt-1">
                {profile.size}
              </p>
              <p className="text-base text-body mt-3">
                {profile.automation}
              </p>

              {/* Subscription vs Savings comparison */}
              <div className="mt-6 flex items-end gap-3 md:gap-4">
                {/* Subscription — subdued */}
                <div>
                  <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{t.subscription}</p>
                  <span className="block text-xl md:text-2xl font-medium text-zinc-900">
                    {profile.subscription}
                  </span>
                  <p className="text-sm text-zinc-500">{t.perMonth}</p>
                </div>

                {/* Arrow */}
                <div className="text-xl text-zinc-300 pb-2 md:pb-3">→</div>

                {/* Savings — bold burgundy */}
                <div>
                  <p className="text-sm font-medium text-zinc-900 uppercase tracking-wider">{t.savings}</p>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
                    {profile.savings}
                  </span>
                  <p className="text-sm text-zinc-900 font-medium">{t.perMonth}</p>
                </div>
              </div>

              {/* How the estimate was calculated */}
              <p className="mt-auto pt-6 text-sm text-zinc-500 leading-relaxed">
                {profile.assumption}
              </p>
            </div>
          )
        })}
      </div>

      <p className="mt-6 text-sm text-zinc-500 max-w-2xl">
        {t.disclaimer}
      </p>

      {/* CTAs */}
      <div className="mt-12 flex flex-wrap gap-4">
        <button
          onClick={onContactClick}
          className="btn btn-primary btn-lg"
        >
          {t.ctaPrimary}
        </button>
        <a
          href="#como-funciona"
          className="btn btn-outline btn-lg"
        >
          {t.ctaSecondary}
        </a>
      </div>
    </div>
  )
}
