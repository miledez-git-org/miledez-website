import type { Locale } from '@/lib/i18n'
import { WorkflowStep, HeroWorkflowStep } from './types'
import {
  heroPresetsEn,
  saudeWorkflowsCompactEn,
  servicosWorkflowsCompactEn,
  agronegocioWorkflowsCompactEn,
} from './presets.en'

export interface WorkflowPreset {
  title: string
  steps: WorkflowStep[]
}

export interface HeroWorkflowPreset {
  title: string
  steps: HeroWorkflowStep[]
}

export type Industry = 'saude' | 'servicos' | 'agronegocio'

export const industryPresets: Record<Industry, WorkflowPreset> = {
  saude: {
    title: 'Automação de Documentos',
    steps: [
      {
        icon: 'user',
        label: 'Novo paciente',
        sublabel: 'Um cadastro inicia o processo de coleta.',
        examples: [
          { icon: 'form', text: 'Ficha preenchida' },
          { icon: 'calendar', text: 'Consulta agendada' },
          { icon: 'user', text: 'Dados básicos capturados' },
        ],
      },
      {
        icon: 'mail',
        label: 'Formulário enviado',
        sublabel: 'Ficha de anamnese enviada automaticamente.',
        examples: [
          { icon: 'mail', text: 'Email personalizado' },
          { icon: 'form', text: 'Link para preenchimento' },
          { icon: 'bell', text: 'Lembrete se nao responder' },
        ],
      },
      {
        icon: 'folder',
        label: 'Docs organizados',
        sublabel: 'Arquivos classificados automaticamente.',
        examples: [
          { icon: 'folder', text: 'Pasta do paciente' },
          { icon: 'document', text: 'Exames anexados' },
          { icon: 'data', text: 'Histórico atualizado' },
        ],
      },
      {
        icon: 'check',
        label: 'Prontuário completo',
        sublabel: 'Tudo pronto para o atendimento.',
        examples: [
          { icon: 'check', text: 'Documentos validados' },
          { icon: 'bell', text: 'Pendências sinalizadas' },
          { icon: 'team', text: 'Equipe notificada' },
        ],
      },
    ],
  },
  servicos: {
    title: 'Gestão de Contratos',
    steps: [
      {
        icon: 'user',
        label: 'Cliente cadastrado',
        sublabel: 'Dados registrados no sistema.',
        examples: [
          { icon: 'form', text: 'Formulário preenchido' },
          { icon: 'document', text: 'Documentos anexados' },
          { icon: 'data', text: 'Perfil criado' },
        ],
      },
      {
        icon: 'document',
        label: 'Contrato gerado',
        sublabel: 'Documento criado automaticamente.',
        examples: [
          { icon: 'file', text: 'Template aplicado' },
          { icon: 'data', text: 'Dados preenchidos' },
          { icon: 'mail', text: 'Enviado para assinatura' },
        ],
      },
      {
        icon: 'calendar',
        label: 'Alerta de renovação',
        sublabel: 'Notificação antes do vencimento.',
        examples: [
          { icon: 'clock', text: '30 dias de antecedência' },
          { icon: 'bell', text: 'Lembrete automático' },
          { icon: 'mail', text: 'Email ao responsável' },
        ],
      },
      {
        icon: 'check',
        label: 'Renovado automaticamente',
        sublabel: 'Continuidade garantida.',
        examples: [
          { icon: 'sync', text: 'Contrato atualizado' },
          { icon: 'document', text: 'Nova versão gerada' },
          { icon: 'check', text: 'Assinatura digital' },
        ],
      },
    ],
  },
  agronegocio: {
    title: 'Coordenação de Fornecedores',
    steps: [
      {
        icon: 'document',
        label: 'Pedido recebido',
        sublabel: 'Solicitação registrada no sistema.',
        examples: [
          { icon: 'form', text: 'Dados do fornecedor' },
          { icon: 'box', text: 'Insumos solicitados' },
          { icon: 'calendar', text: 'Prazo definido' },
        ],
      },
      {
        icon: 'sync',
        label: 'Cotação automática',
        sublabel: 'Comparativo de preços gerado.',
        examples: [
          { icon: 'data', text: 'Preços atualizados' },
          { icon: 'document', text: 'Histórico de compras' },
          { icon: 'check', text: 'Melhor opção destacada' },
        ],
      },
      {
        icon: 'bell',
        label: 'Entrega monitorada',
        sublabel: 'Acompanhamento ate a chegada.',
        examples: [
          { icon: 'calendar', text: 'Prazo acompanhado' },
          { icon: 'bell', text: 'Alerta de atraso' },
          { icon: 'mail', text: 'Fornecedor notificado' },
        ],
      },
      {
        icon: 'check',
        label: 'Estoque atualizado',
        sublabel: 'Registro automático na entrada.',
        examples: [
          { icon: 'check', text: 'Quantidade conferida' },
          { icon: 'data', text: 'Estoque atualizado' },
          { icon: 'document', text: 'Nota fiscal arquivada' },
        ],
      },
    ],
  },
}

