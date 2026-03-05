'use client'

import { useState } from 'react'

interface Step {
  number: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Seu cenário ideal',
    description: 'Conte-nos o que trava sua operação. Quanto tempo sua equipe perde? Como seria se esse problema sumisse? Você fala — a gente ouve.',
  },
  {
    number: 2,
    title: 'Proposta sob medida',
    description: 'Apresentamos soluções específicas para seu caso com ROI estimado. Orçamento transparente. Você só avança se fizer sentido.',
  },
  {
    number: 3,
    title: 'Nós fazemos o trabalho',
    description: 'Com triggers simples disponíveis em praticamente qualquer software, criamos a solução que você precisa — sem envolver sua equipe.',
  },
  {
    number: 4,
    title: 'Cuidamos de tudo',
    description: 'Todas as automações ficam em nosso ambiente. Manutenção, atualizações, problemas — você nunca precisa se preocupar.',
  },
]

export default function ProcessSectionEnhanced() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-32 md:py-40 bg-bg-muted">
      <div className="px-6 md:px-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-[2.5rem] md:text-[3rem] font-medium text-brand-black tracking-[-0.02em]">
            Processo
          </h2>
          <p className="mt-4 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Entendemos sua operação, identificamos oportunidades de automação e implementamos soluções que funcionam.
          </p>
        </div>

        {/* Cards Grid - 2 columns on desktop for better readability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-8">
          {steps.map((step, index) => {
            const isHovered = hoveredCard === index

            return (
              <div
                key={index}
                className="relative pt-7 pl-7"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Number Icon - Overlapping top-left corner */}
                <div
                  className="absolute top-0 left-0 w-14 h-14 flex items-center justify-center bg-white border-2 border-[#16232A] z-10 transition-all duration-300"
                  style={{
                    borderRadius: '50%',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  }}
                >
                  <span className="text-xl font-bold text-[#16232A]">
                    {step.number}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="h-full flex flex-col transition-all duration-300"
                  style={{
                    backgroundColor: '#16232A',
                    padding: '40px 32px',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: isHovered
                      ? '0 24px 48px rgba(22, 35, 42, 0.45), 0 8px 16px rgba(0, 0, 0, 0.1)'
                      : '0 12px 32px rgba(22, 35, 42, 0.3), 0 4px 8px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      color: '#fff',
                      margin: '0 0 16px',
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '15px',
                      color: 'rgba(255,255,255,0.85)',
                      margin: 0,
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
