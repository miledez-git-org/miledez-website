'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorkflowAnimation from '@/components/WorkflowAnimation'
import SectionNavButton from '@/components/SectionNavButton'
import ChallengeCard from '@/components/industry/ChallengeCard'
import MetricsGrid from '@/components/industry/MetricsGrid'
import IndustryHeroVisualization from '@/components/industry/IndustryHeroVisualization'
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
  const workflows = {
    documents: {
      title: 'Coleta de Documentos',
      subtitle: 'Prontuário completo sem trabalho manual',
      steps: [
        { icon: stepIcons.user, title: 'Novo paciente', desc: 'Cadastro iniciado' },
        { icon: stepIcons.mail, title: 'Formulário enviado', desc: 'Ficha de anamnese automática' },
        { icon: stepIcons.folder, title: 'Docs organizados', desc: 'Arquivos classificados por tipo' },
        { icon: stepIcons.check, title: 'Prontuário completo', desc: 'Pendências sinalizadas' },
      ],
    },
    billing: {
      title: 'Faturamento de Convênios',
      subtitle: 'Menos glosas, reembolso mais rápido',
      steps: [
        { icon: stepIcons.result, title: 'Consulta finalizada', desc: 'Dados registrados' },
        { icon: stepIcons.document, title: 'Guia formatada', desc: 'Conforme exigências do convênio' },
        { icon: stepIcons.mail, title: 'Envio automático', desc: 'Submissão ao portal' },
        { icon: stepIcons.check, title: 'Status rastreado', desc: 'Acompanhamento até pagamento' },
      ],
    },
    compliance: {
      title: 'Organização e Conformidade',
      subtitle: 'Pronto para auditoria, sempre',
      steps: [
        { icon: stepIcons.document, title: 'Documento recebido', desc: 'Qualquer formato' },
        { icon: stepIcons.process, title: 'Auto-classificado', desc: 'IA identifica tipo' },
        { icon: stepIcons.calendar, title: 'Retenção definida', desc: 'Prazo legal configurado' },
        { icon: stepIcons.check, title: 'Alertas agendados', desc: 'Aviso antes vencimento' },
      ],
    },
    collections: {
      title: 'Cobrança e Acompanhamento',
      subtitle: 'Menos inadimplência, menos trabalho',
      steps: [
        { icon: stepIcons.creditCard, title: 'Fatura gerada', desc: 'Automática após atendimento' },
        { icon: stepIcons.calendar, title: 'Prazo monitorado', desc: 'Contagem regressiva' },
        { icon: stepIcons.bell, title: 'Lembretes enviados', desc: 'Escalonamento automático' },
        { icon: stepIcons.check, title: 'Status atualizado', desc: 'Baixa automática ao pagar' },
      ],
    },
  }

  const integrations = [
    { name: 'Excel', icon: icons.excel },
    { name: 'Google Sheets', icon: icons.googleSheets },
    { name: 'PDF', icon: icons.pdf },
    { name: 'Google Drive', icon: icons.googleDrive },
    { name: 'Email', icon: icons.email },
    { name: 'Calendar', icon: icons.calendar },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-24 md:pb-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 mb-6 border-l-4 border-brand-accent">
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
                Saúde e Clínicas
              </span>
            </div>
            <h1 className="text-[3.5rem] font-medium leading-tight mb-8 text-brand-black tracking-[-0.03em]">
              Menos papelada.<br />Mais tempo para pacientes.
            </h1>
            <p className="text-xl mb-12 max-w-lg text-brand-text leading-relaxed">
              Automatizamos documentação, faturamento e conformidade. Você foca no atendimento.
            </p>
            <a
              href="#contato"
              className="inline-block px-8 py-4 text-sm font-medium text-white bg-brand-accent hover:bg-brand-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
            >
              Agendar conversa
            </a>
          </div>
          <IndustryHeroVisualization industry="saude" />
        </div>
        <SectionNavButton href="#workflows" label="O que automatizamos" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Pain Points */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">Os desafios do dia a dia</h2>
        </div>

        <ChallengeCards />
      </section>


      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Workflows */}
      <section id="workflows" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-[2rem] font-medium mb-4 text-brand-black tracking-[-0.02em]">O que automatizamos</h2>
          <p className="text-lg text-brand-text">Processos que funcionam sozinhos, liberando sua equipe</p>
        </div>

        <div className="space-y-16">
          {Object.entries(workflows).map(([key, workflow], index) => (
            <div key={key}>
              <div className="mb-8 flex items-center gap-4">
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center bg-brand-accent text-white text-sm font-medium">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-medium text-brand-black leading-7">{workflow.title}</h3>
                  <p className="text-brand-muted">{workflow.subtitle}</p>
                </div>
              </div>
              <WorkflowAnimation steps={workflow.steps} accentStep={3} />
            </div>
          ))}
        </div>
        <SectionNavButton href="#resultados" label="Resultados" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Results */}
      <section id="resultados" className="py-32">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <h2 className="text-[2rem] font-medium mb-12 text-brand-black tracking-[-0.02em]">Resultados típicos</h2>

          <MetricsGrid metrics={metrics} />

          <div className="mt-16 max-w-2xl">
            <p className="text-xl leading-relaxed text-brand-text">
              Sua equipe para de correr atrás de papel e começa a focar no que importa: o atendimento ao paciente.
            </p>
            <p className="text-xl leading-relaxed mt-6 text-brand-text">
              Auditorias deixam de ser emergência. Faturamento deixa de ser gargalo. Documentos param de sumir.
            </p>
          </div>
          <SectionNavButton href="#integracoes" label="Integrações" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Integrations */}
      <section id="integracoes" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[2rem] font-medium mb-4 text-brand-black tracking-[-0.02em]">Ferramentas que você já usa</h2>
          <p className="text-brand-text">Integramos sem trocar seus sistemas</p>
        </div>

        <IndustryIntegrations integrations={integrations} />
        <SectionNavButton href="#contato" label="Contato" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* CTA */}
      <section id="contato" className="py-24 md:py-36 px-6 md:px-10 max-w-6xl mx-auto text-center">
        <h2 className="text-[2.5rem] font-medium mb-6 text-brand-black tracking-[-0.02em]">
          Vamos simplificar sua administração?
        </h2>
        <p className="text-lg max-w-md mx-auto mb-12 text-brand-text">
          Conversa sem compromisso. Entendemos sua clínica e mostramos o que é possível automatizar.
        </p>
        <a
          href="mailto:contato@mildez.com"
          className="inline-block px-10 py-5 text-base font-medium text-white bg-brand-accent hover:bg-brand-accent-dark transition-colors"
        >
          Iniciar conversa
        </a>
      </section>

      <Footer />
    </div>
  )
}
