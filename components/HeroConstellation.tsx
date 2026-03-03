'use client'

import { useRef, useEffect, useCallback, useState } from 'react'
import { useAnimationFrame } from 'framer-motion'

// --- Icon node configuration ---

interface IconNodeConfig {
  /** Icon filename in /public/icons/ */
  icon: string
  /** Semi-major axis (horizontal radius) */
  a: number
  /** Semi-minor axis (vertical radius) */
  b: number
  /** Angular speed multiplier (lower = slower) */
  speed: number
  /** Starting angle offset in radians */
  phase: number
}

// SVG viewBox dimensions
const VB_W = 400
const VB_H = 400
const CX = VB_W / 2
const CY = VB_H / 2

// Icon sizes and opacities for inactive/active states
const ICON_INACTIVE_SIZE = 22
const ICON_ACTIVE_SIZE = 34
const ICON_INACTIVE_OPACITY = 0.3
const ICON_ACTIVE_OPACITY = 1.0

// Chain animation timing (seconds)
const CHAIN_IDLE_MIN = 0.4
const CHAIN_IDLE_MAX = 0.8
const CHAIN_DRAW_SPEED = 0.8 // seconds per segment
const CHAIN_HOLD_DURATION = 1.0
const CHAIN_FADE_DURATION = 0.6
const FIRST_ICON_FADE_DURATION = 0.3 // seconds for first icon to fade in

// Chain sizes
const CHAIN_SIZE_DESKTOP = [3, 4] as const // min, max icons per chain
const CHAIN_SIZE_MOBILE = [2, 3] as const

// Cooldown: icons skip next N cycles after participating
const COOLDOWN_CYCLES = 2

// Minimum distance between any two icons (px) — used for runtime repulsion
const MIN_ICON_DIST = 44

// Outer ring (5) — large, slow — phases evenly spaced at ~1.257 rad (2π/5)
const OUTER_RING: IconNodeConfig[] = [
  { icon: 'whatsapp', a: 165, b: 155, speed: 0.012, phase: 0 },
  { icon: 'gmail', a: 155, b: 160, speed: -0.010, phase: 1.257 },
  { icon: 'shopify', a: 170, b: 148, speed: 0.011, phase: 2.513 },
  { icon: 'salesforce', a: 160, b: 162, speed: -0.009, phase: 3.770 },
  { icon: 'slack', a: 163, b: 152, speed: 0.010, phase: 5.027 },
]

// Middle ring (5) — medium — phases offset by 0.628 rad from outer ring
const MIDDLE_RING: IconNodeConfig[] = [
  { icon: 'google-sheets', a: 108, b: 110, speed: -0.017, phase: 0.628 },
  { icon: 'notion', a: 118, b: 100, speed: 0.015, phase: 1.885 },
  { icon: 'pipedrive', a: 112, b: 106, speed: -0.014, phase: 3.142 },
  { icon: 'stripe', a: 120, b: 102, speed: 0.016, phase: 4.398 },
  { icon: 'hubspot', a: 110, b: 115, speed: -0.015, phase: 5.655 },
]

// Inner ring (4) — phases at ~1.571 rad (2π/4)
const INNER_RING: IconNodeConfig[] = [
  { icon: 'n8n', a: 68, b: 65, speed: 0.020, phase: 0.4 },
  { icon: 'google-calendar', a: 60, b: 70, speed: -0.018, phase: 1.971 },
  { icon: 'telegram', a: 65, b: 62, speed: 0.019, phase: 3.542 },
  { icon: 'airtable', a: 62, b: 68, speed: -0.017, phase: 5.112 },
]

// Desktop: all 14, Mobile: outer + middle (10)
const NODES_DESKTOP = [...OUTER_RING, ...MIDDLE_RING, ...INNER_RING]
const NODES_MOBILE = [...OUTER_RING, ...MIDDLE_RING]

// --- Chain animation state machine ---

type ChainPhase = 'idle' | 'drawing' | 'holding' | 'fading'

