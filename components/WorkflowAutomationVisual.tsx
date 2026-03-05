'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { icons, stepIcons } from './Icons'

const ACCENT_COLOR = '#eb5100'
const SUCCESS_COLOR = '#22c55e'

// Step definitions - aligned with stage indicators
const stepInfo = [
  { label: 'Monitorando Ambiente', description: 'Aguardando gatilhos...', stage: null },
  { label: 'Gatilho', description: 'Novo email recebido. Extraindo dados.', stage: 'trigger' },
  { label: 'Processar', description: 'Aplicando regras e executando lógica.', stage: 'process' },
  { label: 'Sincronizando Sistemas', description: 'Atualizando Calendário, CRM e ERP.', stage: 'action' },
  { label: 'Ação', description: 'Todas as ações executadas com sucesso.', stage: 'complete' },
]

// App definitions
const apps = [
  { icon: icons.gmail, label: 'Email', isSource: true },
  { icon: icons.googleCalendar, label: 'Calendário', isTarget: true },
  { icon: icons.crm, label: 'CRM', isTarget: true },
  { icon: icons.database, label: 'ERP', isTarget: true },
]

// App Icon Component
function AppIcon({
  icon,
  label,
  isActive,
  isSuccess = false,
  isSource = false
}: {
  icon: React.ReactNode
  label: string
  isActive: boolean
  isSuccess?: boolean
  isSource?: boolean
}) {
  const activeClass = isSuccess
    ? 'border-brand-success shadow-success-glow'
    : 'border-brand-primary shadow-accent-glow'
  const textClass = isSuccess ? 'text-brand-success' : 'text-brand-primary'

  return (
    <div className="flex flex-col items-center gap-3 md:gap-4 relative z-20">
      <motion.div
        animate={{ scale: isActive ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}
        className={`
          w-16 h-16 md:w-20 md:h-20 flex items-center justify-center
          border transition-all duration-300 bg-white
          ${isActive ? activeClass : 'border-brand-black'}
        `}
      >
        <div className={`w-8 h-8 md:w-10 md:h-10 [&>svg]:w-full [&>svg]:h-full transition-colors duration-300 ${isActive ? textClass : 'text-brand-black'}`}>
          {icon}
        </div>
      </motion.div>
      <span className={`text-[10px] md:text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${isActive ? textClass : 'text-brand-muted'}`}>
        {label}
      </span>
      {isSource && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-px h-4 bg-brand-border" aria-hidden="true" />
      )}
    </div>
  )
}

// Stage Indicator Overlay Component - shows icon overlaid above the central panel
function StageIndicator({ stage }: { stage: string | null }) {
  if (!stage) return null

  const getIcon = () => {
    switch (stage) {
      case 'trigger':
        return stepIcons.trigger
      case 'process':
        return stepIcons.process
      case 'action':
      case 'complete':
        return stepIcons.action
      default:
        return null
    }
  }

  const isProcessing = stage === 'process'
  const isComplete = stage === 'complete'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="absolute -top-5 md:-top-6 inset-x-0 flex justify-center z-40"
    >
      <div className={`
        w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white
        [&>svg]:w-full [&>svg]:h-full
        ${isProcessing ? 'animate-spin-slow' : ''}
        ${isComplete ? 'text-brand-success' : 'text-brand-primary'}
      `}>
        {getIcon()}
      </div>
    </motion.div>
  )
}

