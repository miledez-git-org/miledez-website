export interface AssessmentFormData {
  setor: 'saude' | 'servicos' | 'agropecuaria'
  gargalo: string
  ferramentas: string[]
  nome: string
  email: string
  empresa: string
}

export interface WorkflowRecommendation {
  nome: string
  ferramentas: string
  resultado: string
  tempo_economizado: string
}

export interface AssessmentResponse {
  success: boolean
  results: {
    workflows: WorkflowRecommendation[]
  }
  leadId?: string
}
