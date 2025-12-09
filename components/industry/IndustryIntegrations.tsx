'use client'

import { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface Integration {
  name: string
  icon: ReactNode
}

interface IndustryIntegrationsProps {
  integrations: Integration[]
}

export default function IndustryIntegrations({ integrations }: IndustryIntegrationsProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  // Split integrations for left and right sides
  const midpoint = Math.ceil(integrations.length / 2)
  const leftIntegrations = integrations.slice(0, midpoint)
  const rightIntegrations = integrations.slice(midpoint)

  return (
    <div ref={ref}>
      {/* Desktop: Horizontal hub-and-spoke layout */}
      <div className="hidden md:block relative">
        <div className="flex items-center justify-center gap-8 lg:gap-12">
          {/* Left integrations */}
          <div className="flex items-center gap-6 lg:gap-8">
            {leftIntegrations.map((integration, index) => (
              <div
                key={`left-${index}`}
                className="relative"
                style={{
                  transform: isVisible ? 'translateX(0)' : 'translateX(-16px)',
                  transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
                }}
              >
                <div
                  className="w-14 h-14 bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center group hover:border-brand-accent transition-colors"
                  title={integration.name}
                >
                  <div className="text-brand-black group-hover:text-brand-accent transition-colors">
                    {integration.icon}
                  </div>
                </div>
                <span className="block mt-2 text-xs text-center text-brand-muted">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>

          {/* Center hub with connections */}
          <div className="relative px-8">
            {/* SVG connections */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              style={{ left: '-100%', width: '300%' }}
            >
              {/* Left connections */}
              {leftIntegrations.map((_, index) => {
                const startX = 33 - (index + 1) * 8
                const startY = 50
                const endX = 50
                const endY = 50
                const controlX = (startX + endX) / 2
                const controlY = 30 + index * 5

                return (
                  <path
                    key={`left-conn-${index}`}
                    d={`M${startX}%,${startY}% Q${controlX}%,${controlY}% ${endX}%,${endY}%`}
                    fill="none"
                    stroke="rgba(0,0,0,0.08)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className={isVisible ? 'animate-connection-pulse' : ''}
                    style={{
                      animationDelay: `${index * 200}ms`,
                    }}
                  />
                )
              })}

              {/* Right connections */}
              {rightIntegrations.map((_, index) => {
                const startX = 50
                const startY = 50
                const endX = 67 + (index + 1) * 8
                const endY = 50
                const controlX = (startX + endX) / 2
                const controlY = 30 + index * 5

                return (
                  <path
                    key={`right-conn-${index}`}
                    d={`M${startX}%,${startY}% Q${controlX}%,${controlY}% ${endX}%,${endY}%`}
                    fill="none"
                    stroke="rgba(0,0,0,0.08)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className={isVisible ? 'animate-connection-pulse' : ''}
                    style={{
                      animationDelay: `${(index + leftIntegrations.length) * 200}ms`,
                    }}
                  />
                )
              })}
            </svg>

            {/* Central hub */}
            <div
              className="relative w-16 h-16 bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center z-10"
              style={{
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span
                className="text-brand-accent text-3xl"
                style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif", fontWeight: 300 }}
              >
                &
              </span>
            </div>
          </div>

          {/* Right integrations */}
          <div className="flex items-center gap-6 lg:gap-8">
            {rightIntegrations.map((integration, index) => (
              <div
                key={`right-${index}`}
                className="relative"
                style={{
                  transform: isVisible ? 'translateX(0)' : 'translateX(16px)',
                  transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${(index + leftIntegrations.length) * 100}ms`,
                }}
              >
                <div
                  className="w-14 h-14 bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center group hover:border-brand-accent transition-colors"
                  title={integration.name}
                >
                  <div className="text-brand-black group-hover:text-brand-accent transition-colors">
                    {integration.icon}
                  </div>
                </div>
                <span className="block mt-2 text-xs text-center text-brand-muted">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Simple grid fallback */}
      <div className="md:hidden grid grid-cols-3 gap-8 max-w-xs mx-auto">
        {integrations.map((integration, index) => (
          <div
            key={`mobile-${index}`}
            className="flex flex-col items-center gap-3"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms`,
            }}
          >
            <div className="w-12 h-12 border border-[rgba(0,0,0,0.08)] flex items-center justify-center">
              <div className="text-brand-black scale-90">
                {integration.icon}
              </div>
            </div>
            <span className="text-xs text-brand-muted text-center">
              {integration.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
