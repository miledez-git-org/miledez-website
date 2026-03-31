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
      className="group relative bg-white rounded-xl p-8 transition-shadow duration-200"
      style={{
        boxShadow: '3px 4px 12px rgba(0, 0, 0, 0.08)',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        opacity: isVisible ? 1 : 0,
        transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`,
      }}
    >
      {/* Icon */}
      <div className="w-12 h-12 mb-6 flex items-center justify-center text-brand-primary">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-4 text-brand-black">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base leading-relaxed text-neutral-600">
        {description}
      </p>
    </div>
  )
}
