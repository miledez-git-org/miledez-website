'use client'

const GearIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b0f1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1.08z" />
  </svg>
)

const BarChartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b0f1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b0f1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const BoltIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const items = [
  {
    icon: <GearIcon />,
    label: 'Tarefas repetitivas rodam sozinhas',
  },
  {
    icon: <BarChartIcon />,
    label: 'Dados reunidos em um só lugar',
  },
  {
    icon: <CheckCircleIcon />,
    label: 'Checagem automática',
  },
]

export default function HeroAutomationDiagram() {
  // Icon box is 64px (w-16). Grid has 3 equal columns.
  // Vertical drops must land at the horizontal center of each column.
  // With a 520px viewBox and 3 equal cols (each ~173px), centers are at ~87, 260, 433.
  const left = 87
  const center = 260
  const right = 433

  return (
    <div className="w-full max-w-[520px] flex flex-col items-center select-none py-8 lg:py-12">
      {/* Top label */}
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-500 mb-5">
        Automação
      </p>

      {/* Hub icon */}
      <div
        className="w-[72px] h-[72px] bg-brand-primary flex items-center justify-center rounded-xl"
        style={{ boxShadow: '3px 4px 12px rgba(107, 15, 26, 0.25)' }}
      >
        <BoltIcon />
      </div>

      {/* Desktop connector lines — straight T-shape, touching box borders */}
      <svg
        width="100%"
        height="100"
        viewBox="0 0 520 100"
        fill="none"
        preserveAspectRatio="xMidYMin meet"
        className="w-full hidden sm:block"
      >
        {/* Vertical stem from hub down to horizontal bar */}
        <line x1={center} y1="0" x2={center} y2="40" stroke="#d4d4d4" strokeWidth="1.5" />
        {/* Horizontal bar spanning left to right column centers */}
        <line x1={left} y1="40" x2={right} y2="40" stroke="#d4d4d4" strokeWidth="1.5" />
        {/* Left vertical drop — ends at box top border */}
        <line x1={left} y1="40" x2={left} y2="100" stroke="#d4d4d4" strokeWidth="1.5" />
        {/* Center vertical drop */}
        <line x1={center} y1="40" x2={center} y2="100" stroke="#d4d4d4" strokeWidth="1.5" />
        {/* Right vertical drop */}
        <line x1={right} y1="40" x2={right} y2="100" stroke="#d4d4d4" strokeWidth="1.5" />
      </svg>

      {/* Mobile connector — simple vertical line */}
      <div className="sm:hidden w-px h-10 bg-neutral-300" />

      {/* Desktop — 3 columns */}
      <div className="w-full hidden sm:grid grid-cols-3 gap-10">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 border-2 border-brand-primary rounded-xl flex items-center justify-center bg-white">
              {item.icon}
            </div>
            <p className="mt-4 text-sm text-neutral-600 leading-snug">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile — vertical stack */}
      <div className="sm:hidden flex flex-col items-center gap-0 w-full">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 border-2 border-brand-primary rounded-xl flex items-center justify-center bg-white">
              {item.icon}
            </div>
            <p className="mt-3 text-sm text-neutral-600 leading-snug text-center">
              {item.label}
            </p>
            {index < items.length - 1 && (
              <div className="w-px h-8 bg-neutral-300 mt-3" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
