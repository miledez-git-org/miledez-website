import { cn } from '@/lib/utils'

/**
 * Timeline Component
 *
 * Vertical timeline with connected items.
 * Reference: .claude/skills/frontend-design/SKILL.md
 *
 * @example
 * <Timeline>
 *   <TimelineItem
 *     title="Project Started"
 *     description="Initial planning phase began"
 *   />
 *   <TimelineItem
 *     title="Development"
 *     description="Building core features"
 *     variant="brand"
 *   />
 * </Timeline>
 */

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Timeline({ className, children, ...props }: TimelineProps) {
  return (
    <div
      className={cn('flex flex-col', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export type TimelineItemVariant = 'default' | 'brand'

export interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Item title */
  title: string
  /** Item description */
  description?: string
  /** Dot color variant */
  variant?: TimelineItemVariant
  /** Custom content (replaces description) */
  children?: React.ReactNode
}

const dotVariantClasses: Record<TimelineItemVariant, string> = {
  default: 'bg-accent-slate',
  brand: 'bg-brand-primary',
}

export function TimelineItem({
  title,
  description,
  variant = 'default',
  className,
  children,
  ...props
}: TimelineItemProps) {
  return (
    <div
      className={cn('flex gap-4 relative', className)}
      {...props}
    >
      {/* Marker column */}
      <div className="flex flex-col items-center">
        {/* Dot - aligned with title baseline */}
        <div
          className={cn(
            'w-3 h-3 rounded-full flex-shrink-0 mt-1.5',
            dotVariantClasses[variant]
          )}
        />
        {/* Line */}
        <div className="w-0.5 flex-1 bg-neutral-200 my-2 min-h-[16px] last:hidden" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 last:pb-0">
        <h3 className="font-semibold text-neutral-900 mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-neutral-600">{description}</p>
        )}
        {children}
      </div>
    </div>
  )
}

export default Timeline
