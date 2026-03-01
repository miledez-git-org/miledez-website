'use client'

import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// --- Types ---

interface FlowCard {
  label: string
  logo: string
}

interface FlowRow {
  phase: string
  description: string
  cards: FlowCard[]
}

// --- Constants ---

const CONNECTOR_COLOR = '#C8C8C8'

const FLOW_ROWS: FlowRow[] = [
  {
    phase: 'Gatilho',
    description: 'Algo acontece no seu dia a dia',
    cards: [
      { label: 'E-mail chega', logo: 'gmail.svg' },
      { label: 'Evento agendado', logo: 'google-calendar.svg' },
      { label: 'Formulário enviado', logo: 'google-sheets.svg' },
    ],
  },
  {
    phase: 'Processo',
    description: 'A automação executa sem intervenção',
    cards: [
      { label: 'Dados extraídos', logo: 'google-sheets.svg' },
      { label: 'IA analisa conteúdo', logo: 'openai.svg' },
      { label: 'Registros atualizados', logo: 'excel.svg' },
    ],
  },
  {
    phase: 'Resultado',
    description: 'Sua equipe recebe tudo pronto',
    cards: [
      { label: 'Equipe notificada', logo: 'whatsapp.svg' },
      { label: 'Relatório pronto', logo: 'gmail.svg' },
      { label: 'Pagamento processado', logo: 'pix.svg' },
    ],
  },
]

// Card layout constants (desktop)
const CARD_W = 200
const CARD_GAP = 12
const ROW_W = CARD_W * 3 + CARD_GAP * 2 // 624

// --- Animation ---

const EASE = [0.16, 1, 0.3, 1] as const

// --- Sub-components ---

// Single SVG connector between card rows: merge (3→1) + trunk + split (1→3)
function ConnectorBridge() {
  const cx1 = CARD_W / 2                             // 100
  const cx2 = CARD_W + CARD_GAP + CARD_W / 2         // 312
  const cx3 = (CARD_W + CARD_GAP) * 2 + CARD_W / 2   // 524

  const mergeH = 28
  const trunkH = 24
  const splitH = 28
  const totalH = mergeH + trunkH + splitH // 80
  const r = 8

  // Merge: 3 lines converge at y = mergeH
  const mergeLeft = `M ${cx1} 0 L ${cx1} ${mergeH - r} Q ${cx1} ${mergeH} ${cx1 + r} ${mergeH} L ${cx2 - r} ${mergeH} Q ${cx2} ${mergeH} ${cx2} ${mergeH + r}`
  const mergeCenter = `M ${cx2} 0 L ${cx2} ${mergeH}`
  const mergeRight = `M ${cx3} 0 L ${cx3} ${mergeH - r} Q ${cx3} ${mergeH} ${cx3 - r} ${mergeH} L ${cx2 + r} ${mergeH} Q ${cx2} ${mergeH} ${cx2} ${mergeH + r}`

  // Trunk: single vertical line
  const trunk = `M ${cx2} ${mergeH} L ${cx2} ${mergeH + trunkH}`

  // Split: center diverges to 3 at y = mergeH + trunkH
  const splitY = mergeH + trunkH
  const splitLeft = `M ${cx2} ${splitY} Q ${cx2} ${splitY} ${cx2 - r} ${splitY} L ${cx1 + r} ${splitY} Q ${cx1} ${splitY} ${cx1} ${splitY + r} L ${cx1} ${totalH}`
  const splitCenter = `M ${cx2} ${splitY} L ${cx2} ${totalH}`
  const splitRight = `M ${cx2} ${splitY} Q ${cx2} ${splitY} ${cx2 + r} ${splitY} L ${cx3 - r} ${splitY} Q ${cx3} ${splitY} ${cx3} ${splitY + r} L ${cx3} ${totalH}`

  const allPaths = [mergeLeft, mergeCenter, mergeRight, trunk, splitLeft, splitCenter, splitRight]

  return (
    <svg
      width={ROW_W}
      height={totalH}
      viewBox={`0 0 ${ROW_W} ${totalH}`}
      fill="none"
    >
      {allPaths.map((d, i) => (
        <path key={i} d={d} stroke={CONNECTOR_COLOR} strokeWidth="1.5" strokeLinecap="round" />
      ))}
    </svg>
  )
}

