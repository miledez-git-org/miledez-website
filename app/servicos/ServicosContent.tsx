'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ChallengeCard from '@/components/industry/ChallengeCard'
import MetricsGrid from '@/components/industry/MetricsGrid'
import { WorkflowVisualCompact, getHeroPreset, servicosWorkflowsCompact } from '@/components/WorkflowVisual'
import IndustryIntegrations from '@/components/industry/IndustryIntegrations'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { icons, stepIcons } from '@/components/Icons'

const challenges = [
  {
    icon: stepIcons.calendar,
    title: 'Horas perdidas em admin',
    description: 'Tempo gasto criando propostas, organizando documentos, enviando faturas e cobrando clientes. Horas que poderiam ser faturadas.',
  },
  {
    icon: stepIcons.document,
    title: 'Contratos e prazos',
    description: 'Renovações esquecidas, contratos vencidos, prazos perdidos. Informações espalhadas entre e-mails, pastas e planilhas.',
  },
  {
    icon: stepIcons.creditCard,
    title: 'Cobrança manual',
    description: 'Faturas atrasadas, clientes que esquecem de pagar, tempo perdido conciliando o que foi entregue com o que foi cobrado.',
  },
]

const metrics = [
  { value: '8h', label: 'por semana recuperadas para trabalho faturável', type: 'absolute' as const },
  { value: '45%', label: 'redução em atrasos de pagamento', type: 'percentage' as const },
  { value: '95%', label: 'taxa de renovação de contratos', type: 'percentage' as const },
  { value: 'Zero', label: 'contratos vencidos por esquecimento', type: 'absolute' as const },
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

export default function ServicosContent() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  
  const integrations = [
    { name: 'WhatsApp', icon: icons.whatsapp },
    { name: 'Gmail', icon: icons.gmail },
    { name: 'Outlook', icon: icons.outlook },
    { name: 'Google Calendar', icon: icons.googleCalendar },
    { name: 'Google Drive', icon: icons.googleDrive },
    { name: 'OneDrive', icon: icons.oneDrive },
    { name: 'Excel', icon: icons.excel },
    { name: 'Word', icon: icons.word },
    { name: 'Google Sheets', icon: icons.googleSheets },
    { name: 'PDF', icon: icons.pdf },
    { name: 'Trello', icon: icons.trello },
    { name: 'Notion', icon: icons.notion },
    { name: 'Slack', icon: icons.slack },
    { name: 'Zoom', icon: icons.zoom },
    { name: 'ContaAzul', icon: icons.contaAzul },
    { name: 'Nibo', icon: icons.nibo },
    { name: 'Pipedrive', icon: icons.pipedrive },
    { name: 'ClickSign', icon: icons.clickSign },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-40 pb-20 md:pb-28 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 mb-6 border-l-4 border-brand-primary">
                <span className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
                  Serviços Profissionais
                </span>
              </div>
              <h1 className="heading-display text-4xl md:text-5xl lg:text-[3.5rem] mb-6 text-brand-black">
                Menos admin.<br />Mais horas faturáveis.
              </h1>
              <p className="text-xl mb-10 max-w-lg text-brand-text leading-relaxed">
                Automatizamos contratos, faturamento e organização de clientes. Você foca em entregar valor.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-primary btn-xl"
              >
                Agendar conversa
              </button>
            </div>
            <WorkflowVisualCompact
              {...getHeroPreset('servicos')}
              className="hidden lg:block w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 md:py-28 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-12 md:mb-14">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">O custo do trabalho invisível</h2>
          </div>

          <ChallengeCards />
        </div>
      </section>

      {/* Workflows */}
      <section id="workflows" className="py-20 md:py-28 bg-white">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-12 md:mb-14 text-center">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">O que automatizamos</h2>
            <p className="mt-4 text-lg text-brand-text max-w-2xl mx-auto">
              Processos que funcionam sozinhos, liberando seu tempo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <WorkflowVisualCompact
              title={servicosWorkflowsCompact.onboarding.title}
              steps={servicosWorkflowsCompact.onboarding.steps}
            />
            <WorkflowVisualCompact
              title={servicosWorkflowsCompact.contracts.title}
              steps={servicosWorkflowsCompact.contracts.steps}
            />
            <WorkflowVisualCompact
              title={servicosWorkflowsCompact.billing.title}
              steps={servicosWorkflowsCompact.billing.steps}
            />
            <WorkflowVisualCompact
              title={servicosWorkflowsCompact.reports.title}
              steps={servicosWorkflowsCompact.reports.steps}
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="resultados" className="py-20 md:py-28 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <h2 className="heading-display text-[2rem] md:text-[2.5rem] mb-12 md:mb-14 text-brand-black">Resultados típicos</h2>

          <MetricsGrid metrics={metrics} />

          <div className="mt-16 max-w-2xl">
            <p className="text-xl leading-relaxed text-brand-text">
              Seu tempo volta a ser investido no que gera receita: atender clientes, fechar projetos, entregar resultados.
            </p>
            <p className="text-xl leading-relaxed mt-6 text-brand-text">
              A administração acontece em segundo plano. Contratos se renovam, faturas saem no prazo, clientes recebem relatórios sem você precisar lembrar.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integracoes" className="py-20 md:py-28 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-12 md:mb-14">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">Ferramentas que você já usa</h2>
            <p className="mt-4 text-brand-text">Integramos sem trocar seus sistemas</p>
          </div>

          <IndustryIntegrations integrations={integrations} />
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-20 md:py-28 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto text-center">
          <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">
            Vamos recuperar suas horas produtivas?
          </h2>
          <p className="mt-4 text-lg max-w-md mx-auto text-brand-text">
            Conversa sem compromisso. Entendemos sua operação e mostramos o que é possível automatizar.
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
