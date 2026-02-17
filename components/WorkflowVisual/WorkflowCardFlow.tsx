'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import WorkflowCard, { WorkflowCardData } from './WorkflowCard'

interface WorkflowCardFlowProps {
  title: string
  cards: WorkflowCardData[]
}

const LEGEND_ITEMS = [
  { color: '#2D5A7B', icon: '\u26a1', label: 'Gatilho' },
  { color: '#8b2020', icon: '\u2699', label: 'Processo' },
  { color: '#2D6B4A', icon: '\u2713', label: 'Resultado' },
]

export default function WorkflowCardFlow({ title, cards }: WorkflowCardFlowProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <div ref={ref} className="mb-16 last:mb-0">
      {/* Workflow title */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h3
          className="text-lg font-medium text-[#1A1A1A]"
          style={{ fontFamily: 'var(--font-manrope)', letterSpacing: '-0.01em' }}
        >
          {title}
        </h3>

        {/* Color legend */}
        <div className="flex items-center gap-4">
          {LEGEND_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <span className="text-xs" style={{ color: item.color }}>
                {item.icon}
              </span>
              <span
                className="text-[11px] text-[#6B6B6B]"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Cards container with #F5F5F5 background */}
      <div
        className="rounded-[6px] p-6 md:p-8"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-stretch justify-center gap-0">
          {cards.map((card, index) => (
            <motion.div
              key={card.step}
              className="flex items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <WorkflowCard card={card} variant="compact" />
              {/* Horizontal connector */}
              {index < cards.length - 1 && (
                <div
                  className="flex-shrink-0"
                  style={{
                    width: '32px',
                    height: '1px',
                    backgroundColor: '#E0E0E0',
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="flex md:hidden flex-col items-center gap-0">
          {cards.map((card, index) => (
            <motion.div
              key={card.step}
              className="flex flex-col items-center w-full"
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="w-full max-w-[240px]">
                <WorkflowCard card={card} variant="compact" />
              </div>
              {/* Vertical connector */}
              {index < cards.length - 1 && (
                <div
                  className="flex-shrink-0"
                  style={{
                    width: '1px',
                    height: '24px',
                    backgroundColor: '#E0E0E0',
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
