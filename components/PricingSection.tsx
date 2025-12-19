'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface PricingTier {
  name: string
  price: string
  description: string
  examples: string[]
  cta: string
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
    cta: 'Começar agora',
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
    cta: 'Agendar diagnóstico',
    featured: true,
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
    cta: 'Falar com especialista',
  },
]

const valueProps = [
  {
    title: 'Sem contratos',
    description: 'Cancele quando quiser, sem multas',
  },
  {
    title: 'Diagnóstico gratuito',
    description: 'Entenda seu potencial antes de investir',
  },
  {
    title: 'Retorno garantido',
    description: 'Automação só faz sentido se pagar o investimento',
  },
]

export default function PricingSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <div ref={ref}>
      {/* Header */}
      <div className="mb-12 md:mb-16 text-center">
        <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">
          Investimento proporcional ao seu retorno
        </h2>
        <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto">
          Preço justo baseado na complexidade e escala do seu negócio
        </p>
      </div>

      {/* Value Propositions - Above Tiers */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {valueProps.map((prop, index) => (
          <div
            key={prop.title}
            className="flex items-center gap-4 p-6 border border-brand-border bg-white"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms`,
            }}
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-brand-accent">
              <svg
                className="w-5 h-5 text-brand-accent"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-medium text-brand-black">
                {prop.title}
              </h4>
              <p className="text-sm text-brand-muted mt-0.5">
                {prop.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <div
            key={tier.name}
            className={`border bg-white p-8 flex flex-col ${
              tier.featured ? 'border-brand-accent' : 'border-brand-border'
            }`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
            }}
          >
            {/* Tier Name */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-brand-muted uppercase tracking-wider mb-2">
                {tier.name}
              </h3>
              <div className="text-2xl font-medium text-brand-black">
                {tier.price}
              </div>
              <div className="text-sm text-brand-muted mt-1">
                {tier.description}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-brand-border mb-6" />

            {/* Examples */}
            <ul className="space-y-3 flex-grow mb-8">
              {tier.examples.map((example, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-brand-text">
                  <svg
                    className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5"
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

            {/* CTA */}
            <a
              href="https://calendar.app.google/3nqUQJDPymSrksKM8"
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full py-3 text-center text-sm font-medium transition-colors ${
                tier.featured
                  ? 'bg-brand-accent text-white hover:bg-brand-accent-dark'
                  : 'border border-brand-border text-brand-black hover:border-brand-accent hover:text-brand-accent'
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
