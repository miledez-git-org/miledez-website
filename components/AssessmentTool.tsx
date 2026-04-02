'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/primitives'
import { Input } from '@/components/ui/primitives'
import { Progress } from '@/components/ui/data-display/Progress'
import { cn } from '@/lib/utils'
import type { AssessmentFormData, AssessmentResponse } from '@/types/assessment'

// ---------------------------------------------------------------------------
// Data: Bottleneck options per industry
// ---------------------------------------------------------------------------

const bottleneckOptions: Record<
  AssessmentFormData['setor'],
  Array<{ value: string; label: string }>
> = {
  saude: [
    { value: 'agendamento', label: 'Agendamento de pacientes' },
    { value: 'prontuarios', label: 'Gestão de prontuários' },
    { value: 'followup', label: 'Follow-up pós-consulta' },
    { value: 'relatorios', label: 'Relatórios e conformidade' },
    { value: 'faturamento', label: 'Faturamento e cobranças' },
    { value: 'comunicacao', label: 'Comunicação com pacientes' },
  ],
  servicos: [
    { value: 'captacao', label: 'Captação de clientes' },
    { value: 'documentos', label: 'Gestão de documentos' },
    { value: 'relatorios', label: 'Emissão de relatórios' },
    { value: 'agendamento', label: 'Agendamento e follow-up' },
    { value: 'faturamento', label: 'Faturamento e cobranças' },
    { value: 'contratos', label: 'Gestão de contratos' },
  ],
  agropecuaria: [
    { value: 'equipamentos', label: 'Rastreamento de equipamentos' },
    { value: 'producao', label: 'Relatórios de produção' },
    { value: 'fornecedores', label: 'Gestão de fornecedores' },
    { value: 'conformidade', label: 'Conformidade e certificações' },
    { value: 'estoque', label: 'Controle de estoque e insumos' },
    { value: 'logistica', label: 'Logística e distribuição' },
  ],
}

// ---------------------------------------------------------------------------
// Data: Tools grouped by category (bundled by company/platform)
// ---------------------------------------------------------------------------

interface ToolCategory {
  label: string
  tools: string[]
  showFor?: AssessmentFormData['setor'][]
}

const toolCategories: ToolCategory[] = [
  {
    label: 'Comunicação',
    tools: ['WhatsApp', 'Slack', 'Zoom', 'Google Meet'],
  },
  {
    label: 'Produtividade',
    tools: ['Google (Gmail, Sheets, Docs, Drive)', 'Microsoft (Outlook, Excel, Teams, Word)', 'Trello', 'Notion', 'Asana'],
  },
  {
    label: 'CRM e Marketing',
    tools: ['Salesforce', 'HubSpot', 'RD Station', 'Pipedrive'],
  },
  {
    label: 'ERP e Gestão',
    tools: ['Totvs', 'Senior Sistemas', 'Sankhya', 'Omie', 'Bling', 'Tiny ERP', 'ContaAzul', 'Nibo'],
  },
  {
    label: 'Pagamentos',
    tools: ['Stone', 'Cielo', 'PagBank / PagSeguro', 'Mercado Pago'],
  },
  {
    label: 'Saúde',
    tools: ['iClinic', 'Doctoralia', 'Memed', 'HiDoctor', 'Clínica nas Nuvens', 'Tasy (Philips)', 'MV Sistemas'],
    showFor: ['saude'],
  },
  {
    label: 'Agro',
    tools: ['Aegro', 'Solinftec', 'Climate FieldView'],
    showFor: ['agropecuaria'],
  },
  {
    label: 'Outros',
    tools: ['Sistemas próprios', 'Outros'],
  },
]

// ---------------------------------------------------------------------------
// Industry definitions for Step 1
// ---------------------------------------------------------------------------

const industryOptions: Array<{
  value: AssessmentFormData['setor']
  label: string
  icon: React.ReactNode
}> = [
  {
    value: 'saude',
    label: 'Saúde',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6m0 0v6m0-6h6m-6 0H6" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
  },
  {
    value: 'servicos',
    label: 'Serviços Profissionais',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M12 12v4" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    value: 'agropecuaria',
    label: 'Agropecuária',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c-4 0-8-2-8-6 0-3 2-5 4-6" />
        <path d="M12 22c4 0 8-2 8-6 0-3-2-5-4-6" />
        <path d="M12 2v20" />
        <path d="M12 8c-2-2-5-2-7 0" />
        <path d="M12 8c2-2 5-2 7 0" />
        <path d="M12 14c-2-2-5-2-7 0" />
        <path d="M12 14c2-2 5-2 7 0" />
      </svg>
    ),
  },
]