// Mobile connector
function MobileConnector({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-px h-12 mx-auto">
      <div className="absolute inset-0 w-px bg-brand-border" />
      {isActive && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-primary"
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </div>
  )
}

export default function WorkflowAutomationVisual() {
  const [step, setStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Intersection Observer - trigger earlier with lower threshold
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Animation cycle - start immediately when visible
  useEffect(() => {
    if (!isVisible || prefersReducedMotion) {
      if (prefersReducedMotion) setStep(4) // Show complete state
      return
    }

    // Start animation immediately
    setStep(1)

    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 5)
    }, 3000)

    return () => clearInterval(timer)
  }, [isVisible, prefersReducedMotion])

  /*
    SVG COORDINATE SYSTEM (1200 x 400)
    Column positions:
    - Email (source): X = 150
    - Calendar: X = 450
    - CRM: X = 750
    - ERP: X = 1050
    - Engine center: X = 600
    - Elbow Y: 200
  */

  return (
    <section
      ref={ref}
      aria-label="Demonstração visual do fluxo de automação"
      className="w-full max-w-5xl mx-auto px-4 md:px-8"
    >
      <span className="sr-only">
        Animação demonstrando como os dados fluem dos seus sistemas através do motor de automação mil&amp;dez.
      </span>

      <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

        {/* TOP: Client Software */}
        <div className="flex flex-col items-center w-full">
          <h3 className="text-sm md:text-base font-semibold text-brand-text uppercase tracking-[0.2em] mb-6 md:mb-8">
            Sistemas atuais do Cliente
          </h3>

          {/* Desktop: 4 columns */}
          <div className="hidden md:grid grid-cols-4 w-full gap-4">
            <AppIcon
              icon={apps[0].icon}
              label={apps[0].label}
              isActive={step === 1}
              isSource
            />
            <AppIcon
              icon={apps[1].icon}
              label={apps[1].label}
              isActive={step === 3 || step === 4}
              isSuccess={step === 4}
            />
            <AppIcon
              icon={apps[2].icon}
              label={apps[2].label}
              isActive={step === 3 || step === 4}
              isSuccess={step === 4}
            />
            <AppIcon
              icon={apps[3].icon}
              label={apps[3].label}
              isActive={step === 3 || step === 4}
              isSuccess={step === 4}
            />
          </div>

          {/* Mobile: 2x2 grid */}
          <div className="md:hidden grid grid-cols-2 gap-6 w-full max-w-xs mx-auto">
            <AppIcon
              icon={apps[0].icon}
              label={apps[0].label}
              isActive={step === 1}
              isSource
            />
            <AppIcon
              icon={apps[1].icon}
              label={apps[1].label}
              isActive={step === 3 || step === 4}
              isSuccess={step === 4}
            />
            <AppIcon
              icon={apps[2].icon}
              label={apps[2].label}
              isActive={step === 3 || step === 4}
              isSuccess={step === 4}
            />
            <AppIcon
              icon={apps[3].icon}
              label={apps[3].label}
              isActive={step === 3 || step === 4}
              isSuccess={step === 4}
            />
          </div>
        </div>

        {/* MIDDLE: Connection Layer with SVG (Desktop) / Simple connectors (Mobile) */}
        <div className="relative w-full h-48 md:h-80 flex items-center justify-center mt-4">

          {/* Desktop SVG Layer - Decorative connection lines */}
          <svg
            className="hidden md:block absolute top-0 left-0 w-full h-full overflow-visible"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
            aria-hidden="true"
            role="presentation"
          >
            {/* Path Down: Email (150) -> Center (600, 200) */}
            <path
              d="M 150 0 V 200 H 600"
              fill="none"
              stroke="#d4d4d4"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />

            {/* Path: Center -> Calendar (450) */}
            <path
              d="M 600 200 H 450 V 0"
              fill="none"
              stroke="#d4d4d4"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />

            {/* Path: Center -> CRM (750) */}
            <path
              d="M 600 200 H 750 V 0"
              fill="none"
              stroke="#d4d4d4"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />

            {/* Path: Center -> ERP (1050) */}
            <path
              d="M 600 200 H 1050 V 0"
              fill="none"
              stroke="#d4d4d4"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />

            {/* Animated Dot Down (Step 1) - Email to Center */}
            <AnimatePresence>
              {step === 1 && !prefersReducedMotion && (
                <motion.circle
                  r="8"
                  fill={ACCENT_COLOR}
                  initial={{ cx: 150, cy: 0 }}
                  animate={{
                    cx: [150, 150, 600],
                    cy: [0, 200, 200]
                  }}
                  transition={{
                    duration: 2,
                    ease: 'linear',
                    times: [0, 0.4, 1]
                  }}
                />
              )}
            </AnimatePresence>

            {/* Animated Dots Out (Step 3) - Center to targets */}
            {step === 3 && !prefersReducedMotion && (
              <>
                {/* To Calendar */}
                <motion.circle
                  r="8"
                  fill={SUCCESS_COLOR}
                  initial={{ cx: 600, cy: 200 }}
                  animate={{
                    cx: [600, 450, 450],
                    cy: [200, 200, 0]
                  }}
                  transition={{ duration: 1.5, ease: 'linear', times: [0, 0.4, 1] }}
                />
                {/* To CRM */}
                <motion.circle
                  r="8"
                  fill={SUCCESS_COLOR}
                  initial={{ cx: 600, cy: 200 }}
                  animate={{
                    cx: [600, 750, 750],
                    cy: [200, 200, 0]
                  }}
                  transition={{ duration: 1.5, ease: 'linear', times: [0, 0.4, 1] }}
                />
                {/* To ERP */}
                <motion.circle
                  r="8"
                  fill={SUCCESS_COLOR}
                  initial={{ cx: 600, cy: 200 }}
                  animate={{
                    cx: [600, 1050, 1050],
                    cy: [200, 200, 0]
                  }}
                  transition={{ duration: 1.5, ease: 'linear', times: [0, 0.6, 1] }}
                />
              </>
            )}
          </svg>

          {/* Mobile: Simple vertical connector - Decorative */}
          <div className="md:hidden" aria-hidden="true">
            <MobileConnector isActive={step === 1 || step === 3} />
          </div>

          {/* Central Context Panel with Stage Indicator Overlay */}
          <div className={`
            relative z-30 flex flex-col items-center justify-center
            bg-white p-6 md:p-8 border transition-all duration-300
            min-w-[280px] md:min-w-[340px]
            ${step === 4 ? 'border-brand-success' : step >= 1 ? 'border-brand-primary' : 'border-brand-border'}
          `}>
            {/* Stage Indicator Overlay - Decorative */}
            <div aria-hidden="true">
              <AnimatePresence mode="wait">
                <StageIndicator key={`stage-${step}`} stage={stepInfo[step]?.stage || null} />
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center pt-4"
              >
                <span className={`text-xs md:text-sm font-medium uppercase tracking-widest mb-2 ${step === 4 ? 'text-brand-success' : 'text-brand-primary'}`}>
                  {stepInfo[step]?.label}
                </span>
                <span className="text-xs md:text-sm text-brand-text font-normal leading-relaxed">
                  {stepInfo[step]?.description}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}
