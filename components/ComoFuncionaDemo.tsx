'use client'

import { useState } from 'react'

interface Benefit {
  icon: React.ReactNode
  headline: string
  stat: string
  statLabel: string
  description: string
}

// Outline icons (1.5px stroke, w-8 h-8)
const benefitIcons = {
  // Users/Team - Free your team
  team: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  // Clock - 24/7 operation
  clock: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  // Chart/ROI - Immediate return
  roi: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
}

const benefits: Benefit[] = [
  {
    icon: benefitIcons.team,
    headline: 'Sua equipe livre',
    stat: '40%',
    statLabel: 'do tempo economizado',
    description: 'Tarefas repetitivas desaparecem. Sua equipe foca no que importa: clientes, vendas, crescimento.',
  },
  {
    icon: benefitIcons.clock,
    headline: 'Operação 24/7',
    stat: '24h',
    statLabel: 'por dia, sem parar',
    description: 'Automações trabalham enquanto você dorme. Madrugada, fim de semana, feriado — sem parar.',
  },
  {
    icon: benefitIcons.roi,
    headline: 'Retorno imediato',
    stat: '5-10x',
    statLabel: 'ROI comprovado',
    description: 'ROI comprovado desde o primeiro mês. Não é despesa — é investimento que se multiplica.',
  },
]

export default function ComoFuncionaDemo() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {benefits.map((benefit, index) => {
          const isHovered = hoveredCard === index

          return (
            <div
              key={index}
              className={`bg-white border p-8 lg:p-10 transition-all duration-300 flex flex-col ${
                isHovered
                  ? 'border-brand-accent shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
                  : 'border-brand-border'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center border-l-[3px] bg-neutral-50 mb-6 transition-colors duration-300 ${
                  isHovered
                    ? 'border-l-brand-accent text-brand-accent'
                    : 'border-l-brand-accent text-brand-black'
                }`}
              >
                {benefit.icon}
              </div>

              {/* Stat - Large and prominent */}
              <div className="mb-4">
                <span className={`text-[3rem] lg:text-[3.5rem] font-bold leading-none transition-colors duration-300 ${
                  isHovered ? 'text-brand-accent' : 'text-brand-black'
                }`}>
                  {benefit.stat}
                </span>
                <span className="block text-sm text-brand-muted mt-1">
                  {benefit.statLabel}
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-xl font-semibold text-brand-black mb-3 leading-tight">
                {benefit.headline}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-brand-muted">
                {benefit.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Footnote */}
      <p className="mt-8 text-center text-xs text-brand-muted">
        *Resultados típicos baseados em automações similares
      </p>
    </>
  )
}
