'use client'

import { useEffect, useState, useRef, useLayoutEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Types
interface WorkflowCard {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

interface TriggerOption {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  logos: string[]
}

interface PathsData {
  triggerToFirst: string
  processHorizontal: string
  syncDownToCenter: string
  leftBranch: string
  rightBranch: string
  containerWidth: number
  containerHeight: number
  splitPoint: { x: number; y: number }
}

// Animation transitions
const fadeTransition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1] as const,
}

// Easing curves
const smooth = 'cubic-bezier(0.4, 0, 0.2, 1)'
const spring = 'cubic-bezier(0.22, 1, 0.36, 1)'

// Line colors
const lineGray = '#e5e7eb'
const lineBlue = '#93c5fd'
const lineGreen = '#86efac'

// Trigger options with different logo sets (rotate through these)
const triggerOptions: TriggerOption[] = [
  {
    id: 'email',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
      </svg>
    ),
    title: 'Email recebido',
    description: 'Novo email chega na caixa',
    logos: ['gmail', 'google-drive', 'whatsapp', 'google-calendar', 'google-sheets'],
  },
  {
    id: 'form',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
      </svg>
    ),
    title: 'Formulário enviado',
    description: 'Cliente preenche formulário',
    logos: ['gmail', 'google-drive', 'notion', 'hubspot', 'slack'],
  },
  {
    id: 'schedule',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
      </svg>
    ),
    title: 'Horário programado',
    description: 'Automação roda no horário',
    logos: ['shopify', 'mercado-livre', 'mercadopago', 'whatsapp', 'ifood'],
  },
]

// Processing cards - reduced to 3 essential steps
const processingCards: WorkflowCard[] = [
  {
    id: 'read',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
        <path d="M16 13H8"/>
        <path d="M16 17H8"/>
      </svg>
    ),
    title: 'Lendo dados',
    description: 'Captura automática',
  },
  {
    id: 'transform',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 2v6h-6"/>
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
        <path d="M3 22v-6h6"/>
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
      </svg>
    ),
    title: 'Transformando',
    description: 'Processado na nuvem',
  },
  {
    id: 'sync',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Sincronizando',
    description: 'Integra seus sistemas',
  },
]

// Output cards - reduced to 2 key outcomes
const outputCards: WorkflowCard[] = [
  {
    id: 'pdf',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
      </svg>
    ),
    title: 'PDF gerado',
    description: 'Pronto para uso',
  },
  {
    id: 'archive',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Arquivado',
    description: 'Organizado automaticamente',
  },
]

