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

const CONNECTOR_COLOR = '#C8C8C8'
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
    { label: 'E-mail chega', logo: 'gmail.svg' },
    { label: 'Formulário enviado', logo: 'google-sheets.svg' },
    { label: 'Evento agendado', logo: 'google-calendar.svg' },
  ],
  [
    { label: 'IA analisa conteúdo', logo: 'openai.svg' },
    { label: 'Dados extraídos', logo: 'excel.svg' },
    { label: 'Registros atualizados', logo: 'google-sheets.svg' },
  ],
  [
    { label: 'Equipe notificada', logo: 'whatsapp.svg' },
    { label: 'Relatório pronto', logo: 'gmail.svg' },
    { label: 'Pagamento processado', logo: 'pix.svg' },
  ],
]

// --- Sub-components ---

function PhaseLabel({ label, description }: { label: string; description: string }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="text-sm font-semibold text-neutral-800 uppercase tracking-wide"
        style={{ fontFamily: 'var(--font-manrope)' }}
      >
        {label}
      </span>
      <span className="text-[13px] text-neutral-600 leading-relaxed mt-1">
        {description}
      </span>
    </div>
  )
}

function NodeCard({ node }: { node: PipelineNode }) {
  return (
    <div className="flex items-center justify-center gap-3 bg-white rounded-lg px-5 py-4 border border-neutral-200 shadow-card hover:shadow-card-hover transition-shadow duration-200 w-[280px] h-[56px]">
      <img
        src={`/logos/${node.logo}`}
        alt=""
        width={32}
        height={32}
        className="flex-shrink-0"
      />
      <span className="text-[15px] font-medium text-brand-black leading-snug">
        {node.label}
      </span>
    </div>
  )
}

function HorizontalArrow() {
  return (
    <div className="flex items-center flex-shrink-0 px-2" style={{ width: '72px' }}>
      <div className="flex-1 h-px bg-neutral-300" />
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
        <path
          d="M1 1l6 5-6 5"
          stroke={CONNECTOR_COLOR}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function VerticalArrow() {
  return (
    <div className="flex flex-col items-center my-1" style={{ height: '28px' }}>
      <div className="w-px flex-1 bg-neutral-300" />
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
        <path
          d="M1 1l5 6 5-6"
          stroke={CONNECTOR_COLOR}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
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
    <section className="bg-bg-muted py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="mb-12 md:mb-14 text-center">
          <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
            Como funciona uma<br />
            <span className="text-[#16232A]">automação</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-md mx-auto">
            Todo processo repetitivo vira um fluxo automático — do gatilho ao resultado.
          </p>
        </div>

        {/* Pipeline */}
        <div
          ref={sectionRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Desktop: horizontal pipeline */}
          <div className="hidden md:block">
            {/* Labels row */}
            <div className="flex items-start justify-center mb-4">
              {PHASES.map((phase, colIndex) => (
                <Fragment key={phase.key}>
                  <motion.div
                    className="w-[280px] text-center min-h-[52px] flex items-end justify-center"
                    initial={{ opacity: 0, x: -12 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                    transition={{ duration: 0.45, delay: colIndex * 0.14, ease: EASE }}
                  >
                    <PhaseLabel label={phase.label} description={phase.description} />
                  </motion.div>
                  {colIndex < 2 && <div style={{ width: '72px' }} />}
                </Fragment>
              ))}
            </div>

            {/* Cards + arrows row */}
            <div className="flex items-center justify-center">
              {PHASES.map((phase, colIndex) => (
                <Fragment key={phase.key}>
                  <motion.div
                    className="w-[280px]"
                    initial={{ opacity: 0, y: 16 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ duration: 0.5, delay: colIndex * 0.14 + 0.08, ease: EASE }}
                  >
                    <div className="relative h-[56px] overflow-hidden">
                      <AnimatePresence initial={false}>
                        <motion.div
                          key={`d-${colIndex}-${activeIndices[colIndex]}`}
                          className="absolute inset-0"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: FADE_DURATION, ease: 'easeInOut' }}
                        >
                          <NodeCard node={NODE_SETS[colIndex][activeIndices[colIndex]]} />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {colIndex < 2 && (
                    <motion.div
                      className="flex-shrink-0"
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
                    <div className="relative h-[56px] w-[280px] overflow-hidden">
                      <AnimatePresence initial={false}>
                        <motion.div
                          key={`m-${stepIndex}-${activeIndices[stepIndex]}`}
                          className="absolute inset-0"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: FADE_DURATION, ease: 'easeInOut' }}
                        >
                          <NodeCard node={NODE_SETS[stepIndex][activeIndices[stepIndex]]} />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
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
