'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

/**
 * NavLink Component
 *
 * Navigation link with active state styling.
 * Reference: global-resources/brand-assets/ui-kit/ui-kit.html
 *
 * @example
 * <NavLink href="/dashboard" active>Dashboard</NavLink>
 * <NavLink href="/settings" icon={<SettingsIcon />}>Settings</NavLink>
 */

export interface NavLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** Link destination */
  href: string
  /** Whether the link is currently active */
  active?: boolean
  /** Icon element */
  icon?: React.ReactNode
  /** Children content */
  children: React.ReactNode
}

export function NavLink({
  href,
  active = false,
  icon,
  children,
  className,
  ...props
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2 px-3 py-2',
        'text-sm font-medium rounded-md',
        'transition-all duration-fast',
        active
          ? 'text-accent-slate bg-accent-slate-subtle'
          : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100',
        className
      )}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </Link>
  )
}

export default NavLink
