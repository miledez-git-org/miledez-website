'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface BusinessProfile {
  type: string
  size: string
  subscription: string
  savings: string
  benefitDetail: string
}

const profiles: BusinessProfile[] = [
  {
    type: 'Clínica Odontológica',
    size: '12 profissionais',
    subscription: 'R$900',
    savings: 'R$6.000',
    benefitDetail: 'Consultas recuperadas e menos tempo administrativo',
  },
  {
    type: 'Escritório de Contabilidade',
    size: '6 colaboradores',
    subscription: 'R$900',
    savings: 'R$4.500',
    benefitDetail: 'Mais produtividade e menos retrabalho',
  },
  {
    type: 'Cooperativa de Café',
    size: '50 produtores',
    subscription: 'R$3.000',
    savings: 'R$18.000',
    benefitDetail: 'Coordenação de fornecedores no automático',
  },
  {
    type: 'Distribuidora de Insumos',
    size: '15 funcionários',
    subscription: 'R$2.000',
    savings: 'R$10.000',
    benefitDetail: 'Pedidos e estoque automatizados',
  },
]

interface BusinessProfilesSectionProps {
  onContactClick?: () => void
}

export default function BusinessProfilesSection({ onContactClick }: BusinessProfilesSectionProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <div ref={ref}>
      {/* Section header */}
      <div
        className="mb-12"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          Negócios como o seu{' '}
          <span className="text-brand-primary">já automatizam com a gente</span>
        </h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-xl">
          De clínicas a cooperativas — automação que se paga no primeiro mês.
        </p>
      </div>

      {/* 2x2 profile grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {profiles.map((profile, index) => {
          const delay = 150 + index * 100

          return (
            <div
              key={index}
              className="bg-white border border-neutral-200 p-8"
              style={{
                boxShadow: '4px 6px 16px rgba(0,0,0,0.10)',
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
              }}
            >
              {/* Business info */}
              <h3 className="text-xl font-semibold text-brand-black">
                {profile.type}
              </h3>
              <p className="text-sm text-neutral-500 mt-1">
                {profile.size} · {profile.benefitDetail}
              </p>

              {/* Subscription vs Savings comparison */}
              <div className="mt-6 flex items-end gap-4">
                {/* Subscription — subdued */}
                <div>
                  <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Assinatura</p>
                  <span className="block text-2xl font-medium text-brand-black">
                    {profile.subscription}
                  </span>
                  <p className="text-sm text-neutral-500">/mês</p>
                </div>

                {/* Arrow */}
                <div className="text-xl text-neutral-300 pb-3">→</div>

                {/* Savings — bold burgundy */}
                <div>
                  <p className="text-xs font-medium text-brand-primary uppercase tracking-wider">Economia</p>
                  <span className="block text-4xl font-bold tracking-tight text-brand-primary">
                    {profile.savings}
                  </span>
                  <p className="text-sm text-brand-primary font-medium">/mês</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* CTAs */}
      <div className="mt-12 flex flex-wrap gap-4">
        <button
          onClick={onContactClick}
          className="btn btn-primary btn-lg"
        >
          Falar com a gente
        </button>
        <a
          href="#como-funciona"
          className="btn btn-outline btn-lg"
        >
          Como começar
        </a>
      </div>
    </div>
  )
}
