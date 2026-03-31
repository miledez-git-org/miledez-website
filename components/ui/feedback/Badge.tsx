import { cn } from '@/lib/utils'

/**
 * Badge Component
 *
 * Matches UI Kit badge specifications exactly.
 *
 * @example
 * <Badge variant="success">Active</Badge>
 * <Badge variant="error">Failed</Badge>
 * <Badge variant="primary">Featured</Badge>
 */

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'slate'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color variant */
  variant?: BadgeVariant
  /** Pill shape (full rounded) */
  pill?: boolean
}

// Variant classes from design-tokens.json
const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-neutral-100 text-neutral-700',
  primary: 'bg-brand-secondary-subtle text-brand-secondary',
  slate: 'bg-accent-slate-subtle text-accent-slate',
  success: 'bg-semantic-success-light text-semantic-success',
  warning: 'bg-semantic-warning-light text-semantic-warning',
  error: 'bg-semantic-error-light text-semantic-error',
  info: 'bg-semantic-info-light text-semantic-info',
}

export function Badge({
  variant = 'default',
  pill = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        // Base styles from design-tokens.json
        'inline-flex items-center px-2 py-1 text-xs font-medium',
        // Border radius: sm (2px) or full for pill
        pill ? 'rounded-full' : 'rounded-sm',
        // Variant colors
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
