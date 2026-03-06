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

const ShoppingBagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const HeartPulseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
    <path d="M5 12h2l2 3 4-6 2 3h4" />
  </svg>
)

const StoreIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l1-4h16l1 4" />
    <path d="M3 9v1a3 3 0 0 0 6 0V9" />
    <path d="M9 9v1a3 3 0 0 0 6 0V9" />
    <path d="M15 9v1a3 3 0 0 0 6 0V9" />
    <path d="M4 10v10h16V10" />
    <path d="M9 20v-6h6v6" />
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
    type: 'Loja de Roupas Online',
    icon: <ShoppingBagIcon />,
    size: '800 pedidos/mês',
    location: 'Belo Horizonte, MG',
    price: 'R$2.000',
    priceLabel: '/mês',
    benefit: 'R$15.000/mês',
    benefitDetail: 'Vendas recuperadas e redução de erros operacionais (7.5x)',
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
    type: 'Rede de Pet Shops',
    icon: <StoreIcon />,
    size: '3 unidades, 40 funcionários',
    location: 'São Paulo, SP',
    price: 'R$2.000',
    priceLabel: '/mês',
    benefit: 'R$8.000/mês',
    benefitDetail: 'Estoque otimizado e gestão centralizada (4x)',
  },
  {
    type: 'Hospital Regional',
    icon: <HospitalIcon />,
    size: '150 leitos',
    location: 'São Paulo, SP',
    price: 'R$5.000',
    priceLabel: '/mês',
    benefit: 'R$50.000/mês',
    benefitDetail: 'Ocupação de leitos e integração de sistemas (10x)',
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
          De escritórios com 5 pessoas a hospitais com 150 leitos — automação funciona em qualquer escala.
        </p>
      </div>

      {/* Profile cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="rounded-xl px-7 py-8 bg-[#274855] shadow-card hover:shadow-card-hover transition-all duration-base ease-spring hover:-translate-y-0.5"
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
