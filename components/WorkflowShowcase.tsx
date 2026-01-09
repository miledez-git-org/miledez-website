'use client'

import { useEffect, useState, useRef, useLayoutEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Easing curves
const smooth = 'cubic-bezier(0.4, 0, 0.2, 1)'

// Colors
const lineColor = '#d1d5db'
const lineActiveColor = '#86efac'
const accentGreen = '#22c55e'
const accentGreenLight = '#dcfce7'

// =============================================================================
// VISUAL ELEMENTS
// =============================================================================

// Donut Chart Component
function DonutChart({
  percentage,
  size = 64,
  strokeWidth = 6,
  active = false
}: {
  percentage: number
  size?: number
  strokeWidth?: number
  active?: boolean
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={active ? accentGreen : '#d1d5db'}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={active ? strokeDashoffset : circumference}
          strokeLinecap="round"
          style={{
            transition: `stroke-dashoffset 1.2s ${smooth}, stroke 0.6s ${smooth}`,
          }}
        />
      </svg>
    </div>
  )
}

// Line Chart Component
function LineChart({ active = false, variant = 1 }: { active?: boolean; variant?: number }) {
  const paths = {
    1: 'M 0 60 Q 30 55 60 45 T 120 35 T 180 25 T 240 15',
    2: 'M 0 50 Q 40 45 80 55 T 160 30 T 240 20',
    3: 'M 0 55 L 60 45 L 120 50 L 180 25 L 240 15',
  }

  return (
    <div className="w-full h-16 relative overflow-hidden">
      <svg viewBox="0 0 240 70" className="w-full h-full" preserveAspectRatio="none">
        {/* Grid lines */}
        {[20, 40, 60].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="240"
            y2={y}
            stroke="#f3f4f6"
            strokeWidth="1"
          />
        ))}
        {/* Area fill */}
        <path
          d={`${paths[variant as keyof typeof paths]} L 240 70 L 0 70 Z`}
          fill={active ? 'rgba(34, 197, 94, 0.1)' : 'rgba(209, 213, 219, 0.2)'}
          style={{ transition: `fill 0.6s ${smooth}` }}
        />
        {/* Line */}
        <path
          d={paths[variant as keyof typeof paths]}
          fill="none"
          stroke={active ? accentGreen : '#d1d5db'}
          strokeWidth="2"
          strokeLinecap="round"
          style={{ transition: `stroke 0.6s ${smooth}` }}
        />
      </svg>
    </div>
  )
}

// Skeleton Loader Component
function SkeletonLoader({ lines = 3, active = false }: { lines?: number; active?: boolean }) {
  const widths = ['100%', '75%', '60%', '85%', '45%']

  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-2.5 rounded-full"
          style={{
            width: widths[i % widths.length],
            background: active
              ? `linear-gradient(90deg, ${accentGreenLight} 0%, #f0fdf4 50%, ${accentGreenLight} 100%)`
              : '#f3f4f6',
            backgroundSize: '200% 100%',
            animation: active ? 'shimmer 1.5s infinite' : 'none',
            transition: `background 0.6s ${smooth}`,
          }}
        />
      ))}
    </div>
  )
}

// Progress Bar Component
function ProgressBar({ percentage, active = false }: { percentage: number; active?: boolean }) {
  return (
    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{
          width: active ? `${percentage}%` : '0%',
          background: active ? accentGreen : '#d1d5db',
          transition: `width 1s ${smooth}, background 0.6s ${smooth}`,
        }}
      />
    </div>
  )
}

// Stats Display Component
function StatsDisplay({ value, label, active = false }: { value: string; label: string; active?: boolean }) {
  return (
    <div className="text-center">
      <div
        className="text-2xl font-bold"
        style={{
          color: active ? accentGreen : '#9ca3af',
          transition: `color 0.6s ${smooth}`,
        }}
      >
        {value}
      </div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  )
}

// Mini Bar Chart Component
function MiniBarChart({ active = false }: { active?: boolean }) {
  const bars = [40, 65, 45, 80, 55, 70, 50]

  return (
    <div className="flex items-end gap-1 h-12">
      {bars.map((height, i) => (
        <div
          key={i}
          className="flex-1 rounded-t"
          style={{
            height: active ? `${height}%` : '20%',
            background: active ? accentGreen : '#e5e7eb',
            opacity: active ? 0.6 + (i * 0.05) : 0.4,
            transition: `height 0.8s ${smooth} ${i * 0.05}s, background 0.6s ${smooth}, opacity 0.6s ${smooth}`,
          }}
        />
      ))}
    </div>
  )
}

