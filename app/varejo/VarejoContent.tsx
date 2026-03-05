'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ChallengeCard from '@/components/industry/ChallengeCard'
import MetricsGrid from '@/components/industry/MetricsGrid'
import { WorkflowVisualCompact, getHeroPreset, varejoWorkflowsCompact } from '@/components/WorkflowVisual'
import IndustryIntegrations from '@/components/industry/IndustryIntegrations'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { stepIcons } from '@/components/Icons'

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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  
  const integrations = [
    { name: 'WhatsApp', logo: 'whatsapp' },
    { name: 'Shopify', logo: 'shopify' },
    { name: 'Nuvemshop', logo: 'nuvemshop' },
    { name: 'WooCommerce', logo: 'woocommerce' },
    { name: 'Mercado Livre', logo: 'mercado-livre' },
    { name: 'Amazon', logo: 'amazon' },
    { name: 'Bling', logo: 'bling' },
    { name: 'Correios', logo: 'correios' },
    { name: 'PagSeguro', logo: 'pagseguro' },
    { name: 'Mercado Pago', logo: 'mercadopago' },
    { name: 'Instagram', logo: 'instagram' },
    { name: 'Excel', logo: 'excel' },
    { name: 'Google Sheets', logo: 'google-sheets' },
    { name: 'Google Drive', logo: 'google-drive' },
    { name: 'Pix', logo: 'pix' },
    { name: 'Gmail', logo: 'gmail' },
    { name: 'Trello', logo: 'trello' },
    { name: 'Notion', logo: 'notion' },
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
                  Varejo e E-commerce
                </span>
              </div>
              <h1 className="heading-display text-4xl md:text-5xl lg:text-[3.5rem] mb-6 text-brand-black">
                Operação no piloto<br />automático.
              </h1>
              <p className="text-xl mb-10 max-w-lg text-neutral-600 leading-relaxed">
                Automatizamos estoque, pedidos e financeiro. Você foca em vender e crescer.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-primary btn-xl"
              >
                Agendar conversa
              </button>
            </div>
            <WorkflowVisualCompact
              {...getHeroPreset('varejo')}
              className="hidden lg:block w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 md:py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-12 md:mb-14">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">A operação que não para</h2>
          </div>

          <ChallengeCards />
        </div>
      </section>

      {/* Workflows */}
      <section id="workflows" className="py-24 md:py-32 bg-white">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-12 md:mb-14">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">O que automatizamos</h2>
            <p className="mt-4 text-lg text-neutral-600">
              Processos que funcionam enquanto voce vende
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <WorkflowVisualCompact
              title={varejoWorkflowsCompact.inventory.title}
              steps={varejoWorkflowsCompact.inventory.steps}
            />
            <WorkflowVisualCompact
              title={varejoWorkflowsCompact.orders.title}
              steps={varejoWorkflowsCompact.orders.steps}
            />
            <WorkflowVisualCompact
              title={varejoWorkflowsCompact.financial.title}
              steps={varejoWorkflowsCompact.financial.steps}
            />
            <WorkflowVisualCompact
              title={varejoWorkflowsCompact.reports.title}
              steps={varejoWorkflowsCompact.reports.steps}
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="resultados" className="py-24 md:py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="heading-display text-[2rem] md:text-[2.5rem] mb-6 text-brand-black">Resultados típicos</h2>
              <p className="text-xl leading-relaxed text-neutral-600">
                Seu estoque se mantém equilibrado. Pedidos fluem sem gargalos. O financeiro fecha sozinho.
              </p>
              <p className="text-xl leading-relaxed mt-6 text-neutral-600">
                Você para de apagar incêndio e começa a pensar em crescimento: novos produtos, novos canais, melhor margem.
              </p>
            </div>
            <MetricsGrid metrics={metrics} />
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integracoes" className="py-24 md:py-32 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-12 md:mb-14">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black">Ferramentas que você já usa</h2>
            <p className="mt-4 text-neutral-600">Integramos sem trocar seus sistemas</p>
          </div>

          <IndustryIntegrations integrations={integrations} />
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-24 md:py-32 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto text-center">
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
