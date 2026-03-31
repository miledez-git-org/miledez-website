'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface BusinessProfile {
  type: string
  size: string
  location: string
  investment: string
  returnValue: string
  benefitDetail: string
}

const profiles: BusinessProfile[] = [
  {
    type: 'Clínica Odontológica',
    size: '12 profissionais',
    location: 'Belo Horizonte, MG',
    investment: 'R$900',
    returnValue: 'R$6.000',
    benefitDetail: 'Consultas recuperadas e menos tempo administrativo',
  },
  {
    type: 'Escritório de Contabilidade',
    size: '6 colaboradores',
    location: 'Belo Horizonte, MG',
    investment: 'R$900',
    returnValue: 'R$4.500',
    benefitDetail: 'Mais produtividade e menos retrabalho',
  },
  {
    type: 'Cooperativa de Café',
    size: '50 produtores',
    location: 'Sul de Minas, MG',
    investment: 'R$3.000',
    returnValue: 'R$18.000',
    benefitDetail: 'Coordenação de fornecedores e documentação no automático',
  },
  {
    type: 'Distribuidora de Insumos Agrícolas',
    size: '15 funcionários',
    location: 'Triângulo Mineiro, MG',
    investment: 'R$2.000',
    returnValue: 'R$10.000',
    benefitDetail: 'Pedidos e estoque automatizados, zero retrabalho',
  },
]

function AccentBar({ isVisible, delay }: { isVisible: boolean; delay: number }) {
  return (
    <div
      className="h-0.5 mt-3 bg-brand-secondary"
      style={{
        width: isVisible ? '60%' : '0%',
        transition: `width 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    />
  )
}

export default function BusinessProfilesSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <div ref={ref}>
      {/* Section header */}
      <div
        className="mb-14 md:mb-16"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          Negócios como o seu<br />
          já automatizam com a gente
        </h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-xl">
          De clínicas a cooperativas — automação funciona em qualquer escala.
        </p>
      </div>

      {/* Profile rows */}
      <div className="space-y-12 md:space-y-16">
        {profiles.map((profile, index) => {
          const delay = 150 + index * 100

          return (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
              }}
            >
              {/* Left — Business info */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-brand-black">
                  {profile.type}
                </h3>
                <p className="text-base text-neutral-500 mt-1">
                  {profile.size} · {profile.location}
                </p>
                <p className="text-base text-neutral-600 leading-relaxed mt-3">
                  {profile.benefitDetail}
                </p>
              </div>

              {/* Right — Cost vs. Return side-by-side */}
              <div className="flex items-start gap-8 md:gap-12">
                <div>
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-1">Investimento</p>
                  <span className="block text-3xl lg:text-4xl font-medium tracking-tight text-brand-black">
                    {profile.investment}
                  </span>
                  <p className="mt-1 text-base text-neutral-500">/mês</p>
                </div>
                <div className="text-2xl text-neutral-300 font-light mt-8">→</div>
                <div>
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-1">Retorno</p>
                  <span className="block text-3xl lg:text-4xl font-medium tracking-tight text-brand-secondary">
                    {profile.returnValue}
                  </span>
                  <p className="mt-1 text-base text-neutral-500">/mês</p>
                  <AccentBar isVisible={isVisible} delay={delay + 200} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Divider before summary */}
      <div className="border-t border-neutral-200 mt-12 md:mt-16" />

      {/* Summary totals — orange card */}
      <div
        className="mt-10 rounded-xl px-8 py-8 bg-brand-secondary text-center"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 600ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 600ms',
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-5">
          <div>
            <p className="text-lg font-medium text-white mb-1">Custo Mensalidade Total</p>
            <p className="text-4xl md:text-5xl font-bold text-white">R$6.800<span className="text-xl font-normal text-white">/mês</span></p>
          </div>
          <div className="hidden md:block w-px h-14 bg-white/30" />
          <div>
            <p className="text-lg font-medium text-white mb-1">Retorno acumulado</p>
            <p className="text-4xl md:text-5xl font-bold text-white">R$38.500<span className="text-xl font-normal text-white">/mês</span></p>
          </div>
        </div>
        <p className="text-lg text-white max-w-lg mx-auto">
          Quatro negócios reais, um resultado em comum: automação que se paga no primeiro mês.
        </p>
      </div>
    </div>
  )
}
