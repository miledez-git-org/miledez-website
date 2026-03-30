'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ValuePropositionBProps {
  onContactClick?: () => void
}

interface BenefitItem {
  icon: React.ReactNode
  title: string
  description: string
}

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const WalletIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z" />
  </svg>
)

const ShieldCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const SlidersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>
)

const benefits: BenefitItem[] = [
  {
    icon: <ClockIcon />,
    title: '3–7 dias para automações simples',
    description: 'Projetos maiores em 2–4 semanas. Sem interromper sua operação.',
  },
  {
    icon: <WalletIcon />,
    title: 'Sem custo inicial, sem contrato',
    description: 'Desenvolvimento e testes por nossa conta. Assinatura mensal, cancele em 30 dias. Você só paga quando funcionar.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Totalmente gerenciado por nós',
    description: 'Sua equipe não precisa fazer nada técnico. Cuidamos de A a Z.',
  },
  {
    icon: <SlidersIcon />,
    title: 'Feito para o seu processo',
    description: 'Nada de solução genérica. Cada automação é construída para o fluxo real da sua empresa.',
  },
]

export default function ValuePropositionB({ onContactClick }: ValuePropositionBProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
        {/* Left column - Narrative */}
        <div
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 100ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 100ms',
          }}
        >
          <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
            Podemos entregar sua primeira automação em dias.<br />
            <span className="text-brand-secondary">Totalmente personalizada para suas necessidades.</span>
          </h2>

          <div className="mt-6 space-y-4 text-lg text-neutral-600 leading-relaxed max-w-lg">
            <p>
              Nós construímos automações personalizadas para o processo real da sua empresa — conectando os sistemas que você já usa.
            </p>
            <p className="font-medium text-brand-black">
              Sem compromisso, sem investimento inicial e sem risco.
            </p>
          </div>

          <div className="mt-10">
            <button
              onClick={onContactClick}
              className="btn btn-primary btn-lg"
            >
              Teste grátis uma automação
            </button>
          </div>
        </div>

        {/* Right column - Stacked benefit items */}
        <div className="space-y-0">
          {benefits.map((benefit, index) => {
            const delay = 200 + index * 100

            return (
              <div
                key={index}
                className={`flex gap-4 py-5 ${index < benefits.length - 1 ? 'border-b border-neutral-100' : ''}`}
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
                }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 text-brand-primary flex items-center justify-center">
                  {benefit.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-brand-black">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-base text-neutral-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
