'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionNavButton from '@/components/SectionNavButton'
import DiagnosticoAutomacao from '@/components/DiagnosticoAutomacao'
import HeroVisualization from '@/components/HeroVisualization'
import IntegrationMesh from '@/components/IntegrationMesh'
import ComoFuncionaDemo from '@/components/ComoFuncionaDemo'
import WorkflowAutomationVisual from '@/components/WorkflowAutomationVisual'
import BenefitsSection from '@/components/BenefitsSection'
import ProcessSection from '@/components/ProcessSection'
import IndustriesSection from '@/components/IndustriesSection'
import AnalyticsDashboard from '@/components/AnalyticsDashboard'
import { icons } from '@/components/Icons'

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

  const integrations = [
    { name: 'WhatsApp', icon: icons.whatsapp },
    { name: 'Gmail', icon: icons.gmail },
    { name: 'Outlook', icon: icons.outlook },
    { name: 'Google Drive', icon: icons.googleDrive },
    { name: 'OneDrive', icon: icons.oneDrive },
    { name: 'Excel', icon: icons.excel },
    { name: 'Word', icon: icons.word },
    { name: 'PDF', icon: icons.pdf },
    { name: 'Google Calendar', icon: icons.googleCalendar },
    { name: 'OpenAI', icon: icons.openai },
    { name: 'Google Sheets', icon: icons.googleSheets },
    { name: 'Slack', icon: icons.slack },
    { name: 'Notion', icon: icons.notion },
    { name: 'Zapier', icon: icons.zapier },
    { name: 'Trello', icon: icons.trello },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-24 md:pb-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <h1 className="text-[3.5rem] font-medium leading-tight mb-8 text-brand-black tracking-[-0.03em]">
              Automatizamos seus processos.<br />Você foca no que importa.
            </h1>
            <p className="text-xl mb-12 max-w-lg text-brand-text leading-relaxed">
              Conectamos seus sistemas, eliminamos trabalho manual e fazemos sua operação funcionar sozinha.
            </p>
            <a
              href="#contato"
              className="inline-block px-8 py-4 text-sm font-medium text-white bg-brand-accent hover:bg-brand-accent-dark transition-colors"
            >
              Agendar conversa
            </a>
          </div>

          {/* Hero Visualization - hidden on mobile */}
          <div className="hidden lg:block">
            <HeroVisualization />
          </div>
        </div>

        <SectionNavButton href="#como-funciona" label="Como funciona" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Why choose mil&dez */}
      <section id="como-funciona" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">Motivos para começar ainda hoje</h2>
          <p className="mt-4 text-lg text-brand-muted">Seu trabalho totalmente transformado</p>
        </div>

        <ComoFuncionaDemo />

        <SectionNavButton href="#integracao-visual" label="Veja na pratica" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Workflow Integration Visual */}
      <section id="integracao-visual" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">
            Como a automacao se integra ao seu negocio
          </h2>
          <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto">
            Veja como seus sistemas existentes se conectam ao motor de automacao
          </p>
        </div>

        <WorkflowAutomationVisual />

        <SectionNavButton href="#beneficios" label="Por que automatizar?" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Benefits - Bento Grid */}
      <section id="beneficios" className="py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <BenefitsSection />

        <SectionNavButton href="#integracoes" label="Integrações" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Integrations - Mesh Layout */}
      <section id="integracoes" className="py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">Integrações</h2>
          <p className="mt-4 text-lg font-medium text-brand-muted">Conectamos as ferramentas que você já usa</p>
        </div>

        <IntegrationMesh integrations={integrations} />

        <SectionNavButton href="#processo" label="Nosso processo" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Process */}
      <section id="processo" className="py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <ProcessSection />

        <SectionNavButton href="#resultados" label="Resultados" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Analytics Dashboard */}
      <div id="resultados">
        <AnalyticsDashboard />
      </div>

      {/* Divider before Diagnostic - HIDDEN */}
      <div className="hidden max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Diagnostic Tool - HIDDEN */}
      <section id="diagnostico" className="hidden py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="inline-block text-xs font-medium text-brand-accent uppercase tracking-wider mb-4">
              Ferramenta gratuita
            </span>
            <h2 className="text-[2rem] font-medium mb-6 text-brand-black tracking-[-0.02em]">
              Diagnóstico de Automação
            </h2>
            <p className="text-lg text-brand-text leading-relaxed mb-4">
              Descubra em 2 minutos o potencial de automação do seu negócio e receba recomendações personalizadas.
            </p>
            <p className="text-sm text-brand-muted">
              5 perguntas simples. Resultado imediato.
            </p>
          </div>

          <div>
            <DiagnosticoAutomacao />
          </div>
        </div>

        <SectionNavButton href="#industrias" label="Indústrias" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Industries */}
      <section id="industrias" className="py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <IndustriesSection />

        <SectionNavButton href="#contato" label="Contato" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* CTA */}
      <section id="contato" className="py-24 md:py-36 px-6 md:px-10 max-w-6xl mx-auto text-center">
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
      </section>

      <Footer />
    </div>
  )
}
