import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Logo Component
 *
 * mil&dez brand logo with Manrope Light (300), letter-spacing: -0.03em
 * Reference: .claude/skills/frontend-design/SKILL.md
 *
 * @example
 * <Logo />
 * <Logo size="lg" />
 * <Logo variant="light" /> // For dark backgrounds
 */

export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type LogoVariant = 'default' | 'light'

export interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Logo size */
  size?: LogoSize
  /** Color variant - use 'light' on dark backgrounds */
  variant?: LogoVariant
  /** Render as span instead of link */
  asSpan?: boolean
}

const sizeClasses: Record<LogoSize, string> = {
  xs: 'text-[18px]',
  sm: 'text-[24px]',
  md: 'text-[32px]',
  lg: 'text-[48px]',
  xl: 'text-[72px]',
}

export const Logo = forwardRef<HTMLAnchorElement, LogoProps>(
  ({ size = 'md', variant = 'default', asSpan = false, className, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-baseline font-manrope font-light tracking-[-0.03em] no-underline',
      sizeClasses[size],
      variant === 'default' ? 'text-neutral-900' : 'text-white',
      className
    )

    const ampersandClasses = cn(
      variant === 'default' ? 'text-brand-primary' : 'text-brand-primary-light'
    )

    const content = (
      <>
        mil<span className={ampersandClasses}>&</span>dez
      </>
    )

    if (asSpan) {
      return (
        <span className={classes}>
          {content}
        </span>
      )
    }

    return (
      <a ref={ref} className={classes} {...props}>
        {content}
      </a>
    )
  }
)

Logo.displayName = 'Logo'

/**
 * Monogram Component
 *
 * Standalone ampersand icon for compact use
 *
 * @example
 * <Monogram />
 * <Monogram size="lg" boxed />
 * <Monogram boxed filled />
 */

export type MonogramSize = 'xs' | 'sm' | 'md' | 'lg'

export interface MonogramProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Monogram size */
  size?: MonogramSize
  /** Color variant */
  variant?: 'default' | 'light'
  /** Show in a box container */
  boxed?: boolean
  /** Fill the box (dark background) */
  filled?: boolean
}

const monogramSizeClasses: Record<MonogramSize, string> = {
  xs: 'text-[28px]',
  sm: 'text-[40px]',
  md: 'text-[56px]',
  lg: 'text-[80px]',
}

export function Monogram({
  size = 'md',
  variant = 'default',
  boxed = false,
  filled = false,
  className,
  ...props
}: MonogramProps) {
  const ampersand = (
    <span
      className={cn(
        'font-manrope font-light leading-none',
        monogramSizeClasses[size],
        filled
          ? 'text-brand-primary-light'
          : variant === 'default'
          ? 'text-brand-primary'
          : 'text-brand-primary-light'
      )}
    >
      &
    </span>
  )

  if (boxed) {
    return (
      <div
        className={cn(
          'w-20 h-20 flex items-center justify-center',
          filled
            ? 'bg-neutral-900'
            : 'border border-neutral-200',
          className
        )}
        {...props}
      >
        <span className={cn(
          'font-manrope font-light leading-none text-[48px]',
          filled ? 'text-brand-primary-light' : 'text-brand-primary'
        )}>
          &
        </span>
      </div>
    )
  }

  return (
    <span className={className} {...props}>
      {ampersand}
    </span>
  )
}

export default Logo
