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
    { label: 'Novo email', icon: 'mail' },
    { label: 'Extrair dados', icon: 'process' },
    { label: 'Gerar documento', icon: 'document' },
    { label: 'Notificar equipe', icon: 'bell' },
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
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-4"
              style={{
                transform: isLoaded ? 'translateX(0)' : 'translateX(-16px)',
                transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 100}ms`,
              }}
            >
              {/* Step indicator */}
              <div
                className={`w-10 h-10 flex items-center justify-center border transition-colors duration-300 ${
                  activeStep === index
                    ? 'border-brand-accent bg-brand-accent-light'
                    : 'border-brand-border bg-white'
                }`}
              >
                {step.icon === 'mail' && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                )}
                {step.icon === 'process' && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                )}
                {step.icon === 'document' && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                )}
                {step.icon === 'bell' && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                )}
              </div>

              {/* Step label */}
              <span
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeStep === index ? 'text-brand-black' : 'text-brand-muted'
                }`}
              >
                {step.label}
              </span>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="flex-1 flex items-center justify-end">
                  <div
                    className={`h-px flex-1 max-w-8 transition-all duration-300 ${
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
