'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Checkbox Component
 *
 * Matches UI Kit checkbox specifications.
 * Reference: .claude/skills/frontend-design/SKILL.md
 *
 * @example
 * <Checkbox label="Accept terms and conditions" />
 * <Checkbox label="Subscribe to newsletter" checked />
 */

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text displayed next to checkbox */
  label?: string
  /** Additional description below label */
  description?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, className, id, ...props }, ref) => {
    const inputId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className={cn('flex items-start gap-3', className)}>
        <input
          ref={ref}
          type="checkbox"
          id={inputId}
          className={cn(
            'w-5 h-5 mt-0.5',
            'accent-accent-slate',
            'cursor-pointer',
            'rounded',
            'border-neutral-300',
            'focus:ring-2 focus:ring-accent-slate-subtle focus:ring-offset-0',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
          {...props}
        />
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <label
                htmlFor={inputId}
                className="text-sm font-medium text-neutral-800 cursor-pointer"
              >
                {label}
              </label>
            )}
            {description && (
              <span className="text-xs text-neutral-500 mt-0.5">{description}</span>
            )}
          </div>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
