'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ValueProposition from '@/components/ValueProposition'
import LogoGrid from '@/components/LogoGrid'
import PricingSection from '@/components/PricingSection'
import ProcessSection from '@/components/ProcessSection'
import HeroWorkflowStatic from '@/components/HeroWorkflowStatic'
import WorkflowAnimationSection from '@/components/WorkflowAnimationSection'
import ScrollProgress from '@/components/ScrollProgress'
import ContactModal from '@/components/ContactModal'

export default function Home() {
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

      <Header />

      <main id="main-content">
      {/* Hero */}
      <section className="min-h-screen bg-white flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-20 items-center">

            {/* Left column - Hero content */}
            <div className="flex flex-col justify-center">
              {/* Headline */}
              <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-brand-black leading-[1.1]">
                Automação inteligente<br />
                <span className="text-brand-primary">que trabalha por você</span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-xl">
                Transforme processos manuais em fluxos automatizados. Conectamos seus sistemas existentes e entregamos resultados em dias — não meses.
              </p>

              {/* CTAs */}
              <div className="mt-10 md:mt-12 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn btn-primary btn-xl"
                >
                  Agendar demonstração
                </button>
                <a
                  href="#valor"
                  className="btn btn-outline btn-lg"
                >
                  Ver casos de uso
                </a>
              </div>
            </div>

            {/* Right column - Workflow Demo (mobile simplified) */}
            <div className="flex lg:hidden justify-center">
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-1.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b2020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                  </div>
                  <span className="text-[11px] font-medium text-brand-black">Gatilho</span>
                </div>
                <svg width="20" height="10" viewBox="0 0 20 10" className="text-brand-primary flex-shrink-0"><path d="M2 5h14M13 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-1.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b2020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
                  </div>
                  <span className="text-[11px] font-medium text-brand-black">Automação</span>
                </div>
                <svg width="20" height="10" viewBox="0 0 20 10" className="text-brand-primary flex-shrink-0"><path d="M2 5h14M13 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-1.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b2020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                  </div>
                  <span className="text-[11px] font-medium text-brand-black">Resultado</span>
                </div>
              </div>
            </div>

            {/* Right column - Workflow Demo (desktop) */}
            <div className="hidden lg:flex items-center justify-center">
              <HeroWorkflowStatic />
            </div>

          </div>
        </div>

      </section>

      {/* Section divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      {/* Value Proposition */}
      <section id="valor" className="py-16 md:py-24 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <ValueProposition onContactClick={() => setIsContactModalOpen(true)} />
        </div>
      </section>

      {/* Section divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      {/* Workflow Animation - How it works */}
      <WorkflowAnimationSection />


      {/* Section divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      {/* Integrations */}
      <section id="integracoes" className="py-16 md:py-24 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <LogoGrid />
        </div>
      </section>

      {/* Section divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      {/* How It Works - Process */}
      <section id="como-funciona" className="py-16 md:py-24 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <ProcessSection />
        </div>
      </section>

      {/* Section divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      {/* Pricing */}
      <section id="precos" className="py-16 md:py-24 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <PricingSection onContactClick={() => setIsContactModalOpen(true)} />
        </div>
      </section>

      {/* Section divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      {/* CTA */}
      <section id="contato" className="py-16 md:py-24 bg-white">
        <div className="px-6 md:px-10 max-w-3xl mx-auto text-center">
          <div className="mb-14 md:mb-16">
            <h2 className="font-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
              Pronto para automatizar?<br />
              <span className="text-brand-primary">Vamos conversar</span>
            </h2>
            <p className="mt-4 text-lg text-brand-muted max-w-xl mx-auto">
              Sem compromisso, sem custo inicial. Mostramos o potencial de economia para seu negócio.
            </p>
          </div>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="btn btn-primary btn-xl"
          >
            Agendar demonstração
          </button>
        </div>
      </section>

      </main>

      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  )
}
