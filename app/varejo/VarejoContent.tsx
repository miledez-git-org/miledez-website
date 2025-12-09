'use client'

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
    icon: stepIcons.box,
    title: 'Estoque descontrolado',
    description: 'Produtos que faltam, outros encalhados. Planilhas desatualizadas, contagem manual, surpresas na hora de vender.',
  },
  {
    icon: stepIcons.cart,
    title: 'Pedidos acumulando',
    description: 'Separação manual, etiquetas impressas uma a uma, clientes perguntando onde está o pedido. Cada venda gera trabalho.',
  },
  {
    icon: stepIcons.chart,
    title: 'Financeiro no escuro',
    description: 'Vendas de um lado, pagamentos de outro. Taxas de cartão, estornos, conciliação no fim do mês que nunca fecha.',
  },
]

const metrics = [
  { value: '85%', label: 'menos rupturas de estoque', type: 'percentage' as const },
  { value: '3x', label: 'mais rápido no processamento de pedidos', type: 'multiplier' as const },
  { value: '100%', label: 'das vendas conciliadas automaticamente', type: 'percentage' as const },
  { value: 'Zero', label: 'surpresas no fechamento financeiro', type: 'absolute' as const },
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

export default function VarejoContent() {
  const workflows = {
    inventory: {
      title: 'Gestão de Estoque',
      subtitle: 'Nunca mais perca venda por falta de produto',
      steps: [
        { icon: stepIcons.box, title: 'Nível monitorado', desc: 'Estoque atualizado em tempo real' },
        { icon: stepIcons.bell, title: 'Alerta disparado', desc: 'Produto atingiu mínimo' },
        { icon: stepIcons.document, title: 'Pedido sugerido', desc: 'Reposição pré-calculada' },
        { icon: stepIcons.check, title: 'Estoque equilibrado', desc: 'Sem rupturas, sem excesso' },
      ],
    },
    orders: {
      title: 'Processamento de Pedidos',
      subtitle: 'Do pedido à entrega, tudo rastreado',
      steps: [
        { icon: stepIcons.cart, title: 'Pedido recebido', desc: 'Venda confirmada' },
        { icon: stepIcons.box, title: 'Separação iniciada', desc: 'Lista de picking gerada' },
        { icon: stepIcons.truck, title: 'Envio registrado', desc: 'Código de rastreio atribuído' },
        { icon: stepIcons.check, title: 'Cliente notificado', desc: 'Atualizações automáticas' },
      ],
    },
    financial: {
      title: 'Conciliação Financeira',
      subtitle: 'Vendas e pagamentos sempre em dia',
      steps: [
        { icon: stepIcons.creditCard, title: 'Venda registrada', desc: 'Dados capturados automaticamente' },
        { icon: stepIcons.sync, title: 'Pagamento verificado', desc: 'Cruzamento com extrato' },
        { icon: stepIcons.document, title: 'Relatório gerado', desc: 'Consolidação por período' },
        { icon: stepIcons.check, title: 'Divergências alertadas', desc: 'Diferenças identificadas' },
      ],
    },
    reports: {
      title: 'Relatórios de Vendas',
      subtitle: 'Visibilidade do negócio sem esforço',
      steps: [
        { icon: stepIcons.calendar, title: 'Período fechado', desc: 'Dia, semana ou mês' },
        { icon: stepIcons.refresh, title: 'Dados consolidados', desc: 'Vendas, margens, estoque' },
        { icon: stepIcons.chart, title: 'Análise pronta', desc: 'Gráficos e indicadores' },
        { icon: stepIcons.check, title: 'Relatório entregue', desc: 'No seu email, no horário' },
      ],
    },
  }

  const integrations = [
    { name: 'Excel', icon: icons.excel },
    { name: 'Google Sheets', icon: icons.googleSheets },
    { name: 'PDF', icon: icons.pdf },
    { name: 'WhatsApp', icon: icons.whatsapp },
    { name: 'Email', icon: icons.email },
    { name: 'Google Drive', icon: icons.googleDrive },
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
                Varejo e E-commerce
              </span>
            </div>
            <h1 className="text-[3.5rem] font-medium leading-tight mb-8 text-brand-black tracking-[-0.03em]">
              Operação no piloto<br />automático.
            </h1>
            <p className="text-xl mb-12 max-w-lg text-brand-text leading-relaxed">
              Automatizamos estoque, pedidos e financeiro. Você foca em vender e crescer.
            </p>
            <a
              href="#contato"
              className="inline-block px-8 py-4 text-sm font-medium text-white bg-brand-accent hover:bg-brand-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
            >
              Agendar conversa
            </a>
          </div>
          <IndustryHeroVisualization industry="varejo" />
        </div>
        <SectionNavButton href="#workflows" label="O que automatizamos" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Pain Points */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">A operação que não para</h2>
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
          <p className="text-lg text-brand-text">Processos que funcionam enquanto você vende</p>
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
              Seu estoque se mantém equilibrado. Pedidos fluem sem gargalos. O financeiro fecha sozinho.
            </p>
            <p className="text-xl leading-relaxed mt-6 text-brand-text">
              Você para de apagar incêndio e começa a pensar em crescimento: novos produtos, novos canais, melhor margem.
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
          Vamos automatizar sua operação?
        </h2>
        <p className="text-lg max-w-md mx-auto mb-12 text-brand-text">
          Conversa sem compromisso. Entendemos seu negócio e mostramos o que é possível automatizar.
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
