'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

// Types
interface QuestionOption {
  label: string
  value: string
  // Data used for calculations
  hoursWeekly?: number      // For manual_hours question
  hourlyRate?: number       // For hourly_cost question
  teamMultiplier?: number   // For team_size question
  complexityFactor?: number // For bottleneck complexity
}

interface Question {
  id: string
  question: string
  subtitle?: string
  type: 'single' | 'multiple'
  options: QuestionOption[]
}

interface BusinessCaseResult {
  // Time Analysis
  weeklyHoursSaved: number
  monthlyHoursSaved: number

  // Financial Impact
  monthlyValueRecovered: number
  roiMultiplier: string

  // Implementation
  implementationWeeks: number

  // Pricing
  estimatedRetainerMin: number
  estimatedRetainerMax: number

  // Context
  industry: string
  recommendations: {
    title: string
    description: string
    href: string
  }[]
}

// Questions designed to gather data for business case calculations
const questions: Question[] = [
  {
    id: 'industry',
    question: 'Qual é o seu setor de atuação?',
    subtitle: 'Isso nos ajuda a personalizar as recomendações',
    type: 'single',
    options: [
      { label: 'Saúde e Clínicas', value: 'saude' },
      { label: 'Serviços Profissionais (Advocacia, Consultoria)', value: 'servicos' },
      { label: 'Agronegócio', value: 'agronegocio' },
      { label: 'Outro setor', value: 'outro' },
    ],
  },
  {
    id: 'team_size',
    question: 'Quantas pessoas executam tarefas administrativas/operacionais?',
    subtitle: 'Considere quem lida com dados, documentos, cobranças ou atendimento',
    type: 'single',
    options: [
      { label: '1-2 pessoas', value: 'micro', teamMultiplier: 1.5 },
      { label: '3-5 pessoas', value: 'pequena', teamMultiplier: 4 },
      { label: '6-10 pessoas', value: 'media', teamMultiplier: 8 },
      { label: 'Mais de 10 pessoas', value: 'grande', teamMultiplier: 15 },
    ],
  },
  {
    id: 'manual_hours',
    question: 'Quantas horas por semana cada pessoa gasta em tarefas repetitivas?',
    subtitle: 'Copiar dados, preencher planilhas, enviar emails manuais, gerar relatórios...',
    type: 'single',
    options: [
      { label: 'Menos de 5 horas/semana', value: 'baixo', hoursWeekly: 3 },
      { label: '5-10 horas/semana', value: 'moderado', hoursWeekly: 7.5 },
      { label: '10-20 horas/semana', value: 'alto', hoursWeekly: 15 },
      { label: 'Mais de 20 horas/semana', value: 'critico', hoursWeekly: 25 },
    ],
  },
  {
    id: 'hourly_cost',
    question: 'Qual o custo médio por hora da sua equipe operacional?',
    subtitle: 'Considere salário + encargos dividido por horas trabalhadas',
    type: 'single',
    options: [
      { label: 'Até R$ 30/hora', value: 'baixo', hourlyRate: 25 },
      { label: 'R$ 30-50/hora', value: 'medio', hourlyRate: 40 },
      { label: 'R$ 50-80/hora', value: 'alto', hourlyRate: 65 },
      { label: 'Mais de R$ 80/hora', value: 'premium', hourlyRate: 100 },
    ],
  },
  {
    id: 'bottleneck',
    question: 'Qual processo consome mais tempo hoje?',
    subtitle: 'Selecione o principal gargalo operacional',
    type: 'single',
    options: [
      { label: 'Entrada e organização de dados (planilhas, cadastros)', value: 'dados', complexityFactor: 1.0 },
      { label: 'Faturamento e cobranças', value: 'financeiro', complexityFactor: 1.2 },
      { label: 'Gestão de documentos e contratos', value: 'documentos', complexityFactor: 1.1 },
      { label: 'Comunicação com clientes (emails, follow-ups)', value: 'comunicacao', complexityFactor: 0.9 },
      { label: 'Relatórios e análises', value: 'relatorios', complexityFactor: 1.3 },
    ],
  },
  {
    id: 'tools',
    question: 'Quais ferramentas sua equipe usa no dia a dia?',
    subtitle: 'Selecione todas que se aplicam',
    type: 'multiple',
    options: [
      { label: 'Excel / Google Sheets', value: 'planilhas' },
      { label: 'Email (Gmail, Outlook)', value: 'email' },
      { label: 'WhatsApp Business', value: 'whatsapp' },
      { label: 'Google Drive / OneDrive', value: 'drive' },
      { label: 'Sistema próprio / ERP', value: 'sistema' },
      { label: 'CRM (Pipedrive, HubSpot, etc)', value: 'crm' },
    ],
  },
]

