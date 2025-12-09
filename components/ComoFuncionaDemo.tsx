'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { stepIcons } from './Icons'

interface Example {
  icon: React.ReactNode
  text: string
}

interface Step {
  icon: React.ReactNode
  title: string
  description: string
  examples: Example[]
}

// Small icons for examples
const exampleIcons = {
  email: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="3" width="14" height="10" rx="1" />
      <path d="M1 4l7 5 7-5" />
    </svg>
  ),
  form: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="1" width="12" height="14" rx="1" />
      <path d="M5 5h6M5 8h6M5 11h4" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="3" width="14" height="12" rx="1" />
      <path d="M1 7h14M4 1v4M12 1v4" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="5" r="3" />
      <path d="M2 15c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    </svg>
  ),
  document: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 1H3a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V6L9 1z" />
      <path d="M9 1v5h5" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="8" cy="4" rx="6" ry="2" />
      <path d="M2 4v8c0 1.1 2.7 2 6 2s6-.9 6-2V4" />
      <path d="M2 8c0 1.1 2.7 2 6 2s6-.9 6-2" />
    </svg>
  ),
  sync: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 8a6 6 0 0110.3-4.2M14 8a6 6 0 01-10.3 4.2" />
      <path d="M12 2v4h-4M4 14v-4h4" />
    </svg>
  ),
  file: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 1H3a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V6L9 1z" />
      <path d="M9 1v5h5M5 9h6M5 12h4" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 6a4 4 0 00-8 0c0 4-2 5-2 5h12s-2-1-2-5" />
      <path d="M9 13a1.5 1.5 0 01-3 0" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="6" />
      <path d="M5 8l2 2 4-4" />
    </svg>
  ),
  log: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="12" height="12" rx="1" />
      <path d="M5 5h6M5 8h6M5 11h3" />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="5" r="2" />
      <circle cx="11" cy="5" r="2" />
      <path d="M1 13c0-2.2 1.8-4 4-4h2c.7 0 1.4.2 2 .5M8 13c0-2.2 1.8-4 4-4h1c2.2 0 4 1.8 4 4" />
    </svg>
  ),
}

const steps: Step[] = [
  {
    icon: stepIcons.trigger,
    title: 'Gatilho',
    description: 'Um evento inicia o processo automaticamente.',
    examples: [
      { icon: exampleIcons.email, text: 'Email recebido' },
      { icon: exampleIcons.form, text: 'Formulário preenchido' },
      { icon: exampleIcons.calendar, text: 'Agendamento criado' },
    ],
  },
  {
    icon: stepIcons.process,
    title: 'Processamento',
    description: 'O sistema identifica e extrai informações.',
    examples: [
      { icon: exampleIcons.user, text: 'Nome e contato' },
      { icon: exampleIcons.calendar, text: 'Datas e horários' },
      { icon: exampleIcons.data, text: 'Valores e documentos' },
    ],
  },
  {
    icon: stepIcons.action,
    title: 'Ações',
    description: 'Tarefas executadas automaticamente.',
    examples: [
      { icon: exampleIcons.sync, text: 'Atualiza sistemas' },
      { icon: exampleIcons.file, text: 'Gera documentos' },
      { icon: exampleIcons.bell, text: 'Envia notificações' },
    ],
  },
  {
    icon: stepIcons.result,
    title: 'Resultado',
    description: 'Processo concluído com sucesso.',
    examples: [
      { icon: exampleIcons.check, text: 'Tarefa finalizada' },
      { icon: exampleIcons.log, text: 'Registro completo' },
      { icon: exampleIcons.team, text: 'Equipe notificada' },
    ],
  },
]

// Animated connector line between boxes
function ConnectorLine({ isActive, isVisible }: { isActive: boolean; isVisible: boolean }) {
  return (
    <div
      className="w-full h-[2px] relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-out',
      }}
    >
      {/* Base line (subtle gray) */}
      <div className="absolute inset-0 bg-brand-border" />

      {/* Animated accent line that grows from left to right */}
      <div
        className="absolute top-0 left-0 h-full bg-brand-accent transition-all duration-1000 ease-out"
        style={{
          width: isActive ? '100%' : '0%',
        }}
      />
    </div>
  )
}

