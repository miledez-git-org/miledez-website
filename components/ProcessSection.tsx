'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ProcessStep {
  number: string
  title: string
  description: string
  duration: string
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Conversa inicial',
    description:
      'Marcamos uma conversa rápida pra nos conhecer, entender sua empresa e como funciona o dia a dia da sua operação.',
    duration: '30 min',
  },
  {
    number: '02',
    title: 'Relatório de ideias',
    description:
      'Preparamos um relatório com sugestões de automações para o seu negócio, incluindo exemplos práticos e estimativas de valor. A intenção é inspirar e mostrar o que é possível.',
    duration: '2–3 dias úteis',
  },
  {
    number: '03',
    title: 'Definição e construção',
    description:
      'Junto com você, definimos exatamente o que será automatizado. Construímos, testamos e ajustamos até ficar do jeito certo.',
    duration: '1–2 semanas',
  },
  {
    number: '04',
    title: 'Entrega e acompanhamento',
    description:
      'Entregamos a automação funcionando. Você testa no seu dia a dia e nós fazemos todos os ajustes necessários — tudo incluído na mensalidade.',
    duration: 'contínuo',
  },
]

export default function ProcessSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <div ref={ref}>
      {/* Header */}
      <div className="mb-10 md:mb-12">
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] text-brand-black leading-tight">
          Como trabalhamos
        </h2>
        <p className="mt-4 text-xl text-neutral-600 max-w-2xl">
          Da primeira conversa ao sistema rodando — simples assim.
        </p>
      </div>

      {/* Promise card — burgundy */}
      <div
        className="bg-brand-primary rounded-xl px-8 md:px-12 py-8 md:py-10 mb-14 md:mb-16"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 100ms',
        }}
      >
        <h3 className="heading-display text-2xl md:text-3xl text-white leading-snug font-bold text-center">
          Primeiro processo automatizado em 2 semanas
        </h3>
        <div className="mt-5 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <span className="text-base text-white">Desenvolvimento sem custo</span>
          <span className="hidden md:block text-white/30">·</span>
          <span className="text-base text-white">Teste grátis</span>
          <span className="hidden md:block text-white/30">·</span>
          <span className="text-base text-white">Só a mensalidade, tudo incluso</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Continuous vertical line */}
        <div className="absolute left-[28px] md:left-[36px] lg:left-[44px] top-0 bottom-0 w-px bg-neutral-200" />

        {/* Steps */}
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex gap-6 md:gap-8 lg:gap-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 120}ms`,
              }}
            >
              {/* Number node — sits on the vertical line */}
              <div className="relative z-10 flex-shrink-0 w-14 md:w-[72px] lg:w-[88px]">
                <div className="bg-white">
                  <span className="heading-display text-[2.5rem] md:text-[3rem] lg:text-[4rem] text-neutral-200 leading-none block text-center">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Step content */}
              <div className="pt-1 md:pt-2 lg:pt-3 max-w-xl">
                {/* Horizontal rule */}
                <div className="hidden md:block h-px bg-neutral-200 mb-3 md:mb-4" />

                {/* Title */}
                <h3 className="heading-component text-xl md:text-2xl lg:text-[1.75rem] text-brand-black">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-neutral-600 mt-2">
                  {step.description}
                </p>

                {/* Duration — below description, left-aligned */}
                <span className="inline-flex items-center gap-2 text-base font-medium text-brand-primary mt-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
