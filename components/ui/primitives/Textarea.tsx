'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Textarea Component
 *
 * Matches UI Kit textarea specifications.
 *
 * @example
 * <Textarea placeholder="Your message" rows={4} />
 */

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Error message (also applies error styling) */
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, className, ...props }, ref) => {
    const hasError = !!error

    return (
      <textarea
        ref={ref}
        className={cn(
          // Base styles
          'w-full px-4 py-3 text-base',
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
          // Resize
          'resize-y min-h-[100px]',
          className
        )}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
