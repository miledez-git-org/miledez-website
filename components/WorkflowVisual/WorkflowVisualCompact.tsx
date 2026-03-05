import { WorkflowVisualCompactProps } from './types'

export default function WorkflowVisualCompact({
  title,
  steps,
  className = '',
}: WorkflowVisualCompactProps) {
  return (
    <div className={`p-6 ${className}`}>
      {/* Header */}
      <div className="mb-5">
        <h3 className="text-base font-semibold text-brand-black">{title}</h3>
      </div>

      {/* Steps as cards with connectors */}
      <div className="flex flex-col items-start">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1
          return (
            <div key={index}>
              {/* Step Card */}
              <div className="w-[280px] flex items-center justify-center gap-3 bg-white rounded-lg px-5 py-4 border border-neutral-200 shadow-card hover:shadow-card-hover transition-shadow duration-200">
                {step.logos && step.logos.length > 0 && (
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {step.logos.map((logo) => (
                      <img key={logo} src={`/logos/${logo}.svg`} alt="" width={32} height={32} className="flex-shrink-0" />
                    ))}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-[15px] font-medium text-brand-black leading-snug">
                    {step.label}
                  </p>
                  {step.sublabel && (
                    <p className="text-[13px] text-neutral-500 leading-snug mt-0.5">
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
