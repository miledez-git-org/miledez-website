'use client'

import { useState, useEffect } from 'react'

// ─── Icons ─────────────────────────────────────────────────────────────────────

const Icons: Record<string, JSX.Element> = {
  gmail: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 4L12 14L22 4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  whatsapp: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  ),
  slack: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="4" y="4" width="6" height="6" />
      <rect x="14" y="4" width="6" height="6" />
      <rect x="4" y="14" width="6" height="6" />
      <rect x="14" y="14" width="6" height="6" />
    </svg>
  ),
  pix: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M12 2L18 8L12 14L6 8L12 2Z" />
      <path d="M12 10L18 16L12 22L6 16L12 10Z" />
    </svg>
  ),
  creditCard: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="2" y="4" width="20" height="16" />
      <line x1="2" y1="10" x2="22" y2="10" strokeWidth="2" />
      <line x1="6" y1="15" x2="12" y2="15" />
    </svg>
  ),
  sheets: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="3" width="18" height="18" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  ),
  calendar: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="4" width="18" height="18" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <rect x="7" y="14" width="3" height="3" fill="currentColor" />
    </svg>
  ),
  webhook: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <path d="M12 8v4l-5 7" />
      <path d="M12 12l5 7" />
    </svg>
  ),
  erp: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <line x1="10" y1="6.5" x2="14" y2="6.5" />
      <line x1="6.5" y1="10" x2="6.5" y2="14" />
      <line x1="17.5" y1="10" x2="17.5" y2="14" />
      <line x1="10" y1="17.5" x2="14" y2="17.5" />
    </svg>
  ),
}

// ─── Card Data ─────────────────────────────────────────────────────────────────

interface CardData {
  category: string
  name: string
  desc: string
  icon: string
  trigger?: boolean
}

interface BadgeData {
  type: string
  text: string
}

const CARDS: Record<string, CardData> = {
  // Triggers (position 0)
  agenda: { category: 'Gatilho', name: 'Agenda', desc: 'Dispara por data', icon: 'calendar', trigger: true },
  webhook: { category: 'Gatilho', name: 'Webhook', desc: 'Dispara por sistema', icon: 'webhook', trigger: true },

  // Channels (position 1)
  gmail: { category: 'Enviar', name: 'Gmail', desc: 'Email automático', icon: 'gmail' },
  whatsapp: { category: 'Enviar', name: 'WhatsApp', desc: 'Mensagem direta', icon: 'whatsapp' },
  slack: { category: 'Enviar', name: 'Slack', desc: 'Alerta interno', icon: 'slack' },

  // Payment (position 2 when 4 cards)
  pix: { category: 'Receber', name: 'Pix', desc: 'Pagamento instantâneo', icon: 'pix' },
  cartao: { category: 'Receber', name: 'Cartão', desc: 'Crédito ou débito', icon: 'creditCard' },

  // Destination (position 2 or 3)
  sheets: { category: 'Salvar', name: 'Google Sheets', desc: 'Planilha na nuvem', icon: 'sheets' },
  erp: { category: 'Salvar', name: 'Sistema ERP', desc: 'Integração direta', icon: 'erp' },
}

// ─── Transitions (every position gets swapped) ─────────────────────────────────

interface Transition {
  type: 'swap' | 'add' | 'remove'
  index: number
  before: CardData[]
  after: CardData[]
  label: string
}

