'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { stepIcons } from './Icons'

// Types
interface WorkflowCard {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

interface TriggerOption {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  logos: string[]
}

// Animation transitions (matching HeroWorkflowDemo)
const springTransition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
}

const fadeTransition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1] as const,
}

// Card dimensions
const TRIGGER_CARD_WIDTH = 280
const PROCESS_CARD_WIDTH = 180
const OUTPUT_CARD_WIDTH = 150

// Trigger options with different logo sets (rotate through these)
const triggerOptions: TriggerOption[] = [
  {
    id: 'email',
    icon: stepIcons.mail,
    title: 'Email recebido',
    description: 'Novo email chega na caixa',
    logos: ['gmail', 'google-drive', 'whatsapp', 'google-calendar', 'google-sheets'],
  },
  {
    id: 'form',
    icon: stepIcons.document,
    title: 'Formulario enviado',
    description: 'Cliente preenche formulario',
    logos: ['gmail', 'google-drive', 'notion', 'hubspot', 'slack'],
  },
  {
    id: 'schedule',
    icon: stepIcons.calendar,
    title: 'Horario programado',
    description: 'Automacao roda no horario',
    logos: ['shopify', 'mercado-livre', 'mercadopago', 'whatsapp', 'ifood'],
  },
]

// Processing cards
const processingCards: WorkflowCard[] = [
  {
    id: 'read',
    icon: stepIcons.document,
    title: 'Lendo dados',
    description: 'Extrai informacoes',
  },
  {
    id: 'validate',
    icon: stepIcons.check,
    title: 'Validando',
    description: 'Verifica criterios',
  },
  {
    id: 'transform',
    icon: stepIcons.refresh,
    title: 'Transformando',
    description: 'Formata dados',
  },
  {
    id: 'sync',
    icon: stepIcons.sync,
    title: 'Sincronizando',
    description: 'Conecta sistemas',
  },
]

// Output cards
const outputCards: WorkflowCard[] = [
  {
    id: 'crm',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="8" r="4"/>
        <path d="M5 20v-1a5 5 0 0110 0v1"/>
        <circle cx="18" cy="11" r="3"/>
        <path d="M19 20v-1a3 3 0 00-3-3"/>
      </svg>
    ),
    title: 'CRM atualizado',
    description: 'Registro criado',
  },
  {
    id: 'notify',
    icon: stepIcons.bell,
    title: 'Notificacao',
    description: 'Alerta enviado',
  },
  {
    id: 'pdf',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M6 2h8l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"/>
        <path d="M14 2v6h6"/>
        <path d="M10 13h4M10 17h2"/>
      </svg>
    ),
    title: 'PDF gerado',
    description: 'Documento criado',
  },
  {
    id: 'archive',
    icon: stepIcons.folder,
    title: 'Arquivado',
    description: 'Pasta organizada',
  },
  {
    id: 'dashboard',
    icon: stepIcons.chart,
    title: 'Dashboard',
    description: 'Metricas atualizadas',
  },
]

// SVG Connector Path Component with slower animation
function ConnectorPath({
  d,
  isActive,
  delay = 0,
}: {
  d: string
  isActive: boolean
  delay?: number
}) {
  return (
    <motion.path
      d={d}
      stroke="#9CA3AF"
      strokeWidth={2}
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: isActive ? 1 : 0,
        opacity: isActive ? 1 : 0,
      }}
      transition={{
        pathLength: { duration: 0.8, delay, ease: 'easeOut' },
        opacity: { duration: 0.3, delay },
      }}
    />
  )
}

