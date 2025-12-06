'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface MetricCardProps {
  label: string
  value: string
  trend?: 'up' | 'down'
  isVisible: boolean
  delay: number
}

function MetricCard({ label, value, trend, isVisible, delay }: MetricCardProps) {
  return (
    <div
      className="p-4 border-b border-[rgba(0,0,0,0.08)] last:border-0"
      style={{
        transform: isVisible ? 'translateX(0)' : 'translateX(16px)',
        transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-brand-muted uppercase tracking-wider">
          {label}
        </span>
        {trend && (
          <span className={trend === 'up' ? 'text-emerald-600' : 'text-brand-accent'}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {trend === 'up' ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              )}
            </svg>
          </span>
        )}
      </div>
      <div className="text-2xl font-medium text-brand-black">{value}</div>
    </div>
  )
}

function SparklineChart({ isVisible, delay }: { isVisible: boolean; delay: number }) {
  const pathLength = 120

  return (
    <svg
      className="w-full h-12"
      viewBox="0 0 120 40"
      preserveAspectRatio="none"
    >
      {/* Gradient fill */}
      <defs>
        <linearGradient id="sparklineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8b2020" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#8b2020" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Fill area */}
      <path
        d="M0,35 L20,28 L40,32 L60,20 L80,24 L100,12 L120,8 L120,40 L0,40 Z"
        fill="url(#sparklineGradient)"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: `opacity 0.6s ease-out ${delay + 400}ms`,
        }}
      />

      {/* Line */}
      <path
        d="M0,35 L20,28 L40,32 L60,20 L80,24 L100,12 L120,8"
        fill="none"
        stroke="#8b2020"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: pathLength,
          strokeDashoffset: isVisible ? 0 : pathLength,
          transition: `stroke-dashoffset 1.2s ease-out ${delay}ms`,
        }}
      />

      {/* End point */}
      <circle
        cx="120"
        cy="8"
        r="3"
        fill="#8b2020"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: `opacity 0.3s ease-out ${delay + 1000}ms`,
        }}
      />
    </svg>
  )
}

export default function AnalyticsDashboard() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <section ref={ref} className="py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Copy */}
        <div
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <span className="inline-block text-xs font-medium text-brand-accent uppercase tracking-wider mb-4">
            Interfaces personalizadas
          </span>
          <h2 className="text-[2rem] font-medium mb-6 text-brand-black tracking-[-0.02em]">
            Painéis e interfaces sob medida
          </h2>
          <p className="text-lg text-brand-text leading-relaxed mb-6">
            Criamos dashboards personalizados para visualizar os dados do seu negócio. Desenvolvemos páginas web e formulários integrados aos seus fluxos de automação.
          </p>
          <p className="text-base text-brand-muted">
            Construímos soluções front-end customizadas quando necessário, sempre como parte da sua automação.
          </p>
        </div>

        {/* Right: Dashboard visualization */}
        <div
          className="relative"
          style={{
            transform: isVisible
              ? 'perspective(1000px) rotateY(-3deg) rotateX(2deg)'
              : 'perspective(1000px) rotateY(-10deg) rotateX(5deg) translateY(20px)',
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Dashboard card */}
          <div className="bg-white border border-[rgba(0,0,0,0.08)] shadow-lg">
            {/* Dashboard header */}
            <div className="px-6 py-4 border-b border-[rgba(0,0,0,0.08)] flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500" />
              <span className="text-xs font-medium text-brand-muted uppercase tracking-wider">
                Exemplo de dashboard
              </span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 divide-x divide-[rgba(0,0,0,0.08)]">
              <MetricCard
                label="Horas economizadas"
                value="127h"
                trend="up"
                isVisible={isVisible}
                delay={200}
              />
              <MetricCard
                label="Taxa de erro"
                value="0.2%"
                trend="down"
                isVisible={isVisible}
                delay={300}
              />
              <MetricCard
                label="ROI médio"
                value="4.2x"
                trend="up"
                isVisible={isVisible}
                delay={400}
              />
            </div>

            {/* Chart */}
            <div className="px-6 py-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-brand-muted">
                  Produtividade (últimos 30 dias)
                </span>
                <span className="text-xs text-emerald-600 font-medium">+23%</span>
              </div>
              <SparklineChart isVisible={isVisible} delay={500} />
            </div>
          </div>

          {/* Decorative shadow */}
          <div
            className="absolute inset-0 bg-brand-black/5 -z-10"
            style={{
              transform: 'translateX(8px) translateY(8px)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