const TRANSITIONS: Transition[] = [
  // 1. Swap CHANNEL (position 1): Gmail → WhatsApp
  {
    type: 'swap',
    index: 1,
    before: [CARDS.agenda, CARDS.gmail, CARDS.sheets],
    after: [CARDS.agenda, CARDS.whatsapp, CARDS.sheets],
    label: 'WhatsApp em vez de Email?',
  },
  // 2. Swap DESTINATION (position 2): Sheets → ERP
  {
    type: 'swap',
    index: 2,
    before: [CARDS.agenda, CARDS.whatsapp, CARDS.sheets],
    after: [CARDS.agenda, CARDS.whatsapp, CARDS.erp],
    label: 'Direto no ERP?',
  },
  // 3. Swap TRIGGER (position 0): Agenda → Webhook
  {
    type: 'swap',
    index: 0,
    before: [CARDS.agenda, CARDS.whatsapp, CARDS.erp],
    after: [CARDS.webhook, CARDS.whatsapp, CARDS.erp],
    label: 'Iniciar por outro sistema?',
  },
  // 4. ADD PAYMENT (position 2): 3 → 4 cards
  {
    type: 'add',
    index: 2,
    before: [CARDS.webhook, CARDS.whatsapp, CARDS.erp],
    after: [CARDS.webhook, CARDS.whatsapp, CARDS.pix, CARDS.erp],
    label: 'Adicionar cobrança?',
  },
  // 5. Swap CHANNEL again (position 1): WhatsApp → Slack
  {
    type: 'swap',
    index: 1,
    before: [CARDS.webhook, CARDS.whatsapp, CARDS.pix, CARDS.erp],
    after: [CARDS.webhook, CARDS.slack, CARDS.pix, CARDS.erp],
    label: 'Notificar via Slack?',
  },
  // 6. Swap PAYMENT (position 2): Pix → Cartão
  {
    type: 'swap',
    index: 2,
    before: [CARDS.webhook, CARDS.slack, CARDS.pix, CARDS.erp],
    after: [CARDS.webhook, CARDS.slack, CARDS.cartao, CARDS.erp],
    label: 'Cartão em vez de Pix?',
  },
  // 7. Swap DESTINATION (position 3): ERP → Sheets
  {
    type: 'swap',
    index: 3,
    before: [CARDS.webhook, CARDS.slack, CARDS.cartao, CARDS.erp],
    after: [CARDS.webhook, CARDS.slack, CARDS.cartao, CARDS.sheets],
    label: 'Voltar para planilha?',
  },
  // 8. REMOVE PAYMENT (position 2): 4 → 3 cards
  {
    type: 'remove',
    index: 2,
    before: [CARDS.webhook, CARDS.slack, CARDS.cartao, CARDS.sheets],
    after: [CARDS.webhook, CARDS.slack, CARDS.sheets],
    label: 'Remover cobrança?',
  },
]

// ─── Timing ────────────────────────────────────────────────────────────────────

const T = {
  initialDelay: 1000,
  buildStagger: 700,
  afterBuild: 1200,
  hold: 3500,
  highlight: 2200,
  swap: 1100,
  settle: 1500,
  loopDelay: 3000,
}

// ─── Component ─────────────────────────────────────────────────────────────────

type Phase = 'waiting' | 'building' | 'holding' | 'highlight' | 'swap' | 'settle' | 'looping'

