'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import ChallengeCard from '@/components/industry/ChallengeCard'
import { stepIcons } from '@/components/Icons'

const painPoints = [
  {
    icon: stepIcons.calendar,
    title: 'Tarefas repetitivas todo dia',
    description:
      'Preencher planilhas, enviar lembretes, organizar documentos. Sua equipe gasta horas em tarefas que poderiam acontecer sozinhas.',
  },
  {
    icon: stepIcons.folder,
    title: 'Informação espalhada',
    description:
      'Dados no e-mail, no WhatsApp, na planilha, no sistema. Quando precisa de algo, ninguém sabe onde está.',
  },
  {
    icon: stepIcons.refresh,
    title: 'Erros e retrabalho',
    description:
      'Dados digitados errado, prazos esquecidos, cobranças atrasadas. Pequenos erros que custam tempo e dinheiro.',
  },
]

export default function PainPointSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <section className="bg-bg-muted py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-14 md:mb-16 text-center">
          <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
            Você conhece<br />
            <span className="text-brand-secondary">esses problemas?</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {painPoints.map((point, index) => (
            <ChallengeCard
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
