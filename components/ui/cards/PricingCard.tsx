import { cn } from '@/lib/utils'

/**
 * PricingCard Component
 *
 * Card for displaying pricing plans.
 *
 * @example
 * <PricingCard
 *   name="Pro"
 *   price="R$ 299"
 *   period="/mês"
 *   description="Para empresas em crescimento"
 *   features={['Até 50 workflows', 'Suporte prioritário', 'API access']}
 *   cta={<Button variant="primary">Começar agora</Button>}
 *   featured
 * />
 */

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Plan name */
  name: string
  /** Price value */
  price: string
  /** Billing period (e.g., "/mês") */
  period?: string
  /** Plan description */
  description?: string
  /** List of features */
  features: string[]
  /** CTA button element */
  cta?: React.ReactNode
  /** Whether this is the featured/recommended plan */
  featured?: boolean
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  featured = false,
  className,
  ...props
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'p-8 bg-white border rounded-lg text-center',
        featured
          ? 'border-brand-primary shadow-md'
          : 'border-neutral-200',
        className
      )}
      {...props}
    >
      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
        {name}
      </h3>
      <p className="text-5xl font-bold text-neutral-950 mb-1">
        {price}
        {period && (
          <span className="text-base font-normal text-neutral-500">
            {period}
          </span>
        )}
      </p>
      {description && (
        <p className="text-sm text-neutral-500 mb-6">{description}</p>
      )}
      <ul className="text-left mb-8 space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 py-2 text-sm text-neutral-700"
          >
            <svg
              className="w-5 h-5 text-semantic-success flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      {cta}
    </div>
  )
}

export default PricingCard
