'use client'

import { useState } from 'react'
import { useCountUp } from '@/hooks/useCountUp'
import {
  HourglassIcon,
  Clock24Icon,
  SparklesIcon,
  TrendingUpIcon,
  RocketIcon,
} from '@/components/AnimatedIcons'

const benefits = [
  {
    id: 1,
    Icon: HourglassIcon,
    headline: 'Libere sua equipe do trabalho repetitivo',
    description:
      'Tarefas administrativas e repetitivas consomem o tempo mais valioso da sua equipe. Automações eliminam esse trabalho — sua equipe foca em clientes, vendas e crescimento.',
    stat: '40%*',
    statLabel: 'do tempo da equipe economizado',
  },
  {
    id: 2,
    Icon: Clock24Icon,
    headline: 'Produtividade 24 horas por dia',
    description:
      'Automações executam tarefas a qualquer momento — madrugada, fim de semana, feriado. Sua operação nunca para, mesmo quando sua equipe descansa.',
    stat: '24/7',
    statLabel: 'operação contínua',
  },
  {
    id: 3,
    Icon: SparklesIcon,
    headline: 'Resultados consistentes e superiores',
    description:
      'Respostas a clientes, processamento de documentos, geração de insights — tudo executado com velocidade e precisão impossíveis para humanos. Qualidade que impulsiona o crescimento.',
    stat: '10x*',
    statLabel: 'mais rápido que processos manuais',
  },
  {
    id: 4,
    Icon: TrendingUpIcon,
    headline: 'Venda mais sem contratar mais',
    description:
      'Aumente sua capacidade de atendimento e vendas sem aumentar a folha de pagamento. Cresça sua operação mantendo a mesma equipe — ou até reduzindo.',
    stat: '+300%*',
    statLabel: 'de capacidade operacional',
  },
]

const featuredBenefit = {
  id: 5,
  Icon: RocketIcon,
  headline: 'Retorno imediato e comprovado',
  description:
    'Cada processo automatizado gera retorno mensurável desde o primeiro mês. Não é despesa — é investimento que se multiplica.',
  statLabel: 'de retorno sobre investimento',
}

export default function BenefitsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const { count, ref: counterRef } = useCountUp({ end: 10, duration: 2000 })

  return (
    <>
      {/* Section Header */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">
          Por que automatizar?
        </h2>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Benefits 1-4: Regular cards */}
        {benefits.map((benefit) => {
          const isHovered = hoveredCard === benefit.id

          return (
            <div
              key={benefit.id}
              className={`group bg-white border p-8 transition-all duration-300 flex flex-col h-full ${
                isHovered
                  ? 'border-brand-secondary shadow-[0_4px_12px_rgba(0,0,0,0.05)]'
                  : 'border-brand-border'
              }`}
              onMouseEnter={() => setHoveredCard(benefit.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon */}
              <div className="mb-6 text-brand-black">
                <benefit.Icon isHovered={isHovered} />
              </div>

              {/* Headline */}
              <h3 className="text-xl font-semibold mb-3 text-brand-black leading-tight">
                {benefit.headline}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-brand-muted mb-6 flex-grow">
                {benefit.description}
              </p>

              {/* Stat Block */}
              <div className="mt-auto bg-neutral-50 border-l-[3px] border-brand-secondary p-4">
                <span className="block text-[28px] md:text-[32px] font-bold text-brand-secondary leading-tight">
                  {benefit.stat}
                </span>
                <span className="block text-sm text-brand-muted mt-1">
                  {benefit.statLabel}
                </span>
              </div>
            </div>
          )
        })}

        {/* Benefit 5: Featured full-width card */}
        <div
          ref={counterRef}
          className={`md:col-span-2 bg-gradient-to-br from-white to-neutral-50 border p-8 md:p-10 text-center transition-all duration-300 ${
            hoveredCard === 5
              ? 'border-brand-secondary shadow-[0_4px_12px_rgba(0,0,0,0.05)]'
              : 'border-brand-border'
          }`}
          onMouseEnter={() => setHoveredCard(5)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Icon */}
          <div className="mb-6 text-brand-black flex justify-center">
            <featuredBenefit.Icon isHovered={hoveredCard === 5} />
          </div>

          {/* Headline */}
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-brand-black">
            {featuredBenefit.headline}
          </h3>

          {/* Description */}
          <p className="text-base leading-relaxed text-brand-muted mb-6 max-w-xl mx-auto">
            {featuredBenefit.description}
          </p>

          {/* Featured Stat Block */}
          <div className="mt-6">
            <span className="block text-4xl md:text-5xl font-bold text-brand-secondary leading-tight">
              {count <= 5 ? count : 5}x a {count}x*
            </span>
            <span className="block text-sm text-brand-muted mt-2">
              {featuredBenefit.statLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Footnote */}
      <p className="mt-8 text-center text-xs text-brand-muted">
        *Resultados típicos baseados em automações similares
      </p>
    </>
  )
}
