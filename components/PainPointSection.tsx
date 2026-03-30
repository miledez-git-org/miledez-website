'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const painPoints = [
  {
    title: 'Tarefas repetitivas todo dia',
    description:
      'Preencher planilhas, enviar lembretes, organizar documentos. Sua equipe gasta horas em tarefas que poderiam acontecer sozinhas.',
  },
  {
    title: 'Informação espalhada',
    description:
      'Dados no e-mail, no WhatsApp, na planilha, no sistema. Quando precisa de algo, ninguém sabe onde está.',
  },
  {
    title: 'Erros e retrabalho',
    description:
      'Dados digitados errado, prazos esquecidos, cobranças atrasadas. Pequenos erros que custam tempo e dinheiro.',
  },
]

export default function PainPointSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="problemas" className="bg-bg-muted py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left column — Narrative */}
          <div
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              opacity: isVisible ? 1 : 0,
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
              Você conhece<br />
              <span className="text-brand-secondary">esses problemas?</span>
            </h2>

            <div className="mt-6 space-y-4 text-lg text-neutral-600 leading-relaxed">
              <p>
                Toda empresa tem processos que consomem tempo demais — tarefas manuais, sistemas que não se conversam, informações que se perdem no caminho.
              </p>
              <p>
                Independente do setor ou da complexidade, criamos soluções sob medida que conectam suas ferramentas e eliminam o trabalho repetitivo. De fluxos simples a operações completas, cada automação é desenhada para o jeito que sua empresa funciona.
              </p>
            </div>
          </div>

          {/* Right column — Pain point items */}
          <div className="space-y-0">
            {painPoints.map((point, index) => {
              const delay = 150 + index * 120

              return (
                <div
                  key={index}
                  className={`py-5 ${index < painPoints.length - 1 ? 'border-b border-neutral-200' : ''}`}
                  style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
                  }}
                >
                  <h3 className="text-xl font-semibold text-brand-black">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-base text-neutral-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
