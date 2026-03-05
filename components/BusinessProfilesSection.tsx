'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface BusinessProfile {
  type: string
  icon: React.ReactNode
  size: string
  location: string
  automations: string[]
  priceHint: string
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

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const profiles: BusinessProfile[] = [
  {
    type: 'Clínica Odontológica',
    icon: <ToothIcon />,
    size: '12 profissionais',
    location: 'Belo Horizonte, MG',
    automations: [
      'Confirmação de consulta por WhatsApp',
      'Relatório semanal de faturamento',
    ],
    priceHint: 'a partir de R$900/mês',
  },
  {
    type: 'Escritório de Contabilidade',
    icon: <CalculatorIcon />,
    size: '6 colaboradores',
    location: 'Curitiba, PR',
    automations: [
      'Coleta automática de documentos',
      'Alerta de prazos fiscais',
    ],
    priceHint: 'a partir de R$900/mês',
  },
  {
    type: 'Loja de Roupas Online',
    icon: <ShoppingBagIcon />,
    size: '~800 pedidos/mês',
    location: 'São Paulo, SP',
    automations: [
      'Sincronização estoque + marketplace',
      'Rastreamento automático por WhatsApp',
    ],
    priceHint: 'a partir de R$2.000/mês',
  },
  {
    type: 'Clínica de Fisioterapia',
    icon: <HeartPulseIcon />,
    size: '25 profissionais',
    location: 'Recife, PE',
    automations: [
      'Prontuário eletrônico integrado',
      'Aprovação de convênio automatizada',
    ],
    priceHint: 'a partir de R$2.000/mês',
  },
  {
    type: 'Rede de Pet Shops',
    icon: <StoreIcon />,
    size: '3 unidades, 40 funcionários',
    location: 'Goiânia, GO',
    automations: [
      'Dashboard consolidado de vendas',
      'Reposição de estoque automatizada',
    ],
    priceHint: 'a partir de R$2.000/mês',
  },
  {
    type: 'Hospital Regional',
    icon: <HospitalIcon />,
    size: '150 leitos',
    location: 'Campinas, SP',
    automations: [
      'Gestão de leitos com IA',
      'Integração entre sistemas legados',
    ],
    priceHint: 'sob consulta',
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
            className="border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              opacity: isVisible ? 1 : 0,
              transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${150 + index * 80}ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${150 + index * 80}ms`,
            }}
          >
            {/* Icon + Business type */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-primary-subtle text-brand-primary flex items-center justify-center">
                {profile.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-black leading-snug">
                {profile.type}
              </h3>
            </div>

            {/* Size + Location */}
            <div className="text-sm text-neutral-500 mb-4">
              <span>{profile.size}</span>
              <span className="mx-1.5">·</span>
              <span>{profile.location}</span>
            </div>

            {/* Automations */}
            <ul className="space-y-2 mb-4">
              {profile.automations.map((automation, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                  <span className="flex-shrink-0 mt-0.5 text-brand-primary">
                    <CheckIcon />
                  </span>
                  {automation}
                </li>
              ))}
            </ul>

            {/* Price hint */}
            <div className="pt-3 border-t border-neutral-100">
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-wide">
                {profile.priceHint}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
