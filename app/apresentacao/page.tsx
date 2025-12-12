'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { icons, stepIcons } from '@/components/Icons'
import { ClockShrinkIcon, DrawCheckIcon, PuzzleConnectIcon } from '@/components/AnimatedIcons'

// ============================================
// TYPE DEFINITIONS
// ============================================
type Industry = 'saude' | 'servicos' | 'varejo'

interface IndustryContent {
  label: string
  hoursWasted: number
  painPoints: Array<{
    icon: React.ReactNode
    title: string
    description: string
  }>
  workflow: Array<{
    step: number
    label: string
  }>
}

// ============================================
// INDUSTRY-SPECIFIC DATA
// ============================================
const industryData: Record<Industry, IndustryContent> = {
  saude: {
    label: 'Saude',
    hoursWasted: 12,
    painPoints: [
      {
        icon: stepIcons.folder,
        title: 'Documentacao dispersa',
        description: 'Fichas em papel, arquivos no computador, anexos no e-mail. Informacao espalhada.',
      },
      {
        icon: stepIcons.creditCard,
        title: 'Faturamento complexo',
        description: 'Cada convenio com regras diferentes, guias que voltam com glosa.',
      },
      {
        icon: stepIcons.calendar,
        title: 'Conformidade constante',
        description: 'Prazos de retencao, documentos obrigatorios, preparacao para auditoria.',
      },
    ],
    workflow: [
      { step: 1, label: 'Novo paciente cadastrado' },
      { step: 2, label: 'Formulario enviado automaticamente' },
      { step: 3, label: 'Documentos organizados' },
      { step: 4, label: 'Prontuario completo' },
    ],
  },
  servicos: {
    label: 'Servicos',
    hoursWasted: 8,
    painPoints: [
      {
        icon: stepIcons.document,
        title: 'Propostas manuais',
        description: 'Cada proposta precisa ser montada do zero. Tempo perdido em formatacao.',
      },
      {
        icon: stepIcons.bell,
        title: 'Cobranca esquecida',
        description: 'Faturas atrasadas, lembretes que nao foram enviados, fluxo de caixa apertado.',
      },
      {
        icon: stepIcons.folder,
        title: 'Contratos perdidos',
        description: 'Documentos em pastas diferentes, renovacoes que passam, prazos que vencem.',
      },
    ],
    workflow: [
      { step: 1, label: 'Lead recebido' },
      { step: 2, label: 'Proposta gerada automaticamente' },
      { step: 3, label: 'Contrato enviado' },
      { step: 4, label: 'Cobranca agendada' },
    ],
  },
  varejo: {
    label: 'Varejo',
    hoursWasted: 15,
    painPoints: [
      {
        icon: stepIcons.box,
        title: 'Estoque desatualizado',
        description: 'Planilhas desatualizadas, vendas nao registradas, rupturas inesperadas.',
      },
      {
        icon: stepIcons.cart,
        title: 'Pedidos manuais',
        description: 'Cada pedido precisa ser processado manualmente. Atrasos e erros frequentes.',
      },
      {
        icon: stepIcons.chart,
        title: 'Conciliacao infinita',
        description: 'Vendas em varios canais, pagamentos diferentes, nunca bate no final.',
      },
    ],
    workflow: [
      { step: 1, label: 'Pedido recebido' },
      { step: 2, label: 'Estoque verificado' },
      { step: 3, label: 'Nota fiscal emitida' },
      { step: 4, label: 'Cliente notificado' },
    ],
  },
}

