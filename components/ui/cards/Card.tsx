import { cn } from '@/lib/utils'

/**
 * Card Component
 *
 * Base card with header, body, and footer sections.
 * Reference: .claude/skills/frontend-design/SKILL.md
 *
 * @example
 * <Card>
 *   <CardHeader>Title</CardHeader>
 *   <CardBody>Content</CardBody>
 *   <CardFooter>Actions</CardFooter>
 * </Card>
 */

export type CardVariant = 'default' | 'bordered' | 'elevated' | 'dark'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card visual variant */
  variant?: CardVariant
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-white',
  bordered: 'bg-white border border-neutral-200',
  elevated: 'bg-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-base',
  dark: 'bg-neutral-900 text-white',
}

export function Card({
  variant = 'bordered',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg overflow-hidden',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn(
        'px-6 py-5 border-b border-neutral-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardBody({ className, children, ...props }: CardBodyProps) {
  return (
    <div
      className={cn('p-8', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div
      className={cn(
        'px-6 py-4 border-t border-neutral-200 bg-neutral-50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
