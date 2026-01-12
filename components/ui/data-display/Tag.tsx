'use client'

import { cn } from '@/lib/utils'

/**
 * Tag Component
 *
 * Removable tag/chip element.
 * Reference: global-resources/brand-assets/ui-kit/ui-kit.html
 *
 * @example
 * <Tag>React</Tag>
 * <Tag onRemove={() => removeTag('react')}>React</Tag>
 */

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Callback when remove button is clicked */
  onRemove?: () => void
  /** Icon element */
  icon?: React.ReactNode
}

export function Tag({
  onRemove,
  icon,
  className,
  children,
  ...props
}: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1',
        'text-sm bg-neutral-100 text-neutral-700 rounded-md',
        className
      )}
      {...props}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="w-4 h-4 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Remove"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  )
}

export default Tag
