'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Floating metric card component
function MetricCard({
  label,
  value,
  trend,
  trendValue,
  isVisible,
  delay = 0,
  className = '',
}: {
  label: string
  value: string
  trend?: 'up' | 'down'
  trendValue?: string
  isVisible: boolean
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        scale: isVisible ? 1 : 0.95,
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`bg-white rounded-xl p-4 border border-gray-100 ${className}`}
      style={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
      }}
    >
      <p className="text-xs text-gray-500 mb-1 font-medium">{label}</p>
      <p className="text-2xl font-bold text-gray-900 tracking-tight">{value}</p>
      {trend && trendValue && (
        <div className="flex items-center gap-1 mt-1.5">
          <span className={`text-xs font-medium ${trend === 'up' ? 'text-emerald-600' : 'text-red-500'}`}>
            {trend === 'up' ? '↗' : '↘'} {trendValue}
          </span>
          <div className="h-0.5 w-8 bg-gradient-to-r from-emerald-400 to-emerald-200 rounded-full" />
        </div>
      )}
    </motion.div>
  )
}

// Integration logo badges
function IntegrationLogos({ isVisible }: { isVisible: boolean }) {
  const logos = [
    { bg: '#4285F4', letter: 'G', name: 'Google' },
    { bg: '#25D366', letter: 'W', name: 'WhatsApp' },
    { bg: '#FF6B00', letter: 'H', name: 'HubSpot' },
    { bg: '#0A66C2', letter: 'in', name: 'LinkedIn' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 15 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-xl px-4 py-3 border border-gray-100 inline-flex items-center gap-2"
      style={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
      }}
    >
      {logos.map((logo, i) => (
        <motion.div
          key={logo.name}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
          className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-bold"
          style={{ backgroundColor: logo.bg }}
        >
          {logo.letter}
        </motion.div>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="text-emerald-600 text-sm font-medium ml-1"
      >
        +12
      </motion.span>
    </motion.div>
  )
}

// Progress timeline card
function TimelineCard({ isVisible }: { isVisible: boolean }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setProgress(100), 300)
      return () => clearTimeout(timer)
    } else {
      setProgress(0)
    }
  }, [isVisible])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        scale: isVisible ? 1 : 0.95,
      }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-xl p-4 border border-gray-100"
      style={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
        width: '180px',
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500 font-medium">Implementação</span>
        <span className="text-xs text-emerald-600 font-bold">3 dias</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full"
          style={{
            width: `${progress}%`,
            transition: 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </div>
      <div className="flex justify-between mt-1.5 text-[10px] text-gray-400">
        <span>Início</span>
        <span>Entrega</span>
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
      className="bg-white rounded-lg px-3 py-2 border border-gray-100 inline-flex items-center gap-2"
      style={{
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
      }}
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
      } gap-8 lg:gap-12 items-center`}
      style={{
        border: '1px solid rgba(0, 0, 0, 0.04)',
      }}
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
          className="text-2xl lg:text-[1.75rem] font-semibold text-brand-black mb-4 leading-tight"
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
        <p className="text-xs font-semibold text-brand-muted uppercase tracking-[0.15em] mb-4">
          Por que a mil&dez
        </p>
        <h2 className="heading-section text-[2rem] md:text-[2.5rem] text-brand-black">
          Automação que entrega resultado
        </h2>
      </div>

      {/* Value boxes */}
      <div className="space-y-6 lg:space-y-8">
        {/* Box 1: Customization + Integration */}
        <div ref={(el) => { boxRefs.current[0] = el }} data-box-id={1}>
          <ValueBox
            tag="Personalizado"
            headline="Feito Para o Seu Negócio, Conectado ao Seu Ecossistema"
            description="Cada automação é construída sob medida para o seu processo. Integramos com as ferramentas que você já usa — CRM, planilhas, WhatsApp, e-mail — sem mudar sua operação."
            isVisible={isBox1Visible}
            floatingContent={
              <div className="relative">
                {/* Main metric card */}
                <MetricCard
                  label="Tarefas Automatizadas"
                  value="847"
                  trend="up"
                  trendValue="+23%"
                  isVisible={isBox1Visible}
                  delay={0}
                  className="relative z-10"
                />
                {/* Integration logos - floating below */}
                <div className="absolute -bottom-4 -right-4 z-20">
                  <IntegrationLogos isVisible={isBox1Visible} />
                </div>
                {/* Secondary metric card - offset behind */}
                <div className="absolute -top-3 -left-12 z-0">
                  <MetricCard
                    label="Horas Economizadas"
                    value="126h"
                    isVisible={isBox1Visible}
                    delay={0.2}
                    className="opacity-90"
                  />
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
                {/* Timeline progress card */}
                <TimelineCard isVisible={isBox2Visible} />
                {/* Check badges */}
                <div className="absolute -top-2 -right-6">
                  <CheckBadge text="R$ 0 inicial" isVisible={isBox2Visible} delay={0.4} />
                </div>
                <div className="absolute -bottom-3 -left-8">
                  <CheckBadge text="Sem multas" isVisible={isBox2Visible} delay={0.5} />
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}
