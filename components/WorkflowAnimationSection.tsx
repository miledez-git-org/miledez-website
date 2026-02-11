'use client'

import { useState, useEffect } from 'react'

/**
 * WorkflowAnimationSection - Animated workflow pipeline demonstration
 * Shows different automation workflows cycling through with staggered card animations
 */

// Inline SVG Icons (consistent with project's icon style)
const IconCalendar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
)

const IconDocument = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
)

const IconMail = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
)

const IconCheck = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

const IconMessage = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  </svg>
)

const IconFilter = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
)

const IconBell = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
)

const IconUpload = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
)

const IconFolder = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
  </svg>
)

const IconCloud = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
  </svg>
)

const IconChart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
)

const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const IconPix = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.7 2.3a1 1 0 00-1.4 0L7.3 6.3a1 1 0 000 1.4l4 4a1 1 0 001.4 0l4-4a1 1 0 000-1.4L12.7 2.3z" />
    <path d="M12.7 16.3a1 1 0 00-1.4 0l-4 4a1 1 0 000 1.4l4 4a1 1 0 001.4 0l4-4a1 1 0 000-1.4l-4-4z" opacity="0.5" />
    <path d="M6.3 7.3L2.3 11.3a1 1 0 000 1.4l4 4" />
    <path d="M17.7 7.3l4 4a1 1 0 010 1.4l-4 4" />
  </svg>
)

const IconGrid = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
  </svg>
)

const IconScan = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 012-2h2" />
    <path d="M17 3h2a2 2 0 012 2v2" />
    <path d="M21 17v2a2 2 0 01-2 2h-2" />
    <path d="M7 21H5a2 2 0 01-2-2v-2" />
    <line x1="7" y1="10" x2="17" y2="10" />
    <line x1="7" y1="14" x2="17" y2="14" />
  </svg>
)

type IconKey = 'calendar' | 'document' | 'mail' | 'check' | 'message' | 'filter' | 'bell' | 'upload' | 'folder' | 'cloud' | 'chart' | 'zap' | 'pix' | 'grid' | 'scan'

const iconMap: Record<IconKey, React.ReactNode> = {
  calendar: <IconCalendar />,
  document: <IconDocument />,
  mail: <IconMail />,
  check: <IconCheck />,
  message: <IconMessage />,
  filter: <IconFilter />,
  bell: <IconBell />,
  upload: <IconUpload />,
  folder: <IconFolder />,
  cloud: <IconCloud />,
  chart: <IconChart />,
  zap: <IconZap />,
  pix: <IconPix />,
  grid: <IconGrid />,
  scan: <IconScan />,
}

// Workflow Data
interface WorkflowModule {
  type: string
  label: string
  sub: string
  icon: IconKey
  trigger?: boolean
}

interface Workflow {
  title: string
  desc: string
  modules: WorkflowModule[]
}

