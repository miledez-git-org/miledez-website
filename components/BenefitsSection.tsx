'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ClockShrinkIcon, DrawCheckIcon, PuzzleConnectIcon } from '@/components/AnimatedIcons'

const benefits = [
  {
    title: 'Economize tempo',
    description: 'Tarefas que levavam horas passam a acontecer em segundos. Sua equipe foca no que realmente importa.',
    Icon: ClockShrinkIcon,
  },
  {
    title: 'Zero erros',
    description: 'Automações não esquecem, não erram digitação, não pulam etapas. Consistência garantida.',
    Icon: DrawCheckIcon,
  },
  {
    title: 'Seus sistemas',
    description: 'Integramos com as ferramentas que você já usa. Sem trocar de sistema, sem curva de aprendizado.',
    Icon: PuzzleConnectIcon,
  },
]

export default function BenefitsSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="group p-6 -m-6 transition-colors hover:bg-highlight"
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
          }}
        >
          {/* Animated Icon */}
          <div className="mb-6 text-brand-black">
            <benefit.Icon isVisible={isVisible} />
          </div>

          {/* Title */}
          <h3 className="text-lg font-medium mb-4 text-brand-black">
            {benefit.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-brand-text">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  )
}
