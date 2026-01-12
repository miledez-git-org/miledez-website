import { cn } from '@/lib/utils'

/**
 * ProcessCard Component
 *
 * Card for workflow steps with progress indicator.
 * Reference: global-resources/brand-assets/ui-kit/ui-kit.html (v3.1)
 *
 * @example
 * <ProcessCard
 *   title="Data Extraction"
 *   subtitle="Step 2 of 4"
 *   visual={<ProgressBar value={65} />}
 *   status="Processing 847 records..."
 *   active
 * />
 */

export interface ProcessCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Step title */
  title: string
  /** Step subtitle (e.g., "Step 2 of 4") */
  subtitle?: string
  /** Visual element (progress bar, ring, etc.) */
  visual?: React.ReactNode
  /** Status text */
  status?: string
  /** Whether this step is currently active */
  active?: boolean
}

export function ProcessCard({
  title,
  subtitle,
  visual,
  status,
  active = false,
  className,
  ...props
}: ProcessCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl p-5 border shadow-card',
        'transition-all duration-base ease-spring',
        active
          ? 'border-accent-slate shadow-card-hover'
          : 'border-neutral-200',
        className
      )}
      {...props}
    >
      <h3 className="text-base font-semibold text-neutral-900 mb-1">
        {title}
      </h3>
      {subtitle && (
        <p className="text-sm text-neutral-500 mb-4">{subtitle}</p>
      )}
      {visual && (
        <div className="mb-3">{visual}</div>
      )}
      {status && (
        <p className="text-sm text-neutral-600">{status}</p>
      )}
    </div>
  )
}

export default ProcessCard
