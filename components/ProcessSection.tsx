'use client'

import { useState, useEffect, useRef } from 'react'

interface Step {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Conversa inicial',
    description: 'Nos encontramos e entendemos como podemos ajudar melhor.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Proposta personalizada',
    description: 'Apresentamos ideias de soluções com análise de ROI.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Implementação invisível',
    description: 'Construímos a automação sem alterar ou acessar seus sistemas atuais.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    number: '4',
    title: 'Acompanhe os resultados',
    description: 'Você acompanha os ganhos em tempo real enquanto mantemos tudo funcionando.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
  },
]

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Intersection observer for initial animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animate through steps when visible - slower animation (2500ms)
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (steps.length + 1))
    }, 2500)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <div ref={sectionRef}>
      {/* Header */}
      <div className="mb-14 md:mb-16 text-center">
        <h2 className="font-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          Processo simples,<br />
          <span className="text-brand-primary">resultado rápido</span>
        </h2>
        <p className="mt-4 text-lg text-brand-muted max-w-xl mx-auto">
          Da conversa inicial à automação funcionando em poucos dias
        </p>
      </div>

      {/* Desktop Timeline - Rectangular Cards */}
      <div className="hidden lg:block relative">
        {/* Connector line - positioned to connect card icons */}
        <div className="absolute top-[40px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-0.5 bg-neutral-200" style={{ zIndex: 0 }}>
          {/* Animated progress fill */}
          <div
            className="h-full bg-brand-primary transition-all ease-out"
            style={{
              width: isVisible ? `${Math.min(activeStep, steps.length) * 33.33}%` : '0%',
              transitionDuration: '800ms',
            }}
          />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-4 gap-6" style={{ zIndex: 1, position: 'relative' }}>
          {steps.map((step, index) => {
            const isActive = index < activeStep
            const isCurrent = index === activeStep - 1

            return (
              <div key={index} className="text-center">
                {/* Rectangular Card */}
                <div
                  className="bg-white p-6 transition-all duration-500"
                  style={{
                    boxShadow: isCurrent
                      ? '0 0 0 2px rgba(6, 57, 47, 0.15), 0 8px 24px rgba(0,0,0,0.08)'
                      : isActive
                        ? '0 0 0 1px rgba(6, 57, 47, 0.1), 0 4px 12px rgba(0,0,0,0.06)'
                        : '0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.04)',
                    transform: isCurrent ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                >
                  {/* Icon circle at top */}
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive ? 'bg-brand-primary text-white' : 'bg-neutral-100 text-brand-primary'
                      }`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Number */}
                  <span
                    className={`text-3xl font-bold transition-colors duration-500 block mb-2 ${
                      isActive ? 'text-brand-primary' : 'text-neutral-300'
                    }`}
                  >
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3
                    className={`text-base font-semibold mb-2 transition-colors duration-500 ${
                      isActive ? 'text-neutral-900' : 'text-neutral-500'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Tablet (md) - 2x2 Grid */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
        {steps.map((step, index) => {
          const isActive = index < activeStep

          return (
            <div
              key={index}
              className={`relative bg-white p-6 border border-neutral-200 transition-all duration-500 border-l-4 ${
                isActive ? 'border-l-brand-primary' : 'border-l-neutral-200'
              }`}
            >
              {/* Step number badge */}
              <div
                className={`absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-500 ${
                  isActive ? 'bg-brand-primary text-white border-0' : 'bg-white text-brand-primary border-2 border-neutral-200'
                }`}
              >
                {step.number}
              </div>

              {/* Content */}
              <div className="pt-2">
                <div
                  className={`mb-3 transition-colors duration-500 ${
                    isActive ? 'text-brand-primary' : 'text-neutral-600'
                  }`}
                >
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector arrow (for first and third cards) */}
              {(index === 0 || index === 2) && (
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-neutral-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile - Vertical Timeline */}
      <div className="md:hidden relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-neutral-200">
          <div
            className="w-full bg-brand-primary transition-all ease-out"
            style={{
              height: isVisible ? `${Math.min(activeStep, steps.length) * 25}%` : '0%',
              transitionDuration: '800ms',
            }}
          />
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const isActive = index < activeStep
            const isCurrent = index === activeStep - 1

            return (
              <div key={index} className="relative flex gap-6">
                {/* Step marker */}
                <div
                  className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    isActive ? 'bg-brand-primary border-0' : 'bg-white border-2 border-neutral-200'
                  } ${isCurrent ? 'ring-4 ring-brand-primary/20' : ''}`}
                >
                  <span
                    className={`text-sm font-bold transition-colors duration-500 ${
                      isActive ? 'text-white' : 'text-brand-primary'
                    }`}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`transition-colors duration-500 ${
                        isActive ? 'text-brand-primary' : 'text-neutral-600'
                      }`}
                    >
                      {step.icon}
                    </div>
                    <h3
                      className={`text-lg font-semibold transition-colors duration-500 ${
                        isActive ? 'text-neutral-900' : 'text-neutral-600'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
