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

export interface WorkflowExample {
  icon: IconType
  text: string
}

export interface WorkflowStep {
  icon: IconType
  label: string
  sublabel?: string
  examples?: WorkflowExample[]
}

export interface WorkflowVisualProps {
  /** Title displayed at the top of the workflow */
  title: string
  /** Array of workflow steps */
  steps: WorkflowStep[]
  /** Layout direction - vertical for sidebars, horizontal for presentations */
  layout?: 'vertical' | 'horizontal'
  /** Visual style variant */
  variant?: 'card' | 'inline' | 'presentation'
  /** Show step numbers (1, 2, 3, 4) - hidden by default */
  showStepNumbers?: boolean
  /** Additional CSS classes */
  className?: string
}

export interface WorkflowStepProps {
  step: WorkflowStep
  index: number
  isLast: boolean
  layout: 'vertical' | 'horizontal'
  showStepNumber: boolean
}

export interface WorkflowConnectorProps {
  layout: 'vertical' | 'horizontal'
  /** Index of the connector (0 = after step 1, 1 = after step 2, etc.) */
  index: number
  /** Whether this is the last connector (connects to the final/result step) */
  isLast: boolean
}

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
  /** Array of workflow steps (3 steps recommended) */
  steps: HeroWorkflowStep[]
  /** Additional CSS classes */
  className?: string
}
