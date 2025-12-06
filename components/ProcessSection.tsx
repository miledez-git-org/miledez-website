'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  { num: '01', title: 'Diagnóstico', desc: 'Mapeamos seus processos atuais e identificamos gargalos' },
  { num: '02', title: 'Proposta', desc: 'Apresentamos soluções específicas com ROI estimado' },
  { num: '03', title: 'Implementação', desc: 'Construímos e configuramos as automações' },
  { num: '04', title: 'Acompanhamento', desc: 'Monitoramos e otimizamos continuamente' },
]

export default function ProcessSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
      <div>
        <h2 className="text-[2rem] font-medium mb-12 text-brand-black tracking-[-0.02em]">Nosso processo</h2>
        <p className="text-lg text-brand-text leading-relaxed">
          Entendemos sua operação, identificamos oportunidades de automação e implementamos soluções que funcionam.
        </p>
      </div>
      <div className="space-y-0">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative"
            style={{
              transform: isVisible ? 'translateX(0)' : 'translateX(-16px)',
              transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms`,
            }}
          >
            {/* Connecting line */}
            {i < steps.length - 1 && (
              <svg
                className="absolute left-3 top-12 w-px h-[calc(100%-24px)] text-brand-border"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100%"
                  stroke="currentColor"
                  strokeWidth="1"
                  style={{
                    strokeDasharray: 100,
                    strokeDashoffset: isVisible ? 0 : 100,
                    transition: `stroke-dashoffset 0.8s ease-out ${300 + i * 150}ms`,
                  }}
                />
              </svg>
            )}

            <div className="flex gap-6 pb-8 border-b border-brand-border last:border-0">
              {/* Step number */}
              <span
                className="text-base text-brand-accent font-medium"
                style={{
                  transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: `transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms`,
                }}
              >
                {step.num}
              </span>

              <div>
                <h4 className="text-base font-medium mb-2 text-brand-black">{step.title}</h4>
                <p className="text-base text-brand-text">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