/**
 * Get a workflow preset for a specific industry
 */
export function getIndustryPreset(industry: Industry): WorkflowPreset {
  return industryPresets[industry]
}

/**
 * Simplified 3-step workflow presets for hero sections
 */
export const heroPresets: Record<Industry, HeroWorkflowPreset> = {
  saude: {
    title: 'Automação de Documentos',
    steps: [
      {
        icon: 'user',
        label: 'Novo paciente',
        sublabel: 'Cadastro inicia o processo',
        logos: ['whatsapp', 'google-sheets'],
      },
      {
        icon: 'process',
        label: 'Processado automaticamente',
        sublabel: 'Formulários, docs e organização',
        logos: ['gmail', 'google-drive'],
      },
      {
        icon: 'check',
        label: 'Prontuário completo',
        sublabel: 'Pronto para atendimento',
        logos: ['google-drive', 'excel'],
      },
    ],
  },
  servicos: {
    title: 'Gestão de Contratos',
    steps: [
      {
        icon: 'user',
        label: 'Cliente cadastrado',
        sublabel: 'Dados registrados no sistema',
        logos: ['gmail', 'google-drive'],
      },
      {
        icon: 'process',
        label: 'Contrato gerenciado',
        sublabel: 'Geração, alertas e renovação',
        logos: ['docusign', 'google-calendar'],
      },
      {
        icon: 'check',
        label: 'Renovado automaticamente',
        sublabel: 'Continuidade garantida',
        logos: ['docusign', 'gmail'],
      },
    ],
  },
  agronegocio: {
    title: 'Coordenação de Fornecedores',
    steps: [
      {
        icon: 'document',
        label: 'Pedido registrado',
        sublabel: 'Solicitação de insumos',
        logos: ['whatsapp', 'google-sheets'],
      },
      {
        icon: 'process',
        label: 'Cotação e acompanhamento',
        sublabel: 'Comparativo e prazos',
        logos: ['excel', 'google-drive'],
      },
      {
        icon: 'check',
        label: 'Estoque atualizado',
        sublabel: 'Entrada registrada',
        logos: ['google-sheets', 'contaazul'],
      },
    ],
  },
}

/**
 * Get a simplified hero workflow preset for a specific industry
 */
export function getHeroPreset(industry: Industry, locale: Locale = 'pt'): HeroWorkflowPreset {
  return (locale === 'en' ? heroPresetsEn : heroPresets)[industry]
}

/**
 * Simplified 4-step workflow presets for workflow sections (vertical card layout)
 */
