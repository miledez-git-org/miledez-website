import { cn } from '@/lib/utils'
import Link from 'next/link'

/**
 * Breadcrumb Component
 *
 * Navigation breadcrumb trail.
 * Reference: global-resources/brand-assets/ui-kit/ui-kit.html
 *
 * @example
 * <Breadcrumb>
 *   <BreadcrumbItem href="/">Home</BreadcrumbItem>
 *   <BreadcrumbItem href="/products">Products</BreadcrumbItem>
 *   <BreadcrumbItem active>Product Name</BreadcrumbItem>
 * </Breadcrumb>
 */

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {}

export function Breadcrumb({ className, children, ...props }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className} {...props}>
      <ol className="flex items-center gap-2 text-sm">
        {children}
      </ol>
    </nav>
  )
}

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /** Link destination (omit for current page) */
  href?: string
  /** Whether this is the current/active item */
  active?: boolean
}

export function BreadcrumbItem({
  href,
  active = false,
  className,
  children,
  ...props
}: BreadcrumbItemProps) {
  return (
    <li
      className={cn('flex items-center gap-2', className)}
      {...props}
    >
      {href && !active ? (
        <Link
          href={href}
          className="text-neutral-500 hover:text-neutral-700 transition-colors"
        >
          {children}
        </Link>
      ) : (
        <span
          className={cn(
            active ? 'text-neutral-900 font-medium' : 'text-neutral-500'
          )}
          aria-current={active ? 'page' : undefined}
        >
          {children}
        </span>
      )}
      {!active && (
        <BreadcrumbSeparator />
      )}
    </li>
  )
}

export function BreadcrumbSeparator({ className }: { className?: string }) {
  return (
    <span
      className={cn('text-neutral-400', className)}
      aria-hidden="true"
    >
      /
    </span>
  )
}

export default Breadcrumb
