'use client'

import { useState, useEffect } from 'react'

/**
 * WorkflowDemo - Full workflow demonstration with industry tabs
 * Features: Elbow connectors, animated cards, industry variations
 */

const ACCENT_BLUE = '#3b82f6'
const ACCENT_GREEN = '#22c55e'
const LINE_INACTIVE = '#e5e5e5'
const LINE_ACTIVE = '#d4d4d4'

interface Variation {
  id: number
  name: string
  trigger: { title: string; subtitle: string }
  process: { title: string; subtitle: string }[]
  outputs: { title: string; subtitle: string }[]
}

const variations: Variation[] = [
  {
    id: 0,
    name: 'Saúde',
    trigger: { title: 'Novo paciente', subtitle: 'Cadastro recebido' },
    process: [
      { title: 'Coletando dados', subtitle: 'Histórico médico' },
      { title: 'Processando', subtitle: 'Análise automática' },
      { title: 'Gerando prontuário', subtitle: 'Documento preparado' },
    ],
    outputs: [
      { title: 'Prontuário atualizado', subtitle: 'Sistema de gestão' },
      { title: 'Médico notificado', subtitle: 'Agenda atualizada' },
    ],
  },
  {
    id: 1,
    name: 'Serviços',
    trigger: { title: 'Lead recebido', subtitle: 'Formulário enviado' },
    process: [
      { title: 'Qualificando', subtitle: 'Dados validados' },
      { title: 'Enriquecendo', subtitle: 'Info complementar' },
      { title: 'Classificando', subtitle: 'Score atribuído' },
    ],
    outputs: [
      { title: 'CRM atualizado', subtitle: 'Contato criado' },
      { title: 'Equipe notificada', subtitle: 'Tarefa criada' },
    ],
  },
  {
    id: 2,
    name: 'Varejo',
    trigger: { title: 'Pedido realizado', subtitle: 'E-commerce' },
    process: [
      { title: 'Verificando estoque', subtitle: 'Disponibilidade' },
      { title: 'Processando', subtitle: 'Separação' },
      { title: 'Gerando etiqueta', subtitle: 'Envio preparado' },
    ],
    outputs: [
      { title: 'Estoque atualizado', subtitle: 'Baixa automática' },
      { title: 'Cliente notificado', subtitle: 'Tracking enviado' },
    ],
  },
]

