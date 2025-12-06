'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ClockShrinkIcon, DrawCheckIcon, PuzzleConnectIcon } from '@/components/AnimatedIcons'
import { icons } from '@/components/Icons'

// Slide navigation component
function SlideNavigation({
  currentSlide,
  totalSlides,
  onNavigate,
}: {
  currentSlide: number
  totalSlides: number
  onNavigate: (index: number) => void
}) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3 bg-white border border-[rgba(0,0,0,0.08)] shadow-lg">
      <button
        onClick={() => onNavigate(Math.max(0, currentSlide - 1))}
        disabled={currentSlide === 0}
        className="p-2 text-brand-muted hover:text-brand-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Slide anterior"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`w-2 h-2 transition-all ${
              index === currentSlide
                ? 'bg-brand-accent w-6'
                : 'bg-brand-border hover:bg-brand-muted'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => onNavigate(Math.min(totalSlides - 1, currentSlide + 1))}
        disabled={currentSlide === totalSlides - 1}
        className="p-2 text-brand-muted hover:text-brand-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Proximo slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <span className="ml-4 text-xs text-brand-muted font-medium">
        {currentSlide + 1} / {totalSlides}
      </span>
    </div>
  )
}

// Industry selector component
function IndustrySelector({
  selected,
  onSelect,
}: {
  selected: 'saude' | 'servicos' | 'varejo'
  onSelect: (industry: 'saude' | 'servicos' | 'varejo') => void
}) {
  const industries = [
    { id: 'saude' as const, label: 'Saude', desc: 'Clinicas e consultórios' },
    { id: 'servicos' as const, label: 'Servicos', desc: 'Escritórios e consultorias' },
    { id: 'varejo' as const, label: 'Varejo', desc: 'Lojas e e-commerce' },
  ]

  return (
    <div className="flex gap-2">
      {industries.map((industry) => (
        <button
          key={industry.id}
          onClick={() => onSelect(industry.id)}
          className={`px-4 py-2 text-sm font-medium transition-all ${
            selected === industry.id
              ? 'bg-brand-accent text-white'
              : 'bg-bg-muted text-brand-muted hover:text-brand-black'
          }`}
        >
          {industry.label}
        </button>
      ))}
    </div>
  )
}

// Concern/Resolution component
function ConcernResolution({
  concern,
  resolution,
  index,
  isVisible,
}: {
  concern: string
  resolution: string
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className="py-6 border-b border-brand-border last:border-0"
      style={{
        transform: isVisible ? 'translateX(0)' : 'translateX(-16px)',
        opacity: isVisible ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="w-6 h-6 flex items-center justify-center bg-bg-muted text-brand-muted flex-shrink-0 mt-0.5">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-base text-brand-muted mb-2 italic">"{concern}"</p>
          <p className="text-base text-brand-black font-medium">{resolution}</p>
        </div>
      </div>
    </div>
  )
}

// Workflow step component for demo
function WorkflowStep({
  step,
  label,
  isActive,
  isVisible,
  delay,
}: {
  step: number
  label: string
  isActive: boolean
  isVisible: boolean
  delay: number
}) {
  return (
    <div
      className="flex items-center gap-4"
      style={{
        transform: isVisible ? 'translateX(0)' : 'translateX(-16px)',
        opacity: isVisible ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      <div
        className={`w-10 h-10 flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
          isActive ? 'bg-brand-accent text-white' : 'bg-bg-muted text-brand-muted'
        }`}
      >
        {step}
      </div>
      <span
        className={`text-base transition-colors duration-300 ${
          isActive ? 'text-brand-black font-medium' : 'text-brand-muted'
        }`}
      >
        {label}
      </span>
    </div>
  )
}

// Integration mesh simplified for presentation
function PresentationIntegrationMesh({ isVisible }: { isVisible: boolean }) {
  const integrations = [
    { name: 'Email', icon: icons.gmail },
    { name: 'Planilhas', icon: icons.excel },
    { name: 'Documentos', icon: icons.word },
    { name: 'Calendario', icon: icons.googleCalendar },
    { name: 'Drive', icon: icons.googleDrive },
    { name: 'WhatsApp', icon: icons.whatsapp },
  ]

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Center hub */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-brand-black flex items-center justify-center z-10"
        style={{
          transform: isVisible
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -50%) scale(0.8)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <span className="text-white text-xl font-medium tracking-tight">m&d</span>
      </div>

      {/* Integration nodes */}
      <div className="relative aspect-square">
        {integrations.map((integration, index) => {
          const angle = (index * 2 * Math.PI) / integrations.length - Math.PI / 2
          const radius = 40 // percentage
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <div
              key={index}
              className="absolute w-14 h-14 bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center"
              style={{
                left: `${50 + x}%`,
                top: `${50 + y}%`,
                transform: isVisible
                  ? 'translate(-50%, -50%) scale(1)'
                  : 'translate(-50%, -50%) scale(0.8)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${100 + index * 80}ms`,
              }}
              title={integration.name}
            >
              <div className="text-brand-black scale-75">{integration.icon}</div>
            </div>
          )
        })}
      </div>

      {/* Label */}
      <p className="text-center text-sm text-brand-muted mt-4">
        Conectamos os sistemas que voce ja usa
      </p>
    </div>
  )
}

