'use client'

import { useRef, useEffect, useCallback, useState } from 'react'
import { useAnimationFrame } from 'framer-motion'

// --- Node configuration ---

interface NodeConfig {
  /** Semi-major axis (horizontal radius) */
  a: number
  /** Semi-minor axis (vertical radius) */
  b: number
  /** Angular speed multiplier (lower = slower) */
  speed: number
  /** Starting angle offset in radians */
  phase: number
  /** Circle radius in px */
  size: number
  /** Base fill color */
  color: string
}

const BRAND_PRIMARY = '#06392f'

const NODES: NodeConfig[] = [
  // Outer ring — large, slow
  { a: 155, b: 130, speed: 0.015, phase: 0, size: 5, color: '#d4d4d4' },
  { a: 140, b: 145, speed: -0.012, phase: 2.1, size: 4, color: '#d4d4d4' },
  { a: 160, b: 120, speed: 0.01, phase: 4.2, size: 6, color: '#a3a3a3' },
  // Middle ring
  { a: 95, b: 100, speed: -0.02, phase: 0.8, size: 5, color: '#d4d4d4' },
  { a: 105, b: 85, speed: 0.018, phase: 3.5, size: 4, color: '#a3a3a3' },
  // Inner ring — smaller, slightly faster
  { a: 55, b: 50, speed: 0.025, phase: 1.5, size: 5, color: '#d4d4d4' },
  { a: 45, b: 55, speed: -0.022, phase: 4.0, size: 4, color: '#d4d4d4' },
  // Accent nodes — brand-tinted
  { a: 120, b: 110, speed: 0.014, phase: 5.2, size: 5, color: 'rgba(6,57,47,0.35)' },
  { a: 70, b: 75, speed: -0.019, phase: 2.8, size: 4, color: 'rgba(6,57,47,0.35)' },
]

// Mobile uses first 5 nodes only
const MOBILE_NODE_COUNT = 5

// Connection distance threshold (squared, to avoid sqrt per frame)
const CONNECTION_DIST_SQ = 110 * 110

// SVG viewBox dimensions
const VB_W = 380
const VB_H = 420
const CX = VB_W / 2
const CY = VB_H / 2

