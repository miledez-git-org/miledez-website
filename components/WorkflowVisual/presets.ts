import { WorkflowStep } from './types'

export interface WorkflowPreset {
  title: string
  steps: WorkflowStep[]
}

export type Industry = 'saude' | 'servicos' | 'varejo'

export const industryPresets: Record<Industry, WorkflowPreset> = {
  saude: {
    title: 'Automacao de Documentos',
    steps: [
      {
        icon: 'user',
        label: 'Novo paciente',
        sublabel: 'Um cadastro inicia o processo de coleta.',
        examples: [
          { icon: 'form', text: 'Ficha preenchida' },
          { icon: 'calendar', text: 'Consulta agendada' },
          { icon: 'user', text: 'Dados basicos capturados' },
        ],
      },
      {
        icon: 'mail',
        label: 'Formulario enviado',
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
          { icon: 'data', text: 'Historico atualizado' },
        ],
      },
      {
        icon: 'check',
        label: 'Prontuario completo',
        sublabel: 'Tudo pronto para o atendimento.',
        examples: [
          { icon: 'check', text: 'Documentos validados' },
          { icon: 'bell', text: 'Pendencias sinalizadas' },
          { icon: 'team', text: 'Equipe notificada' },
        ],
      },
    ],
  },
  servicos: {
    title: 'Gestao de Contratos',
    steps: [
      {
        icon: 'user',
        label: 'Cliente cadastrado',
        sublabel: 'Dados registrados no sistema.',
        examples: [
          { icon: 'form', text: 'Formulario preenchido' },
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
        label: 'Alerta de renovacao',
        sublabel: 'Notificacao antes do vencimento.',
        examples: [
          { icon: 'clock', text: '30 dias de antecedencia' },
          { icon: 'bell', text: 'Lembrete automatico' },
          { icon: 'mail', text: 'Email ao responsavel' },
        ],
      },
      {
        icon: 'check',
        label: 'Renovado automaticamente',
        sublabel: 'Continuidade garantida.',
        examples: [
          { icon: 'sync', text: 'Contrato atualizado' },
          { icon: 'document', text: 'Nova versao gerada' },
          { icon: 'check', text: 'Assinatura digital' },
        ],
      },
    ],
  },
  varejo: {
    title: 'Processamento de Pedidos',
    steps: [
      {
        icon: 'cart',
        label: 'Novo pedido',
        sublabel: 'Entrada registrada no sistema.',
        examples: [
          { icon: 'form', text: 'Dados do cliente' },
          { icon: 'box', text: 'Itens selecionados' },
          { icon: 'creditCard', text: 'Pagamento confirmado' },
        ],
      },
      {
        icon: 'box',
        label: 'Estoque verificado',
        sublabel: 'Disponibilidade confirmada.',
        examples: [
          { icon: 'data', text: 'Quantidade checada' },
          { icon: 'sync', text: 'Reserva automatica' },
          { icon: 'bell', text: 'Alerta de baixo estoque' },
        ],
      },
      {
        icon: 'truck',
        label: 'Envio processado',
        sublabel: 'Logistica acionada automaticamente.',
        examples: [
          { icon: 'document', text: 'Nota fiscal gerada' },
          { icon: 'form', text: 'Etiqueta impressa' },
          { icon: 'truck', text: 'Transportadora notificada' },
        ],
      },
      {
        icon: 'check',
        label: 'Cliente notificado',
        sublabel: 'Acompanhamento em tempo real.',
        examples: [
          { icon: 'mail', text: 'Email de confirmacao' },
          { icon: 'sync', text: 'Rastreamento ativo' },
          { icon: 'check', text: 'Entrega confirmada' },
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
        label: 'Formulario enviado',
        sublabel: 'Anamnese automatica.',
        examples: [
          { icon: 'mail' as const, text: 'Email personalizado' },
          { icon: 'form' as const, text: 'Link para preencher' },
          { icon: 'bell' as const, text: 'Lembrete automatico' },
        ],
      },
      {
        icon: 'folder' as const,
        label: 'Docs organizados',
        sublabel: 'Classificacao automatica.',
        examples: [
          { icon: 'folder' as const, text: 'Pasta do paciente' },
          { icon: 'document' as const, text: 'Exames anexados' },
          { icon: 'data' as const, text: 'Historico atualizado' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Prontuario completo',
        sublabel: 'Pronto para atendimento.',
        examples: [
          { icon: 'check' as const, text: 'Docs validados' },
          { icon: 'bell' as const, text: 'Pendencias alertadas' },
          { icon: 'team' as const, text: 'Equipe notificada' },
        ],
      },
    ],
  },
  billing: {
    title: 'Faturamento de Convenios',
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
        sublabel: 'Conforme convenio.',
        examples: [
          { icon: 'document' as const, text: 'TISS preenchida' },
          { icon: 'data' as const, text: 'Codigos validados' },
          { icon: 'check' as const, text: 'Campos obrigatorios ok' },
        ],
      },
      {
        icon: 'mail' as const,
        label: 'Envio automatico',
        sublabel: 'Submissao ao portal.',
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
          { icon: 'check' as const, text: 'Aprovacao confirmada' },
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
        label: 'Retencao definida',
        sublabel: 'Prazo legal automatico.',
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
          { icon: 'mail' as const, text: 'Notificacao enviada' },
          { icon: 'check' as const, text: 'Renovacao orientada' },
        ],
      },
    ],
  },
  collections: {
    title: 'Cobranca Automatizada',
    steps: [
      {
        icon: 'creditCard' as const,
        label: 'Fatura gerada',
        sublabel: 'Automatica apos consulta.',
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
          { icon: 'document' as const, text: 'Historico registrado' },
        ],
      },
      {
        icon: 'bell' as const,
        label: 'Lembretes enviados',
        sublabel: 'Escalonamento automatico.',
        examples: [
          { icon: 'mail' as const, text: 'Email cordial' },
          { icon: 'bell' as const, text: 'WhatsApp amigavel' },
          { icon: 'calendar' as const, text: 'Segundo lembrete' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Baixa automatica',
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
 * Varejo page workflow presets for "O que automatizamos" section
 */
export const varejoWorkflows = {
  inventory: {
    title: 'Gestao de Estoque',
    steps: [
      {
        icon: 'box' as const,
        label: 'Nivel monitorado',
        sublabel: 'Estoque em tempo real.',
        examples: [
          { icon: 'box' as const, text: 'Quantidade atual' },
          { icon: 'data' as const, text: 'Historico de vendas' },
          { icon: 'chart' as const, text: 'Tendencia de consumo' },
        ],
      },
      {
        icon: 'bell' as const,
        label: 'Alerta disparado',
        sublabel: 'Nivel minimo atingido.',
        examples: [
          { icon: 'bell' as const, text: 'Notificacao enviada' },
          { icon: 'tag' as const, text: 'Produto identificado' },
          { icon: 'data' as const, text: 'Quantidade sugerida' },
        ],
      },
      {
        icon: 'document' as const,
        label: 'Pedido sugerido',
        sublabel: 'Reposicao pre-calculada.',
        examples: [
          { icon: 'document' as const, text: 'Lista de compras' },
          { icon: 'creditCard' as const, text: 'Custo estimado' },
          { icon: 'calendar' as const, text: 'Prazo de entrega' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Estoque equilibrado',
        sublabel: 'Sem rupturas, sem excesso.',
        examples: [
          { icon: 'check' as const, text: 'Niveis normalizados' },
          { icon: 'creditCard' as const, text: 'Capital otimizado' },
          { icon: 'document' as const, text: 'Registro atualizado' },
        ],
      },
    ],
  },
  orders: {
    title: 'Processamento de Pedidos',
    steps: [
      {
        icon: 'cart' as const,
        label: 'Pedido recebido',
        sublabel: 'Venda confirmada.',
        examples: [
          { icon: 'document' as const, text: 'Pedido registrado' },
          { icon: 'user' as const, text: 'Cliente identificado' },
          { icon: 'creditCard' as const, text: 'Pagamento confirmado' },
        ],
      },
      {
        icon: 'box' as const,
        label: 'Separacao iniciada',
        sublabel: 'Lista de picking gerada.',
        examples: [
          { icon: 'document' as const, text: 'Lista de itens' },
          { icon: 'box' as const, text: 'Local no estoque' },
          { icon: 'check' as const, text: 'Conferencia orientada' },
        ],
      },
      {
        icon: 'truck' as const,
        label: 'Envio registrado',
        sublabel: 'Codigo de rastreio.',
        examples: [
          { icon: 'truck' as const, text: 'Transportadora' },
          { icon: 'data' as const, text: 'Codigo de rastreio' },
          { icon: 'calendar' as const, text: 'Previsao de entrega' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Cliente notificado',
        sublabel: 'Atualizacoes automaticas.',
        examples: [
          { icon: 'mail' as const, text: 'Email de confirmacao' },
          { icon: 'bell' as const, text: 'WhatsApp com rastreio' },
          { icon: 'check' as const, text: 'Entrega confirmada' },
        ],
      },
    ],
  },
  financial: {
    title: 'Conciliacao Financeira',
    steps: [
      {
        icon: 'creditCard' as const,
        label: 'Venda registrada',
        sublabel: 'Dados capturados.',
        examples: [
          { icon: 'creditCard' as const, text: 'Valor da venda' },
          { icon: 'calendar' as const, text: 'Data e hora' },
          { icon: 'data' as const, text: 'Forma de pagamento' },
        ],
      },
      {
        icon: 'sync' as const,
        label: 'Pagamento verificado',
        sublabel: 'Cruzamento com extrato.',
        examples: [
          { icon: 'sync' as const, text: 'Conciliacao automatica' },
          { icon: 'creditCard' as const, text: 'Taxas calculadas' },
          { icon: 'check' as const, text: 'Valores batidos' },
        ],
      },
      {
        icon: 'document' as const,
        label: 'Relatorio gerado',
        sublabel: 'Consolidacao por periodo.',
        examples: [
          { icon: 'chart' as const, text: 'Total recebido' },
          { icon: 'data' as const, text: 'Por forma de pagamento' },
          { icon: 'creditCard' as const, text: 'Taxas descontadas' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Divergencias alertadas',
        sublabel: 'Diferencas identificadas.',
        examples: [
          { icon: 'bell' as const, text: 'Alerta de diferenca' },
          { icon: 'document' as const, text: 'Detalhes do erro' },
          { icon: 'check' as const, text: 'Correcao orientada' },
        ],
      },
    ],
  },
  reports: {
    title: 'Relatorios de Vendas',
    steps: [
      {
        icon: 'calendar' as const,
        label: 'Periodo fechado',
        sublabel: 'Dia, semana ou mes.',
        examples: [
          { icon: 'calendar' as const, text: 'Frequencia definida' },
          { icon: 'clock' as const, text: 'Horario programado' },
          { icon: 'bell' as const, text: 'Disparo automatico' },
        ],
      },
      {
        icon: 'sync' as const,
        label: 'Dados consolidados',
        sublabel: 'Vendas, margens e estoque.',
        examples: [
          { icon: 'creditCard' as const, text: 'Faturamento total' },
          { icon: 'chart' as const, text: 'Margem calculada' },
          { icon: 'box' as const, text: 'Posicao de estoque' },
        ],
      },
      {
        icon: 'chart' as const,
        label: 'Analise pronta',
        sublabel: 'Graficos e indicadores.',
        examples: [
          { icon: 'chart' as const, text: 'Comparativo periodo' },
          { icon: 'tag' as const, text: 'Produtos destaque' },
          { icon: 'data' as const, text: 'Tendencias visiveis' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Relatorio entregue',
        sublabel: 'No seu email, no horario.',
        examples: [
          { icon: 'mail' as const, text: 'Email enviado' },
          { icon: 'file' as const, text: 'PDF anexado' },
          { icon: 'document' as const, text: 'Historico guardado' },
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
        sublabel: 'Boas-vindas automatico.',
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
          { icon: 'bell' as const, text: 'Pendencias sinalizadas' },
          { icon: 'team' as const, text: 'Equipe notificada' },
        ],
      },
    ],
  },
  contracts: {
    title: 'Gestao de Contratos',
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
        sublabel: 'Renovacao pre-preenchida.',
        examples: [
          { icon: 'document' as const, text: 'Proposta criada' },
          { icon: 'data' as const, text: 'Historico incluido' },
          { icon: 'creditCard' as const, text: 'Reajuste calculado' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Renovacao garantida',
        sublabel: 'Status sempre atualizado.',
        examples: [
          { icon: 'check' as const, text: 'Assinatura confirmada' },
          { icon: 'sync' as const, text: 'Sistema atualizado' },
          { icon: 'document' as const, text: 'Historico registrado' },
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
          { icon: 'check' as const, text: 'Entrega concluida' },
          { icon: 'calendar' as const, text: 'Fim do periodo' },
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
    title: 'Relatorios para Clientes',
    steps: [
      {
        icon: 'calendar' as const,
        label: 'Data programada',
        sublabel: 'Semanal ou mensal.',
        examples: [
          { icon: 'calendar' as const, text: 'Frequencia definida' },
          { icon: 'clock' as const, text: 'Horario agendado' },
          { icon: 'bell' as const, text: 'Disparo automatico' },
        ],
      },
      {
        icon: 'sync' as const,
        label: 'Dados coletados',
        sublabel: 'Metricas automaticas.',
        examples: [
          { icon: 'data' as const, text: 'KPIs atualizados' },
          { icon: 'chart' as const, text: 'Graficos gerados' },
          { icon: 'sync' as const, text: 'Fontes sincronizadas' },
        ],
      },
      {
        icon: 'document' as const,
        label: 'Relatorio formatado',
        sublabel: 'Layout profissional.',
        examples: [
          { icon: 'document' as const, text: 'Template aplicado' },
          { icon: 'file' as const, text: 'PDF gerado' },
          { icon: 'check' as const, text: 'Revisao automatica' },
        ],
      },
      {
        icon: 'check' as const,
        label: 'Entrega automatica',
        sublabel: 'Cliente recebe no prazo.',
        examples: [
          { icon: 'mail' as const, text: 'Email enviado' },
          { icon: 'check' as const, text: 'Entrega confirmada' },
          { icon: 'document' as const, text: 'Historico registrado' },
        ],
      },
    ],
  },
}
