'use client'

import { useEffect, useState } from 'react'

export default function HeroVisualization() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    setIsLoaded(true)

    // Cycle through steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const steps = [
    { label: 'Gatilho', subtitle: 'Um evento inicia o processo automaticamente.', icon: 'trigger' },
    { label: 'Processamento', subtitle: 'O sistema identifica e extrai informações.', icon: 'process' },
    { label: 'Ações', subtitle: 'Tarefas executadas automaticamente.', icon: 'action' },
    { label: 'Resultado', subtitle: 'Processo concluído com sucesso.', icon: 'result' },
  ]

  return (
    <div
      className="relative w-full max-w-md mx-auto lg:mx-0"
      style={{
        transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Main visualization card */}
      <div className="relative bg-white border border-[rgba(0,0,0,0.08)] p-6 animate-float">
        {/* Window header */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[rgba(0,0,0,0.08)]">
          <div className="w-2 h-2 bg-brand-accent" />
          <span className="text-xs font-medium text-brand-muted uppercase tracking-wider">
            Automacao ativa
          </span>
        </div>

        {/* Workflow visualization */}
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
              style={{
                transform: isLoaded ? 'translateX(0)' : 'translateX(-16px)',
                transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 100}ms`,
              }}
            >
              {/* Step indicator */}
              <div
                className={`w-10 h-10 flex-shrink-0 flex items-center justify-center border transition-colors duration-300 ${
                  activeStep === index
                    ? 'border-brand-accent bg-brand-accent-light'
                    : 'border-brand-border bg-white'
                }`}
              >
                {/* Trigger - Lightning bolt */}
                {step.icon === 'trigger' && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                )}
                {/* Process - Gear */}
                {step.icon === 'process' && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
                {/* Action - Checkmark circle */}
                {step.icon === 'action' && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {/* Result - Check badge */}
                {step.icon === 'result' && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                )}
              </div>

              {/* Step content */}
              <div className="flex-1 min-w-0">
                <span
                  className={`text-sm font-medium transition-colors duration-300 block ${
                    activeStep === index ? 'text-brand-black' : 'text-brand-muted'
                  }`}
                >
                  {step.label}
                </span>
                <span
                  className={`text-xs transition-colors duration-300 block mt-0.5 ${
                    activeStep === index ? 'text-brand-text' : 'text-brand-muted/70'
                  }`}
                >
                  {step.subtitle}
                </span>
              </div>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-end pt-2">
                  <div
                    className={`h-px w-6 transition-all duration-300 ${
                      activeStep > index ? 'bg-brand-accent' : 'bg-brand-border'
                    }`}
                  />
                  {activeStep === index && (
                    <div className="w-1.5 h-1.5 bg-brand-accent ml-1 animate-pulse" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Status bar */}
        <div className="mt-6 pt-4 border-t border-[rgba(0,0,0,0.08)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500" />
            <span className="text-xs text-brand-muted">Executando</span>
          </div>
          <span className="text-xs text-brand-muted">24/7</span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 border border-[rgba(0,0,0,0.04)] -z-10" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-[rgba(0,0,0,0.04)] -z-10" />
    </div>
  )
}
