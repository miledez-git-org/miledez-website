import { WorkflowVisualProps } from './types'
import WorkflowStep from './WorkflowStep'

export default function WorkflowVisual({
  title,
  steps,
  layout = 'vertical',
  variant = 'card',
  showStepNumbers = false,
  className = '',
}: WorkflowVisualProps) {
  const isVertical = layout === 'vertical'

  // Container styles based on variant
  const variantStyles = {
    card: 'bg-white border border-neutral-200 rounded-lg shadow-card p-6',
    inline: 'bg-transparent',
    presentation: 'bg-white border border-neutral-200 rounded-lg shadow-md p-8',
  }

  // Title styles based on variant
  const titleStyles = {
    card: 'text-sm font-semibold text-neutral-700 uppercase tracking-wide',
    inline: 'text-sm font-semibold text-neutral-700 uppercase tracking-wide',
    presentation: 'text-base font-semibold text-neutral-800 uppercase tracking-wide',
  }

  return (
    <div className={`${variantStyles[variant]} ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-neutral-200">
        <div className="w-2 h-2 bg-brand-primary rounded-sm" />
        <span className={titleStyles[variant]}>
          {title}
        </span>
      </div>

      {/* Steps */}
      <div 
        className={`
          ${isVertical 
            ? 'flex flex-col' 
            : 'flex flex-row items-start justify-between'
          }
        `}
      >
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1
          const showConnector = !isLast
          // Alternate connector side: even index = left, odd index = right
          return (
            <WorkflowStep
              key={index}
              step={step}
              index={index}
              isLast={isLast}
              layout={layout}
              showStepNumber={showStepNumbers}
              showConnector={showConnector}
            />
          )
        })}
      </div>
    </div>
  )
}
