'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Input Component
 *
 * Matches UI Kit input specifications exactly.
 *
 * @example
 * <Input placeholder="Email" type="email" />
 * <Input error="Invalid email" />
 */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Error message (also applies error styling) */
  error?: string
  /** Left icon/element */
  leftElement?: React.ReactNode
  /** Right icon/element */
  rightElement?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, leftElement, rightElement, className, ...props }, ref) => {
    const hasError = !!error

    return (
      <div className="relative">
        {/* Left element */}
        {leftElement && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
            {leftElement}
          </div>
        )}

        <input
          ref={ref}
          className={cn(
            // Base styles from design-tokens.json
            'h-11 w-full px-4 text-base',
            'bg-white rounded-md',
            'border transition-all duration-fast ease-smooth',
            // Default border
            'border-neutral-300',
            // Hover state
            'hover:border-neutral-400',
            // Focus state
            'focus:outline-none focus:border-accent-slate focus:ring-2 focus:ring-accent-slate-subtle',
            // Error state
            hasError && 'border-semantic-error focus:border-semantic-error focus:ring-semantic-error-light',
            // Placeholder
            'placeholder:text-neutral-400',
            // Disabled
            'disabled:bg-neutral-50 disabled:text-neutral-400 disabled:cursor-not-allowed',
            // Padding adjustments for icons
            leftElement && 'pl-10',
            rightElement && 'pr-10',
            className
          )}
          {...props}
        />

        {/* Right element */}
        {rightElement && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
            {rightElement}
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
