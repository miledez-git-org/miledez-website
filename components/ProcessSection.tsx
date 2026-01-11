'use client'

interface Step {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Analisamos seus processos e identificamos as maiores oportunidades de automação.',
  },
  {
    number: '02',
    title: 'Implementação',
    description: 'Construímos e conectamos os workflows às suas ferramentas existentes.',
  },
  {
    number: '03',
    title: 'Resultados',
    description: 'Você acompanha os ganhos em tempo real enquanto mantemos tudo funcionando.',
  },
]

export default function ProcessSection() {
  return (
    <div>
      {/* Header */}
      <div className="mb-12 md:mb-16 text-center">
        <p className="text-xs font-semibold text-brand-muted uppercase tracking-[0.15em] mb-4">
          Como funciona
        </p>
        <h2 className="text-[2rem] md:text-[2.5rem] font-medium text-brand-black tracking-[-0.02em]">
          Processo simples, resultado rápido
        </h2>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connector line (hidden on mobile, visible md+) */}
            {index < steps.length - 1 && (
              <div
                className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-brand-border"
                aria-hidden="true"
              />
            )}

            <div className="text-center">
              {/* Number */}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border-2 border-brand-accent rounded-full">
                <span className="text-lg font-bold text-brand-accent">{step.number}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-brand-black mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base text-brand-muted leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
