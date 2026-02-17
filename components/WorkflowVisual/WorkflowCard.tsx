'use client'

type StepType = 'trigger' | 'process' | 'result'

type IconKey = 'gmail' | 'sheets' | 'whatsapp' | 'excel' | 'pdf' | 'pix' | 'calendar' | 'slack'

export interface WorkflowCardData {
  step: string
  type: StepType
  header: string
  what: string
  icons: IconKey[]
}

const STEP_TYPE_COLORS: Record<StepType, string> = {
  trigger: '#2D5A7B',
  process: '#8b2020',
  result: '#2D6B4A',
}

const STAGE_LABELS: Record<StepType, string> = {
  trigger: 'Gatilho \u00b7 Processo iniciado',
  process: 'Tarefa automatizada',
  result: 'Resultado \u00b7 Entrega final',
}

const STAGE_ICONS: Record<StepType, string> = {
  trigger: '\u26a1',
  process: '\u2699',
  result: '\u2713',
}

const ICON_REGISTRY: Record<IconKey, { letter: string; color: string }> = {
  gmail: { letter: 'G', color: '#EA4335' },
  sheets: { letter: 'S', color: '#34A853' },
  whatsapp: { letter: 'W', color: '#25D366' },
  excel: { letter: 'E', color: '#217346' },
  pdf: { letter: 'P', color: '#FF0000' },
  pix: { letter: '\u20b1', color: '#32BCAD' },
  calendar: { letter: 'C', color: '#4285F4' },
  slack: { letter: 'S', color: '#4A154B' },
}

interface WorkflowCardProps {
  card: WorkflowCardData
  variant?: 'solo' | 'compact'
}

export default function WorkflowCard({ card, variant = 'compact' }: WorkflowCardProps) {
  const typeColor = STEP_TYPE_COLORS[card.type]
  const stageLabel = STAGE_LABELS[card.type]
  const stageIcon = STAGE_ICONS[card.type]

  const isSolo = variant === 'solo'

  // Dimensions based on variant
  const cardWidth = isSolo ? 'w-[210px] max-w-[280px]' : 'w-[160px] min-h-[160px] max-w-[240px]'
  const headerPadding = isSolo ? 'px-4 py-[10px]' : 'px-3 py-[7px]'
  const bodyPadding = isSolo ? 'px-4 py-[14px]' : 'px-3 py-[10px]'
  const bodyGap = isSolo ? 'gap-3' : 'gap-2'
  const iconSize = isSolo ? 'w-[22px] h-[22px]' : 'w-4 h-4'
  const iconFontSize = isSolo ? 'text-[10px]' : 'text-[7px]'
  const iconGap = isSolo ? 'gap-3' : 'gap-2'
  const stepNumSize = isSolo ? 'text-[10px]' : 'text-[8px]'
  const headerLabelSize = isSolo ? 'text-xs' : 'text-[9px]'
  const whatSize = isSolo ? 'text-[13px] leading-[1.45]' : 'text-[11px] leading-[1.4]'
  const stageIconSize = isSolo ? 'text-[13px]' : 'text-[13px]'
  const stageLabelSize = isSolo ? 'text-xs' : 'text-[10px]'
  const stageMarginTop = isSolo ? 'mt-[10px] pt-[10px]' : 'mt-[6px] pt-[6px]'

  return (
    <div
      className={`${cardWidth} flex flex-col rounded-[6px] overflow-hidden`}
      style={{
        border: '1px solid #E0E0E0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
      }}
    >
      {/* Header */}
      <div
        className={`${headerPadding} flex items-baseline gap-2`}
        style={{ backgroundColor: typeColor }}
      >
        <span
          className={`${stepNumSize} font-medium text-white/55`}
          style={{ letterSpacing: '0.04em', fontFamily: 'var(--font-manrope)' }}
        >
          {card.step}
        </span>
        <span
          className={`${headerLabelSize} font-semibold text-white uppercase`}
          style={{ letterSpacing: '0.05em', fontFamily: 'var(--font-manrope)' }}
        >
          {card.header}
        </span>
      </div>

      {/* Body */}
      <div className={`${bodyPadding} flex flex-col flex-1 bg-white ${bodyGap}`}>
        {/* What line */}
        <p
          className={`${whatSize} font-normal text-[#1A1A1A]`}
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {card.what}
        </p>

        {/* Tool icons - pushed to bottom in compact mode */}
        <div className={`flex items-center ${iconGap} ${!isSolo ? 'mt-auto' : ''}`}>
          {card.icons.map((iconKey) => {
            const iconData = ICON_REGISTRY[iconKey]
            if (!iconData) return null
            return (
              <div
                key={iconKey}
                className={`${iconSize} flex items-center justify-center rounded-[3px]`}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E0E0E0',
                }}
              >
                <span
                  className={`${iconFontSize} font-bold`}
                  style={{
                    color: iconData.color,
                    fontFamily: 'var(--font-manrope)',
                  }}
                >
                  {iconData.letter}
                </span>
              </div>
            )
          })}
        </div>

        {/* Stage footer */}
        <div
          className={`flex items-center gap-1.5 ${stageMarginTop}`}
          style={{ borderTop: '1px solid #E0E0E0' }}
        >
          <span
            className={`${stageIconSize} font-semibold`}
            style={{ color: typeColor }}
          >
            {stageIcon}
          </span>
          <span
            className={`${stageLabelSize} font-normal text-[#6B6B6B]`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {stageLabel}
          </span>
        </div>
      </div>
    </div>
  )
}
