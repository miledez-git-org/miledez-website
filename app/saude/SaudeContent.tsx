'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ChallengeCard from '@/components/industry/ChallengeCard'
import MetricsGrid from '@/components/industry/MetricsGrid'
import { WorkflowVisualCompact, getHeroPreset, saudeWorkflowsCompact } from '@/components/WorkflowVisual'
import IndustryIntegrations from '@/components/industry/IndustryIntegrations'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { stepIcons } from '@/components/Icons'

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
    { name: 'WhatsApp', logo: 'whatsapp' },
    { name: 'Doctoralia', logo: 'doctoralia' },
    { name: 'iClinic', logo: 'iclinic' },
    { name: 'Google Calendar', logo: 'google-calendar' },
    { name: 'Gmail', logo: 'gmail' },
    { name: 'Google Drive', logo: 'google-drive' },
    { name: 'Excel', logo: 'excel' },
    { name: 'Google Sheets', logo: 'google-sheets' },
    { name: 'Zoom', logo: 'zoom' },
    { name: 'ContaAzul', logo: 'contaazul' },
    { name: 'DocuSign', logo: 'docusign' },
    { name: 'Word', logo: 'word' },
    { name: 'Outlook', logo: 'outlook' },
    { name: 'OneDrive', logo: 'onedrive' },
    { name: 'Trello', logo: 'trello' },
    { name: 'Telegram', logo: 'telegram' },
    { name: 'Typeform', logo: 'typeform' },
    { name: 'Pix', logo: 'pix' },
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
                  Saúde e Clínicas
                </span>
              </div>
              <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6 text-brand-black">
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
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-28 md:py-40 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-14 md:mb-16">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">Os desafios do dia a dia</h2>
          </div>

          <ChallengeCards />
        </div>
      </section>

      {/* Workflows */}
      <section id="workflows" className="py-28 md:py-40 bg-white">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-14 md:mb-16">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">Automações para sua clínica</h2>
            <p className="mt-4 text-lg text-neutral-600">
              Processos que funcionam sozinhos, do cadastro ao pagamento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            <WorkflowVisualCompact
              title={saudeWorkflowsCompact.documents.title}
              subtitle="Do cadastro ao prontuário, sem papel"
              steps={saudeWorkflowsCompact.documents.steps}
            />
            <WorkflowVisualCompact
              title={saudeWorkflowsCompact.billing.title}
              subtitle="Guias formatadas e enviadas sem esforço"
              steps={saudeWorkflowsCompact.billing.steps}
            />
            <WorkflowVisualCompact
              title={saudeWorkflowsCompact.collections.title}
              subtitle="Da fatura ao recebimento, automatizado"
              steps={saudeWorkflowsCompact.collections.steps}
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
                Sua equipe para de correr atrás de papel e começa a focar no que importa: o atendimento ao paciente.
              </p>
              <p className="text-xl leading-relaxed mt-6 text-neutral-600">
                Auditorias deixam de ser emergência. Faturamento deixa de ser gargalo. Documentos param de sumir.
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
            <p className="mt-4 text-base text-neutral-600">Integramos sem trocar seus sistemas</p>
          </div>

          <IndustryIntegrations integrations={integrations} />
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-28 md:py-40 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-3xl mx-auto text-center">
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
