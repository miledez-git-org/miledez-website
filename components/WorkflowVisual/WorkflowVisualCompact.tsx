import { WorkflowVisualCompactProps } from './types'

function StepIndicator({ index, isLast }: { index: number; isLast: boolean }) {
  if (isLast) {
    // Green checkmark
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
        <path d="M5 12.5L9.5 17L19 6.5" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (index === 0) {
    // Trigger — bolt/zap icon (black outline)
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#87a96b" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  // Middle steps — gear icon (black outline)
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
      <circle cx="12" cy="12" r="3" stroke="#87a96b" strokeWidth="1.75" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1.08z" stroke="#87a96b" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function WorkflowVisualCompact({
  title,
  subtitle,
  steps,
  className = '',
}: WorkflowVisualCompactProps) {
  // Collect unique logos from all steps (max 5)
  const allLogos = Array.from(
    new Set(steps.flatMap((step) => step.logos ?? []))
  ).slice(0, 5)

  return (
    <div className={`w-fit ${className}`}>
      {/* Header */}
      <div className="mb-5">
        <h3 className="heading-component text-lg text-brand-black">{title}</h3>
        {subtitle && (
          <p className="text-base text-neutral-500 mt-1">{subtitle}</p>
        )}
        {allLogos.length > 0 && (
          <div className="flex items-center gap-2 mt-3">
            {allLogos.map((logo) => (
              <img key={logo} src={`/software-company-logos/${logo}.svg`} alt="" width={24} height={24} className="opacity-40" />
            ))}
          </div>
        )}
      </div>

      {/* Steps as cards with connectors */}
      <div className="flex flex-col items-stretch">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1
          return (
            <div key={index}>
              {/* Step Card */}
              <div className="flex items-center gap-3 bg-white rounded-lg border border-neutral-200 px-4 py-2.5" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
                <StepIndicator index={index} isLast={isLast} />
                <div>
                  <p className="text-base font-medium text-brand-black leading-snug">
                    {step.label}
                  </p>
                  {step.sublabel && (
                    <p className="text-base text-neutral-500 leading-snug">
                      {step.sublabel}
                    </p>
                  )}
                </div>
              </div>

              {/* Connector between cards (not after last) */}
              {!isLast && (
                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-3 bg-neutral-300" />
                    <svg
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      className="text-neutral-400"
                    >
                      <path d="M4 6L0 0H8L4 6Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
