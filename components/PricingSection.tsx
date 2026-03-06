'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface PricingSectionProps {
  onContactClick: () => void
}

interface PricingTier {
  name: string
  price: string
  description: string
  examples: string[]
  featured?: boolean
}

const tiers: PricingTier[] = [
  {
    name: 'Simples',
    price: 'R$900 - R$2.000',
    description: 'por mês',
    examples: [
      'Notificações automáticas no WhatsApp',
      'Relatório diário de vendas por email',
      'Sincronização entre CRM e planilha',
      'Lembretes automáticos de follow-up',
    ],
  },
  {
    name: 'Média',
    price: 'R$2.000 - R$6.000',
    description: 'por mês',
    examples: [
      'Integração e-commerce + estoque',
      'Workflow de aprovação multi-etapas',
      'Dashboard em tempo real',
      'Atendimento com IA no WhatsApp',
    ],
    featured: true,
  },
  {
    name: 'Inteligência',
    price: 'R$3.000 - R$15.000+',
    description: 'por mês',
    examples: [
      'Alertas de mudanças regulatórias',
      'Monitoramento de concorrentes',
      'Relatórios estratégicos mensais',
      'Análise de tendências do setor',
    ],
  },
  {
    name: 'Sob Medida',
    price: 'Sob consulta',
    description: 'para grandes projetos',
    examples: [
      'Sistemas completos de gestão',
      'Integrações enterprise',
      'IA avançada e alto volume',
      'Desenvolvimento personalizado',
    ],
  },
]


export default function PricingSection({ onContactClick }: PricingSectionProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <div ref={ref}>
      {/* Header */}
      <div className="mb-12 md:mb-14">
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          Preço justo, retorno comprovado
        </h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-lg">
          Baseado na complexidade e escala do seu negócio
        </p>
      </div>

      {/* Pricing Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tiers.map((tier, index) => (
          <div
            key={tier.name}
            className={`p-8 flex flex-col bg-white border ${tier.featured ? 'border-l-4 border-l-brand-primary border-t border-r border-b border-t-neutral-200 border-r-neutral-200 border-b-neutral-200' : 'border-neutral-200'}`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
            }}
          >
            {/* Featured badge */}
            {tier.featured && (
              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary bg-brand-primary-subtle px-3 py-1 rounded-full">
                  Mais popular
                </span>
              </div>
            )}

            {/* Tier Name */}
            <div className="mb-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-2">
                {tier.name}
              </h3>
              <div className="text-2xl font-medium text-brand-black">
                {tier.price}
              </div>
              <div className="text-sm mt-1 text-neutral-500">
                {tier.description}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-neutral-200 mb-6" />

            {/* Examples */}
            <ul className="space-y-3 flex-grow">
              {tier.examples.map((example, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  {example}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

      {/* Single CTA Button */}
      <div
        className="mt-10 text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
        }}
      >
        <button
          onClick={onContactClick}
          className="btn btn-primary btn-xl"
        >
          Falar conosco
        </button>
      </div>
    </div>
  )
}
