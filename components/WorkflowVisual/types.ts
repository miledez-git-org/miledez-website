export type IconType =
  | 'document'
  | 'mail'
  | 'folder'
  | 'check'
  | 'process'
  | 'calendar'
  | 'cart'
  | 'box'
  | 'truck'
  | 'user'
  | 'creditCard'
  | 'bell'
  | 'form'
  | 'team'
  | 'data'
  | 'sync'
  | 'clock'
  | 'file'
  | 'chart'
  | 'tag'
  | 'result'

// Simplified step interface for hero section workflows (no examples)
export interface HeroWorkflowStep {
  icon: IconType
  label: string
  sublabel?: string
  logos?: string[]
}

export interface WorkflowVisualCompactProps {
  /** Title displayed at the top of the workflow */
  title: string
  /** Short description below the title */
  subtitle?: string
  /** Array of workflow steps (3 steps recommended) */
  steps: HeroWorkflowStep[]
  /** Additional CSS classes */
  className?: string
}
