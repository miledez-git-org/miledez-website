'use client'

import { useState, useEffect, useRef } from 'react'

interface BenefitCard {
  id: number
  headline: string
  description: string
  accentColor: string
  icon: React.ReactNode
  visual: React.ReactNode
}

// Animated visual components for each card
function GearAnimation({ isActive }: { isActive: boolean }) {
  return (
    <div className="flex items-center gap-3 mt-4">
      <div
        className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center"
        style={{
          animation: isActive ? 'spin 8s linear infinite' : 'none',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      </div>
      <div
        className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"
        style={{
          animation: isActive ? 'spin 6s linear infinite reverse' : 'none',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      </div>
      <span className="text-sm text-amber-700 font-medium">Sob medida</span>
    </div>
  )
}

function IntegrationAnimation({ isActive }: { isActive: boolean }) {
  const logos = [
    { bg: '#4285F4', letter: 'G' },
    { bg: '#0A66C2', letter: 'in' },
    { bg: '#25D366', letter: 'W' },
    { bg: '#FF6B00', letter: 'H' },
  ]

  return (
    <div className="flex items-center gap-2 mt-4">
      {logos.map((logo, i) => (
        <div
          key={i}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
          style={{
            backgroundColor: logo.bg,
            opacity: isActive ? 1 : 0.5,
            transform: isActive ? 'scale(1)' : 'scale(0.9)',
            transition: `all 400ms ease ${i * 100}ms`,
          }}
        >
          {logo.letter}
        </div>
      ))}
      <div
        className="ml-1 flex items-center gap-1"
        style={{
          opacity: isActive ? 1 : 0,
          transition: 'opacity 600ms ease 400ms',
        }}
      >
        <span className="text-teal-600 text-lg">+</span>
        <span className="text-sm text-teal-700 font-medium">Conectado</span>
      </div>
    </div>
  )
}

function ProgressAnimation({ isActive }: { isActive: boolean }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setProgress(100), 100)
      return () => clearTimeout(timer)
    } else {
      setProgress(0)
    }
  }, [isActive])

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-emerald-600 font-medium">Implementação</span>
        <span className="text-xs text-emerald-700 font-bold">3 dias</span>
      </div>
      <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full"
          style={{
            width: `${progress}%`,
            transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>
      <div className="flex justify-between mt-1.5 text-xs text-emerald-600/60">
        <span>Início</span>
        <span>Entrega</span>
      </div>
    </div>
  )
}

function RiskFreeAnimation({ isActive }: { isActive: boolean }) {
  return (
    <div className="flex items-center gap-3 mt-4">
      <div
        className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg"
        style={{
          opacity: isActive ? 1 : 0.5,
          transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
          transition: 'all 400ms ease',
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2.5"
          style={{
            opacity: isActive ? 1 : 0,
            transition: 'opacity 400ms ease 200ms',
          }}
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
        <span className="text-sm font-bold text-blue-700">R$ 0</span>
        <span className="text-xs text-blue-600">inicial</span>
      </div>
      <div
        className="text-xs text-blue-600"
        style={{
          opacity: isActive ? 1 : 0,
          transition: 'opacity 400ms ease 400ms',
        }}
      >
        Cancele quando quiser
      </div>
    </div>
  )
}

const benefits: BenefitCard[] = [
  {
    id: 1,
    headline: 'Personalizado para seu negócio',
    description: 'Soluções 100% customizadas para suas necessidades específicas. Nada de templates genéricos.',
    accentColor: '#b45309', // amber
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    visual: <GearAnimation isActive={false} />,
  },
  {
    id: 2,
    headline: 'Conectamos com seus sistemas',
    description: 'Integramos com as ferramentas que você já usa. Você não precisa mudar nada na sua operação.',
    accentColor: '#0d9488', // teal
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 17a3 3 0 100-6 3 3 0 000 6z" />
        <path d="M17 14v3h3" />
      </svg>
    ),
    visual: <IntegrationAnimation isActive={false} />,
  },
  {
    id: 3,
    headline: 'Pronto em dias, não semanas',
    description: 'Implementação rápida sem projetos longos ou burocracia. Você vê resultados desde a primeira semana.',
    accentColor: '#059669', // emerald
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    visual: <ProgressAnimation isActive={false} />,
  },
  {
    id: 4,
    headline: 'Sem investimento, sem risco',
    description: 'Apenas mensalidade. Cancele quando quiser, sem multas ou surpresas. Você só paga enquanto faz sentido.',
    accentColor: '#2563eb', // blue
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    visual: <RiskFreeAnimation isActive={false} />,
  },
]

export default function ValueProposition() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardId = Number(entry.target.getAttribute('data-card-id'))
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(cardId))
          }
        })
      },
      { threshold: 0.3 }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {/* Section header */}
      <div className="mb-12 md:mb-16 text-center">
        <p className="text-xs font-semibold text-brand-muted uppercase tracking-[0.15em] mb-4">
          Por que a mil&dez
        </p>
        <h2 className="heading-section text-[2rem] md:text-[2.5rem] text-brand-black">
          Automação que entrega resultado
        </h2>
      </div>

      {/* Benefits grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {benefits.map((benefit, index) => {
          const isHovered = hoveredCard === benefit.id
          const isVisible = visibleCards.has(benefit.id)
          const isActive = isHovered || isVisible

          return (
            <div
              key={benefit.id}
              ref={(el) => { cardRefs.current[index] = el }}
              data-card-id={benefit.id}
              className="bg-white p-8 lg:p-10 transition-all duration-300 relative overflow-hidden"
              style={{
                borderLeft: `4px solid ${benefit.accentColor}`,
                boxShadow: isHovered
                  ? '0 0 0 1px rgba(0,0,0,0.03), 0 8px 24px rgba(0,0,0,0.08)'
                  : '0 0 0 1px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)',
                transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setHoveredCard(benefit.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  backgroundColor: `${benefit.accentColor}15`,
                  color: benefit.accentColor,
                }}
              >
                {benefit.icon}
              </div>

              {/* Headline */}
              <h3 className="text-xl font-semibold text-brand-black mb-3 leading-tight">
                {benefit.headline}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-brand-muted">
                {benefit.description}
              </p>

              {/* Animated visual element */}
              <div className="mt-2">
                {benefit.id === 1 && <GearAnimation isActive={isActive} />}
                {benefit.id === 2 && <IntegrationAnimation isActive={isActive} />}
                {benefit.id === 3 && <ProgressAnimation isActive={isActive} />}
                {benefit.id === 4 && <RiskFreeAnimation isActive={isActive} />}
              </div>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