export const saudeWorkflowsCompact = {
  documents: {
    title: 'Coleta de Documentos',
    steps: [
      { icon: 'user' as const, label: 'Novo paciente', sublabel: 'Cadastro inicia o processo', logos: ['whatsapp', 'google-sheets'] },
      { icon: 'mail' as const, label: 'Formulário enviado', sublabel: 'Anamnese automática', logos: ['gmail', 'typeform'] },
      { icon: 'folder' as const, label: 'Docs organizados', sublabel: 'Classificação automática', logos: ['google-drive', 'google-sheets'] },
      { icon: 'check' as const, label: 'Prontuário completo', sublabel: 'Pronto para atendimento', logos: ['google-drive', 'excel'] },
    ],
  },
  billing: {
    title: 'Faturamento de Convênios',
    steps: [
      { icon: 'document' as const, label: 'Consulta finalizada', sublabel: 'Dados registrados', logos: ['google-sheets', 'excel'] },
      { icon: 'file' as const, label: 'Guia formatada', sublabel: 'Conforme convênio', logos: ['excel', 'word'] },
      { icon: 'mail' as const, label: 'Envio automático', sublabel: 'Submissão ao portal', logos: ['gmail', 'outlook'] },
      { icon: 'check' as const, label: 'Status rastreado', sublabel: 'Ate o pagamento', logos: ['google-sheets', 'contaazul'] },
    ],
  },
  compliance: {
    title: 'Conformidade e Auditoria',
    steps: [
      { icon: 'document' as const, label: 'Documento recebido', sublabel: 'Qualquer formato', logos: ['gmail', 'google-drive'] },
      { icon: 'process' as const, label: 'Auto-classificado', sublabel: 'IA identifica tipo', logos: ['openai', 'google-drive'] },
      { icon: 'calendar' as const, label: 'Retenção definida', sublabel: 'Prazo legal automático', logos: ['google-calendar', 'excel'] },
      { icon: 'check' as const, label: 'Alertas agendados', sublabel: 'Aviso antes do vencimento', logos: ['google-calendar', 'gmail'] },
    ],
  },
  collections: {
    title: 'Cobrança Automatizada',
    steps: [
      { icon: 'creditCard' as const, label: 'Fatura gerada', sublabel: 'Automática apos consulta', logos: ['contaazul', 'excel'] },
      { icon: 'calendar' as const, label: 'Prazo monitorado', sublabel: 'Contagem regressiva', logos: ['google-calendar', 'google-sheets'] },
      { icon: 'bell' as const, label: 'Lembretes enviados', sublabel: 'Escalonamento automático', logos: ['whatsapp', 'gmail'] },
      { icon: 'check' as const, label: 'Baixa automática', sublabel: 'Ao receber pagamento', logos: ['contaazul', 'whatsapp'] },
    ],
  },
}

export const servicosWorkflowsCompact = {
  onboarding: {
    title: 'Onboarding de Clientes',
    steps: [
      { icon: 'user' as const, label: 'Novo cliente', sublabel: 'Contrato assinado', logos: ['gmail', 'google-drive'] },
      { icon: 'mail' as const, label: 'Kit enviado', sublabel: 'Boas-vindas automático', logos: ['gmail', 'notion'] },
      { icon: 'folder' as const, label: 'Pasta criada', sublabel: 'Estrutura organizada', logos: ['google-drive', 'notion'] },
      { icon: 'check' as const, label: 'Pronto para iniciar', sublabel: 'Tudo configurado', logos: ['notion', 'gmail'] },
    ],
  },
  contracts: {
    title: 'Gestão de Contratos',
    steps: [
      { icon: 'document' as const, label: 'Contrato cadastrado', sublabel: 'Vencimento registrado', logos: ['google-drive', 'docusign'] },
      { icon: 'calendar' as const, label: 'Alertas programados', sublabel: '60, 30 e 15 dias antes', logos: ['google-calendar', 'gmail'] },
      { icon: 'document' as const, label: 'Proposta gerada', sublabel: 'Renovação pre-preenchida', logos: ['docusign', 'excel'] },
      { icon: 'check' as const, label: 'Renovação garantida', sublabel: 'Status sempre atualizado', logos: ['docusign', 'google-drive'] },
    ],
  },
  billing: {
    title: 'Faturamento por Projeto',
    steps: [
      { icon: 'result' as const, label: 'Marco atingido', sublabel: 'Entrega dispara processo', logos: ['google-sheets', 'notion'] },
      { icon: 'process' as const, label: 'Dados compilados', sublabel: 'Horas e valores reunidos', logos: ['excel', 'google-sheets'] },
      { icon: 'creditCard' as const, label: 'Fatura enviada', sublabel: 'Formatada e entregue', logos: ['contaazul', 'gmail'] },
      { icon: 'check' as const, label: 'Pagamento rastreado', sublabel: 'Lembretes ate receber', logos: ['contaazul', 'whatsapp'] },
    ],
  },
  reports: {
    title: 'Relatórios para Clientes',
    steps: [
      { icon: 'calendar' as const, label: 'Data programada', sublabel: 'Semanal ou mensal', logos: ['google-calendar', 'notion'] },
      { icon: 'sync' as const, label: 'Dados coletados', sublabel: 'Métricas automaticas', logos: ['google-sheets', 'excel'] },
      { icon: 'document' as const, label: 'Relatório formatado', sublabel: 'Layout profissional', logos: ['google-sheets', 'gmail'] },
      { icon: 'check' as const, label: 'Entrega automática', sublabel: 'Cliente recebe no prazo', logos: ['gmail', 'google-drive'] },
    ],
  },
}