export default function HeroConstellation() {
  const svgRef = useRef<SVGSVGElement>(null)
  const timeRef = useRef(0)
  const nodeRefs = useRef<(SVGCircleElement | null)[]>([])
  const lineRefs = useRef<(SVGLineElement | null)[]>([])
  const pulseCircleRef = useRef<SVGCircleElement>(null)
  const pulseRingRef = useRef<SVGCircleElement>(null)

  // Track pulse state via refs (no re-renders)
  const pulseState = useRef({
    activeNode: -1,
    startTime: 0,
    nextPulseAt: 3, // seconds until first pulse
  })

  // Reduced motion detection
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(motionQuery.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    motionQuery.addEventListener('change', handler)

    const mobileQuery = window.matchMedia('(max-width: 767px)')
    setIsMobile(mobileQuery.matches)
    const mobileHandler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mobileQuery.addEventListener('change', mobileHandler)

    return () => {
      motionQuery.removeEventListener('change', handler)
      mobileQuery.removeEventListener('change', mobileHandler)
    }
  }, [])

  const nodeCount = isMobile ? MOBILE_NODE_COUNT : NODES.length

  // Compute static positions for reduced-motion or initial SSR
  const getStaticPos = useCallback(
    (node: NodeConfig) => ({
      x: CX + node.a * Math.cos(node.phase),
      y: CY + node.b * Math.sin(node.phase),
    }),
    []
  )

  // Main animation loop
  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion) return
    if (!svgRef.current) return

    const dt = delta / 1000 // seconds
    timeRef.current += dt

    const t = timeRef.current
    const positions: { x: number; y: number }[] = []

    // Update node positions
    for (let i = 0; i < nodeCount; i++) {
      const node = NODES[i]
      const el = nodeRefs.current[i]
      if (!el) continue

      const x = CX + node.a * Math.cos(t * node.speed + node.phase)
      const y = CY + node.b * Math.sin(t * node.speed + node.phase)
      positions.push({ x, y })

      el.setAttribute('cx', String(x))
      el.setAttribute('cy', String(y))
    }

    // Update connecting lines (desktop only)
    if (!isMobile) {
      let lineIdx = 0
      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const dx = positions[i].x - positions[j].x
          const dy = positions[i].y - positions[j].y
          const distSq = dx * dx + dy * dy

          const lineEl = lineRefs.current[lineIdx]
          if (lineEl) {
            if (distSq < CONNECTION_DIST_SQ) {
              // Opacity fades as distance approaches threshold
              const ratio = 1 - distSq / CONNECTION_DIST_SQ
              const opacity = ratio * 0.4 // max 0.4 opacity
              lineEl.setAttribute('x1', String(positions[i].x))
              lineEl.setAttribute('y1', String(positions[i].y))
              lineEl.setAttribute('x2', String(positions[j].x))
              lineEl.setAttribute('y2', String(positions[j].y))
              lineEl.setAttribute('opacity', String(opacity))
            } else {
              lineEl.setAttribute('opacity', '0')
            }
          }
          lineIdx++
        }
      }
    }

    // Pulse logic
    const ps = pulseState.current
    if (ps.activeNode === -1) {
      // No active pulse — check if it's time for a new one
      if (t >= ps.nextPulseAt) {
        ps.activeNode = Math.floor(Math.random() * nodeCount)
        ps.startTime = t
      }
    } else {
      // Active pulse — animate
      const elapsed = t - ps.startTime
      const duration = 1.2 // seconds for full pulse cycle

      if (elapsed > duration) {
        // Pulse complete — hide and schedule next
        ps.activeNode = -1
        ps.nextPulseAt = t + 3 + Math.random() * 3 // 3-6s until next

        if (pulseCircleRef.current) pulseCircleRef.current.setAttribute('opacity', '0')
        if (pulseRingRef.current) pulseRingRef.current.setAttribute('opacity', '0')
      } else {
        const pos = positions[ps.activeNode]
        if (pos) {
          const progress = elapsed / duration

          // Pulse dot: scale up then down
          if (pulseCircleRef.current) {
            const scale = 1 + 0.5 * Math.sin(progress * Math.PI)
            const dotOpacity = Math.sin(progress * Math.PI)
            pulseCircleRef.current.setAttribute('cx', String(pos.x))
            pulseCircleRef.current.setAttribute('cy', String(pos.y))
            pulseCircleRef.current.setAttribute('r', String(NODES[ps.activeNode].size * scale))
            pulseCircleRef.current.setAttribute('opacity', String(dotOpacity * 0.8))
          }

          // Expanding ring
          if (pulseRingRef.current) {
            const ringRadius = NODES[ps.activeNode].size + progress * 20
            const ringOpacity = (1 - progress) * 0.3
            pulseRingRef.current.setAttribute('cx', String(pos.x))
            pulseRingRef.current.setAttribute('cy', String(pos.y))
            pulseRingRef.current.setAttribute('r', String(ringRadius))
            pulseRingRef.current.setAttribute('opacity', String(ringOpacity))
          }
        }
      }
    }
  })

  // Max possible line pairs: n*(n-1)/2
  const maxLines = (nodeCount * (nodeCount - 1)) / 2

  return (
    <div
      role="presentation"
      className="w-full aspect-[380/420] max-w-[380px] lg:max-w-none"
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Connecting lines (pre-allocated, hidden by default) */}
        {!isMobile &&
          Array.from({ length: maxLines }).map((_, i) => (
            <line
              key={`line-${i}`}
              ref={(el) => { lineRefs.current[i] = el }}
              stroke="#e5e5e5"
              strokeWidth="0.8"
              opacity="0"
            />
          ))}

        {/* Nodes */}
        {NODES.slice(0, nodeCount).map((node, i) => {
          const pos = getStaticPos(node)
          return (
            <circle
              key={`node-${i}`}
              ref={(el) => { nodeRefs.current[i] = el }}
              cx={pos.x}
              cy={pos.y}
              r={node.size}
              fill={node.color}
            />
          )
        })}

        {/* Pulse overlay elements */}
        <circle
          ref={pulseCircleRef}
          r={5}
          fill={BRAND_PRIMARY}
          opacity="0"
        />
        <circle
          ref={pulseRingRef}
          r={5}
          fill="none"
          stroke={BRAND_PRIMARY}
          strokeWidth="1"
          opacity="0"
        />
      </svg>
    </div>
  )
}
