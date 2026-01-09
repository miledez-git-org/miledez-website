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

function MetricBar({ value, isVisible, delay }: { value: number; isVisible: boolean; delay: number }) {
  return (
    <div className="w-full h-1 bg-brand-border mt-3">
      <div
        className="h-full bg-brand-accent"
        style={{
          width: `${value}%`,
          transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        }}
      />
    </div>
  )
}

function MetricArrow({ isVisible, delay }: { isVisible: boolean; delay: number }) {
  return (
    <div
      className="flex items-center gap-1 mt-3 text-brand-accent"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
        opacity: isVisible ? 1 : 0,
        transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
      </svg>
      <span className="text-xs font-medium">Crescimento</span>
    </div>
  )
}

function parseValue(value: string): number {
  // Extract numeric value from strings like "70%", "50%", "100%"
  const match = value.match(/(\d+)/)
  return match ? parseInt(match[1], 10) : 0
}

export default function MetricsGrid({ metrics }: MetricsGridProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {metrics.map((metric, index) => {
        const delay = 100 + index * 150
        const numericValue = parseValue(metric.value)

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
            <span
              className="text-4xl lg:text-5xl font-medium text-brand-accent"
              style={{
                display: 'block',
              }}
            >
              {metric.value}
            </span>

            {/* Label */}
            <p className="mt-3 text-sm text-brand-text leading-relaxed">
              {metric.label}
            </p>

            {/* Visualization based on type */}
            {metric.type === 'percentage' && numericValue > 0 && (
              <MetricBar value={numericValue} isVisible={isVisible} delay={delay + 200} />
            )}
            {metric.type === 'multiplier' && (
              <MetricArrow isVisible={isVisible} delay={delay + 200} />
            )}
          </div>
        )
      })}
    </div>
  )
}
