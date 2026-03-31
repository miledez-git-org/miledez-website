'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

// Pain point icons (right column)
const RepeatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
)

const LayersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
)

const AlertTriangleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

// Solution flow icons (left column visual)
const ZapIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const CogIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

const BarChartIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
)

const CheckCircleIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const solutionSteps = [
  { icon: CogIcon, label: 'Tarefas repetitivas rodam sozinhas' },
  { icon: BarChartIcon, label: 'Dados reunidos em um só lugar' },
  { icon: CheckCircleIcon, label: 'Checagem automática elimina erros' },
]

const painPoints = [
  {
    title: 'Tarefas repetitivas todo dia',
    description:
      'Preencher planilhas, enviar lembretes, organizar documentos. Sua equipe gasta horas em tarefas que poderiam acontecer sozinhas.',
    icon: RepeatIcon,
  },
  {
    title: 'Informação espalhada',
    description:
      'Dados no e-mail, no WhatsApp, na planilha, no sistema. Quando precisa de algo, ninguém sabe onde está.',
    icon: LayersIcon,
  },
  {
    title: 'Erros e retrabalho',
    description:
      'Dados digitados errado, prazos esquecidos, cobranças atrasadas. Pequenos erros que custam tempo e dinheiro.',
    icon: AlertTriangleIcon,
  },
]

export default function PainPointSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="problemas" className="bg-bg-muted py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-stretch">

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
              <span className="text-brand-primary">esses problemas?</span>
            </h2>

            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Tarefas manuais, sistemas desconectados, informações que se perdem. Criamos automações sob medida que resolvem esses problemas do jeito que sua empresa funciona.
            </p>

            {/* Mini workflow visual */}
            <div
              className="mt-10 hidden lg:flex flex-col items-center"
              style={{ width: 480 }}
            >
              {/* Hub label */}
              <span
                className="text-xs font-semibold text-brand-primary tracking-wide uppercase mb-2"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                }}
              >
                Automação
              </span>

              {/* Hub icon */}
              <div
                className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white"
                style={{
                  boxShadow: '3px 4px 12px rgba(8, 80, 66, 0.15)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.35s',
                }}
              >
                <ZapIcon size={20} />
              </div>

              {/* SVG connector tree */}
              <svg
                width={480}
                height={52}
                viewBox="0 0 480 52"
                fill="none"
                className="flex-shrink-0"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.45s',
                }}
              >
                {/* Center trunk (straight down) */}
                <path
                  d="M 240 0 V 52"
                  stroke="#d4d4d4"
                  strokeWidth="1"
                />
                {/* Left branch: down from trunk midpoint, rounded elbow left, then down to node */}
                <path
                  d="M 240 26 H 90 Q 80 26 80 36 V 52"
                  stroke="#d4d4d4"
                  strokeWidth="1"
                  fill="none"
                />
                {/* Right branch: down from trunk midpoint, rounded elbow right, then down to node */}
                <path
                  d="M 240 26 H 390 Q 400 26 400 36 V 52"
                  stroke="#d4d4d4"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>

              {/* Solution nodes row */}
              <div className="grid grid-cols-3 w-full">
                {solutionSteps.map((step, i) => {
                  const Icon = step.icon
                  const delay = 0.55 + i * 0.1
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-2 px-2"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                        transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                      }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-brand-primary">
                        <Icon />
                      </div>
                      <span className="text-xs font-medium text-neutral-500 text-center leading-snug">{step.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right column — Pain point items */}
          <div className="flex flex-col justify-between">
            {painPoints.map((point, index) => {
              const delay = 150 + index * 120
              const Icon = point.icon

              return (
                <div
                  key={index}
                  className={`${index > 0 ? 'pt-6' : ''} ${index < painPoints.length - 1 ? 'border-b border-neutral-200 pb-6' : ''}`}
                  style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
                  }}
                >
                  <div className="flex gap-4">
                    <div className="text-brand-primary/40 mt-0.5 flex-shrink-0">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-brand-secondary">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-lg text-neutral-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