interface ChainState {
  phase: ChainPhase
  /** Time when current phase started */
  phaseStart: number
  /** Pre-computed idle wait duration (set once on entering idle) */
  idleDuration: number
  /** Indices of icons in the current chain */
  chainIndices: number[]
  /** Per-icon activation progress (0 = inactive, 1 = fully active) */
  iconProgress: number[]
  /** Chain path fade multiplier (1 = visible, 0 = gone) */
  pathOpacity: number
  /** How far along the drawing phase (0..totalSegments) */
  drawProgress: number
  /** Cooldown map: icon index → remaining cycles */
  cooldowns: Map<number, number>
}

/** Fisher-Yates shuffle (in-place) */
function shuffleArray<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/** Pick random int in [min, max] inclusive */
function randInt(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1))
}

export default function HeroConstellation() {
  const svgRef = useRef<SVGSVGElement>(null)
  const timeRef = useRef(0)

  // Refs for each icon group (<g>) and image (<image>)
  const groupRefs = useRef<(SVGGElement | null)[]>([])
  const imageRefs = useRef<(SVGImageElement | null)[]>([])

  // Single connector path
  const chainPathRef = useRef<SVGPathElement>(null)

  // Chain animation state (all in refs, no re-renders)
  const chainRef = useRef<ChainState>({
    phase: 'idle',
    phaseStart: 0,
    idleDuration: CHAIN_IDLE_MIN + Math.random() * (CHAIN_IDLE_MAX - CHAIN_IDLE_MIN),
    chainIndices: [],
    iconProgress: [],
    pathOpacity: 0,
    drawProgress: 0,
    cooldowns: new Map(),
  })

  // Positions cache (updated every frame)
  const positionsRef = useRef<{ x: number; y: number }[]>([])

  // Reduced motion detection
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
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

  const nodes = isMobile ? NODES_MOBILE : NODES_DESKTOP
  const nodeCount = nodes.length
  const chainSizeRange = isMobile ? CHAIN_SIZE_MOBILE : CHAIN_SIZE_DESKTOP

  // Compute static positions for reduced-motion or initial SSR
  const getStaticPos = useCallback(
    (node: IconNodeConfig) => ({
      x: CX + node.a * Math.cos(node.phase),
      y: CY + node.b * Math.sin(node.phase),
    }),
    []
  )

  // Select next chain icons, respecting cooldowns
  const selectChainIcons = useCallback(
    (count: number, totalNodes: number, cooldowns: Map<number, number>): number[] => {
      // Build eligible pool
      const eligible = []
      for (let i = 0; i < totalNodes; i++) {
        if (!cooldowns.has(i)) eligible.push(i)
      }

      // If pool is too small, clear oldest cooldowns
      while (eligible.length < count && cooldowns.size > 0) {
        // Find the icon with the lowest remaining cooldown
        let minCd = Infinity
        let minIdx = -1
        cooldowns.forEach((cd, idx) => {
          if (cd < minCd) {
            minCd = cd
            minIdx = idx
          }
        })
        if (minIdx >= 0) {
          cooldowns.delete(minIdx)
          eligible.push(minIdx)
        }
      }

      shuffleArray(eligible)
      return eligible.slice(0, count)
    },
    []
  )

  // Main animation loop
  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion) return
    if (!svgRef.current) return

    // Clamp dt to avoid jumps when tab is backgrounded
    const dt = Math.min(delta / 1000, 0.1)
    timeRef.current += dt
    const t = timeRef.current

    const positions: { x: number; y: number }[] = []

    // Calculate orbital positions
    for (let i = 0; i < nodeCount; i++) {
      const node = nodes[i]
      const x = CX + node.a * Math.cos(t * node.speed + node.phase)
      const y = CY + node.b * Math.sin(t * node.speed + node.phase)
      positions.push({ x, y })
    }

    // Repulsion pass: push apart any icons closer than MIN_ICON_DIST
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = positions[j].x - positions[i].x
        const dy = positions[j].y - positions[i].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MIN_ICON_DIST && dist > 0) {
          const overlap = (MIN_ICON_DIST - dist) / 2
          const nx = dx / dist
          const ny = dy / dist
          positions[i].x -= nx * overlap
          positions[i].y -= ny * overlap
          positions[j].x += nx * overlap
          positions[j].y += ny * overlap
        }
      }
    }

    // Apply repulsion-adjusted positions to DOM
    for (let i = 0; i < nodeCount; i++) {
      const g = groupRefs.current[i]
      if (g) {
        g.setAttribute('transform', `translate(${positions[i].x}, ${positions[i].y})`)
      }
    }

    positionsRef.current = positions

    // --- Chain animation state machine ---
    const cs = chainRef.current
    const elapsed = t - cs.phaseStart

    switch (cs.phase) {
      case 'idle': {
        // Wait for pre-computed idle duration to pass
        if (elapsed >= cs.idleDuration) {
          // Transition to drawing
          const chainSize = randInt(chainSizeRange[0], chainSizeRange[1])
          const indices = selectChainIcons(chainSize, nodeCount, cs.cooldowns)

          cs.phase = 'drawing'
          cs.phaseStart = t
          cs.chainIndices = indices
          cs.iconProgress = new Array(indices.length).fill(0)
          cs.drawProgress = 0
          cs.pathOpacity = 0.5
        }

        // Ensure path is hidden during idle
        if (chainPathRef.current) {
          chainPathRef.current.setAttribute('opacity', '0')
        }
        break
      }

      case 'drawing': {
        const totalSegments = cs.chainIndices.length - 1
        const totalDrawTime = totalSegments * CHAIN_DRAW_SPEED
        const progress = Math.min(elapsed / totalDrawTime, 1)
        cs.drawProgress = progress * totalSegments

        // Activate icons as the line reaches them
        for (let i = 0; i < cs.chainIndices.length; i++) {
          if (i === 0) {
            // First icon fades in smoothly over FIRST_ICON_FADE_DURATION
            cs.iconProgress[i] = Math.min(1, elapsed / FIRST_ICON_FADE_DURATION)
          } else {
            // Icon i activates when segment i-1 → i is being drawn
            const segmentProgress = cs.drawProgress - (i - 1)
            cs.iconProgress[i] = Math.max(0, Math.min(1, segmentProgress))
          }
        }

        // Build and update path
        updateChainPath(cs, positions)

        if (progress >= 1) {
          // All segments drawn, transition to holding
          cs.phase = 'holding'
          cs.phaseStart = t
          // Ensure all icons are fully active
          cs.iconProgress.fill(1)
        }
        break
      }

      case 'holding': {
        // Keep chain visible, icons still orbit
        updateChainPath(cs, positions)

        if (elapsed >= CHAIN_HOLD_DURATION) {
          cs.phase = 'fading'
          cs.phaseStart = t
        }
        break
      }

      case 'fading': {
        const fadeProgress = Math.min(elapsed / CHAIN_FADE_DURATION, 1)
        // Ease out
        const fadeMultiplier = 1 - fadeProgress * fadeProgress

        cs.pathOpacity = 0.5 * fadeMultiplier

        // Fade icon activations
        for (let i = 0; i < cs.iconProgress.length; i++) {
          cs.iconProgress[i] = fadeMultiplier
        }

        updateChainPath(cs, positions)

        if (fadeProgress >= 1) {
          // Add cooldowns for participating icons
          for (const idx of cs.chainIndices) {
            cs.cooldowns.set(idx, COOLDOWN_CYCLES)
          }
          // Decrement all existing cooldowns
          cs.cooldowns.forEach((cd, idx) => {
            if (cd <= 1) {
              cs.cooldowns.delete(idx)
            } else {
              cs.cooldowns.set(idx, cd - 1)
            }
          })

          // Reset to idle with a fresh random duration
          cs.phase = 'idle'
          cs.phaseStart = t
          cs.idleDuration = CHAIN_IDLE_MIN + Math.random() * (CHAIN_IDLE_MAX - CHAIN_IDLE_MIN)
          cs.chainIndices = []
          cs.iconProgress = []
          cs.drawProgress = 0
          cs.pathOpacity = 0
        }
        break
      }
    }

    // Update icon appearances based on activation
    for (let i = 0; i < nodeCount; i++) {
      const img = imageRefs.current[i]
      if (!img) continue

      const chainIdx = cs.chainIndices.indexOf(i)
      const activation = chainIdx >= 0 ? cs.iconProgress[chainIdx] : 0

      // Lerp size
      const size = ICON_INACTIVE_SIZE + (ICON_ACTIVE_SIZE - ICON_INACTIVE_SIZE) * activation
      const halfSize = size / 2

      img.setAttribute('width', String(size))
      img.setAttribute('height', String(size))
      img.setAttribute('x', String(-halfSize))
      img.setAttribute('y', String(-halfSize))

      // Lerp opacity
      const opacity = ICON_INACTIVE_OPACITY + (ICON_ACTIVE_OPACITY - ICON_INACTIVE_OPACITY) * activation
      img.setAttribute('opacity', String(opacity))

      // Toggle grayscale filter
      if (activation > 0.5) {
        img.removeAttribute('filter')
      } else {
        img.setAttribute('filter', 'url(#icon-inactive)')
      }
    }
  })

  // Helper: build/update the chain connector path (straight lines, center-to-center)
  function updateChainPath(
    cs: ChainState,
    positions: { x: number; y: number }[]
  ) {
    const pathEl = chainPathRef.current
    if (!pathEl || cs.chainIndices.length < 2) return

    const points = cs.chainIndices.map((idx) => positions[idx]).filter(Boolean)
    if (points.length < 2) return

    // Straight line segments between icon centers
    let d = `M ${points[0].x},${points[0].y}`
    for (let i = 1; i < points.length; i++) {
      d += ` L ${points[i].x},${points[i].y}`
    }

    pathEl.setAttribute('d', d)
    pathEl.setAttribute('opacity', String(cs.pathOpacity))

    // Only apply dash animation during drawing phase
    if (cs.phase === 'drawing') {
      let totalLength = 0
      for (let i = 1; i < points.length; i++) {
        const dx = points[i].x - points[i - 1].x
        const dy = points[i].y - points[i - 1].y
        totalLength += Math.sqrt(dx * dx + dy * dy)
      }
      const visibleLength = (cs.drawProgress / Math.max(cs.chainIndices.length - 1, 1)) * totalLength
      pathEl.setAttribute('stroke-dasharray', String(totalLength))
      pathEl.setAttribute('stroke-dashoffset', String(totalLength - visibleLength))
    } else {
      pathEl.removeAttribute('stroke-dasharray')
      pathEl.removeAttribute('stroke-dashoffset')
    }
  }

  return (
    <div
      role="presentation"
      className="w-full aspect-square max-w-[400px] lg:max-w-none"
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <filter id="icon-inactive">
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>

        {/* Chain connector path (rendered first = behind icons) */}
        <path
          ref={chainPathRef}
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0"
        />

        {/* Icon nodes */}
        {nodes.map((node, i) => {
          const pos = prefersReducedMotion
            ? getStaticPos(node)
            : { x: CX + node.a * Math.cos(node.phase), y: CY + node.b * Math.sin(node.phase) }

          const size = ICON_INACTIVE_SIZE
          const halfSize = size / 2

          return (
            <g
              key={node.icon}
              ref={(el) => { groupRefs.current[i] = el }}
              transform={`translate(${pos.x}, ${pos.y})`}
            >
              <image
                ref={(el) => { imageRefs.current[i] = el }}
                href={`/icons/${node.icon}.svg`}
                width={size}
                height={size}
                x={-halfSize}
                y={-halfSize}
                opacity={prefersReducedMotion ? 0.5 : ICON_INACTIVE_OPACITY}
                filter="url(#icon-inactive)"
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
