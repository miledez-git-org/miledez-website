import { cn } from '@/lib/utils'

/**
 * Avatar Component
 *
 * User avatar with initials or image.
 *
 * @example
 * <Avatar>JD</Avatar>
 * <Avatar size="lg" variant="brand">MS</Avatar>
 * <Avatar src="/avatar.jpg" alt="John Doe" />
 */

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type AvatarVariant = 'default' | 'brand'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Avatar size */
  size?: AvatarSize
  /** Color variant */
  variant?: AvatarVariant
  /** Image source (optional) */
  src?: string
  /** Alt text for image */
  alt?: string
  /** Initials or fallback content */
  children?: React.ReactNode
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'w-6 h-6 text-xs',
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
  xl: 'w-16 h-16 text-2xl',
}

const variantClasses: Record<AvatarVariant, string> = {
  default: 'bg-accent-slate text-white',
  brand: 'bg-brand-secondary text-white',
}

export function Avatar({
  size = 'md',
  variant = 'default',
  src,
  alt,
  children,
  className,
  ...props
}: AvatarProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full font-semibold flex-shrink-0',
        sizeClasses[size],
        !src && variantClasses[variant],
        className
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt || ''}
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        children
      )}
    </div>
  )
}

export default Avatar
