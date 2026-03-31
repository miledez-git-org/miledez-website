'use client'

interface PricingSectionProps {
  onContactClick: () => void
}

export default function PricingSection({ onContactClick }: PricingSectionProps) {
  return (
    <div>
      {/* Header */}
      <div className="mb-14 md:mb-16 text-center">
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          Quanto custa automatizar<br />
          <span className="text-brand-secondary">o que você recebe de volta</span>
        </h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-xl mx-auto">
          Cada solução é sob medida pra sua operação. Sem contrato. Sem taxa de entrada.
        </p>
      </div>

      {/* Price Range Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        {/* Simple */}
        <div className="text-center md:border-r md:border-neutral-200 md:px-8">
          <p className="text-base font-medium text-neutral-500 uppercase tracking-wider mb-2">
            A partir de
          </p>
          <p className="heading-display text-3xl md:text-4xl text-brand-black">
            R$900<span className="text-xl md:text-2xl">/mês</span>
          </p>
          <p className="text-base text-neutral-600 mt-2">
            Automações simples
          </p>
        </div>

        {/* Medium */}
        <div className="text-center md:border-r md:border-neutral-200 md:px-8">
          <p className="text-base font-medium text-neutral-500 uppercase tracking-wider mb-2">
            A partir de
          </p>
          <p className="heading-display text-3xl md:text-4xl text-brand-black">
            R$2.000<span className="text-xl md:text-2xl">/mês</span>
          </p>
          <p className="text-base text-neutral-600 mt-2">
            Soluções de complexidade média
          </p>
        </div>

        {/* Complex */}
        <div className="text-center md:px-8">
          <p className="text-base font-medium text-neutral-500 uppercase tracking-wider mb-2">
            A partir de
          </p>
          <p className="heading-display text-3xl md:text-4xl text-brand-black">
            R$6.000<span className="text-xl md:text-2xl">/mês</span>
          </p>
          <p className="text-base text-neutral-600 mt-2">
            Soluções complexas com alta personalização
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <button
          onClick={onContactClick}
          className="btn btn-primary btn-lg"
        >
          Falar com a gente
        </button>
      </div>
    </div>
  )
}
