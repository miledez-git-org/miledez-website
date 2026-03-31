'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ChallengeCard from '@/components/industry/ChallengeCard'
import MetricsGrid from '@/components/industry/MetricsGrid'
import { WorkflowVisualCompact, getHeroPreset, agronegocioWorkflowsCompact } from '@/components/WorkflowVisual'
import IndustryIntegrations from '@/components/industry/IndustryIntegrations'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { stepIcons } from '@/components/Icons'

const challenges = [
  {
    icon: stepIcons.mail,
    title: 'Fornecedores no WhatsApp pessoal',
    description: 'Cotações, prazos e confirmações espalhados em conversas pessoais. Ninguém sabe o que foi combinado nem com quem.',
  },
  {
    icon: stepIcons.document,
    title: 'Documentação ambiental manual',
    description: 'Licenças, certificados e laudos em pastas perdidas. Vencimentos passam despercebidos, fiscalização pega de surpresa.',
  },
  {
    icon: stepIcons.sync,
    title: 'Campo e escritório desconectados',
    description: 'Informações do campo chegam por áudio, foto e texto solto. O escritório gasta horas organizando o que já deveria estar pronto.',
  },
]

const metrics = [
  { value: '80%', label: 'menos tempo coordenando fornecedores', type: 'percentage' as const },
  { value: '100%', label: 'dos documentos organizados e monitorados', type: 'percentage' as const },
  { value: '3x', label: 'mais rápido para gerar relatórios', type: 'multiplier' as const },
  { value: 'Zero', label: 'mensagens perdidas entre campo e escritório', type: 'absolute' as const },
]

function ChallengeCards() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {challenges.map((challenge, index) => (
        <ChallengeCard
          key={index}
          icon={challenge.icon}
          title={challenge.title}
          description={challenge.description}
          index={index}
          isVisible={isVisible}
        />
      ))}
    </div>
  )
}

export default function AgronegocioContent() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const integrations = [
    { name: 'WhatsApp', logo: 'whatsapp' },
    { name: 'Google Sheets', logo: 'google-sheets' },
    { name: 'Excel', logo: 'excel' },
    { name: 'Google Drive', logo: 'google-drive' },
    { name: 'Gmail', logo: 'gmail' },
    { name: 'ContaAzul', logo: 'contaazul' },
    { name: 'Notion', logo: 'notion' },
    { name: 'Trello', logo: 'trello' },
    { name: 'Google Calendar', logo: 'google-calendar' },
    { name: 'Word', logo: 'word' },
    { name: 'Pix', logo: 'pix' },
    { name: 'Outlook', logo: 'outlook' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="min-h-screen bg-white flex items-center relative pt-24 md:pt-0">
        <div className="px-6 md:px-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-10 items-center">
            <div className="max-w-xl flex-1">
              <div className="inline-flex items-center px-4 py-2 mb-6 border-l-4 border-brand-black">
                <span className="text-sm font-semibold uppercase tracking-widest text-brand-black">
                  Agronegócio
                </span>
              </div>
              <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6 text-brand-black">
                Gestão rural no<br />automático.
              </h1>
              <p className="text-xl mb-10 max-w-lg text-neutral-600 leading-relaxed">
                Automatizamos fornecedores, documentação e comunicação campo-escritório. Você foca na produção.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-primary btn-xl"
              >
                Agendar conversa
              </button>
            </div>
            <WorkflowVisualCompact
              {...getHeroPreset('agronegocio')}
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-28 md:py-40 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-14 md:mb-16">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">O dia a dia que trava a operação</h2>
          </div>

          <ChallengeCards />
        </div>
      </section>

      {/* Workflows */}
      <section id="workflows" className="py-28 md:py-40 bg-white">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-14 md:mb-16">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">O que automatizamos</h2>
            <p className="mt-4 text-lg text-neutral-600">
              Processos que funcionam enquanto você cuida da produção
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            <WorkflowVisualCompact
              title={agronegocioWorkflowsCompact.supplierCoordination.title}
              subtitle="Cotação, pedido e entrega sem esforço"
              steps={agronegocioWorkflowsCompact.supplierCoordination.steps}
            />
            <WorkflowVisualCompact
              title={agronegocioWorkflowsCompact.traceability.title}
              subtitle="Licenças e certificados sempre em dia"
              steps={agronegocioWorkflowsCompact.traceability.steps}
            />
            <WorkflowVisualCompact
              title={agronegocioWorkflowsCompact.fieldOffice.title}
              subtitle="Dados do campo organizados no escritório"
              steps={agronegocioWorkflowsCompact.fieldOffice.steps}
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="resultados" className="py-28 md:py-40 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="heading-display text-[2rem] md:text-[2.5rem] mb-6 text-brand-black">Resultados típicos</h2>
              <p className="text-xl leading-relaxed text-neutral-600">
                Fornecedores coordenados sem depender de WhatsApp pessoal. Documentação organizada e monitorada. Campo e escritório conectados.
              </p>
              <p className="text-xl leading-relaxed mt-6 text-neutral-600">
                Você para de apagar incêndio e foca no que importa: produzir melhor, negociar melhor, crescer.
              </p>
            </div>
            <MetricsGrid metrics={metrics} />
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integracoes" className="py-28 md:py-40 bg-white">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-14 md:mb-16">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">Ferramentas que você já usa</h2>
            <p className="mt-4 text-neutral-600">Integramos sem trocar seus sistemas</p>
          </div>

          <IndustryIntegrations integrations={integrations} />
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-28 md:py-40 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-3xl mx-auto text-center">
          <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">
            Vamos automatizar sua operação?
          </h2>
          <p className="mt-4 text-lg max-w-md mx-auto text-neutral-600">
            Conversa sem compromisso. Entendemos seu negócio e mostramos o que é possível automatizar.
          </p>
          <div className="mt-10 md:mt-12">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="btn btn-primary btn-xl"
            >
              Falar conosco
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  )
}
