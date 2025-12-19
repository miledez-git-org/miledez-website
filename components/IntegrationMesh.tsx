'use client'

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface Integration {
  name: string
  logo: string
}

// Curated integrations with actual logos - relevant for B2B workflow automation
const integrations: Integration[] = [
  // Inner ring (6) - Most commonly used in B2B automation
  { name: 'WhatsApp', logo: '/logos/whatsapp.svg' },
  { name: 'Gmail', logo: '/logos/gmail.svg' },
  { name: 'Google Sheets', logo: '/logos/google-sheets.svg' },
  { name: 'Slack', logo: '/logos/slack.svg' },
  { name: 'HubSpot', logo: '/logos/hubspot.svg' },
  { name: 'n8n', logo: '/logos/n8n.svg' },
  // Outer ring (9) - Additional popular integrations
  { name: 'Excel', logo: '/logos/excel.svg' },
  { name: 'Notion', logo: '/logos/notion.svg' },
  { name: 'Trello', logo: '/logos/trello.svg' },
  { name: 'Zapier', logo: '/logos/zapier.svg' },
  { name: 'Google Calendar', logo: '/logos/google-calendar.svg' },
  { name: 'Google Drive', logo: '/logos/google-drive.svg' },
  { name: 'OpenAI', logo: '/logos/openai.svg' },
  { name: 'Make', logo: '/logos/make.svg' },
  { name: 'Salesforce', logo: '/logos/salesforce.svg' },
]

export default function IntegrationMesh() {
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
  const innerRadius = 140 * 0.6
  const outerRadius = 140

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
          const pos = getPosition(index, innerRing.length, innerRadius)
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
          const pos = getPosition(index, outerRing.length, outerRadius)
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
              <div className="w-7 h-7 relative">
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
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
              <div className="w-5 h-5 relative">
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
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
