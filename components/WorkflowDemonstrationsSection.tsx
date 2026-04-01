'use client'

import { useState, useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// Design system color constants
const BRAND_PRIMARY = '#085042'
const BRAND_SECONDARY = '#eb5100'
const BRAND_BLACK = '#274855'
const NEUTRAL_600 = '#525252'
const NEUTRAL_400 = '#a3a3a3'
const NEUTRAL_300 = '#d4d4d4'
const NEUTRAL_200 = '#e5e5e5'
const NEUTRAL_100 = '#f5f5f5'

// Line colors
const LINE_INACTIVE = '#e5e5e5'
const LINE_ACTIVE = '#d4d4d4'

// Card dimensions
const CARD_WIDTH = 270
const CARD_HEIGHT = 140
const FINAL_CARD_WIDTH = 240

// Layout positions
const TRIGGER_Y = 0
const TRIGGER_HEIGHT = 130
const PROCESS_Y = 220
const FINAL_Y = 520

// Rail positions (in the gap between cards)
const UPPER_RAIL_Y = TRIGGER_Y + TRIGGER_HEIGHT + 45
const LOWER_RAIL_Y = PROCESS_Y + CARD_HEIGHT + 50

// Elbow radius for rounded corners
const ELBOW_RADIUS = 10

// Easing
const SPRING = 'cubic-bezier(0.22, 1, 0.36, 1)'

// ============================================
// MAIN SECTION COMPONENT
// ============================================
export default function WorkflowDemonstrationsSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })
  const [activeVariation, setActiveVariation] = useState(0)
  const [step, setStep] = useState(-1)
  const [started, setStarted] = useState(false)

  // Start animation only when visible
  useEffect(() => {
    if (isVisible && !started) {
      setStarted(true)
      setStep(-1)
    }
  }, [isVisible, started])

  // Reset step on variation change
  useEffect(() => {
    if (started) setStep(-1)
  }, [activeVariation, started])

  // Step animation cycle
  useEffect(() => {
    if (!started) return

    if (step === -1) {
      const timer = setTimeout(() => setStep(0), 600)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      if (step >= 5) {
        setTimeout(() => setStep(-1), 3500)
      } else {
        setStep(prev => prev + 1)
      }
    }, step === 0 ? 1200 : 1400)
    return () => clearTimeout(timer)
  }, [step, started])

  const variations = [
    { id: 0, name: 'Variação 1', desc: 'Saúde & Clínicas' },
    { id: 1, name: 'Variação 2', desc: 'Pipeline de Dados' },
    { id: 2, name: 'Variação 3', desc: 'Email Marketing' },
  ]

  return (
    <div ref={ref}>
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-600 mb-3">
          Veja a automação em ação
        </p>
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] text-brand-black leading-tight">
          Do gatilho ao resultado, tudo acontece automaticamente
        </h2>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        padding: '28px 0',
        flexWrap: 'wrap' as const,
      }}>
        {variations.map(v => (
          <button
            key={v.id}
            onClick={() => setActiveVariation(v.id)}
            style={{
              padding: '10px 24px',
              borderRadius: '999px',
              border: 'none',
              background: activeVariation === v.id ? BRAND_SECONDARY : '#ffffff',
              color: activeVariation === v.id ? '#ffffff' : BRAND_BLACK,
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              boxShadow: activeVariation === v.id
                ? '0 4px 14px rgba(235, 81, 0, 0.25)'
                : `0 1px 3px rgba(0,0,0,0.06), inset 0 0 0 1px ${NEUTRAL_200}`,
              transition: `all 300ms ${SPRING}`,
            }}
          >
            {v.name}
          </button>
        ))}
      </div>

      {/* Workflow Container */}
      <div style={{ overflow: 'auto' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          minWidth: '1000px',
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '50px 40px 60px',
            position: 'relative',
            minHeight: '700px',
          }}>
            {activeVariation === 0 && <HealthcareWorkflow step={step} />}
            {activeVariation === 1 && <DataPipelineWorkflow step={step} />}
            {activeVariation === 2 && <EmailMarketingWorkflow step={step} />}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// VARIATION 1: Healthcare / Clinic Workflow
// ============================================
interface WorkflowProps {
  step: number
}

