'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface BusinessProfile {
  type: string
  icon: React.ReactNode
  size: string
  location: string
  price: string
  priceLabel: string
  benefit: string
  benefitDetail: string
}

// Inline SVG icons (Lucide-style, 24x24)
const ToothIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5.5c-1.5-2-4-2.5-5.5-1.5S4 7 5 9.5c1 2.5 1.5 4 1 7 -.5 3 1 4.5 2.5 4.5s2-1.5 2.5-3.5c.3-1.2.7-2 1-2s.7.8 1 2c.5 2 1 3.5 2.5 3.5s3-1.5 2.5-4.5c-.5-3 0-4.5 1-7 1-2.5-.5-4.5-2-5.5S13.5 3.5 12 5.5z" />
  </svg>
)

const CalculatorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="8" y2="10.01" />
    <line x1="12" y1="10" x2="12" y2="10.01" />
    <line x1="16" y1="10" x2="16" y2="10.01" />
    <line x1="8" y1="14" x2="8" y2="14.01" />
    <line x1="12" y1="14" x2="12" y2="14.01" />
    <line x1="16" y1="14" x2="16" y2="14.01" />
    <line x1="8" y1="18" x2="8" y2="18.01" />
    <line x1="12" y1="18" x2="16" y2="18" />
  </svg>
)

const LeafIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12" />
    <path d="M12 12c0-5.5 5.5-9.5 11-9.5-1.5 5.5-5.5 9.5-11 9.5z" />
    <path d="M12 16c0-4-4-7-8-7 1 4 4 7 8 7z" />
  </svg>
)

const WarehouseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21V8l9-5 9 5v13" />
    <path d="M3 21h18" />
    <path d="M9 21v-6h6v6" />
    <path d="M7 11h2" />
    <path d="M15 11h2" />
    <path d="M7 15h2" />
    <path d="M15 15h2" />
  </svg>
)

const profiles: BusinessProfile[] = [
  {
    type: 'Clínica Odontológica',
    icon: <ToothIcon />,
    size: '12 profissionais',
    location: 'Belo Horizonte, MG',
    price: 'R$900',
    priceLabel: '/mês',
    benefit: 'R$6.000/mês',
    benefitDetail: 'Consultas recuperadas e menos tempo administrativo (7x)',
  },
  {
    type: 'Escritório de Contabilidade',
    icon: <CalculatorIcon />,
    size: '6 colaboradores',
    location: 'Belo Horizonte, MG',
    price: 'R$900',
    priceLabel: '/mês',
    benefit: 'R$4.500/mês',
    benefitDetail: 'Mais produtividade e menos retrabalho (5x)',
  },
  {
    type: 'Cooperativa de Café',
    icon: <LeafIcon />,
    size: '50 produtores',
    location: 'Sul de Minas, MG',
    price: 'R$3.000',
    priceLabel: '/mês',
    benefit: 'R$18.000/mês',
    benefitDetail: 'Coordenação de fornecedores e documentação no automático (6x)',
  },
  {
    type: 'Distribuidora de Insumos Agrícolas',
    icon: <WarehouseIcon />,
    size: '15 funcionários',
    location: 'Triângulo Mineiro, MG',
    price: 'R$2.000',
    priceLabel: '/mês',
    benefit: 'R$10.000/mês',
    benefitDetail: 'Pedidos e estoque automatizados, zero retrabalho (5x)',
  },
]

export default function BusinessProfilesSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <div ref={ref}>
      {/* Section header */}
      <div
        className="text-center mb-16"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          Negócios como o seu<br />
          já automatizam com a gente
        </h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
          De clínicas a cooperativas — automação funciona em qualquer escala.
        </p>
      </div>

      {/* Profile cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="rounded-xl px-6 py-6 bg-[#f5f5f7] border-2 border-brand-secondary transition-all duration-200 hover:-translate-y-0.5"
            style={{
              boxShadow: '3px 4px 12px rgba(0, 0, 0, 0.08)',
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              opacity: isVisible ? 1 : 0,
              transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${150 + index * 80}ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${150 + index * 80}ms`,
            }}
          >
            {/* Icon + Business identity */}
            <div className="flex items-start gap-3 mb-5">
              <div className="text-brand-secondary flex-shrink-0 mt-0.5">
                {profile.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-black leading-snug">
                  {profile.type}
                </h3>
                <p className="text-base text-neutral-500 mt-0.5">
                  {profile.size} · {profile.location}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-200 mb-5" />

            {/* Cost & Return side by side */}
            <div className="flex items-end gap-6 mb-5">
              <div>
                <p className="text-base font-medium text-neutral-500 mb-0.5">Investimento</p>
                <p className="text-2xl font-bold text-brand-black whitespace-nowrap">
                  {profile.price}<span className="text-base font-normal text-neutral-500">{profile.priceLabel}</span>
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-neutral-500 mb-0.5">Retorno</p>
                <p className="text-2xl font-bold text-brand-secondary whitespace-nowrap">
                  {profile.benefit}
                </p>
              </div>
            </div>

            {/* Benefit explanation */}
            <p className="text-base text-neutral-600 leading-relaxed">
              {profile.benefitDetail}
            </p>
          </div>
        ))}
      </div>

      {/* Summary totals */}
      <div
        className="mt-10 rounded-xl px-8 py-8 bg-brand-primary text-center"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 600ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 600ms',
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-5">
          <div>
            <p className="text-lg font-medium text-white mb-1">Assinatura total</p>
            <p className="text-4xl md:text-5xl font-bold text-white">R$6.800<span className="text-xl font-normal text-white">/mês</span></p>
          </div>
          <div className="hidden md:block w-px h-14 bg-white/30" />
          <div>
            <p className="text-lg font-medium text-white mb-1">Retorno acumulado</p>
            <p className="text-4xl md:text-5xl font-bold text-white">R$38.500<span className="text-xl font-normal text-white">/mês</span></p>
          </div>
          <div className="hidden md:block w-px h-14 bg-white/30" />
          <div>
            <p className="text-lg font-medium text-white mb-1">ROI médio</p>
            <p className="text-4xl md:text-5xl font-bold text-white">5,7x</p>
          </div>
        </div>
        <p className="text-lg text-white max-w-lg mx-auto">
          Quatro negócios reais, um resultado em comum: automação que se paga no primeiro mês.
        </p>
      </div>
    </div>
  )
}
