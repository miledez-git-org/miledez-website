'use client'

import { useState } from 'react'

interface ValueCard {
  icon: React.ReactNode
  headline: string
  body: string
}

const icons = {
  roi: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  speed: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  insights: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
}

const cards: ValueCard[] = [
  {
    icon: icons.roi,
    headline: 'ROI em semanas',
    body: 'Automações personalizadas que pagam a si mesmas. Sem custos de desenvolvimento — apenas retainer mensal.',
  },
  {
    icon: icons.speed,
    headline: 'Implementação rápida',
    body: 'Começamos em dias. Sem projetos longos, sem mudanças no seu TI. Integração direta com seus sistemas atuais.',
  },
  {
    icon: icons.insights,
    headline: 'Dados que geram decisões',
    body: 'Dashboards automatizados, alertas inteligentes, visibilidade total das suas operações.',
  },
]

export default function ValueProposition() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {cards.map((card, index) => {
        const isHovered = hoveredCard === index

        return (
          <div
            key={index}
            className={`bg-white p-8 lg:p-10 transition-all duration-300 ${
              isHovered
                ? 'shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.08)]'
                : 'shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_4px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)]'
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 flex items-center justify-center mb-6 transition-colors duration-300 ${
                isHovered
                  ? 'text-brand-accent'
                  : 'text-brand-black'
              }`}
            >
              {card.icon}
            </div>

            {/* Headline */}
            <h3 className="text-xl font-semibold text-brand-black mb-3 leading-tight">
              {card.headline}
            </h3>

            {/* Body */}
            <p className="text-base leading-relaxed text-brand-muted">
              {card.body}
            </p>
          </div>
        )
      })}
      </div>
    </div>
  )
}
