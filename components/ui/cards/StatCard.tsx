import { cn } from '@/lib/utils'

/**
 * StatCard Component
 *
 * Card for displaying key statistics/metrics.
 * Reference: global-resources/brand-assets/ui-kit/ui-kit.html
 *
 * @example
 * <StatCard
 *   label="Total Revenue"
 *   value="R$ 125.400"
 *   change={{ value: 12.5, direction: 'up' }}
 * />
 */

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stat label */
  label: string
  /** Stat value (formatted) */
  value: string
  /** Change indicator */
  change?: {
    value: number
    direction: 'up' | 'down'
  }
  /** Visual element (sparkline, chart) */
  visual?: React.ReactNode
}

export function StatCard({
  label,
  value,
  change,
  visual,
  className,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(
        'p-6 bg-white border border-neutral-200 rounded-lg',
        className
      )}
      {...props}
    >
      <p className="text-sm text-neutral-500 mb-1">{label}</p>
      <p className="text-4xl font-bold text-neutral-950 leading-none mb-2">
        {value}
      </p>
      {change && (
        <p
          className={cn(
            'text-sm mt-2',
            change.direction === 'up' ? 'text-semantic-success' : 'text-semantic-error'
          )}
        >
          <span className="inline-flex items-center gap-1">
            {change.direction === 'up' ? (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            ) : (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            )}
            {change.value}%
          </span>
        </p>
      )}
      {visual && <div className="mt-3">{visual}</div>}
    </div>
  )
}

export default StatCard