// Main presentation component
export default function ApresentacaoPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedIndustry, setSelectedIndustry] = useState<'saude' | 'servicos' | 'varejo'>('saude')
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0)

  const totalSlides = 7

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1))
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setCurrentSlide((prev) => Math.max(0, prev - 1))
      } else if (e.key >= '1' && e.key <= '7') {
        setCurrentSlide(parseInt(e.key) - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Workflow animation
  useEffect(() => {
    if (currentSlide === 3) {
      const interval = setInterval(() => {
        setActiveWorkflowStep((prev) => (prev + 1) % 5)
      }, 1500)
      return () => clearInterval(interval)
    }
  }, [currentSlide])

  const navigateToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  // Industry-specific workflow examples
  const workflowExamples = {
    saude: [
      'Paciente agenda consulta',
      'Dados enviados ao sistema',
      'Prontuario atualizado',
      'Confirmacao enviada',
      'Lembrete agendado',
    ],
    servicos: [
      'Cliente solicita proposta',
      'Dados coletados automaticamente',
      'Documento gerado',
      'Enviado para aprovacao',
      'Contrato criado',
    ],
    varejo: [
      'Pedido recebido',
      'Estoque verificado',
      'Nota fiscal emitida',
      'Envio agendado',
      'Cliente notificado',
    ],
  }

  const concerns = [
    {
      concern: 'Vou ter que instalar software novo?',
      resolution: 'Nao. Usamos os sistemas que voce ja tem. Sem instalacao, sem mudancas no seu ambiente de TI.',
    },
    {
      concern: 'Minha equipe vai precisar de treinamento?',
      resolution: 'Nao. A automacao trabalha por tras, invisivel. Sua equipe continua usando as mesmas ferramentas.',
    },
    {
      concern: 'E se eu quiser parar?',
      resolution: 'Voce pode voltar ao processo manual a qualquer momento. Sem contrato de longo prazo, sem amarracao.',
    },
    {
      concern: 'E se nao funcionar?',
      resolution: 'Voce ve resultados antes de se comprometer. O retorno geralmente aparece em semanas, nao meses.',
    },
  ]

  const processSteps = [
    { num: '01', title: 'Conversa', desc: 'Entendemos seus desafios e mapeamos seus processos atuais.' },
    { num: '02', title: 'Proposta', desc: 'Apresentamos solucoes especificas com estimativa de resultados.' },
    { num: '03', title: 'Implementacao', desc: 'Construimos, configuramos e testamos. Voce aprova.' },
  ]

  return (
    <div className="min-h-screen bg-bg-base">
      {/* Slides container */}
      <div className="relative">
        {/* Slide 1: Opening */}
        <section
          className={`min-h-screen flex items-center justify-center px-6 md:px-10 transition-opacity duration-500 ${
            currentSlide === 0 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
          }`}
        >
          <div className="text-center max-w-2xl">
            <Image
              src="/logo.svg"
              alt="mil&dez"
              width={180}
              height={48}
              className="mx-auto mb-16"
            />
            <h1 className="text-[3rem] md:text-[4rem] font-medium text-brand-black tracking-[-0.03em] mb-6">
              Automacao de Processos
            </h1>
            <p className="text-xl text-brand-muted">
              Reuniao de descoberta
            </p>
            <div className="mt-16 text-sm text-brand-light">
              Use as setas do teclado para navegar
            </div>
          </div>
        </section>

        {/* Slide 2: O que e Automacao? */}
        <section
          className={`min-h-screen flex items-center px-6 md:px-10 py-20 transition-opacity duration-500 ${
            currentSlide === 1 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
          }`}
        >
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-medium text-brand-accent uppercase tracking-wider mb-4">
                Conceito
              </span>
              <h2 className="text-[2.5rem] font-medium text-brand-black tracking-[-0.02em] mb-6">
                O que e automacao?
              </h2>
              <p className="text-2xl text-brand-text leading-relaxed mb-8">
                Automacao nao e software novo.<br />
                <span className="text-brand-accent font-medium">E conexao inteligente.</span>
              </p>
              <p className="text-lg text-brand-muted leading-relaxed">
                E fazer o computador executar tarefas repetitivas que voce ja faz manualmente.
                Nao e um programa novo para instalar. E uma camada invisivel que conecta o que voce ja usa.
              </p>
            </div>
            <PresentationIntegrationMesh isVisible={currentSlide === 1} />
          </div>
        </section>

        {/* Slide 3: O que isso resolve? */}
        <section
          className={`min-h-screen flex items-center px-6 md:px-10 py-20 transition-opacity duration-500 ${
            currentSlide === 2 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
          }`}
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="mb-16">
              <span className="inline-block text-xs font-medium text-brand-accent uppercase tracking-wider mb-4">
                Beneficios
              </span>
              <h2 className="text-[2.5rem] font-medium text-brand-black tracking-[-0.02em]">
                O que isso resolve?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Tempo */}
              <div
                className="p-6"
                style={{
                  transform: currentSlide === 2 ? 'translateY(0)' : 'translateY(16px)',
                  opacity: currentSlide === 2 ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0ms',
                }}
              >
                <div className="mb-6 text-brand-black">
                  <ClockShrinkIcon isVisible={currentSlide === 2} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-brand-black">Tempo recuperado</h3>
                <p className="text-base text-brand-text leading-relaxed mb-6">
                  Tarefas que levavam horas passam a acontecer em segundos. Sua equipe foca no que realmente importa.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-brand-muted">Antes: 4 horas</span>
                  <span className="text-brand-accent font-medium">Depois: 4 segundos</span>
                </div>
              </div>

              {/* Qualidade */}
              <div
                className="p-6"
                style={{
                  transform: currentSlide === 2 ? 'translateY(0)' : 'translateY(16px)',
                  opacity: currentSlide === 2 ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 100ms',
                }}
              >
                <div className="mb-6 text-brand-black">
                  <DrawCheckIcon isVisible={currentSlide === 2} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-brand-black">Zero erros</h3>
                <p className="text-base text-brand-text leading-relaxed mb-6">
                  Automacoes nao esquecem, nao erram digitacao, nao pulam etapas. Saida consistente, sempre.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-brand-accent font-medium">Taxa de erro: 0%</span>
                </div>
              </div>

              {/* Possibilidades */}
              <div
                className="p-6"
                style={{
                  transform: currentSlide === 2 ? 'translateY(0)' : 'translateY(16px)',
                  opacity: currentSlide === 2 ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 200ms',
                }}
              >
                <div className="mb-6 text-brand-black">
                  <PuzzleConnectIcon isVisible={currentSlide === 2} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-brand-black">Novas capacidades</h3>
                <p className="text-base text-brand-text leading-relaxed mb-6">
                  Analises que antes nao havia tempo de fazer. Relatorios que antes eram impossiveis. Ferramentas novas para o seu negocio.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-brand-accent font-medium">Possibilidades ilimitadas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Como funciona na pratica? */}
        <section
          className={`min-h-screen flex items-center px-6 md:px-10 py-20 transition-opacity duration-500 ${
            currentSlide === 3 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
          }`}
        >
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-medium text-brand-accent uppercase tracking-wider mb-4">
                Na pratica
              </span>
              <h2 className="text-[2.5rem] font-medium text-brand-black tracking-[-0.02em] mb-6">
                Como funciona?
              </h2>
              <p className="text-lg text-brand-text leading-relaxed mb-6">
                Cada solucao e personalizada. Os exemplos que voce ve sao ideias - o que construimos para voce sera especifico para suas necessidades.
              </p>
              <p className="text-base text-brand-muted mb-8">
                Comece simples, expanda conforme necessario.
              </p>

              <IndustrySelector
                selected={selectedIndustry}
                onSelect={setSelectedIndustry}
              />
            </div>

            {/* Workflow demo */}
            <div className="bg-white border border-[rgba(0,0,0,0.08)] p-8">
              <div className="flex items-center gap-2 mb-8 pb-4 border-b border-[rgba(0,0,0,0.08)]">
                <div className="w-2 h-2 bg-brand-accent" />
                <span className="text-xs font-medium text-brand-muted uppercase tracking-wider">
                  Exemplo de fluxo - {selectedIndustry === 'saude' ? 'Saude' : selectedIndustry === 'servicos' ? 'Servicos' : 'Varejo'}
                </span>
              </div>

              <div className="space-y-4">
                {workflowExamples[selectedIndustry].map((step, index) => (
                  <WorkflowStep
                    key={`${selectedIndustry}-${index}`}
                    step={index + 1}
                    label={step}
                    isActive={activeWorkflowStep === index}
                    isVisible={currentSlide === 3}
                    delay={index * 100}
                  />
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-[rgba(0,0,0,0.08)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500" />
                  <span className="text-xs text-brand-muted">Executando automaticamente</span>
                </div>
                <span className="text-xs text-brand-muted">24/7</span>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Por que e seguro comecar? */}
        <section
          className={`min-h-screen flex items-center px-6 md:px-10 py-20 transition-opacity duration-500 ${
            currentSlide === 4 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
          }`}
        >
          <div className="max-w-4xl mx-auto w-full">
            <div className="mb-12">
              <span className="inline-block text-xs font-medium text-brand-accent uppercase tracking-wider mb-4">
                Sem risco
              </span>
              <h2 className="text-[2.5rem] font-medium text-brand-black tracking-[-0.02em] mb-4">
                Por que e seguro comecar?
              </h2>
              <p className="text-xl text-brand-muted">
                Risco zero. Compromisso zero.
              </p>
            </div>

            <div>
              {concerns.map((item, index) => (
                <ConcernResolution
                  key={index}
                  concern={item.concern}
                  resolution={item.resolution}
                  index={index}
                  isVisible={currentSlide === 4}
                />
              ))}
            </div>

            <div
              className="mt-12 p-6 bg-bg-muted"
              style={{
                transform: currentSlide === 4 ? 'translateY(0)' : 'translateY(16px)',
                opacity: currentSlide === 4 ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 400ms',
              }}
            >
              <p className="text-lg text-brand-black font-medium">
                Automacao e aprimoramento, nao substituicao. Voce ganha capacidade, nao perde controle.
              </p>
            </div>
          </div>
        </section>

        {/* Slide 6: Nosso processo */}
        <section
          className={`min-h-screen flex items-center px-6 md:px-10 py-20 transition-opacity duration-500 ${
            currentSlide === 5 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
          }`}
        >
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-medium text-brand-accent uppercase tracking-wider mb-4">
                Processo
              </span>
              <h2 className="text-[2.5rem] font-medium text-brand-black tracking-[-0.02em] mb-6">
                Nosso processo
              </h2>
              <p className="text-lg text-brand-text leading-relaxed mb-8">
                Simples e direto. Voce nao precisa entender como funciona - so precisa nos contar o que nao funciona.
              </p>
              <p className="text-base text-brand-muted">
                Todo o trabalho tecnico e nosso. Seu unico trabalho e nos dizer o que dói.
              </p>
            </div>

            <div className="space-y-0">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 pb-8 border-b border-brand-border last:border-0"
                  style={{
                    transform: currentSlide === 5 ? 'translateX(0)' : 'translateX(-16px)',
                    opacity: currentSlide === 5 ? 1 : 0,
                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
                  }}
                >
                  <span className="text-2xl text-brand-accent font-medium">{step.num}</span>
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-brand-black">{step.title}</h4>
                    <p className="text-base text-brand-text">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 7: Proximos passos */}
        <section
          className={`min-h-screen flex items-center justify-center px-6 md:px-10 py-20 transition-opacity duration-500 ${
            currentSlide === 6 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
          }`}
        >
          <div className="text-center max-w-3xl">
            <span className="inline-block text-xs font-medium text-brand-accent uppercase tracking-wider mb-4">
              Proximos passos
            </span>
            <h2
              className="text-[2.5rem] md:text-[3rem] font-medium text-brand-black tracking-[-0.02em] mb-8"
              style={{
                transform: currentSlide === 6 ? 'translateY(0)' : 'translateY(24px)',
                opacity: currentSlide === 6 ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Quais processos voce gostaria de automatizar?
            </h2>
            <p
              className="text-xl text-brand-muted mb-12"
              style={{
                transform: currentSlide === 6 ? 'translateY(0)' : 'translateY(24px)',
                opacity: currentSlide === 6 ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 100ms',
              }}
            >
              Vamos conversar sobre os desafios do seu negocio.
            </p>

            <div
              className="inline-flex flex-col items-center gap-4"
              style={{
                transform: currentSlide === 6 ? 'translateY(0)' : 'translateY(24px)',
                opacity: currentSlide === 6 ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 200ms',
              }}
            >
              <a
                href="mailto:contato@mildez.com"
                className="inline-block px-10 py-5 text-base font-medium text-white bg-brand-accent hover:bg-brand-accent-dark transition-colors"
              >
                contato@mildez.com
              </a>
              <span className="text-sm text-brand-muted">mildez.com</span>
            </div>
          </div>
        </section>
      </div>

      {/* Navigation */}
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNavigate={navigateToSlide}
      />
    </div>
  )
}
