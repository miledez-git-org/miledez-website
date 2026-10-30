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
    title: 'Confirmação de consultas',
    steps: [
      {
        icon: 'calendar',
        label: 'Consulta agendada',
        sublabel: 'Horário marcado na agenda',
        logos: ['google-calendar'],
      },
      {
        icon: 'process',
        label: 'Lembrete no WhatsApp',
        sublabel: '24h antes, com opção de remarcar',
        logos: ['whatsapp'],
      },
      {
        icon: 'check',
        label: 'Agenda confirmada',
        sublabel: 'Horários vagos à vista da recepção',
        logos: ['google-calendar', 'google-sheets'],
      },
    ],
  },
  servicos: {
    title: 'Aviso de renovação',
    steps: [
      {
        icon: 'calendar',
        label: 'Contrato perto do vencimento',
        sublabel: 'Aviso 60 dias antes',
        logos: ['google-calendar', 'gmail'],
      },
      {
        icon: 'process',
        label: 'Renovação preparada',
        sublabel: 'Minuta pronta para revisar',
        logos: ['word', 'gmail'],
      },
      {
        icon: 'check',
        label: 'Enviada com a sua aprovação',
        sublabel: 'Você decide antes de sair',
        logos: ['docusign', 'gmail'],
      },
    ],
  },
  agronegocio: {
    title: 'Cotação de insumos',
    steps: [
      {
        icon: 'document',
        label: 'Pedido de insumo',
        sublabel: 'Recebido pelo WhatsApp',
        logos: ['whatsapp', 'google-sheets'],
      },
      {
        icon: 'process',
        label: 'Cotações comparadas',
        sublabel: 'Preço e prazo lado a lado',
        logos: ['excel', 'google-sheets'],
      },
      {
        icon: 'check',
        label: 'Pedido confirmado',
        sublabel: 'Depois da sua aprovação',
        logos: ['gmail', 'whatsapp'],
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
  appointments: {
    title: 'Confirmação de consultas',
    steps: [
      { icon: 'calendar' as const, label: 'Consulta agendada', sublabel: 'Horário marcado na agenda', logos: ['google-calendar'] },
      { icon: 'bell' as const, label: 'Lembrete enviado', sublabel: 'WhatsApp 24h antes', logos: ['whatsapp'] },
      { icon: 'mail' as const, label: 'Resposta registrada', sublabel: 'Confirmou, remarcou ou cancelou', logos: ['whatsapp', 'google-sheets'] },
      { icon: 'check' as const, label: 'Agenda atualizada', sublabel: 'Horários vagos à vista da recepção', logos: ['google-calendar', 'google-sheets'] },
    ],
  },
  esocial: {
    title: 'Conferência eSocial SST',
    steps: [
      { icon: 'document' as const, label: 'ASO finalizado', sublabel: 'Exame lançado no sistema', logos: ['excel'] },
      { icon: 'process' as const, label: 'Regras conferidas', sublabel: 'CBO, vínculo e PCMSO', logos: ['excel', 'google-sheets'] },
      { icon: 'bell' as const, label: 'Erro apontado', sublabel: 'Com a correção sugerida', logos: ['gmail'] },
      { icon: 'check' as const, label: 'Evento conferido', sublabel: 'Equipe corrige antes do envio', logos: ['excel'] },
    ],
  },
  followUp: {
    title: 'Lembrete de retorno',
    steps: [
      { icon: 'user' as const, label: 'Consulta realizada', sublabel: 'Data de retorno anotada', logos: ['google-sheets'] },
      { icon: 'calendar' as const, label: 'Prazo acompanhado', sublabel: 'Sem ninguém olhar a agenda', logos: ['google-calendar'] },
      { icon: 'bell' as const, label: 'Paciente avisado', sublabel: 'Mensagem no WhatsApp', logos: ['whatsapp'] },
      { icon: 'check' as const, label: 'Retorno agendado', sublabel: 'Horário marcado na agenda', logos: ['google-calendar', 'whatsapp'] },
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
}

export const servicosWorkflowsCompact = {
  onboarding: {
    title: 'Entrada de novo cliente',
    steps: [
      { icon: 'user' as const, label: 'Contrato assinado', sublabel: 'Cliente novo confirmado', logos: ['docusign', 'gmail'] },
      { icon: 'mail' as const, label: 'Boas-vindas enviadas', sublabel: 'E-mail com os próximos passos', logos: ['gmail'] },
      { icon: 'folder' as const, label: 'Pasta criada', sublabel: 'Estrutura padrão do escritório', logos: ['google-drive'] },
      { icon: 'check' as const, label: 'Pronto para começar', sublabel: 'Equipe avisada', logos: ['gmail', 'google-drive'] },
    ],
  },
  contracts: {
    title: 'Aviso de renovação',
    steps: [
      { icon: 'document' as const, label: 'Contrato cadastrado', sublabel: 'Vencimento registrado', logos: ['google-drive', 'google-sheets'] },
      { icon: 'calendar' as const, label: 'Avisos programados', sublabel: '60, 30 e 15 dias antes', logos: ['google-calendar', 'gmail'] },
      { icon: 'document' as const, label: 'Minuta preparada', sublabel: 'Para você revisar e aprovar', logos: ['word', 'gmail'] },
      { icon: 'check' as const, label: 'Renovação enviada', sublabel: 'Depois da sua aprovação', logos: ['docusign'] },
    ],
  },
  billing: {
    title: 'Da entrega à cobrança',
    steps: [
      { icon: 'result' as const, label: 'Entrega registrada', sublabel: 'Etapa concluída na planilha', logos: ['google-sheets'] },
      { icon: 'process' as const, label: 'Valores reunidos', sublabel: 'Horas e valores do período', logos: ['excel', 'google-sheets'] },
      { icon: 'creditCard' as const, label: 'Fatura enviada', sublabel: 'Para o e-mail do cliente', logos: ['contaazul', 'gmail'] },
      { icon: 'check' as const, label: 'Pagamento acompanhado', sublabel: 'Lembrete até receber', logos: ['contaazul', 'whatsapp'] },
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
    title: 'Cotação de insumos',
    steps: [
      { icon: 'document' as const, label: 'Pedido recebido', sublabel: 'Pelo WhatsApp', logos: ['whatsapp'] },
      { icon: 'sync' as const, label: 'Cotações comparadas', sublabel: 'Preço e prazo de cada fornecedor', logos: ['google-sheets', 'excel'] },
      { icon: 'bell' as const, label: 'Melhor oferta aprovada', sublabel: 'Equipe decide pelo WhatsApp', logos: ['whatsapp'] },
      { icon: 'check' as const, label: 'Pedido confirmado', sublabel: 'E-mail ao fornecedor', logos: ['gmail'] },
    ],
  },
  traceability: {
    title: 'Licenças com aviso de vencimento',
    steps: [
      { icon: 'document' as const, label: 'Documento recebido', sublabel: 'Licença, certificado ou laudo', logos: ['gmail', 'google-drive'] },
      { icon: 'folder' as const, label: 'Arquivado na pasta certa', sublabel: 'Com o tipo identificado', logos: ['google-drive'] },
      { icon: 'calendar' as const, label: 'Vencimento registrado', sublabel: 'Na planilha de controle', logos: ['google-sheets', 'google-calendar'] },
      { icon: 'check' as const, label: 'Aviso enviado', sublabel: 'Antes do vencimento', logos: ['gmail', 'whatsapp'] },
    ],
  },
  fieldOffice: {
    title: 'Dados do campo na planilha',
    steps: [
      { icon: 'mail' as const, label: 'Relato do campo', sublabel: 'Mensagem ou foto no WhatsApp', logos: ['whatsapp'] },
      { icon: 'process' as const, label: 'Informação organizada', sublabel: 'Talhão, data e ocorrência', logos: ['google-sheets'] },
      { icon: 'document' as const, label: 'Planilha atualizada', sublabel: 'No escritório, sem redigitar', logos: ['google-sheets', 'excel'] },
      { icon: 'check' as const, label: 'Equipe avisada', sublabel: 'Quando algo pede decisão', logos: ['gmail', 'whatsapp'] },
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
      return [w.appointments, w.esocial, w.followUp]
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
