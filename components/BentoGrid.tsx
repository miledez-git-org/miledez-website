'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface BentoCard {
  icon: React.ReactNode
  title: string
  description: string
  accent?: boolean
}

interface BentoGridProps {
  cards: BentoCard[]
}

export default function BentoGrid({ cards }: BentoGridProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`
            bg-white border border-[rgba(0,0,0,0.08)] p-6
            ${card.accent ? 'border-l-2 border-l-brand-accent' : ''}
          `}
          style={{
            boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
          }}
        >
          {/* Icon */}
          <div
            className={`
              w-12 h-12 mb-4 flex items-center justify-center border
              ${card.accent ? 'border-brand-accent text-brand-accent' : 'border-brand-border text-brand-black'}
            `}
          >
            {card.icon}
          </div>

          {/* Title */}
          <h4 className="text-base font-medium mb-2 text-brand-black">
            {card.title}
          </h4>

          {/* Description */}
          <p className="text-sm text-brand-text leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  )
}
