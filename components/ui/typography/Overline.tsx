import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Overline Component
 *
 * Small uppercase text for labels, categories, and section markers.
 * Reference: global-resources/brand-assets/ui-kit/ui-kit.html
 *
 * @example
 * <Overline>Nossos Serviços</Overline>
 * <Overline accent>Destaque</Overline>
 */

export interface OverlineProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Apply brand primary color */
  accent?: boolean
  /** Render as different element */
  as?: 'span' | 'p' | 'div' | 'label'
}

export const Overline = forwardRef<HTMLSpanElement, OverlineProps>(
  ({ accent = false, as = 'span', className, children, ...props }, ref) => {
    const Component = as

    return (
      <Component
        ref={ref as any}
        className={cn(
          'text-xs font-semibold uppercase tracking-widest text-neutral-500',
          accent && 'text-brand-primary',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Overline.displayName = 'Overline'

export default Overline
