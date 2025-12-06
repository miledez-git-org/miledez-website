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
