'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'A automação reduziu nosso tempo de processamento de documentos de 3 horas para 15 minutos. A equipe agora foca no atendimento ao paciente.',
    author: 'Dra. Marina Santos',
    role: 'Diretora Administrativa',
    company: 'Clínica Viva Saúde',
  },
  {
    quote: 'Eliminamos completamente os erros de faturamento. O retorno foi positivo já no segundo mês de operação.',
    author: 'Ricardo Almeida',
    role: 'Sócio-diretor',
    company: 'Almeida & Costa Advogados',
  },
  {
    quote: 'A coordenação com fornecedores agora acontece sozinha. Economizamos 15 horas por semana que antes iam em ligação e planilha.',
    author: 'João Pedro Mendes',
    role: 'Gerente de Operações',
    company: 'Cooperativa Vale do Café',
  },
]

export default function TestimonialCarousel() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <div ref={ref}>
      {/* Section header */}
      <div className="mb-12 md:mb-14">
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          O que nossos clientes dizem
        </h2>
      </div>

      {/* Stats bar */}
      <div className="flex flex-wrap gap-x-8 gap-y-2 mb-10 text-sm text-neutral-600">
        <span className="font-medium">50+ automações entregues</span>
        <span className="hidden md:inline text-neutral-300" aria-hidden="true">&middot;</span>
        <span className="font-medium">3 setores atendidos</span>
        <span className="hidden md:inline text-neutral-300" aria-hidden="true">&middot;</span>
        <span className="font-medium">Belo Horizonte, MG</span>
      </div>

      {/* Testimonial grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-[rgba(0,0,0,0.08)] p-6"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              opacity: isVisible ? 1 : 0,
              transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
            }}
          >
            {/* Quote */}
            <p className="text-base italic text-brand-black leading-relaxed mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              {/* Avatar placeholder */}
              <div className="w-10 h-10 bg-brand-border flex items-center justify-center">
                <span className="text-sm font-medium text-brand-muted">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <div>
                <p className="text-sm font-medium text-brand-black">
                  {testimonial.author}
                </p>
                <p className="text-sm text-brand-muted">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