// ============================================
// SECTION NAVIGATION COMPONENT
// ============================================
function SectionNavigation({
  currentSection,
  totalSections,
  onNavigate,
  sectionTitles,
}: {
  currentSection: number
  totalSections: number
  onNavigate: (index: number) => void
  sectionTitles: string[]
}) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3 bg-white border border-[rgba(0,0,0,0.08)] shadow-lg">
      <button
        onClick={() => onNavigate(Math.max(0, currentSection - 1))}
        disabled={currentSection === 0}
        className="p-2 text-brand-muted hover:text-brand-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Secao anterior"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <div className="flex items-center gap-2">
        {sectionTitles.map((title, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`relative group transition-all ${
              index === currentSection
                ? 'w-8 h-2 bg-brand-accent'
                : 'w-2 h-2 bg-brand-border hover:bg-brand-muted'
            }`}
            aria-label={`Ir para: ${title}`}
            title={title}
          />
        ))}
      </div>

      <button
        onClick={() => onNavigate(Math.min(totalSections - 1, currentSection + 1))}
        disabled={currentSection === totalSections - 1}
        className="p-2 text-brand-muted hover:text-brand-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Proxima secao"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <span className="ml-4 text-xs text-brand-muted font-medium">
        {currentSection + 1} / {totalSections}
      </span>
    </div>
  )
}

// ============================================
// PROGRESS SIDEBAR COMPONENT
// ============================================
function ProgressSidebar({
  currentSection,
  sectionTitles,
  onNavigate,
}: {
  currentSection: number
  sectionTitles: string[]
  onNavigate: (index: number) => void
}) {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {sectionTitles.map((title, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={`flex items-center gap-3 group transition-all ${
            index === currentSection ? 'opacity-100' : 'opacity-40 hover:opacity-70'
          }`}
        >
          <div
            className={`w-2 h-2 transition-all ${
              index === currentSection ? 'bg-brand-accent w-4' : 'bg-brand-border group-hover:bg-brand-muted'
            }`}
          />
          <span
            className={`text-xs font-medium uppercase tracking-wider transition-all ${
              index === currentSection
                ? 'text-brand-accent translate-x-0 opacity-100'
                : 'text-brand-muted -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
            }`}
          >
            {title}
          </span>
        </button>
      ))}
    </div>
  )
}

// ============================================
// INDUSTRY SELECTOR COMPONENT
// ============================================
function IndustrySelector({
  selected,
  onSelect,
}: {
  selected: Industry
  onSelect: (industry: Industry) => void
}) {
  const industries: Array<{ id: Industry; label: string; desc: string }> = [
    { id: 'saude', label: 'Saude', desc: 'Clinicas e consultorios' },
    { id: 'servicos', label: 'Servicos', desc: 'Escritorios e consultorias' },
    { id: 'varejo', label: 'Varejo', desc: 'Lojas e e-commerce' },
  ]

  return (
    <div className="flex gap-2">
      {industries.map((industry) => (
        <button
          key={industry.id}
          onClick={() => onSelect(industry.id)}
          className={`px-5 py-3 text-sm font-medium transition-all ${
            selected === industry.id
              ? 'bg-brand-accent text-white'
              : 'bg-bg-muted text-brand-muted hover:text-brand-black hover:bg-neutral-100'
          }`}
        >
          {industry.label}
        </button>
      ))}
    </div>
  )
}

// ============================================
// ANIMATED COUNT-UP HOOK
// ============================================
function useCountUp(end: number, duration: number = 1500, isVisible: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setCount(0)
      return
    }

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isVisible])

  return count
}

