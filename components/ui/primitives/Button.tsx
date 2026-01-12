'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Button Component
 *
 * Matches UI Kit button specifications exactly.
 * Reference: global-resources/brand-assets/ui-kit/ui-kit.html
 *
 * @example
 * <Button variant="primary" size="lg">Contact Us</Button>
 * <Button variant="outline-brand" size="md">Learn More</Button>
 * <Button variant="ghost" size="sm" leftIcon={<Icon />}>Action</Button>
 */

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'
  | 'outline-brand'
  | 'ghost'
  | 'ghost-brand'

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant
  /** Size preset */
  size?: ButtonSize
  /** Loading state - shows spinner and disables button */
  loading?: boolean
  /** Icon to display before text */
  leftIcon?: React.ReactNode
  /** Icon to display after text */
  rightIcon?: React.ReactNode
  /** Full width button */
  fullWidth?: boolean
}

// Size classes mapped from design-tokens.json
const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs rounded-sm',      // 32px, 0.75rem padding
  md: 'h-10 px-5 text-sm rounded-md',     // 40px, 1.25rem padding
  lg: 'h-12 px-6 text-base rounded-md',   // 48px, 1.5rem padding
  xl: 'h-14 px-8 text-base rounded-md',   // 56px, 2rem padding
}

// Variant classes mapped from design-tokens.json
const variantClasses: Record<ButtonVariant, string> = {
  // Primary (burgundy) - use sparingly for main CTAs
  primary: [
    'bg-brand-primary text-white',
    'hover:bg-brand-primary-dark',
    'focus-visible:ring-brand-primary/50',
  ].join(' '),

  // Secondary (dark) - default for most buttons
  secondary: [
    'bg-neutral-900 text-white',
    'hover:bg-neutral-800',
    'focus-visible:ring-neutral-900/50',
  ].join(' '),

  // Tertiary (slate) - subtle actions
  tertiary: [
    'bg-accent-slate text-white',
    'hover:bg-accent-slate-light',
    'focus-visible:ring-accent-slate/50',
  ].join(' '),

  // Outline - bordered, transparent background
  outline: [
    'bg-transparent text-neutral-900 border border-neutral-300',
    'hover:bg-neutral-50 hover:border-neutral-400',
    'focus-visible:ring-neutral-300/50',
  ].join(' '),

  // Outline Brand - bordered with brand color
  'outline-brand': [
    'bg-transparent text-brand-primary border border-brand-primary',
    'hover:bg-brand-primary-subtle',
    'focus-visible:ring-brand-primary/50',
  ].join(' '),

  // Ghost - no background until hover
  ghost: [
    'bg-transparent text-neutral-700',
    'hover:bg-neutral-100',
    'focus-visible:ring-neutral-300/50',
  ].join(' '),

  // Ghost Brand - brand color, no background until hover
  'ghost-brand': [
    'bg-transparent text-brand-primary',
    'hover:bg-brand-primary-subtle',
    'focus-visible:ring-brand-primary/50',
  ].join(' '),
}

// Loading spinner component
function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('animate-spin', className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'secondary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center font-medium',
          'transition-all duration-fast ease-smooth',
          // Hover scale effect (from UI kit)
          'hover:scale-[1.02] active:scale-[0.98]',
          // Focus ring
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          // Size and variant
          sizeClasses[size],
          variantClasses[variant],
          // Full width
          fullWidth && 'w-full',
          // Disabled state
          isDisabled && 'opacity-50 cursor-not-allowed hover:scale-100 active:scale-100',
          // Custom classes
          className
        )}
        {...props}
      >
        {/* Left icon or loading spinner */}
        {loading ? (
          <Spinner className="w-4 h-4 mr-2" />
        ) : leftIcon ? (
          <span className="mr-2 -ml-0.5">{leftIcon}</span>
        ) : null}

        {/* Button text */}
        {children}

        {/* Right icon */}
        {rightIcon && !loading && (
          <span className="ml-2 -mr-0.5">{rightIcon}</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