// =============================================================================
// CARD COMPONENT
// =============================================================================

interface CardProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  width?: number
  active?: boolean
  className?: string
}

function Card({ title, subtitle, children, width = 280, active = false, className = '' }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-5 ${className}`}
      style={{
        width,
        boxShadow: active
          ? '0 8px 30px rgba(34, 197, 94, 0.12), 0 2px 8px rgba(0,0,0,0.04)'
          : '0 2px 12px rgba(0,0,0,0.06)',
        border: `1px solid ${active ? 'rgba(34, 197, 94, 0.2)' : '#f3f4f6'}`,
        transition: `box-shadow 0.6s ${smooth}, border-color 0.6s ${smooth}`,
      }}
    >
      <div className="mb-3">
        <h3
          className="font-semibold text-sm"
          style={{
            color: active ? '#111827' : '#6b7280',
            transition: `color 0.6s ${smooth}`,
          }}
        >
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  )
}

// =============================================================================
// CONNECTOR PATH TYPES
// =============================================================================

interface ConnectorPath {
  id: string
  d: string
  dots: { x: number; y: number }[]
}

// =============================================================================
// VARIATION 1: Staggered Analytics Dashboard
// =============================================================================

export function WorkflowVariation1() {
  const [step, setStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [paths, setPaths] = useState<ConnectorPath[]>([])

  // Card refs
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // Calculate paths
  const calculatePaths = useCallback(() => {
    if (!containerRef.current || !card1Ref.current || !card2Ref.current || !card3Ref.current) return

    const container = containerRef.current.getBoundingClientRect()
    const c1 = card1Ref.current.getBoundingClientRect()
    const c2 = card2Ref.current.getBoundingClientRect()
    const c3 = card3Ref.current.getBoundingClientRect()

    const rel = (rect: DOMRect) => ({
      x: rect.left - container.left + rect.width / 2,
      y: rect.top - container.top + rect.height / 2,
      right: rect.left - container.left + rect.width,
      bottom: rect.top - container.top + rect.height,
      left: rect.left - container.left,
      top: rect.top - container.top,
    })

    const r1 = rel(c1)
    const r2 = rel(c2)
    const r3 = rel(c3)

    const r = 16 // corner radius

    // Path from card 1 to card 2
    const midX1 = r1.right + 30
    const path1 = `
      M ${r1.right} ${r1.y}
      L ${midX1 - r} ${r1.y}
      Q ${midX1} ${r1.y} ${midX1} ${r1.y + r}
      L ${midX1} ${r2.top - r}
      Q ${midX1} ${r2.top} ${midX1 + r} ${r2.top}
      L ${r2.left} ${r2.top}
    `

    // Path from card 2 to card 3
    const midX2 = r2.left - 30
    const path2 = `
      M ${r2.left} ${r2.bottom}
      L ${midX2 + r} ${r2.bottom}
      Q ${midX2} ${r2.bottom} ${midX2} ${r2.bottom + r}
      L ${midX2} ${r3.top - r}
      Q ${midX2} ${r3.top} ${midX2 - r} ${r3.top}
      L ${r3.left + r3.x - r3.left} ${r3.top}
    `

    setPaths([
      {
        id: 'path1',
        d: path1,
        dots: [
          { x: r1.right, y: r1.y },
          { x: midX1, y: r1.y },
          { x: midX1, y: r2.top },
        ],
      },
      {
        id: 'path2',
        d: path2,
        dots: [
          { x: r2.left, y: r2.bottom },
          { x: midX2, y: r2.bottom },
          { x: midX2, y: r3.top },
        ],
      },
    ])
  }, [])

  useLayoutEffect(() => {
    calculatePaths()
    window.addEventListener('resize', calculatePaths)
    const timer = setTimeout(calculatePaths, 100)
    return () => {
      window.removeEventListener('resize', calculatePaths)
      clearTimeout(timer)
    }
  }, [calculatePaths])

  // Animation loop
  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      if (step >= 3) {
        setTimeout(() => setStep(0), 2000)
      } else {
        setStep(prev => prev + 1)
      }
    }, step === 0 ? 800 : 1200)

    return () => clearTimeout(timer)
  }, [isVisible, step])

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-3xl mx-auto p-8 min-h-[420px]"
      style={{ background: '#f8fafc' }}
    >
      {/* SVG Connectors */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
        {paths.map((path, pathIndex) => (
          <g key={path.id}>
            {/* Path line */}
            <path
              d={path.d}
              fill="none"
              stroke={step > pathIndex ? lineActiveColor : lineColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transition: `stroke 0.6s ${smooth}`,
                opacity: step > pathIndex ? 1 : 0.5,
              }}
            />
            {/* Junction dots */}
            {path.dots.map((dot, i) => (
              <circle
                key={i}
                cx={dot.x}
                cy={dot.y}
                r={3}
                fill={step > pathIndex ? lineActiveColor : lineColor}
                style={{
                  transition: `fill 0.6s ${smooth}`,
                  opacity: step > pathIndex ? 1 : 0.5,
                }}
              />
            ))}
          </g>
        ))}
      </svg>

      {/* Cards */}
      <div className="relative z-10">
        {/* Card 1: Top left - Donut Chart */}
        <div ref={card1Ref} className="absolute" style={{ top: 20, left: 40 }}>
          <Card title="Taxa de sucesso" subtitle="Últimas 24 horas" active={step >= 1} width={220}>
            <div className="flex items-center gap-4">
              <DonutChart percentage={87} active={step >= 1} />
              <div>
                <div
                  className="text-2xl font-bold"
                  style={{
                    color: step >= 1 ? accentGreen : '#9ca3af',
                    transition: `color 0.6s ${smooth}`,
                  }}
                >
                  87%
                </div>
                <div className="text-xs text-gray-400">+12% vs ontem</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Card 2: Middle right - Line Chart */}
        <div ref={card2Ref} className="absolute" style={{ top: 140, right: 20 }}>
          <Card title="Desempenho do fluxo" subtitle="Processamentos por hora" active={step >= 2} width={300}>
            <LineChart active={step >= 2} variant={1} />
          </Card>
        </div>

        {/* Card 3: Bottom left - Skeleton Loader */}
        <div ref={card3Ref} className="absolute" style={{ top: 300, left: 80 }}>
          <Card title="Relatório de atividades" active={step >= 3} width={260}>
            <SkeletonLoader lines={4} active={step >= 3} />
          </Card>
        </div>
      </div>
    </div>
  )
}

// =============================================================================
// VARIATION 2: Multi-metric Dashboard
// =============================================================================

export function WorkflowVariation2() {
  const [step, setStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // Animation loop
  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      if (step >= 4) {
        setTimeout(() => setStep(0), 2500)
      } else {
        setStep(prev => prev + 1)
      }
    }, step === 0 ? 600 : 1000)

    return () => clearTimeout(timer)
  }, [isVisible, step])

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto p-8 min-h-[480px]"
      style={{ background: '#f8fafc' }}
    >
      {/* SVG Connectors - simplified visual */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        {/* Vertical stem */}
        <path
          d="M 400 80 L 400 200"
          fill="none"
          stroke={step >= 1 ? lineActiveColor : lineColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ transition: `stroke 0.6s ${smooth}`, opacity: step >= 1 ? 1 : 0.4 }}
        />
        {/* Branch left */}
        <path
          d="M 400 200 L 200 200 L 200 280"
          fill="none"
          stroke={step >= 2 ? lineActiveColor : lineColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: `stroke 0.6s ${smooth}`, opacity: step >= 2 ? 1 : 0.4 }}
        />
        {/* Branch right */}
        <path
          d="M 400 200 L 600 200 L 600 280"
          fill="none"
          stroke={step >= 2 ? lineActiveColor : lineColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: `stroke 0.6s ${smooth}`, opacity: step >= 2 ? 1 : 0.4 }}
        />
        {/* Bottom convergence */}
        <path
          d="M 200 380 L 200 420 L 600 420 L 600 380"
          fill="none"
          stroke={step >= 4 ? lineActiveColor : lineColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: `stroke 0.6s ${smooth}`, opacity: step >= 4 ? 1 : 0.4 }}
        />
        {/* Junction dots */}
        <circle cx={400} cy={200} r={4} fill={step >= 2 ? lineActiveColor : lineColor} style={{ transition: `fill 0.6s ${smooth}` }} />
        <circle cx={200} cy={200} r={3} fill={step >= 2 ? lineActiveColor : lineColor} style={{ transition: `fill 0.6s ${smooth}` }} />
        <circle cx={600} cy={200} r={3} fill={step >= 2 ? lineActiveColor : lineColor} style={{ transition: `fill 0.6s ${smooth}` }} />
        <circle cx={400} cy={420} r={4} fill={step >= 4 ? lineActiveColor : lineColor} style={{ transition: `fill 0.6s ${smooth}` }} />
      </svg>

      {/* Cards */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Top Card - Trigger */}
        <Card title="Dados recebidos" subtitle="Monitoramento ativo" active={step >= 1} width={260}>
          <div className="flex items-center justify-between">
            <StatsDisplay value="1,247" label="registros" active={step >= 1} />
            <div className="h-10 w-px bg-gray-100" />
            <StatsDisplay value="99.8%" label="uptime" active={step >= 1} />
          </div>
        </Card>

        {/* Middle Row - Two Cards */}
        <div className="flex justify-center gap-32 mt-20">
          <Card title="Validação" subtitle="Regras aplicadas" active={step >= 2} width={200}>
            <ProgressBar percentage={94} active={step >= 2} />
            <div className="mt-2 text-xs text-gray-500 text-center">94% aprovados</div>
          </Card>

          <Card title="Enriquecimento" subtitle="Dados complementados" active={step >= 3} width={200}>
            <MiniBarChart active={step >= 3} />
          </Card>
        </div>

        {/* Bottom Card - Result */}
        <div className="mt-16">
          <Card title="Dados sincronizados" subtitle="Destinos atualizados" active={step >= 4} width={320}>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <LineChart active={step >= 4} variant={2} />
              </div>
              <div
                className="text-right"
                style={{
                  color: step >= 4 ? accentGreen : '#9ca3af',
                  transition: `color 0.6s ${smooth}`,
                }}
              >
                <div className="text-xl font-bold">+847</div>
                <div className="text-xs text-gray-400">registros/h</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

// =============================================================================
// VARIATION 3: Cascading Flow (Most similar to reference image)
// =============================================================================

export function WorkflowVariation3() {
  const [step, setStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [paths, setPaths] = useState<{ d: string; dots: { x: number; y: number }[] }[]>([])

  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const calculatePaths = useCallback(() => {
    if (!containerRef.current || !card1Ref.current || !card2Ref.current || !card3Ref.current) return

    const container = containerRef.current.getBoundingClientRect()
    const c1 = card1Ref.current.getBoundingClientRect()
    const c2 = card2Ref.current.getBoundingClientRect()
    const c3 = card3Ref.current.getBoundingClientRect()

    const rel = (rect: DOMRect) => ({
      centerX: rect.left - container.left + rect.width / 2,
      centerY: rect.top - container.top + rect.height / 2,
      right: rect.left - container.left + rect.width,
      bottom: rect.top - container.top + rect.height,
      left: rect.left - container.left,
      top: rect.top - container.top,
    })

    const r1 = rel(c1)
    const r2 = rel(c2)
    const r3 = rel(c3)

    const r = 12

    // Path 1: Card 1 right edge → down → to Card 2 top
    const turnX1 = r1.right + 40
    const path1 = `
      M ${r1.right} ${r1.centerY}
      L ${turnX1 - r} ${r1.centerY}
      Q ${turnX1} ${r1.centerY} ${turnX1} ${r1.centerY + r}
      L ${turnX1} ${r2.top - 20 - r}
      Q ${turnX1} ${r2.top - 20} ${turnX1 - r} ${r2.top - 20}
      L ${r2.centerX + r} ${r2.top - 20}
      Q ${r2.centerX} ${r2.top - 20} ${r2.centerX} ${r2.top - 20 + r}
      L ${r2.centerX} ${r2.top}
    `

    // Path 2: Card 2 left edge → down → to Card 3 top
    const turnX2 = r2.left - 40
    const path2 = `
      M ${r2.left} ${r2.centerY}
      L ${turnX2 + r} ${r2.centerY}
      Q ${turnX2} ${r2.centerY} ${turnX2} ${r2.centerY + r}
      L ${turnX2} ${r3.top - 20 - r}
      Q ${turnX2} ${r3.top - 20} ${turnX2 + r} ${r3.top - 20}
      L ${r3.centerX - r} ${r3.top - 20}
      Q ${r3.centerX} ${r3.top - 20} ${r3.centerX} ${r3.top - 20 + r}
      L ${r3.centerX} ${r3.top}
    `

    setPaths([
      {
        d: path1,
        dots: [
          { x: r1.right, y: r1.centerY },
          { x: turnX1, y: r1.centerY },
          { x: turnX1, y: r2.top - 20 },
          { x: r2.centerX, y: r2.top },
        ],
      },
      {
        d: path2,
        dots: [
          { x: r2.left, y: r2.centerY },
          { x: turnX2, y: r2.centerY },
          { x: turnX2, y: r3.top - 20 },
          { x: r3.centerX, y: r3.top },
        ],
      },
    ])
  }, [])

  useLayoutEffect(() => {
    calculatePaths()
    window.addEventListener('resize', calculatePaths)
    const timer = setTimeout(calculatePaths, 100)
    return () => {
      window.removeEventListener('resize', calculatePaths)
      clearTimeout(timer)
    }
  }, [calculatePaths])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      if (step >= 3) {
        setTimeout(() => setStep(0), 2500)
      } else {
        setStep(prev => prev + 1)
      }
    }, step === 0 ? 700 : 1100)

    return () => clearTimeout(timer)
  }, [isVisible, step])

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-3xl mx-auto p-10 min-h-[520px]"
      style={{ background: '#f8fafc', borderRadius: '24px' }}
    >
      {/* SVG Connectors */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
        {paths.map((path, i) => (
          <g key={i}>
            <path
              d={path.d}
              fill="none"
              stroke={step > i ? lineActiveColor : lineColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transition: `stroke 0.8s ${smooth}`,
                opacity: step > i ? 1 : 0.4,
              }}
            />
            {path.dots.map((dot, j) => (
              <circle
                key={j}
                cx={dot.x}
                cy={dot.y}
                r={j === 0 || j === path.dots.length - 1 ? 4 : 3}
                fill={step > i ? lineActiveColor : lineColor}
                style={{
                  transition: `fill 0.8s ${smooth}`,
                  opacity: step > i ? 1 : 0.4,
                }}
              />
            ))}
          </g>
        ))}
      </svg>

      {/* Cards - Staggered Layout */}
      <div className="relative z-10">
        {/* Card 1: Top left */}
        <div ref={card1Ref} style={{ position: 'absolute', top: 30, left: 30 }}>
          <Card title="Análise de saúde" subtitle="Score geral do sistema" active={step >= 1} width={240}>
            <div className="flex items-center gap-4">
              <DonutChart percentage={69} size={56} strokeWidth={5} active={step >= 1} />
              <div>
                <div
                  className="text-xl font-bold"
                  style={{
                    background: step >= 1 ? `linear-gradient(135deg, ${accentGreen}, #16a34a)` : '#d1d5db',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    transition: `all 0.6s ${smooth}`,
                  }}
                >
                  69%
                </div>
                <div className="text-xs text-gray-400">Saudável</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Card 2: Middle right */}
        <div ref={card2Ref} style={{ position: 'absolute', top: 180, right: 40 }}>
          <Card title="Análise de desempenho" subtitle="Taxa de processamento" active={step >= 2} width={300}>
            <LineChart active={step >= 2} variant={3} />
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>Seg</span>
              <span>Ter</span>
              <span>Qua</span>
              <span>Qui</span>
              <span>Sex</span>
            </div>
          </Card>
        </div>

        {/* Card 3: Bottom left */}
        <div ref={card3Ref} style={{ position: 'absolute', top: 380, left: 60 }}>
          <Card title="Revisão de conteúdo" active={step >= 3} width={280}>
            <SkeletonLoader lines={3} active={step >= 3} />
            <div className="flex gap-2 mt-3">
              <div
                className="flex-1 h-8 rounded-lg"
                style={{
                  background: step >= 3 ? accentGreenLight : '#f3f4f6',
                  transition: `background 0.6s ${smooth}`,
                }}
              />
              <div
                className="w-20 h-8 rounded-lg"
                style={{
                  background: step >= 3 ? '#f0fdf4' : '#f3f4f6',
                  transition: `background 0.6s ${smooth}`,
                }}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

// =============================================================================
// MAIN EXPORT - All Variations Combined
// =============================================================================

export default function WorkflowShowcase() {
  const [activeVariation, setActiveVariation] = useState(1)

  return (
    <div className="w-full py-16">
      {/* Variation Selector */}
      <div className="flex justify-center gap-2 mb-8">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setActiveVariation(num)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              activeVariation === num
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Variação {num}
          </button>
        ))}
      </div>

      {/* Showcase Container */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVariation}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeVariation === 1 && <WorkflowVariation1 />}
            {activeVariation === 2 && <WorkflowVariation2 />}
            {activeVariation === 3 && <WorkflowVariation3 />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
