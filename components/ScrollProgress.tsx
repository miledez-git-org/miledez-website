'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

interface ScrollProgressProps {
  /** Position of the progress bar */
  position?: 'top' | 'bottom'
  /** Height of the progress bar in pixels */
  height?: number
  /** Whether to show percentage text */
  showPercentage?: boolean
  /** Additional class name */
  className?: string
}

export default function ScrollProgress({
  position = 'top',
  height = 3,
  showPercentage = false,
  className = ''
}: ScrollProgressProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Get scroll progress
  const { scrollYProgress } = useScroll()

  // Smooth the progress value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Transform to percentage (0-100)
  const percentage = useTransform(smoothProgress, [0, 1], [0, 100])

  // Opacity transform for percentage indicator (must be called unconditionally)
  const percentageOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  // Check for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Show after scrolling past hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight * 0.5 // Show after 50% of viewport
      setIsVisible(scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const positionStyles = position === 'top'
    ? 'top-0 left-0 right-0'
    : 'bottom-0 left-0 right-0'

  // Hide visually but always render to avoid hydration mismatch
  const shouldShow = isVisible && !prefersReducedMotion

  return (
    <motion.div
      className={`fixed z-50 ${positionStyles} ${className}`}
      style={{ height, display: prefersReducedMotion ? 'none' : undefined }}
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldShow ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      aria-hidden="true"
    >
      {/* Background track */}
      <div className="absolute inset-0 bg-brand-border/30" />

      {/* Progress bar */}
      <motion.div
        className="absolute inset-y-0 left-0 bg-brand-primary origin-left"
        style={{
          scaleX: smoothProgress,
        }}
      />

      {/* Glow effect on the leading edge */}
      <motion.div
        className="absolute inset-y-0 w-16 bg-gradient-to-r from-brand-primary/50 to-transparent"
        style={{
          left: useTransform(smoothProgress, [0, 1], ['0%', 'calc(100% - 4rem)']),
          opacity: useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]),
        }}
      />

      {/* Optional percentage indicator */}
      {showPercentage && (
        <motion.div
          className="absolute right-4 -bottom-6 text-xs font-medium text-brand-muted"
          style={{
            opacity: percentageOpacity,
          }}
        >
          <motion.span>
            {percentage}
          </motion.span>
          <span>%</span>
        </motion.div>
      )}
    </motion.div>
  )
}
