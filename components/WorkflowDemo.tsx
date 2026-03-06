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
  process: { title: string; subtitle: string; animationType: 'scan' | 'gear' | 'sync' }[]
  outputs: { title: string; subtitle: string; metric?: string }[]
}

const variations: Variation[] = [
  {
    id: 0,
    name: 'Saúde',
    trigger: { title: 'Novo paciente', subtitle: 'Cadastro recebido' },
    process: [
      { title: 'Coletando dados', subtitle: 'Histórico médico', animationType: 'scan' },
      { title: 'Processando', subtitle: 'Análise automática', animationType: 'gear' },
      { title: 'Gerando prontuário', subtitle: 'Documento preparado', animationType: 'sync' },
    ],
    outputs: [
      { title: 'Prontuário atualizado', subtitle: 'Sistema de gestão', metric: '2.3s' },
      { title: 'Médico notificado', subtitle: 'Agenda atualizada', metric: '100%' },
    ],
  },
  {
    id: 1,
    name: 'Serviços',
    trigger: { title: 'Lead recebido', subtitle: 'Formulário enviado' },
    process: [
      { title: 'Qualificando', subtitle: 'Dados validados', animationType: 'scan' },
      { title: 'Enriquecendo', subtitle: 'Info complementar', animationType: 'gear' },
      { title: 'Classificando', subtitle: 'Score atribuído', animationType: 'sync' },
    ],
    outputs: [
      { title: 'CRM atualizado', subtitle: 'Contato criado', metric: '1.8s' },
      { title: 'Equipe notificada', subtitle: 'Tarefa criada', metric: '100%' },
    ],
  },
  {
    id: 2,
    name: 'Agro',
    trigger: { title: 'Pedido de insumos', subtitle: 'Fornecedor' },
    process: [
      { title: 'Cotando preços', subtitle: 'Comparativo', animationType: 'scan' },
      { title: 'Processando', subtitle: 'Melhor opção', animationType: 'gear' },
      { title: 'Registrando entrega', subtitle: 'Estoque atualizado', animationType: 'sync' },
    ],
    outputs: [
      { title: 'Estoque atualizado', subtitle: 'Entrada registrada', metric: '1.2s' },
      { title: 'Equipe notificada', subtitle: 'Campo informado', metric: '100%' },
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
              background: activeVariation === v.id ? '#d14800' : '#fff',
              color: activeVariation === v.id ? '#fff' : '#525252',
              boxShadow:
                activeVariation === v.id
                  ? `0 4px 14px rgba(209, 72, 0, 0.35)`
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
          minHeight: '520px',
        }}
      >
        {/* SVG Connectors - adjusted for better alignment */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
          viewBox="0 0 900 520"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Trigger to Process Rail */}
          <line
            x1="450"
            y1="85"
            x2="450"
            y2="125"
            stroke={process1Active ? LINE_ACTIVE : LINE_INACTIVE}
            strokeWidth="2"
            style={{ transition: 'stroke 600ms ease' }}
          />
          <circle
            cx="450"
            cy="85"
            r="4"
            fill={process1Active ? LINE_ACTIVE : LINE_INACTIVE}
            style={{ transition: 'fill 600ms ease' }}
          />

          {/* Left branch to Process 1 */}
          <path
            d="M 450 125 Q 450 145 430 145 L 195 145 Q 175 145 175 165 L 175 175"
            fill="none"
            stroke={process1Active ? LINE_ACTIVE : LINE_INACTIVE}
            strokeWidth="2"
            style={{ transition: 'stroke 600ms ease' }}
          />
          <circle
            cx="175"
            cy="175"
            r="4"
            fill={process1Active ? LINE_ACTIVE : LINE_INACTIVE}
            style={{ transition: 'fill 600ms ease' }}
          />

          {/* Center branch to Process 2 */}
          <line
            x1="450"
            y1="125"
            x2="450"
            y2="175"
            stroke={process2Active ? LINE_ACTIVE : LINE_INACTIVE}
            strokeWidth="2"
            style={{ transition: 'stroke 600ms ease' }}
          />
          <circle
            cx="450"
            cy="175"
            r="4"
            fill={process2Active ? LINE_ACTIVE : LINE_INACTIVE}
            style={{ transition: 'fill 600ms ease' }}
          />

          {/* Right branch to Process 3 */}
          <path
            d="M 450 125 Q 450 145 470 145 L 705 145 Q 725 145 725 165 L 725 175"
            fill="none"
            stroke={process3Active ? LINE_ACTIVE : LINE_INACTIVE}
            strokeWidth="2"
            style={{ transition: 'stroke 600ms ease' }}
          />
          <circle
            cx="725"
            cy="175"
            r="4"
            fill={process3Active ? LINE_ACTIVE : LINE_INACTIVE}
            style={{ transition: 'fill 600ms ease' }}
          />

          {/* Process to Output Rail */}
          <line
            x1="450"
            y1="310"
            x2="450"
            y2="350"
            stroke={output1Active ? LINE_ACTIVE : LINE_INACTIVE}
            strokeWidth="2"
            style={{ transition: 'stroke 600ms ease' }}
          />
          <circle
            cx="450"
            cy="310"
            r="4"
            fill={output1Active ? LINE_ACTIVE : LINE_INACTIVE}
            style={{ transition: 'fill 600ms ease' }}
          />

          {/* Left branch to Output 1 */}
          <path
            d="M 450 350 Q 450 370 430 370 L 320 370 Q 300 370 300 390 L 300 400"
            fill="none"
            stroke={output1Active ? LINE_ACTIVE : LINE_INACTIVE}
            strokeWidth="2"
            style={{ transition: 'stroke 600ms ease' }}
          />
          <circle
            cx="300"
            cy="400"
            r="4"
            fill={output1Active ? LINE_ACTIVE : LINE_INACTIVE}
            style={{ transition: 'fill 600ms ease' }}
          />

          {/* Right branch to Output 2 */}
          <path
            d="M 450 350 Q 450 370 470 370 L 580 370 Q 600 370 600 390 L 600 400"
            fill="none"
            stroke={output2Active ? LINE_ACTIVE : LINE_INACTIVE}
            strokeWidth="2"
            style={{ transition: 'stroke 600ms ease' }}
          />
          <circle
            cx="600"
            cy="400"
            r="4"
            fill={output2Active ? LINE_ACTIVE : LINE_INACTIVE}
            style={{ transition: 'fill 600ms ease' }}
          />
        </svg>

        {/* Cards */}
        <div className="relative" style={{ zIndex: 1 }}>
          {/* Trigger Card */}
          <div className="flex justify-center mb-16">
            <TriggerCard active={triggerActive} data={variation.trigger} />
          </div>

          {/* Process Cards Row */}
          <div className="grid grid-cols-3 gap-6 mb-16">
            <ProcessCard active={process1Active} data={variation.process[0]} delay={0} />
            <ProcessCard active={process2Active} data={variation.process[1]} delay={100} />
            <ProcessCard active={process3Active} data={variation.process[2]} delay={200} />
          </div>

          {/* Output Cards Row */}
          <div className="flex justify-center gap-8">
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
            className="w-0.5 h-8"
            style={{
              background: process1Active ? LINE_ACTIVE : LINE_INACTIVE,
              transition: 'background 600ms ease',
            }}
          />
        </div>

        {/* Process Cards */}
        <div className="space-y-4 mb-4">
          <ProcessCard active={process1Active} data={variation.process[0]} delay={0} />
          <ProcessCard active={process2Active} data={variation.process[1]} delay={100} />
          <ProcessCard active={process3Active} data={variation.process[2]} delay={200} />
        </div>

        {/* Connector */}
        <div className="flex justify-center mb-4">
          <div
            className="w-0.5 h-8"
            style={{
              background: output1Active ? LINE_ACTIVE : LINE_INACTIVE,
              transition: 'background 600ms ease',
            }}
          />
        </div>

        {/* Output Cards */}
        <div className="space-y-4">
          <OutputCard active={output1Active} data={variation.outputs[0]} delay={0} />
          <OutputCard active={output2Active} data={variation.outputs[1]} delay={100} />
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes scan {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(100%); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes syncPulse {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

// Card Components
function TriggerCard({ active, data }: { active: boolean; data: { title: string; subtitle: string } }) {
  return (
    <div
      className="bg-white rounded-xl px-6 py-5 border-2 transition-all duration-500"
      style={{
        borderColor: active ? ACCENT_BLUE : '#f0f0f0',
        boxShadow: active
          ? '0 0 0 4px rgba(59, 130, 246, 0.1), 0 8px 24px rgba(0,0,0,0.08)'
          : '0 0 0 1px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.06)',
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0) scale(1)' : 'translateY(-12px) scale(0.96)',
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{ background: active ? `${ACCENT_BLUE}15` : '#f5f5f5' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ACCENT_BLUE} strokeWidth="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>
        <div>
          <p className="text-lg font-semibold text-neutral-900">{data.title}</p>
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
  data: { title: string; subtitle: string; animationType: 'scan' | 'gear' | 'sync' }
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
      <p className="text-xs text-neutral-500 mb-4">{data.subtitle}</p>

      {/* Individual animation based on type */}
      <div className="h-8 relative overflow-hidden rounded-lg bg-neutral-50">
        {data.animationType === 'scan' && (
          <ScanAnimation active={active} />
        )}
        {data.animationType === 'gear' && (
          <GearAnimation active={active} />
        )}
        {data.animationType === 'sync' && (
          <SyncAnimation active={active} />
        )}
      </div>
    </div>
  )
}

function ScanAnimation({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-1">
      {/* Document icon */}
      <div className="relative w-6 h-8 border-2 border-blue-300 rounded bg-blue-50">
        <div className="absolute inset-x-1 top-1 space-y-0.5">
          <div className="h-0.5 bg-blue-200 rounded" />
          <div className="h-0.5 bg-blue-200 rounded w-3/4" />
          <div className="h-0.5 bg-blue-200 rounded w-1/2" />
        </div>
        {/* Scan line */}
        <div
          className="absolute left-0 right-0 h-0.5 bg-blue-500"
          style={{
            animation: active ? 'scan 1.5s ease-in-out infinite' : 'none',
            top: '20%',
          }}
        />
      </div>
      <span
        className="text-xs font-medium text-blue-600 ml-2 transition-opacity duration-300"
        style={{ opacity: active ? 1 : 0 }}
      >
        Lendo...
      </span>
    </div>
  )
}

function GearAnimation({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-2">
      <div
        className="w-6 h-6 text-blue-500"
        style={{
          animation: active ? 'spin 2s linear infinite' : 'none',
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      </div>
      <div
        className="w-4 h-4 text-blue-400"
        style={{
          animation: active ? 'spin 1.5s linear infinite reverse' : 'none',
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      </div>
      <span
        className="text-xs font-medium text-blue-600 ml-1 transition-opacity duration-300"
        style={{ opacity: active ? 1 : 0 }}
      >
        Processando
      </span>
    </div>
  )
}

function SyncAnimation({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-2">
      {/* Sync arrows */}
      <div className="flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-blue-500"
            style={{
              animation: active ? `syncPulse 1s ease-in-out infinite ${i * 0.2}s` : 'none',
            }}
          />
        ))}
      </div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        className="ml-1"
        style={{
          animation: active ? 'spin 2s linear infinite' : 'none',
        }}
      >
        <path d="M23 4v6h-6M1 20v-6h6" />
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
      </svg>
      <span
        className="text-xs font-medium text-blue-600 ml-1 transition-opacity duration-300"
        style={{ opacity: active ? 1 : 0 }}
      >
        Sincronizando
      </span>
    </div>
  )
}

function OutputCard({
  active,
  data,
  delay,
}: {
  active: boolean
  data: { title: string; subtitle: string; metric?: string }
  delay: number
}) {
  return (
    <div
      className="bg-white rounded-2xl p-6 transition-all duration-500"
      style={{
        border: active ? `3px solid ${ACCENT_GREEN}` : '2px solid #e5e5e5',
        boxShadow: active
          ? `0 0 0 6px rgba(34, 197, 94, 0.15), 0 8px 32px rgba(34, 197, 94, 0.2)`
          : '0 0 0 1px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.06)',
        opacity: active ? 1 : 0.5,
        transform: active ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.95)',
        transitionDelay: `${delay}ms`,
        minWidth: '220px',
      }}
    >
      {/* Success header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500"
          style={{
            background: active ? `${ACCENT_GREEN}15` : '#f5f5f5',
            transform: active ? 'scale(1)' : 'scale(0.8)',
          }}
        >
          {/* Animated checkmark */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={ACCENT_GREEN}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M20 6L9 17l-5-5"
              style={{
                strokeDasharray: 30,
                strokeDashoffset: active ? 0 : 30,
                transition: 'stroke-dashoffset 600ms ease-out',
                transitionDelay: active ? `${delay + 200}ms` : '0ms',
              }}
            />
          </svg>
        </div>
        <div>
          <p
            className="text-base font-semibold transition-colors duration-300"
            style={{ color: active ? '#171717' : '#a3a3a3' }}
          >
            {data.title}
          </p>
          <p className="text-sm text-neutral-500">{data.subtitle}</p>
        </div>
      </div>

      {/* Success metric */}
      {data.metric && (
        <div
          className="flex items-center justify-between pt-3 border-t border-neutral-100"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 400ms ease',
            transitionDelay: active ? `${delay + 400}ms` : '0ms',
          }}
        >
          <span className="text-xs text-neutral-500">
            {data.metric.includes('%') ? 'Taxa de sucesso' : 'Tempo de execução'}
          </span>
          <span className="text-lg font-bold text-green-600">{data.metric}</span>
        </div>
      )}
    </div>
  )
}
