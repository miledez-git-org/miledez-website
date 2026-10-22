'use client'

import { getDict, type Locale } from '@/lib/i18n'

interface PricingSectionProps {
  onContactClick: () => void
  locale?: Locale
}

export default function PricingSection({ onContactClick, locale = 'pt' }: PricingSectionProps) {
  const t = getDict(locale).home.pricing

  return (
    <div>
      {/* Header — left aligned */}
      <div className="mb-12 md:mb-14 max-w-2xl">
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-zinc-900 leading-tight">
          {t.titleLead}{' '}
          <span className="text-zinc-900">{t.titleAccent}</span>
        </h2>
        <p className="mt-4 text-lg text-body">
          {t.subtitle}
        </p>
      </div>

      {/* Price tiers — 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {t.tiers.map((tier) => (
          <div
            key={tier.price}
            className="bg-white border border-zinc-200 p-8 flex flex-col shadow-sm"
          >
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-[0.15em] mb-3">
              {t.from}
            </p>
            <p className="heading-display text-3xl md:text-4xl text-zinc-900">
              {tier.price}<span className="text-lg md:text-xl text-zinc-500 font-normal">{t.perMonth}</span>
            </p>
            <p className="text-lg font-medium text-zinc-900 mt-3">
              {tier.label}
            </p>
            {/* Ties the tier back to an example shown earlier on the page */}
            <p className="text-base text-body mt-2">
              {tier.example}
            </p>
          </div>
        ))}
      </div>

      {/* What every tier includes */}
      <div className="mt-8 border-t border-zinc-200 pt-6 max-w-4xl">
        <p className="text-base font-semibold text-zinc-900">{t.includedTitle}</p>
        <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
          {t.included.map((item) => (
            <li key={item} className="flex items-center gap-2 text-base text-body">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-zinc-900" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA — left aligned */}
      <div className="mt-12">
        <button
          onClick={onContactClick}
          className="btn btn-primary btn-lg"
        >
          {t.cta}
        </button>
        <p className="mt-4 text-sm text-zinc-500">{t.ctaNote}</p>
      </div>
    </div>
  )
}