export default function WorkflowDemo() {
  const [activeVariation, setActiveVariation] = useState(0)
  const [step, setStep] = useState(-1)

  // Reset animation when variation changes
  useEffect(() => {
    setStep(-1)
  }, [activeVariation])

  // Animation loop
  useEffect(() => {
    if (step === -1) {
      const timer = setTimeout(() => setStep(0), 600)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(
      () => {
        if (step >= 5) {
          setTimeout(() => setStep(-1), 3000)
        } else {
          setStep((prev) => prev + 1)
        }
      },
      step === 0 ? 1000 : 1200
    )

    return () => clearTimeout(timer)
  }, [step])

  const variation = variations[activeVariation]
  const triggerActive = step >= 0
  const process1Active = step >= 1
  const process2Active = step >= 2
  const process3Active = step >= 3
  const output1Active = step >= 4
  const output2Active = step >= 5

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-8">
        {variations.map((v) => (
          <button
            key={v.id}
            onClick={() => setActiveVariation(v.id)}
            className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
            style={{
              background: activeVariation === v.id ? '#8b2020' : '#fff',
              color: activeVariation === v.id ? '#fff' : '#525252',
              boxShadow:
                activeVariation === v.id
                  ? `0 4px 14px rgba(139, 32, 32, 0.35)`
                  : '0 0 0 1px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.06)',
            }}
          >
            {v.name}
          </button>
        ))}
      </div>

      {/* Workflow Container - Desktop */}
      <div
        className="hidden md:block relative mx-auto rounded-2xl p-8 lg:p-12"
        style={{
          maxWidth: '900px',
          background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)',
          minHeight: '480px',
        }}
      >
        {/* SVG Connectors */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
          viewBox="0 0 900 480"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Trigger to Process Rail */}
          <line
            x1="450"
            y1="75"
            x2="450"
            y2="110"
            stroke={process1Active ? LINE_ACTIVE : LINE_INACTIVE}
            strokeWidth="1.5"
            style={{ transition: 'stroke 600ms ease' }}
          />
          <circle
            cx="450"
            cy="75"
            r="3"
            fill={process1Active ? LINE_ACTIVE : LINE_INACTIVE}
            style={{ transition: 'fill 600ms ease' }}
          />

          {/* Left branch to Process 1 */}
          <path
            d="M 450 110 Q 450 125 435 125 L 200 125 Q 185 125 185 140 L 185 165"
            fill="none"
            stroke={process1Active ? LINE_ACTIVE : LINE_INACTIVE}
            strokeWidth="1.5"
            style={{ transition: 'stroke 600ms ease' }}
          />
          <circle
            cx="185"
            cy="165"
            r="3"
            fill={process1Active ? LINE_ACTIVE : LINE_INACTIVE}
            style={{ transition: 'fill 600ms ease' }}
          />

          {/* Center branch to Process 2 */}
          <line
            x1="450"
            y1="110"
            x2="450"
            y2="165"
            stroke={process2Active ? LINE_ACTIVE : LINE_INACTIVE}
            strokeWidth="1.5"
            style={{ transition: 'stroke 600ms ease' }}
          />
          <circle
            cx="450"
            cy="165"
            r="3"
            fill={process2Active ? LINE_ACTIVE : LINE_INACTIVE}
            style={{ transition: 'fill 600ms ease' }}
          />

          {/* Right branch to Process 3 */}
          <path
            d="M 450 110 Q 450 125 465 125 L 700 125 Q 715 125 715 140 L 715 165"
            fill="none"
            stroke={process3Active ? LINE_ACTIVE : LINE_INACTIVE}
            strokeWidth="1.5"
            style={{ transition: 'stroke 600ms ease' }}
          />
          <circle
            cx="715"
            cy="165"
            r="3"
            fill={process3Active ? LINE_ACTIVE : LINE_INACTIVE}
            style={{ transition: 'fill 600ms ease' }}
          />

          {/* Process to Output Rail */}
          <line
            x1="450"
            y1="285"
            x2="450"
            y2="320"
            stroke={output1Active ? LINE_ACTIVE : LINE_INACTIVE}
            strokeWidth="1.5"
            style={{ transition: 'stroke 600ms ease' }}
          />
          <circle
            cx="450"
            cy="285"
            r="3"
            fill={output1Active ? LINE_ACTIVE : LINE_INACTIVE}
            style={{ transition: 'fill 600ms ease' }}
          />

          {/* Left branch to Output 1 */}
          <path
            d="M 450 320 Q 450 335 435 335 L 320 335 Q 305 335 305 350 L 305 375"
            fill="none"
            stroke={output1Active ? LINE_ACTIVE : LINE_INACTIVE}
            strokeWidth="1.5"
            style={{ transition: 'stroke 600ms ease' }}
          />
          <circle
            cx="305"
            cy="375"
            r="3"
            fill={output1Active ? LINE_ACTIVE : LINE_INACTIVE}
            style={{ transition: 'fill 600ms ease' }}
          />

          {/* Right branch to Output 2 */}
          <path
            d="M 450 320 Q 450 335 465 335 L 580 335 Q 595 335 595 350 L 595 375"
            fill="none"
            stroke={output2Active ? LINE_ACTIVE : LINE_INACTIVE}
            strokeWidth="1.5"
            style={{ transition: 'stroke 600ms ease' }}
          />
          <circle
            cx="595"
            cy="375"
            r="3"
            fill={output2Active ? LINE_ACTIVE : LINE_INACTIVE}
            style={{ transition: 'fill 600ms ease' }}
          />
        </svg>

        {/* Cards */}
        <div className="relative" style={{ zIndex: 1 }}>
          {/* Trigger Card */}
          <div className="flex justify-center mb-14">
            <TriggerCard active={triggerActive} data={variation.trigger} />
          </div>

          {/* Process Cards Row */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            <ProcessCard active={process1Active} data={variation.process[0]} delay={0} />
            <ProcessCard active={process2Active} data={variation.process[1]} delay={100} />
            <ProcessCard active={process3Active} data={variation.process[2]} delay={200} />
          </div>

          {/* Output Cards Row */}
          <div className="flex justify-center gap-6">
            <OutputCard active={output1Active} data={variation.outputs[0]} delay={0} />
            <OutputCard active={output2Active} data={variation.outputs[1]} delay={100} />
          </div>
        </div>
      </div>

      {/* Workflow Container - Mobile */}
      <div
        className="md:hidden relative mx-auto rounded-2xl p-6"
        style={{
          background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)',
        }}
      >
        {/* Trigger Card */}
        <div className="mb-4">
          <TriggerCard active={triggerActive} data={variation.trigger} />
        </div>

        {/* Connector */}
        <div className="flex justify-center mb-4">
          <div
            className="w-px h-6"
            style={{
              background: process1Active ? LINE_ACTIVE : LINE_INACTIVE,
              transition: 'background 600ms ease',
            }}
          />
        </div>

        {/* Process Cards */}
        <div className="space-y-3 mb-4">
          <ProcessCard active={process1Active} data={variation.process[0]} delay={0} />
          <ProcessCard active={process2Active} data={variation.process[1]} delay={100} />
          <ProcessCard active={process3Active} data={variation.process[2]} delay={200} />
        </div>

        {/* Connector */}
        <div className="flex justify-center mb-4">
          <div
            className="w-px h-6"
            style={{
              background: output1Active ? LINE_ACTIVE : LINE_INACTIVE,
              transition: 'background 600ms ease',
            }}
          />
        </div>

        {/* Output Cards */}
        <div className="space-y-3">
          <OutputCard active={output1Active} data={variation.outputs[0]} delay={0} />
          <OutputCard active={output2Active} data={variation.outputs[1]} delay={100} />
        </div>
      </div>
    </div>
  )
}