export default function WorkflowModularSection() {
  const [transIdx, setTransIdx] = useState(-1)
  const [phase, setPhase] = useState<Phase>('waiting')
  const [builtCount, setBuiltCount] = useState(0)
  const [showOld, setShowOld] = useState(true)

  const isInitialBuild = transIdx === -1
  const trans = !isInitialBuild ? TRANSITIONS[transIdx] : null

  // State machine
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>
    let t2: ReturnType<typeof setTimeout>

    switch (phase) {
      case 'waiting':
        t = setTimeout(() => setPhase('building'), T.initialDelay)
        break

      case 'building': {
        const targetCount = TRANSITIONS[0].before.length
        if (builtCount < targetCount) {
          t = setTimeout(() => setBuiltCount(c => c + 1), T.buildStagger)
        } else {
          t = setTimeout(() => {
            setTransIdx(0)
            setPhase('holding')
          }, T.afterBuild)
        }
        break
      }

      case 'holding':
        setShowOld(true)
        t = setTimeout(() => setPhase('highlight'), T.hold)
        break

      case 'highlight':
        t = setTimeout(() => {
          setPhase('swap')
          setShowOld(true)
          t2 = setTimeout(() => setShowOld(false), T.swap / 2)
        }, T.highlight)
        break

      case 'swap':
        t = setTimeout(() => setPhase('settle'), T.swap)
        break

      case 'settle':
        t = setTimeout(() => {
          const nextIdx = transIdx + 1
          if (nextIdx < TRANSITIONS.length) {
            setTransIdx(nextIdx)
            setPhase('holding')
          } else {
            setPhase('looping')
          }
        }, T.settle)
        break

      case 'looping':
        t = setTimeout(() => {
          setTransIdx(-1)
          setBuiltCount(0)
          setShowOld(true)
          setPhase('building')
        }, T.loopDelay)
        break
    }

    return () => {
      clearTimeout(t)
      clearTimeout(t2)
    }
  }, [phase, builtCount, transIdx])

  // Get current cards to display
  const getDisplayCards = (): CardData[] => {
    if (isInitialBuild) return TRANSITIONS[0].before

    if (phase === 'swap' && !showOld) {
      return trans!.after
    }
    if (phase === 'settle') {
      return trans!.after
    }
    return trans!.before
  }

  const displayCards = getDisplayCards()

  // Get card state
  const getCardState = (idx: number): string => {
    if (isInitialBuild) {
      return idx < builtCount ? 'visible' : 'hidden'
    }

    const isChanging = idx === trans!.index

    if (phase === 'holding' || phase === 'settle') {
      return 'visible'
    }

    if (phase === 'highlight') {
      return isChanging ? 'visible highlighted' : 'visible'
    }

    if (phase === 'swap') {
      if (isChanging) {
        if (trans!.type === 'add') {
          return showOld ? 'hidden' : 'visible entering'
        }
        if (trans!.type === 'remove') {
          return showOld ? 'visible exiting' : 'hidden'
        }
        return showOld ? 'visible exiting' : 'visible entering'
      }
      return 'visible'
    }

    if (phase === 'looping') {
      return 'visible fading'
    }

    return 'visible'
  }

  // Get badge
  const getBadge = (idx: number): BadgeData | null => {
    if (isInitialBuild || !trans) return null
    if (idx !== trans.index) return null

    if (phase === 'highlight') {
      return { type: 'highlight', text: 'Vai mudar' }
    }

    if (phase === 'swap') {
      if (trans.type === 'add') {
        return showOld ? null : { type: 'enter', text: 'Novo' }
      }
      if (trans.type === 'remove') {
        return showOld ? { type: 'exit', text: 'Removendo' } : null
      }
      return showOld ? { type: 'exit', text: 'Antes' } : { type: 'enter', text: 'Agora' }
    }

    return null
  }

  // Render card
  const renderCard = (card: CardData, state: string, badge: BadgeData | null) => (
    <div className={`wf-card ${state}${card.trigger ? ' trigger' : ''}`}>
      {badge && <div className={`wf-badge ${badge.type}`}>{badge.text}</div>}
      <span className="wf-category">{card.category}</span>
      <div className="wf-icon">{Icons[card.icon]}</div>
      <span className="wf-name">{card.name}</span>
      <span className="wf-desc">{card.desc}</span>
    </div>
  )

  // Action bar
  const showAction = trans && ['highlight', 'swap'].includes(phase)
  const actionLabels: Record<string, string> = { swap: 'Trocar', add: 'Adicionar', remove: 'Remover' }

  return (
    <>
      <style>{CSS}</style>
      <section className="wf-section">
        <div className="wf-header">
          <p className="wf-eyebrow">Como funciona</p>
          <h2 className="wf-title">Automação sob medida</h2>
          <p className="wf-subtitle">
            Seu fluxo, do seu jeito. Troque, adicione ou remova módulos conforme sua necessidade.
          </p>
        </div>

        <div className={`wf-action-bar${showAction ? ' visible' : ''}`}>
          <span className={`wf-action-type ${trans?.type || ''}`}>
            {actionLabels[trans?.type || ''] || ''}
          </span>
          <span className="wf-action-label">{trans?.label || ''}</span>
        </div>

        <div className="wf-pipeline">
          {displayCards.map((card, idx) => {
            const state = getCardState(idx)
            const badge = getBadge(idx)
            const showConnector = idx < displayCards.length - 1 && !state.includes('hidden')

            return (
              <div className="wf-slot" key={`${transIdx}-${idx}-${showOld}`}>
                <div className="wf-card-container">
                  {renderCard(card, state, badge)}
                </div>
                {showConnector && (
                  <div className={`wf-conn${!isInitialBuild || builtCount > idx + 1 ? ' visible' : ''}`}>
                    <div className="wf-conn-line" />
                    <svg className="wf-conn-arrow" width="10" height="14" viewBox="0 0 10 14">
                      <path d="M2 2L8 7L2 12" stroke="#6b0f1a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="wf-footer">
          <div className="wf-progress">
            {TRANSITIONS.map((_, i) => (
              <div
                key={i}
                className={`wf-dot${i === transIdx ? ' active' : ''}${i < transIdx ? ' done' : ''}`}
              />
            ))}
          </div>
          <p className="wf-info">{displayCards.length} módulos</p>
        </div>
      </section>
    </>
  )
}

// ─── Styles ────────────────────────────────────────────────────────────────────

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600');

.wf-section *,
.wf-section *::before,
.wf-section *::after { margin: 0; padding: 0; box-sizing: border-box; }

.wf-section {
  --bur: #6b0f1a;
  --bur-light: rgba(139, 32, 32, 0.07);
  --char: #1A1A1A;
  --gray: #6B6B6B;
  --lg: #F5F5F5;
  --bdr: #E0E0E0;
  --wh: #FFFFFF;
  --green: #1a7a3d;
  --green-light: rgba(26, 122, 61, 0.07);
  --red: #a82828;
  --red-light: rgba(168, 40, 40, 0.07);
  --hd: 'Inter', sans-serif;
  --bd: 'Inter', sans-serif;

  --card-w: 140px;
  --card-h: 175px;
}

.wf-section {
  background: var(--wh);
  padding: 64px 24px 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  font-family: var(--bd);
  color: var(--char);
}

/* Header */
.wf-header {
  text-align: center;
  margin-bottom: 44px;
  max-width: 480px;
}

.wf-eyebrow {
  font-family: var(--hd);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--bur);
  margin-bottom: 14px;
}

.wf-title {
  font-family: var(--hd);
  font-weight: 700;
  font-size: clamp(24px, 5vw, 34px);
  letter-spacing: -0.02em;
  color: var(--char);
  margin-bottom: 16px;
  line-height: 1.15;
}

.wf-subtitle {
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray);
}

/* Action Bar */
.wf-action-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-height: 40px;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.wf-action-bar.visible {
  opacity: 1;
  transform: translateY(0);
}

.wf-action-type {
  font-family: var(--hd);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 8px 16px;
  color: var(--wh);
  background: var(--bur);
}

.wf-action-type.add { background: var(--green); }
.wf-action-type.remove { background: var(--red); }

.wf-action-label {
  font-family: var(--hd);
  font-size: 17px;
  font-weight: 600;
  color: var(--char);
}

/* Pipeline */
.wf-pipeline {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  min-height: 240px;
}

.wf-slot {
  display: flex;
  align-items: center;
}

.wf-card-container {
  width: var(--card-w);
  height: var(--card-h);
  position: relative;
}

/* Card */
.wf-card {
  width: 100%;
  height: 100%;
  padding: 20px 14px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1.5px solid var(--bdr);
  background: var(--wh);
  position: absolute;
  top: 0;
  left: 0;
}

.wf-card.hidden {
  opacity: 0;
  transform: translateX(50px);
}

.wf-card.visible {
  opacity: 1;
  transform: translateX(0);
  transition:
    opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.4s ease,
    background-color 0.4s ease;
}

.wf-card.trigger {
  border-left: 4px solid var(--bur);
}

.wf-card.highlighted {
  border-color: var(--bur);
  background: var(--bur-light);
  animation: wfPulse 1.3s ease-in-out infinite;
}

@keyframes wfPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}

.wf-card.exiting {
  border-color: var(--red);
  background: var(--red-light);
  animation: wfExitLeft 0.55s cubic-bezier(0.4, 0, 1, 1) forwards;
}

@keyframes wfExitLeft {
  to {
    opacity: 0;
    transform: translateX(-70px);
  }
}

.wf-card.entering {
  border-color: var(--green);
  background: var(--green-light);
  animation: wfEnterRight 0.55s cubic-bezier(0, 0, 0.2, 1) forwards;
}

@keyframes wfEnterRight {
  from {
    opacity: 0;
    transform: translateX(70px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.wf-card.fading {
  animation: wfFadeOut 1.2s ease forwards;
}

@keyframes wfFadeOut {
  to { opacity: 0.25; }
}

/* Badge */
.wf-badge {
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--hd);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 5px 12px;
  color: var(--wh);
  white-space: nowrap;
  z-index: 10;
}

.wf-badge.highlight { background: var(--bur); }
.wf-badge.exit { background: var(--red); }
.wf-badge.enter { background: var(--green); }

/* Card Content */
.wf-category {
  font-family: var(--hd);
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gray);
  margin-bottom: 12px;
  padding: 4px 10px;
  background: var(--lg);
}

.wf-card.trigger .wf-category {
  background: var(--bur);
  color: var(--wh);
}

.wf-icon {
  color: var(--bur);
  margin-bottom: 10px;
  height: 30px;
  display: flex;
  align-items: center;
}

.wf-name {
  font-family: var(--hd);
  font-weight: 700;
  font-size: 15px;
  color: var(--char);
  margin-bottom: 5px;
}

.wf-desc {
  font-size: 11px;
  color: var(--gray);
}

/* Connector */
.wf-conn {
  display: flex;
  align-items: center;
  width: 50px;
  margin: 0 6px;
  opacity: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.wf-conn.visible {
  opacity: 1;
  transform: scaleX(1);
}

.wf-conn-line {
  flex: 1;
  height: 2px;
  background: var(--bdr);
}

.wf-conn-arrow {
  margin-left: -3px;
}

/* Footer */
.wf-footer {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wf-progress {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.wf-dot {
  width: 7px;
  height: 7px;
  background: var(--bdr);
  transition: all 0.4s ease;
}

.wf-dot.done { background: var(--gray); }
.wf-dot.active { background: var(--bur); width: 22px; }

.wf-info {
  font-size: 13px;
  color: var(--gray);
  font-family: var(--hd);
  font-weight: 500;
}

/* ─── Tablet ─── */
@media (max-width: 900px) {
  .wf-section {
    --card-w: 120px;
    --card-h: 165px;
  }

  .wf-name { font-size: 14px; }
  .wf-desc { font-size: 10px; }
  .wf-icon svg { width: 24px; height: 24px; }
  .wf-conn { width: 36px; margin: 0 4px; }
}

/* ─── Mobile ─── */
@media (max-width: 600px) {
  .wf-section {
    --card-w: 220px;
    --card-h: 190px;
  }

  .wf-section {
    padding: 48px 20px 40px;
    min-height: auto;
  }

  .wf-header { margin-bottom: 32px; }
  .wf-title { font-size: 24px; }
  .wf-subtitle { font-size: 15px; }

  .wf-action-bar {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 32px;
  }

  .wf-action-label { font-size: 15px; }

  .wf-pipeline {
    flex-direction: column;
    min-height: auto;
    padding: 12px 0;
  }

  .wf-slot {
    flex-direction: column;
  }

  .wf-card {
    padding: 22px 18px 20px;
  }

  .wf-category {
    font-size: 10px;
    padding: 5px 12px;
    margin-bottom: 14px;
  }

  .wf-icon { margin-bottom: 12px; }
  .wf-icon svg { width: 30px; height: 30px; }
  .wf-name { font-size: 17px; margin-bottom: 6px; }
  .wf-desc { font-size: 13px; }

  .wf-conn {
    width: auto;
    height: 40px;
    flex-direction: column;
    margin: 10px 0;
    transform-origin: top;
  }

  .wf-conn.visible { transform: scaleY(1); }
  .wf-conn-line { width: 2px; height: 100%; }
  .wf-conn-arrow { margin-left: 0; margin-top: -4px; transform: rotate(90deg); }

  /* Keep horizontal slide on mobile too */
  @keyframes wfExitLeft {
    to {
      opacity: 0;
      transform: translateX(-80px);
    }
  }

  @keyframes wfEnterRight {
    from {
      opacity: 0;
      transform: translateX(80px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .wf-footer { margin-top: 36px; }
  .wf-dot { width: 6px; height: 6px; }
  .wf-dot.active { width: 18px; }
}
`
