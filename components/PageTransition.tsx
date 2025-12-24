'use client'

import { motion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -8,
  },
}

// No animation variants for reduced motion or initial SSR
const noAnimationVariants = {
  initial: {
    opacity: 1,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 1,
    y: 0,
  },
}

const pageTransition = {
  type: 'tween' as const,
  ease: [0.25, 0.1, 0.25, 1] as const, // Smooth ease
  duration: 0.35,
}

const noTransition = {
  duration: 0,
}

export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Use appropriate variants based on motion preference
  // Always render motion.div to avoid hydration mismatch between server/client
  const shouldAnimate = isMounted && !prefersReducedMotion
  const variants = shouldAnimate ? pageVariants : noAnimationVariants
  const transition = shouldAnimate ? pageTransition : noTransition

  return (
    <motion.div
      initial={isMounted ? 'initial' : false}
      animate="animate"
      exit="exit"
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Hook for programmatic page transitions
export function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false)

  const startTransition = () => setIsTransitioning(true)
  const endTransition = () => setIsTransitioning(false)

  return {
    isTransitioning,
    startTransition,
    endTransition,
  }
}
