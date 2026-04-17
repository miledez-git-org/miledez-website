'use client'

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface Step {
  icon: string
  title: string
  description: string
}

interface Workflow {
  industry: string
  summary: string
  steps: Step[]
}

const workflows: Workflow[] = [
  {
    industry: 'Saúde',
    summary: 'Confirmação de consultas',
    steps: [
      { icon: '/software-company-logos/google-calendar.svg', title: 'Consulta agendada', description: 'Paciente marca horário na agenda' },
      { icon: '/software-company-logos/whatsapp.svg', title: 'Lembrete enviado', description: 'WhatsApp automático 24h antes' },
      { icon: '/software-company-logos/google-sheets.svg', title: 'Paciente confirmado', description: 'Status atualizado na planilha' },
    ],
  },
  {
    industry: 'Jurídico',
    summary: 'Renovação de contratos',
    steps: [
      { icon: '/software-company-logos/pipedrive.svg', title: 'Contrato vencendo', description: 'CRM detecta prazo próximo' },
      { icon: '/software-company-logos/gmail.svg', title: 'Documento revisado', description: 'E-mail com minuta atualizada' },
      { icon: '/software-company-logos/docusign.svg', title: 'Assinatura enviada', description: 'Link de assinatura digital' },
      { icon: '/software-company-logos/google-drive.svg', title: 'Contrato arquivado', description: 'Versão final salva na nuvem' },
    ],
  },
  {
    industry: 'Agro',
    summary: 'Cotação de insumos',
    steps: [
      { icon: '/software-company-logos/whatsapp.svg', title: 'Pedido recebido', description: 'Produtor envia via WhatsApp' },
      { icon: '/software-company-logos/google-sheets.svg', title: 'Cotações comparadas', description: 'Planilha consulta fornecedores' },
      { icon: '/software-company-logos/slack.svg', title: 'Melhor preço selecionado', description: 'Equipe notificada no Slack' },
      { icon: '/software-company-logos/gmail.svg', title: 'Pedido confirmado', description: 'E-mail enviado ao fornecedor' },
      { icon: '/software-company-logos/excel.svg', title: 'Nota fiscal registrada', description: 'Documento salvo automaticamente' },
    ],
  },
]

const DownArrow = () => (
  <div className="flex justify-center py-2">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-neutral-400">
      <path d="M10 4L10 16M10 16L5 11M10 16L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
)

export default function WorkflowExplainerSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="exemplos" className="bg-bg-muted py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        {/* Section header */}
        <div
          className="max-w-2xl"
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
            Como funciona{' '}
            <span className="text-brand-primary">uma automação</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            De 3 a 10+ módulos — cada fluxo é montado para o processo real da sua empresa.
          </p>
        </div>

        {/* Workflow cards — 3 vertical columns */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {workflows.map((workflow, wIndex) => {
            const delay = 200 + wIndex * 120

            return (
              <div
                key={wIndex}
                className="bg-white border border-neutral-200 p-6"
                style={{
                  boxShadow: '4px 6px 16px rgba(0,0,0,0.10)',
                  transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
                }}
              >
                {/* Card header */}
                <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-neutral-400">
                  {workflow.industry}
                </span>
                <h3 className="text-xl font-semibold text-brand-black mt-1">
                  {workflow.summary}
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  {workflow.steps.length} módulos
                </p>

                {/* Vertical steps */}
                <div className="mt-6">
                  {workflow.steps.map((step, sIndex) => (
                    <div key={sIndex}>
                      <div className="flex items-start gap-3">
                        <Image src={step.icon} alt="" width={24} height={24} className="flex-shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="text-base font-medium text-brand-black leading-snug">
                            {step.title}
                          </p>
                          <p className="text-sm text-neutral-500 mt-0.5">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {sIndex < workflow.steps.length - 1 && <DownArrow />}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
