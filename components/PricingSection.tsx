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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.tiers.map((tier) => (
          <div
            key={tier.price}
            className="bg-white border border-neutral-200 p-8"
            style={{ boxShadow: '4px 6px 16px rgba(0,0,0,0.10)' }}
          >
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.15em] mb-3">
              {t.from}
            </p>
            <p className="heading-display text-3xl md:text-4xl text-brand-primary">
              {tier.price}<span className="text-lg md:text-xl text-neutral-500 font-normal">{t.perMonth}</span>
            </p>
            <p className="text-base text-neutral-600 mt-3">
              {tier.label}
            </p>
          </div>
        ))}
      </div>

      {/* CTA — left aligned */}
      <div className="mt-12">
        <button
          onClick={onContactClick}
          className="btn btn-primary btn-lg"
        >
          {t.cta}
        </button>
      </div>
    </div>
  )
}
