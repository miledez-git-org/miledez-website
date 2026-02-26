'use client'

import { useState, useEffect, useRef } from 'react'

/**
 * WorkflowAnimationSection - Animated workflow pipeline demonstration
 * Shows different automation workflows cycling through with staggered card animations
 * Clickable tabs + auto-play/pause for user control
 */

// Workflow Data
interface WorkflowModule {
  label: string
  sub: string
  logo: string
  trigger?: boolean
}

interface Workflow {
  title: string
  desc: string
  outcome: string
  modules: WorkflowModule[]
}

const WORKFLOWS: Workflow[] = [
  {
    title: 'Cobrança sem esforço',
    desc: 'Faturamento e cobrança acontecem sozinhos',
    outcome: '4h economizadas por semana',
    modules: [
      { label: 'Agenda', sub: 'Vencimento detectado', logo: 'google-calendar.svg', trigger: true },
      { label: 'Gmail', sub: 'Cliente recebe o boleto', logo: 'gmail.svg' },
      { label: 'Pix', sub: 'Pagamento confirmado', logo: 'pix.svg' },
      { label: 'Planilha', sub: 'Registro atualizado', logo: 'google-sheets.svg' },
    ],
  },
  {
    title: 'Onboarding de clientes',
    desc: 'Novos clientes prontos sem trabalho manual',
    outcome: 'Clientes prontos em minutos',
    modules: [
      { label: 'Gmail', sub: 'Novo cliente chega', logo: 'gmail.svg', trigger: true },
      { label: 'Drive', sub: 'Pasta criada com docs', logo: 'google-drive.svg' },
      { label: 'Planilha', sub: 'Dados organizados', logo: 'google-sheets.svg' },
      { label: 'Equipe', sub: 'Time é avisado', logo: 'slack.svg' },
    ],
  },
  {
    title: 'Relatórios prontos',
    desc: 'Dados compilados e enviados automaticamente',
    outcome: '1 dia inteiro livre por mês',
    modules: [
      { label: 'Calendário', sub: 'Fim do período', logo: 'google-calendar.svg', trigger: true },
      { label: 'Planilha', sub: 'Dados reunidos', logo: 'google-sheets.svg' },
      { label: 'IA', sub: 'Resumo gerado', logo: 'openai.svg' },
      { label: 'E-mail', sub: 'Equipe recebe tudo', logo: 'gmail.svg' },
    ],
  },
  {
    title: 'Documentos organizados',
    desc: 'Receba, classifique e armazene sem tocar',
    outcome: '0 documentos perdidos',
    modules: [
      { label: 'E-mail', sub: 'Documento chega', logo: 'gmail.svg', trigger: true },
      { label: 'IA', sub: 'Leitura automática', logo: 'openai.svg' },
      { label: 'Drive', sub: 'Salvo na pasta certa', logo: 'google-drive.svg' },
      { label: 'Equipe', sub: 'Responsável avisado', logo: 'slack.svg' },
    ],
  },
]

// Timing constants
const STAGGER = 420
const HOLD = 3400
const FADE_TIMEOUT = 700

