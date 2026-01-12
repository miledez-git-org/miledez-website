import { cn } from '@/lib/utils'

/**
 * List Components
 *
 * Vertical list with items.
 * Reference: global-resources/brand-assets/ui-kit/ui-kit.html
 *
 * @example
 * <List>
 *   <ListItem
 *     avatar={<Avatar>JD</Avatar>}
 *     title="John Doe"
 *     description="Software Engineer"
 *     action={<Button size="sm">View</Button>}
 *   />
 * </List>
 */

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {}

export function List({ className, children, ...props }: ListProps) {
  return (
    <div
      className={cn('flex flex-col', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Avatar or icon element */
  avatar?: React.ReactNode
  /** Item title */
  title?: string
  /** Item description */
  description?: string
  /** Action element (button, link, etc.) */
  action?: React.ReactNode
}

export function ListItem({
  avatar,
  title,
  description,
  action,
  className,
  children,
  ...props
}: ListItemProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-4 p-4',
        'border-b border-neutral-100 last:border-b-0',
        className
      )}
      {...props}
    >
      {avatar}
      <div className="flex-1 min-w-0">
        {title && (
          <p className="font-medium text-neutral-900 truncate">{title}</p>
        )}
        {description && (
          <p className="text-sm text-neutral-500 truncate">{description}</p>
        )}
        {children}
      </div>
      {action}
    </div>
  )
}

export default List
