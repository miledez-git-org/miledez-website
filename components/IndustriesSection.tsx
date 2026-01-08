'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// Decorative background icons
const backgroundIcons = {
  health: (
    <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1}>
      <path d="M24 42s-14-8.35-14-17.5c0-5.24 4.03-9.5 9-9.5 3.12 0 5.88 1.59 7.5 4 1.62-2.41 4.38-4 7.5-4 4.97 0 9 4.26 9 9.5 0 9.15-14 17.5-14 17.5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 24h6l2-4 4 8 2-4h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  services: (
    <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1}>
      <rect x="6" y="16" width="36" height="26" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 16V12a4 4 0 014-4h8a4 4 0 014 4v4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 26h36" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 26v4h8v-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  retail: (
    <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1}>
      <path d="M12 14h24l-3 28H15L12 14z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 14V10a6 6 0 1112 0v4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="28" r="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 24v-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

// Industry-specific gradient backgrounds (kept for reference, not used currently)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const gradients = {
  health: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
  services: 'linear-gradient(135deg, #fefce8 0%, #fef9c3 50%, #fef08a 100%)',
  retail: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
}

// Industry-specific accent colors
const accents = {
  health: '#0284c7',
  services: '#ca8a04',
  retail: '#16a34a',
}

const industries = [
  {
    id: 'health',
    name: 'Saúde e Clínicas',
    href: '/saude',
    desc: 'Documentação, faturamento, conformidade',
    stat: '40%',
    statLabel: 'menos tempo em papelada',
  },
  {
    id: 'services',
    name: 'Serviços Profissionais',
    href: '/servicos',
    desc: 'Contratos, cobrança, relatórios',
    stat: '3x',
    statLabel: 'mais contratos gerenciados',
  },
  {
    id: 'retail',
    name: 'Varejo e E-commerce',
    href: '/varejo',
    desc: 'Estoque, pedidos, financeiro',
    stat: '24h',
    statLabel: 'operação ininterrupta',
  },
]

export default function IndustriesSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div ref={ref}>
      {/* Section Header */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-[2.5rem] md:text-[3rem] font-medium text-brand-black tracking-[-0.02em]">
          Soluções por setor
        </h2>
        <p className="mt-4 text-lg md:text-xl text-brand-muted max-w-xl">
          Automações específicas para as necessidades do seu mercado
        </p>
      </div>

      {/* Industry Cards - Unique Visual Design */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => {
          const isHovered = hoveredCard === industry.id
          const accent = accents[industry.id as keyof typeof accents]

          return (
            <Link
              key={industry.id}
              href={industry.href}
              className="group block relative overflow-hidden"
              onMouseEnter={() => setHoveredCard(industry.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
              }}
            >
              {/* Card Container */}
              <div
                className="relative h-full p-8 border border-brand-border transition-all duration-500 flex flex-col"
                style={{
                  backgroundColor: '#fafafa',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: isHovered
                    ? '0 20px 40px rgba(0, 0, 0, 0.1)'
                    : '0 2px 8px rgba(0, 0, 0, 0.04)',
                  borderColor: isHovered ? accent : undefined,
                }}
              >
                {/* Content */}
                <div className="relative flex-1 flex flex-col">
                  {/* Industry Name */}
                  <h3
                    className="text-2xl font-semibold mb-2 transition-colors duration-300"
                    style={{ color: isHovered ? accent : '#1a1a1a' }}
                  >
                    {industry.name}
                  </h3>

                  {/* Description - flex-grow to push stats/CTA to bottom */}
                  <p className="text-brand-muted flex-grow">
                    {industry.desc}
                  </p>

                  {/* Stat Highlight - always at consistent position */}
                  <div
                    className="flex items-baseline gap-2 mb-6 pb-6 border-b transition-colors duration-300 mt-6"
                    style={{ borderColor: isHovered ? accent : 'rgba(0,0,0,0.1)' }}
                  >
                    <span
                      className="text-4xl font-bold transition-colors duration-300"
                      style={{ color: accent }}
                    >
                      {industry.stat}
                    </span>
                    <span className="text-sm text-brand-muted">
                      {industry.statLabel}
                    </span>
                  </div>

                  {/* CTA with Icon inline */}
                  <div className="flex items-center justify-between">
                    <div
                      className="flex items-center gap-2 text-sm font-medium transition-all duration-300"
                      style={{ color: accent }}
                    >
                      <span>Explorar soluções</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Decorative Icon - Inline Right */}
                    <div
                      className="w-10 h-10 transition-transform duration-300"
                      style={{
                        color: accent,
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      {backgroundIcons[industry.id as keyof typeof backgroundIcons]}
                    </div>
                  </div>
                </div>

                {/* Hover Accent Bar */}
                <div
                  className="absolute left-0 top-0 w-1 h-full transition-all duration-300"
                  style={{
                    backgroundColor: accent,
                    transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
                    transformOrigin: 'top',
                  }}
                />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