// ============================================
// PAIN POINTS VISUALIZATION
// ============================================
function PainPointsVisualization({
  isVisible,
  industry,
}: {
  isVisible: boolean
  industry: Industry
}) {
  const apps = [
    { icon: icons.gmail, name: 'Email', x: 20, y: 15 },
    { icon: icons.excel, name: 'Planilha', x: 75, y: 20 },
    { icon: icons.word, name: 'Documento', x: 15, y: 55 },
    { icon: icons.whatsapp, name: 'WhatsApp', x: 80, y: 60 },
    { icon: icons.pdf, name: 'PDF', x: 45, y: 80 },
  ]

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {/* Chaotic app icons */}
      {apps.map((app, index) => (
        <div
          key={index}
          className="absolute w-14 h-14 bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center"
          style={{
            left: `${app.x}%`,
            top: `${app.y}%`,
            transform: isVisible
              ? `translate(-50%, -50%) rotate(${(index - 2) * 8}deg)`
              : 'translate(-50%, -50%) scale(0.8)',
            opacity: isVisible ? 1 : 0,
            transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${100 + index * 80}ms`,
          }}
        >
          <div className="text-brand-black scale-75">{app.icon}</div>
        </div>
      ))}

      {/* Error/problem indicators */}
      {[
        { x: 35, y: 25 },
        { x: 60, y: 45 },
        { x: 25, y: 70 },
      ].map((pos, index) => (
        <div
          key={`error-${index}`}
          className="absolute w-6 h-6 bg-red-100 border border-red-300 flex items-center justify-center text-red-500 text-xs font-bold"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: 'translate(-50%, -50%)',
            opacity: isVisible ? 1 : 0,
            transition: `opacity 0.4s ease-out ${600 + index * 150}ms`,
          }}
        >
          !
        </div>
      ))}

      {/* Dashed connection lines showing disconnection */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: isVisible ? 0.3 : 0,
          transition: 'opacity 0.6s ease-out 400ms',
        }}
      >
        <line x1="25%" y1="20%" x2="70%" y2="25%" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="20%" y1="55%" x2="45%" y2="75%" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="75%" y1="60%" x2="50%" y2="78%" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {/* Label */}
      <p
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm text-brand-muted text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.6s ease-out 800ms',
        }}
      >
        Sistemas desconectados, trabalho manual
      </p>
    </div>
  )
}

// ============================================
// WORKFLOW DEMO COMPONENT
// ============================================
function WorkflowDemo({
  isVisible,
  industry,
  activeStep,
  isPaused,
  onTogglePause,
}: {
  isVisible: boolean
  industry: Industry
  activeStep: number
  isPaused: boolean
  onTogglePause: () => void
}) {
  const data = industryData[industry]

  return (
    <div className="bg-white border border-[rgba(0,0,0,0.08)] p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-brand-accent" />
          <span className="text-xs font-medium text-brand-muted uppercase tracking-wider">
            Exemplo - {data.label}
          </span>
        </div>
        <button
          onClick={onTogglePause}
          className="text-xs text-brand-muted hover:text-brand-black transition-colors flex items-center gap-2"
        >
          {isPaused ? (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
              Continuar
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
              </svg>
              Pausar
            </>
          )}
        </button>
      </div>

      {/* Workflow steps */}
      <div className="space-y-4">
        {data.workflow.map((step, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
            style={{
              transform: isVisible ? 'translateX(0)' : 'translateX(-16px)',
              opacity: isVisible ? 1 : 0,
              transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
            }}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center text-base font-medium transition-all duration-500 ${
                activeStep === index ? 'bg-brand-accent text-white scale-110' : 'bg-bg-muted text-brand-muted'
              }`}
            >
              {step.step}
            </div>
            <span
              className={`text-base transition-all duration-500 ${
                activeStep === index ? 'text-brand-black font-medium' : 'text-brand-muted'
              }`}
            >
              {step.label}
            </span>
            {activeStep === index && (
              <div className="ml-auto flex items-center gap-1">
                <span className="w-2 h-2 bg-emerald-500 animate-pulse" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer status */}
      <div className="mt-8 pt-4 border-t border-[rgba(0,0,0,0.08)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500" />
          <span className="text-xs text-brand-muted">Executando automaticamente</span>
        </div>
        <span className="text-xs text-brand-muted font-medium">24/7</span>
      </div>
    </div>
  )
}

// ============================================
// VALUE PROPOSITION CARDS (adapted from ComoFuncionaDemo)
// ============================================
function ValuePropositionCards({ isVisible }: { isVisible: boolean }) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const benefits = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      ),
      headline: 'Sem software novo',
      description: 'Conectamos aos sistemas que voce ja usa. Sem instalacao, sem treinamento.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
        </svg>
      ),
      headline: '100% personalizada',
      description: 'Adaptada ao seu negocio, seus processos, suas necessidades.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
      headline: 'Pronto em dias',
      description: 'Primeira automacao funcionando rapidamente. Resultados imediatos.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      headline: 'Zero compromisso',
      description: 'Sem contratos longos. Cancele quando quiser.',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Regular benefit cards */}
      {benefits.map((benefit, index) => {
        const isHovered = hoveredCard === index

        return (
          <div
            key={index}
            className={`border p-8 bg-white transition-all duration-300 ${
              isHovered ? 'border-brand-accent' : 'border-brand-border'
            }`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-start gap-5">
              <div
                className={`w-14 h-14 flex-shrink-0 flex items-center justify-center border-l-[3px] border-t border-r border-b bg-neutral-50 transition-colors duration-300 ${
                  isHovered
                    ? 'border-l-brand-accent border-t-brand-accent border-r-brand-accent border-b-brand-accent text-brand-accent'
                    : 'border-l-brand-accent border-t-brand-border border-r-brand-border border-b-brand-border text-brand-black'
                }`}
              >
                {benefit.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-brand-black mb-2 leading-tight">
                  {benefit.headline}
                </h3>
                <p className="text-base text-brand-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        )
      })}

      {/* Featured pricing card */}
      <div
        className="md:col-span-2 border border-brand-accent bg-white p-8 md:p-10"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 400ms',
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-brand-accent text-white">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a19.595 19.595 0 005.656-5.656c.758-1.158.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-brand-black mb-2">
                Sem custo de desenvolvimento
              </h3>
              <p className="text-lg text-brand-muted">
                Nos cuidamos do funcionamento e manutencao
              </p>
            </div>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs text-brand-muted uppercase tracking-wider">
              A partir de
            </span>
            <span className="block text-4xl md:text-5xl font-bold text-brand-accent leading-tight">
              R$900
            </span>
            <span className="text-base text-brand-muted">
              /mes por automacao
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// MAIN PRESENTATION COMPONENT
// ============================================
export default function ApresentacaoPage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>('saude')
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0)
  const [isWorkflowPaused, setIsWorkflowPaused] = useState(false)

  const totalSections = 6
  const sectionTitles = ['Inicio', 'Desafios', 'Solucao', 'Proposta', 'Seguranca', 'Contato']

  // Animated count for impact hook
  const hoursCount = useCountUp(
    industryData[selectedIndustry].hoursWasted,
    1500,
    currentSection === 0
  )

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        setCurrentSection((prev) => Math.min(totalSections - 1, prev + 1))
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setCurrentSection((prev) => Math.max(0, prev - 1))
      } else if (e.key >= '1' && e.key <= '6') {
        setCurrentSection(parseInt(e.key) - 1)
      } else if (e.key === 'p' || e.key === 'P') {
        setIsWorkflowPaused((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Workflow animation (slower 3.5s cycle)
  useEffect(() => {
    if (currentSection === 2 && !isWorkflowPaused) {
      const interval = setInterval(() => {
        setActiveWorkflowStep((prev) => (prev + 1) % 4)
      }, 3500)
      return () => clearInterval(interval)
    }
  }, [currentSection, isWorkflowPaused])

  const navigateToSection = useCallback((index: number) => {
    setCurrentSection(index)
  }, [])

  const concerns = [
    {
      title: 'Sem instalacao',
      icon: stepIcons.box,
      resolution: 'Usamos os sistemas que voce ja tem.',
    },
    {
      title: 'Sem treinamento',
      icon: stepIcons.user,
      resolution: 'Invisivel para sua equipe.',
    },
    {
      title: 'Sem amarracao',
      icon: stepIcons.refresh,
      resolution: 'Volte ao manual quando quiser.',
    },
    {
      title: 'Sem risco',
      icon: stepIcons.chart,
      resolution: 'Ve resultados antes de se comprometer.',
    },
  ]

  return (
    <div className="h-screen bg-bg-base overflow-hidden">
      {/* Progress Sidebar - Desktop only */}
      <ProgressSidebar
        currentSection={currentSection}
        sectionTitles={sectionTitles}
        onNavigate={navigateToSection}
      />

      {/* Sections container */}
      <div className="relative h-full">
        {/* ============================================ */}
        {/* SECTION 1: IMPACT HOOK */}
        {/* ============================================ */}
        <section
          className={`absolute inset-0 h-full flex items-center justify-center px-6 md:px-10 transition-opacity duration-500 ${
            currentSection === 0 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Decorative ampersand watermark */}
          <div
            className="absolute right-8 md:right-16 bottom-32 text-[200px] md:text-[300px] font-light text-brand-accent opacity-[0.04] select-none pointer-events-none"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            &
          </div>

          <div className="text-center max-w-3xl relative z-10">
            <Image
              src="/logo.svg"
              alt="mil&dez"
              width={180}
              height={48}
              className="mx-auto mb-12"
            />

            <h1 className="text-[3.5rem] md:text-[5rem] font-medium text-brand-black tracking-[-0.03em] leading-none mb-4">
              <span className="text-brand-accent">{hoursCount}</span> horas
            </h1>
            <p className="text-2xl md:text-3xl text-brand-text font-medium mb-4">
              por semana.
            </p>
            <p className="text-xl text-brand-muted mb-12">
              E o tempo que sua equipe perde em tarefas que nao precisam de gente.
            </p>

            <IndustrySelector
              selected={selectedIndustry}
              onSelect={setSelectedIndustry}
            />
          </div>

          {/* Navigation hint */}
          <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-brand-muted">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <span>Use as setas para navegar</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 2: PAIN RECOGNITION */}
        {/* ============================================ */}
        <section
          className={`absolute inset-0 h-full flex items-center px-6 md:px-10 py-16 overflow-y-auto transition-opacity duration-500 ${
            currentSection === 1 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-medium text-brand-accent uppercase tracking-wider mb-4">
                Seu dia a dia
              </span>
              <h2 className="text-[2.5rem] md:text-[3rem] font-medium text-brand-black tracking-[-0.02em] mb-8">
                Reconhece esses problemas?
              </h2>

              <div className="space-y-6">
                {industryData[selectedIndustry].painPoints.map((pain, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4"
                    style={{
                      opacity: currentSection === 1 ? 1 : 0,
                      transform: currentSection === 1 ? 'translateX(0)' : 'translateX(-16px)',
                      transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
                    }}
                  >
                    <div className="w-12 h-12 border border-brand-border flex items-center justify-center flex-shrink-0 text-brand-black">
                      {pain.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-brand-black mb-1">
                        {pain.title}
                      </h3>
                      <p className="text-base text-brand-muted">
                        {pain.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <IndustrySelector
                  selected={selectedIndustry}
                  onSelect={setSelectedIndustry}
                />
              </div>
            </div>

            <PainPointsVisualization
              isVisible={currentSection === 1}
              industry={selectedIndustry}
            />
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 3: SOLUTION DEMO */}
        {/* ============================================ */}
        <section
          className={`absolute inset-0 h-full flex items-center px-6 md:px-10 py-16 overflow-y-auto transition-opacity duration-500 ${
            currentSection === 2 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-medium text-brand-accent uppercase tracking-wider mb-4">
                A solucao
              </span>
              <h2 className="text-[2.5rem] md:text-[3rem] font-medium text-brand-black tracking-[-0.02em] mb-6">
                E se isso funcionasse sozinho?
              </h2>
              <p className="text-xl text-brand-text leading-relaxed mb-6">
                Automacao conecta seus sistemas e executa tarefas repetitivas sem intervencao humana.
              </p>
              <p className="text-lg text-brand-muted mb-8">
                Cada solucao e personalizada. O que construimos para voce sera especifico para suas necessidades.
              </p>

              <IndustrySelector
                selected={selectedIndustry}
                onSelect={setSelectedIndustry}
              />
            </div>

            <WorkflowDemo
              isVisible={currentSection === 2}
              industry={selectedIndustry}
              activeStep={activeWorkflowStep}
              isPaused={isWorkflowPaused}
              onTogglePause={() => setIsWorkflowPaused(!isWorkflowPaused)}
            />
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 4: VALUE PROPOSITION + PRICING */}
        {/* ============================================ */}
        <section
          className={`absolute inset-0 h-full flex items-center px-6 md:px-10 py-16 overflow-y-auto transition-opacity duration-500 ${
            currentSection === 3 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="max-w-5xl mx-auto w-full">
            <div className="mb-12 text-center">
              <span className="inline-block text-xs font-medium text-brand-accent uppercase tracking-wider mb-4">
                Por que a mil&dez
              </span>
              <h2 className="text-[2.5rem] md:text-[3rem] font-medium text-brand-black tracking-[-0.02em]">
                Nossa proposta
              </h2>
            </div>

            <ValuePropositionCards isVisible={currentSection === 3} />
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 5: RISK ELIMINATION */}
        {/* ============================================ */}
        <section
          className={`absolute inset-0 h-full flex items-center px-6 md:px-10 py-16 overflow-y-auto transition-opacity duration-500 ${
            currentSection === 4 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="max-w-5xl mx-auto w-full">
            <div className="mb-12 text-center">
              <span className="inline-block text-xs font-medium text-brand-accent uppercase tracking-wider mb-4">
                Sem risco
              </span>
              <h2 className="text-[2.5rem] md:text-[3rem] font-medium text-brand-black tracking-[-0.02em] mb-4">
                Risco zero. Compromisso zero.
              </h2>
            </div>

            {/* Horizontal concern cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {concerns.map((concern, index) => (
                <div
                  key={index}
                  className="text-center p-6"
                  style={{
                    opacity: currentSection === 4 ? 1 : 0,
                    transform: currentSection === 4 ? 'translateY(0)' : 'translateY(16px)',
                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
                  }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 border border-brand-accent flex items-center justify-center text-brand-accent">
                    {concern.icon}
                  </div>
                  <h3 className="text-lg font-medium text-brand-black mb-2">
                    {concern.title}
                  </h3>
                  <p className="text-base text-brand-muted">
                    {concern.resolution}
                  </p>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div
              className="mt-12 p-8 bg-bg-muted text-center"
              style={{
                opacity: currentSection === 4 ? 1 : 0,
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 500ms',
              }}
            >
              <p className="text-xl text-brand-black font-medium">
                Automacao e aprimoramento, nao substituicao.<br />
                Voce ganha capacidade, nao perde controle.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 6: CTA */}
        {/* ============================================ */}
        <section
          className={`absolute inset-0 h-full flex items-center justify-center px-6 md:px-10 py-12 transition-opacity duration-500 ${
            currentSection === 5 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="text-center max-w-3xl">
            <span className="inline-block text-xs font-medium text-brand-accent uppercase tracking-wider mb-4">
              Proximos passos
            </span>
            <h2
              className="text-[2.5rem] md:text-[3.5rem] font-medium text-brand-black tracking-[-0.02em] mb-8"
              style={{
                opacity: currentSection === 5 ? 1 : 0,
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Quais processos voce gostaria de automatizar?
            </h2>
            <p
              className="text-xl text-brand-muted mb-12"
              style={{
                opacity: currentSection === 5 ? 1 : 0,
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 100ms',
              }}
            >
              Vamos conversar sobre os desafios do seu negocio.
            </p>

            <div
              className="inline-flex flex-col items-center gap-4"
              style={{
                opacity: currentSection === 5 ? 1 : 0,
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 200ms',
              }}
            >
              <a
                href="mailto:contato@miledez.com.br"
                className="inline-block px-12 py-5 text-lg font-medium text-white bg-brand-accent hover:bg-brand-accent-dark transition-colors"
              >
                contato@miledez.com.br
              </a>
              <span className="text-base text-brand-muted">miledez.com.br</span>
            </div>

            {/* Logo at bottom */}
            <div className="mt-16">
              <Image
                src="/logo.svg"
                alt="mil&dez"
                width={120}
                height={32}
                className="mx-auto opacity-50"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Navigation */}
      <SectionNavigation
        currentSection={currentSection}
        totalSections={totalSections}
        onNavigate={navigateToSection}
        sectionTitles={sectionTitles}
      />
    </div>
  )
}
