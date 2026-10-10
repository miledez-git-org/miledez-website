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
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          {t.titleLead}{' '}
          <span className="text-brand-primary">{t.titleAccent}</span>
        </h2>
        <p className="mt-4 text-lg text-neutral-600">
          {t.subtitle}
        </p>
      </div>

      {/* Price tiers — 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {t.tiers.map((tier) => (
          <div
            key={tier.price}
            className="bg-white border border-neutral-200 p-8 flex flex-col"
            style={{ boxShadow: '4px 6px 16px rgba(0,0,0,0.10)' }}
          >
            <p className="text-sm font-semibold text-neutral-500 uppercase tracking-[0.15em] mb-3">
              {t.from}
            </p>
            <p className="heading-display text-3xl md:text-4xl text-brand-primary">
              {tier.price}<span className="text-lg md:text-xl text-neutral-500 font-normal">{t.perMonth}</span>
            </p>
            <p className="text-lg font-medium text-brand-black mt-3">
              {tier.label}
            </p>
            {/* Ties the tier back to an example shown earlier on the page */}
            <p className="text-base text-neutral-600 mt-2">
              {tier.example}
            </p>
          </div>
        ))}
      </div>

      {/* What every tier includes */}
      <div className="mt-8 border-t border-neutral-200 pt-6 max-w-4xl">
        <p className="text-base font-semibold text-brand-black">{t.includedTitle}</p>
        <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
          {t.included.map((item) => (
            <li key={item} className="flex items-center gap-2 text-base text-neutral-600">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-brand-primary" aria-hidden="true">
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
        <p className="mt-4 text-sm text-neutral-500">{t.ctaNote}</p>
      </div>
    </div>
  )
}
