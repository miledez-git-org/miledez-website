'use client'

import { useRef, useState } from 'react'
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
  {
    quote: 'A integração entre nossos sistemas foi perfeita. Agora temos visibilidade total da operação em tempo real.',
    author: 'Ana Beatriz Costa',
    role: 'Diretora',
    company: 'ContaPrime Contabilidade',
  },
]

export default function TestimonialCarousel() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showArrows, setShowArrows] = useState(false)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      {/* Section header */}
      <div className="mb-12 text-center">
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          O que nossos clientes dizem
        </h2>
      </div>

      {/* Stats bar */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10 text-sm text-neutral-600">
        <span className="font-medium">50+ automações entregues</span>
        <span className="hidden md:inline text-neutral-300" aria-hidden="true">&middot;</span>
        <span className="font-medium">3 setores atendidos</span>
        <span className="hidden md:inline text-neutral-300" aria-hidden="true">&middot;</span>
        <span className="font-medium">Belo Horizonte, MG</span>
      </div>

      {/* Carousel container */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white border border-brand-border flex items-center justify-center transition-opacity ${
            showArrows ? 'opacity-100' : 'opacity-0'
          } hover:border-brand-primary`}
          aria-label="Anterior"
        >
          <svg
            className="w-5 h-5 text-brand-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 -mb-4 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white border border-[rgba(0,0,0,0.08)] p-6"
              style={{
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.98)',
                transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
              }}
            >
              {/* Quote */}
              <p className="font-serif text-base italic text-brand-black leading-relaxed mb-6">
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

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white border border-brand-border flex items-center justify-center transition-opacity ${
            showArrows ? 'opacity-100' : 'opacity-0'
          } hover:border-brand-primary`}
          aria-label="Próximo"
        >
          <svg
            className="w-5 h-5 text-brand-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 bg-brand-border"
          />
        ))}
      </div>
    </div>
  )
}
