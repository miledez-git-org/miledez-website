'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionNavButton from '@/components/SectionNavButton'
import ComoFuncionaDemo from '@/components/ComoFuncionaDemo'
import WorkflowAutomationVisual from '@/components/WorkflowAutomationVisual'
import WorkflowTiersDemo from '@/components/WorkflowTiersDemo'
import { LogoMarqueeSection } from '@/components/LogoMarquee'
import PricingSection from '@/components/PricingSection'
import ProcessSection from '@/components/ProcessSection'
import IndustriesSection from '@/components/IndustriesSection'
import AnalyticsDashboard from '@/components/AnalyticsDashboard'
import FlipCardsSection from '@/components/FlipCardsSection'
import HeroWorkflowDemo from '@/components/HeroWorkflowDemo'

export default function Home() {
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
      <Header />

      {/* Hero */}
      <section className="min-h-screen bg-white flex items-center relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left column - Hero content */}
            <div className="flex flex-col justify-center">
              {/* Fixed headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900 leading-[1.1]">
                Qualquer processo,<br />
                <span style={{ color: '#8b2020' }}>automatizado.</span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 text-xl md:text-2xl text-brand-muted font-light">
                Para PMEs que querem crescer sem aumentar a equipe
              </p>

              {/* CTAs */}
              <div className="mt-10 md:mt-12 flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="inline-block px-8 py-4 text-white transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#8b2020' }}
                >
                  Agendar conversa
                </a>
                <a
                  href="#integracao-visual"
                  className="inline-block px-8 py-4 text-brand-black border border-brand-border transition-all hover:border-brand-accent hover:text-brand-accent"
                >
                  Ver como funciona
                </a>
              </div>
            </div>

            {/* Right column - Workflow Demo */}
            <div className="hidden lg:block">
              <HeroWorkflowDemo />
            </div>

          </div>
        </div>

        {/* Scroll indicator at bottom of viewport */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <SectionNavButton href="#beneficios" label="O que muda" />
        </div>
      </section>

      {/* Benefits Section - What changes in your company */}
      <section id="beneficios" className="py-24 md:py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-[2.5rem] md:text-[3rem] font-medium text-brand-black tracking-[-0.02em]">O que muda na sua empresa</h2>
            <p className="mt-4 text-lg md:text-xl text-brand-muted">Resultados que começam em dias, não meses</p>
          </div>

          <ComoFuncionaDemo />

          <SectionNavButton href="#integracao-visual" label="Como funciona" />
        </div>
      </section>

      {/* How It Works - Workflow Tiers Demo */}
      <section id="integracao-visual" className="py-24 md:py-32 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">
              Veja a automacao em acao
            </h2>
            <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto">
              Do gatilho ao resultado, tudo acontece automaticamente
            </p>
          </div>

          <WorkflowTiersDemo />

          {/* Logo Slider - integrations */}
          <div className="mt-16 pt-12 border-t border-brand-border">
            <p className="text-xs font-medium text-brand-muted uppercase tracking-[0.15em] text-center mb-8">
              Integramos com as ferramentas que você já usa
            </p>
            <LogoMarqueeSection variant="inline" />
          </div>

          <SectionNavButton href="#flip-cards" label="Seu único trabalho" />
        </div>
      </section>

      {/* Flip Cards Section */}
      <div id="flip-cards">
        <FlipCardsSection />
      </div>

      {/* Navigation to Process */}
      <div className="py-8 bg-white text-center">
        <SectionNavButton href="#processo" label="Nosso processo" />
      </div>

      {/* Process */}
      <section id="processo" className="py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <ProcessSection />

          <SectionNavButton href="#resultados" label="Resultados" />
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section id="resultados" className="bg-white">
        <AnalyticsDashboard />
      </section>

      {/* Pricing */}
      <section id="precos" className="py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <PricingSection />

          <SectionNavButton href="#contato" label="Contato" />
        </div>
      </section>

      {/* Industries + Contact (merged closing section) */}
      <section id="contato" className="py-24 md:py-32 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          {/* Industries */}
          <div className="mb-20">
            <IndustriesSection />
          </div>

          {/* CTA */}
          <div className="text-center pt-12 border-t border-brand-border">
            <h2 className="text-[2.5rem] font-medium mb-6 text-brand-black tracking-[-0.02em]">
              Vamos automatizar sua operação?
            </h2>
            <p className="text-lg max-w-md mx-auto mb-12 text-brand-text">
              Conversa sem compromisso. Entendemos seu negócio e mostramos o que é possível.
            </p>
            <a
              href="mailto:contato@miledez.com.br"
              className="inline-block px-10 py-5 text-base font-medium text-white bg-brand-accent hover:bg-brand-accent-dark transition-colors"
            >
              Iniciar conversa
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
