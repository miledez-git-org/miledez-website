'use client'

import { cn } from '@/lib/utils'

/**
 * Sidebar Component
 *
 * Collapsible sidebar navigation.
 *
 * @example
 * <Sidebar collapsed={isCollapsed}>
 *   <SidebarHeader>Logo</SidebarHeader>
 *   <SidebarNav>
 *     <SidebarSection title="Main">
 *       <SidebarLink href="/" icon={<HomeIcon />} active>Home</SidebarLink>
 *       <SidebarLink href="/settings" icon={<SettingsIcon />}>Settings</SidebarLink>
 *     </SidebarSection>
 *   </SidebarNav>
 *   <SidebarFooter>User info</SidebarFooter>
 * </Sidebar>
 */

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  /** Whether sidebar is collapsed */
  collapsed?: boolean
}

export function Sidebar({
  collapsed = false,
  className,
  children,
  ...props
}: SidebarProps) {
  return (
    <aside
      className={cn(
        'flex flex-col h-full',
        'bg-white border-r border-neutral-200',
        'transition-all duration-base',
        collapsed ? 'w-16' : 'w-[260px]',
        className
      )}
      {...props}
    >
      {children}
    </aside>
  )
}

export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarHeader({ className, children, ...props }: SidebarHeaderProps) {
  return (
    <div
      className={cn(
        'px-4 py-5 border-b border-neutral-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {}

export function SidebarNav({ className, children, ...props }: SidebarNavProps) {
  return (
    <nav
      className={cn('flex-1 p-4 overflow-x-hidden', className)}
      {...props}
    >
      {children}
    </nav>
  )
}

export interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Section title */
  title?: string
}

export function SidebarSection({
  title,
  className,
  children,
  ...props
}: SidebarSectionProps) {
  return (
    <div className={cn('mb-6', className)} {...props}>
      {title && (
        <h3 className="px-3 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider whitespace-nowrap">
          {title}
        </h3>
      )}
      <div className="space-y-1">{children}</div>
    </div>
  )
}

export interface SidebarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Icon element */
  icon?: React.ReactNode
  /** Whether this link is active */
  active?: boolean
}

export function SidebarLink({
  icon,
  active = false,
  className,
  children,
  ...props
}: SidebarLinkProps) {
  return (
    <a
      className={cn(
        'flex items-center gap-3 p-3',
        'text-sm rounded-md',
        'transition-all duration-fast whitespace-nowrap',
        active
          ? 'bg-accent-slate-subtle text-accent-slate font-medium'
          : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900',
        className
      )}
      {...props}
    >
      {icon && (
        <span className="w-5 h-5 flex-shrink-0">{icon}</span>
      )}
      <span className="overflow-hidden text-ellipsis">{children}</span>
    </a>
  )
}

export interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarFooter({ className, children, ...props }: SidebarFooterProps) {
  return (
    <div
      className={cn(
        'p-4 border-t border-neutral-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Sidebar
