'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ValuePropositionProps {
  onContactClick?: () => void
}

interface Metric {
  value: string
  label: string
}

const metrics: Metric[] = [
  { value: '3-7', label: 'dias para implementação' },
  { value: '100%', label: 'customizado para você' },
  { value: 'R$0', label: 'sem investimento, só mensalidade' },
  { value: '10x', label: 'multiplica sua produtividade' },
]

function AccentBar({ isVisible, delay }: { isVisible: boolean; delay: number }) {
  return (
    <div
      className="h-0.5 bg-brand-primary mt-4"
      style={{
        width: isVisible ? '60%' : '0%',
        transition: `width 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    />
  )
}

export default function ValueProposition({ onContactClick }: ValuePropositionProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <div>
      {/* Section header */}
      <div className="mb-12 md:mb-14 text-center">
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          Resultados em dias,<br />
          <span className="text-brand-primary">não meses</span>
        </h2>
        <p className="mt-4 text-lg text-brand-muted max-w-xl mx-auto">
          Automação pronta para usar. Sem projeto longo, sem equipe de TI.
        </p>
      </div>

      {/* Metrics Grid - centered with title */}
      <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 max-w-3xl mx-auto">
        {metrics.map((metric, index) => {
          const delay = 100 + index * 150

          return (
            <div
              key={index}
              className="text-center lg:text-left"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
              }}
            >
              {/* Value */}
              <span className="block text-4xl lg:text-5xl font-medium text-brand-primary tracking-tight">
                {metric.value}
              </span>

              {/* Label */}
              <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                {metric.label}
              </p>

              {/* Accent bar */}
              <div className="flex justify-center lg:justify-start">
                <AccentBar isVisible={isVisible} delay={delay + 200} />
              </div>
            </div>
          )
        })}
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-16">
        <button
          onClick={onContactClick}
          className="btn btn-primary btn-lg"
        >
          Agendar demonstração
        </button>
        <a
          href="#como-funciona"
          className="inline-flex items-center justify-center px-6 py-3 bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 font-medium rounded-lg transition-colors"
        >
          Veja como funciona
        </a>
      </div>
    </div>
  )
}
