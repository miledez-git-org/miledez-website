import type { Locale } from '@/lib/i18n'
import { HeroWorkflowStep } from './types'
import {
  heroPresetsEn,
  saudeWorkflowsCompactEn,
  servicosWorkflowsCompactEn,
  agronegocioWorkflowsCompactEn,
} from './presets.en'

export interface HeroWorkflowPreset {
  title: string
  steps: HeroWorkflowStep[]
}

export type Industry = 'saude' | 'servicos' | 'agronegocio'

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