// App logos display component
function AppLogos({ logos, isActive }: { logos: string[]; isActive: boolean }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <AnimatePresence mode="wait">
        {isActive ? (
          <motion.div
            key="logos-active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ...fadeTransition, delay: 0.15 }}
            className="flex items-center justify-center gap-3"
          >
            {logos.map((logo) => (
              <div
                key={logo}
                className="w-5 h-5 flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  src={`/software-company-logos/${logo}.svg`}
                  alt={logo}
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="skeleton-logos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center gap-3"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-5 h-5 bg-gray-100 rounded" />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Process Icon component with color state
function ProcessIcon({ type, active }: { type: string; active: boolean }) {
  const color = active ? '#3b82f6' : '#d1d5db'
  const card = processingCards.find(c => c.id === type)
  if (!card) return null

  return (
    <div style={{ color }}>
      {card.icon}
    </div>
  )
}

// Output Icon component with color state
function OutputIcon({ type, active }: { type: string; active: boolean }) {
  const color = active ? '#22c55e' : '#d1d5db'
  const card = outputCards.find(c => c.id === type)
  if (!card) return null

  return (
    <div style={{ color }}>
      {card.icon}
    </div>
  )
}

// Mobile vertical connector line component
function VerticalConnector({ active, color }: { active: boolean; color: 'blue' | 'green' }) {
  const activeColor = color === 'blue' ? lineBlue : lineGreen
  return (
    <div className="flex justify-center py-2">
      <div
        className="w-0.5 h-8 rounded-full"
        style={{
          backgroundColor: active ? activeColor : lineGray,
          opacity: active ? 1 : 0.4,
          transition: `all 700ms ${smooth}`,
        }}
      />
    </div>
  )
}

// Main Component
export default function WorkflowTiersDemo() {
  const [step, setStep] = useState(-1) // Start at -1 so trigger animates in at step 0
  const [paths, setPaths] = useState<PathsData | null>(null)
  const [currentTriggerIndex, setCurrentTriggerIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const animationContainerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const processRefs = useRef<(HTMLDivElement | null)[]>([])
  const outputRefs = useRef<(HTMLDivElement | null)[]>([])

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Intersection Observer - trigger animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '50px 0px' }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // Calculate SVG paths based on actual card positions (desktop only)
  const calculatePaths = useCallback(() => {
    if (isMobile || !animationContainerRef.current || !triggerRef.current) return

    const container = animationContainerRef.current.getBoundingClientRect()
    const trigger = triggerRef.current.getBoundingClientRect()
    const process = processRefs.current.map(ref => ref?.getBoundingClientRect())
    const outputs = outputRefs.current.map(ref => ref?.getBoundingClientRect())

    if (!process[0] || !process[2] || !outputs[0] || !outputs[1]) return

    // Convert to relative coordinates
    const rel = (rect: DOMRect) => ({
      x: rect.left - container.left + rect.width / 2,
      y: rect.top - container.top,
      bottom: rect.top - container.top + rect.height,
      left: rect.left - container.left,
      right: rect.left - container.left + rect.width,
      width: rect.width,
      height: rect.height,
    })

    const t = rel(trigger)
    const p0 = rel(process[0])
    const p2 = rel(process[2])
    const o0 = rel(outputs[0])
    const o1 = rel(outputs[1])

    const r = 12 // Corner radius
    const branchY = o0.y - 45 // Y-position of the split point

    setPaths({
      // Path 1: Trigger bottom → down → curve left → first process card top
      triggerToFirst: `
        M ${t.x} ${t.bottom}
        L ${t.x} ${p0.y - 25 - r}
        Q ${t.x} ${p0.y - 25} ${t.x - r} ${p0.y - 25}
        L ${p0.x + r} ${p0.y - 25}
        Q ${p0.x} ${p0.y - 25} ${p0.x} ${p0.y - 25 + r}
        L ${p0.x} ${p0.y}
      `,

      // Path 2: Horizontal line connecting process cards (touching card edges)
      processHorizontal: `
        M ${p0.right} ${p0.y + p0.height / 2}
        L ${p2.left} ${p0.y + p0.height / 2}
      `,

      // Path 3: Main stem from last process card down to the split point
      syncDownToCenter: `
        M ${p2.x} ${p2.bottom}
        L ${p2.x} ${branchY}
      `,

      // Path 4: Left branch - from sync card center directly to PDF output (Y-junction left arm)
      leftBranch: `
        M ${p2.x} ${branchY}
        L ${o0.x + r} ${branchY}
        Q ${o0.x} ${branchY} ${o0.x} ${branchY + r}
        L ${o0.x} ${o0.y}
      `,

      // Path 5: Right branch - from sync card center directly to Archived output (Y-junction right arm)
      rightBranch: `
        M ${p2.x} ${branchY}
        L ${o1.x - r} ${branchY}
        Q ${o1.x} ${branchY} ${o1.x} ${branchY + r}
        L ${o1.x} ${o1.y}
      `,

      containerWidth: container.width,
      containerHeight: container.height,
      splitPoint: { x: p2.x, y: branchY },
    })
  }, [isMobile])

  useLayoutEffect(() => {
    if (isMobile) {
      setPaths(null)
      return
    }

    calculatePaths()
    window.addEventListener('resize', calculatePaths)

    const timer = setTimeout(calculatePaths, 50)
    const timer2 = setTimeout(calculatePaths, 150)

    return () => {
      window.removeEventListener('resize', calculatePaths)
      clearTimeout(timer)
      clearTimeout(timer2)
    }
  }, [isMobile, isVisible, calculatePaths])

  // Animation loop with pause at completion
  useEffect(() => {
    if (!isVisible) return

    if (prefersReducedMotion) {
      setStep(4) // Show all active
      return
    }

    // Initial delay before starting
    if (step === -1) {
      const timer = setTimeout(() => setStep(0), 600)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      if (step >= 4) {
        // 3 second pause at the end before restarting
        setTimeout(() => {
          setStep(-1)
          setCurrentTriggerIndex((prev) => (prev + 1) % triggerOptions.length)
        }, 3000)
      } else {
        setStep(prev => prev + 1)
      }
    }, step === 0 ? 1400 : 1200)

    return () => clearTimeout(timer)
  }, [isVisible, step, prefersReducedMotion])

  // Check if trigger is active (step >= 0)
  const triggerActive = step >= 0
  const currentTrigger = triggerOptions[currentTriggerIndex]

  return (
    <div
      ref={containerRef}
      className="w-full max-w-4xl mx-auto relative"
      aria-label="Demonstração de automação de workflow"
    >
      <span className="sr-only">
        Animação demonstrando as etapas de uma automação: gatilho, processamento e resultados.
      </span>

      {/* Animation Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div
          ref={animationContainerRef}
          className="relative px-4 py-8 md:px-10 md:py-12"
        >
          {/* SVG Connectors - Desktop only */}
          {!isMobile && paths && (
            <svg
              width={paths.containerWidth}
              height={paths.containerHeight}
              className="absolute top-0 left-0 pointer-events-none overflow-visible"
            >
              {/* Path: Trigger → First Process Card */}
              <path
                d={paths.triggerToFirst}
                fill="none"
                stroke={step >= 1 ? lineBlue : lineGray}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: `stroke 700ms ${smooth}, opacity 700ms ${smooth}`,
                  opacity: step >= 1 ? 1 : 0.4,
                }}
              />

              {/* Path: Horizontal Process Connector */}
              <path
                d={paths.processHorizontal}
                fill="none"
                stroke={step >= 2 ? lineBlue : lineGray}
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{
                  transition: `stroke 700ms ${smooth}, opacity 700ms ${smooth}`,
                  opacity: step >= 2 ? 1 : 0.4,
                }}
              />

              {/* Path: Sync down to center of gap */}
              <path
                d={paths.syncDownToCenter}
                fill="none"
                stroke={step >= 4 ? lineGreen : lineGray}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: `stroke 700ms ${smooth}, opacity 700ms ${smooth}`,
                  opacity: step >= 4 ? 1 : 0.4,
                }}
              />

              {/* Path: Left branch to PDF */}
              <path
                d={paths.leftBranch}
                fill="none"
                stroke={step >= 4 ? lineGreen : lineGray}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: `stroke 700ms ${smooth}, opacity 700ms ${smooth}`,
                  opacity: step >= 4 ? 1 : 0.4,
                }}
              />

              {/* Path: Right branch to Archived */}
              <path
                d={paths.rightBranch}
                fill="none"
                stroke={step >= 4 ? lineGreen : lineGray}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: `stroke 700ms ${smooth}, opacity 700ms ${smooth}`,
                  opacity: step >= 4 ? 1 : 0.4,
                }}
              />

              {/* Split point indicator - Y-junction visual marker */}
              <circle
                cx={paths.splitPoint.x}
                cy={paths.splitPoint.y}
                r={4}
                fill={step >= 4 ? lineGreen : lineGray}
                style={{
                  transition: `fill 700ms ${smooth}, opacity 700ms ${smooth}`,
                  opacity: step >= 4 ? 1 : 0.5,
                }}
              />
            </svg>
          )}

          {/* Cards */}
          <div className="relative z-10">
            {/* Phase 1: TRIGGER */}
            <div className="text-center mb-3">
              <span
                className="inline-block px-3 py-1 text-xs font-semibold tracking-wider rounded-full"
                style={{
                  background: triggerActive ? 'rgba(245, 158, 11, 0.1)' : '#f3f4f6',
                  color: triggerActive ? '#d97706' : '#9ca3af',
                  transition: `all 600ms ${smooth}`,
                }}
              >
                FASE 1 — GATILHO
              </span>
              <p
                className="text-xs mt-1.5 max-w-xs mx-auto"
                style={{
                  color: triggerActive ? '#6b7280' : '#d1d5db',
                  transition: `color 600ms ${smooth}`,
                }}
              >
                O sistema monitora continuamente suas fontes de dados
              </p>
            </div>

            {/* Trigger Card - Animated entry */}
            <div className="flex justify-center">
              <div
                ref={triggerRef}
                className="w-full max-w-[300px]"
                style={{
                  opacity: triggerActive ? 1 : 0,
                  transform: triggerActive ? 'translateY(0) scale(1)' : 'translateY(-12px) scale(0.94)',
                  transition: `all 900ms ${spring}`,
                }}
              >
                <div
                  className="relative bg-white rounded-xl p-5 text-center"
                  style={{
                    border: `2px solid ${triggerActive ? '#f59e0b' : '#e5e7eb'}`,
                    boxShadow: triggerActive
                      ? '0 4px 16px rgba(245, 158, 11, 0.15)'
                      : '0 1px 3px rgba(0,0,0,0.04)',
                    transition: `all 600ms ${smooth}`,
                  }}
                >
                  <div className="flex items-center gap-3 justify-center">
                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-amber-50"
                      style={{ color: '#f59e0b' }}
                    >
                      {currentTrigger.icon}
                    </div>
                    <span className="font-semibold text-gray-800 text-sm">
                      {currentTrigger.title}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    {currentTrigger.description}
                  </p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <AppLogos logos={currentTrigger.logos} isActive={triggerActive} />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Vertical connector after trigger */}
            {isMobile && <VerticalConnector active={step >= 1} color="blue" />}

            {/* Phase 2: PROCESSING */}
            <div className="text-center mt-12 mb-3 md:mt-0">
              <span
                className="inline-block px-3 py-1 text-xs font-semibold tracking-wider rounded-full"
                style={{
                  background: step >= 1 ? 'rgba(59, 130, 246, 0.1)' : '#f3f4f6',
                  color: step >= 1 ? '#2563eb' : '#9ca3af',
                  transition: `all 600ms ${smooth}`,
                }}
              >
                FASE 2 — PROCESSAMENTO AUTOMÁTICO
              </span>
              <p
                className="text-xs mt-1.5 max-w-sm mx-auto"
                style={{
                  color: step >= 1 ? '#6b7280' : '#d1d5db',
                  transition: `color 600ms ${smooth}`,
                }}
              >
                Executado na nuvem, sem consumir recursos do seu ambiente
              </p>
            </div>

            {/* Process Cards */}
            {/* Desktop: horizontal layout */}
            {!isMobile && (
              <div className="flex justify-center gap-8 my-8">
                {processingCards.map((item, i) => {
                  const active = step >= i + 1
                  return (
                    <div
                      key={item.id}
                      ref={el => { processRefs.current[i] = el }}
                      style={{
                        opacity: active ? 1 : 0.35,
                        transform: active ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.96)',
                        transition: `all 800ms ${spring} ${i * 80}ms`,
                      }}
                    >
                      <div
                        className="bg-white rounded-xl p-4 flex items-center gap-3"
                        style={{
                          border: `2px solid ${active ? '#3b82f6' : '#e5e7eb'}`,
                          boxShadow: active
                            ? '0 4px 16px rgba(59, 130, 246, 0.12)'
                            : '0 1px 2px rgba(0,0,0,0.03)',
                          transition: `all 600ms ${smooth}`,
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            background: active ? 'rgba(59, 130, 246, 0.1)' : '#f3f4f6',
                            transition: `all 600ms ${smooth}`,
                          }}
                        >
                          <ProcessIcon type={item.id} active={active} />
                        </div>
                        <div>
                          <div
                            className="font-semibold text-sm whitespace-nowrap"
                            style={{
                              color: active ? '#111827' : '#9ca3af',
                              transition: `color 600ms ${smooth}`,
                            }}
                          >
                            {item.title}
                          </div>
                          <div
                            className="text-xs mt-0.5 whitespace-nowrap"
                            style={{
                              color: active ? '#6b7280' : '#d1d5db',
                              transition: `color 600ms ${smooth}`,
                            }}
                          >
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Mobile: vertical layout for process cards */}
            {isMobile && (
              <div className="flex flex-col items-center gap-2 my-4">
                {processingCards.map((item, i) => {
                  const active = step >= i + 1
                  return (
                    <div key={item.id} className="w-full flex flex-col items-center">
                      <div
                        ref={el => { processRefs.current[i] = el }}
                        className="w-full max-w-[280px]"
                        style={{
                          opacity: active ? 1 : 0.35,
                          transform: active ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.96)',
                          transition: `all 800ms ${spring} ${i * 80}ms`,
                        }}
                      >
                        <div
                          className="bg-white rounded-xl p-4 flex items-center gap-3"
                          style={{
                            border: `2px solid ${active ? '#3b82f6' : '#e5e7eb'}`,
                            boxShadow: active
                              ? '0 4px 16px rgba(59, 130, 246, 0.12)'
                              : '0 1px 2px rgba(0,0,0,0.03)',
                            transition: `all 600ms ${smooth}`,
                          }}
                        >
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                              background: active ? 'rgba(59, 130, 246, 0.1)' : '#f3f4f6',
                              transition: `all 600ms ${smooth}`,
                            }}
                          >
                            <ProcessIcon type={item.id} active={active} />
                          </div>
                          <div className="min-w-0">
                            <div
                              className="font-semibold text-sm"
                              style={{
                                color: active ? '#111827' : '#9ca3af',
                                transition: `color 600ms ${smooth}`,
                              }}
                            >
                              {item.title}
                            </div>
                            <div
                              className="text-xs mt-0.5"
                              style={{
                                color: active ? '#6b7280' : '#d1d5db',
                                transition: `color 600ms ${smooth}`,
                              }}
                            >
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Connector between process cards */}
                      {i < processingCards.length - 1 && (
                        <VerticalConnector active={step >= i + 2} color="blue" />
                      )}
                    </div>
                  )
                })}
              </div>
            )}

            {/* Mobile: Vertical connector before outputs */}
            {isMobile && <VerticalConnector active={step >= 4} color="green" />}

            {/* Phase 3: OUTPUTS */}
            <div className="text-center mt-12 mb-3 md:mt-8">
              <span
                className="inline-block px-3 py-1 text-xs font-semibold tracking-wider rounded-full"
                style={{
                  background: step >= 4 ? 'rgba(34, 197, 94, 0.1)' : '#f3f4f6',
                  color: step >= 4 ? '#16a34a' : '#9ca3af',
                  transition: `all 600ms ${smooth}`,
                }}
              >
                FASE 3 — RESULTADOS ENTREGUES
              </span>
              <p
                className="text-xs mt-1.5 max-w-sm mx-auto"
                style={{
                  color: step >= 4 ? '#6b7280' : '#d1d5db',
                  transition: `color 600ms ${smooth}`,
                }}
              >
                Múltiplas ações executadas simultaneamente
              </p>
            </div>

            {/* Output Cards */}
            {/* Desktop: horizontal layout */}
            {!isMobile && (
              <div className="flex justify-center gap-16 mt-4">
                {outputCards.map((item, i) => {
                  const active = step >= 4
                  return (
                    <div
                      key={item.id}
                      ref={el => { outputRefs.current[i] = el }}
                      style={{
                        opacity: active ? 1 : 0.3,
                        transform: active ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.94)',
                        transition: `all 800ms ${spring} ${i * 100}ms`,
                      }}
                    >
                      <div
                        className="bg-white rounded-xl p-4 flex items-center gap-3"
                        style={{
                          border: `2px solid ${active ? '#22c55e' : '#e5e7eb'}`,
                          boxShadow: active
                            ? '0 4px 16px rgba(34, 197, 94, 0.12)'
                            : '0 1px 2px rgba(0,0,0,0.03)',
                          transition: `all 600ms ${smooth}`,
                        }}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            background: active ? 'rgba(34, 197, 94, 0.1)' : '#f3f4f6',
                            transition: `all 600ms ${smooth}`,
                          }}
                        >
                          <OutputIcon type={item.id} active={active} />
                        </div>
                        <div>
                          <div
                            className="font-semibold text-sm whitespace-nowrap"
                            style={{
                              color: active ? '#22c55e' : '#9ca3af',
                              transition: `color 600ms ${smooth}`,
                            }}
                          >
                            {item.title}
                          </div>
                          <div
                            className="text-xs mt-0.5 whitespace-nowrap"
                            style={{
                              color: active ? '#6b7280' : '#d1d5db',
                              transition: `color 600ms ${smooth}`,
                            }}
                          >
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Mobile: horizontal layout for output cards (side by side) */}
            {isMobile && (
              <div className="flex justify-center gap-4">
                {outputCards.map((item, i) => {
                  const active = step >= 4
                  return (
                    <div
                      key={item.id}
                      ref={el => { outputRefs.current[i] = el }}
                      className="flex-1 max-w-[160px]"
                      style={{
                        opacity: active ? 1 : 0.3,
                        transform: active ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.94)',
                        transition: `all 800ms ${spring} ${i * 100}ms`,
                      }}
                    >
                      <div
                        className="bg-white rounded-xl p-3 flex flex-col items-center gap-2 text-center"
                        style={{
                          border: `2px solid ${active ? '#22c55e' : '#e5e7eb'}`,
                          boxShadow: active
                            ? '0 4px 16px rgba(34, 197, 94, 0.12)'
                            : '0 1px 2px rgba(0,0,0,0.03)',
                          transition: `all 600ms ${smooth}`,
                        }}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            background: active ? 'rgba(34, 197, 94, 0.1)' : '#f3f4f6',
                            transition: `all 600ms ${smooth}`,
                          }}
                        >
                          <OutputIcon type={item.id} active={active} />
                        </div>
                        <div>
                          <div
                            className="font-semibold text-sm"
                            style={{
                              color: active ? '#22c55e' : '#9ca3af',
                              transition: `color 600ms ${smooth}`,
                            }}
                          >
                            {item.title}
                          </div>
                          <div
                            className="text-xs mt-0.5"
                            style={{
                              color: active ? '#6b7280' : '#d1d5db',
                              transition: `color 600ms ${smooth}`,
                            }}
                          >
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Summary: Key Advantages */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: step >= 4 ? 1 : 0, y: step >= 4 ? 0 : 10 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 pt-6 border-t border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Advantage 1: Independent Operation */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">Operação 24/7</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Roda automaticamente, sem intervenção manual
                    </p>
                  </div>
                </div>

                {/* Advantage 2: Off-Client Processing */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <path d="M22 12H18L15 21L9 3L6 12H2"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">Processamento Externo</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Executado na nuvem, zero carga no seu ambiente
                    </p>
                  </div>
                </div>

                {/* Advantage 3: Minimal Client Engagement */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                      <path d="M22 4L12 14.01l-3-3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">Engajamento Mínimo</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Configure uma vez, funciona para sempre
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
