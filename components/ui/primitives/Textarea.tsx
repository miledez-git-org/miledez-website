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
          'border-zinc-200',
          // Hover state
          'hover:border-zinc-300',
          // Focus state
          'focus:outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/20',
          // Error state
          hasError && 'bg-rose-50 border-rose-300 text-rose-900 focus:border-rose-500 focus:ring-rose-500/20',
          // Placeholder
          'placeholder:text-zinc-400',
          // Disabled
          'disabled:bg-zinc-50 disabled:text-zinc-400 disabled:cursor-not-allowed',
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
