'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { icons } from '@/components/Icons'

interface Integration {
  name: string
  icon: React.ReactNode
}

interface IntegrationMeshProps {
  integrations: Integration[]
}

export default function IntegrationMesh({ integrations }: IntegrationMeshProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  // Calculate positions for circular arrangement
  const getPosition = (index: number, total: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    }
  }

  // Center coordinates (relative to container center)
  const centerX = 200
  const centerY = 200
  const radius = 140

  // Slice integrations into groups for different rings
  const innerRing = integrations.slice(0, 6)
  const outerRing = integrations.slice(6, 15)

  return (
    <div ref={ref} className="relative w-full max-w-lg mx-auto">
      {/* SVG for connection lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Inner ring connections */}
        {innerRing.map((_, index) => {
          const pos = getPosition(index, innerRing.length, radius * 0.6)
          return (
            <path
              key={`inner-line-${index}`}
              d={`M${centerX},${centerY} Q${centerX + pos.x * 0.5},${centerY + pos.y * 0.5} ${centerX + pos.x},${centerY + pos.y}`}
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

        {/* Outer ring connections */}
        {outerRing.map((_, index) => {
          const pos = getPosition(index, outerRing.length, radius)
          return (
            <path
              key={`outer-line-${index}`}
              d={`M${centerX},${centerY} Q${centerX + pos.x * 0.6},${centerY + pos.y * 0.6} ${centerX + pos.x},${centerY + pos.y}`}
              fill="none"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="1"
              strokeDasharray="4 4"
              className={isVisible ? 'animate-connection-pulse' : ''}
              style={{
                animationDelay: `${(index + innerRing.length) * 150}ms`,
              }}
            />
          )
        })}
      </svg>

      {/* Integration nodes container */}
      <div
        className="relative aspect-square"
        style={{
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Center hub - mil&dez monogram */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center z-10"
          style={{
            transform: isVisible
              ? 'translate(-50%, -50%) scale(1)'
              : 'translate(-50%, -50%) scale(0.8)',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <span
            className="text-brand-accent text-4xl"
            style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif", fontWeight: 300 }}
          >
            &
          </span>
        </div>

        {/* Inner ring - 6 integrations */}
        {innerRing.map((integration, index) => {
          const pos = getPosition(index, innerRing.length, 28) // 28% of container
          return (
            <div
              key={`inner-${index}`}
              className="absolute w-12 h-12 bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center group hover:border-brand-accent transition-colors"
              style={{
                left: `${50 + pos.x}%`,
                top: `${50 + pos.y}%`,
                transform: isVisible
                  ? 'translate(-50%, -50%) scale(1)'
                  : 'translate(-50%, -50%) scale(0.8)',
                transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${100 + index * 50}ms`,
              }}
              title={integration.name}
            >
              <div className="text-brand-black group-hover:text-brand-accent transition-colors scale-75">
                {integration.icon}
              </div>
            </div>
          )
        })}

        {/* Outer ring - remaining integrations */}
        {outerRing.map((integration, index) => {
          const pos = getPosition(index, outerRing.length, 44) // 44% of container
          return (
            <div
              key={`outer-${index}`}
              className="absolute w-10 h-10 bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center group hover:border-brand-accent transition-colors"
              style={{
                left: `${50 + pos.x}%`,
                top: `${50 + pos.y}%`,
                transform: isVisible
                  ? 'translate(-50%, -50%) scale(1)'
                  : 'translate(-50%, -50%) scale(0.8)',
                transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 50}ms`,
              }}
              title={integration.name}
            >
              <div className="text-brand-black group-hover:text-brand-accent transition-colors scale-[0.6]">
                {integration.icon}
              </div>
            </div>
          )
        })}
      </div>

      {/* Labels below mesh - hidden on mobile */}
      <div className="hidden md:flex justify-center gap-8 mt-8">
        <div className="text-center">
          <span className="text-xs font-medium text-brand-muted uppercase tracking-wider">
            Centenas de integracoes
          </span>
        </div>
        <div className="text-center">
          <span className="text-xs font-medium text-brand-muted uppercase tracking-wider">
            Conexao direta
          </span>
        </div>
      </div>
    </div>
  )
}
