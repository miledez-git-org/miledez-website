'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { icons } from './Icons'

// Color constants matching brand
const ACCENT_COLOR = '#8B2B2B'
const SUCCESS_COLOR = '#10B981'
const BORDER_COLOR = '#E5E5E5'
const TEXT_PRIMARY = '#1F2937'
const TEXT_SECONDARY = '#6B7280'

// Badge types
type BadgeType = 'trigger' | 'condition' | 'action'

interface WorkflowCard {
  id: number
  icon: React.ReactNode
  iconLabel: string
  title: string
  description: string
  badge: BadgeType
  offsetX: number
  offsetY: number
}

// Workflow cards data - Lead capture automation scenario
const workflowCards: WorkflowCard[] = [
  {
    id: 1,
    icon: icons.gmail,
    iconLabel: 'Gmail',
    title: 'Novo formulário recebido',
    description: 'Receber novo lead via formulário',
    badge: 'trigger',
    offsetX: 20,
    offsetY: 0,
  },
  {
    id: 2,
    icon: icons.zapier,
    iconLabel: 'Lógica',
    title: 'Validar informações',
    description: 'Verificar dados e qualificar lead',
    badge: 'condition',
    offsetX: -15,
    offsetY: 0,
  },
  {
    id: 3,
    icon: icons.pipedrive,
    iconLabel: 'CRM',
    title: 'Criar lead no CRM',
    description: 'Atualizar registro no Pipedrive',
    badge: 'action',
    offsetX: 35,
    offsetY: 0,
  },
  {
    id: 4,
    icon: icons.email,
    iconLabel: 'Email',
    title: 'Enviar email de boas-vindas',
    description: 'Mensagem automática de confirmação',
    badge: 'action',
    offsetX: 0,
    offsetY: 0,
  },
  {
    id: 5,
    icon: icons.whatsapp,
    iconLabel: 'WhatsApp',
    title: 'Notificar equipe comercial',
    description: 'Alerta para time de vendas',
    badge: 'action',
    offsetX: 25,
    offsetY: 0,
  },
]

// Badge component
function Badge({ type, isActive }: { type: BadgeType; isActive: boolean }) {
  const config = {
    trigger: {
      label: 'Gatilho',
      bgActive: 'bg-amber-100',
      textActive: 'text-amber-700',
      bgInactive: 'bg-gray-100',
      textInactive: 'text-gray-500',
    },
    condition: {
      label: 'Condição',
      bgActive: 'bg-blue-100',
      textActive: 'text-blue-700',
      bgInactive: 'bg-gray-100',
      textInactive: 'text-gray-500',
    },
    action: {
      label: 'Ação',
      bgActive: 'bg-green-100',
      textActive: 'text-green-700',
      bgInactive: 'bg-gray-100',
      textInactive: 'text-gray-500',
    },
  }

  const { label, bgActive, textActive, bgInactive, textInactive } = config[type]

  return (
    <span
      className={`
        px-2 py-0.5 text-[10px] font-medium rounded-full transition-colors duration-300
        ${isActive ? `${bgActive} ${textActive}` : `${bgInactive} ${textInactive}`}
      `}
    >
      {label}
    </span>
  )
}

// Status indicator component
function StatusIndicator({ status }: { status: 'waiting' | 'processing' | 'completed' }) {
  if (status === 'waiting') return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="absolute -top-2 -right-2 z-10"
    >
      {status === 'processing' && (
        <div className="w-5 h-5 rounded-full bg-white border-2 border-brand-accent flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
        </div>
      )}
      {status === 'completed' && (
        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </motion.div>
  )
}

// Individual workflow card component
function WorkflowCardComponent({
  card,
  isActive,
  isCompleted,
  isProcessing,
  index,
}: {
  card: WorkflowCard
  isActive: boolean
  isCompleted: boolean
  isProcessing: boolean
  index: number
}) {
  const status = isCompleted ? 'completed' : isProcessing ? 'processing' : 'waiting'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      style={{ marginLeft: `${card.offsetX}px` }}
      className="relative"
    >
      {/* Connector dot on top of card */}
      {index > 0 && (
        <div
          className={`
            absolute -top-3 left-8 w-2 h-2 rounded-full border-2 transition-colors duration-300
            ${isActive || isCompleted ? 'bg-brand-accent border-brand-accent' : 'bg-white border-gray-300'}
          `}
        />
      )}

      {/* Card */}
      <div
        className={`
          relative bg-white rounded-xl p-4 transition-all duration-300
          border shadow-sm
          ${isActive ? 'border-brand-accent shadow-accent-glow' : isCompleted ? 'border-green-400' : 'border-[#E5E5E5]'}
          ${isActive ? 'scale-[1.02]' : 'scale-100'}
        `}
        style={{
          boxShadow: isActive
            ? '0 4px 20px rgba(139, 43, 43, 0.15)'
            : '0 4px 12px rgba(0, 0, 0, 0.08)',
        }}
      >
        <AnimatePresence>
          <StatusIndicator status={status} />
        </AnimatePresence>

        {/* Line 1: Icon + Title + Badge */}
        <div className="flex items-center gap-3 mb-2">
          <div
            className={`
              w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg transition-colors duration-300
              [&>svg]:w-5 [&>svg]:h-5
              ${isActive ? 'text-brand-accent bg-brand-accent-light' : 'text-gray-500 bg-gray-100'}
            `}
          >
            {card.icon}
          </div>
          <span
            className={`
              flex-1 text-sm font-semibold transition-colors duration-300
              ${isActive ? 'text-brand-black' : 'text-gray-700'}
            `}
          >
            {card.title}
          </span>
          <Badge type={card.badge} isActive={isActive || isCompleted} />
        </div>

        {/* Line 2: Description */}
        <p
          className={`
            text-xs leading-relaxed pl-11 transition-colors duration-300
            ${isActive ? 'text-gray-600' : 'text-gray-400'}
          `}
        >
          {card.description}
        </p>
      </div>

      {/* Connector dot on bottom of card */}
      {index < workflowCards.length - 1 && (
        <div
          className={`
            absolute -bottom-3 left-8 w-2 h-2 rounded-full border-2 transition-colors duration-300
            ${isCompleted ? 'bg-green-500 border-green-500' : isActive ? 'bg-brand-accent border-brand-accent' : 'bg-white border-gray-300'}
          `}
        />
      )}
    </motion.div>
  )
}

