'use client'

import { cn } from '@/lib/utils'

/**
 * Toast Component
 *
 * Matches UI Kit toast specifications.
 *
 * @example
 * <Toast variant="success" title="Saved" message="Your changes have been saved." />
 * <Toast variant="error" message="Failed to save changes." onClose={handleClose} />
 */

export type ToastVariant = 'default' | 'success' | 'error' | 'info'

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Toast type */
  variant?: ToastVariant
  /** Toast title */
  title?: string
  /** Toast message */
  message?: string
  /** Icon to display */
  icon?: React.ReactNode
  /** Close button callback */
  onClose?: () => void
  /** Action button */
  action?: {
    label: string
    onClick: () => void
  }
}

const defaultIcons: Record<ToastVariant, React.ReactNode> = {
  default: null,
  success: (
    <svg className="w-5 h-5 text-semantic-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  error: (
    <svg className="w-5 h-5 text-semantic-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  info: (
    <svg className="w-5 h-5 text-semantic-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

export function Toast({
  variant = 'default',
  title,
  message,
  icon,
  onClose,
  action,
  className,
  ...props
}: ToastProps) {
  const displayIcon = icon ?? defaultIcons[variant]

  return (
    <div
      role="alert"
      className={cn(
        'flex items-start gap-3 p-4',
        'bg-white rounded-lg shadow-lg',
        'min-w-[320px] max-w-[400px]',
        className
      )}
      {...props}
    >
      {displayIcon && (
        <span className="flex-shrink-0 mt-0.5">{displayIcon}</span>
      )}
      <div className="flex-1 min-w-0">
        {title && (
          <p className="text-sm font-medium text-neutral-900 mb-1">{title}</p>
        )}
        {message && (
          <p className="text-sm text-neutral-600">{message}</p>
        )}
      </div>
      {action && (
        <button
          onClick={action.onClick}
          className="text-sm font-medium text-accent-slate hover:text-accent-slate-light flex-shrink-0"
        >
          {action.label}
        </button>
      )}
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 w-5 h-5 text-neutral-400 hover:text-neutral-600"
          aria-label="Close"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}

export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export interface ToastContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Position of the toast container */
  position?: ToastPosition
}

const positionClasses: Record<ToastPosition, string> = {
  'top-right': 'top-6 right-6',
  'top-left': 'top-6 left-6',
  'bottom-right': 'bottom-6 right-6',
  'bottom-left': 'bottom-6 left-6',
}

export function ToastContainer({
  position = 'top-right',
  className,
  children,
  ...props
}: ToastContainerProps) {
  return (
    <div
      className={cn(
        'fixed z-[1100] flex flex-col gap-3 pointer-events-none',
        '[&>*]:pointer-events-auto',
        positionClasses[position],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Toast
