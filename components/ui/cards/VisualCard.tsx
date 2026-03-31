import { cn } from '@/lib/utils'

/**
 * VisualCard Component
 *
 * Card with large visual area (dashed border style) for showcasing
 * icons, illustrations, or previews.
 *
 * @example
 * <VisualCard
 *   visual={<WorkflowIcon className="w-16 h-16" />}
 *   title="Automated Reports"
 *   description="Generate and send reports automatically."
 * />
 */

export type VisualCardVariant = 'default' | 'brand' | 'success'

export interface VisualCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual content (icon, image, or illustration) */
  visual: React.ReactNode
  /** Card title */
  title: string
  /** Card description */
  description: string
  /** Visual area color variant */
  variant?: VisualCardVariant
}

const visualVariantClasses: Record<VisualCardVariant, string> = {
  default: 'text-accent-slate',
  brand: 'text-brand-secondary',
  success: 'text-semantic-success',
}

export function VisualCard({
  visual,
  title,
  description,
  variant = 'default',
  className,
  ...props
}: VisualCardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-dashed border-neutral-300 rounded-xl overflow-hidden',
        'transition-all duration-base',
        'hover:border-neutral-400 hover:shadow-card-hover',
        className
      )}
      {...props}
    >
      {/* Visual Area */}
      <div
        className={cn(
          'h-40 flex items-center justify-center',
          'bg-neutral-50 border-b border-dashed border-neutral-300',
          'p-6',
          visualVariantClasses[variant]
        )}
      >
        {visual}
      </div>
      {/* Content */}
      <div className="p-5 px-6">
        <h3 className="text-base font-semibold text-neutral-900 mb-2">
          {title}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default VisualCard
