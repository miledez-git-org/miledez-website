'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Radio Component
 *
 * Matches UI Kit radio specifications.
 *
 * @example
 * <Radio name="plan" value="basic" label="Basic Plan" />
 * <Radio name="plan" value="pro" label="Pro Plan" checked />
 */

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text displayed next to radio */
  label?: string
  /** Additional description below label */
  description?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, description, className, id, ...props }, ref) => {
    const inputId = id || `radio-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className={cn('flex items-start gap-3', className)}>
        <input
          ref={ref}
          type="radio"
          id={inputId}
          className={cn(
            'w-5 h-5 mt-0.5',
            'accent-accent-slate',
            'cursor-pointer',
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

Radio.displayName = 'Radio'

export default Radio
