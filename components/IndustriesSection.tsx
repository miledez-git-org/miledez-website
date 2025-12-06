'use client'

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const industries = [
  { name: 'Saúde e Clínicas', href: '/saude', desc: 'Documentação, faturamento, conformidade' },
  { name: 'Serviços Profissionais', href: '/servicos', desc: 'Contratos, cobrança, relatórios' },
  { name: 'Varejo e E-commerce', href: '/varejo', desc: 'Estoque, pedidos, financeiro' },
]

export default function IndustriesSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <div ref={ref}>
      <div className="mb-16">
        <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">Indústrias</h2>
        <p className="mt-4 text-lg font-medium text-brand-muted">Soluções específicas para cada setor</p>
      </div>

      <div className="space-y-0">
        {industries.map((industry, i) => (
          <Link
            key={i}
            href={industry.href}
            className="flex justify-between items-center py-8 border-b border-brand-border group"
            style={{
              transform: isVisible ? 'translateX(0)' : 'translateX(-16px)',
              transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms`,
            }}
          >
            <div>
              <h3 className="text-xl font-medium text-brand-black group-hover:text-brand-accent transition-colors">
                {industry.name}
              </h3>
              <p className="text-sm text-brand-muted mt-1">{industry.desc}</p>
            </div>

            {/* Arrow with bounce animation on hover */}
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-brand-muted group-hover:text-brand-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  )
}
