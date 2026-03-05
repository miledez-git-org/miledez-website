'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ChallengeCard from '@/components/industry/ChallengeCard'
import MetricsGrid from '@/components/industry/MetricsGrid'
import { WorkflowVisualCompact, getHeroPreset } from '@/components/WorkflowVisual'
import WorkflowCardFlow from '@/components/WorkflowVisual/WorkflowCardFlow'
import { saudeCardWorkflows } from '@/components/WorkflowVisual/saudeCardData'
import IndustryIntegrations from '@/components/industry/IndustryIntegrations'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { icons, stepIcons } from '@/components/Icons'

const challenges = [
  {
    icon: stepIcons.folder,
    title: 'Documentação dispersa',
    description: 'Fichas em papel, arquivos no computador, anexos no e-mail. Informação espalhada, difícil de encontrar quando precisa.',
  },
  {
    icon: stepIcons.creditCard,
    title: 'Faturamento complexo',
    description: 'Cada convênio com regras diferentes, guias que voltam com glosa, tempo perdido corrigindo e reenviando.',
  },
  {
    icon: stepIcons.calendar,
    title: 'Conformidade constante',
    description: 'Prazos de retenção, documentos obrigatórios, preparação para auditoria. Sempre algo para organizar.',
  },
]

const metrics = [
  { value: '70%', label: 'menos tempo em tarefas administrativas', type: 'percentage' as const },
  { value: '50%', label: 'redução em glosas de convênios', type: 'percentage' as const },
  { value: '2x', label: 'mais rápido no ciclo de recebimento', type: 'multiplier' as const },
  { value: '100%', label: 'dos documentos organizados e rastreáveis', type: 'percentage' as const },
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

export default function SaudeContent() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  
  const integrations = [
    { name: 'WhatsApp', icon: icons.whatsapp },
    { name: 'Doctoralia', icon: icons.doctoralia },
    { name: 'iClinic', icon: icons.iclinic },
    { name: 'Google Calendar', icon: icons.googleCalendar },
    { name: 'Gmail', icon: icons.gmail },
    { name: 'Google Drive', icon: icons.googleDrive },
    { name: 'Excel', icon: icons.excel },
    { name: 'Google Sheets', icon: icons.googleSheets },
    { name: 'Zoom', icon: icons.zoom },
    { name: 'ContaAzul', icon: icons.contaAzul },
    { name: 'ClickSign', icon: icons.clickSign },
    { name: 'Pixeon', icon: icons.pixeon },
    { name: 'Prontuário', icon: icons.prontuario },
    { name: 'PDF', icon: icons.pdf },
    { name: 'Word', icon: icons.word },
    { name: 'Outlook', icon: icons.outlook },
    { name: 'OneDrive', icon: icons.oneDrive },
    { name: 'Trello', icon: icons.trello },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-40 pb-20 md:pb-28 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 mb-6 border-l-4 border-[#16232A]">
                <span className="text-sm font-semibold uppercase tracking-widest text-[#16232A]">
                  Saúde e Clínicas
                </span>
              </div>
              <h1 className="heading-display text-4xl md:text-5xl lg:text-[3.5rem] mb-6 text-brand-black">
                Menos papelada.<br />Mais tempo para pacientes.
              </h1>
              <p className="text-xl mb-10 max-w-lg text-neutral-600 leading-relaxed">
                Automatizamos documentação, faturamento e conformidade. Você foca no atendimento.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-primary btn-xl"
              >
                Agendar conversa
              </button>
            </div>
            <WorkflowVisualCompact
              {...getHeroPreset('saude')}
              className="hidden lg:block w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 md:py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-12 md:mb-14">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">Os desafios do dia a dia</h2>
          </div>

          <ChallengeCards />
        </div>
      </section>

      {/* Workflows */}
      <section id="workflows" className="py-24 md:py-32 bg-white">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-12 md:mb-14 text-center">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">Automações para sua clínica</h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Processos que funcionam sozinhos, do cadastro ao pagamento
            </p>
          </div>

          <WorkflowCardFlow
            title={saudeCardWorkflows.cadastro.title}
            cards={saudeCardWorkflows.cadastro.cards}
          />
          <WorkflowCardFlow
            title={saudeCardWorkflows.faturamento.title}
            cards={saudeCardWorkflows.faturamento.cards}
          />
          <WorkflowCardFlow
            title={saudeCardWorkflows.conformidade.title}
            cards={saudeCardWorkflows.conformidade.cards}
          />
          <WorkflowCardFlow
            title={saudeCardWorkflows.cobranca.title}
            cards={saudeCardWorkflows.cobranca.cards}
          />
        </div>
      </section>

      {/* Results */}
      <section id="resultados" className="py-24 md:py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <h2 className="heading-display text-[2rem] md:text-[2.5rem] mb-12 md:mb-14 text-brand-black">Resultados típicos</h2>

          <MetricsGrid metrics={metrics} />

          <div className="mt-16 max-w-2xl">
            <p className="text-xl leading-relaxed text-neutral-600">
              Sua equipe para de correr atrás de papel e começa a focar no que importa: o atendimento ao paciente.
            </p>
            <p className="text-xl leading-relaxed mt-6 text-neutral-600">
              Auditorias deixam de ser emergência. Faturamento deixa de ser gargalo. Documentos param de sumir.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integracoes" className="py-24 md:py-32 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-12 md:mb-14">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">Ferramentas que você já usa</h2>
            <p className="mt-4 text-base text-neutral-600">Integramos sem trocar seus sistemas</p>
          </div>

          <IndustryIntegrations integrations={integrations} />
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-24 md:py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto text-center">
          <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">
            Vamos simplificar sua administração?
          </h2>
          <p className="mt-4 text-lg max-w-md mx-auto text-neutral-600">
            Conversa sem compromisso. Entendemos sua clínica e mostramos o que é possível automatizar.
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
