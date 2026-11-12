'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingSection from '@/components/PricingSection'
import ProcessSection from '@/components/ProcessSection'
import HeroPipeline from '@/components/HeroPipeline'
import WorkflowExplainerSection from '@/components/WorkflowExplainerSection'
import IncludedSection from '@/components/IncludedSection'
import BusinessProfilesSection from '@/components/BusinessProfilesSection'
import FAQSection from '@/components/FAQSection'
import ScrollProgress from '@/components/ScrollProgress'
import ContactModal from '@/components/ContactModal'
import { getDict, type Locale } from '@/lib/i18n'

export default function HomePage({ locale = 'pt' }: { locale?: Locale }) {
  const t = getDict(locale).home
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  // Staggered reveal observer for elements with .fade-in-up class
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.5 } // Updated to 50% as per design spec
    )

    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Global interactive elements */}
      <ScrollProgress />

      <Header locale={locale} onContactClick={() => setIsContactModalOpen(true)} />

      <main id="main-content">
      {/* Hero. Below lg the copy fills the first screen (100svh) and the pipeline opens the second;
          from lg the two sit side by side in one screen-high row. */}
      <section className="bg-white relative lg:min-h-screen lg:flex lg:items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-10 items-center">

            {/* Left column - Hero content */}
            <div className="flex flex-col min-h-[100svh] pt-28 pb-10 lg:min-h-0 lg:p-0 lg:justify-center">
              <div className="flex flex-1 flex-col justify-center lg:flex-none">
                {/* Headline */}
                <h1 className="heading-display text-[2.5rem] sm:text-5xl lg:text-6xl text-zinc-900 leading-[1.1]">
                  {t.hero.line1}<br />
                  {t.hero.line2}<br />
                  <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-zinc-600">{t.hero.accent}</span>
                </h1>

                {/* Subheadline */}
                <p className="mt-6 text-lg md:text-xl text-body font-normal leading-relaxed max-w-xl">
                  {t.hero.subtitle}
                </p>
              </div>

              {/* CTAs: full width and stacked at the foot of the first screen on mobile; from sm the
                  secondary link sits next to the primary and the note goes under both */}
              <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-[auto_1fr] items-center sm:justify-items-start gap-x-4 gap-y-3">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn btn-primary btn-xl w-full sm:w-auto sm:col-start-1 sm:row-start-1"
                >
                  {t.hero.cta}
                </button>
                <a
                  href="#exemplos"
                  className="btn btn-outline btn-xl w-full sm:w-auto sm:col-start-2 sm:row-start-1"
                >
                  {t.hero.secondary}
                </a>
                <p className="text-sm text-body max-w-md sm:col-span-2 sm:row-start-2">
                  {t.hero.ctaNote}
                </p>
              </div>
            </div>

            {/* Right column - rotating automation pipeline */}
            <div className="flex flex-col items-center justify-center gap-6 pb-20 lg:pb-0">
              <HeroPipeline locale={locale} />
            </div>

          </div>
        </div>

      </section>

      {/* Story order: example → what's included → value → process → price → doubts → close */}

      {/* Workflow Explainer - How automations work */}
      <WorkflowExplainerSection locale={locale} />

      {/* Everything included in the monthly fee */}
      <IncludedSection locale={locale} />

      {/* Estimated value - one card per example */}
      <section id="quanto-vale" className="py-24 md:py-32 bg-zinc-100 border-y border-zinc-200">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <BusinessProfilesSection locale={locale} onContactClick={() => setIsContactModalOpen(true)} />
        </div>
      </section>

      {/* How It Works - Process */}
      <section id="como-funciona" className="py-24 md:py-32 bg-white">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <ProcessSection locale={locale} />
        </div>
      </section>

      {/* Pricing */}
      <section id="precos" className="py-24 md:py-32 bg-zinc-100 border-y border-zinc-200">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <PricingSection locale={locale} onContactClick={() => setIsContactModalOpen(true)} />
        </div>
      </section>

      {/* FAQ - objection handling */}
      <FAQSection locale={locale} />

      {/* CTA */}
      <section id="contato" className="py-24 md:py-32 bg-zinc-100 border-y border-zinc-200">
        <div className="px-6 md:px-10 max-w-3xl mx-auto text-center">
          <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-zinc-900 leading-tight">
            {t.cta.titleLine1}<br />
            <span className="text-zinc-900">{t.cta.titleLine2}</span>
          </h2>
          <p className="mt-4 text-lg text-body max-w-xl mx-auto">
            {t.cta.text}
          </p>
          {/* Founder: the person who answers */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Image
              src="/team/simon-larsen.jpg"
              alt={t.cta.founderAlt}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <p className="text-base text-body text-left max-w-xs">
              {t.cta.founder}
            </p>
          </div>
          <div className="mt-10 md:mt-12">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="btn btn-primary btn-xl"
            >
              {t.cta.button}
            </button>
            <p className="mt-4 text-sm text-zinc-500">{t.cta.note}</p>
          </div>
        </div>
      </section>

      </main>

      <Footer locale={locale} />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        locale={locale}
      />
    </div>
  )
}
