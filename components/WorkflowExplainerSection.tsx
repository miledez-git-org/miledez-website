'use client'

import { Fragment, useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// --- Types ---

interface PipelineNode {
  label: string
  logo: string
}

// --- Constants ---

const CONNECTOR_COLOR = '#9ca3af'
const EASE = [0.16, 1, 0.3, 1] as const
const TICK_MS = 2000
const FADE_DURATION = 0.8

const PHASES = [
  { key: 'trigger' as const, label: 'Gatilho', description: 'Algo acontece no seu dia a dia' },
  { key: 'process' as const, label: 'Processo', description: 'A automação executa sem intervenção' },
  { key: 'result' as const, label: 'Resultado', description: 'Sua equipe recebe tudo pronto' },
]

// Each column cycles through its own set of nodes
const NODE_SETS: [PipelineNode[], PipelineNode[], PipelineNode[]] = [
  [
    { label: 'Consulta agendada', logo: 'google-calendar.svg' },
    { label: 'Contrato perto de vencer', logo: 'google-sheets.svg' },
    { label: 'Pedido de insumo recebido', logo: 'whatsapp.svg' },
  ],
  [
    { label: 'Lembrete enviado via WhatsApp', logo: 'whatsapp.svg' },
    { label: 'Renovação preparada', logo: 'google-drive.svg' },
    { label: 'Cotações comparadas', logo: 'google-sheets.svg' },
  ],
  [
    { label: 'Paciente confirmado', logo: 'whatsapp.svg' },
    { label: 'Contrato renovado', logo: 'gmail.svg' },
    { label: 'Melhor preço escolhido', logo: 'google-sheets.svg' },
  ],
]

// Sub-process cards shown below the middle "Processo" column (one set per scenario)
const SUB_PROCESS_NODE_SETS: [PipelineNode[], PipelineNode[]] = [
  // Sub-process card 1
  [
    { label: 'Prontuário atualizado', logo: 'google-drive.svg' },
    { label: 'Cláusulas revisadas', logo: 'google-drive.svg' },
    { label: 'Estoque atualizado', logo: 'google-sheets.svg' },
  ],
  // Sub-process card 2
  [
    { label: 'Relatório mensal gerado', logo: 'excel.svg' },
    { label: 'Notificação enviada ao cliente', logo: 'gmail.svg' },
    { label: 'Nota fiscal registrada', logo: 'excel.svg' },
  ],
]

// --- Sub-components ---

function PhaseLabel({ label, description, variant = 'default' }: { label: string; description: string; variant?: 'default' | 'highlight' }) {
  const isHighlight = variant === 'highlight'
  return (
    <div className="flex flex-col items-center">
      <span
        className={`text-lg font-bold uppercase tracking-wide ${isHighlight ? 'text-white' : 'text-brand-black'}`}
        style={{ fontFamily: 'var(--font-manrope)' }}
      >
        {label}
      </span>
      <span className={`text-base leading-relaxed mt-2 ${isHighlight ? 'text-white' : 'text-neutral-600'}`}>
        {description}
      </span>
    </div>
  )
}

function NodeCard({ node, align = 'center', onOrange = false }: { node: PipelineNode; align?: 'center' | 'left'; onOrange?: boolean }) {
  return (
    <div
      className={`flex items-center ${align === 'left' ? 'justify-start' : 'justify-center'} gap-3 bg-white rounded-xl px-6 py-4 transition-shadow duration-200 w-[300px] h-[64px] ${onOrange ? 'border border-white/20' : 'border border-neutral-200'}`}
      style={{ boxShadow: onOrange ? '3px 5px 16px rgba(120, 30, 0, 0.25)' : '3px 4px 12px rgba(0, 0, 0, 0.10)' }}
    >
      <img
        src={`/logos/${node.logo}`}
        alt=""
        width={32}
        height={32}
        className="flex-shrink-0"
      />
      <span className="text-base font-medium text-brand-black leading-snug">
        {node.label}
      </span>
    </div>
  )
}

function HorizontalArrow() {
  return (
    <div className="flex items-center flex-shrink-0" style={{ width: '24px' }}>
      <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
        <path
          d="M0 7h18"
          stroke={CONNECTOR_COLOR}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M15 3l5 4-5 4"
          stroke={CONNECTOR_COLOR}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  )
}

function VerticalArrow() {
  return (
    <div className="flex flex-col items-center my-1" style={{ height: '28px' }}>
      <div className="w-[1.5px] flex-1 bg-neutral-400" />
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
        <path
          d="M1 1l5 6 5-6"
          stroke={CONNECTOR_COLOR}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function VerticalLine({ height = 24, color = CONNECTOR_COLOR }: { height?: number; color?: string }) {
  return (
    <div className="flex justify-center" style={{ height }}>
      <div className="w-[1.5px] h-full" style={{ backgroundColor: color }} />
    </div>
  )
}

// --- Component ---

export default function WorkflowExplainerSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.08 })
  const [activeIndices, setActiveIndices] = useState([0, 0, 0])
  const [isPaused, setIsPaused] = useState(false)
  // Tracks which column to change next: 0, 1, 2, 0, 1, 2, ...
  const nextColumn = useRef(0)

  // Single interval: every tick, advance ONE card (round-robin across columns)
  useEffect(() => {
    if (!isVisible || isPaused) return

    const interval = setInterval(() => {
      const col = nextColumn.current
      setActiveIndices((prev) => {
        const next = [...prev]
        next[col] = (prev[col] + 1) % NODE_SETS[col].length
        return next
      })
      nextColumn.current = (col + 1) % 3
    }, TICK_MS)

    return () => clearInterval(interval)
  }, [isVisible, isPaused])

  return (
    <section className="bg-white py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="mb-14 md:mb-16 text-center">
          <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
            Como funciona uma<br />
            <span className="text-brand-primary">automação</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-xl mx-auto">
            Todo processo repetitivo vira um fluxo automático — do gatilho ao resultado.
          </p>
        </div>

        {/* Pipeline */}
        <div
          ref={sectionRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Desktop: horizontal pipeline — each column is its own card */}
          <div className="hidden md:flex items-start justify-center gap-0">
            {PHASES.map((phase, colIndex) => (
              <Fragment key={phase.key}>
                <motion.div
                  className={`rounded-2xl px-6 py-8 flex flex-col items-center ${colIndex === 1 ? 'bg-white border-[3px] border-brand-secondary' : 'bg-[#f5f5f7]'}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.5, delay: colIndex * 0.14, ease: EASE }}
                >
                  {/* Column label */}
                  <div className="mb-5">
                    <PhaseLabel label={phase.label} description={phase.description} variant="default" />
                  </div>

                  {/* Main cycling card */}
                  <div className="relative h-[64px] w-[300px] overflow-hidden">
                    <AnimatePresence initial={false}>
                      <motion.div
                        key={`d-${colIndex}-${activeIndices[colIndex]}`}
                        className="absolute inset-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: FADE_DURATION, ease: 'easeInOut' }}
                      >
                        <NodeCard node={NODE_SETS[colIndex][activeIndices[colIndex]]} align={colIndex === 1 ? 'left' : 'center'} onOrange={false} />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Sub-process cards (process column only) */}
                  {colIndex === 1 && SUB_PROCESS_NODE_SETS.map((nodeSet, i) => (
                    <div key={`sub-${i}`} className="flex flex-col items-center">
                      <VerticalLine color="#eb5100" />
                      <div className="relative h-[64px] w-[300px] overflow-hidden">
                        <AnimatePresence initial={false}>
                          <motion.div
                            key={`d-sub-${i}-${activeIndices[1]}`}
                            className="absolute inset-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: FADE_DURATION, ease: 'easeInOut' }}
                          >
                            <NodeCard node={nodeSet[activeIndices[1]]} align="left" onOrange={false} />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Arrow between columns — aligned to title centerline */}
                {colIndex < 2 && (
                  <motion.div
                    className="flex-shrink-0 self-start mx-[8px]"
                    style={{ marginTop: 'calc(32px + 10px)' }}
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.35, delay: colIndex * 0.14 + 0.18, ease: EASE }}
                  >
                    <HorizontalArrow />
                  </motion.div>
                )}
              </Fragment>
            ))}
          </div>

          {/* Mobile: vertical pipeline */}
          <div className="flex md:hidden flex-col items-center">
            {PHASES.map((phase, stepIndex) => (
              <Fragment key={phase.key}>
                <div className="flex flex-col items-center gap-2">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, x: -12 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                    transition={{ duration: 0.4, delay: stepIndex * 0.14, ease: EASE }}
                  >
                    <PhaseLabel label={phase.label} description={phase.description} />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                    transition={{ duration: 0.5, delay: stepIndex * 0.14 + 0.06, ease: EASE }}
                  >
                    <div className="relative h-[64px] w-[300px] overflow-hidden">
                      <AnimatePresence initial={false}>
                        <motion.div
                          key={`m-${stepIndex}-${activeIndices[stepIndex]}`}
                          className="absolute inset-0"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: FADE_DURATION, ease: 'easeInOut' }}
                        >
                          <NodeCard node={NODE_SETS[stepIndex][activeIndices[stepIndex]]} onOrange={false} />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Sub-process cards after the Process phase (index 1) */}
                  {stepIndex === 1 && SUB_PROCESS_NODE_SETS.map((nodeSet, i) => (
                    <motion.div
                      key={`m-sub-${i}`}
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, y: 14 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.14, ease: EASE }}
                    >
                      <VerticalLine color="#eb5100" />
                      <div className="relative h-[64px] w-[300px] overflow-hidden">
                        <AnimatePresence initial={false}>
                          <motion.div
                            key={`m-sub-${i}-${activeIndices[1]}`}
                            className="absolute inset-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: FADE_DURATION, ease: 'easeInOut' }}
                          >
                            <NodeCard node={nodeSet[activeIndices[1]]} onOrange={false} />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {stepIndex < 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: stepIndex * 0.14 + 0.12, ease: EASE }}
                  >
                    <VerticalArrow />
                  </motion.div>
                )}
              </Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
