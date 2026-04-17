'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'
import ContactModal from '@/components/ContactModal'

const industries = [
  {
    href: '/saude',
    title: 'Saúde e Clínicas',
    description: 'Automatizamos agendamento, confirmação de consultas, documentação e faturamento para clínicas e consultórios.',
  },
  {
    href: '/servicos',
    title: 'Serviços Profissionais',
    description: 'Automatizamos contratos, faturamento, relatórios e comunicação para escritórios e prestadores de serviço.',
  },
  {
    href: '/agronegocio',
    title: 'Agronegócio',
    description: 'Automatizamos fornecedores, cotações, conformidade e comunicação campo-escritório para o agronegócio.',
  },
]

export default function IndustriasContent() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={() => setIsContactModalOpen(true)} />

      <main className="pt-32 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
          <div className="max-w-2xl mb-14">
            <h1 className="heading-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-brand-black leading-tight">
              Automação para{' '}
              <span className="text-brand-primary">sua indústria</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              Cada setor tem processos únicos. Criamos automações sob medida para o fluxo real da sua operação.
            </p>
          </div>

          {/* Industry cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group bg-white border border-neutral-200 p-8 transition-all duration-200 hover:-translate-y-1"
                style={{ boxShadow: '4px 6px 16px rgba(0,0,0,0.10)' }}
              >
                <h2 className="text-xl md:text-2xl font-semibold text-brand-black group-hover:text-brand-primary transition-colors">
                  {industry.title}
                </h2>
                <p className="mt-3 text-base text-neutral-600 leading-relaxed">
                  {industry.description}
                </p>
                <span className="inline-block mt-6 text-sm font-medium text-brand-primary">
                  Ver soluções →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  )
}
