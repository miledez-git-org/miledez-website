'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Integration flow card showing connected tools
function IntegrationFlowCard({ isVisible }: { isVisible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        scale: isVisible ? 1 : 0.95,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-xl p-5 border border-neutral-100 shadow-md"
    >
      {/* Connected logos row */}
      <div className="flex items-center gap-3 mb-3">
        <Image
          src="/company-logos/gmail.svg"
          alt="Gmail"
          width={36}
          height={36}
          className="w-9 h-9"
        />
        <div className="flex-1 h-0.5 bg-neutral-200 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-brand-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: isVisible ? '100%' : 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <Image
          src="/company-logos/google-sheets.svg"
          alt="Google Sheets"
          width={36}
          height={36}
          className="w-9 h-9"
        />
      </div>
      <p className="text-sm text-gray-600">Email → Planilha automático</p>
    </motion.div>
  )
}

// Floating integration logos badge
function IntegrationBadges({ isVisible }: { isVisible: boolean }) {
  const logos = [
    { src: '/company-logos/whatsapp.svg', alt: 'WhatsApp' },
    { src: '/company-logos/salesforce.svg', alt: 'Salesforce' },
    { src: '/company-logos/hubspot.svg', alt: 'HubSpot' },
    { src: '/company-logos/google-calendar.svg', alt: 'Google Calendar' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 15 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-xl px-4 py-3 border border-neutral-100 shadow-md inline-flex items-center gap-2"
    >
      {logos.map((logo, i) => (
        <motion.div
          key={logo.alt}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={28}
            height={28}
            className="w-7 h-7"
          />
        </motion.div>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="text-emerald-600 text-sm font-medium ml-1"
      >
        +47
      </motion.span>
    </motion.div>
  )
}

// Speed comparison card
function SpeedComparisonCard({ isVisible }: { isVisible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        scale: isVisible ? 1 : 0.95,
      }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-xl p-5 border border-neutral-100 shadow-md w-52"
    >
      <div className="space-y-2 mb-3">
        {/* Traditional - struck through */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-red-400 line-through">6-12 meses</span>
          <span className="text-[10px] text-gray-400">Tradicional</span>
        </div>
        {/* Our approach */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-emerald-600">3-7 dias</span>
          <span className="text-[10px] text-gray-600 font-medium">mil&dez</span>
        </div>
      </div>
      {/* Progress bar */}
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-emerald-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? '100%' : 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}

// Check badge component
function CheckBadge({ text, isVisible, delay = 0 }: { text: string; isVisible: boolean; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: -10 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.9,
        x: isVisible ? 0 : -10,
      }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-lg px-3 py-2 border border-neutral-100 shadow-sm inline-flex items-center gap-2"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </motion.div>
  )
}

// Section box component
function ValueBox({
  tag,
  headline,
  description,
  floatingContent,
  isVisible,
  reverse = false,
}: {
  tag: string
  headline: string
  description: string
  floatingContent: React.ReactNode
  isVisible: boolean
  reverse?: boolean
}) {
  return (
    <div
      className={`bg-neutral-50 rounded-xl p-8 lg:p-12 flex flex-col ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } gap-8 lg:gap-12 items-center border border-neutral-100`}
    >
      {/* Floating cards area */}
      <div className="flex-1 w-full lg:w-auto min-h-[200px] relative flex items-center justify-center">
        <div className="relative">{floatingContent}</div>
      </div>

      {/* Copy area */}
      <div className={`flex-1 ${reverse ? 'lg:text-right' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-md border border-gray-200 mb-4 ${
            reverse ? 'lg:ml-auto' : ''
          }`}
        >
          <span className="text-xs font-medium text-gray-600">↗</span>
          <span className="text-xs font-semibold text-gray-700 tracking-tight">{tag}</span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl lg:text-[1.75rem] font-semibold text-neutral-900 mb-4 leading-tight"
        >
          {headline}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base lg:text-lg leading-relaxed text-gray-600"
        >
          {description}
        </motion.p>
      </div>
    </div>
  )
}

export default function ValueProposition() {
  const [visibleBoxes, setVisibleBoxes] = useState<Set<number>>(new Set())
  const boxRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const boxId = Number(entry.target.getAttribute('data-box-id'))
          if (entry.isIntersecting) {
            setVisibleBoxes((prev) => new Set(prev).add(boxId))
          }
        })
      },
      { threshold: 0.25 }
    )

    boxRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const isBox1Visible = visibleBoxes.has(1)
  const isBox2Visible = visibleBoxes.has(2)

  return (
    <div>
      {/* Section header */}
      <div className="mb-12 md:mb-16 text-center">
        <p className="text-xs font-semibold text-neutral-600 uppercase tracking-[0.15em] mb-4">
          Por que a mil&dez
        </p>
        <h2 className="heading-section text-[2rem] md:text-[2.5rem] text-neutral-900">
          Automação que entrega resultado
        </h2>
      </div>

      {/* Value boxes */}
      <div className="space-y-6 lg:space-y-8">
        {/* Box 1: Integration */}
        <div ref={(el) => { boxRefs.current[0] = el }} data-box-id={1}>
          <ValueBox
            tag="Integração Nativa"
            headline="Conectado ao Seu Ecossistema"
            description="Integração direta com Gmail, WhatsApp, CRM, planilhas — sem instalar nada no seu sistema. Usamos os mesmos apps que você já conhece."
            isVisible={isBox1Visible}
            floatingContent={
              <div className="relative">
                {/* Main integration flow card */}
                <IntegrationFlowCard isVisible={isBox1Visible} />
                {/* Integration badges - floating below */}
                <div className="absolute -bottom-4 -right-4 z-20">
                  <IntegrationBadges isVisible={isBox1Visible} />
                </div>
              </div>
            }
          />
        </div>

        {/* Box 2: Speed + No Risk */}
        <div ref={(el) => { boxRefs.current[1] = el }} data-box-id={2}>
          <ValueBox
            tag="Rápido"
            headline="Funcionando em Dias, Sem Risco Financeiro"
            description="Implementação ágil com resultados na primeira semana. Apenas mensalidade, sem investimento inicial. Cancele quando quiser — você só paga enquanto faz sentido."
            isVisible={isBox2Visible}
            reverse
            floatingContent={
              <div className="relative">
                {/* Speed comparison card */}
                <SpeedComparisonCard isVisible={isBox2Visible} />
                {/* Check badges */}
                <div className="absolute -top-2 -right-6">
                  <CheckBadge text="Sem investimento inicial" isVisible={isBox2Visible} delay={0.4} />
                </div>
                <div className="absolute -bottom-3 -left-8">
                  <CheckBadge text="Cancele quando quiser" isVisible={isBox2Visible} delay={0.5} />
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}
