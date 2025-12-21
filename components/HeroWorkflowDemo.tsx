'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { icons } from './Icons'

interface WorkflowCard {
  id: number
  icon: React.ReactNode
  iconLabel: string
  title: string
  description: string
  offsetX: number
}

// Workflow cards data - Lead capture automation scenario
const workflowCards: WorkflowCard[] = [
  {
    id: 1,
    icon: icons.gmail,
    iconLabel: 'Gmail',
    title: 'Novo formulário recebido',
    description: 'Receber novo lead via formulário',
    offsetX: 40,
  },
  {
    id: 2,
    icon: icons.zapier,
    iconLabel: 'Lógica',
    title: 'Validar informações',
    description: 'Verificar dados e qualificar lead',
    offsetX: 0,
  },
  {
    id: 3,
    icon: icons.pipedrive,
    iconLabel: 'CRM',
    title: 'Criar lead no CRM',
    description: 'Atualizar registro no Pipedrive',
    offsetX: 60,
  },
  {
    id: 4,
    icon: icons.email,
    iconLabel: 'Email',
    title: 'Enviar email de boas-vindas',
    description: 'Mensagem automática de confirmação',
    offsetX: 20,
  },
  {
    id: 5,
    icon: icons.whatsapp,
    iconLabel: 'WhatsApp',
    title: 'Notificar equipe comercial',
    description: 'Alerta para time de vendas',
    offsetX: 50,
  },
]

// Card width constant for positioning calculations
const CARD_WIDTH = 280

// Smooth spring transition
const springTransition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
}

// Fade transition for content
const fadeTransition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1] as const, // Smooth ease-out
}

// Individual workflow card component - skeleton style when inactive
function WorkflowCardComponent({
  card,
  isActive,
  index,
}: {
  card: WorkflowCard
  isActive: boolean
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, ...springTransition }}
      style={{ marginLeft: `${card.offsetX}px`, width: `${CARD_WIDTH}px` }}
      className="relative"
    >
      {/* Card */}
      <div
        className="relative bg-white rounded-xl p-4 border border-gray-200"
        style={{
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
        }}
      >
        {/* Line 1: Icon + Title */}
        <div className="flex items-center gap-3 mb-2">
          {/* Icon - smooth color transition */}
          <motion.div
            animate={{
              color: isActive ? '#374151' : '#D1D5DB',
            }}
            transition={fadeTransition}
            className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-gray-100 [&>svg]:w-5 [&>svg]:h-5"
          >
            {card.icon}
          </motion.div>

          {/* Title area - crossfade between skeleton and content */}
          <div className="flex-1 relative h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              {isActive ? (
                <motion.span
                  key="title"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={fadeTransition}
                  className="text-sm font-semibold text-gray-800 block"
                >
                  {card.title}
                </motion.span>
              ) : (
                <motion.div
                  key="skeleton-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-4 bg-gray-200 rounded w-full mt-0.5"
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Line 2: Description - crossfade between skeleton and content */}
        <div className="pl-11 h-4 overflow-hidden">
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.p
                key="description"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ ...fadeTransition, delay: 0.1 }}
                className="text-xs leading-relaxed text-gray-500"
              >
                {card.description}
              </motion.p>
            ) : (
              <motion.div
                key="skeleton-desc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-3 bg-gray-100 rounded w-4/5"
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

// Connector line between cards - centered on card
function ConnectorLine({
  isActive,
  cardOffsetX,
}: {
  isActive: boolean
  cardOffsetX: number
}) {
  // Position connector at center of card
  const connectorLeft = cardOffsetX + (CARD_WIDTH / 2)

  return (
    <div
      className="relative h-6"
      style={{ marginLeft: `${connectorLeft}px` }}
    >
      {/* Static vertical line with smooth color transition */}
      <motion.div
        animate={{
          backgroundColor: isActive ? '#9CA3AF' : '#E5E7EB',
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="w-0.5 h-full"
      />
    </div>
  )
}

export default function HeroWorkflowDemo() {
  const [currentPhase, setCurrentPhase] = useState(-1) // Start at -1 so all cards are skeleton initially
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

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

  // Animation cycle
  useEffect(() => {
    if (!isVisible || prefersReducedMotion) {
      if (prefersReducedMotion) setCurrentPhase(5) // Show complete state
      return
    }

    // Start with all skeletons, then reveal one by one
    setCurrentPhase(-1)

    // Phase timing (in ms):
    // -1: Initial state (all skeleton) - 500ms pause
    // 0-4: Each card reveals
    // 5: All visible, brief pause before reset
    const phaseDurations = [800, 1800, 1800, 1800, 1500, 1500, 1200]

    let currentIndex = -1
    let timeout: NodeJS.Timeout

    const advancePhase = () => {
      currentIndex = currentIndex + 1
      if (currentIndex > 5) {
        currentIndex = -1
      }
      setCurrentPhase(currentIndex)
    }

    const scheduleNext = () => {
      const phaseIndex = currentIndex + 1 // Map -1 to index 0
      timeout = setTimeout(() => {
        advancePhase()
        scheduleNext()
      }, phaseDurations[phaseIndex])
    }

    scheduleNext()

    return () => clearTimeout(timeout)
  }, [isVisible, prefersReducedMotion])

  // Helper functions to determine card states
  // Card is active if current phase >= card index (stays visible once activated)
  const isCardActive = (cardIndex: number) => currentPhase >= cardIndex
  // Connector is active once the next card is activated
  const isConnectorActive = (connectorIndex: number) => currentPhase > connectorIndex

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[400px] mx-auto lg:mx-0"
      aria-label="Demonstração de automação de captação de leads"
    >
      <span className="sr-only">
        Animação demonstrando um fluxo de automação: um formulário recebe um lead, valida as informações,
        cria o registro no CRM, envia email de boas-vindas e notifica a equipe comercial via WhatsApp.
      </span>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Workflow cards with connectors */}
        <div className="space-y-0">
          {workflowCards.map((card, index) => (
            <div key={card.id}>
              <WorkflowCardComponent
                card={card}
                isActive={isCardActive(index)}
                index={index}
              />
              {index < workflowCards.length - 1 && (
                <ConnectorLine
                  isActive={isConnectorActive(index)}
                  cardOffsetX={card.offsetX}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Decorative background elements */}
      <div className="absolute -top-6 -right-6 w-32 h-32 border border-brand-border/30 rounded-xl -z-10" />
      <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-brand-border/20 rounded-lg -z-10" />
    </div>
  )
}