const HealthcareWorkflow = ({ step }: WorkflowProps) => {
  const triggerActive = step >= 0
  const fetchActive = step >= 1
  const analyzeActive = step >= 2
  const outputActive = step >= 3
  const finalActive1 = step >= 4
  const finalActive2 = step >= 5

  const centerX = 500
  const processLeftX = 80
  const processCenterX = centerX - CARD_WIDTH / 2
  const processRightX = 920 - CARD_WIDTH

  const leftCardCenterX = processLeftX + CARD_WIDTH / 2
  const rightCardCenterX = processRightX + CARD_WIDTH / 2

  const finalLeftX = 200
  const finalRightX = 800 - FINAL_CARD_WIDTH
  const finalLeftCenterX = finalLeftX + FINAL_CARD_WIDTH / 2
  const finalRightCenterX = finalRightX + FINAL_CARD_WIDTH / 2

  const triggerBottomY = TRIGGER_Y + TRIGGER_HEIGHT
  const processTopY = PROCESS_Y
  const processBottomY = PROCESS_Y + CARD_HEIGHT
  const finalTopY = FINAL_Y

  return (
    <div style={{ position: 'relative', minHeight: '640px' }}>
      {/* SVG Connectors */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        {/* === TRIGGER TO PROCESS CARDS === */}
        <line x1={centerX} y1={triggerBottomY} x2={centerX} y2={UPPER_RAIL_Y - ELBOW_RADIUS} stroke={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={centerX} cy={triggerBottomY} r="3" fill={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* === LEFT BRANCH === */}
        <path d={`M ${centerX} ${UPPER_RAIL_Y - ELBOW_RADIUS} Q ${centerX} ${UPPER_RAIL_Y} ${centerX - ELBOW_RADIUS} ${UPPER_RAIL_Y}`} fill="none" stroke={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={centerX - ELBOW_RADIUS} y1={UPPER_RAIL_Y} x2={leftCardCenterX + ELBOW_RADIUS} y2={UPPER_RAIL_Y} stroke={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <path d={`M ${leftCardCenterX + ELBOW_RADIUS} ${UPPER_RAIL_Y} Q ${leftCardCenterX} ${UPPER_RAIL_Y} ${leftCardCenterX} ${UPPER_RAIL_Y + ELBOW_RADIUS}`} fill="none" stroke={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={leftCardCenterX} y1={UPPER_RAIL_Y + ELBOW_RADIUS} x2={leftCardCenterX} y2={processTopY} stroke={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={leftCardCenterX} cy={processTopY} r="3" fill={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* === CENTER BRANCH === */}
        <line x1={centerX} y1={UPPER_RAIL_Y - ELBOW_RADIUS} x2={centerX} y2={processTopY} stroke={analyzeActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={centerX} cy={processTopY} r="3" fill={analyzeActive ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* === RIGHT BRANCH === */}
        <path d={`M ${centerX} ${UPPER_RAIL_Y - ELBOW_RADIUS} Q ${centerX} ${UPPER_RAIL_Y} ${centerX + ELBOW_RADIUS} ${UPPER_RAIL_Y}`} fill="none" stroke={outputActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={centerX + ELBOW_RADIUS} y1={UPPER_RAIL_Y} x2={rightCardCenterX - ELBOW_RADIUS} y2={UPPER_RAIL_Y} stroke={outputActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <path d={`M ${rightCardCenterX - ELBOW_RADIUS} ${UPPER_RAIL_Y} Q ${rightCardCenterX} ${UPPER_RAIL_Y} ${rightCardCenterX} ${UPPER_RAIL_Y + ELBOW_RADIUS}`} fill="none" stroke={outputActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={rightCardCenterX} y1={UPPER_RAIL_Y + ELBOW_RADIUS} x2={rightCardCenterX} y2={processTopY} stroke={outputActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={rightCardCenterX} cy={processTopY} r="3" fill={outputActive ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* === PROCESS TO FINAL CARDS === */}
        <line x1={centerX} y1={processBottomY} x2={centerX} y2={LOWER_RAIL_Y - ELBOW_RADIUS} stroke={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={centerX} cy={processBottomY} r="3" fill={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* === LEFT FINAL BRANCH === */}
        <path d={`M ${centerX} ${LOWER_RAIL_Y - ELBOW_RADIUS} Q ${centerX} ${LOWER_RAIL_Y} ${centerX - ELBOW_RADIUS} ${LOWER_RAIL_Y}`} fill="none" stroke={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={centerX - ELBOW_RADIUS} y1={LOWER_RAIL_Y} x2={finalLeftCenterX + ELBOW_RADIUS} y2={LOWER_RAIL_Y} stroke={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <path d={`M ${finalLeftCenterX + ELBOW_RADIUS} ${LOWER_RAIL_Y} Q ${finalLeftCenterX} ${LOWER_RAIL_Y} ${finalLeftCenterX} ${LOWER_RAIL_Y + ELBOW_RADIUS}`} fill="none" stroke={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={finalLeftCenterX} y1={LOWER_RAIL_Y + ELBOW_RADIUS} x2={finalLeftCenterX} y2={finalTopY} stroke={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={finalLeftCenterX} cy={finalTopY} r="3" fill={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* === RIGHT FINAL BRANCH === */}
        <path d={`M ${centerX} ${LOWER_RAIL_Y - ELBOW_RADIUS} Q ${centerX} ${LOWER_RAIL_Y} ${centerX + ELBOW_RADIUS} ${LOWER_RAIL_Y}`} fill="none" stroke={finalActive2 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={centerX + ELBOW_RADIUS} y1={LOWER_RAIL_Y} x2={finalRightCenterX - ELBOW_RADIUS} y2={LOWER_RAIL_Y} stroke={finalActive2 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <path d={`M ${finalRightCenterX - ELBOW_RADIUS} ${LOWER_RAIL_Y} Q ${finalRightCenterX} ${LOWER_RAIL_Y} ${finalRightCenterX} ${LOWER_RAIL_Y + ELBOW_RADIUS}`} fill="none" stroke={finalActive2 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={finalRightCenterX} y1={LOWER_RAIL_Y + ELBOW_RADIUS} x2={finalRightCenterX} y2={finalTopY} stroke={finalActive2 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={finalRightCenterX} cy={finalTopY} r="3" fill={finalActive2 ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />
      </svg>

      {/* TRIGGER CARD */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: `translateX(-50%) ${triggerActive ? 'translateY(0) scale(1)' : 'translateY(-15px) scale(0.95)'}`,
        top: TRIGGER_Y,
        opacity: triggerActive ? 1 : 0,
        transition: `all 900ms ${SPRING}`,
        zIndex: 1,
      }}>
        <TriggerCard active={triggerActive}>
          <div style={{ fontWeight: 600, color: BRAND_BLACK, fontSize: '18px', textAlign: 'center' }}>
            Novo paciente cadastrado
          </div>
          <p style={{ margin: '6px 0 0', color: NEUTRAL_600, fontSize: '14px', textAlign: 'center' }}>Ficha de anamnese preenchida</p>
          <AppIconsRow />
        </TriggerCard>
      </div>

      {/* PROCESS CARDS */}
      <div style={{
        position: 'absolute',
        left: processLeftX,
        top: PROCESS_Y,
        opacity: fetchActive ? 1 : 0.5,
        transform: fetchActive ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
        transition: `all 800ms ${SPRING}`,
        zIndex: 1,
      }}>
        <ProcessCard title="Coletando dados" subtitle="Histórico do paciente" active={fetchActive}>
          <DataFetchAnimation active={fetchActive} />
        </ProcessCard>
      </div>

      <div style={{
        position: 'absolute',
        left: processCenterX,
        top: PROCESS_Y,
        opacity: analyzeActive ? 1 : 0.5,
        transform: analyzeActive ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
        transition: `all 800ms ${SPRING} 100ms`,
        zIndex: 1,
      }}>
        <ProcessCard title="Analisando informações" subtitle="Processando dados médicos" active={analyzeActive}>
          <AnalysisAnimation active={analyzeActive} />
        </ProcessCard>
      </div>

      <div style={{
        position: 'absolute',
        left: processRightX,
        top: PROCESS_Y,
        opacity: outputActive ? 1 : 0.5,
        transform: outputActive ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
        transition: `all 800ms ${SPRING} 200ms`,
        zIndex: 1,
      }}>
        <ProcessCard title="Gerando prontuário" subtitle="Documento preparado" active={outputActive}>
          <DocumentGenerationAnimation active={outputActive} />
        </ProcessCard>
      </div>

      {/* FINAL OUTPUT CARDS */}
      <div style={{
        position: 'absolute',
        left: finalLeftX,
        top: FINAL_Y,
        opacity: finalActive1 ? 1 : 0.5,
        transform: finalActive1 ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
        transition: `all 800ms ${SPRING}`,
        zIndex: 1,
      }}>
        <FinalOutputCard title="Prontuário atualizado" subtitle="Sistema de gestão" active={finalActive1} icon="database" />
      </div>

      <div style={{
        position: 'absolute',
        left: finalRightX,
        top: FINAL_Y,
        opacity: finalActive2 ? 1 : 0.5,
        transform: finalActive2 ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
        transition: `all 800ms ${SPRING} 100ms`,
        zIndex: 1,
      }}>
        <FinalOutputCard title="Médico notificado" subtitle="Agenda atualizada" active={finalActive2} icon="notification" />
      </div>
    </div>
  )
}

// ============================================
// VARIATION 2: Data Pipeline Workflow
// ============================================
const DataPipelineWorkflow = ({ step }: WorkflowProps) => {
  const triggerActive = step >= 0
  const fetchActive = step >= 1
  const analyzeActive = step >= 2
  const outputActive = step >= 3
  const finalActive1 = step >= 4
  const finalActive2 = step >= 5

  const centerX = 500
  const processLeftX = 80
  const processCenterX = centerX - CARD_WIDTH / 2
  const processRightX = 920 - CARD_WIDTH

  const leftCardCenterX = processLeftX + CARD_WIDTH / 2
  const rightCardCenterX = processRightX + CARD_WIDTH / 2

  const finalLeftX = 200
  const finalRightX = 800 - FINAL_CARD_WIDTH
  const finalLeftCenterX = finalLeftX + FINAL_CARD_WIDTH / 2
  const finalRightCenterX = finalRightX + FINAL_CARD_WIDTH / 2

  const triggerBottomY = TRIGGER_Y + TRIGGER_HEIGHT + 20
  const processTopY = PROCESS_Y
  const processBottomY = PROCESS_Y + CARD_HEIGHT
  const finalTopY = FINAL_Y
  const upperRailY = triggerBottomY + 35

  return (
    <div style={{ position: 'relative', minHeight: '640px' }}>
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        {/* Trigger to process */}
        <line x1={centerX} y1={triggerBottomY} x2={centerX} y2={upperRailY - ELBOW_RADIUS} stroke={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={centerX} cy={triggerBottomY} r="3" fill={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* Left branch */}
        <path d={`M ${centerX} ${upperRailY - ELBOW_RADIUS} Q ${centerX} ${upperRailY} ${centerX - ELBOW_RADIUS} ${upperRailY}`} fill="none" stroke={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={centerX - ELBOW_RADIUS} y1={upperRailY} x2={leftCardCenterX + ELBOW_RADIUS} y2={upperRailY} stroke={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <path d={`M ${leftCardCenterX + ELBOW_RADIUS} ${upperRailY} Q ${leftCardCenterX} ${upperRailY} ${leftCardCenterX} ${upperRailY + ELBOW_RADIUS}`} fill="none" stroke={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={leftCardCenterX} y1={upperRailY + ELBOW_RADIUS} x2={leftCardCenterX} y2={processTopY} stroke={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={leftCardCenterX} cy={processTopY} r="3" fill={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* Center branch */}
        <line x1={centerX} y1={upperRailY - ELBOW_RADIUS} x2={centerX} y2={processTopY} stroke={analyzeActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={centerX} cy={processTopY} r="3" fill={analyzeActive ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* Right branch */}
        <path d={`M ${centerX} ${upperRailY - ELBOW_RADIUS} Q ${centerX} ${upperRailY} ${centerX + ELBOW_RADIUS} ${upperRailY}`} fill="none" stroke={outputActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={centerX + ELBOW_RADIUS} y1={upperRailY} x2={rightCardCenterX - ELBOW_RADIUS} y2={upperRailY} stroke={outputActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <path d={`M ${rightCardCenterX - ELBOW_RADIUS} ${upperRailY} Q ${rightCardCenterX} ${upperRailY} ${rightCardCenterX} ${upperRailY + ELBOW_RADIUS}`} fill="none" stroke={outputActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={rightCardCenterX} y1={upperRailY + ELBOW_RADIUS} x2={rightCardCenterX} y2={processTopY} stroke={outputActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={rightCardCenterX} cy={processTopY} r="3" fill={outputActive ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* Process to final */}
        <line x1={centerX} y1={processBottomY} x2={centerX} y2={LOWER_RAIL_Y - ELBOW_RADIUS} stroke={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={centerX} cy={processBottomY} r="3" fill={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* Left final branch */}
        <path d={`M ${centerX} ${LOWER_RAIL_Y - ELBOW_RADIUS} Q ${centerX} ${LOWER_RAIL_Y} ${centerX - ELBOW_RADIUS} ${LOWER_RAIL_Y}`} fill="none" stroke={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={centerX - ELBOW_RADIUS} y1={LOWER_RAIL_Y} x2={finalLeftCenterX + ELBOW_RADIUS} y2={LOWER_RAIL_Y} stroke={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <path d={`M ${finalLeftCenterX + ELBOW_RADIUS} ${LOWER_RAIL_Y} Q ${finalLeftCenterX} ${LOWER_RAIL_Y} ${finalLeftCenterX} ${LOWER_RAIL_Y + ELBOW_RADIUS}`} fill="none" stroke={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={finalLeftCenterX} y1={LOWER_RAIL_Y + ELBOW_RADIUS} x2={finalLeftCenterX} y2={finalTopY} stroke={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={finalLeftCenterX} cy={finalTopY} r="3" fill={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* Right final branch */}
        <path d={`M ${centerX} ${LOWER_RAIL_Y - ELBOW_RADIUS} Q ${centerX} ${LOWER_RAIL_Y} ${centerX + ELBOW_RADIUS} ${LOWER_RAIL_Y}`} fill="none" stroke={finalActive2 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={centerX + ELBOW_RADIUS} y1={LOWER_RAIL_Y} x2={finalRightCenterX - ELBOW_RADIUS} y2={LOWER_RAIL_Y} stroke={finalActive2 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <path d={`M ${finalRightCenterX - ELBOW_RADIUS} ${LOWER_RAIL_Y} Q ${finalRightCenterX} ${LOWER_RAIL_Y} ${finalRightCenterX} ${LOWER_RAIL_Y + ELBOW_RADIUS}`} fill="none" stroke={finalActive2 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={finalRightCenterX} y1={LOWER_RAIL_Y + ELBOW_RADIUS} x2={finalRightCenterX} y2={finalTopY} stroke={finalActive2 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={finalRightCenterX} cy={finalTopY} r="3" fill={finalActive2 ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />
      </svg>

      {/* TRIGGER CARD */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: `translateX(-50%) ${triggerActive ? 'translateY(0) scale(1)' : 'translateY(-15px) scale(0.95)'}`,
        top: TRIGGER_Y,
        opacity: triggerActive ? 1 : 0,
        transition: `all 900ms ${SPRING}`,
        zIndex: 1,
      }}>
        <TriggerCard active={triggerActive}>
          <div style={{ fontWeight: 600, color: BRAND_BLACK, fontSize: '18px', textAlign: 'center' }}>
            Dados recebidos
          </div>
          <p style={{ margin: '6px 0 0', color: NEUTRAL_600, fontSize: '14px', textAlign: 'center' }}>Nova importação via API</p>
          <TriggerStats active={triggerActive} stats={[
            { value: '1,247', label: 'registros' },
            { value: '99.8%', label: 'uptime' },
          ]} />
        </TriggerCard>
      </div>

      {/* PROCESS CARDS */}
      <div style={{
        position: 'absolute',
        left: processLeftX,
        top: PROCESS_Y,
        opacity: fetchActive ? 1 : 0.5,
        transform: fetchActive ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
        transition: `all 800ms ${SPRING}`,
        zIndex: 1,
      }}>
        <ProcessCard title="Extraindo registros" subtitle="Leitura de dados brutos" active={fetchActive}>
          <ProgressBarAnimation active={fetchActive} label="847 registros lidos" progress={94} />
        </ProcessCard>
      </div>

      <div style={{
        position: 'absolute',
        left: processCenterX,
        top: PROCESS_Y,
        opacity: analyzeActive ? 1 : 0.5,
        transform: analyzeActive ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
        transition: `all 800ms ${SPRING} 100ms`,
        zIndex: 1,
      }}>
        <ProcessCard title="Validação & Enriquecimento" subtitle="Regras aplicadas" active={analyzeActive}>
          <BarChartAnimation active={analyzeActive} />
        </ProcessCard>
      </div>

      <div style={{
        position: 'absolute',
        left: processRightX,
        top: PROCESS_Y,
        opacity: outputActive ? 1 : 0.5,
        transform: outputActive ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
        transition: `all 800ms ${SPRING} 200ms`,
        zIndex: 1,
      }}>
        <ProcessCard title="Transformando dados" subtitle="Formato padronizado" active={outputActive}>
          <TransformAnimation active={outputActive} />
        </ProcessCard>
      </div>

      {/* FINAL OUTPUT CARDS */}
      <div style={{
        position: 'absolute',
        left: finalLeftX,
        top: FINAL_Y,
        opacity: finalActive1 ? 1 : 0.5,
        transform: finalActive1 ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
        transition: `all 800ms ${SPRING}`,
        zIndex: 1,
      }}>
        <FinalOutputCard title="CRM atualizado" subtitle="+847 registros/h" active={finalActive1} icon="sync" />
      </div>

      <div style={{
        position: 'absolute',
        left: finalRightX,
        top: FINAL_Y,
        opacity: finalActive2 ? 1 : 0.5,
        transform: finalActive2 ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
        transition: `all 800ms ${SPRING} 100ms`,
        zIndex: 1,
      }}>
        <FinalOutputCard title="Dashboard sincronizado" subtitle="Métricas em tempo real" active={finalActive2} icon="chart" />
      </div>
    </div>
  )
}

// ============================================
// VARIATION 3: Email Marketing Workflow
// ============================================
const EmailMarketingWorkflow = ({ step }: WorkflowProps) => {
  const triggerActive = step >= 0
  const fetchActive = step >= 1
  const analyzeActive = step >= 2
  const outputActive = step >= 3
  const finalActive1 = step >= 4
  const finalActive2 = step >= 5

  const centerX = 500
  const processLeftX = 80
  const processCenterX = centerX - CARD_WIDTH / 2
  const processRightX = 920 - CARD_WIDTH

  const leftCardCenterX = processLeftX + CARD_WIDTH / 2
  const rightCardCenterX = processRightX + CARD_WIDTH / 2

  const finalLeftX = 200
  const finalRightX = 800 - FINAL_CARD_WIDTH
  const finalLeftCenterX = finalLeftX + FINAL_CARD_WIDTH / 2
  const finalRightCenterX = finalRightX + FINAL_CARD_WIDTH / 2

  const triggerBottomY = TRIGGER_Y + TRIGGER_HEIGHT
  const processTopY = PROCESS_Y
  const processBottomY = PROCESS_Y + CARD_HEIGHT
  const finalTopY = FINAL_Y

  return (
    <div style={{ position: 'relative', minHeight: '640px' }}>
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        {/* Trigger to process */}
        <line x1={centerX} y1={triggerBottomY} x2={centerX} y2={UPPER_RAIL_Y - ELBOW_RADIUS} stroke={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={centerX} cy={triggerBottomY} r="3" fill={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* Left branch */}
        <path d={`M ${centerX} ${UPPER_RAIL_Y - ELBOW_RADIUS} Q ${centerX} ${UPPER_RAIL_Y} ${centerX - ELBOW_RADIUS} ${UPPER_RAIL_Y}`} fill="none" stroke={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={centerX - ELBOW_RADIUS} y1={UPPER_RAIL_Y} x2={leftCardCenterX + ELBOW_RADIUS} y2={UPPER_RAIL_Y} stroke={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <path d={`M ${leftCardCenterX + ELBOW_RADIUS} ${UPPER_RAIL_Y} Q ${leftCardCenterX} ${UPPER_RAIL_Y} ${leftCardCenterX} ${UPPER_RAIL_Y + ELBOW_RADIUS}`} fill="none" stroke={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={leftCardCenterX} y1={UPPER_RAIL_Y + ELBOW_RADIUS} x2={leftCardCenterX} y2={processTopY} stroke={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={leftCardCenterX} cy={processTopY} r="3" fill={fetchActive ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* Center branch */}
        <line x1={centerX} y1={UPPER_RAIL_Y - ELBOW_RADIUS} x2={centerX} y2={processTopY} stroke={analyzeActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={centerX} cy={processTopY} r="3" fill={analyzeActive ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* Right branch */}
        <path d={`M ${centerX} ${UPPER_RAIL_Y - ELBOW_RADIUS} Q ${centerX} ${UPPER_RAIL_Y} ${centerX + ELBOW_RADIUS} ${UPPER_RAIL_Y}`} fill="none" stroke={outputActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={centerX + ELBOW_RADIUS} y1={UPPER_RAIL_Y} x2={rightCardCenterX - ELBOW_RADIUS} y2={UPPER_RAIL_Y} stroke={outputActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <path d={`M ${rightCardCenterX - ELBOW_RADIUS} ${UPPER_RAIL_Y} Q ${rightCardCenterX} ${UPPER_RAIL_Y} ${rightCardCenterX} ${UPPER_RAIL_Y + ELBOW_RADIUS}`} fill="none" stroke={outputActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={rightCardCenterX} y1={UPPER_RAIL_Y + ELBOW_RADIUS} x2={rightCardCenterX} y2={processTopY} stroke={outputActive ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={rightCardCenterX} cy={processTopY} r="3" fill={outputActive ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* Process to final */}
        <line x1={centerX} y1={processBottomY} x2={centerX} y2={LOWER_RAIL_Y - ELBOW_RADIUS} stroke={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={centerX} cy={processBottomY} r="3" fill={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* Left final branch */}
        <path d={`M ${centerX} ${LOWER_RAIL_Y - ELBOW_RADIUS} Q ${centerX} ${LOWER_RAIL_Y} ${centerX - ELBOW_RADIUS} ${LOWER_RAIL_Y}`} fill="none" stroke={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={centerX - ELBOW_RADIUS} y1={LOWER_RAIL_Y} x2={finalLeftCenterX + ELBOW_RADIUS} y2={LOWER_RAIL_Y} stroke={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <path d={`M ${finalLeftCenterX + ELBOW_RADIUS} ${LOWER_RAIL_Y} Q ${finalLeftCenterX} ${LOWER_RAIL_Y} ${finalLeftCenterX} ${LOWER_RAIL_Y + ELBOW_RADIUS}`} fill="none" stroke={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={finalLeftCenterX} y1={LOWER_RAIL_Y + ELBOW_RADIUS} x2={finalLeftCenterX} y2={finalTopY} stroke={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={finalLeftCenterX} cy={finalTopY} r="3" fill={finalActive1 ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />

        {/* Right final branch */}
        <path d={`M ${centerX} ${LOWER_RAIL_Y - ELBOW_RADIUS} Q ${centerX} ${LOWER_RAIL_Y} ${centerX + ELBOW_RADIUS} ${LOWER_RAIL_Y}`} fill="none" stroke={finalActive2 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={centerX + ELBOW_RADIUS} y1={LOWER_RAIL_Y} x2={finalRightCenterX - ELBOW_RADIUS} y2={LOWER_RAIL_Y} stroke={finalActive2 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <path d={`M ${finalRightCenterX - ELBOW_RADIUS} ${LOWER_RAIL_Y} Q ${finalRightCenterX} ${LOWER_RAIL_Y} ${finalRightCenterX} ${LOWER_RAIL_Y + ELBOW_RADIUS}`} fill="none" stroke={finalActive2 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <line x1={finalRightCenterX} y1={LOWER_RAIL_Y + ELBOW_RADIUS} x2={finalRightCenterX} y2={finalTopY} stroke={finalActive2 ? LINE_ACTIVE : LINE_INACTIVE} strokeWidth="1.5" style={{ transition: 'stroke 700ms ease' }} />
        <circle cx={finalRightCenterX} cy={finalTopY} r="3" fill={finalActive2 ? LINE_ACTIVE : LINE_INACTIVE} style={{ transition: 'fill 700ms ease' }} />
      </svg>

      {/* TRIGGER CARD */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: `translateX(-50%) ${triggerActive ? 'translateY(0) scale(1)' : 'translateY(-15px) scale(0.95)'}`,
        top: TRIGGER_Y,
        opacity: triggerActive ? 1 : 0,
        transition: `all 900ms ${SPRING}`,
        zIndex: 1,
      }}>
        <TriggerCard active={triggerActive}>
          <div style={{ fontWeight: 600, color: BRAND_BLACK, fontSize: '18px', textAlign: 'center' }}>
            Campanha iniciada
          </div>
          <p style={{ margin: '6px 0 0', color: NEUTRAL_600, fontSize: '14px', textAlign: 'center' }}>Disparo de email marketing</p>
          <AppIconsRow variant="email" />
        </TriggerCard>
      </div>

      {/* PROCESS CARDS */}
      <div style={{
        position: 'absolute',
        left: processLeftX,
        top: PROCESS_Y,
        opacity: fetchActive ? 1 : 0.5,
        transform: fetchActive ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
        transition: `all 800ms ${SPRING}`,
        zIndex: 1,
      }}>
        <ProcessCard title="Saúde do domínio" subtitle="Verificação de entrega" active={fetchActive}>
          <DomainHealthAnimation active={fetchActive} value={69} />
        </ProcessCard>
      </div>

      <div style={{
        position: 'absolute',
        left: processCenterX,
        top: PROCESS_Y,
        opacity: analyzeActive ? 1 : 0.5,
        transform: analyzeActive ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
        transition: `all 800ms ${SPRING} 100ms`,
        zIndex: 1,
      }}>
        <ProcessCard title="Performance da campanha" subtitle="Análise de engajamento" active={analyzeActive}>
          <AreaChartAnimation active={analyzeActive} />
        </ProcessCard>
      </div>

      <div style={{
        position: 'absolute',
        left: processRightX,
        top: PROCESS_Y,
        opacity: outputActive ? 1 : 0.5,
        transform: outputActive ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
        transition: `all 800ms ${SPRING} 200ms`,
        zIndex: 1,
      }}>
        <ProcessCard title="Gerando relatório" subtitle="Métricas consolidadas" active={outputActive}>
          <ReportGenerationAnimation active={outputActive} />
        </ProcessCard>
      </div>

      {/* FINAL OUTPUT CARDS */}
      <div style={{
        position: 'absolute',
        left: finalLeftX,
        top: FINAL_Y,
        opacity: finalActive1 ? 1 : 0.5,
        transform: finalActive1 ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
        transition: `all 800ms ${SPRING}`,
        zIndex: 1,
      }}>
        <FinalOutputCard title="Segmentos atualizados" subtitle="Base segmentada" active={finalActive1} icon="users" />
      </div>

      <div style={{
        position: 'absolute',
        left: finalRightX,
        top: FINAL_Y,
        opacity: finalActive2 ? 1 : 0.5,
        transform: finalActive2 ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
        transition: `all 800ms ${SPRING} 100ms`,
        zIndex: 1,
      }}>
        <FinalOutputCard title="Relatório enviado" subtitle="Stakeholders notificados" active={finalActive2} icon="send" />
      </div>
    </div>
  )
}

// ============================================
// CARD COMPONENTS
// ============================================

interface TriggerCardProps {
  children: React.ReactNode
  active: boolean
}

const TriggerCard = ({ children }: TriggerCardProps) => (
  <div style={{
    background: '#ffffff',
    borderRadius: '16px',
    padding: '22px 32px',
    border: `1px solid ${NEUTRAL_200}`,
    boxShadow: '0 4px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
    minWidth: '300px',
  }}>
    {children}
  </div>
)

interface ProcessCardProps {
  title: string
  subtitle: string
  children: React.ReactNode
  active: boolean
}

const ProcessCard = ({ title, subtitle, children, active }: ProcessCardProps) => (
  <div style={{
    background: '#ffffff',
    borderRadius: '16px',
    padding: '22px 26px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
    border: `1px solid ${NEUTRAL_200}`,
    width: `${CARD_WIDTH}px`,
    height: `${CARD_HEIGHT}px`,
    display: 'flex',
    flexDirection: 'column' as const,
  }}>
    <div style={{
      fontSize: '15px',
      fontWeight: 600,
      color: active ? BRAND_BLACK : NEUTRAL_400,
      transition: 'color 400ms ease',
    }}>
      {title}
    </div>
    <div style={{ fontSize: '14px', color: NEUTRAL_400, marginTop: '2px' }}>{subtitle}</div>
    <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
      {children}
    </div>
  </div>
)

type IconType = 'database' | 'notification' | 'sync' | 'chart' | 'users' | 'send'

interface FinalOutputCardProps {
  title: string
  subtitle: string
  active: boolean
  icon: IconType
}

const FinalOutputCard = ({ title, subtitle, active, icon }: FinalOutputCardProps) => {
  const getIcon = () => {
    const color = BRAND_SECONDARY
    const icons: Record<IconType, React.ReactNode> = {
      database: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
      notification: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      ),
      sync: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <path d="M21 2v6h-6"/>
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
          <path d="M3 22v-6h6"/>
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
        </svg>
      ),
      chart: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <path d="M18 20V10"/>
          <path d="M12 20V4"/>
          <path d="M6 20v-6"/>
        </svg>
      ),
      users: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      send: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      ),
    }
    return icons[icon] || icons.database
  }

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '16px',
      padding: '20px 24px',
      boxShadow: active ? `0 4px 20px rgba(235, 81, 0, 0.12), 0 1px 3px rgba(0,0,0,0.04)` : '0 4px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
      border: active ? `2px solid ${BRAND_SECONDARY}` : `1px solid ${NEUTRAL_200}`,
      width: `${FINAL_CARD_WIDTH}px`,
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      transition: 'border 400ms ease, box-shadow 400ms ease',
    }}>
      {/* Icon Container */}
      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: '12px',
        background: active ? 'rgba(235, 81, 0, 0.06)' : NEUTRAL_100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transition: 'all 400ms ease',
      }}>
        {getIcon()}
        {/* Animated ring indicator */}
        <svg
          style={{
            position: 'absolute',
            top: -4,
            left: -4,
            width: '60px',
            height: '60px',
            transform: 'rotate(-90deg)',
          }}
        >
          <circle
            cx="30"
            cy="30"
            r="26"
            fill="none"
            stroke={active ? BRAND_SECONDARY : 'transparent'}
            strokeWidth="2"
            strokeDasharray={163.36}
            strokeDashoffset={active ? 0 : 163.36}
            strokeLinecap="round"
            style={{ transition: `stroke-dashoffset 1200ms ${SPRING}, stroke 400ms ease` }}
          />
        </svg>
      </div>
      <div>
        <div style={{
          fontWeight: 600,
          fontSize: '14px',
          color: active ? BRAND_BLACK : NEUTRAL_400,
          transition: 'color 400ms ease',
        }}>
          {title}
        </div>
        <div style={{
          fontSize: '14px',
          color: active ? NEUTRAL_600 : NEUTRAL_300,
          marginTop: '3px',
          transition: 'color 400ms ease',
        }}>
          {subtitle}
        </div>
      </div>
    </div>
  )
}

// ============================================
// ANIMATION COMPONENTS
// ============================================

interface AnimationProps {
  active: boolean
}

const AppIconsRow = ({ variant }: { variant?: 'email' }) => (
  <div style={{ display: 'flex', gap: '10px', marginTop: '14px', justifyContent: 'center' }}>
    <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
    <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M12 11L6 1h6l6 10z"/><path fill="#FBBC04" d="M6 1l-6 10 3 5h6l3-5z"/><path fill="#34A853" d="M24 11l-3 5H9l3-5z"/></svg>
    {variant !== 'email' && <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#000" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466z"/></svg>}
    <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#FF7A59" d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.984V3.06A2.143 2.143 0 0 0 17.32.949h-.04a2.143 2.143 0 0 0-2.11 2.111v.04c0 .869.503 1.615 1.228 1.972v2.86a5.866 5.866 0 0 0-2.627 1.263l-6.933-5.374a2.212 2.212 0 0 0 .106-.676A2.212 2.212 0 1 0 4.73 5.357l6.81 5.277a5.895 5.895 0 0 0-.248 6.615l-2.098 2.098a1.794 1.794 0 1 0 1.712 1.282l2.074-2.074a5.9 5.9 0 1 0 6.561-10.531z"/></svg>
    <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z"/><path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z"/><path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z"/><path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52z"/></svg>
  </div>
)

interface TriggerStatsProps {
  active: boolean
  stats: { value: string; label: string }[]
}

const TriggerStats = ({ active, stats }: TriggerStatsProps) => (
  <div style={{ display: 'flex', gap: '24px', marginTop: '16px', justifyContent: 'center' }}>
    {stats.map((stat, i) => (
      <div key={i} style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '28px',
          fontWeight: 700,
          color: active ? BRAND_PRIMARY : NEUTRAL_400,
          lineHeight: 1,
          transition: 'color 600ms ease',
        }}>
          {stat.value}
        </div>
        <div style={{ fontSize: '14px', color: NEUTRAL_400, marginTop: '4px' }}>{stat.label}</div>
      </div>
    ))}
  </div>
)

const DataFetchAnimation = ({ active }: AnimationProps) => (
  <div style={{ width: '100%', display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
    {[100, 80, 60].map((w, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: active ? BRAND_PRIMARY : NEUTRAL_200,
          transition: `background 400ms ease ${i * 100}ms`,
        }} />
        <div style={{
          height: '10px',
          width: active ? `${w}%` : '20%',
          background: NEUTRAL_200,
          borderRadius: '5px',
          transition: `width 800ms ${SPRING} ${i * 100}ms`,
        }} />
      </div>
    ))}
  </div>
)

const AnalysisAnimation = ({ active }: AnimationProps) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%' }}>
    <ProgressRing progress={active ? 87 : 0} size={56} color={BRAND_PRIMARY} />
    <div>
      <div style={{
        fontSize: '26px',
        fontWeight: 700,
        color: active ? BRAND_PRIMARY : NEUTRAL_300,
        lineHeight: 1,
        transition: 'color 600ms ease',
      }}>
        87%
      </div>
      <div style={{ fontSize: '14px', color: NEUTRAL_400, marginTop: '4px' }}>processado</div>
    </div>
  </div>
)

const DocumentGenerationAnimation = ({ active }: AnimationProps) => (
  <div style={{ width: '100%', position: 'relative' }}>
    <div style={{
      width: '100%',
      height: '60px',
      background: NEUTRAL_100,
      borderRadius: '8px',
      border: `1px solid ${NEUTRAL_200}`,
      overflow: 'hidden',
      position: 'relative',
    }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          position: 'absolute',
          left: '12px',
          top: `${12 + i * 16}px`,
          height: '8px',
          width: active ? `${75 - i * 15}%` : '0%',
          background: NEUTRAL_200,
          borderRadius: '4px',
          transition: `width 600ms ease ${200 + i * 150}ms`,
        }} />
      ))}
      <div style={{
        position: 'absolute',
        right: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        background: active ? 'rgba(8, 80, 66, 0.08)' : NEUTRAL_100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: active ? 1 : 0,
        transition: 'all 400ms ease 800ms',
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={BRAND_PRIMARY} strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
    </div>
  </div>
)

const ProgressBarAnimation = ({ active, label, progress }: AnimationProps & { label: string; progress: number }) => (
  <div style={{ width: '100%' }}>
    <div style={{
      height: '10px',
      background: NEUTRAL_200,
      borderRadius: '999px',
      overflow: 'hidden',
    }}>
      <div style={{
        height: '100%',
        width: active ? `${progress}%` : '0%',
        background: BRAND_PRIMARY,
        borderRadius: '999px',
        transition: `width 1400ms ${SPRING}`,
      }} />
    </div>
    <div style={{ fontSize: '14px', color: NEUTRAL_400, marginTop: '8px' }}>{label}</div>
  </div>
)

const BarChartAnimation = ({ active }: AnimationProps) => {
  const bars = [55, 72, 48, 85, 62, 78, 42]
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '50px', width: '100%' }}>
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: active ? `${h * 0.55}px` : '4px',
            background: BRAND_PRIMARY,
            borderRadius: '4px 4px 0 0',
            transition: `height 900ms ${SPRING} ${i * 80}ms`,
          }}
        />
      ))}
    </div>
  )
}

const TransformAnimation = ({ active }: AnimationProps) => (
  <div style={{ width: '100%' }}>
    <svg width="100%" height="50" viewBox="0 0 220 50" preserveAspectRatio="xMidYMid meet">
      {[0, 1, 2].map(i => (
        <rect
          key={`in-${i}`}
          x={10}
          y={8 + i * 15}
          width={active ? 50 : 20}
          height={10}
          rx={3}
          fill={NEUTRAL_200}
          style={{ transition: `width 500ms ease ${i * 100}ms` }}
        />
      ))}
      <path
        d={active ? "M 70 25 L 110 25" : "M 70 25 L 70 25"}
        fill="none"
        stroke={active ? BRAND_PRIMARY : NEUTRAL_200}
        strokeWidth="2"
        strokeLinecap="round"
        markerEnd="url(#wfd-arrowPrimary)"
        style={{ transition: 'all 600ms ease 300ms' }}
      />
      <defs>
        <marker id="wfd-arrowPrimary" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill={active ? BRAND_PRIMARY : NEUTRAL_200} style={{ transition: 'fill 600ms ease' }} />
        </marker>
      </defs>
      <rect
        x={120}
        y={10}
        width={active ? 70 : 0}
        height={30}
        rx={4}
        fill={active ? 'rgba(8, 80, 66, 0.08)' : 'transparent'}
        stroke={active ? BRAND_PRIMARY : 'transparent'}
        strokeWidth="1.5"
        style={{ transition: 'all 600ms ease 500ms' }}
      />
      <text
        x={155}
        y={30}
        textAnchor="middle"
        fontSize="11"
        fontWeight="500"
        fill={BRAND_PRIMARY}
        style={{ opacity: active ? 1 : 0, transition: 'opacity 400ms ease 700ms' }}
      >
        JSON
      </text>
    </svg>
  </div>
)

const DomainHealthAnimation = ({ active, value }: AnimationProps & { value: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%' }}>
    <ProgressRing progress={active ? value : 0} size={56} color={BRAND_PRIMARY} strokeWidth={6} />
    <div style={{
      padding: '6px 16px',
      background: active ? 'rgba(8, 80, 66, 0.08)' : NEUTRAL_100,
      borderRadius: '8px',
      fontSize: '18px',
      fontWeight: 700,
      color: active ? BRAND_PRIMARY : NEUTRAL_300,
      transition: 'all 400ms ease',
    }}>
      {value}%
    </div>
  </div>
)

const AreaChartAnimation = ({ active }: AnimationProps) => {
  const height = 50
  const width = 220
  const points = "0,45 35,38 70,35 105,40 140,28 175,22 210,24 220,18"

  return (
    <div style={{ width: '100%' }}>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="wfd-primaryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={BRAND_PRIMARY} stopOpacity="0.25" />
            <stop offset="100%" stopColor={BRAND_PRIMARY} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <polygon
          points={`0,${height} ${points} ${width},${height}`}
          fill="url(#wfd-primaryGradient)"
          style={{ opacity: active ? 1 : 0, transition: 'opacity 900ms ease' }}
        />
        <polyline
          points={points}
          fill="none"
          stroke={BRAND_PRIMARY}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: active ? 1 : 0.3, transition: 'opacity 900ms ease' }}
        />
      </svg>
    </div>
  )
}

const ReportGenerationAnimation = ({ active }: AnimationProps) => (
  <div style={{ width: '100%', display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
    {['100%', '70%', '85%', '55%'].map((w, i) => (
      <div
        key={i}
        style={{
          height: '10px',
          width: active ? w : '20%',
          background: i === 0 ? 'rgba(8, 80, 66, 0.19)' : NEUTRAL_200,
          borderRadius: '5px',
          transition: `width 700ms ${SPRING} ${i * 100}ms`,
        }}
      />
    ))}
  </div>
)

interface ProgressRingProps {
  progress: number
  size?: number
  color?: string
  strokeWidth?: number
}

const ProgressRing = ({ progress, size = 56, color = BRAND_PRIMARY, strokeWidth = 5 }: ProgressRingProps) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={NEUTRAL_200}
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: `stroke-dashoffset 1400ms ${SPRING}` }}
      />
    </svg>
  )
}
