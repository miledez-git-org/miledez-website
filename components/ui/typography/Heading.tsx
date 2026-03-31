import { cn } from '@/lib/utils'

/**
 * Heading Component
 *
 * Typography component for headings and display text.
 *
 * @example
 * <Heading as="display1">Hero Title</Heading>
 * <Heading as="h1">Page Title</Heading>
 * <Heading as="h2">Section Title</Heading>
 * <Heading as="h3" accent>Highlighted</Heading>
 */

export type HeadingLevel = 'display1' | 'display2' | 'display3' | 'h1' | 'h2' | 'h3' | 'h4'

export interface HeadingProps {
  /** Heading style level */
  as?: HeadingLevel
  /** Apply brand primary color */
  accent?: boolean
  /** Additional CSS classes */
  className?: string
  /** Content */
  children?: React.ReactNode
  /** HTML id attribute */
  id?: string
}

const levelStyles: Record<HeadingLevel, string> = {
  // Display styles - for hero sections
  display1: 'text-7xl font-extrabold leading-none tracking-tight text-neutral-950',
  display2: 'text-6xl font-extrabold leading-none tracking-tight text-neutral-950',
  display3: 'text-5xl font-bold leading-tight tracking-tight text-neutral-950',
  // Heading styles - for page structure
  h1: 'text-4xl font-bold leading-tight text-neutral-950',
  h2: 'text-3xl font-bold leading-snug text-neutral-950',
  h3: 'text-2xl font-semibold leading-snug text-neutral-900',
  h4: 'text-xl font-semibold leading-snug text-neutral-900',
}

// Map levels to semantic HTML elements
type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const defaultElements: Record<HeadingLevel, HeadingElement> = {
  display1: 'h1',
  display2: 'h1',
  display3: 'h2',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
}

export function Heading({
  as = 'h1',
  accent = false,
  className,
  children,
  id,
}: HeadingProps) {
  const Element = defaultElements[as]

  return (
    <Element
      id={id}
      className={cn(
        levelStyles[as],
        accent && 'text-brand-secondary',
        className
      )}
    >
      {children}
    </Element>
  )
}

/**
 * AccentDot Component
 *
 * Decorative dot in brand color, typically used at end of headlines
 *
 * @example
 * <Heading as="display1">Automação inteligente<AccentDot /></Heading>
 */
export function AccentDot({ className }: { className?: string }) {
  return (
    <span className={cn('text-brand-secondary', className)}>.</span>
  )
}

export default Heading
