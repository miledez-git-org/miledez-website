'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import { getDict, type Locale } from '@/lib/i18n'

interface PricingSectionProps {
  onContactClick: () => void
  locale?: Locale
}

// Logo chain per example, in the order of `home.pricing.tiers[].examples`. Files in public/software-company-logos.
// The chains grow with the tier: two systems, then three, then four.
const EXAMPLE_LOGOS: string[][][] = [
  [['google-calendar', 'whatsapp'], ['hubspot', 'gmail']],
  [['whatsapp', 'google-sheets', 'gmail'], ['gmail', 'google-drive', 'contaazul']],
  [['whatsapp', 'google-sheets', 'gmail', 'contaazul'], ['hubspot', 'google-docs', 'docusign', 'google-drive']],
]

const LOGO_NAMES: Record<string, string> = {
  'google-calendar': 'Google Calendar',
  whatsapp: 'WhatsApp',
  hubspot: 'HubSpot',
  gmail: 'Gmail',
  'google-sheets': 'Google Sheets',
  'google-drive': 'Google Drive',
  'google-docs': 'Google Docs',
  contaazul: 'Conta Azul',
  docusign: 'DocuSign',
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
        {t.tiers.map((tier, i) => (
          <div
            key={tier.price}
            className="bg-white border border-zinc-200 p-6 lg:p-8 flex flex-col shadow-sm"
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

            {/* Two example workflows, shown as the chain of systems they connect */}
            <div className="mt-auto pt-8">
              <p className="border-t border-zinc-200 pt-6 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                {t.examplesLabel}
              </p>
              <ul className="mt-4 flex flex-col gap-5">
                {tier.examples.map((example, j) => (
                  <li key={example}>
                    <p className="text-sm font-medium text-zinc-900">{example}</p>
                    <div className="mt-2 flex items-center gap-1.5">
                      {EXAMPLE_LOGOS[i][j].map((logo, k) => (
                        <Fragment key={logo}>
                          {k > 0 && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-zinc-400" aria-hidden="true">
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          )}
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-zinc-200 bg-zinc-50">
                            <Image src={`/software-company-logos/${logo}.svg`} alt={LOGO_NAMES[logo]} width={20} height={20} draggable={false} />
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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