// Card Components
function TriggerCard({ active, data }: { active: boolean; data: { title: string; subtitle: string } }) {
  return (
    <div
      className="bg-white rounded-xl px-6 py-4 border transition-all duration-500"
      style={{
        borderColor: active ? '#e5e5e5' : '#f5f5f5',
        boxShadow: '0 0 0 1px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.06)',
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0) scale(1)' : 'translateY(-12px) scale(0.96)',
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
          style={{ background: active ? `${ACCENT_BLUE}15` : '#f5f5f5' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ACCENT_BLUE} strokeWidth="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>
        <div>
          <p className="text-base font-semibold text-neutral-900">{data.title}</p>
          <p className="text-sm text-neutral-500">{data.subtitle}</p>
        </div>
      </div>
    </div>
  )
}

function ProcessCard({
  active,
  data,
  delay,
}: {
  active: boolean
  data: { title: string; subtitle: string }
  delay: number
}) {
  return (
    <div
      className="bg-white rounded-xl p-5 border transition-all duration-500"
      style={{
        borderColor: active ? '#e5e5e5' : '#f5f5f5',
        boxShadow: '0 0 0 1px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.06)',
        opacity: active ? 1 : 0.5,
        transform: active ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.97)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <p
        className="text-sm font-semibold mb-1 transition-colors duration-300"
        style={{ color: active ? '#171717' : '#a3a3a3' }}
      >
        {data.title}
      </p>
      <p className="text-xs text-neutral-500 mb-3">{data.subtitle}</p>

      {/* Mini animation */}
      <div className="flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              flex: 1,
              background: active ? ACCENT_BLUE : '#e5e5e5',
              opacity: active ? 1 - i * 0.25 : 0.5,
              transitionDelay: `${delay + i * 100}ms`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function OutputCard({
  active,
  data,
  delay,
}: {
  active: boolean
  data: { title: string; subtitle: string }
  delay: number
}) {
  return (
    <div
      className="bg-white rounded-xl px-5 py-4 flex items-center gap-4 transition-all duration-500"
      style={{
        border: active ? `2px solid ${ACCENT_GREEN}` : '1px solid #e5e5e5',
        boxShadow: active
          ? `0 0 0 1px rgba(34, 197, 94, 0.1), 0 4px 16px rgba(34, 197, 94, 0.15)`
          : '0 0 0 1px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.06)',
        opacity: active ? 1 : 0.5,
        transform: active ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.97)',
        transitionDelay: `${delay}ms`,
        minWidth: '180px',
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
        style={{ background: active ? `${ACCENT_GREEN}15` : '#f5f5f5' }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ACCENT_GREEN} strokeWidth="2.5">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <div>
        <p
          className="text-sm font-semibold transition-colors duration-300"
          style={{ color: active ? '#171717' : '#a3a3a3' }}
        >
          {data.title}
        </p>
        <p className="text-xs text-neutral-500">{data.subtitle}</p>
      </div>
    </div>
  )
}
