import { cn } from '@/lib/utils'

/**
 * EmptyState Component
 *
 * Placeholder for empty/no-data states.
 * Reference: global-resources/brand-assets/ui-kit/ui-kit.html
 *
 * @example
 * <EmptyState
 *   icon={<InboxIcon />}
 *   title="No messages"
 *   description="You don't have any messages yet."
 *   action={<Button>Send a message</Button>}
 * />
 */

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon element */
  icon?: React.ReactNode
  /** Title text */
  title: string
  /** Description text */
  description?: string
  /** Action element (button, link, etc.) */
  action?: React.ReactNode
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'py-16 px-8 text-center',
        className
      )}
      {...props}
    >
      {icon && (
        <div className="w-20 h-20 mx-auto mb-6 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-400">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-neutral-500 max-w-[40ch] mx-auto mb-6">
          {description}
        </p>
      )}
      {action}
    </div>
  )
}

export default EmptyState
