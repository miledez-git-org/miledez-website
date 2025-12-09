'use client'

interface AnimatedIconProps {
  isVisible: boolean
  className?: string
}

// Clock icon that "shrinks" when visible (represents time savings)
export function ClockShrinkIcon({ isVisible, className = '' }: AnimatedIconProps) {
  return (
    <svg
      className={`w-8 h-8 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      style={{
        transform: isVisible ? 'scale(1)' : 'scale(1.15)',
        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <circle cx="12" cy="12" r="9" />
      <path
        d="M12 7v5l3 3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 12,
          strokeDashoffset: isVisible ? 0 : 12,
          transition: 'stroke-dashoffset 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
        }}
      />
    </svg>
  )
}

// Checkmark icon that draws itself (represents zero errors)
export function DrawCheckIcon({ isVisible, className = '' }: AnimatedIconProps) {
  return (
    <svg
      className={`w-8 h-8 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      {/* Circle */}
      <circle
        cx="12"
        cy="12"
        r="9"
        style={{
          strokeDasharray: 57,
          strokeDashoffset: isVisible ? 0 : 57,
          transition: 'stroke-dashoffset 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      {/* Checkmark */}
      <path
        d="M8 12l2.5 2.5L16 9"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 14,
          strokeDashoffset: isVisible ? 0 : 14,
          transition: 'stroke-dashoffset 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
        }}
      />
    </svg>
  )
}

// Puzzle pieces that connect (represents system integration)
export function PuzzleConnectIcon({ isVisible, className = '' }: AnimatedIconProps) {
  return (
    <svg
      className={`w-8 h-8 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      {/* Left puzzle piece */}
      <g
        style={{
          transform: isVisible ? 'translateX(0)' : 'translateX(-3px)',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <path
          d="M4 6h4v2a2 2 0 104 0V6h4v4h-2a2 2 0 100 4h2v4H4V6z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      {/* Right puzzle piece indicator */}
      <g
        style={{
          transform: isVisible ? 'translateX(0)' : 'translateX(3px)',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <path
          d="M16 6h4v12h-4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="3 3"
        />
      </g>
    </svg>
  )
}

// Simple arrow icon for industry cards
export function ArrowRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`w-5 h-5 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        d="M5 12h14M12 5l7 7-7 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Connection line icon for process steps
export function ConnectionLineIcon({
  isVisible,
  className = '',
}: AnimatedIconProps) {
  return (
    <svg
      className={`w-full h-1 ${className}`}
      viewBox="0 0 100 4"
      fill="none"
      preserveAspectRatio="none"
    >
      <line
        x1="0"
        y1="2"
        x2="100"
        y2="2"
        stroke="currentColor"
        strokeWidth={1}
        style={{
          strokeDasharray: 100,
          strokeDashoffset: isVisible ? 0 : 100,
          transition: 'stroke-dashoffset 0.8s ease-out',
        }}
      />
    </svg>
  )
}

// ============================================
// BENEFITS SECTION ICONS (with hover animations)
// ============================================

interface BenefitIconProps {
  isHovered: boolean
  className?: string
}

// Users icon that floats up on hover (Benefit 1)
export function UsersFloatIcon({ isHovered, className = '' }: BenefitIconProps) {
  return (
    <svg
      className={`w-10 h-10 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      style={{
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.3s ease-out',
      }}
    >
      {/* Main person */}
      <circle cx="12" cy="7" r="3" />
      <path d="M5.5 21v-2a4 4 0 014-4h5a4 4 0 014 4v2" strokeLinecap="round" />
      {/* Second person (left) */}
      <circle cx="5" cy="9" r="2" />
      <path d="M2 21v-1a3 3 0 013-3" strokeLinecap="round" />
      {/* Third person (right) */}
      <circle cx="19" cy="9" r="2" />
      <path d="M22 21v-1a3 3 0 00-3-3" strokeLinecap="round" />
    </svg>
  )
}

// Clock icon that rotates on hover (Benefit 2)
export function ClockRotateIcon({ isHovered, className = '' }: BenefitIconProps) {
  return (
    <svg
      className={`w-10 h-10 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      style={{
        transform: isHovered ? 'rotate(15deg)' : 'rotate(0)',
        transition: 'transform 0.3s ease-out',
      }}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Shield with checkmark that pulses on hover (Benefit 3)
export function ShieldCheckIcon({ isHovered, className = '' }: BenefitIconProps) {
  return (
    <svg
      className={`w-10 h-10 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      style={{
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease-out',
      }}
    >
      <path
        d="M12 2l8 4v6c0 5.5-3.5 10-8 11-4.5-1-8-5.5-8-11V6l8-4z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Trending up arrow that moves up on hover (Benefit 4)
export function TrendingUpIcon({ isHovered, className = '' }: BenefitIconProps) {
  return (
    <svg
      className={`w-10 h-10 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      style={{
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.3s ease-out',
      }}
    >
      <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7h7v7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Calculator icon that pulses on hover (Benefit 5)
export function CalculatorPulseIcon({ isHovered, className = '' }: BenefitIconProps) {
  return (
    <svg
      className={`w-10 h-10 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      style={{
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease-out',
      }}
    >
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <path d="M8 6h8" strokeLinecap="round" />
      <path d="M8 10h8" strokeLinecap="round" />
      <path d="M8 14h2" strokeLinecap="round" />
      <path d="M14 14h2" strokeLinecap="round" />
      <path d="M8 18h2" strokeLinecap="round" />
      <path d="M14 18h2" strokeLinecap="round" />
    </svg>
  )
}
