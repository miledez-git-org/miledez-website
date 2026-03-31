import { cn } from '@/lib/utils'

/**
 * MetricCard Component
 *
 * Animated card for dashboard KPIs with micro-visualizations.
 *
 * @example
 * <MetricCard
 *   title="Active Workflows"
 *   label="Last 30 days"
 *   value="847"
 *   visual={<SparklineChart data={data} />}
 *   description="Running smoothly"
 *   trend={{ value: 12.5, direction: 'up' }}
 * />
 */

export type MetricCardVariant = 'default' | 'brand' | 'success' | 'slate'

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card title */
  title: string
  /** Secondary label */
  label?: string
  /** Main metric value */
  value: string
  /** Value color variant */
  variant?: MetricCardVariant
  /** Visual element (sparkline, progress ring, etc.) */
  visual?: React.ReactNode
  /** Description text */
  description?: string
  /** Trend indicator */
  trend?: {
    value: number
    direction: 'up' | 'down'
  }
  /** Dropdown/selector element */
  dropdown?: React.ReactNode
}

const valueVariantClasses: Record<MetricCardVariant, string> = {
  default: 'text-neutral-950',
  brand: 'text-brand-secondary',
  success: 'text-semantic-success',
  slate: 'text-accent-slate',
}

export function MetricCard({
  title,
  label,
  value,
  variant = 'default',
  visual,
  description,
  trend,
  dropdown,
  className,
  ...props
}: MetricCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl p-6 shadow-card',
        'transition-all duration-base ease-spring',
        'hover:shadow-card-hover hover:-translate-y-0.5',
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-sm font-medium text-neutral-900">{title}</h3>
        {dropdown && (
          <div className="text-xs text-neutral-500 flex items-center gap-1 cursor-pointer">
            {dropdown}
          </div>
        )}
      </div>

      {/* Label */}
      {label && (
        <p className="text-xs text-neutral-400 mb-3">{label}</p>
      )}

      {/* Value */}
      <p
        className={cn(
          'text-4xl font-bold leading-none mb-4',
          valueVariantClasses[variant]
        )}
      >
        {value}
      </p>

      {/* Visual */}
      {visual && (
        <div className="h-12 flex items-end mb-4">{visual}</div>
      )}

      {/* Description & Trend */}
      <div className="flex items-center gap-2">
        {description && (
          <p className="text-xs text-neutral-500 leading-relaxed">
            {description}
          </p>
        )}
        {trend && (
          <span
            className={cn(
              'text-xs font-medium inline-flex items-center gap-1',
              trend.direction === 'up' ? 'text-semantic-success' : 'text-semantic-error'
            )}
          >
            {trend.direction === 'up' ? (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            ) : (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            )}
            {trend.value}%
          </span>
        )}
      </div>
    </div>
  )
}

export default MetricCard