export default function WorkflowAnimationSection() {
  const [wIdx, setWIdx] = useState(0)
  const [visible, setVisible] = useState(0)
  const [phase, setPhase] = useState<'idle' | 'building' | 'showing' | 'fading'>('idle')
  const [isPaused, setIsPaused] = useState(false)
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null)

  const wf = WORKFLOWS[wIdx]
  const total = wf.modules.length
  const isFading = phase === 'fading'

  const clearResumeTimer = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = null
    }
  }

  const startResumeTimer = (ms: number) => {
    clearResumeTimer()
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false)
    }, ms)
  }

  const handleTabClick = (i: number) => {
    if (i === wIdx) return
    clearResumeTimer()
    setIsPaused(true)
    setWIdx(i)
    setVisible(1)
    setPhase('building')
    startResumeTimer(8000)
  }

  const handlePipelineEnter = () => {
    clearResumeTimer()
    setIsPaused(true)
    startResumeTimer(8000)
  }

  const handlePipelineLeave = () => {
    clearResumeTimer()
    startResumeTimer(3000)
  }

  // Cleanup resume timer on unmount
  useEffect(() => {
    return () => clearResumeTimer()
  }, [])

  // Initial delay before first build
  useEffect(() => {
    const t = setTimeout(() => setPhase('building'), 600)
    return () => clearTimeout(t)
  }, [])

  // Animation state machine
  useEffect(() => {
    let t: NodeJS.Timeout
    switch (phase) {
      case 'building':
        if (visible < total) {
          t = setTimeout(() => setVisible((v) => v + 1), STAGGER)
        } else {
          t = setTimeout(() => setPhase('showing'), 200)
        }
        break
      case 'showing':
        if (!isPaused) {
          t = setTimeout(() => setPhase('fading'), HOLD)
        }
        break
      case 'fading':
        t = setTimeout(() => {
          setWIdx((i) => (i + 1) % WORKFLOWS.length)
          setVisible(1)
          setPhase('building')
        }, FADE_TIMEOUT)
        break
      default:
        break
    }
    return () => clearTimeout(t)
  }, [phase, visible, total, isPaused])

  const getCardClass = (i: number) => {
    const base = 'wf-anim-card'
    if (isFading && i < visible) return `${base} fading`
    if (i < visible) return `${base} visible`
    return base
  }

  const getConnClass = (i: number) => {
    const base = 'wf-anim-conn'
    if (isFading && i + 1 < visible) return `${base} fading`
    if (i + 1 < visible) return `${base} visible`
    return base
  }

  return (
    <>
      <style>{animationStyles}</style>
      <section className="bg-white py-16 md:py-24 flex flex-col items-center overflow-hidden">
        {/* Header */}
        <div className="text-center mb-11 max-w-[560px] px-6">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-primary mb-3">
            Como funciona
          </p>
          <h2 className="font-display font-bold text-[clamp(28px,4vw,38px)] tracking-tight text-brand-black mb-3.5 leading-[1.15]">
            Seu negócio no<br />
            <span className="text-brand-primary">piloto automático</span>
          </h2>
          <p className="text-base leading-relaxed text-brand-muted">
            Veja como tarefas repetitivas do dia a dia passam a acontecer
            sozinhas — sem esforço da sua equipe.
          </p>
        </div>

        {/* Workflow tabs */}
        <div className="wf-anim-tabs">
          {WORKFLOWS.map((w, i) => (
            <button
              key={i}
              className={`wf-anim-tab${i === wIdx ? ' active' : ''}`}
              onClick={() => handleTabClick(i)}
            >
              {w.title}
            </button>
          ))}
        </div>

        {/* Pipeline */}
        <div
          className="flex items-center justify-center flex-nowrap py-2 min-h-[170px] wf-anim-pipeline"
          onMouseEnter={handlePipelineEnter}
          onMouseLeave={handlePipelineLeave}
        >
          {wf.modules.map((mod, i) => (
            <div className="flex items-center wf-anim-step" key={`${wIdx}-${i}`}>
              {/* Card */}
              <div
                className={`${getCardClass(i)}${mod.trigger ? ' trigger' : ''}`}
                style={{ animationDelay: `${i * 0.09}s` }}
              >
                <img
                  className="wf-anim-card-logo"
                  src={`/logos/${mod.logo}`}
                  alt={mod.label}
                  width={28}
                  height={28}
                />
                <span className="wf-anim-card-label">
                  {mod.label}
                </span>
                <span className="wf-anim-card-sub">
                  {mod.sub}
                </span>
              </div>

              {/* Connector */}
              {i < total - 1 && (
                <div
                  className={getConnClass(i)}
                  style={{ animationDelay: `${(i + 1) * 0.09}s` }}
                >
                  <div className="wf-anim-conn-line" />
                  <svg
                    className="wf-anim-conn-arrow"
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                  >
                    <path
                      d="M1.5 1L5.5 5L1.5 9"
                      stroke="#8b2020"
                      strokeWidth="1.4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {i + 1 < visible && !isFading && (
                    <div className="wf-anim-dot" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Outcome badge */}
        <div
          className="wf-anim-outcome"
          style={{ opacity: phase === 'idle' || isFading ? 0 : 1 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6.5" stroke="#8b2020" strokeWidth="1" />
            <path d="M4.5 7L6.5 9L9.5 5.5" stroke="#8b2020" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span>{wf.outcome}</span>
        </div>
      </section>
    </>
  )
}

// Animation styles (required for complex animations not easily done in Tailwind)
const animationStyles = `
/* Tabs */
.wf-anim-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 28px;
  padding: 0 20px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.wf-anim-tabs::-webkit-scrollbar {
  display: none;
}

.wf-anim-tab {
  font-family: var(--font-manrope), 'Manrope', sans-serif;
  font-size: 13px;
  font-weight: 600;
  padding: 7px 16px;
  border-radius: 100px;
  border: 1px solid #D4D4D4;
  background: #FFFFFF;
  color: #6B6B6B;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.25s ease;
}
.wf-anim-tab:hover {
  border-color: #8b2020;
  color: #8b2020;
}
.wf-anim-tab.active {
  background: #8b2020;
  border-color: #8b2020;
  color: #FFFFFF;
}

/* Card base */
.wf-anim-card {
  width: 150px;
  padding: 18px 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #E0E0E0;
  background: #FFFFFF;
  position: relative;
  opacity: 0;
  transform: translateY(18px);
  border-radius: 6px;
}

.wf-anim-card.visible {
  opacity: 1;
  transform: translateY(0);
  animation: wfCardIn 0.52s cubic-bezier(0.16, 1, 0.3, 1) backwards;
}

.wf-anim-card.visible:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.wf-anim-card.fading {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.38s ease, transform 0.38s ease;
}

@keyframes wfCardIn {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Trigger accent */
.wf-anim-card.trigger {
  border-left: 2.5px solid #8b2020;
}

/* Card inner elements */
.wf-anim-card-logo {
  width: 28px;
  height: 28px;
  margin-bottom: 10px;
  object-fit: contain;
}

.wf-anim-card-label {
  font-family: var(--font-manrope), 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 600;
  color: #1A1A1A;
  margin-bottom: 3px;
  line-height: 1.2;
}

.wf-anim-card-sub {
  font-size: 11.5px;
  color: #6B6B6B;
  line-height: 1.3;
}

/* Connector */
.wf-anim-conn {
  display: flex;
  align-items: center;
  width: 44px;
  margin: 0 3px;
  position: relative;
  opacity: 0;
  transform: scaleX(0);
  transform-origin: left center;
}

.wf-anim-conn.visible {
  opacity: 1;
  transform: scaleX(1);
  animation: wfConnIn 0.42s cubic-bezier(0.16, 1, 0.3, 1) backwards;
}

.wf-anim-conn.fading {
  opacity: 0;
  transform: scaleX(0.4);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

@keyframes wfConnIn {
  from { opacity: 0; transform: scaleX(0); }
  to { opacity: 1; transform: scaleX(1); }
}

.wf-anim-conn-line {
  flex: 1;
  height: 1.5px;
  background: #E0E0E0;
}

.wf-anim-conn-arrow {
  flex-shrink: 0;
  margin-left: -1px;
}

/* Flow dot */
.wf-anim-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #8b2020;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  animation: wfFlowDot 1.8s ease-in-out 0.5s infinite;
}

@keyframes wfFlowDot {
  0% { left: 0; opacity: 0; }
  12% { opacity: 0.75; }
  88% { opacity: 0.75; }
  100% { left: calc(100% - 4px); opacity: 0; }
}

/* Outcome badge */
.wf-anim-outcome {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 24px;
  padding: 8px 18px;
  border-radius: 100px;
  background: rgba(139, 32, 32, 0.06);
  transition: opacity 0.4s ease;
}
.wf-anim-outcome span {
  font-family: var(--font-manrope), 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #8b2020;
}

/* Responsive - Tablet */
@media (max-width: 860px) {
  .wf-anim-card {
    width: 128px;
    padding: 14px 10px 12px;
  }
  .wf-anim-card-logo {
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
  .wf-anim-card-label {
    font-size: 12px;
  }
  .wf-anim-card-sub {
    font-size: 10.5px;
  }
  .wf-anim-conn {
    width: 32px;
    margin: 0 2px;
  }
  .wf-anim-tab {
    font-size: 12px;
    padding: 6px 13px;
  }
}

/* Responsive - Mobile */
@media (max-width: 600px) {
  .wf-anim-pipeline {
    flex-direction: column;
  }
  .wf-anim-step {
    flex-direction: column;
  }
  .wf-anim-card {
    width: 160px;
    padding: 16px 14px 14px;
  }
  .wf-anim-card-logo {
    width: 28px;
    height: 28px;
    margin-bottom: 10px;
  }
  .wf-anim-card-label {
    font-size: 13.5px;
  }
  .wf-anim-card-sub {
    font-size: 11.5px;
  }

  .wf-anim-conn {
    width: 2px;
    height: 28px;
    margin: 3px 0;
    flex-direction: column;
    transform-origin: top center;
  }
  .wf-anim-conn-line {
    width: 1.5px;
    height: 100%;
    flex: 1;
  }
  .wf-anim-conn-arrow {
    transform: rotate(90deg);
    margin-left: 0;
    margin-top: -2px;
  }

  .wf-anim-dot {
    left: 50% !important;
    transform: translateX(-50%);
    top: auto;
    animation: wfFlowDotV 1.8s ease-in-out 0.5s infinite;
  }

  @keyframes wfFlowDotV {
    0% { top: 0; opacity: 0; }
    12% { opacity: 0.75; }
    88% { opacity: 0.75; }
    100% { top: calc(100% - 4px); opacity: 0; }
  }

  .wf-anim-tabs {
    margin-bottom: 20px;
    padding: 0 16px;
    gap: 6px;
  }
  .wf-anim-tab {
    font-size: 12px;
    padding: 6px 12px;
  }
}
`