// Phase label — pure typography, no pill
function PhaseLabel({ index, phase, description }: { index: number; phase: string; description: string }) {
  return (
    <div className="flex flex-col">
      <span
        className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest"
        style={{ fontFamily: 'var(--font-manrope)' }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <span
        className="text-sm font-semibold text-neutral-800 uppercase tracking-wide mt-1"
        style={{ fontFamily: 'var(--font-manrope)' }}
      >
        {phase}
      </span>
      <span className="text-[13px] text-neutral-500 leading-relaxed mt-1">
        {description}
      </span>
    </div>
  )
}

// Desktop card row
function CardRowDesktop({ cards }: { cards: FlowCard[] }) {
  return (
    <div className="flex items-center justify-center" style={{ gap: `${CARD_GAP}px` }}>
      {cards.map((card) => (
        <div
          key={card.label}
          className="flex items-center gap-3 bg-white rounded-lg px-5 py-3.5 border border-neutral-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-shadow"
          style={{ width: `${CARD_W}px` }}
        >
          <img
            src={`/logos/${card.logo}`}
            alt=""
            width={26}
            height={26}
            className="flex-shrink-0"
          />
          <span className="text-[14px] font-medium text-brand-black leading-snug">
            {card.label}
          </span>
        </div>
      ))}
    </div>
  )
}

// Mobile card row (horizontal scroll)
function CardRowMobile({ cards }: { cards: FlowCard[] }) {
  return (
    <div className="flex gap-2.5 overflow-x-auto pb-1 -mx-1 px-1 snap-x">
      {cards.map((card) => (
        <div
          key={card.label}
          className="flex items-center gap-2.5 bg-white rounded-lg px-4 py-3 border border-neutral-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex-shrink-0 snap-start"
          style={{ minWidth: '155px' }}
        >
          <img
            src={`/logos/${card.logo}`}
            alt=""
            width={22}
            height={22}
            className="flex-shrink-0"
          />
          <span className="text-[13px] font-medium text-brand-black leading-snug">
            {card.label}
          </span>
        </div>
      ))}
    </div>
  )
}

// --- Component ---

export default function WorkflowExplainerSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.08 })

  return (
    <section className="bg-bg-muted py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="font-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
            Como funciona uma<br />
            <span className="text-brand-primary">automação</span>
          </h2>
          <p className="mt-3 text-lg text-brand-muted max-w-md mx-auto">
            Todo processo repetitivo vira um fluxo automático — do gatilho ao resultado.
          </p>
        </div>

        {/* Workflow visual */}
        <div ref={sectionRef}>

          {/* Desktop: 2-column grid — labels left, workflow right */}
          <div className="hidden md:grid grid-cols-[200px_1fr] gap-x-8">
            {FLOW_ROWS.map((row, rowIndex) => (
              <Fragment key={row.phase}>
                {/* Left: Phase label */}
                <motion.div
                  className="self-center"
                  initial={{ opacity: 0, x: -12 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  transition={{ duration: 0.5, delay: rowIndex * 0.35, ease: EASE }}
                >
                  <PhaseLabel index={rowIndex} phase={row.phase} description={row.description} />
                </motion.div>

                {/* Right: Card row */}
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 14 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                  transition={{ duration: 0.5, delay: rowIndex * 0.35 + 0.1, ease: EASE }}
                >
                  <CardRowDesktop cards={row.cards} />
                </motion.div>

                {/* Connector row (between phases) */}
                {rowIndex < FLOW_ROWS.length - 1 && (
                  <>
                    {/* Empty left cell */}
                    <div />
                    {/* Right: connector bridge */}
                    <motion.div
                      className="flex justify-center"
                      initial={{ opacity: 0 }}
                      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.4, delay: rowIndex * 0.35 + 0.25, ease: EASE }}
                    >
                      <ConnectorBridge />
                    </motion.div>
                  </>
                )}
              </Fragment>
            ))}
          </div>

          {/* Mobile: stacked layout — label above cards */}
          <div className="flex md:hidden flex-col items-center gap-0">
            {FLOW_ROWS.map((row, rowIndex) => (
              <div key={row.phase} className="w-full flex flex-col items-center">
                {/* Phase label */}
                <motion.div
                  className="w-full px-1 mb-3"
                  initial={{ opacity: 0, x: -12 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  transition={{ duration: 0.4, delay: rowIndex * 0.3, ease: EASE }}
                >
                  <PhaseLabel index={rowIndex} phase={row.phase} description={row.description} />
                </motion.div>

                {/* Cards */}
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, y: 14 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                  transition={{ duration: 0.5, delay: rowIndex * 0.3 + 0.08, ease: EASE }}
                >
                  <CardRowMobile cards={row.cards} />
                </motion.div>

                {/* Mobile connector */}
                {rowIndex < FLOW_ROWS.length - 1 && (
                  <motion.div
                    className="flex justify-center my-2"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: rowIndex * 0.3 + 0.2, ease: EASE }}
                  >
                    <div style={{ width: '1.5px', height: '20px', backgroundColor: CONNECTOR_COLOR }} />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
