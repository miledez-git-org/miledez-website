import { cn } from '@/lib/utils'

/**
 * Progress Component
 *
 * Progress bar indicator.
 *
 * @example
 * <Progress value={65} />
 * <Progress value={80} variant="brand" />
 * <Progress value={100} variant="success" />
 */

export type ProgressVariant = 'default' | 'brand' | 'success'

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress value (0-100) */
  value: number
  /** Color variant */
  variant?: ProgressVariant
  /** Show percentage label */
  showLabel?: boolean
  /** Custom label */
  label?: string
}

const variantClasses: Record<ProgressVariant, string> = {
  default: 'bg-accent-slate',
  brand: 'bg-brand-secondary',
  success: 'bg-semantic-success',
}

export function Progress({
  value,
  variant = 'default',
  showLabel = false,
  label,
  className,
  ...props
}: ProgressProps) {
  const clampedValue = Math.min(100, Math.max(0, value))

  return (
    <div className={cn('w-full', className)} {...props}>
      {(showLabel || label) && (
        <div className="flex justify-between mb-1 text-sm">
          {label && <span className="text-neutral-700">{label}</span>}
          {showLabel && (
            <span className="text-neutral-500">{clampedValue}%</span>
          )}
        </div>
      )}
      <div
        className="h-2 bg-neutral-200 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={cn(
            'h-full rounded-full transition-all duration-slow',
            variantClasses[variant]
          )}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  )
}

export default Progress
