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
import { stepIcons } from '@/components/Icons'

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
    { name: 'WhatsApp', logo: 'whatsapp' },
    { name: 'Gmail', logo: 'gmail' },
    { name: 'Outlook', logo: 'outlook' },
    { name: 'Google Calendar', logo: 'google-calendar' },
    { name: 'Google Drive', logo: 'google-drive' },
    { name: 'OneDrive', logo: 'onedrive' },
    { name: 'Excel', logo: 'excel' },
    { name: 'Word', logo: 'word' },
    { name: 'Google Sheets', logo: 'google-sheets' },
    { name: 'Trello', logo: 'trello' },
    { name: 'Notion', logo: 'notion' },
    { name: 'Slack', logo: 'slack' },
    { name: 'Zoom', logo: 'zoom' },
    { name: 'ContaAzul', logo: 'contaazul' },
    { name: 'Pipedrive', logo: 'pipedrive' },
    { name: 'DocuSign', logo: 'docusign' },
    { name: 'HubSpot', logo: 'hubspot' },
    { name: 'Asana', logo: 'asana' },
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
                  Serviços Profissionais
                </span>
              </div>
              <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6 text-brand-black">
                Menos admin.<br />Mais horas faturáveis.
              </h1>
              <p className="text-xl mb-10 max-w-lg text-neutral-600 leading-relaxed">
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
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-28 md:py-40 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-14 md:mb-16">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">O custo do trabalho invisível</h2>
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
              Processos que funcionam sozinhos, liberando seu tempo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            <WorkflowVisualCompact
              title={servicosWorkflowsCompact.onboarding.title}
              subtitle="Boas-vindas e estrutura criadas sozinhas"
              steps={servicosWorkflowsCompact.onboarding.steps}
            />
            <WorkflowVisualCompact
              title={servicosWorkflowsCompact.contracts.title}
              subtitle="Alertas e renovações no piloto automático"
              steps={servicosWorkflowsCompact.contracts.steps}
            />
            <WorkflowVisualCompact
              title={servicosWorkflowsCompact.billing.title}
              subtitle="Da entrega à cobrança, sem atraso"
              steps={servicosWorkflowsCompact.billing.steps}
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
                Seu tempo volta a ser investido no que gera receita: atender clientes, fechar projetos, entregar resultados.
              </p>
              <p className="text-xl leading-relaxed mt-6 text-neutral-600">
                A administração acontece em segundo plano. Contratos se renovam, faturas saem no prazo, clientes recebem relatórios sem você precisar lembrar.
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
            Vamos recuperar suas horas produtivas?
          </h2>
          <p className="mt-4 text-lg max-w-md mx-auto text-neutral-600">
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
