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

const HeartPulseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
    <path d="M5 12h2l2 3 4-6 2 3h4" />
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

const HospitalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
    <path d="M9 21v-4h6v4" />
    <path d="M10 9h4" />
    <path d="M12 7v4" />
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
    type: 'Clínica de Fisioterapia',
    icon: <HeartPulseIcon />,
    size: '25 profissionais',
    location: 'Belo Horizonte, MG',
    price: 'R$2.000',
    priceLabel: '/mês',
    benefit: 'R$12.000/mês',
    benefitDetail: 'Menos glosas e maior eficiência operacional (6x)',
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
  {
    type: 'Clínica Médica',
    icon: <HospitalIcon />,
    size: '20 profissionais',
    location: 'Belo Horizonte, MG',
    price: 'R$2.000',
    priceLabel: '/mês',
    benefit: 'R$12.000/mês',
    benefitDetail: 'Faturamento e documentação sem esforço manual (6x)',
  },
]

export default function BusinessProfilesSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <div ref={ref}>
      {/* Section header */}
      <div
        className="mb-12 md:mb-14"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          Negócios como o seu já automatizam com a gente
        </h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-lg">
          De clínicas a cooperativas — automação funciona em qualquer escala.
        </p>
      </div>

      {/* Profile cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="rounded-xl px-7 py-8 bg-brand-black shadow-card hover:shadow-card-hover transition-all duration-base ease-spring hover:-translate-y-0.5"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              opacity: isVisible ? 1 : 0,
              transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${150 + index * 80}ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${150 + index * 80}ms`,
            }}
          >
            {/* Icon */}
            <div className="mb-3 text-[#fafafa]">
              {profile.icon}
            </div>

            {/* Business identity */}
            <h3 className="text-xl font-semibold text-white leading-snug mb-1">
              {profile.type}
            </h3>
            <p className="text-base text-[#fafafa] mb-6">
              {profile.size} · {profile.location}
            </p>

            {/* Divider */}
            <div className="border-t border-white/20 mb-8" />

            {/* Cost & Return side by side */}
            <div className="flex items-end gap-6 mb-8">
              <div>
                <p className="text-base text-[#fafafa] mb-1">Investimento</p>
                <p className="text-2xl font-bold text-white whitespace-nowrap">
                  {profile.price}<span className="text-base font-normal text-[#fafafa]">{profile.priceLabel}</span>
                </p>
              </div>
              <div>
                <p className="text-base text-[#fafafa] mb-1">Retorno</p>
                <p className="text-2xl font-bold text-[#6ee7b7] whitespace-nowrap">
                  {profile.benefit}
                </p>
              </div>
            </div>

            {/* Benefit explanation */}
            <p className="text-base text-[#fafafa]">
              {profile.benefitDetail}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
