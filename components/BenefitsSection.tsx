'use client'

import { useState } from 'react'
import { useCountUp } from '@/hooks/useCountUp'
import {
  UsersFloatIcon,
  ClockRotateIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  CalculatorPulseIcon,
} from '@/components/AnimatedIcons'

const benefits = [
  {
    id: 1,
    Icon: UsersFloatIcon,
    headline: 'Sua equipe livre para o que importa',
    copy: 'Tarefas repetitivas consomem até 40% do dia da sua equipe. Automações assumem o trabalho operacional — sua equipe foca em clientes, estratégia e crescimento.',
  },
  {
    id: 2,
    Icon: ClockRotateIcon,
    headline: 'Funciona enquanto você dorme',
    copy: 'Processos executados automaticamente, sem depender de horário comercial ou disponibilidade da equipe. Consistência garantida, dia e noite.',
  },
  {
    id: 3,
    Icon: ShieldCheckIcon,
    headline: 'Zero erros humanos',
    copy: 'Automações não esquecem, não digitam errado, não pulam etapas. Elimine retrabalho e erros que custam dinheiro e credibilidade.',
  },
  {
    id: 4,
    Icon: TrendingUpIcon,
    headline: 'Escale sem contratar',
    copy: 'Aumente sua capacidade operacional sem aumentar folha de pagamento. Cresça com a mesma equipe — ou até menor.',
  },
  {
    id: 5,
    Icon: CalculatorPulseIcon,
    headline: 'Retorno comprovado',
    copy: 'das empresas veem retorno positivo no primeiro ano. Investimento que se paga — não despesa que some no orçamento.',
    hasCounter: true,
    counterValue: 76,
  },
]

export default function BenefitsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const { count, ref: counterRef } = useCountUp({ end: 76, duration: 1500 })

  return (
    <>
      {/* Section Header */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">
          Por que automatizar?
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => {
          const isHovered = hoveredCard === benefit.id
          const gridClasses = getGridClasses(index)

          if (benefit.hasCounter) {
            return (
              <div
                key={benefit.id}
                ref={counterRef}
                className={`group bg-white border border-brand-border p-8 transition-colors ${gridClasses} ${
                  isHovered ? 'border-brand-accent' : ''
                }`}
                onMouseEnter={() => setHoveredCard(benefit.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon */}
                <div className="mb-6 text-brand-black">
                  <benefit.Icon isHovered={isHovered} />
                </div>

                {/* Counter + Headline */}
                <h3 className="text-xl font-semibold mb-3 text-brand-black">
                  <span className="text-3xl font-bold text-brand-accent">
                    {count}%
                  </span>{' '}
                  {benefit.headline}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed text-brand-muted">
                  {benefit.copy}
                </p>
              </div>
            )
          }

          return (
            <div
              key={benefit.id}
              className={`group bg-white border border-brand-border p-8 transition-colors ${gridClasses} ${
                isHovered ? 'border-brand-accent' : ''
              }`}
              onMouseEnter={() => setHoveredCard(benefit.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon */}
              <div className="mb-6 text-brand-black">
                <benefit.Icon isHovered={isHovered} />
              </div>

              {/* Headline */}
              <h3 className="text-xl font-semibold mb-3 text-brand-black">
                {benefit.headline}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-brand-muted">
                {benefit.copy}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

function getGridClasses(index: number): string {
  switch (index) {
    case 0:
      // Benefit 1: Featured (spans 2 rows on desktop)
      return 'lg:row-span-2'
    case 1:
    case 2:
      // Benefits 2 & 3: Standard cards
      return ''
    case 3:
      // Benefit 4: Spans 2 columns on desktop
      return 'md:col-span-2 lg:col-span-2'
    case 4:
      // Benefit 5: Full width (spans all 3 columns on desktop)
      return 'md:col-span-2 lg:col-span-3'
    default:
      return ''
  }
}
