'use client'

import { useRef, useEffect, useState } from 'react'
import { useAnimationFrame } from 'framer-motion'

// --- Static icon node configuration ---

interface IconNode {
  icon: string
  x: number
  y: number
}

// SVG viewBox dimensions
const VB_W = 400
const VB_H = 400

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

// Desktop: 14 static icon positions in the 400x400 viewBox
const DESKTOP_NODES: IconNode[] = [
  { icon: 'whatsapp',        x: 55,  y: 80  },  // 0
  { icon: 'gmail',           x: 185, y: 45  },  // 1
  { icon: 'shopify',         x: 330, y: 55  },  // 2
  { icon: 'salesforce',      x: 355, y: 185 },  // 3
  { icon: 'slack',           x: 340, y: 320 },  // 4
  { icon: 'google-sheets',   x: 80,  y: 190 },  // 5
  { icon: 'notion',          x: 190, y: 155 },  // 6
  { icon: 'pipedrive',       x: 290, y: 145 },  // 7
  { icon: 'stripe',          x: 285, y: 265 },  // 8
  { icon: 'hubspot',         x: 145, y: 310 },  // 9
  { icon: 'n8n',             x: 200, y: 240 },  // 10
  { icon: 'google-calendar', x: 105, y: 115 },  // 11
  { icon: 'telegram',        x: 220, y: 340 },  // 12
  { icon: 'airtable',        x: 60,  y: 290 },  // 13
]

// Mobile: 10 icons (drop inner ring), pulled slightly inward
const MOBILE_NODES: IconNode[] = [
  { icon: 'whatsapp',        x: 70,  y: 85  },  // 0
  { icon: 'gmail',           x: 195, y: 50  },  // 1
  { icon: 'shopify',         x: 320, y: 60  },  // 2
  { icon: 'salesforce',      x: 340, y: 185 },  // 3
  { icon: 'slack',           x: 325, y: 310 },  // 4
  { icon: 'google-sheets',   x: 90,  y: 195 },  // 5
  { icon: 'notion',          x: 200, y: 160 },  // 6
  { icon: 'pipedrive',       x: 285, y: 150 },  // 7
  { icon: 'stripe',          x: 275, y: 260 },  // 8
  { icon: 'hubspot',         x: 150, y: 305 },  // 9
]

// Pre-defined chain sequences (desktop) — verified: no line crossings
const DESKTOP_CHAINS: number[][] = [
  [0, 11, 6, 7],       // whatsapp -> calendar -> notion -> pipedrive
  [2, 3, 8, 4],        // shopify -> salesforce -> stripe -> slack
  [5, 13, 9, 12],      // sheets -> airtable -> hubspot -> telegram
  [1, 6, 10, 9],       // gmail -> notion -> n8n -> hubspot
  [11, 5, 10, 8],      // calendar -> sheets -> n8n -> stripe
  [0, 5, 9, 12, 4],   // whatsapp -> sheets -> hubspot -> telegram -> slack
]

// Pre-defined chain sequences (mobile) — indices 0-9 only
const MOBILE_CHAINS: number[][] = [
  [0, 5, 6, 7],        // whatsapp -> sheets -> notion -> pipedrive
  [2, 3, 8, 4],        // shopify -> salesforce -> stripe -> slack
  [1, 6, 8, 4],        // gmail -> notion -> stripe -> slack
  [5, 9, 8],           // sheets -> hubspot -> stripe
  [0, 6, 7, 3],        // whatsapp -> notion -> pipedrive -> salesforce
]

// --- Chain animation state machine ---

type ChainPhase = 'idle' | 'drawing' | 'holding' | 'fading'

interface ChainState {
  phase: ChainPhase
  phaseStart: number
  idleDuration: number
  chainIndices: number[]
  iconProgress: number[]
  pathOpacity: number
  drawProgress: number
}

