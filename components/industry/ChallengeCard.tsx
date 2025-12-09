'use client'

import { ReactNode } from 'react'

interface ChallengeCardProps {
  icon: ReactNode
  title: string
  description: string
  index?: number
  isVisible?: boolean
}

export default function ChallengeCard({
  icon,
  title,
  description,
  index = 0,
  isVisible = true
}: ChallengeCardProps) {
  return (
    <div
      className="group p-6 border border-brand-border transition-colors hover:bg-highlight"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        opacity: isVisible ? 1 : 0,
        transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
      }}
    >
      {/* Icon Container */}
      <div className="w-12 h-12 mb-6 flex items-center justify-center border border-brand-black text-brand-black">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-medium mb-4 text-brand-black">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-brand-text">
        {description}
      </p>
    </div>
  )
}
