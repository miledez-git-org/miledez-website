'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionNavButton from '@/components/SectionNavButton'
import DiagnosticoAutomacao from '@/components/DiagnosticoAutomacao'
import IntegrationMesh from '@/components/IntegrationMesh'
import ComoFuncionaDemo from '@/components/ComoFuncionaDemo'
import WorkflowAutomationVisual from '@/components/WorkflowAutomationVisual'
import BenefitsSection from '@/components/BenefitsSection'
import ProcessSection from '@/components/ProcessSection'
import IndustriesSection from '@/components/IndustriesSection'
import AnalyticsDashboard from '@/components/AnalyticsDashboard'
import { icons } from '@/components/Icons'

export default function Home() {
  // Typewriter state
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const phrases = [
    'novos softwares.',
    'interrupções.',
    'custos iniciais.',
    'riscos. Só resultados.'
  ]

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1))
        }, 50 + Math.random() * 30)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2200)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        }, 25)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }, 300)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex])

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
      <section className="min-h-screen bg-white flex items-center relative">
        <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">

          {/* Fixed headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-neutral-900 leading-[1.1]">
            Qualquer processo,<br />
            <span style={{ color: '#8b2020' }}>automatizado.</span>
          </h1>

          {/* Separator */}
          <div className="w-12 h-px bg-neutral-300 mt-10 md:mt-12" />

          {/* Typewriter area */}
          <div className="mt-8 md:mt-10">
            <p className="text-2xl md:text-3xl font-light tracking-tight">
              <span className="font-medium" style={{ color: '#8b2020' }}>Sem</span>
              <span className="text-neutral-600 ml-1">{displayText}</span>
              <span
                className="inline-block w-[2px] h-7 bg-neutral-400 ml-1 align-middle"
                style={{ animation: 'blink 1s step-end infinite' }}
              />
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 md:mt-14">
            <a
              href="#contato"
              className="inline-block px-8 py-4 text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: '#8b2020' }}
            >
              Agendar conversa
            </a>
          </div>

        </div>

        {/* Scroll indicator at bottom of viewport */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <SectionNavButton href="#como-funciona" label="Como funciona" />
        </div>
      </section>

      {/* Why choose mil&dez */}
      <section id="como-funciona" className="py-24 md:py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">Motivos para começar ainda hoje</h2>
            <p className="mt-4 text-lg text-brand-muted">Seu trabalho totalmente transformado</p>
          </div>

          <ComoFuncionaDemo />

          <SectionNavButton href="#integracao-visual" label="Veja na pratica" />
        </div>
      </section>

      {/* Workflow Integration Visual */}
      <section id="integracao-visual" className="py-24 md:py-32 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
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
        </div>
      </section>

      {/* Benefits - Bento Grid */}
      <section id="beneficios" className="py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <BenefitsSection />

          <SectionNavButton href="#integracoes" label="Integrações" />
        </div>
      </section>

      {/* Integrations - Mesh Layout */}
      <section id="integracoes" className="py-32 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">Integrações</h2>
            <p className="mt-4 text-lg font-medium text-brand-muted">Conectamos as ferramentas que você já usa</p>
          </div>

          <IntegrationMesh integrations={integrations} />

          <SectionNavButton href="#processo" label="Nosso processo" />
        </div>
      </section>

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

      {/* Diagnostic Tool - HIDDEN */}
      <section id="diagnostico" className="hidden py-24 md:py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
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
        </div>
      </section>

      {/* Industries */}
      <section id="industrias" className="py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <IndustriesSection />

          <SectionNavButton href="#contato" label="Contato" />
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-24 md:py-36 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto text-center">
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
      </section>

      <Footer />
    </div>
  )
}
