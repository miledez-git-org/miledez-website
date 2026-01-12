import { cn } from '@/lib/utils'

/**
 * Alert Component
 *
 * Matches UI Kit alert specifications.
 * Reference: .claude/skills/frontend-design/SKILL.md
 *
 * @example
 * <Alert variant="success" title="Success!" message="Your changes have been saved." />
 * <Alert variant="error" message="Something went wrong." />
 */

export type AlertVariant = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Alert type */
  variant?: AlertVariant
  /** Alert title */
  title?: string
  /** Alert message */
  message?: string
  /** Icon to display */
  icon?: React.ReactNode
  /** Children content (alternative to message prop) */
  children?: React.ReactNode
}

const variantClasses: Record<AlertVariant, string> = {
  info: 'bg-semantic-info-light text-semantic-info',
  success: 'bg-semantic-success-light text-semantic-success',
  warning: 'bg-semantic-warning-light text-semantic-warning',
  error: 'bg-semantic-error-light text-semantic-error',
}

const defaultIcons: Record<AlertVariant, React.ReactNode> = {
  info: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  success: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  warning: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  error: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

export function Alert({
  variant = 'info',
  title,
  message,
  icon,
  children,
  className,
  ...props
}: AlertProps) {
  const displayIcon = icon ?? defaultIcons[variant]

  return (
    <div
      role="alert"
      className={cn(
        'flex gap-3 p-4 rounded-md',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {displayIcon && (
        <span className="flex-shrink-0">{displayIcon}</span>
      )}
      <div className="flex-1">
        {title && (
          <p className="font-semibold mb-1">{title}</p>
        )}
        {(message || children) && (
          <p className="text-sm">{message || children}</p>
        )}
      </div>
    </div>
  )
}

export default Alert
