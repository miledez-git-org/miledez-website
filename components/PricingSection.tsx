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

      {/* Pricing Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <div
            key={tier.name}
            className="p-8 flex flex-col"
            style={{
              backgroundColor: '#8b2020',
              boxShadow: tier.featured
                ? '0 16px 48px rgba(139, 32, 32, 0.4), 0 4px 12px rgba(0, 0, 0, 0.1)'
                : '0 12px 32px rgba(139, 32, 32, 0.3), 0 4px 8px rgba(0, 0, 0, 0.08)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
            }}
          >
            {/* Tier Name */}
            <div className="mb-6">
              <h3 className="text-sm font-medium uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {tier.name}
              </h3>
              <div className="text-2xl font-medium text-white">
                {tier.price}
              </div>
              <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {tier.description}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />

            {/* Examples */}
            <ul className="space-y-3 flex-grow">
              {tier.examples.map((example, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    style={{ color: 'rgba(255,255,255,0.6)' }}
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

      {/* Value Propositions - Below Tiers */}
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-16 pt-8"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
        }}
      >
        {valueProps.map((prop, index) => (
          <div
            key={prop.title}
            className="flex items-center gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
              transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${300 + index * 80}ms`,
            }}
          >
            <svg
              className="w-6 h-6 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              style={{ color: '#22c55e' }}
            >
              <path d="M5 12l5 5L20 7" />
            </svg>
            <span className="text-lg text-brand-text">
              <span className="font-semibold text-brand-black">{prop.title}</span>
              {' — '}
              {prop.description}
            </span>
          </div>
        ))}
      </div>

      {/* Single CTA Button */}
      <div
        className="mt-12 text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
        }}
      >
        <a
          href="https://calendar.app.google/3nqUQJDPymSrksKM8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 text-base font-medium text-white bg-brand-accent hover:bg-brand-accent-dark transition-colors"
        >
          Agendar diagnóstico
        </a>
      </div>
    </div>
  )
}
