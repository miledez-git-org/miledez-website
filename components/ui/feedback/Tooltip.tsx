'use client'

import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

/**
 * Tooltip Component
 *
 * Matches UI Kit tooltip specifications.
 * Reference: .claude/skills/frontend-design/SKILL.md
 *
 * @example
 * <Tooltip content="This is a tooltip">
 *   <Button>Hover me</Button>
 * </Tooltip>
 */

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  /** Tooltip content */
  content: React.ReactNode
  /** Position of tooltip relative to trigger */
  position?: TooltipPosition
  /** Delay before showing tooltip (ms) */
  delay?: number
  /** Children element that triggers tooltip */
  children: React.ReactElement
}

const positionClasses: Record<TooltipPosition, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
}

const arrowClasses: Record<TooltipPosition, string> = {
  top: 'top-full left-1/2 -translate-x-1/2 border-t-neutral-900 border-x-transparent border-b-transparent',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-neutral-900 border-x-transparent border-t-transparent',
  left: 'left-full top-1/2 -translate-y-1/2 border-l-neutral-900 border-y-transparent border-r-transparent',
  right: 'right-full top-1/2 -translate-y-1/2 border-r-neutral-900 border-y-transparent border-l-transparent',
}

export function Tooltip({
  content,
  position = 'top',
  delay = 0,
  children,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const showTooltip = () => {
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => setIsVisible(true), delay)
    } else {
      setIsVisible(true)
    }
  }

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsVisible(false)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      <div
        role="tooltip"
        className={cn(
          'absolute z-[1000]',
          'px-3 py-2',
          'bg-neutral-900 text-white',
          'text-xs font-medium',
          'rounded-md',
          'whitespace-nowrap',
          'transition-opacity duration-fast',
          positionClasses[position],
          isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        {content}
        {/* Arrow */}
        <span
          className={cn(
            'absolute w-0 h-0 border-[5px]',
            arrowClasses[position]
          )}
        />
      </div>
    </div>
  )
}

export default Tooltip