export const agronegocioWorkflowsCompact = {
  supplierCoordination: {
    title: 'Coordenação de Fornecedores',
    steps: [
      { icon: 'document' as const, label: 'Pedido registrado', sublabel: 'Solicitação de insumos', logos: ['whatsapp', 'google-sheets'] },
      { icon: 'sync' as const, label: 'Cotação automática', sublabel: 'Comparativo de preços', logos: ['excel', 'google-sheets'] },
      { icon: 'bell' as const, label: 'Entrega monitorada', sublabel: 'Prazos acompanhados', logos: ['google-calendar', 'whatsapp'] },
      { icon: 'check' as const, label: 'Estoque atualizado', sublabel: 'Entrada registrada', logos: ['google-sheets', 'contaazul'] },
    ],
  },
  traceability: {
    title: 'Rastreabilidade e Conformidade',
    steps: [
      { icon: 'document' as const, label: 'Documento recebido', sublabel: 'Licença ou certificado', logos: ['gmail', 'google-drive'] },
      { icon: 'process' as const, label: 'Auto-classificado', sublabel: 'Tipo identificado', logos: ['google-drive', 'google-sheets'] },
      { icon: 'calendar' as const, label: 'Vencimento registrado', sublabel: 'Prazo monitorado', logos: ['google-calendar', 'excel'] },
      { icon: 'check' as const, label: 'Alerta programado', sublabel: 'Aviso antes do vencimento', logos: ['gmail', 'whatsapp'] },
    ],
  },
  fieldOffice: {
    title: 'Comunicação Campo-Escritório',
    steps: [
      { icon: 'mail' as const, label: 'Relato do campo', sublabel: 'Mensagem ou foto recebida', logos: ['whatsapp', 'gmail'] },
      { icon: 'process' as const, label: 'Dados extraidos', sublabel: 'Informacao organizada', logos: ['google-sheets', 'google-drive'] },
      { icon: 'document' as const, label: 'Relatório gerado', sublabel: 'Consolidação automática', logos: ['google-sheets', 'excel'] },
      { icon: 'check' as const, label: 'Equipe notificada', sublabel: 'Escritório atualizado', logos: ['gmail', 'whatsapp'] },
    ],
  },
}

/**
 * Saude page workflow presets for "O que automatizamos" section
 */
