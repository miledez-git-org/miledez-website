'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { stepIcons } from '@/components/Icons'

interface ValuePropositionBProps {
  onContactClick?: () => void
}

interface BenefitItem {
  icon: React.ReactNode
  title: string
  description: string
}

const painPoints = [
  {
    icon: stepIcons.calendar,
    title: 'Tarefas repetitivas todo dia',
    description:
      'Preencher planilhas, enviar lembretes, organizar documentos. Sua equipe gasta horas em tarefas que poderiam acontecer sozinhas.',
  },
  {
    icon: stepIcons.folder,
    title: 'Informação espalhada',
    description:
      'Dados no e-mail, no WhatsApp, na planilha, no sistema. Quando precisa de algo, ninguém sabe onde está.',
  },
  {
    icon: stepIcons.refresh,
    title: 'Erros e retrabalho',
    description:
      'Dados digitados errado, prazos esquecidos, cobranças atrasadas. Pequenos erros que custam tempo e dinheiro.',
  },
]

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const WalletIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z" />
  </svg>
)

const ShieldCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const CalendarXIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="10" y1="14" x2="14" y2="18" />
    <line x1="14" y1="14" x2="10" y2="18" />
  </svg>
)

const SlidersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const benefits: BenefitItem[] = [
  {
    icon: <ClockIcon />,
    title: '3-7 dias para automações simples',
    description: 'Projetos maiores em 2-4 semanas. Sem interromper sua operação.',
  },
  {
    icon: <WalletIcon />,
    title: 'R$0 de investimento inicial',
    description: 'Desenvolvimento, testes e treinamento por nossa conta. Você só paga quando funcionar.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Totalmente gerenciado por nós',
    description: 'Sua equipe não precisa fazer nada técnico. Cuidamos de A a Z.',
  },
  {
    icon: <SlidersIcon />,
    title: '100% personalizado para sua empresa',
    description: 'Nada de solução genérica. Cada automação é construída para o processo real do seu negócio.',
  },
  {
    icon: <MapPinIcon />,
    title: 'Feito para o Brasil',
    description: 'Integração com ferramentas brasileiras, conformidade LGPD e suporte 100% em português.',
  },
  {
    icon: <CalendarXIcon />,
    title: 'Sem contrato, sem multa',
    description: 'Assinatura mensal. Cancele em 30 dias. A automação é sua.',
  },
]

export default function ValuePropositionB({ onContactClick }: ValuePropositionBProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <div ref={ref}>
      {/* Section header */}
      <div className="mb-12 md:mb-14">
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          Resultados em dias, não meses
        </h2>
      </div>

      {/* Two-column: pain points (left) + solution narrative (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
        {/* Left column - Pain points */}
        <div className="space-y-0">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className={`flex gap-4 py-6 ${index < painPoints.length - 1 ? 'border-b border-neutral-100' : ''}`}
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms, opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
              }}
            >
              <div className="flex-shrink-0 w-10 h-10 text-brand-primary flex items-center justify-center">
                {point.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-black">
                  {point.title}
                </h3>
                <p className="mt-1 text-base text-neutral-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right column - Solution narrative */}
        <div
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 100ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 100ms',
          }}
        >
          <div className="space-y-4 text-lg text-neutral-600 leading-relaxed max-w-lg">
            <p>
              Somos uma agência de automação que entrega soluções prontas para usar. Você não precisa de equipe de TI, não precisa entender de tecnologia, e não precisa esperar meses para ver resultados.
            </p>
            <p>
              Construímos automações 100% personalizadas para o processo real da sua empresa — conectando os sistemas que você já usa. Cuidamos de tudo: desenvolvimento, hospedagem, manutenção e atualizações.
            </p>
            <p className="font-medium text-brand-black">
              Você paga só a mensalidade. Sem contrato, sem surpresas, sem risco.
            </p>
          </div>

          <div className="mt-10">
            <button
              onClick={onContactClick}
              className="btn btn-primary btn-lg"
            >
              Teste grátis uma automação
            </button>
          </div>
        </div>
      </div>

      {/* Benefits grid below */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0">
        {benefits.map((benefit, index) => {
          const delay = 300 + index * 80

          return (
            <div
              key={index}
              className={`flex gap-4 py-5 ${index < benefits.length - 3 ? 'border-b border-neutral-100' : ''} ${index < 3 ? 'border-b border-neutral-100 lg:border-b' : 'lg:border-b-0'}`}
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
              }}
            >
              <div className="flex-shrink-0 w-10 h-10 text-brand-primary flex items-center justify-center">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-brand-black">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
