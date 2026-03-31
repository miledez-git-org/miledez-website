import { cn } from '@/lib/utils'

/**
 * Text Component
 *
 * Typography component for body text and captions.
 *
 * @example
 * <Text>Default body text</Text>
 * <Text variant="lg">Larger intro text</Text>
 * <Text variant="sm">Smaller supporting text</Text>
 * <Text variant="caption">Caption or metadata</Text>
 */

export type TextVariant = 'lg' | 'base' | 'sm' | 'caption'

export interface TextProps {
  /** Text size variant */
  variant?: TextVariant
  /** Apply brand primary color */
  accent?: boolean
  /** Muted/lighter text color */
  muted?: boolean
  /** Additional CSS classes */
  className?: string
  /** Content */
  children?: React.ReactNode
  /** HTML id attribute */
  id?: string
}

const variantStyles: Record<TextVariant, string> = {
  lg: 'text-lg font-normal leading-relaxed text-neutral-700',
  base: 'text-base font-normal leading-relaxed text-neutral-700',
  sm: 'text-sm font-normal leading-relaxed text-neutral-600',
  caption: 'text-xs font-normal leading-normal text-neutral-500',
}

export function Text({
  variant = 'base',
  accent = false,
  muted = false,
  className,
  children,
  id,
}: TextProps) {
  return (
    <p
      id={id}
      className={cn(
        variantStyles[variant],
        accent && 'text-brand-secondary',
        muted && 'text-neutral-500',
        className
      )}
    >
      {children}
    </p>
  )
}

/**
 * Lead Component
 *
 * Larger introductory paragraph text
 *
 * @example
 * <Lead>Transforme seus processos com automação inteligente.</Lead>
 */
export function Lead({
  className,
  children,
  id,
}: {
  className?: string
  children?: React.ReactNode
  id?: string
}) {
  return (
    <p
      id={id}
      className={cn(
        'text-xl text-neutral-600 leading-relaxed',
        className
      )}
    >
      {children}
    </p>
  )
}

/**
 * Caption Component
 *
 * Small text for captions, metadata, timestamps
 *
 * @example
 * <Caption>Atualizado em 12 de janeiro, 2026</Caption>
 */
export function Caption({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <span
      className={cn(
        'text-xs font-normal leading-normal text-neutral-500',
        className
      )}
    >
      {children}
    </span>
  )
}

export default Text
