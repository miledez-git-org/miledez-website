'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { stepIcons } from './Icons'

interface WorkflowCard {
  id: number
  icon: React.ReactNode
  iconLabel: string
  title: string
  description: string
  offsetX: number
}

interface Workflow {
  name: string
  industry: string
  industryLogos: string[]
  cards: WorkflowCard[]
}

// 5 workflow examples that rotate - data from sub-pages
const workflows: Workflow[] = [
  {
    name: 'Coleta de Documentos',
    industry: 'Saúde e Clínicas',
    industryLogos: ['gmail', 'google-drive', 'whatsapp', 'google-calendar', 'google-sheets'],
    cards: [
      { id: 1, icon: stepIcons.user, iconLabel: 'Paciente', title: 'Novo paciente', description: 'Um cadastro inicia o processo de coleta.', offsetX: 40 },
      { id: 2, icon: stepIcons.mail, iconLabel: 'Email', title: 'Formulário enviado', description: 'Ficha de anamnese enviada automaticamente.', offsetX: 0 },
      { id: 3, icon: stepIcons.folder, iconLabel: 'Docs', title: 'Docs organizados', description: 'Arquivos classificados automaticamente.', offsetX: 60 },
      { id: 4, icon: stepIcons.check, iconLabel: 'Pronto', title: 'Prontuário completo', description: 'Tudo pronto para o atendimento.', offsetX: 20 },
    ],
  },
  {
    name: 'Gestão de Contratos',
    industry: 'Serviços Profissionais',
    industryLogos: ['gmail', 'google-drive', 'notion', 'hubspot', 'slack'],
    cards: [
      { id: 1, icon: stepIcons.document, iconLabel: 'Contrato', title: 'Contrato cadastrado', description: 'Data de vencimento registrada.', offsetX: 20 },
      { id: 2, icon: stepIcons.calendar, iconLabel: 'Alertas', title: 'Alertas programados', description: 'Notificações 60, 30 e 15 dias antes.', offsetX: 50 },
      { id: 3, icon: stepIcons.document, iconLabel: 'Proposta', title: 'Proposta gerada', description: 'Renovação pré-preenchida.', offsetX: 10 },
      { id: 4, icon: stepIcons.check, iconLabel: 'Renovado', title: 'Renovação garantida', description: 'Status sempre atualizado.', offsetX: 40 },
    ],
  },
  {
    name: 'Relatórios para Clientes',
    industry: 'Serviços Profissionais',
    industryLogos: ['gmail', 'google-drive', 'notion', 'hubspot', 'slack'],
    cards: [
      { id: 1, icon: stepIcons.calendar, iconLabel: 'Agenda', title: 'Data programada', description: 'Semanal, mensal ou por projeto.', offsetX: 30 },
      { id: 2, icon: stepIcons.refresh, iconLabel: 'Dados', title: 'Dados coletados', description: 'Métricas puxadas automaticamente.', offsetX: 60 },
      { id: 3, icon: stepIcons.document, iconLabel: 'Relatório', title: 'Relatório formatado', description: 'Layout profissional consistente.', offsetX: 0 },
      { id: 4, icon: stepIcons.check, iconLabel: 'Enviado', title: 'Entrega automática', description: 'Cliente recebe no prazo.', offsetX: 45 },
    ],
  },
  {
    name: 'Faturamento de Convênios',
    industry: 'Saúde e Clínicas',
    industryLogos: ['gmail', 'google-drive', 'whatsapp', 'google-calendar', 'google-sheets'],
    cards: [
      { id: 1, icon: stepIcons.result, iconLabel: 'Consulta', title: 'Consulta finalizada', description: 'Dados do atendimento registrados.', offsetX: 50 },
      { id: 2, icon: stepIcons.document, iconLabel: 'Guia', title: 'Guia formatada', description: 'Documento conforme exigências do convênio.', offsetX: 15 },
      { id: 3, icon: stepIcons.mail, iconLabel: 'Envio', title: 'Envio automático', description: 'Submissão ao portal do convênio.', offsetX: 40 },
      { id: 4, icon: stepIcons.check, iconLabel: 'Status', title: 'Status rastreado', description: 'Acompanhamento até o pagamento.', offsetX: 5 },
    ],
  },
  {
    name: 'Conciliação Financeira',
    industry: 'Varejo e E-commerce',
    industryLogos: ['shopify', 'mercado-livre', 'mercadopago', 'whatsapp', 'ifood'],
    cards: [
      { id: 1, icon: stepIcons.creditCard, iconLabel: 'Venda', title: 'Venda registrada', description: 'Dados capturados automaticamente.', offsetX: 10 },
      { id: 2, icon: stepIcons.sync, iconLabel: 'Verificar', title: 'Pagamento verificado', description: 'Cruzamento com extrato bancário.', offsetX: 55 },
      { id: 3, icon: stepIcons.document, iconLabel: 'Relatório', title: 'Relatório gerado', description: 'Consolidação por período.', offsetX: 25 },
      { id: 4, icon: stepIcons.check, iconLabel: 'Alerta', title: 'Divergências alertadas', description: 'Diferenças identificadas na hora.', offsetX: 45 },
    ],
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

// Industry card with integration logos - shown at the top of workflow
function IndustryCard({
  industry,
  logos,
  isActive,
}: {
  industry: string
  logos: string[]
  isActive: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0, ...springTransition }}
      style={{ marginLeft: '30px', width: `${CARD_WIDTH}px` }}
      className="relative"
    >
      {/* Card */}
      <div
        className="relative bg-white rounded-xl p-4 border border-gray-200"
        style={{
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
        }}
      >
        {/* Industry title - centered, dark red */}
        <div className="mb-3 text-center">
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.span
                key="industry-title"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={fadeTransition}
                className="text-sm font-medium text-brand-accent block tracking-tight"
              >
                {industry}
              </motion.span>
            ) : (
              <motion.div
                key="skeleton-industry"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-4 bg-gray-200 rounded w-2/3 mx-auto"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Logos row - centered */}
        <div className="flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div
                key="logos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ...fadeTransition, delay: 0.1 }}
                className="flex items-center justify-center gap-3"
              >
                {logos.map((logo) => (
                  <div
                    key={logo}
                    className="w-6 h-6 flex-shrink-0 flex items-center justify-center"
                  >
                    <Image
                      src={`/logos/${logo}.svg`}
                      alt={logo}
                      width={24}
                      height={24}
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
                  <div
                    key={i}
                    className="w-6 h-6 bg-gray-100 rounded"
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default function HeroWorkflowDemo() {
  const [currentPhase, setCurrentPhase] = useState(-1) // Start at -1 so all cards are skeleton initially
  const [currentWorkflowIndex, setCurrentWorkflowIndex] = useState(0) // Track which workflow is showing
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Parallax effect for decorative elements
  const { scrollY } = useScroll()
  const parallaxY1 = useTransform(scrollY, [0, 500], [0, 30])
  const parallaxY2 = useTransform(scrollY, [0, 500], [0, -20])
  const parallaxRotate = useTransform(scrollY, [0, 500], [0, 5])
  const parallaxScale = useTransform(scrollY, [0, 300], [1, 1.1])

  // Get current workflow cards
  const currentWorkflow = workflows[currentWorkflowIndex]
  const workflowCards = currentWorkflow.cards

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

  // Animation cycle - rotates through workflows
  useEffect(() => {
    if (!isVisible || prefersReducedMotion) {
      if (prefersReducedMotion) setCurrentPhase(5) // Show complete state (1 industry + 4 workflow cards)
      return
    }

    // Start with all skeletons, then reveal one by one
    setCurrentPhase(-1)

    // Phase timing (in ms) for 5 cards (1 industry + 4 workflow):
    // -1: Initial state (all skeleton) - pause
    // 0: Industry card reveals first
    // 1-4: Each workflow card reveals
    // 5: All visible, brief pause before switching workflow
    const phaseDurations = [800, 1500, 1800, 1800, 1800, 1500, 1200]

    let currentIndex = -1
    let timeout: NodeJS.Timeout

    const advancePhase = () => {
      currentIndex = currentIndex + 1
      if (currentIndex > 5) {
        // Reset phase and move to next workflow
        currentIndex = -1
        setCurrentWorkflowIndex((prev) => (prev + 1) % workflows.length)
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
  // Industry card is phase 0, workflow cards are phases 1-4
  const isIndustryCardActive = () => currentPhase >= 0
  // Workflow card index 0-3 maps to phase 1-4
  const isCardActive = (cardIndex: number) => currentPhase >= cardIndex + 1
  // Connector is active once the next card is activated
  const isConnectorActive = (connectorIndex: number) => currentPhase > connectorIndex + 1

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[400px] mx-auto lg:mx-0"
      aria-label={`Demonstração de automação: ${currentWorkflow.name}`}
    >
      <span className="sr-only">
        Animação demonstrando fluxos de automação. Exemplo atual: {currentWorkflow.name}.
      </span>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Workflow cards with connectors - AnimatePresence for smooth workflow transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWorkflowIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-0"
          >
            {/* Industry card at the top - reveals first */}
            <IndustryCard
              industry={currentWorkflow.industry}
              logos={currentWorkflow.industryLogos}
              isActive={isIndustryCardActive()}
            />
            {/* Connector line from industry card to first workflow card */}
            <ConnectorLine
              isActive={isCardActive(0)}
              cardOffsetX={30}
            />
            {/* Workflow cards */}
            {workflowCards.map((card, index) => (
              <div key={card.id}>
                <WorkflowCardComponent
                  card={card}
                  isActive={isCardActive(index)}
                  index={index + 1}
                />
                {index < workflowCards.length - 1 && (
                  <ConnectorLine
                    isActive={isConnectorActive(index)}
                    cardOffsetX={card.offsetX}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Decorative background elements with parallax */}
      <motion.div
        className="absolute -top-6 -right-6 w-32 h-32 border border-brand-border/30 rounded-xl -z-10"
        style={{
          y: prefersReducedMotion ? 0 : parallaxY1,
          rotate: prefersReducedMotion ? 0 : parallaxRotate,
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -bottom-4 -left-4 w-20 h-20 border border-brand-border/20 rounded-lg -z-10"
        style={{
          y: prefersReducedMotion ? 0 : parallaxY2,
        }}
        aria-hidden="true"
      />
      {/* Additional decorative element for depth */}
      <motion.div
        className="absolute top-1/2 -right-12 w-16 h-16 border border-brand-accent/10 rounded-full -z-10"
        style={{
          y: prefersReducedMotion ? 0 : parallaxY2,
          scale: prefersReducedMotion ? 1 : parallaxScale,
        }}
        aria-hidden="true"
      />
    </div>
  )
}
