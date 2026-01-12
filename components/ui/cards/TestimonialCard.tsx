import { cn } from '@/lib/utils'

/**
 * TestimonialCard Component
 *
 * Card for displaying customer testimonials.
 * Reference: global-resources/brand-assets/ui-kit/ui-kit.html
 *
 * @example
 * <TestimonialCard
 *   quote="A automação da mil&dez reduziu nosso tempo de processamento em 80%."
 *   author="Maria Silva"
 *   role="CEO, Empresa ABC"
 *   avatar={<Avatar>MS</Avatar>}
 * />
 */

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Testimonial quote */
  quote: string
  /** Author name */
  author: string
  /** Author role/company */
  role?: string
  /** Avatar element */
  avatar?: React.ReactNode
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'p-8 bg-neutral-50 rounded-lg',
        className
      )}
      {...props}
    >
      <blockquote className="text-2xl font-medium text-neutral-800 mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        {avatar}
        <div>
          <p className="font-semibold text-neutral-900">{author}</p>
          {role && (
            <p className="text-sm text-neutral-500">{role}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
