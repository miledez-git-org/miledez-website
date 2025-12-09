'use client'

import { useEffect, useState } from 'react'

type Industry = 'saude' | 'servicos' | 'varejo'

interface IndustryHeroVisualizationProps {
  industry: Industry
}

interface Step {
  label: string
  icon: 'document' | 'process' | 'folder' | 'check' | 'mail' | 'calendar' | 'cart' | 'box' | 'truck'
}

const industryConfig: Record<Industry, { title: string; steps: Step[] }> = {
  saude: {
    title: 'Automacao de documentos',
    steps: [
      { label: 'Novo paciente', icon: 'document' },
      { label: 'Formulario enviado', icon: 'mail' },
      { label: 'Docs organizados', icon: 'folder' },
      { label: 'Prontuario completo', icon: 'check' },
    ],
  },
  servicos: {
    title: 'Gestao de contratos',
    steps: [
      { label: 'Cliente cadastrado', icon: 'document' },
      { label: 'Contrato gerado', icon: 'process' },
      { label: 'Alerta de renovacao', icon: 'calendar' },
      { label: 'Renovado automaticamente', icon: 'check' },
    ],
  },
  varejo: {
    title: 'Processamento de pedidos',
    steps: [
      { label: 'Novo pedido', icon: 'cart' },
      { label: 'Estoque verificado', icon: 'box' },
      { label: 'Envio processado', icon: 'truck' },
      { label: 'Cliente notificado', icon: 'check' },
    ],
  },
}

const IconComponent = ({ icon, className }: { icon: Step['icon']; className?: string }) => {
  const iconClass = className || 'w-5 h-5'

  switch (icon) {
    case 'document':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    case 'process':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      )
    case 'folder':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
      )
    case 'check':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'mail':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      )
    case 'calendar':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      )
    case 'cart':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      )
    case 'box':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      )
    case 'truck':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.375m-7.5 0v-3.375c0-.621.504-1.125 1.125-1.125H12M3.75 6.75h7.5M3.75 3h17.25m-10.5 3v4.5m3-4.5v4.5M3.75 10.5h3.75" />
        </svg>
      )
    default:
      return null
  }
}

export default function IndustryHeroVisualization({ industry }: IndustryHeroVisualizationProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  const config = industryConfig[industry]

  useEffect(() => {
    setIsLoaded(true)

    // Cycle through steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % config.steps.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [config.steps.length])

  return (
    <div
      className="hidden lg:block relative w-full max-w-md"
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
            {config.title}
          </span>
        </div>

        {/* Workflow visualization */}
        <div className="space-y-4">
          {config.steps.map((step, index) => (
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
                <IconComponent icon={step.icon} />
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
              {index < config.steps.length - 1 && (
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
