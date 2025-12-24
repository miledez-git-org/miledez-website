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

const pageTransition = {
  type: 'tween' as const,
  ease: [0.25, 0.1, 0.25, 1] as const, // Smooth ease
  duration: 0.35,
}

export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // If user prefers reduced motion, just render children without animation
  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
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
