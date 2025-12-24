'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ComoFuncionaDemo from '@/components/ComoFuncionaDemo'
import WorkflowAutomationVisual from '@/components/WorkflowAutomationVisual'
import WorkflowTiersDemo from '@/components/WorkflowTiersDemo'
import { LogoMarqueeSection } from '@/components/LogoMarquee'
import PricingSection from '@/components/PricingSection'
// import ProcessSection from '@/components/ProcessSection' // Kept for future use
import ProcessSectionEnhanced from '@/components/ProcessSectionEnhanced'
import IndustriesSection from '@/components/IndustriesSection'
import AnalyticsDashboard from '@/components/AnalyticsDashboard'
// import FlipCardsSection from '@/components/FlipCardsSection' // Kept for future use
import HeroWorkflowDemo from '@/components/HeroWorkflowDemo'
import ScrollProgress from '@/components/ScrollProgress'

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
      {/* Global interactive elements */}
      <ScrollProgress />

      <Header />

      {/* Hero */}
      <section className="min-h-screen bg-white flex items-center relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left column - Hero content */}
            <div className="flex flex-col justify-center">
              {/* Fixed headline */}
              <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-brand-black">
                Qualquer processo,<br />
                <span className="text-brand-accent">automatizado.</span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 text-xl md:text-2xl text-brand-muted font-light">
                Para PMEs que querem crescer sem aumentar a equipe
              </p>

              {/* CTAs */}
              <div className="mt-10 md:mt-12 flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="btn-primary inline-block px-10 py-5 text-white bg-brand-accent hover:bg-brand-accent-dark"
                >
                  Agendar conversa
                </a>
                <a
                  href="#integracao-visual"
                  className="btn-secondary inline-block px-8 py-4 text-brand-black border border-brand-border hover:border-brand-accent hover:text-brand-accent"
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

      </section>

      {/* Benefits Section - What changes in your company */}
      <section id="beneficios" className="py-32 md:py-40 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="heading-section text-[2.5rem] md:text-[3rem] text-brand-black">O que muda na sua empresa</h2>
            <p className="mt-4 text-lg md:text-xl text-brand-muted">Resultados que começam em dias, não meses</p>
          </div>

          <ComoFuncionaDemo />
        </div>
      </section>

      {/* How It Works - Workflow Tiers Demo */}
      <section id="integracao-visual" className="py-32 md:py-40 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="heading-section text-[2rem] text-brand-black">
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
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <div id="processo">
        <ProcessSectionEnhanced />
      </div>

      {/* Old Flip Cards Section - Kept for future use
      <div id="flip-cards" className="py-32 md:py-40">
        <FlipCardsSection />
      </div>
      */}

      {/* Old Process Section - Kept for future use
      <section id="processo-old" className="py-32 md:py-40 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <ProcessSection />
        </div>
      </section>
      */}

      {/* Analytics Dashboard */}
      <section id="resultados" className="bg-white">
        <AnalyticsDashboard />
      </section>

      {/* Pricing */}
      <section id="precos" className="py-32 md:py-40 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <PricingSection />
        </div>
      </section>

      {/* Industries + Contact (merged closing section) */}
      <section id="contato" className="py-32 md:py-40 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          {/* Industries */}
          <div className="mb-20">
            <IndustriesSection />
          </div>

          {/* CTA */}
          <div className="text-center pt-12 border-t border-brand-border">
            <h2 className="heading-section text-[2.5rem] mb-6 text-brand-black">
              Vamos automatizar sua operação?
            </h2>
            <p className="text-lg max-w-md mx-auto mb-12 text-brand-text">
              Conversa sem compromisso. Entendemos seu negócio e mostramos o que é possível.
            </p>
            <a
              href="mailto:contato@miledez.com.br"
              className="btn-primary inline-block px-10 py-5 text-base font-medium text-white bg-brand-accent hover:bg-brand-accent-dark"
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