// ---------------------------------------------------------------------------
// Step transition animation
// ---------------------------------------------------------------------------

const stepVariants = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
}

const stepTransition = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1] as const,
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="flex gap-1.5">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={cn(
              'w-2 h-2 rounded-full transition-colors duration-base',
              i < current ? 'bg-brand-secondary' : 'bg-neutral-200'
            )}
          />
        ))}
      </div>
      <span className="text-sm text-neutral-500">
        Passo {current} de {total}
      </span>
    </div>
  )
}

function RadioCard({
  label,
  icon,
  selected,
  onClick,
}: {
  label: string
  icon?: React.ReactNode
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={cn(
        'w-full text-left p-5 rounded-lg border transition-all duration-fast cursor-pointer',
        'flex items-center gap-4',
        'hover:border-neutral-400',
        selected
          ? 'border-brand-black ring-2 ring-brand-black'
          : 'border-neutral-200'
      )}
      style={selected ? undefined : { boxShadow: 'none' }}
    >
      {selected && (
        <span className="w-2.5 h-2.5 rounded-full bg-brand-secondary flex-shrink-0" />
      )}
      {!selected && (
        <span className="w-2.5 h-2.5 rounded-full border-2 border-neutral-300 flex-shrink-0" />
      )}
      {icon && (
        <span className="text-neutral-600 flex-shrink-0">{icon}</span>
      )}
      <span className="text-base font-medium text-neutral-800">{label}</span>
    </button>
  )
}

