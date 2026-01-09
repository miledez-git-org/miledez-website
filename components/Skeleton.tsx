'use client'

import { useEffect, useState } from 'react'

interface SkeletonProps {
  className?: string
  /** Width of the skeleton (can be Tailwind class or CSS value) */
  width?: string
  /** Height of the skeleton (can be Tailwind class or CSS value) */
  height?: string
  /** Whether to show rounded corners */
  rounded?: boolean | 'sm' | 'md' | 'lg' | 'full'
  /** Animation style */
  animation?: 'pulse' | 'shimmer' | 'none'
}

/**
 * Base skeleton component for loading states
 */
export function Skeleton({
  className = '',
  width,
  height,
  rounded = 'sm',
  animation = 'pulse'
}: SkeletonProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const roundedClass = rounded === true ? 'rounded' :
    rounded === 'sm' ? 'rounded-sm' :
    rounded === 'md' ? 'rounded-md' :
    rounded === 'lg' ? 'rounded-lg' :
    rounded === 'full' ? 'rounded-full' : ''

  const animationClass = prefersReducedMotion || animation === 'none'
    ? ''
    : animation === 'shimmer'
    ? 'skeleton-shimmer'
    : 'animate-pulse'

  const style: React.CSSProperties = {}
  if (width && !width.startsWith('w-')) style.width = width
  if (height && !height.startsWith('h-')) style.height = height

  const widthClass = width?.startsWith('w-') ? width : ''
  const heightClass = height?.startsWith('h-') ? height : ''

  return (
    <div
      className={`bg-gray-200 ${roundedClass} ${animationClass} ${widthClass} ${heightClass} ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
}

/**
 * Skeleton for text lines
 */
export function SkeletonText({
  lines = 1,
  className = '',
  lastLineWidth = '75%'
}: {
  lines?: number
  className?: string
  lastLineWidth?: string
}) {
  return (
    <div className={`space-y-2 ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height="h-4"
          width={i === lines - 1 && lines > 1 ? lastLineWidth : '100%'}
          rounded="sm"
        />
      ))}
    </div>
  )
}

/**
 * Skeleton for card components
 */
export function SkeletonCard({
  className = '',
  hasImage = false,
  imageHeight = 'h-40',
  lines = 3
}: {
  className?: string
  hasImage?: boolean
  imageHeight?: string
  lines?: number
}) {
  return (
    <div className={`border border-brand-border p-6 ${className}`} aria-hidden="true">
      {hasImage && (
        <Skeleton height={imageHeight} className="w-full mb-4" rounded="sm" />
      )}
      <Skeleton height="h-6" width="w-3/4" className="mb-3" rounded="sm" />
      <SkeletonText lines={lines} />
    </div>
  )
}

/**
 * Skeleton for workflow/process steps
 */
export function SkeletonWorkflow({
  steps = 4,
  className = ''
}: {
  steps?: number
  className?: string
}) {
  return (
    <div className={`space-y-4 ${className}`} aria-hidden="true">
      {Array.from({ length: steps }).map((_, i) => (
        <div key={i} className="flex items-start gap-4">
          {/* Step icon */}
          <Skeleton width="w-12" height="h-12" rounded="md" />
          {/* Step content */}
          <div className="flex-1">
            <Skeleton height="h-5" width="w-1/2" className="mb-2" rounded="sm" />
            <Skeleton height="h-4" width="w-full" rounded="sm" />
          </div>
        </div>
      ))}
    </div>
  )
}

/**
 * Skeleton for pricing cards
 */
export function SkeletonPricing({
  className = ''
}: {
  className?: string
}) {
  return (
    <div className={`border border-brand-border p-8 ${className}`} aria-hidden="true">
      {/* Badge */}
      <Skeleton height="h-6" width="w-24" className="mb-4" rounded="full" />
      {/* Title */}
      <Skeleton height="h-8" width="w-3/4" className="mb-2" rounded="sm" />
      {/* Price */}
      <Skeleton height="h-10" width="w-1/2" className="mb-6" rounded="sm" />
      {/* Features list */}
      <div className="space-y-3 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <Skeleton width="w-4" height="h-4" rounded="full" />
            <Skeleton height="h-4" width="w-full" rounded="sm" />
          </div>
        ))}
      </div>
      {/* CTA Button */}
      <Skeleton height="h-12" width="w-full" rounded="sm" />
    </div>
  )
}

/**
 * Skeleton for metrics/stats
 */
export function SkeletonMetric({
  className = ''
}: {
  className?: string
}) {
  return (
    <div className={`text-center ${className}`} aria-hidden="true">
      <Skeleton height="h-12" width="w-20" className="mx-auto mb-2" rounded="sm" />
      <Skeleton height="h-4" width="w-32" className="mx-auto" rounded="sm" />
    </div>
  )
}

/**
 * Skeleton for hero section
 */
export function SkeletonHero({
  className = ''
}: {
  className?: string
}) {
  return (
    <div className={`max-w-3xl ${className}`} aria-hidden="true">
      {/* Main headline */}
      <Skeleton height="h-14" width="w-full" className="mb-4" rounded="sm" />
      <Skeleton height="h-14" width="w-3/4" className="mb-6" rounded="sm" />
      {/* Subheadline */}
      <Skeleton height="h-6" width="w-2/3" className="mb-10" rounded="sm" />
      {/* CTAs */}
      <div className="flex gap-4">
        <Skeleton height="h-14" width="w-40" rounded="sm" />
        <Skeleton height="h-12" width="w-36" rounded="sm" />
      </div>
    </div>
  )
}

/**
 * Full page loading skeleton
 */
export function SkeletonPage({
  className = ''
}: {
  className?: string
}) {
  return (
    <div className={`min-h-screen bg-white ${className}`} aria-hidden="true">
      {/* Header skeleton */}
      <div className="h-16 border-b border-brand-border px-6 flex items-center justify-between">
        <Skeleton width="w-32" height="h-8" rounded="sm" />
        <div className="flex gap-6">
          <Skeleton width="w-16" height="h-4" rounded="sm" />
          <Skeleton width="w-16" height="h-4" rounded="sm" />
          <Skeleton width="w-16" height="h-4" rounded="sm" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="py-32 px-6">
        <SkeletonHero className="mx-auto" />
      </div>

      {/* Section skeleton */}
      <div className="py-20 px-6 bg-bg-muted">
        <div className="max-w-4xl mx-auto">
          <Skeleton height="h-10" width="w-1/2" className="mx-auto mb-12" rounded="sm" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