// Calculate comprehensive business case from answers
function calculateBusinessCase(
  answers: Record<string, string | string[]>
): BusinessCaseResult {
  const industry = answers.industry as string || 'outro'
  const teamSize = answers.team_size as string || 'pequena'
  const manualHoursValue = answers.manual_hours as string || 'moderado'
  const hourlyCostValue = answers.hourly_cost as string || 'medio'
  const bottleneck = answers.bottleneck as string || 'dados'
  const tools = answers.tools as string[] || []

  // Get multipliers from question options
  const teamOption = questions.find(q => q.id === 'team_size')?.options.find(o => o.value === teamSize)
  const hoursOption = questions.find(q => q.id === 'manual_hours')?.options.find(o => o.value === manualHoursValue)
  const costOption = questions.find(q => q.id === 'hourly_cost')?.options.find(o => o.value === hourlyCostValue)
  const bottleneckOption = questions.find(q => q.id === 'bottleneck')?.options.find(o => o.value === bottleneck)

  const teamMultiplier = teamOption?.teamMultiplier || 4
  const hoursPerPerson = hoursOption?.hoursWeekly || 7.5
  const hourlyRate = costOption?.hourlyRate || 40
  const complexityFactor = bottleneckOption?.complexityFactor || 1.0

  // Calculate time metrics
  const currentWeeklyHours = Math.round(hoursPerPerson * teamMultiplier)
  const automationEfficiency = 0.75 // 75% reduction in manual work
  const weeklyHoursSaved = Math.round(currentWeeklyHours * automationEfficiency)
  const monthlyHoursSaved = weeklyHoursSaved * 4.33

  // Calculate financial impact
  const monthlyValueRecovered = Math.round(monthlyHoursSaved * hourlyRate)

  // Calculate implementation complexity
  const toolComplexity = tools.length >= 4 ? 1.3 : tools.length >= 2 ? 1.1 : 1.0
  const overallComplexity = complexityFactor * toolComplexity

  let implementationWeeks: number
  let retainerPercentage: number
  if (overallComplexity < 1.1) {
    implementationWeeks = 2
    retainerPercentage = 0.15
  } else if (overallComplexity < 1.3) {
    implementationWeeks = 3
    retainerPercentage = 0.20
  } else {
    implementationWeeks = 4
    retainerPercentage = 0.25
  }

  // Calculate retainer estimate
  const baseRetainer = Math.round(monthlyValueRecovered * retainerPercentage / 100) * 100
  const estimatedRetainerMin = Math.max(1500, Math.round(baseRetainer * 0.8 / 100) * 100)
  const estimatedRetainerMax = Math.max(2500, Math.round(baseRetainer * 1.2 / 100) * 100)

  // Calculate ROI multiplier
  const roiMultiplier = (monthlyValueRecovered / estimatedRetainerMax).toFixed(1)

  // Industry-specific recommendations (simplified)
  const industryRecommendations: Record<string, BusinessCaseResult['recommendations']> = {
    saude: [
      { title: 'Automação de Faturamento TISS', description: 'Guias geradas automaticamente', href: '/saude#workflows' },
      { title: 'Gestão de Documentos', description: 'Organização automática por paciente', href: '/saude#workflows' },
      { title: 'Lembretes e Cobranças', description: 'Comunicação automatizada', href: '/saude#workflows' },
    ],
    servicos: [
      { title: 'Controle de Contratos', description: 'Alertas de vencimento e renovação', href: '/servicos#workflows' },
      { title: 'Timesheet para Faturamento', description: 'Horas trabalhadas direto para fatura', href: '/servicos#workflows' },
      { title: 'Onboarding de Clientes', description: 'Setup automático de pastas e docs', href: '/servicos#workflows' },
    ],
    agronegocio: [
      { title: 'Coordenação de Fornecedores', description: 'Cotação e acompanhamento automáticos', href: '/agronegocio#workflows' },
      { title: 'Rastreabilidade e Conformidade', description: 'Documentação sempre em dia', href: '/agronegocio#workflows' },
      { title: 'Comunicação Campo-Escritório', description: 'Dados do campo organizados', href: '/agronegocio#workflows' },
    ],
    outro: [
      { title: 'Integração de Dados', description: 'Conecte planilhas e sistemas', href: '/#integracoes' },
      { title: 'Automação de Email', description: 'Respostas e follow-ups programados', href: '/#como-funciona' },
      { title: 'Relatórios Automáticos', description: 'Dashboards sempre atualizados', href: '/#beneficios' },
    ],
  }

  return {
    weeklyHoursSaved,
    monthlyHoursSaved: Math.round(monthlyHoursSaved),
    monthlyValueRecovered,
    roiMultiplier,
    implementationWeeks,
    estimatedRetainerMin,
    estimatedRetainerMax,
    industry,
    recommendations: industryRecommendations[industry] || industryRecommendations.outro,
  }
}

