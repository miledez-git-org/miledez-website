import type { WorkflowCardData } from './WorkflowCard'

/**
 * Healthcare workflow card data.
 * Each workflow: first = trigger, middle = process, last = result.
 * Headers: 2-4 word past participle labels.
 * What lines: 4-8 word descriptions.
 */

export const saudeCardWorkflows = {
  cadastro: {
    title: 'Cadastro de Paciente',
    cards: [
      {
        step: '01',
        type: 'trigger',
        header: 'Formulário preenchido',
        what: 'Dados do paciente coletados no formulário de entrada',
        icons: ['gmail', 'sheets'],
      },
      {
        step: '02',
        type: 'process',
        header: 'Dados validados',
        what: 'Campos obrigatórios verificados e inconsistências sinalizadas',
        icons: ['sheets'],
      },
      {
        step: '03',
        type: 'process',
        header: 'Relatório gerado',
        what: 'Ficha do paciente compilada com histórico clínico',
        icons: ['excel', 'pdf'],
      },
      {
        step: '04',
        type: 'result',
        header: 'Cadastro confirmado',
        what: 'Confirmação enviada por e-mail e WhatsApp ao paciente',
        icons: ['gmail', 'whatsapp'],
      },
    ] as WorkflowCardData[],
  },

  faturamento: {
    title: 'Faturamento de Convênios',
    cards: [
      {
        step: '01',
        type: 'trigger',
        header: 'Consulta finalizada',
        what: 'Dados da consulta registrados no sistema ao encerrar',
        icons: ['sheets', 'calendar'],
      },
      {
        step: '02',
        type: 'process',
        header: 'Guia formatada',
        what: 'Guia TISS preenchida conforme regras do convênio',
        icons: ['sheets', 'excel'],
      },
      {
        step: '03',
        type: 'process',
        header: 'Envio realizado',
        what: 'Guia submetida ao portal do convênio automaticamente',
        icons: ['gmail', 'pdf'],
      },
      {
        step: '04',
        type: 'result',
        header: 'Pagamento rastreado',
        what: 'Status do pagamento monitorado até a baixa final',
        icons: ['sheets', 'gmail'],
      },
    ] as WorkflowCardData[],
  },

  conformidade: {
    title: 'Conformidade e Auditoria',
    cards: [
      {
        step: '01',
        type: 'trigger',
        header: 'Documento recebido',
        what: 'Novo documento detectado via e-mail ou upload direto',
        icons: ['gmail', 'pdf'],
      },
      {
        step: '02',
        type: 'process',
        header: 'Auto-classificado',
        what: 'Tipo de documento identificado e categorizado por IA',
        icons: ['sheets'],
      },
      {
        step: '03',
        type: 'process',
        header: 'Retenção definida',
        what: 'Prazo legal de guarda calculado e aplicado',
        icons: ['calendar', 'sheets'],
      },
      {
        step: '04',
        type: 'result',
        header: 'Alertas agendados',
        what: 'Notificações programadas antes do vencimento do prazo',
        icons: ['gmail', 'whatsapp'],
      },
    ] as WorkflowCardData[],
  },

  cobranca: {
    title: 'Cobrança Automatizada',
    cards: [
      {
        step: '01',
        type: 'trigger',
        header: 'Fatura gerada',
        what: 'Fatura criada automaticamente após consulta realizada',
        icons: ['sheets', 'excel'],
      },
      {
        step: '02',
        type: 'process',
        header: 'Prazo monitorado',
        what: 'Vencimento acompanhado com contagem regressiva ativa',
        icons: ['calendar', 'sheets'],
      },
      {
        step: '03',
        type: 'process',
        header: 'Cobrança enviada',
        what: 'Lembretes enviados por e-mail e WhatsApp ao paciente',
        icons: ['gmail', 'whatsapp'],
      },
      {
        step: '04',
        type: 'result',
        header: 'Baixa confirmada',
        what: 'Pagamento registrado e status atualizado no sistema',
        icons: ['sheets', 'pix'],
      },
    ] as WorkflowCardData[],
  },
}
