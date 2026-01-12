import { cn } from '@/lib/utils'

/**
 * Skeleton Component
 *
 * Matches UI Kit skeleton loading specifications.
 * Reference: global-resources/brand-assets/ui-kit/ui-kit.html
 *
 * @example
 * <Skeleton variant="text" />
 * <Skeleton variant="avatar" size="lg" />
 * <Skeleton variant="card" />
 */

export type SkeletonVariant =
  | 'text'
  | 'text-sm'
  | 'heading'
  | 'avatar'
  | 'avatar-lg'
  | 'button'
  | 'card'
  | 'image'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton shape variant */
  variant?: SkeletonVariant
  /** Custom width (for text variants) */
  width?: string | number
  /** Custom height */
  height?: string | number
}

const variantClasses: Record<SkeletonVariant, string> = {
  'text': 'h-4 w-full rounded-sm',
  'text-sm': 'h-3 w-4/5 rounded-sm',
  'heading': 'h-6 w-3/5 rounded-sm',
  'avatar': 'w-10 h-10 rounded-full',
  'avatar-lg': 'w-16 h-16 rounded-full',
  'button': 'h-10 w-[120px] rounded-md',
  'card': 'h-[200px] rounded-lg',
  'image': 'aspect-video rounded-lg',
}

export function Skeleton({
  variant = 'text',
  width,
  height,
  className,
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-neutral-200',
        variantClasses[variant],
        className
      )}
      style={{
        width: width,
        height: height,
        ...style,
      }}
      {...props}
    />
  )
}

// Compound component for common skeleton patterns
export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={i === lines - 1 ? 'w-4/5' : undefined}
        />
      ))}
    </div>
  )
}

export function SkeletonCard() {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6 space-y-4">
      <Skeleton variant="image" />
      <Skeleton variant="heading" />
      <SkeletonText lines={2} />
    </div>
  )
}

export default Skeleton
