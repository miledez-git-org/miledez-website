'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface Integration {
  name: string
  logo: string
}

interface IndustryIntegrationsProps {
  integrations: Integration[]
}

export default function IndustryIntegrations({ integrations }: IndustryIntegrationsProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <div ref={ref}>
      {/* Desktop: 6-column grid */}
      <div className="hidden md:grid grid-cols-6 gap-6">
        {integrations.map((integration, index) => (
          <div
            key={`desktop-${index}`}
            className="flex flex-col items-center gap-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 50}ms, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 50}ms`,
            }}
          >
            <div
              className="w-14 h-14 bg-white rounded-lg flex items-center justify-center"
              title={integration.name}
            >
              <img src={`/logos/${integration.logo}.svg`} alt={integration.name} className="w-8 h-8 object-contain" />
            </div>
            <span className="text-xs text-center text-neutral-500 leading-tight">
              {integration.name}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile: 3-column grid */}
      <div className="md:hidden grid grid-cols-3 gap-6">
        {integrations.map((integration, index) => (
          <div
            key={`mobile-${index}`}
            className="flex flex-col items-center gap-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 40}ms, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 40}ms`,
            }}
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center">
              <img src={`/logos/${integration.logo}.svg`} alt={integration.name} className="w-6 h-6 object-contain" />
            </div>
            <span className="text-[11px] text-neutral-500 text-center leading-tight">
              {integration.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
