'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'
import ContactModal from '@/components/ContactModal'
import { getDict, localePath, type Locale, type RouteKey } from '@/lib/i18n'

const industryRoutes = ['health', 'services', 'agribusiness'] as const satisfies readonly RouteKey[]

export default function IndustriasContent({ locale = 'pt' }: { locale?: Locale }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const t = getDict(locale).industries

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} onContactClick={() => setIsContactModalOpen(true)} />

      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
          <div className="max-w-2xl mb-14">
            <h1 className="heading-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-zinc-900 leading-tight">
              {t.titleLead}{' '}
              <span className="text-zinc-900">{t.titleAccent}</span>
            </h1>
            <p className="mt-4 text-lg text-body leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Industry cards on the tinted band (design system rule 13) */}
        <section className="bg-zinc-100 border-y border-zinc-200 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industryRoutes.map((key) => (
                <Link
                  key={key}
                  href={localePath(locale, key)}
                  className="group bg-white border border-zinc-200 p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                    {t.cards[key].title}
                  </h2>
                  <p className="mt-3 text-base text-body leading-relaxed">
                    {t.cards[key].description}
                  </p>
                  <span className="inline-block mt-6 text-sm font-medium text-sky-700 group-hover:text-sky-800">
                    {t.cardCta}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        locale={locale}
      />
    </div>
  )
}