// Connector line between cards with animated pulse
function ConnectorLine({
  isActive,
  isCompleted,
  fromCard,
}: {
  isActive: boolean
  isCompleted: boolean
  fromCard: WorkflowCard
}) {
  return (
    <div
      className="relative h-8 flex items-center"
      style={{ marginLeft: `${fromCard.offsetX + 32}px` }}
    >
      {/* Static line */}
      <div
        className={`
          w-0.5 h-full transition-colors duration-300
          ${isCompleted ? 'bg-green-400' : isActive ? 'bg-brand-accent' : 'bg-gray-200'}
        `}
      />

      {/* Animated pulse dot */}
      {isActive && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-accent"
          initial={{ top: 0, opacity: 0 }}
          animate={{
            top: ['0%', '100%'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 0.8,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: 0.2,
          }}
        />
      )}
    </div>
  )
}

export default function HeroWorkflowDemo() {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Animation phases (0-5 maps to cards 0-4, then reset)
  // Phase 0: Card 1 active (trigger)
  // Phase 1: Card 1 complete, Card 2 active
  // Phase 2: Card 2 complete, Card 3 active
  // Phase 3: Card 3 complete, Card 4 active
  // Phase 4: Card 4 complete, Card 5 active
  // Phase 5: All complete, then reset

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // Animation cycle - 10 second total loop
  useEffect(() => {
    if (!isVisible || prefersReducedMotion) {
      if (prefersReducedMotion) setCurrentPhase(5) // Show complete state
      return
    }

    // Start animation
    setCurrentPhase(0)

    // Phase timing:
    // Phase 0: 0-2s (Card 1 triggers)
    // Phase 1: 2-4s (Card 2 processes)
    // Phase 2: 4-6s (Card 3 processes)
    // Phase 3: 6-7.5s (Card 4 processes)
    // Phase 4: 7.5-9s (Card 5 processes)
    // Phase 5: 9-10s (All complete, then reset)
    const phaseDurations = [2000, 2000, 2000, 1500, 1500, 1000]

    let currentIndex = 0
    const advancePhase = () => {
      currentIndex = (currentIndex + 1) % 6
      setCurrentPhase(currentIndex)
    }

    let timeout: NodeJS.Timeout
    const scheduleNext = (index: number) => {
      timeout = setTimeout(() => {
        advancePhase()
        scheduleNext((index + 1) % 6)
      }, phaseDurations[index])
    }

    scheduleNext(0)

    return () => clearTimeout(timeout)
  }, [isVisible, prefersReducedMotion])

  // Helper functions to determine card states
  const isCardActive = (cardIndex: number) => currentPhase === cardIndex
  const isCardCompleted = (cardIndex: number) => currentPhase > cardIndex
  const isCardProcessing = (cardIndex: number) => currentPhase === cardIndex
  const isConnectorActive = (connectorIndex: number) => currentPhase === connectorIndex + 1
  const isConnectorCompleted = (connectorIndex: number) => currentPhase > connectorIndex + 1

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[480px] mx-auto lg:mx-0"
      aria-label="Demonstração de automação de captação de leads"
    >
      <span className="sr-only">
        Animação demonstrando um fluxo de automação: um formulário recebe um lead, valida as informações,
        cria o registro no CRM, envia email de boas-vindas e notifica a equipe comercial via WhatsApp.
      </span>

      <div
        className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-xs font-medium text-brand-muted uppercase tracking-wider">
            Automação de Leads
          </span>
        </div>

        {/* Workflow cards with connectors */}
        <div className="space-y-0">
          {workflowCards.map((card, index) => (
            <div key={card.id}>
              <WorkflowCardComponent
                card={card}
                isActive={isCardActive(index)}
                isCompleted={isCardCompleted(index)}
                isProcessing={isCardProcessing(index)}
                index={index}
              />
              {index < workflowCards.length - 1 && (
                <ConnectorLine
                  isActive={isConnectorActive(index)}
                  isCompleted={isConnectorCompleted(index)}
                  fromCard={card}
                />
              )}
            </div>
          ))}
        </div>

        {/* Footer status */}
        <AnimatePresence>
          {currentPhase === 5 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 flex items-center justify-center gap-2 py-2 px-4 bg-green-50 rounded-lg border border-green-200"
            >
              <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-medium text-green-700">
                Fluxo concluído com sucesso
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative background elements */}
      <div className="absolute -top-6 -right-6 w-32 h-32 border border-brand-border/30 rounded-xl -z-10" />
      <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-brand-border/20 rounded-lg -z-10" />
    </div>
  )
}