const WORKFLOWS: Workflow[] = [
  {
    title: 'Cobrança Automática',
    desc: 'Faturamento e cobrança sem intervenção manual',
    modules: [
      { type: 'Gatilho', label: 'Vencimento', sub: 'Agenda detecta', icon: 'calendar', trigger: true },
      { type: 'Criar', label: 'Gerar Boleto', sub: 'PDF automático', icon: 'document' },
      { type: 'Enviar', label: 'Cobrar Cliente', sub: 'Via Gmail', icon: 'mail' },
      { type: 'Receber', label: 'Pagamento Pix', sub: 'Confirmação', icon: 'pix' },
      { type: 'Validar', label: 'Conciliar', sub: 'Conferir valores', icon: 'check' },
      { type: 'Registrar', label: 'Atualizar', sub: 'Google Sheets', icon: 'grid' },
    ],
  },
  {
    title: 'Atendimento Automático',
    desc: 'Respostas rápidas e encaminhamento inteligente',
    modules: [
      { type: 'Gatilho', label: 'Mensagem', sub: 'WhatsApp', icon: 'message', trigger: true },
      { type: 'Classificar', label: 'Filtrar Pedido', sub: 'Por tipo', icon: 'filter' },
      { type: 'Responder', label: 'Resposta IA', sub: 'Automática', icon: 'zap' },
      { type: 'Notificar', label: 'Alertar Equipe', sub: 'Notificação', icon: 'bell' },
    ],
  },
  {
    title: 'Relatório Mensal',
    desc: 'Dados compilados e enviados automaticamente',
    modules: [
      { type: 'Gatilho', label: 'Fim do Mês', sub: 'Automático', icon: 'calendar', trigger: true },
      { type: 'Analisar', label: 'Compilar Dados', sub: 'Múltiplas fontes', icon: 'chart' },
      { type: 'Enviar', label: 'Relatório', sub: 'Email para equipe', icon: 'mail' },
    ],
  },
  {
    title: 'Gestão de Documentos',
    desc: 'Receba, organize e armazene automaticamente',
    modules: [
      { type: 'Gatilho', label: 'Documento', sub: 'Recebido por email', icon: 'upload', trigger: true },
      { type: 'Extrair', label: 'Leitura OCR', sub: 'Dados do arquivo', icon: 'scan' },
      { type: 'Organizar', label: 'Categorizar', sub: 'Auto-classificação', icon: 'folder' },
      { type: 'Armazenar', label: 'Google Drive', sub: 'Backup seguro', icon: 'cloud' },
      { type: 'Notificar', label: 'Avisar Equipe', sub: 'Notificação', icon: 'bell' },
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

  const wf = WORKFLOWS[wIdx]
  const total = wf.modules.length
  const isFading = phase === 'fading'

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
        t = setTimeout(() => setPhase('fading'), HOLD)
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
  }, [phase, visible, total])

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
            Automação sob medida
          </h2>
          <p className="text-base leading-relaxed text-brand-muted">
            Combinamos módulos de automação para criar o fluxo ideal para o seu
            negócio — do gatilho à entrega.
          </p>
        </div>

        {/* Current workflow label */}
        <div
          className="text-center mb-9 transition-opacity duration-[450ms] ease-out"
          style={{ opacity: phase === 'idle' || isFading ? 0 : 1 }}
        >
          <span className="block font-display font-semibold text-[17px] text-brand-primary mb-0.5">
            {wf.title}
          </span>
          <span className="text-[13px] text-brand-muted">{wf.desc}</span>
        </div>

        {/* Pipeline */}
        <div className="flex items-center justify-center flex-nowrap py-2 min-h-[170px] wf-anim-pipeline">
          {wf.modules.map((mod, i) => (
            <div className="flex items-center wf-anim-step" key={`${wIdx}-${i}`}>
              {/* Card */}
              <div
                className={`${getCardClass(i)}${mod.trigger ? ' trigger' : ''}`}
                style={{ animationDelay: `${i * 0.09}s` }}
              >
                <span className={`wf-anim-type${mod.trigger ? ' trigger' : ''}`}>
                  {mod.type}
                </span>
                <div className="text-brand-primary mb-2 flex items-center justify-center h-[26px]">
                  {iconMap[mod.icon]}
                </div>
                <span className="font-display font-semibold text-[12.5px] text-brand-black mb-0.5 leading-tight">
                  {mod.label}
                </span>
                <span className="text-[10.5px] text-brand-muted leading-tight">
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

        {/* Progress dots */}
        <div className="flex gap-2 mt-11">
          {WORKFLOWS.map((w, i) => (
            <div
              key={i}
              className={`wf-anim-progress-dot${i === wIdx ? ' active' : ''}`}
              title={w.title}
            />
          ))}
        </div>

        {/* Module count indicator */}
        <p
          className="mt-3.5 text-xs text-brand-muted font-display font-medium tracking-[0.02em] transition-opacity duration-[400ms] ease-out"
          style={{ opacity: phase === 'idle' || isFading ? 0 : 1 }}
        >
          {total} {total === 1 ? 'módulo' : 'módulos'} neste fluxo
        </p>
      </section>
    </>
  )
}

// Animation styles (required for complex animations not easily done in Tailwind)
const animationStyles = `
/* Card base */
.wf-anim-card {
  width: 118px;
  padding: 14px 10px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #E0E0E0;
  background: #FFFFFF;
  position: relative;
  opacity: 0;
  transform: translateY(18px);
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

/* Card type badge */
.wf-anim-type {
  font-family: var(--font-manrope), 'Manrope', sans-serif;
  font-size: 8.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #6B6B6B;
  margin-bottom: 10px;
  padding: 2px 7px;
  background: #F5F5F5;
}

.wf-anim-type.trigger {
  background: #8b2020;
  color: #FFFFFF;
}

/* Connector */
.wf-anim-conn {
  display: flex;
  align-items: center;
  width: 38px;
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

/* Progress dots */
.wf-anim-progress-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #E0E0E0;
  transition: all 0.45s ease;
}

.wf-anim-progress-dot.active {
  background: #8b2020;
  width: 22px;
  border-radius: 4px;
}

/* Responsive - Tablet */
@media (max-width: 860px) {
  .wf-anim-card {
    width: 100px;
    padding: 12px 8px 10px;
  }
  .wf-anim-card .font-display {
    font-size: 11px;
  }
  .wf-anim-card .text-\\[10\\.5px\\] {
    font-size: 9.5px;
  }
  .wf-anim-card svg {
    width: 18px;
    height: 18px;
  }
  .wf-anim-conn {
    width: 28px;
    margin: 0 2px;
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
    width: 140px;
    padding: 14px 12px 12px;
  }
  .wf-anim-card .font-display {
    font-size: 12.5px;
  }
  .wf-anim-card .text-\\[10\\.5px\\] {
    font-size: 10.5px;
  }
  .wf-anim-card svg {
    width: 22px;
    height: 22px;
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
}
`
