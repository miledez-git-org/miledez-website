'use client'

import { useState } from 'react'

interface Benefit {
  icon: React.ReactNode
  headline: string
  description: string
}

// Larger outline icons (1.5px stroke, w-7 h-7)
const benefitIcons = {
  // Link/connection - No new software
  noSoftware: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  ),
  // Puzzle piece - Custom solution
  custom: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
    </svg>
  ),
  // Chat bubble - You describe
  chat: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  ),
  // Rocket - Fast delivery
  rocket: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  // Handshake/shield - Zero commitment
  shield: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  // Tag - Pricing
  price: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
  ),
  // Filled price icon for featured card
  priceFilled: (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a19.595 19.595 0 005.656-5.656c.758-1.158.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clipRule="evenodd" />
    </svg>
  ),
}

const benefits: Benefit[] = [
  {
    icon: benefitIcons.noSoftware,
    headline: 'Sem software novo',
    description: 'Conectamos aos sistemas que você já usa. Sem instalação, sem treinamento.',
  },
  {
    icon: benefitIcons.custom,
    headline: '100% personalizada',
    description: 'Adaptada ao seu negócio, seus processos, suas necessidades.',
  },
  {
    icon: benefitIcons.rocket,
    headline: 'Pronto em dias, não meses',
    description: 'Primeira automação funcionando rapidamente. Resultados imediatos.',
  },
  {
    icon: benefitIcons.shield,
    headline: 'Zero compromisso',
    description: 'Sem contratos longos. Cancele quando quiser.',
  },
]

export default function ComoFuncionaDemo() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const PRICING_CARD_ID = 99

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Regular benefit cards */}
      {benefits.map((benefit, index) => {
        const isHovered = hoveredCard === index

        return (
          <div
            key={index}
            className={`border p-8 bg-white transition-all duration-300 ${
              isHovered ? 'border-brand-accent' : 'border-brand-border'
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-start gap-5">
              {/* Icon container with accent left border */}
              <div
                className={`w-14 h-14 flex-shrink-0 flex items-center justify-center border-l-[3px] border-t border-r border-b bg-neutral-50 transition-colors duration-300 ${
                  isHovered
                    ? 'border-l-brand-accent border-t-brand-accent border-r-brand-accent border-b-brand-accent text-brand-accent'
                    : 'border-l-brand-accent border-t-brand-border border-r-brand-border border-b-brand-border text-brand-black'
                }`}
              >
                {benefit.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-brand-black mb-2 leading-tight">
                  {benefit.headline}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        )
      })}

      {/* Featured pricing card - full width */}
      <div
        className="md:col-span-2 border border-brand-accent bg-gradient-to-r from-white to-neutral-50 p-8 md:p-10 transition-all duration-300"
        onMouseEnter={() => setHoveredCard(PRICING_CARD_ID)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left side: icon + text */}
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-brand-accent text-white">
              {benefitIcons.priceFilled}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-black mb-2">
                Sem custo de desenvolvimento
              </h3>
              <p className="text-base text-brand-muted">
                Nós cuidamos do funcionamento e manutenção
              </p>
            </div>
          </div>

          {/* Right side: price display */}
          <div className="text-left md:text-right">
            <span className="text-xs text-brand-muted uppercase tracking-wider">
              A partir de
            </span>
            <span className="block text-3xl md:text-4xl font-bold text-brand-accent leading-tight">
              R$900
            </span>
            <span className="text-sm text-brand-muted">
              /mês por automação
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
