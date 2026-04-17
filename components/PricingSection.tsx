'use client'

interface PricingSectionProps {
  onContactClick: () => void
}

export default function PricingSection({ onContactClick }: PricingSectionProps) {
  return (
    <div>
      {/* Header — left aligned */}
      <div className="mb-12 md:mb-14 max-w-2xl">
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          Quanto custa automatizar{' '}
          <span className="text-brand-primary">o que você recebe de volta</span>
        </h2>
        <p className="mt-4 text-lg text-neutral-600">
          Cada solução é sob medida pra sua operação. Sem contrato. Sem taxa de entrada.
        </p>
      </div>

      {/* Price tiers — 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Simple */}
        <div className="bg-white border border-neutral-200 p-8" style={{ boxShadow: '4px 6px 16px rgba(0,0,0,0.10)' }}>
          <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.15em] mb-3">
            A partir de
          </p>
          <p className="heading-display text-3xl md:text-4xl text-brand-primary">
            R$500<span className="text-lg md:text-xl text-neutral-500 font-normal">/mês</span>
          </p>
          <p className="text-base text-neutral-600 mt-3">
            Automações simples
          </p>
        </div>

        {/* Medium */}
        <div className="bg-white border border-neutral-200 p-8" style={{ boxShadow: '4px 6px 16px rgba(0,0,0,0.10)' }}>
          <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.15em] mb-3">
            A partir de
          </p>
          <p className="heading-display text-3xl md:text-4xl text-brand-primary">
            R$2.000<span className="text-lg md:text-xl text-neutral-500 font-normal">/mês</span>
          </p>
          <p className="text-base text-neutral-600 mt-3">
            Soluções de complexidade média
          </p>
        </div>

        {/* Complex */}
        <div className="bg-white border border-neutral-200 p-8" style={{ boxShadow: '4px 6px 16px rgba(0,0,0,0.10)' }}>
          <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.15em] mb-3">
            A partir de
          </p>
          <p className="heading-display text-3xl md:text-4xl text-brand-primary">
            R$6.000<span className="text-lg md:text-xl text-neutral-500 font-normal">/mês</span>
          </p>
          <p className="text-base text-neutral-600 mt-3">
            Soluções complexas com alta personalização
          </p>
        </div>
      </div>

      {/* CTA — left aligned */}
      <div className="mt-12">
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
