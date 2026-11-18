'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import DecisionFlow from '@/components/DecisionFlow'
import { getDict, localePath, type Locale } from '@/lib/i18n'

/**
 * "Funcionando em seu negócio": one automation explained step by step around the DecisionFlow animation.
 * Copy lives in `atWork`; every service claim here repeats one already made on the home page (FAQ, pricing).
 */

// Systems shown in "Nos sistemas que você já usa". Files in public/software-company-logos.
const SYSTEMS: { file: string; name: string }[] = [
  { file: 'whatsapp', name: 'WhatsApp' },
  { file: 'gmail', name: 'Gmail' },
  { file: 'outlook', name: 'Outlook' },
  { file: 'google-sheets', name: 'Google Sheets' },
  { file: 'excel', name: 'Excel' },
  { file: 'google-calendar', name: 'Google Calendar' },
  { file: 'google-drive', name: 'Google Drive' },
  { file: 'bling', name: 'Bling' },
  { file: 'contaazul', name: 'Conta Azul' },
  { file: 'hubspot', name: 'HubSpot' },
]

// Hairline between two white sections, inside the content width
function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10" aria-hidden="true">
      <div className="h-px bg-zinc-200" />
    </div>
  )
}

export default function AtWorkPage({ locale = 'pt' }: { locale?: Locale }) {
  const t = getDict(locale).atWork
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} onContactClick={() => setIsContactModalOpen(true)} />

      <main id="main-content">
        {/* Hero with the example flow */}
        <section className="bg-white pt-32 pb-24 md:pt-40 md:pb-36">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-3xl">
              <h1 className="heading-display text-[2.5rem] sm:text-5xl lg:text-6xl text-zinc-900 leading-[1.1]">
                {t.hero.title}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-body leading-relaxed max-w-2xl">{t.hero.subtitle}</p>
            </div>
            <div className="mt-16 md:mt-20">
              <DecisionFlow locale={locale} />
            </div>
          </div>
        </section>

        {/* The five parts, one card each, on the band */}
        <section className="bg-zinc-100 border-y border-zinc-200 py-24 md:py-36">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-3xl">
              <h2 className="heading-display text-[2.25rem] md:text-5xl text-zinc-900">{t.parts.title}</h2>
              <p className="mt-6 text-lg text-body leading-relaxed max-w-2xl">{t.parts.subtitle}</p>
            </div>
            <ol className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {t.parts.items.map((part, i) => (
                <li key={part.label} className="flex flex-col gap-3 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
                    <span className="tabular-nums text-sky-600">{i + 1}</span> · {part.label}
                  </span>
                  <h3 className="text-lg font-extrabold tracking-tight text-zinc-900">{part.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{part.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Who decides what */}
        <section className="bg-white py-24 md:py-36">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="heading-display text-[2.25rem] md:text-5xl text-zinc-900">{t.roles.title}</h2>
            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
              {t.roles.items.map((role) => (
                <div key={role.title}>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900">{role.title}</h3>
                  <p className="mt-3 text-body leading-relaxed">{role.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* When something fails */}
        <section className="bg-white py-24 md:py-36">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div>
              <h2 className="heading-display text-[2.25rem] md:text-5xl text-zinc-900">{t.failure.title}</h2>
              <p className="mt-6 text-lg text-body leading-relaxed">{t.failure.text}</p>
            </div>
            <ul className="flex flex-col gap-4">
              {t.failure.items.map((item) => (
                <li key={item} className="flex items-center gap-4 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="font-semibold text-zinc-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Systems */}
        <section className="bg-zinc-100 border-y border-zinc-200 py-24 md:py-36">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-3xl">
              <h2 className="heading-display text-[2.25rem] md:text-5xl text-zinc-900">{t.systems.title}</h2>
              <p className="mt-6 text-lg text-body leading-relaxed max-w-2xl">{t.systems.text}</p>
            </div>
            <ul className="mt-12 md:mt-16 flex flex-wrap gap-3">
              {SYSTEMS.map((system) => (
                <li key={system.file} title={system.name}
                  className="grid h-16 w-16 place-items-center rounded-lg border border-zinc-200 bg-white shadow-sm">
                  <Image src={`/software-company-logos/${system.file}.svg`} alt={system.name} width={32} height={32} draggable={false} className="h-8 w-8" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-24 md:py-36">
          <div className="px-6 md:px-10 max-w-4xl mx-auto text-center">
            <h2 className="heading-display text-[2.25rem] md:text-5xl lg:text-6xl text-zinc-900">{t.cta.title}</h2>
            <p className="mt-4 text-lg text-body max-w-xl mx-auto">{t.cta.text}</p>
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsContactModalOpen(true)} className="btn btn-primary btn-xl w-full sm:w-auto">
                {t.cta.button}
              </button>
              <Link href={localePath(locale, 'home', 'precos')} className="btn btn-outline-teal btn-xl w-full sm:w-auto">
                {t.cta.secondary}
              </Link>
            </div>
            <p className="mt-4 text-sm text-zinc-500">{t.cta.note}</p>
          </div>
        </section>
      </main>

      <Footer locale={locale} />

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} locale={locale} />
    </div>
  )
}
