'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ValueProposition from '@/components/ValueProposition'
import WorkflowDemo from '@/components/WorkflowDemo'
import LogoGrid from '@/components/LogoGrid'
import PricingSection from '@/components/PricingSection'
import ProcessSection from '@/components/ProcessSection'
import HeroWorkflowStatic from '@/components/HeroWorkflowStatic'
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

            {/* Right column - Workflow Demo */}
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
          <ValueProposition />
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

      {/* Workflow Demo */}
      <section id="demo" className="py-16 md:py-24 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-10 md:mb-12 text-center">
            <h2 className="font-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
              Do gatilho ao resultado,<br />
              <span className="text-brand-primary">sem tocar em código</span>
            </h2>
            <p className="mt-4 text-lg text-brand-muted max-w-xl mx-auto">
              Conectamos suas ferramentas e automatizamos o fluxo completo
            </p>
          </div>

          <WorkflowDemo />
        </div>
      </section>

      {/* Section divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      {/* Integrations */}
      <section id="integracoes" className="py-16 md:py-24 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <LogoGrid />
        </div>
      </section>

      {/* Section divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      {/* Pricing */}
      <section id="precos" className="py-16 md:py-24 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <PricingSection />
        </div>
      </section>

      {/* Section divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      {/* CTA */}
      <section id="contato" className="py-16 md:py-24 bg-white">
        <div className="px-6 md:px-10 max-w-3xl mx-auto text-center">
          <div className="mb-10 md:mb-12">
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
            Falar conosco
          </button>
        </div>
      </section>

      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  )
}
