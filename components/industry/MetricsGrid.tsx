'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface Metric {
  value: string
  label: string
  type: 'percentage' | 'multiplier' | 'absolute'
}

interface MetricsGridProps {
  metrics: Metric[]
}

function AccentBar({ isVisible, delay }: { isVisible: boolean; delay: number }) {
  return (
    <div
      className="h-0.5 mt-4 bg-brand-secondary"
      style={{
        width: isVisible ? '60%' : '0%',
        transition: `width 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    />
  )
}

function GrowthArrow({ isVisible, delay }: { isVisible: boolean; delay: number }) {
  return (
    <div
      className="flex items-center gap-1.5 mt-4 text-brand-secondary"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
        opacity: isVisible ? 1 : 0,
        transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
      </svg>
      <span className="text-xs font-medium tracking-wide">Crescimento</span>
    </div>
  )
}

export default function MetricsGrid({ metrics }: MetricsGridProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <div ref={ref} className="grid grid-cols-2 gap-8">
      {metrics.map((metric, index) => {
        const delay = 100 + index * 150

        return (
          <div
            key={index}
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              opacity: isVisible ? 1 : 0,
              transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
            }}
          >
            {/* Value */}
            <span className="block text-4xl lg:text-5xl font-medium tracking-tight text-brand-primary">
              {metric.value}
            </span>

            {/* Label */}
            <p className="mt-1 text-lg font-medium text-neutral-600 leading-relaxed">
              {metric.label}
            </p>

            {/* Visualization based on type */}
            {metric.type === 'multiplier' ? (
              <GrowthArrow isVisible={isVisible} delay={delay + 200} />
            ) : (
              <AccentBar isVisible={isVisible} delay={delay + 200} />
            )}
          </div>
        )
      })}
    </div>
  )
}