// Trigger Card (matches HeroWorkflowDemo card design)
function TriggerCard({
  trigger,
  isActive,
  cardRef,
}: {
  trigger: TriggerOption
  isActive: boolean
  cardRef: React.RefObject<HTMLDivElement>
}) {
  return (
    <div className="flex justify-center">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 12 }}
        animate={{
          opacity: 1,
          y: isActive ? -2 : 0,
        }}
        transition={springTransition}
        className="relative"
        style={{ width: TRIGGER_CARD_WIDTH }}
      >
        {/* Card - matching HeroWorkflowDemo exactly */}
        <motion.div
          animate={{
            boxShadow: isActive
              ? '0 8px 24px rgba(0, 0, 0, 0.12)'
              : '0 2px 8px rgba(0, 0, 0, 0.06)',
          }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-xl p-4 border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-2">
            {/* Icon - smooth color transition */}
            <motion.div
              animate={{ color: isActive ? '#374151' : '#D1D5DB' }}
              transition={fadeTransition}
              className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-gray-100 [&>svg]:w-5 [&>svg]:h-5"
            >
              {trigger.icon}
            </motion.div>

            {/* Title area - crossfade between skeleton and content */}
            <div className="flex-1 relative h-5 overflow-hidden">
              <AnimatePresence mode="wait">
                {isActive ? (
                  <motion.span
                    key={`title-${trigger.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={fadeTransition}
                    className="text-sm font-medium text-gray-800 block tracking-tight"
                  >
                    {trigger.title}
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

          {/* Description - crossfade between skeleton and content */}
          <div className="pl-11 h-4 overflow-hidden mb-3">
            <AnimatePresence mode="wait">
              {isActive ? (
                <motion.p
                  key={`desc-${trigger.id}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ ...fadeTransition, delay: 0.1 }}
                  className="text-xs leading-relaxed text-gray-500"
                >
                  {trigger.description}
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

          {/* Logos row */}
          <div className="flex items-center justify-center pt-2 border-t border-gray-100">
            <AnimatePresence mode="wait">
              {isActive ? (
                <motion.div
                  key={`logos-${trigger.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ ...fadeTransition, delay: 0.15 }}
                  className="flex items-center justify-center gap-3"
                >
                  {trigger.logos.map((logo) => (
                    <div
                      key={logo}
                      className="w-5 h-5 flex-shrink-0 flex items-center justify-center"
                    >
                      <Image
                        src={`/logos/${logo}.svg`}
                        alt={logo}
                        width={20}
                        height={20}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="skeleton-logos"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center gap-3"
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-5 h-5 bg-gray-100 rounded" />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Processing Card (matches HeroWorkflowDemo card design)
function ProcessingCard({
  card,
  isActive,
  index,
  cardRef,
}: {
  card: WorkflowCard
  isActive: boolean
  index: number
  cardRef: React.RefObject<HTMLDivElement>
}) {
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: 1,
        y: isActive ? -2 : 0,
      }}
      transition={{
        ...springTransition,
        delay: index * 0.08,
      }}
      className="flex-shrink-0"
      style={{ width: PROCESS_CARD_WIDTH }}
    >
      <motion.div
        animate={{
          boxShadow: isActive
            ? '0 8px 24px rgba(0, 0, 0, 0.12)'
            : '0 2px 8px rgba(0, 0, 0, 0.06)',
        }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl p-4 border border-gray-200"
      >
        <div className="flex items-center gap-3 mb-2">
          {/* Icon */}
          <motion.div
            animate={{ color: isActive ? '#374151' : '#D1D5DB' }}
            transition={fadeTransition}
            className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-gray-100 [&>svg]:w-5 [&>svg]:h-5"
          >
            {card.icon}
          </motion.div>

          {/* Title */}
          <div className="flex-1 relative h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              {isActive ? (
                <motion.span
                  key={`title-${card.id}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={fadeTransition}
                  className="text-sm font-medium text-gray-800 block tracking-tight"
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

        {/* Description */}
        <div className="pl-11 h-4 overflow-hidden">
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.p
                key={`desc-${card.id}`}
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
      </motion.div>
    </motion.div>
  )
}

// Output Card (matches HeroWorkflowDemo card design)
function OutputCard({
  card,
  isActive,
  index,
  cardRef,
}: {
  card: WorkflowCard
  isActive: boolean
  index: number
  cardRef: React.RefObject<HTMLDivElement>
}) {
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: 1,
        y: isActive ? -2 : 0,
      }}
      transition={{
        ...springTransition,
        delay: index * 0.08,
      }}
      className="flex-shrink-0"
      style={{ width: OUTPUT_CARD_WIDTH }}
    >
      <motion.div
        animate={{
          boxShadow: isActive
            ? '0 8px 24px rgba(0, 0, 0, 0.12)'
            : '0 2px 8px rgba(0, 0, 0, 0.06)',
        }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl p-3 border border-gray-200"
      >
        <div className="flex items-center gap-2 mb-1.5">
          {/* Icon */}
          <motion.div
            animate={{ color: isActive ? '#374151' : '#D1D5DB' }}
            transition={fadeTransition}
            className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-lg bg-gray-100 [&>svg]:w-4 [&>svg]:h-4"
          >
            {card.icon}
          </motion.div>

          {/* Title */}
          <div className="flex-1 relative h-4 overflow-hidden">
            <AnimatePresence mode="wait">
              {isActive ? (
                <motion.span
                  key={`title-${card.id}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={fadeTransition}
                  className="text-xs font-medium text-gray-800 block tracking-tight"
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
                  className="h-3 bg-gray-200 rounded w-full mt-0.5"
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Description */}
        <div className="pl-8 h-3 overflow-hidden">
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.p
                key={`desc-${card.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ...fadeTransition, delay: 0.05 }}
                className="text-[10px] leading-relaxed text-gray-500"
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
                className="h-2.5 bg-gray-100 rounded w-3/4"
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Card positions type
interface CardPositions {
  trigger: { x: number; y: number; width: number; height: number } | null
  processing: Array<{ x: number; y: number; width: number; height: number } | null>
  outputs: Array<{ x: number; y: number; width: number; height: number } | null>
}

// SVG Connectors Component using measured positions
function ConnectorsSVG({
  containerRef,
  positions,
  processingActive,
  outputsActive,
  activeProcessCard,
  activeOutputCard,
}: {
  containerRef: React.RefObject<HTMLDivElement>
  positions: CardPositions
  processingActive: boolean
  outputsActive: boolean
  activeProcessCard: number
  activeOutputCard: number
}) {
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setSvgDimensions({ width: rect.width, height: rect.height })
    }
  }, [containerRef, positions])

  if (svgDimensions.width === 0 || !positions.trigger) return null

  const radius = 12 // Corner radius for smooth elbows

  // Get trigger bottom center - exact edge
  const triggerBottomX = positions.trigger.x + positions.trigger.width / 2
  const triggerBottomY = positions.trigger.y + positions.trigger.height

  // Get first processing card top for midpoint calculation
  const firstProcessCard = positions.processing[0]
  const processTopY = firstProcessCard ? firstProcessCard.y : triggerBottomY + 80

  // Calculate midpoint between trigger bottom and processing top
  const triggerToProcessMidY = triggerBottomY + (processTopY - triggerBottomY) / 2

  // Last processing card (sync) for output connections
  const syncCard = positions.processing[3]
  const syncBottomX = syncCard ? syncCard.x + syncCard.width / 2 : 0
  const syncBottomY = syncCard ? syncCard.y + syncCard.height : 0

  // Get first output card top for midpoint calculation
  const firstOutputCard = positions.outputs[0]
  const outputTopY = firstOutputCard ? firstOutputCard.y : syncBottomY + 80

  // Calculate midpoint between sync bottom and output top
  const syncToOutputMidY = syncBottomY + (outputTopY - syncBottomY) / 2

  return (
    <svg
      className="absolute inset-0 pointer-events-none overflow-visible"
      width={svgDimensions.width}
      height={svgDimensions.height}
      style={{ zIndex: 0 }}
    >
      {/* Trigger vertical stem - draws first */}
      {firstProcessCard && (
        <ConnectorPath
          d={`M ${triggerBottomX} ${triggerBottomY} L ${triggerBottomX} ${triggerToProcessMidY}`}
          isActive={processingActive}
          delay={0}
        />
      )}

      {/* Trigger to processing branches - curve from midpoint to each card */}
      {positions.processing.map((pos, index) => {
        if (!pos) return null

        const cardTopX = pos.x + pos.width / 2
        const cardTopY = pos.y

        // Build path from midpoint to card top (branches from stem)
        let path: string

        if (Math.abs(cardTopX - triggerBottomX) < 5) {
          // Center aligned - continue straight down from midpoint
          path = `M ${triggerBottomX} ${triggerToProcessMidY} L ${cardTopX} ${cardTopY}`
        } else if (cardTopX < triggerBottomX) {
          // Left side - horizontal left, then curve down to card
          path = `M ${triggerBottomX} ${triggerToProcessMidY}
                  L ${cardTopX + radius} ${triggerToProcessMidY}
                  Q ${cardTopX} ${triggerToProcessMidY} ${cardTopX} ${triggerToProcessMidY + radius}
                  L ${cardTopX} ${cardTopY}`
        } else {
          // Right side - horizontal right, then curve down to card
          path = `M ${triggerBottomX} ${triggerToProcessMidY}
                  L ${cardTopX - radius} ${triggerToProcessMidY}
                  Q ${cardTopX} ${triggerToProcessMidY} ${cardTopX} ${triggerToProcessMidY + radius}
                  L ${cardTopX} ${cardTopY}`
        }

        return (
          <ConnectorPath
            key={`trigger-to-process-${index}`}
            d={path}
            isActive={activeProcessCard >= index}
            delay={0.2 + index * 0.25}
          />
        )
      })}

      {/* Horizontal connectors between processing cards - edge to edge */}
      {[0, 1, 2].map((index) => {
        const fromCard = positions.processing[index]
        const toCard = positions.processing[index + 1]
        if (!fromCard || !toCard) return null

        // Connect right edge of fromCard to left edge of toCard
        const startX = fromCard.x + fromCard.width
        const endX = toCard.x
        const y = fromCard.y + fromCard.height / 2

        return (
          <ConnectorPath
            key={`horiz-${index}`}
            d={`M ${startX} ${y} L ${endX} ${y}`}
            isActive={activeProcessCard > index}
            delay={0.4 + index * 0.2}
          />
        )
      })}

      {/* Sync vertical stem - draws when outputs phase starts */}
      {syncCard && firstOutputCard && (
        <ConnectorPath
          d={`M ${syncBottomX} ${syncBottomY} L ${syncBottomX} ${syncToOutputMidY}`}
          isActive={outputsActive}
          delay={0}
        />
      )}

      {/* Sync to output branches - curve from midpoint to each output card */}
      {positions.outputs.map((pos, index) => {
        if (!pos || !syncCard) return null

        const cardTopX = pos.x + pos.width / 2
        const cardTopY = pos.y

        // Build path from midpoint to output card top (branches from stem)
        let path: string

        if (Math.abs(cardTopX - syncBottomX) < 5) {
          // Center aligned - continue straight down from midpoint
          path = `M ${syncBottomX} ${syncToOutputMidY} L ${cardTopX} ${cardTopY}`
        } else if (cardTopX < syncBottomX) {
          // Left side - horizontal left, then curve down to card
          path = `M ${syncBottomX} ${syncToOutputMidY}
                  L ${cardTopX + radius} ${syncToOutputMidY}
                  Q ${cardTopX} ${syncToOutputMidY} ${cardTopX} ${syncToOutputMidY + radius}
                  L ${cardTopX} ${cardTopY}`
        } else {
          // Right side - horizontal right, then curve down to card
          path = `M ${syncBottomX} ${syncToOutputMidY}
                  L ${cardTopX - radius} ${syncToOutputMidY}
                  Q ${cardTopX} ${syncToOutputMidY} ${cardTopX} ${syncToOutputMidY + radius}
                  L ${cardTopX} ${cardTopY}`
        }

        return (
          <ConnectorPath
            key={`sync-to-output-${index}`}
            d={path}
            isActive={activeOutputCard >= index}
            delay={0.15 + index * 0.18}
          />
        )
      })}
    </svg>
  )
}

// Main Component
export default function WorkflowTiersDemo() {
  const [currentPhase, setCurrentPhase] = useState(-1)
  const [currentTriggerIndex, setCurrentTriggerIndex] = useState(0)
  const [activeProcessCard, setActiveProcessCard] = useState(-1)
  const [activeOutputCard, setActiveOutputCard] = useState(-1)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [cardPositions, setCardPositions] = useState<CardPositions>({
    trigger: null,
    processing: [null, null, null, null],
    outputs: [null, null, null, null, null],
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const processRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]
  const outputRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  // Measure card positions
  const measurePositions = useCallback(() => {
    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()

    const getRelativePos = (ref: React.RefObject<HTMLDivElement>) => {
      if (!ref.current) return null
      const rect = ref.current.getBoundingClientRect()
      return {
        x: rect.left - containerRect.left,
        y: rect.top - containerRect.top,
        width: rect.width,
        height: rect.height,
      }
    }

    setCardPositions({
      trigger: getRelativePos(triggerRef),
      processing: processRefs.map(getRelativePos),
      outputs: outputRefs.map(getRelativePos),
    })
  }, [])

  // Measure on mount and resize
  useEffect(() => {
    measurePositions()
    window.addEventListener('resize', measurePositions)
    return () => window.removeEventListener('resize', measurePositions)
  }, [measurePositions])

  // Re-measure when visibility changes
  useEffect(() => {
    if (isVisible) {
      // Small delay to ensure DOM is ready
      setTimeout(measurePositions, 100)
    }
  }, [isVisible, measurePositions])

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

  // Animation cycle - SLOWED DOWN significantly
  useEffect(() => {
    if (!isVisible || prefersReducedMotion) {
      if (prefersReducedMotion) {
        setCurrentPhase(3)
        setActiveProcessCard(processingCards.length - 1)
        setActiveOutputCard(outputCards.length - 1)
      }
      return
    }

    // Reset state
    setCurrentPhase(-1)
    setActiveProcessCard(-1)
    setActiveOutputCard(-1)

    // Phase timing - MUCH SLOWER for better comprehension
    const phases = [
      { delay: 1200, action: () => setCurrentPhase(0) },   // Trigger reveals - longer initial pause
      { delay: 2000, action: () => setCurrentPhase(1) },   // Processing tier starts - time to read trigger
      // Sequential processing cards - slower reveal
      { delay: 800, action: () => setActiveProcessCard(0) },
      { delay: 1000, action: () => setActiveProcessCard(1) },
      { delay: 1000, action: () => setActiveProcessCard(2) },
      { delay: 1000, action: () => setActiveProcessCard(3) },
      { delay: 1200, action: () => setCurrentPhase(2) },   // Outputs tier starts - pause after processing
      // Cascade output cards - slower cascade
      { delay: 600, action: () => setActiveOutputCard(0) },
      { delay: 500, action: () => setActiveOutputCard(1) },
      { delay: 500, action: () => setActiveOutputCard(2) },
      { delay: 500, action: () => setActiveOutputCard(3) },
      { delay: 500, action: () => setActiveOutputCard(4) },
      { delay: 800, action: () => setCurrentPhase(3) },   // Complete
      // Hold longer at complete state, then reset
      { delay: 4000, action: () => {
        setCurrentPhase(-1)
        setActiveProcessCard(-1)
        setActiveOutputCard(-1)
        setCurrentTriggerIndex((prev) => (prev + 1) % triggerOptions.length)
      }},
    ]

    const timeouts: NodeJS.Timeout[] = []
    let cumulativeDelay = 0

    phases.forEach(({ delay, action }) => {
      cumulativeDelay += delay
      timeouts.push(setTimeout(action, cumulativeDelay))
    })

    // Loop interval
    const totalDuration = cumulativeDelay + 1000
    const loopInterval = setInterval(() => {
      let innerCumulativeDelay = 0
      phases.forEach(({ delay, action }) => {
        innerCumulativeDelay += delay
        timeouts.push(setTimeout(action, innerCumulativeDelay))
      })
    }, totalDuration)

    return () => {
      timeouts.forEach(clearTimeout)
      clearInterval(loopInterval)
    }
  }, [isVisible, prefersReducedMotion])

  const currentTrigger = triggerOptions[currentTriggerIndex]

  return (
    <div
      ref={containerRef}
      className="w-full max-w-4xl mx-auto relative"
      style={{ minHeight: '520px' }}
      aria-label="Demonstracao de automacao de workflow"
    >
      <span className="sr-only">
        Animacao demonstrando as etapas de uma automacao: gatilho, processamento e resultados.
      </span>

      {/* SVG Connectors Layer - desktop only */}
      <div className="hidden md:block">
        <ConnectorsSVG
          containerRef={containerRef}
          positions={cardPositions}
          processingActive={currentPhase >= 1}
          outputsActive={currentPhase >= 2}
          activeProcessCard={activeProcessCard}
          activeOutputCard={activeOutputCard}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {/* Trigger Card */}
        <div className="mb-20">
          <TriggerCard
            trigger={currentTrigger}
            isActive={currentPhase >= 0}
            cardRef={triggerRef}
          />
        </div>

        {/* Processing Cards */}
        <div className="mb-20">
          {/* Desktop: horizontal row */}
          <div className="hidden md:flex items-center justify-center gap-3">
            {processingCards.map((card, index) => (
              <ProcessingCard
                key={card.id}
                card={card}
                isActive={activeProcessCard >= index}
                index={index}
                cardRef={processRefs[index]}
              />
            ))}
          </div>

          {/* Mobile: 2x2 grid */}
          <div className="grid grid-cols-2 gap-3 md:hidden px-4">
            {processingCards.map((card, index) => (
              <ProcessingCard
                key={card.id}
                card={card}
                isActive={activeProcessCard >= index}
                index={index}
                cardRef={processRefs[index]}
              />
            ))}
          </div>
        </div>

        {/* Output Cards */}
        <div>
          {/* Desktop: horizontal row */}
          <div className="hidden md:flex items-center justify-center gap-2">
            {outputCards.map((card, index) => (
              <OutputCard
                key={card.id}
                card={card}
                isActive={activeOutputCard >= index}
                index={index}
                cardRef={outputRefs[index]}
              />
            ))}
          </div>

          {/* Mobile: 2-column grid with last item centered */}
          <div className="grid grid-cols-2 gap-2 md:hidden px-4">
            {outputCards.slice(0, 4).map((card, index) => (
              <OutputCard
                key={card.id}
                card={card}
                isActive={activeOutputCard >= index}
                index={index}
                cardRef={outputRefs[index]}
              />
            ))}
          </div>
          <div className="flex justify-center mt-2 md:hidden px-4">
            <OutputCard
              card={outputCards[4]}
              isActive={activeOutputCard >= 4}
              index={4}
              cardRef={outputRefs[4]}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
