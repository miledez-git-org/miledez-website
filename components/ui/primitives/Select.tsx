'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Select Component
 *
 * Matches UI Kit select specifications.
 *
 * @example
 * <Select>
 *   <option value="">Choose...</option>
 *   <option value="1">Option 1</option>
 * </Select>
 */

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Error message (also applies error styling) */
  error?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, className, children, ...props }, ref) => {
    const hasError = !!error

    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            // Base styles from design-tokens.json
            'h-11 w-full px-4 pr-10 text-base',
            'bg-white rounded-md appearance-none',
            'border transition-all duration-fast ease-smooth',
            // Default border
            'border-zinc-200',
            // Hover state
            'hover:border-zinc-300',
            // Focus state
            'focus:outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/20',
            // Error state
            hasError && 'bg-rose-50 border-rose-300 text-rose-900 focus:border-rose-500 focus:ring-rose-500/20',
            // Disabled
            'disabled:bg-zinc-50 disabled:text-zinc-400 disabled:cursor-not-allowed',
            className
          )}
          {...props}
        >
          {children}
        </select>

        {/* Dropdown arrow */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