export default function HeroConstellation() {
  const svgRef = useRef<SVGSVGElement>(null)
  const timeRef = useRef(0)

  // Refs for each icon group (<g>), background rect, and image (<image>)
  const groupRefs = useRef<(SVGGElement | null)[]>([])
  const bgRefs = useRef<(SVGRectElement | null)[]>([])
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
  })

  // Tracks which pre-defined chain to use next (cycling)
  const chainIndexRef = useRef(0)

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

  // Reset chain state when switching between mobile/desktop
  useEffect(() => {
    chainIndexRef.current = 0
    const cs = chainRef.current
    cs.phase = 'idle'
    cs.phaseStart = timeRef.current
    cs.idleDuration = CHAIN_IDLE_MIN
    cs.chainIndices = []
    cs.iconProgress = []
    cs.drawProgress = 0
    cs.pathOpacity = 0
  }, [isMobile])

  const nodes = isMobile ? MOBILE_NODES : DESKTOP_NODES
  const chains = isMobile ? MOBILE_CHAINS : DESKTOP_CHAINS
  const nodeCount = nodes.length

  // Main animation loop (chain state machine + icon appearance only — no position updates)
  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion) return
    if (!svgRef.current) return

    const dt = Math.min(delta / 1000, 0.1)
    timeRef.current += dt
    const t = timeRef.current

    // --- Chain animation state machine ---
    const cs = chainRef.current
    const elapsed = t - cs.phaseStart

    switch (cs.phase) {
      case 'idle': {
        if (elapsed >= cs.idleDuration) {
          // Pick next pre-defined chain (cycling)
          const chainSequence = chains[chainIndexRef.current % chains.length]
          chainIndexRef.current++

          cs.phase = 'drawing'
          cs.phaseStart = t
          cs.chainIndices = chainSequence
          cs.iconProgress = new Array(chainSequence.length).fill(0)
          cs.drawProgress = 0
          cs.pathOpacity = 0.5
        }

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

        for (let i = 0; i < cs.chainIndices.length; i++) {
          if (i === 0) {
            cs.iconProgress[i] = Math.min(1, elapsed / FIRST_ICON_FADE_DURATION)
          } else {
            const segmentProgress = cs.drawProgress - (i - 1)
            cs.iconProgress[i] = Math.max(0, Math.min(1, segmentProgress))
          }
        }

        updateChainPath(cs, nodes)

        if (progress >= 1) {
          cs.phase = 'holding'
          cs.phaseStart = t
          cs.iconProgress.fill(1)
        }
        break
      }

      case 'holding': {
        updateChainPath(cs, nodes)

        if (elapsed >= CHAIN_HOLD_DURATION) {
          cs.phase = 'fading'
          cs.phaseStart = t
        }
        break
      }

      case 'fading': {
        const fadeProgress = Math.min(elapsed / CHAIN_FADE_DURATION, 1)
        const fadeMultiplier = 1 - fadeProgress * fadeProgress

        cs.pathOpacity = 0.5 * fadeMultiplier

        for (let i = 0; i < cs.iconProgress.length; i++) {
          cs.iconProgress[i] = fadeMultiplier
        }

        updateChainPath(cs, nodes)

        if (fadeProgress >= 1) {
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

      const size = ICON_INACTIVE_SIZE + (ICON_ACTIVE_SIZE - ICON_INACTIVE_SIZE) * activation
      const halfSize = size / 2

      const bg = bgRefs.current[i]
      if (bg) {
        bg.setAttribute('width', String(size + 4))
        bg.setAttribute('height', String(size + 4))
        bg.setAttribute('x', String(-(size + 4) / 2))
        bg.setAttribute('y', String(-(size + 4) / 2))
      }

      img.setAttribute('width', String(size))
      img.setAttribute('height', String(size))
      img.setAttribute('x', String(-halfSize))
      img.setAttribute('y', String(-halfSize))

      const opacity = ICON_INACTIVE_OPACITY + (ICON_ACTIVE_OPACITY - ICON_INACTIVE_OPACITY) * activation
      img.setAttribute('opacity', String(opacity))

      if (activation > 0.5) {
        img.removeAttribute('filter')
      } else {
        img.setAttribute('filter', 'url(#icon-inactive)')
      }
    }
  })

  // Helper: build/update the chain connector path
  function updateChainPath(cs: ChainState, nodeList: IconNode[]) {
    const pathEl = chainPathRef.current
    if (!pathEl || cs.chainIndices.length < 2) return

    const points = cs.chainIndices.map((idx) => nodeList[idx]).filter(Boolean)
    if (points.length < 2) return

    let d = `M ${points[0].x},${points[0].y}`
    for (let i = 1; i < points.length; i++) {
      d += ` L ${points[i].x},${points[i].y}`
    }

    pathEl.setAttribute('d', d)
    pathEl.setAttribute('opacity', String(cs.pathOpacity))

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

        {/* Icon nodes — static positions */}
        {nodes.map((node, i) => {
          const size = ICON_INACTIVE_SIZE
          const halfSize = size / 2

          return (
            <g
              key={node.icon}
              ref={(el) => { groupRefs.current[i] = el }}
              transform={`translate(${node.x}, ${node.y})`}
            >
              <rect
                ref={(el) => { bgRefs.current[i] = el }}
                width={size + 4}
                height={size + 4}
                x={-(size + 4) / 2}
                y={-(size + 4) / 2}
                rx={4}
                fill="#FFFFFF"
              />
              <image
                ref={(el) => { imageRefs.current[i] = el }}
                href={`/software-company-logos/${node.icon}.svg`}
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
