'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ValueProposition from '@/components/ValueProposition'
import WorkflowDemo from '@/components/WorkflowDemo'
import LogoGrid from '@/components/LogoGrid'
import PricingSection from '@/components/PricingSection'
import ProcessSection from '@/components/ProcessSection'
import HeroWorkflowSimple from '@/components/HeroWorkflowSimple'
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
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left column - Hero content */}
            <div className="flex flex-col justify-center">
              {/* Headline */}
              <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-brand-black leading-[1.1]">
                Automação que funciona<br />
                <span className="text-brand-accent">sem mudar seu sistema</span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 text-lg md:text-xl text-brand-muted font-light max-w-lg">
                Implementamos em dias, não meses. Integração zero-code com as ferramentas que você já usa.
              </p>

              {/* CTAs */}
              <div className="mt-10 md:mt-12 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn btn-primary btn-xl"
                >
                  Falar conosco
                </button>
                <a
                  href="#valor"
                  className="btn btn-outline btn-lg"
                >
                  Porque automatizar
                </a>
              </div>
            </div>

            {/* Right column - Workflow Demo */}
            <div className="hidden lg:block">
              <HeroWorkflowSimple />
            </div>

          </div>
        </div>

      </section>

      {/* Value Proposition */}
      <section id="valor" className="py-24 md:py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <ValueProposition />
        </div>
      </section>

      {/* How It Works - Process */}
      <section id="como-funciona" className="py-24 md:py-32 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <ProcessSection />
        </div>
      </section>

      {/* Workflow Demo */}
      <section id="demo" className="py-24 md:py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <p className="text-xs font-semibold text-brand-muted uppercase tracking-[0.15em] mb-4">
              Veja em ação
            </p>
            <h2 className="heading-section text-[2rem] md:text-[2.5rem] text-brand-black">
              Do gatilho ao resultado
            </h2>
            <p className="mt-4 text-lg text-brand-muted max-w-xl mx-auto">
              Tudo acontece automaticamente, sem intervenção manual
            </p>
          </div>

          <WorkflowDemo />
        </div>
      </section>

      {/* Integrations */}
      <section id="integracoes" className="py-16 md:py-20 bg-white border-y border-brand-border">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <p className="text-xs font-medium text-brand-muted uppercase tracking-[0.15em] text-center mb-8">
            Integramos com as ferramentas que você já usa
          </p>
          <LogoGrid />
        </div>
      </section>

      {/* Pricing */}
      <section id="precos" className="py-24 md:py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <PricingSection />
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-24 md:py-32 bg-brand-accent">
        <div className="px-6 md:px-10 max-w-3xl mx-auto text-center">
          <h2 className="text-[2rem] md:text-[2.5rem] font-medium text-white mb-6">
            Pronto para automatizar?
          </h2>
          <p className="text-lg text-white/80 max-w-lg mx-auto mb-10">
            Sem compromisso, sem custo inicial. Conversamos sobre seus processos e mostramos o potencial de economia.
          </p>
          <a
            href="mailto:contato@miledez.com.br"
            className="btn btn-inverted btn-xl"
          >
            Agendar uma conversa
          </a>
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
