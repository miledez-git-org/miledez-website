'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
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
      transition={{ delay: index * 0.1, duration: 0.4 }}
      style={{ marginLeft: `${card.offsetX}px`, width: `${CARD_WIDTH}px` }}
      className="relative"
    >
      {/* Card */}
      <div
        className={`
          relative bg-white rounded-xl p-4 transition-all duration-500
          border border-gray-200
        `}
        style={{
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
        }}
      >
        {/* Line 1: Icon + Title */}
        <div className="flex items-center gap-3 mb-2">
          {/* Icon - skeleton or visible */}
          <div
            className={`
              w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg transition-all duration-500
              [&>svg]:w-5 [&>svg]:h-5
              ${isActive ? 'bg-gray-100 text-gray-700' : 'bg-gray-100 text-gray-300'}
            `}
          >
            {card.icon}
          </div>

          {/* Title - skeleton or visible */}
          <div className="flex-1 relative">
            {isActive ? (
              <span className="text-sm font-semibold text-gray-800 transition-all duration-500">
                {card.title}
              </span>
            ) : (
              <div className="h-4 bg-gray-200 rounded w-full" />
            )}
          </div>
        </div>

        {/* Line 2: Description - skeleton or visible */}
        <div className="pl-11">
          {isActive ? (
            <p className="text-xs leading-relaxed text-gray-500 transition-all duration-500">
              {card.description}
            </p>
          ) : (
            <div className="space-y-1.5">
              <div className="h-3 bg-gray-100 rounded w-4/5" />
            </div>
          )}
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
      {/* Static vertical line */}
      <div
        className={`
          w-0.5 h-full transition-colors duration-500
          ${isActive ? 'bg-gray-400' : 'bg-gray-200'}
        `}
      />
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
  // Card is active if current phase >= card index (stays visible once activated)
  const isCardActive = (cardIndex: number) => currentPhase >= cardIndex && currentPhase <= 5
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

      <div
        className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
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
      </div>

      {/* Decorative background elements */}
      <div className="absolute -top-6 -right-6 w-32 h-32 border border-brand-border/30 rounded-xl -z-10" />
      <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-brand-border/20 rounded-lg -z-10" />
    </div>
  )
}