export const saudeWorkflows = {
  documents: {
    title: 'Coleta de Documentos',
    steps: [
      {
        icon: 'user' as const,
        label: 'Novo paciente',
        sublabel: 'Cadastro inicia o processo.',
        examples: [
          { icon: 'form' as const, text: 'Ficha preenchida' },
          { icon: 'calendar' as const, text: 'Consulta agendada' },
          { icon: 'user' as const, text: 'Dados capturados' },
        ],
      },
      {
        icon: 'mail' as const,
        label: 'Formulário enviado',
        sublabel: 'Anamnese automática.',
        examples: [
          { icon: 'mail' as const, text: 'Email personalizado' },
          { icon: 'form' as const, text: 'Link para preencher' },
          { icon: 'bell' as const, text: 'Lembrete automático' },
        ],
      },
      {
        icon: 'folder' as const,
        label: 'Docs organizados',
        sublabel: 'Classificação automática.',
        examples: [
          { icon: 'folder' as const, text: 'Pasta do paciente' },
          { icon: 'document' as const, text: 'Exames anexados' },
          { icon: 'data' as const, text: 'Histórico atualizado' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Prontuário completo',
        sublabel: 'Pronto para atendimento.',
        examples: [
          { icon: 'check' as const, text: 'Docs validados' },
          { icon: 'bell' as const, text: 'Pendências alertadas' },
          { icon: 'team' as const, text: 'Equipe notificada' },
        ],
      },
    ],
  },
  billing: {
    title: 'Faturamento de Convênios',
    steps: [
      {
        icon: 'document' as const,
        label: 'Consulta finalizada',
        sublabel: 'Dados registrados.',
        examples: [
          { icon: 'form' as const, text: 'Procedimento registrado' },
          { icon: 'user' as const, text: 'Paciente identificado' },
          { icon: 'calendar' as const, text: 'Data capturada' },
        ],
      },
      {
        icon: 'file' as const,
        label: 'Guia formatada',
        sublabel: 'Conforme convênio.',
        examples: [
          { icon: 'document' as const, text: 'TISS preenchida' },
          { icon: 'data' as const, text: 'Códigos validados' },
          { icon: 'check' as const, text: 'Campos obrigatórios ok' },
        ],
      },
      {
        icon: 'mail' as const,
        label: 'Envio automático',
        sublabel: 'Submissão ao portal.',
        examples: [
          { icon: 'sync' as const, text: 'Upload ao portal' },
          { icon: 'document' as const, text: 'Protocolo registrado' },
          { icon: 'clock' as const, text: 'Prazo monitorado' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Status rastreado',
        sublabel: 'Ate o pagamento.',
        examples: [
          { icon: 'check' as const, text: 'Aprovação confirmada' },
          { icon: 'creditCard' as const, text: 'Pagamento recebido' },
          { icon: 'bell' as const, text: 'Glosas alertadas' },
        ],
      },
    ],
  },
  compliance: {
    title: 'Conformidade e Auditoria',
    steps: [
      {
        icon: 'document' as const,
        label: 'Documento recebido',
        sublabel: 'Qualquer formato.',
        examples: [
          { icon: 'file' as const, text: 'PDF ou imagem' },
          { icon: 'mail' as const, text: 'Anexo de email' },
          { icon: 'document' as const, text: 'Scan de papel' },
        ],
      },
      {
        icon: 'process' as const,
        label: 'Auto-classificado',
        sublabel: 'IA identifica tipo.',
        examples: [
          { icon: 'data' as const, text: 'Categoria detectada' },
          { icon: 'user' as const, text: 'Paciente identificado' },
          { icon: 'calendar' as const, text: 'Data extraida' },
        ],
      },
      {
        icon: 'calendar' as const,
        label: 'Retenção definida',
        sublabel: 'Prazo legal automático.',
        examples: [
          { icon: 'clock' as const, text: 'Prazo calculado' },
          { icon: 'document' as const, text: 'Regra aplicada' },
          { icon: 'folder' as const, text: 'Arquivo organizado' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Alertas agendados',
        sublabel: 'Aviso antes do vencimento.',
        examples: [
          { icon: 'bell' as const, text: 'Lembrete 30 dias' },
          { icon: 'mail' as const, text: 'Notificação enviada' },
          { icon: 'check' as const, text: 'Renovação orientada' },
        ],
      },
    ],
  },
  collections: {
    title: 'Cobrança Automatizada',
    steps: [
      {
        icon: 'creditCard' as const,
        label: 'Fatura gerada',
        sublabel: 'Automática apos consulta.',
        examples: [
          { icon: 'document' as const, text: 'Valor calculado' },
          { icon: 'user' as const, text: 'Dados do paciente' },
          { icon: 'calendar' as const, text: 'Vencimento definido' },
        ],
      },
      {
        icon: 'calendar' as const,
        label: 'Prazo monitorado',
        sublabel: 'Contagem regressiva.',
        examples: [
          { icon: 'clock' as const, text: 'Dias restantes' },
          { icon: 'data' as const, text: 'Status atualizado' },
          { icon: 'document' as const, text: 'Histórico registrado' },
        ],
      },
      {
        icon: 'bell' as const,
        label: 'Lembretes enviados',
        sublabel: 'Escalonamento automático.',
        examples: [
          { icon: 'mail' as const, text: 'Email cordial' },
          { icon: 'bell' as const, text: 'WhatsApp amigavel' },
          { icon: 'calendar' as const, text: 'Segundo lembrete' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Baixa automática',
        sublabel: 'Ao receber pagamento.',
        examples: [
          { icon: 'check' as const, text: 'Pagamento confirmado' },
          { icon: 'creditCard' as const, text: 'Valor conciliado' },
          { icon: 'document' as const, text: 'Registro completo' },
        ],
      },
    ],
  },
}

/**
 * Agronegocio page workflow presets for "O que automatizamos" section
 */
export const agronegocioWorkflows = {
  supplierCoordination: {
    title: 'Coordenação de Fornecedores',
    steps: [
      {
        icon: 'document' as const,
        label: 'Pedido registrado',
        sublabel: 'Solicitação de insumos.',
        examples: [
          { icon: 'form' as const, text: 'Dados do fornecedor' },
          { icon: 'box' as const, text: 'Insumos listados' },
          { icon: 'calendar' as const, text: 'Prazo definido' },
        ],
      },
      {
        icon: 'sync' as const,
        label: 'Cotação automática',
        sublabel: 'Comparativo de preços.',
        examples: [
          { icon: 'data' as const, text: 'Preços atualizados' },
          { icon: 'document' as const, text: 'Histórico de compras' },
          { icon: 'check' as const, text: 'Melhor opção destacada' },
        ],
      },
      {
        icon: 'bell' as const,
        label: 'Entrega monitorada',
        sublabel: 'Acompanhamento ate a chegada.',
        examples: [
          { icon: 'calendar' as const, text: 'Prazo acompanhado' },
          { icon: 'bell' as const, text: 'Alerta de atraso' },
          { icon: 'mail' as const, text: 'Fornecedor notificado' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Estoque atualizado',
        sublabel: 'Registro automático na entrada.',
        examples: [
          { icon: 'check' as const, text: 'Quantidade conferida' },
          { icon: 'data' as const, text: 'Estoque atualizado' },
          { icon: 'document' as const, text: 'Nota fiscal arquivada' },
        ],
      },
    ],
  },
  traceability: {
    title: 'Rastreabilidade e Conformidade',
    steps: [
      {
        icon: 'document' as const,
        label: 'Documento recebido',
        sublabel: 'Licença ou certificado.',
        examples: [
          { icon: 'file' as const, text: 'PDF ou imagem' },
          { icon: 'mail' as const, text: 'Anexo de email' },
          { icon: 'document' as const, text: 'Scan de papel' },
        ],
      },
      {
        icon: 'process' as const,
        label: 'Auto-classificado',
        sublabel: 'Tipo identificado.',
        examples: [
          { icon: 'data' as const, text: 'Categoria detectada' },
          { icon: 'document' as const, text: 'Propriedade identificada' },
          { icon: 'calendar' as const, text: 'Validade extraida' },
        ],
      },
      {
        icon: 'calendar' as const,
        label: 'Vencimento registrado',
        sublabel: 'Prazo monitorado.',
        examples: [
          { icon: 'clock' as const, text: 'Prazo calculado' },
          { icon: 'document' as const, text: 'Regra aplicada' },
          { icon: 'folder' as const, text: 'Arquivo organizado' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Alerta programado',
        sublabel: 'Aviso antes do vencimento.',
        examples: [
          { icon: 'bell' as const, text: 'Lembrete 30 dias' },
          { icon: 'mail' as const, text: 'Notificação enviada' },
          { icon: 'check' as const, text: 'Renovação orientada' },
        ],
      },
    ],
  },
  fieldOffice: {
    title: 'Comunicação Campo-Escritório',
    steps: [
      {
        icon: 'mail' as const,
        label: 'Relato do campo',
        sublabel: 'Mensagem ou foto recebida.',
        examples: [
          { icon: 'mail' as const, text: 'WhatsApp recebido' },
          { icon: 'file' as const, text: 'Foto anexada' },
          { icon: 'data' as const, text: 'Dados do campo' },
        ],
      },
      {
        icon: 'process' as const,
        label: 'Dados extraidos',
        sublabel: 'Informacao organizada.',
        examples: [
          { icon: 'data' as const, text: 'Texto extraido' },
          { icon: 'document' as const, text: 'Planilha preenchida' },
          { icon: 'folder' as const, text: 'Pasta atualizada' },
        ],
      },
      {
        icon: 'document' as const,
        label: 'Relatório gerado',
        sublabel: 'Consolidação automática.',
        examples: [
          { icon: 'chart' as const, text: 'Dados consolidados' },
          { icon: 'document' as const, text: 'Formato profissional' },
          { icon: 'file' as const, text: 'PDF gerado' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Equipe notificada',
        sublabel: 'Escritório atualizado.',
        examples: [
          { icon: 'mail' as const, text: 'Email enviado' },
          { icon: 'bell' as const, text: 'Alerta no WhatsApp' },
          { icon: 'check' as const, text: 'Registro completo' },
        ],
      },
    ],
  },
}

/**
 * Servicos page workflow presets for "O que automatizamos" section
 */
export const servicosWorkflows = {
  onboarding: {
    title: 'Onboarding de Clientes',
    steps: [
      {
        icon: 'user' as const,
        label: 'Novo cliente',
        sublabel: 'Contrato assinado.',
        examples: [
          { icon: 'document' as const, text: 'Contrato recebido' },
          { icon: 'user' as const, text: 'Dados cadastrados' },
          { icon: 'calendar' as const, text: 'Inicio definido' },
        ],
      },
      {
        icon: 'mail' as const,
        label: 'Kit enviado',
        sublabel: 'Boas-vindas automático.',
        examples: [
          { icon: 'mail' as const, text: 'Email de boas-vindas' },
          { icon: 'form' as const, text: 'Checklist de docs' },
          { icon: 'bell' as const, text: 'Lembretes programados' },
        ],
      },
      {
        icon: 'folder' as const,
        label: 'Pasta criada',
        sublabel: 'Estrutura organizada.',
        examples: [
          { icon: 'folder' as const, text: 'Pasta do projeto' },
          { icon: 'document' as const, text: 'Templates prontos' },
          { icon: 'data' as const, text: 'Estrutura padronizada' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Pronto para iniciar',
        sublabel: 'Tudo configurado.',
        examples: [
          { icon: 'check' as const, text: 'Documentos completos' },
          { icon: 'bell' as const, text: 'Pendências sinalizadas' },
          { icon: 'team' as const, text: 'Equipe notificada' },
        ],
      },
    ],
  },
  contracts: {
    title: 'Gestão de Contratos',
    steps: [
      {
        icon: 'document' as const,
        label: 'Contrato cadastrado',
        sublabel: 'Vencimento registrado.',
        examples: [
          { icon: 'document' as const, text: 'Contrato digitalizado' },
          { icon: 'calendar' as const, text: 'Validade definida' },
          { icon: 'creditCard' as const, text: 'Valor registrado' },
        ],
      },
      {
        icon: 'calendar' as const,
        label: 'Alertas programados',
        sublabel: '60, 30 e 15 dias antes.',
        examples: [
          { icon: 'bell' as const, text: 'Alerta 60 dias' },
          { icon: 'bell' as const, text: 'Alerta 30 dias' },
          { icon: 'bell' as const, text: 'Alerta 15 dias' },
        ],
      },
      {
        icon: 'document' as const,
        label: 'Proposta gerada',
        sublabel: 'Renovação pre-preenchida.',
        examples: [
          { icon: 'document' as const, text: 'Proposta criada' },
          { icon: 'data' as const, text: 'Histórico incluido' },
          { icon: 'creditCard' as const, text: 'Reajuste calculado' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Renovação garantida',
        sublabel: 'Status sempre atualizado.',
        examples: [
          { icon: 'check' as const, text: 'Assinatura confirmada' },
          { icon: 'sync' as const, text: 'Sistema atualizado' },
          { icon: 'document' as const, text: 'Histórico registrado' },
        ],
      },
    ],
  },
  billing: {
    title: 'Faturamento por Projeto',
    steps: [
      {
        icon: 'result' as const,
        label: 'Marco atingido',
        sublabel: 'Entrega dispara processo.',
        examples: [
          { icon: 'check' as const, text: 'Entrega concluída' },
          { icon: 'calendar' as const, text: 'Fim do período' },
          { icon: 'data' as const, text: 'Horas registradas' },
        ],
      },
      {
        icon: 'process' as const,
        label: 'Dados compilados',
        sublabel: 'Horas e valores reunidos.',
        examples: [
          { icon: 'clock' as const, text: 'Horas totalizadas' },
          { icon: 'document' as const, text: 'Entregas listadas' },
          { icon: 'creditCard' as const, text: 'Valores calculados' },
        ],
      },
      {
        icon: 'creditCard' as const,
        label: 'Fatura enviada',
        sublabel: 'Formatada e entregue.',
        examples: [
          { icon: 'document' as const, text: 'NF emitida' },
          { icon: 'mail' as const, text: 'Email enviado' },
          { icon: 'calendar' as const, text: 'Vencimento definido' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Pagamento rastreado',
        sublabel: 'Lembretes ate receber.',
        examples: [
          { icon: 'bell' as const, text: 'Lembrete enviado' },
          { icon: 'check' as const, text: 'Pagamento confirmado' },
          { icon: 'creditCard' as const, text: 'Valor conciliado' },
        ],
      },
    ],
  },
  reports: {
    title: 'Relatórios para Clientes',
    steps: [
      {
        icon: 'calendar' as const,
        label: 'Data programada',
        sublabel: 'Semanal ou mensal.',
        examples: [
          { icon: 'calendar' as const, text: 'Frequencia definida' },
          { icon: 'clock' as const, text: 'Horário agendado' },
          { icon: 'bell' as const, text: 'Disparo automático' },
        ],
      },
      {
        icon: 'sync' as const,
        label: 'Dados coletados',
        sublabel: 'Métricas automaticas.',
        examples: [
          { icon: 'data' as const, text: 'KPIs atualizados' },
          { icon: 'chart' as const, text: 'Gráficos gerados' },
          { icon: 'sync' as const, text: 'Fontes sincronizadas' },
        ],
      },
      {
        icon: 'document' as const,
        label: 'Relatório formatado',
        sublabel: 'Layout profissional.',
        examples: [
          { icon: 'document' as const, text: 'Template aplicado' },
          { icon: 'file' as const, text: 'PDF gerado' },
          { icon: 'check' as const, text: 'Revisão automática' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Entrega automática',
        sublabel: 'Cliente recebe no prazo.',
        examples: [
          { icon: 'mail' as const, text: 'Email enviado' },
          { icon: 'check' as const, text: 'Entrega confirmada' },
          { icon: 'document' as const, text: 'Histórico registrado' },
        ],
      },
    ],
  },
}

interface CompactWorkflow {
  title: string
  steps: HeroWorkflowStep[]
}

/**
 * The three compact workflows shown in an industry page's "what we automate"
 * section, in display order.
 */
export function getCompactWorkflows(industry: Industry, locale: Locale = 'pt'): CompactWorkflow[] {
  const en = locale === 'en'
  switch (industry) {
    case 'saude': {
      const w = en ? saudeWorkflowsCompactEn : saudeWorkflowsCompact
      return [w.documents, w.billing, w.collections]
    }
    case 'servicos': {
      const w = en ? servicosWorkflowsCompactEn : servicosWorkflowsCompact
      return [w.onboarding, w.contracts, w.billing]
    }
    case 'agronegocio': {
      const w = en ? agronegocioWorkflowsCompactEn : agronegocioWorkflowsCompact
      return [w.supplierCoordination, w.traceability, w.fieldOffice]
    }
  }
}