function StepBox({ step, isLast, isLoaded }: { step: Step; isLast: boolean; isLoaded: boolean }) {
  return (
    <div
      className={`p-6 border bg-white h-full relative overflow-hidden ${
        isLast && isLoaded
          ? 'border-l-2 border-l-brand-accent border-t border-r border-b border-t-brand-border border-r-brand-border border-b-brand-border'
          : 'border-brand-border'
      }`}
    >
      {/* Skeleton layer */}
      <div
        className="absolute inset-0 p-6 transition-opacity duration-700 ease-out"
        style={{ opacity: isLoaded ? 0 : 1 }}
      >
        <div className="animate-pulse">
          <div className="w-12 h-12 bg-gray-200 mb-4" />
          <div className="h-5 bg-gray-200 w-24 mb-2" />
          <div className="h-4 bg-gray-200 w-full mb-6" />
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 w-3/4" />
            <div className="h-3 bg-gray-200 w-2/3" />
            <div className="h-3 bg-gray-200 w-3/4" />
          </div>
        </div>
      </div>

      {/* Content layer */}
      <div
        className="transition-all duration-700 ease-out"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(8px)',
        }}
      >
        {/* Icon */}
        <div
          className={`w-12 h-12 flex items-center justify-center border mb-4 transition-colors duration-500 ${
            isLast && isLoaded ? 'border-brand-accent text-brand-accent' : 'border-brand-black text-brand-black'
          }`}
        >
          {step.icon}
        </div>

        {/* Title */}
        <h4 className="text-base font-medium text-brand-black mb-1">{step.title}</h4>

        {/* Short description */}
        <p className="text-sm text-brand-text mb-4">{step.description}</p>

        {/* Examples list */}
        <ul className="space-y-2">
          {step.examples.map((example, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-brand-muted">
              <span className="text-brand-text flex-shrink-0">{example.icon}</span>
              <span>{example.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ComoFuncionaDemo() {
  const [loadedSteps, setLoadedSteps] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // If reduced motion, show all steps immediately
    if (prefersReducedMotion) {
      setIsVisible(true)
      setLoadedSteps(4)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  // Sequential loading animation
  useEffect(() => {
    if (!isVisible) return

    // Load first step immediately
    if (loadedSteps === 0) {
      setLoadedSteps(1)
      return
    }

    // Load remaining steps with 3s delay
    if (loadedSteps < 4) {
      const timer = setTimeout(() => {
        setLoadedSteps((prev) => prev + 1)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isVisible, loadedSteps])

  return (
    <div ref={ref}>
      {/* Desktop: boxes with connector lines between them */}
      <div className="hidden md:flex items-center">
        {steps.map((step, i) => (
          <Fragment key={i}>
            {/* Step box */}
            <div
              className="flex-1"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms`,
              }}
            >
              <StepBox step={step} isLast={i === steps.length - 1} isLoaded={i < loadedSteps} />
            </div>

            {/* Connector line between boxes (not after last box) */}
            {i < steps.length - 1 && (
              <div className="w-12 px-2 flex items-center self-stretch">
                <ConnectorLine isActive={i + 1 < loadedSteps} isVisible={isVisible} />
              </div>
            )}
          </Fragment>
        ))}
      </div>

      {/* Mobile: single column with vertical connectors */}
      <div className="md:hidden">
        {steps.map((step, i) => (
          <div key={i}>
            {/* Step box */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms`,
              }}
            >
              <StepBox step={step} isLast={i === steps.length - 1} isLoaded={i < loadedSteps} />
            </div>
            {/* Vertical connector line (not after last item) */}
            {i < steps.length - 1 && (
              <div className="flex justify-center py-3">
                <div className="relative w-px h-8">
                  {/* Base line (subtle gray) */}
                  <div className="absolute inset-0 bg-brand-border" />

                  {/* Animated accent line that grows from top to bottom */}
                  <div
                    className="absolute top-0 left-0 w-full bg-brand-accent transition-all duration-1000 ease-out"
                    style={{
                      height: i + 1 < loadedSteps ? '100%' : '0%',
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
