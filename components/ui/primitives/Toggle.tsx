'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Toggle (Switch) Component
 *
 * Matches UI Kit toggle specifications.
 * Reference: .claude/skills/frontend-design/SKILL.md
 *
 * @example
 * <Toggle label="Enable notifications" />
 * <Toggle label="Dark mode" checked onChange={handleChange} />
 */

export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Whether the toggle is on */
  checked?: boolean
  /** Callback when toggle state changes */
  onChange?: (checked: boolean) => void
  /** Label text displayed next to toggle */
  label?: string
  /** Additional description below label */
  description?: string
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ checked = false, onChange, label, description, className, disabled, ...props }, ref) => {
    const handleClick = () => {
      if (!disabled && onChange) {
        onChange(!checked)
      }
    }

    return (
      <div className={cn('flex items-start gap-3', className)}>
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          onClick={handleClick}
          className={cn(
            'relative w-11 h-6 rounded-full',
            'transition-colors duration-fast ease-smooth',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-slate-subtle focus-visible:ring-offset-2',
            checked ? 'bg-accent-slate' : 'bg-neutral-300',
            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          )}
          {...props}
        >
          <span
            className={cn(
              'absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm',
              'transition-transform duration-fast ease-smooth',
              checked && 'translate-x-5'
            )}
          />
        </button>
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <span className="text-sm font-medium text-neutral-800">{label}</span>
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

Toggle.displayName = 'Toggle'

export default Toggle
