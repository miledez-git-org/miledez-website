'use client'

import Image from 'next/image'

/**
 * HeroWorkflowStatic - Floating icons workflow visualization
 * Layout: Trigger (top-left) → Process (right offset) → Result (left offset, not aligned)
 * 3 icons per card, spread positioning to avoid overlaps
 */

// Icon configurations - 3 per card with spread positions
const TRIGGER_ICONS = [
  { icon: '/icons/whatsapp.svg', position: 'top-left' },
  { icon: '/icons/gmail.svg', position: 'right-middle' },
  { icon: '/icons/google-calendar.svg', position: 'bottom-left' },
]

const PROCESS_ICONS = [
  { icon: '/icons/google-sheets.svg', position: 'left-middle' },
  { icon: '/icons/excel.svg', position: 'top-right' },
  { icon: '/icons/notion.svg', position: 'bottom-right' },
]

const RESULT_ICONS = [
  { icon: '/icons/shopify.svg', position: 'top-center' },
  { icon: '/icons/google-drive.svg', position: 'right-middle' },
  { icon: '/icons/pix.svg', position: 'bottom-left' },
]

// Floating icon box component
interface FloatingIconProps {
  icon: string
  position: string
}

function FloatingIcon({ icon, position }: FloatingIconProps) {
  // Position styles - spread around card edges, not just corners
  const positionStyles: Record<string, string> = {
    'top-left': 'absolute -top-4 -left-4',
    'top-center': 'absolute -top-4 left-1/2 -translate-x-1/2',
    'top-right': 'absolute -top-4 -right-4',
    'right-middle': 'absolute top-1/2 -right-4 -translate-y-1/2',
    'bottom-right': 'absolute -bottom-4 -right-4',
    'bottom-center': 'absolute -bottom-4 left-1/2 -translate-x-1/2',
    'bottom-left': 'absolute -bottom-4 -left-4',
    'left-middle': 'absolute top-1/2 -left-4 -translate-y-1/2',
  }

  return (
    <div
      className={`
        ${positionStyles[position]}
        w-11 h-11 bg-white rounded-lg
        shadow-card-icon
        flex items-center justify-center
        z-10
      `}
    >
      <Image
        src={icon}
        alt=""
        width={26}
        height={26}
        className="shrink-0"
      />
    </div>
  )
}

// Workflow card with floating icons
interface WorkflowCardProps {
  title: string
  subtitle?: string
  icons: Array<{ icon: string; position: string }>
  variant?: 'default' | 'success'
}

function WorkflowCard({
  title,
  subtitle,
  icons,
  variant: _variant = 'default',
}: WorkflowCardProps) {
  return (
    <div className="relative">
      {/* Floating icons */}
      {icons.map((item, i) => (
        <FloatingIcon key={i} icon={item.icon} position={item.position} />
      ))}

      {/* Card body - larger with more padding */}
      <div
        className={`
          bg-neutral-100 rounded-xl px-10 py-8
          shadow-[0_1px_1px_rgba(139,32,32,0.11),0_2px_2px_rgba(139,32,32,0.11),0_4px_4px_rgba(139,32,32,0.11),0_8px_8px_rgba(139,32,32,0.11),0_16px_16px_rgba(139,32,32,0.11),0_32px_32px_rgba(139,32,32,0.11)]
          border border-neutral-200
          min-w-[180px]
        `}
      >
        <h3 className="font-display text-base font-semibold text-neutral-900 text-center">
          {title}
        </h3>
        {subtitle && (
          <p className="font-display text-xs text-neutral-500 text-center mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}

// SVG connector lines with rounded elbows
function ConnectorLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Line from Card 1 (Trigger) to Card 2 (Process) - down then right */}
      <path
        d="M 90 115 L 90 175 Q 90 190 105 190 L 210 190"
        fill="none"
        stroke="#e5e5e5"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Line from Card 2 (Process) to Card 3 (Result) - down then left */}
      <path
        d="M 300 270 L 300 340 Q 300 355 285 355 L 140 355"
        fill="none"
        stroke="#e5e5e5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Main component
export default function HeroWorkflowStatic() {
  return (
    <div className="relative w-full h-[480px]">
      {/* Connector lines (behind cards) */}
      <ConnectorLines />

      {/* Card 1 - Trigger (top-left) */}
      <div className="absolute top-0 left-0">
        <WorkflowCard
          title="Gatilho"
          subtitle="Evento inicial"
          icons={TRIGGER_ICONS}
        />
      </div>

      {/* Card 2 - Process (middle, offset right - increased) */}
      <div className="absolute top-[155px] left-[210px]">
        <WorkflowCard
          title="Processamento"
          subtitle="Automação"
          icons={PROCESS_ICONS}
        />
      </div>

      {/* Card 3 - Result (bottom, offset left but not aligned with Trigger) */}
      <div className="absolute top-[310px] left-[60px]">
        <WorkflowCard
          title="Resultado"
          subtitle="Ação executada"
          icons={RESULT_ICONS}
          variant="success"
        />
      </div>
    </div>
  )
}