function MultiSelectDropdown({
  selected,
  onChange,
  setor,
  error,
}: {
  selected: string[]
  onChange: (tools: string[]) => void
  setor: AssessmentFormData['setor']
  error?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggle = (tool: string) => {
    if (selected.includes(tool)) {
      onChange(selected.filter((t) => t !== tool))
    } else {
      onChange([...selected, tool])
    }
  }

  const visibleCategories = toolCategories.filter(
    (cat) => !cat.showFor || cat.showFor.includes(setor)
  )

  const triggerLabel =
    selected.length === 0
      ? 'Selecione suas ferramentas'
      : selected.length === 1
        ? '1 ferramenta selecionada'
        : `${selected.length} ferramentas selecionadas`

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'h-11 w-full px-4 pr-10 text-left text-base',
          'bg-white rounded-md appearance-none',
          'border transition-all duration-fast ease-smooth',
          'hover:border-neutral-400',
          'focus:outline-none focus:border-accent-slate focus:ring-2 focus:ring-accent-slate-subtle',
          error
            ? 'border-semantic-error focus:border-semantic-error focus:ring-semantic-error-light'
            : 'border-neutral-300',
          selected.length === 0 ? 'text-neutral-400' : 'text-neutral-800'
        )}
      >
        {triggerLabel}
      </button>

      {/* Dropdown arrow */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={cn('transition-transform duration-fast', isOpen && 'rotate-180')}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {error && (
        <p className="mt-1.5 text-sm text-semantic-error">{error}</p>
      )}

      {isOpen && (
        <div
          className="absolute z-50 mt-1 w-full bg-white border border-neutral-200 rounded-lg max-h-72 overflow-y-auto"
          style={{ boxShadow: '3px 4px 12px rgba(0,0,0,0.10)' }}
        >
          {visibleCategories.map((cat) => (
            <div key={cat.label}>
              <div className="px-4 py-2 text-sm font-semibold text-neutral-500 bg-neutral-50 sticky top-0">
                {cat.label}
              </div>
              {cat.tools.map((tool) => (
                <label
                  key={tool}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-neutral-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(tool)}
                    onChange={() => toggle(tool)}
                    className="w-4 h-4 accent-brand-secondary rounded cursor-pointer"
                  />
                  <span className="text-base text-neutral-700">{tool}</span>
                </label>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function LoadingState() {
  const [messageIndex, setMessageIndex] = useState(0)
  const messages = [
    'Analisando seu negócio...',
    'Gerando seu plano personalizado...',
  ]

  useEffect(() => {
    const timer = setTimeout(() => setMessageIndex(1), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="text-center py-20">
      <Progress
        value={messageIndex === 0 ? 40 : 75}
        variant="brand"
        className="max-w-xs mx-auto mb-8"
      />
      <AnimatePresence mode="wait">
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="text-lg text-neutral-600 font-display"
        >
          {messages[messageIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

function ResultCard({
  workflow,
}: {
  workflow: { nome: string; ferramentas: string; resultado: string; tempo_economizado: string }
}) {
  return (
    <div
      className="bg-brand-black rounded-lg p-6 text-white"
      style={{ boxShadow: '3px 4px 12px rgba(0,0,0,0.10)' }}
    >
      <h3 className="font-display font-bold text-lg mb-3">{workflow.nome}</h3>
      <div className="space-y-2 text-sm">
        <p>
          <span className="text-white/60">Ferramentas:</span>{' '}
          <span className="text-white">{workflow.ferramentas}</span>
        </p>
        <p>
          <span className="text-white/60">Resultado:</span>{' '}
          <span className="text-white">{workflow.resultado}</span>
        </p>
        <p className="pt-2 border-t border-white/10">
          <span className="text-brand-secondary font-semibold">
            {workflow.tempo_economizado}
          </span>{' '}
          <span className="text-white/60">economizados por semana</span>
        </p>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

type AssessmentStep = 1 | 2 | 3 | 4
type AssessmentPhase = 'form' | 'loading' | 'results' | 'error'

export default function AssessmentTool() {
  const [formData, setFormData] = useState<Partial<AssessmentFormData>>({})
  const [step, setStep] = useState<AssessmentStep>(1)
  const [phase, setPhase] = useState<AssessmentPhase>('form')
  const [results, setResults] = useState<AssessmentResponse | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // ---- Validation ----

  function validateStep(s: AssessmentStep): boolean {
    const newErrors: Record<string, string> = {}

    switch (s) {
      case 1:
        if (!formData.setor) newErrors.setor = 'Selecione um setor'
        break
      case 2:
        if (!formData.gargalo) newErrors.gargalo = 'Selecione um gargalo'
        break
      case 3:
        if (!formData.ferramentas || formData.ferramentas.length === 0)
          newErrors.ferramentas = 'Selecione pelo menos uma ferramenta'
        break
      case 4:
        if (!formData.nome?.trim()) newErrors.nome = 'Informe seu nome'
        if (!formData.email?.trim()) {
          newErrors.email = 'Informe seu e-mail'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'E-mail inválido'
        }
        if (!formData.empresa?.trim()) newErrors.empresa = 'Informe o nome da empresa'
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleNext() {
    if (!validateStep(step)) return
    if (step < 4) {
      setStep((step + 1) as AssessmentStep)
      setErrors({})
    }
  }

  function handleBack() {
    if (step > 1) {
      setStep((step - 1) as AssessmentStep)
      setErrors({})
    }
  }

  // ---- Submit ----

  async function handleSubmit() {
    if (!validateStep(4)) return

    setPhase('loading')

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_ASSESSMENT_WEBHOOK_URL
    if (!webhookUrl) {
      setPhase('error')
      return
    }

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 25000)

    try {
      const payload = {
        ...formData,
        ferramentas: (formData.ferramentas ?? []).join(', '),
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })

      clearTimeout(timeout)

      if (!response.ok) throw new Error(`HTTP ${response.status}`)

      const data: AssessmentResponse = await response.json()
      setResults(data)
      setPhase('results')
    } catch {
      setPhase('error')
    }
  }

  // ---- Reset ----

  function handleReset() {
    setFormData({})
    setStep(1)
    setPhase('form')
    setResults(null)
    setErrors({})
  }

  // ---- Phase: Loading ----

  if (phase === 'loading') {
    return <LoadingState />
  }

  // ---- Phase: Results ----

  if (phase === 'results' && results?.results?.workflows) {
    const sectorLabel =
      formData.setor === 'saude'
        ? 'Saúde'
        : formData.setor === 'servicos'
          ? 'Serviços Profissionais'
          : 'Agropecuária'

    return (
      <div>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 mb-2">
          Seu Plano de Automação Personalizado
        </h2>
        <p className="text-neutral-600 mb-8">
          Baseado no setor de {sectorLabel}, focado em {formData.gargalo}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {results.results.workflows.map((wf, i) => (
            <ResultCard key={i} workflow={wf} />
          ))}
        </div>

        <p className="text-neutral-500 text-sm mb-6">
          Também enviamos esse plano para {formData.email}.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open('https://wa.me/5531999999999', '_blank')}
          >
            Agendar uma conversa gratuita
          </Button>
          <Button variant="ghost" size="lg" onClick={handleReset}>
            Voltar ao início
          </Button>
        </div>
      </div>
    )
  }

  // ---- Phase: Error ----

  if (phase === 'error') {
    return (
      <div className="text-center py-20">
        <h2 className="font-display font-bold text-2xl text-neutral-900 mb-3">
          Algo deu errado
        </h2>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          Não conseguimos gerar seu plano agora. Nosso time já foi notificado.
          Tente novamente em alguns instantes.
        </p>
        <Button variant="primary" size="lg" onClick={() => setPhase('form')}>
          Tentar novamente
        </Button>
      </div>
    )
  }

  // ---- Phase: Form ----

  return (
    <div>
      <StepIndicator current={step} total={4} />

      <AnimatePresence mode="wait">
        {/* Step 1: Industry */}
        {step === 1 && (
          <motion.div
            key="step-1"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={stepTransition}
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 mb-2">
              Descubra como automatizar seu negócio
            </h2>
            <p className="text-neutral-600 mb-8">
              Responda 4 perguntas rápidas e receba um plano personalizado de automação em segundos.
            </p>

            <div className="space-y-3" role="radiogroup" aria-label="Setor">
              {industryOptions.map((opt) => (
                <RadioCard
                  key={opt.value}
                  label={opt.label}
                  icon={opt.icon}
                  selected={formData.setor === opt.value}
                  onClick={() => {
                    setFormData({ ...formData, setor: opt.value, gargalo: undefined })
                    setErrors({})
                  }}
                />
              ))}
            </div>

            {errors.setor && (
              <p className="mt-3 text-sm text-semantic-error">{errors.setor}</p>
            )}

            <div className="mt-8">
              <Button variant="primary" size="lg" onClick={handleNext}>
                Continuar
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Bottleneck */}
        {step === 2 && formData.setor && (
          <motion.div
            key="step-2"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={stepTransition}
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 mb-2">
              Qual é o maior gargalo no seu dia a dia?
            </h2>
            <p className="text-neutral-600 mb-8">
              Selecione o processo que mais consome tempo da sua equipe.
            </p>

            <div className="space-y-3" role="radiogroup" aria-label="Gargalo">
              {bottleneckOptions[formData.setor].map((opt) => (
                <RadioCard
                  key={opt.value}
                  label={opt.label}
                  selected={formData.gargalo === opt.label}
                  onClick={() => {
                    setFormData({ ...formData, gargalo: opt.label })
                    setErrors({})
                  }}
                />
              ))}
            </div>

            {errors.gargalo && (
              <p className="mt-3 text-sm text-semantic-error">{errors.gargalo}</p>
            )}

            <div className="mt-8 flex gap-3">
              <Button variant="ghost" size="lg" onClick={handleBack}>
                Voltar
              </Button>
              <Button variant="primary" size="lg" onClick={handleNext}>
                Continuar
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Tools */}
        {step === 3 && formData.setor && (
          <motion.div
            key="step-3"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={stepTransition}
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 mb-2">
              Quais ferramentas você usa hoje?
            </h2>
            <p className="text-neutral-600 mb-8">
              Selecione todas as ferramentas e sistemas que sua equipe utiliza no dia a dia.
            </p>

            <MultiSelectDropdown
              selected={formData.ferramentas ?? []}
              onChange={(tools) => {
                setFormData({ ...formData, ferramentas: tools })
                if (tools.length > 0) {
                  setErrors((prev) => {
                    const next = { ...prev }
                    delete next.ferramentas
                    return next
                  })
                }
              }}
              setor={formData.setor}
              error={errors.ferramentas}
            />

            <div className="mt-8 flex gap-3">
              <Button variant="ghost" size="lg" onClick={handleBack}>
                Voltar
              </Button>
              <Button variant="primary" size="lg" onClick={handleNext}>
                Continuar
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Contact */}
        {step === 4 && (
          <motion.div
            key="step-4"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={stepTransition}
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 mb-2">
              Onde enviamos seu plano personalizado?
            </h2>
            <p className="text-neutral-600 mb-8">
              Preencha seus dados para receber o resultado por e-mail.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                  Seu nome
                </label>
                <Input
                  placeholder="Nome completo"
                  value={formData.nome ?? ''}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  error={errors.nome}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                  Seu melhor e-mail
                </label>
                <Input
                  type="email"
                  placeholder="email@empresa.com.br"
                  value={formData.email ?? ''}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                  Nome da empresa
                </label>
                <Input
                  placeholder="Sua empresa"
                  value={formData.empresa ?? ''}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  error={errors.empresa}
                />
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Button variant="ghost" size="lg" onClick={handleBack}>
                Voltar
              </Button>
              <Button variant="primary" size="lg" onClick={handleSubmit}>
                Gerar meu plano de automação
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
