import { cn } from '@/lib/utils'

/**
 * FeatureCard Component
 *
 * Card for showcasing features with icon, title, and description.
 *
 * @example
 * <FeatureCard
 *   icon={<AutomationIcon />}
 *   title="Workflow Automation"
 *   description="Automate repetitive tasks and save hours every week."
 * />
 */

export type FeatureCardVariant = 'default' | 'brand'

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon element */
  icon?: React.ReactNode
  /** Feature title */
  title: string
  /** Feature description */
  description: string
  /** Icon background variant */
  variant?: FeatureCardVariant
}

export function FeatureCard({
  icon,
  title,
  description,
  variant = 'default',
  className,
  ...props
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'p-10 bg-white border border-neutral-200 rounded-lg',
        className
      )}
      {...props}
    >
      {icon && (
        <div
          className={cn(
            'w-12 h-12 flex items-center justify-center rounded-md mb-4',
            variant === 'brand'
              ? 'bg-brand-secondary-subtle text-brand-secondary'
              : 'bg-accent-slate-subtle text-accent-slate'
          )}
        >
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-neutral-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
