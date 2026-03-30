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
          <span className="text-brand-primary">o que você recebe de volta</span>
        </h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-xl mx-auto">
          Cada solução é sob medida pra sua operação. Sem contrato. Sem taxa de entrada.
        </p>
      </div>

      {/* Price Range Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
        {/* Left — Simple */}
        <div className="text-center md:text-left">
          <p className="text-base font-medium text-neutral-500 uppercase tracking-wider mb-2">
            A partir de
          </p>
          <p className="heading-display text-4xl md:text-5xl text-brand-black">
            R$900<span className="text-2xl md:text-3xl">/mês</span>
          </p>
          <p className="text-base text-neutral-600 mt-2">
            Automações simples
          </p>
        </div>

        {/* Right — Complex */}
        <div className="text-center md:text-left md:border-l md:border-neutral-200 md:pl-12">
          <p className="text-base font-medium text-neutral-500 uppercase tracking-wider mb-2">
            A partir de
          </p>
          <p className="heading-display text-4xl md:text-5xl text-brand-black">
            R$2.000<span className="text-2xl md:text-3xl">/mês</span>
          </p>
          <p className="text-base text-neutral-600 mt-2">
            Soluções mais complexas
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