// Format currency in BRL
function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export default function DiagnosticoAutomacao() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [multipleSelections, setMultipleSelections] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([])

  const currentQuestion = questions[currentStep]
  const isMultiple = currentQuestion?.type === 'multiple'

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false)
        setFocusedIndex(-1)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Reset focused index when dropdown opens/closes
  useEffect(() => {
    if (isDropdownOpen) {
      setFocusedIndex(0)
      // Focus first option after dropdown opens
      setTimeout(() => optionRefs.current[0]?.focus(), 0)
    } else {
      setFocusedIndex(-1)
    }
  }, [isDropdownOpen])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isDropdownOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault()
        setIsDropdownOpen(true)
      }
      return
    }

    const optionsCount = currentQuestion.options.length + (isMultiple ? 1 : 0) // +1 for confirm button

    switch (e.key) {
      case 'Escape':
        e.preventDefault()
        setIsDropdownOpen(false)
        triggerRef.current?.focus()
        break
      case 'ArrowDown':
        e.preventDefault()
        setFocusedIndex(prev => {
          const next = prev < optionsCount - 1 ? prev + 1 : 0
          optionRefs.current[next]?.focus()
          return next
        })
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusedIndex(prev => {
          const next = prev > 0 ? prev - 1 : optionsCount - 1
          optionRefs.current[next]?.focus()
          return next
        })
        break
      case 'Home':
        e.preventDefault()
        setFocusedIndex(0)
        optionRefs.current[0]?.focus()
        break
      case 'End':
        e.preventDefault()
        const lastIndex = optionsCount - 1
        setFocusedIndex(lastIndex)
        optionRefs.current[lastIndex]?.focus()
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (focusedIndex >= 0 && focusedIndex < currentQuestion.options.length) {
          const option = currentQuestion.options[focusedIndex]
          if (isMultiple) {
            handleMultipleToggle(option.value)
          } else {
            handleSingleAnswer(currentQuestion.id, option.value)
          }
        } else if (isMultiple && focusedIndex === currentQuestion.options.length) {
          // Confirm button for multi-select
          handleMultipleConfirm()
        }
        break
      case 'Tab':
        // Allow tab to close dropdown and move focus
        setIsDropdownOpen(false)
        break
    }
  }

  const handleSingleAnswer = (questionId: string, value: string) => {
    setIsAnimating(true)
    setIsDropdownOpen(false)
    setAnswers(prev => ({ ...prev, [questionId]: value }))

    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1)
      } else {
        setShowResults(true)
      }
      setIsAnimating(false)
    }, 300)
  }

  const handleMultipleToggle = (value: string) => {
    setMultipleSelections(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    )
  }

  const handleMultipleConfirm = () => {
    if (multipleSelections.length === 0) return

    setIsAnimating(true)
    setIsDropdownOpen(false)
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: multipleSelections }))

    setTimeout(() => {
      setMultipleSelections([])
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1)
      } else {
        setShowResults(true)
      }
      setIsAnimating(false)
    }, 300)
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers({})
    setMultipleSelections([])
    setShowResults(false)
    setIsDropdownOpen(false)
    // Scroll to diagnostico section
    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })
  }

  const result = showResults ? calculateBusinessCase(answers) : null
  const progressPercentage = ((currentStep + (showResults ? 1 : 0)) / questions.length) * 100

  return (
    <div className="w-full">
      {/* Progress bar */}
      <div className="h-px bg-brand-border mb-12">
        <div
          className="h-px bg-brand-primary transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {!showResults ? (
        // Quiz questions
        <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <div className="mb-2 text-sm text-brand-muted">
            Pergunta {currentStep + 1} de {questions.length}
          </div>

          <h3 className="text-xl md:text-2xl font-medium text-brand-black mb-2 tracking-[-0.02em]">
            {currentQuestion.question}
          </h3>

          {currentQuestion.subtitle && (
            <p className="text-sm text-brand-muted mb-8">
              {currentQuestion.subtitle}
            </p>
          )}

          {/* Custom Dropdown */}
          <div className="relative" ref={dropdownRef} onKeyDown={handleKeyDown}>
            {/* Dropdown Trigger */}
            <button
              ref={triggerRef}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              aria-controls="dropdown-listbox"
              className={`w-full text-left px-6 py-4 border transition-colors flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
                isDropdownOpen ? 'border-brand-black' : 'border-brand-border hover:border-brand-black'
              }`}
            >
              <span className={isMultiple && multipleSelections.length > 0 ? 'text-brand-black' : 'text-brand-muted'}>
                {isMultiple
                  ? multipleSelections.length > 0
                    ? `${multipleSelections.length} selecionado${multipleSelections.length !== 1 ? 's' : ''}`
                    : 'Selecione as opções'
                  : 'Selecione uma opção'
                }
              </span>
              <svg
                viewBox="0 0 24 24"
                className={`w-5 h-5 text-brand-muted transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown Options Panel */}
            {isDropdownOpen && (
              <div
                id="dropdown-listbox"
                role="listbox"
                aria-label={currentQuestion.question}
                aria-multiselectable={isMultiple}
                className="absolute z-10 w-full mt-0 bg-white border border-t-0 border-brand-border"
              >
                {currentQuestion.options.map((option, index) => {
                  const isSelected = isMultiple && multipleSelections.includes(option.value)
                  const isFocused = focusedIndex === index

                  return (
                    <button
                      key={option.value}
                      ref={(el) => { optionRefs.current[index] = el }}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => isMultiple
                        ? handleMultipleToggle(option.value)
                        : handleSingleAnswer(currentQuestion.id, option.value)
                      }
                      className={`w-full text-left px-6 py-3 border-b border-brand-border last:border-b-0 transition-colors flex items-center justify-between group focus-visible:outline-none ${
                        isSelected
                          ? 'bg-brand-primary-light border-l-2 border-l-brand-primary'
                          : isFocused
                            ? 'bg-gray-100'
                            : 'hover:bg-gray-50'
                      }`}
                    >
                      <span className={`transition-colors ${
                        isSelected ? 'text-brand-black' : 'text-brand-muted group-hover:text-brand-black'
                      }`}>
                        {option.label}
                      </span>
                      {isMultiple && (
                        <div
                          className={`w-5 h-5 border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                            isSelected
                              ? 'border-brand-primary bg-brand-primary'
                              : 'border-brand-light group-hover:border-brand-black'
                          }`}
                          aria-hidden="true"
                        >
                          {isSelected && (
                            <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      )}
                    </button>
                  )
                })}

                {/* Confirm button for multi-select */}
                {isMultiple && (
                  <button
                    ref={(el) => { optionRefs.current[currentQuestion.options.length] = el }}
                    onClick={handleMultipleConfirm}
                    disabled={multipleSelections.length === 0}
                    className={`w-full px-6 py-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white ${
                      multipleSelections.length > 0
                        ? 'bg-brand-primary text-white hover:bg-brand-primary-dark'
                        : 'bg-brand-border text-brand-muted cursor-not-allowed'
                    } ${focusedIndex === currentQuestion.options.length ? 'ring-2 ring-inset ring-white' : ''}`}
                  >
                    Confirmar ({multipleSelections.length} selecionado{multipleSelections.length !== 1 ? 's' : ''})
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ) : result && (
        // Results - Streamlined Business Case
        <div className="animate-fadeIn">

          {/* HERO: Primary Metric */}
          <div className="mb-10">
            <div className="text-5xl md:text-6xl font-medium text-brand-black tracking-[-0.03em] mb-2">
              {result.weeklyHoursSaved}h
              <span className="text-2xl md:text-3xl text-brand-muted font-normal">/semana</span>
            </div>
            <p className="text-lg text-brand-muted">
              de trabalho manual eliminado
            </p>
          </div>

          {/* ROI Comparison Block */}
          <div className="py-6 border-t border-b border-brand-border mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <div className="text-sm text-brand-muted mb-1">Economia mensal</div>
                <div className="text-2xl md:text-3xl font-medium text-brand-black">
                  {formatCurrency(result.monthlyValueRecovered)}
                </div>
              </div>
              <div>
                <div className="text-sm text-brand-muted mb-1">Investimento</div>
                <div className="text-2xl md:text-3xl font-medium text-brand-primary">
                  {formatCurrency(result.estimatedRetainerMin)}-{formatCurrency(result.estimatedRetainerMax)}
                  <span className="text-base text-brand-muted font-normal">/mês</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="px-3 py-1.5 text-sm font-medium text-brand-primary border border-brand-primary">
                Retorno de {result.roiMultiplier}x
              </span>
              <span className="text-sm text-brand-muted">
                sobre o investimento mensal
              </span>
            </div>
          </div>

          {/* Implementation Timeline - Inline */}
          <div className="flex flex-wrap items-center gap-3 mb-12 text-sm">
            <span className="px-3 py-1.5 border border-brand-black text-brand-black font-medium">
              {result.implementationWeeks} semanas
            </span>
            <span className="text-brand-muted">
              para implementar
            </span>
            <span className="text-brand-muted">·</span>
            <span className="text-brand-muted">
              Setup incluso no retainer
            </span>
          </div>

          {/* Recommendations - Compact */}
          <div className="mb-10">
            <h4 className="text-sm font-medium text-brand-muted uppercase tracking-wider mb-4">
              Próximos passos
            </h4>

            <div className="space-y-0">
              {result.recommendations.map((rec, i) => (
                <Link
                  key={i}
                  href={rec.href}
                  className="flex justify-between items-center py-4 border-b border-brand-border group"
                >
                  <div>
                    <span className="text-brand-black group-hover:text-brand-primary transition-colors font-medium">
                      {rec.title}
                    </span>
                    <span className="text-brand-muted ml-2">
                      — {rec.description}
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-brand-muted group-hover:text-brand-primary transition-colors flex-shrink-0 ml-4"
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

          {/* CTA */}
          <div>
            <p className="text-brand-text mb-6">
              Quer validar esses números para seu caso?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:contato@mildez.com?subject=Diagnóstico de Automação&body=Olá!%0A%0AFiz o diagnóstico no site e gostaria de conversar.%0A%0AResumo:%0A- Setor: ${result.industry}%0A- Horas liberadas: ${result.weeklyHoursSaved}h/semana%0A- Economia: ${formatCurrency(result.monthlyValueRecovered)}/mês%0A- Investimento: ${formatCurrency(result.estimatedRetainerMin)}-${formatCurrency(result.estimatedRetainerMax)}/mês%0A- ROI: ${result.roiMultiplier}x%0A%0AAguardo contato!`}
                className="inline-block px-8 py-4 text-sm font-medium text-white bg-brand-primary hover:bg-brand-primary-dark transition-colors text-center"
              >
                Agendar conversa gratuita
              </a>
              <button
                onClick={resetQuiz}
                className="px-8 py-4 text-sm font-medium text-brand-muted hover:text-brand-black border border-brand-border hover:border-brand-black transition-colors"
              >
                Refazer diagnóstico
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
