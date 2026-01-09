'use client'

import { useEffect, useState } from 'react'
import { useScroll, useTransform, MotionValue } from 'framer-motion'

interface UseParallaxOptions {
  /** Speed multiplier (negative = opposite direction) */
  speed?: number
  /** Offset range in pixels [start, end] */
  range?: [number, number]
  /** Whether parallax is enabled */
  enabled?: boolean
}

interface UseParallaxReturn {
  /** Y offset motion value */
  y: MotionValue<number>
  /** X offset motion value (for horizontal parallax) */
  x: MotionValue<number>
  /** Whether parallax is active */
  isActive: boolean
}

/**
 * Custom hook for parallax scroll effects
 *
 * @param options - Parallax configuration options
 * @returns Motion values for parallax transforms
 *
 * @example
 * ```tsx
 * const { y } = useParallax({ speed: 0.2 })
 *
 * return (
 *   <motion.div style={{ y }}>
 *     Content with parallax
 *   </motion.div>
 * )
 * ```
 */
export function useParallax(options: UseParallaxOptions = {}): UseParallaxReturn {
  const { speed = 0.3, range = [-100, 100], enabled = true } = options
  const [isActive, setIsActive] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const { scrollY } = useScroll()

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Check if device supports hover (desktop)
  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover)').matches
    setIsActive(hasHover && enabled && !prefersReducedMotion)
  }, [enabled, prefersReducedMotion])

  // Calculate parallax offset based on scroll position
  const y = useTransform(
    scrollY,
    [0, typeof window !== 'undefined' ? window.innerHeight : 1000],
    isActive ? [range[0] * speed, range[1] * speed] : [0, 0]
  )

  const x = useTransform(
    scrollY,
    [0, typeof window !== 'undefined' ? window.innerHeight : 1000],
    isActive ? [range[0] * speed * 0.5, range[1] * speed * 0.5] : [0, 0]
  )

  return { y, x, isActive }
}

/**
 * Hook for mouse-based parallax (follows cursor)
 */
interface UseMouseParallaxOptions {
  /** Maximum movement in pixels */
  maxMovement?: number
  /** Whether effect is enabled */
  enabled?: boolean
}

interface UseMouseParallaxReturn {
  x: MotionValue<number>
  y: MotionValue<number>
  isActive: boolean
}

export function useMouseParallax(
  ref: React.RefObject<HTMLElement>,
  options: UseMouseParallaxOptions = {}
): UseMouseParallaxReturn {
  const { maxMovement = 20, enabled = true } = options
  const [isActive, setIsActive] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // We'll use state for x and y since we can't easily create MotionValues here
  // Instead, we'll apply transform directly in a useEffect

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover)').matches
    setIsActive(hasHover && enabled && !prefersReducedMotion)
  }, [enabled, prefersReducedMotion])

  useEffect(() => {
    if (!isActive || !ref.current) return

    const element = ref.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const x = ((e.clientX - centerX) / (rect.width / 2)) * maxMovement
      const y = ((e.clientY - centerY) / (rect.height / 2)) * maxMovement

      element.style.transform = `translate(${x}px, ${y}px)`
    }

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)'
      element.style.transition = 'transform 0.3s ease-out'
    }

    const handleMouseEnter = () => {
      element.style.transition = 'none'
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)
    element.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
      element.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isActive, maxMovement, ref])

  // Return dummy motion values since we're handling transform directly
  const dummyValue = { get: () => 0, set: () => {} } as unknown as MotionValue<number>
  return { x: dummyValue, y: dummyValue, isActive }
}

export default useParallax
