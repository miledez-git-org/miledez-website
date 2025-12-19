'use client'

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface Partner {
  name: string
  logo: string
  category: string
}

const partners: Partner[] = [
  // Communication
  { name: 'WhatsApp', logo: '/logos/whatsapp.svg', category: 'Comunicação' },
  { name: 'Gmail', logo: '/logos/gmail.svg', category: 'Comunicação' },
  { name: 'Slack', logo: '/logos/slack.svg', category: 'Comunicação' },
  // Automation
  { name: 'n8n', logo: '/logos/n8n.svg', category: 'Automação' },
  { name: 'Zapier', logo: '/logos/zapier.svg', category: 'Automação' },
  { name: 'Make', logo: '/logos/make.svg', category: 'Automação' },
  // CRM
  { name: 'HubSpot', logo: '/logos/hubspot.svg', category: 'CRM' },
  { name: 'Salesforce', logo: '/logos/salesforce.svg', category: 'CRM' },
  // Productivity
  { name: 'Google Sheets', logo: '/logos/google-sheets.svg', category: 'Produtividade' },
  { name: 'Excel', logo: '/logos/excel.svg', category: 'Produtividade' },
  // AI
  { name: 'Claude', logo: '/logos/claude.svg', category: 'IA' },
  { name: 'OpenAI', logo: '/logos/openai.svg', category: 'IA' },
]

export default function TechnologyPartners() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <div ref={ref}>
      <div className="mb-12 md:mb-16 text-center">
        <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">
          Integramos com as ferramentas que você já usa
        </h2>
        <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto">
          Conecte seus sistemas existentes sem trocar de plataforma
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8">
        {partners.map((partner, index) => (
          <div
            key={partner.name}
            className="group flex flex-col items-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 50}ms`,
            }}
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="mt-3 text-xs text-brand-muted group-hover:text-brand-text transition-colors duration-300">
              {partner.name}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-brand-muted">
        + dezenas de outras integrações disponíveis
      </p>
    </div>
  )
}
