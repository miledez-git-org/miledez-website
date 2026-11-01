import type { HeroWorkflowPreset, Industry } from './presets'

/** English (en-US) versions of the hero and compact workflow presets. */

export const heroPresetsEn: Record<Industry, HeroWorkflowPreset> = {
  saude: {
    title: 'Appointment confirmations',
    steps: [
      { icon: 'calendar', label: 'Appointment booked', sublabel: 'Time set on the calendar', logos: ['google-calendar'] },
      { icon: 'process', label: 'WhatsApp reminder', sublabel: '24h before, with an option to reschedule', logos: ['whatsapp'] },
      { icon: 'check', label: 'Calendar confirmed', sublabel: 'Open slots visible to the front desk', logos: ['google-calendar', 'google-sheets'] },
    ],
  },
  servicos: {
    title: 'Renewal reminder',
    steps: [
      { icon: 'calendar', label: 'Contract nearing expiry', sublabel: 'Reminder 60 days before', logos: ['google-calendar', 'gmail'] },
      { icon: 'process', label: 'Renewal prepared', sublabel: 'Draft ready to review', logos: ['word', 'gmail'] },
      { icon: 'check', label: 'Sent with your approval', sublabel: 'You decide before it goes out', logos: ['docusign', 'gmail'] },
    ],
  },
  agronegocio: {
    title: 'Supply quotes',
    steps: [
      { icon: 'document', label: 'Supply request', sublabel: 'Received over WhatsApp', logos: ['whatsapp', 'google-sheets'] },
      { icon: 'process', label: 'Quotes compared', sublabel: 'Price and lead time side by side', logos: ['excel', 'google-sheets'] },
      { icon: 'check', label: 'Order confirmed', sublabel: 'After your approval', logos: ['gmail', 'whatsapp'] },
    ],
  },
}

export const saudeWorkflowsCompactEn = {
  appointments: {
    title: 'Appointment confirmations',
    steps: [
      { icon: 'calendar' as const, label: 'Appointment booked', sublabel: 'Time set on the calendar', logos: ['google-calendar'] },
      { icon: 'bell' as const, label: 'Reminder sent', sublabel: 'WhatsApp 24h before', logos: ['whatsapp'] },
      { icon: 'mail' as const, label: 'Reply recorded', sublabel: 'Confirmed, rescheduled or cancelled', logos: ['whatsapp', 'google-sheets'] },
      { icon: 'check' as const, label: 'Calendar updated', sublabel: 'Open slots visible to the front desk', logos: ['google-calendar', 'google-sheets'] },
    ],
  },
  esocial: {
    title: 'eSocial health and safety check',
    steps: [
      { icon: 'document' as const, label: 'Exam completed', sublabel: 'Occupational exam entered in the system', logos: ['excel'] },
      { icon: 'process' as const, label: 'Rules checked', sublabel: 'Job code, employment type and health program', logos: ['excel', 'google-sheets'] },
      { icon: 'bell' as const, label: 'Error flagged', sublabel: 'With the suggested fix', logos: ['gmail'] },
      { icon: 'check' as const, label: 'Event checked', sublabel: 'Team fixes it before submission', logos: ['excel'] },
    ],
  },
  followUp: {
    title: 'Follow-up reminder',
    steps: [
      { icon: 'user' as const, label: 'Visit completed', sublabel: 'Follow-up date noted', logos: ['google-sheets'] },
      { icon: 'calendar' as const, label: 'Date tracked', sublabel: 'Nobody has to watch the calendar', logos: ['google-calendar'] },
      { icon: 'bell' as const, label: 'Patient notified', sublabel: 'WhatsApp message', logos: ['whatsapp'] },
      { icon: 'check' as const, label: 'Follow-up booked', sublabel: 'Time set on the calendar', logos: ['google-calendar', 'whatsapp'] },
    ],
  },
}

export const servicosWorkflowsCompactEn = {
  onboarding: {
    title: 'New client onboarding',
    steps: [
      { icon: 'user' as const, label: 'Contract signed', sublabel: 'New client confirmed', logos: ['docusign', 'gmail'] },
      { icon: 'mail' as const, label: 'Welcome sent', sublabel: 'Email with the next steps', logos: ['gmail'] },
      { icon: 'folder' as const, label: 'Folder created', sublabel: "Your firm's standard structure", logos: ['google-drive'] },
      { icon: 'check' as const, label: 'Ready to start', sublabel: 'Team notified', logos: ['gmail', 'google-drive'] },
    ],
  },
  contracts: {
    title: 'Renewal reminder',
    steps: [
      { icon: 'document' as const, label: 'Contract on file', sublabel: 'Expiry date recorded', logos: ['google-drive', 'google-sheets'] },
      { icon: 'calendar' as const, label: 'Reminders scheduled', sublabel: '60, 30 and 15 days before', logos: ['google-calendar', 'gmail'] },
      { icon: 'document' as const, label: 'Draft prepared', sublabel: 'For you to review and approve', logos: ['word', 'gmail'] },
      { icon: 'check' as const, label: 'Renewal sent', sublabel: 'After your approval', logos: ['docusign'] },
    ],
  },
  billing: {
    title: 'From delivery to invoice',
    steps: [
      { icon: 'result' as const, label: 'Delivery recorded', sublabel: 'Milestone marked in the spreadsheet', logos: ['google-sheets'] },
      { icon: 'process' as const, label: 'Amounts gathered', sublabel: 'Hours and amounts for the period', logos: ['excel', 'google-sheets'] },
      { icon: 'creditCard' as const, label: 'Invoice sent', sublabel: "To the client's email", logos: ['contaazul', 'gmail'] },
      { icon: 'check' as const, label: 'Payment tracked', sublabel: 'Reminders until paid', logos: ['contaazul', 'whatsapp'] },
    ],
  },
}

export const agronegocioWorkflowsCompactEn = {
  supplierCoordination: {
    title: 'Supply quotes',
    steps: [
      { icon: 'document' as const, label: 'Request received', sublabel: 'Over WhatsApp', logos: ['whatsapp'] },
      { icon: 'sync' as const, label: 'Quotes compared', sublabel: "Each supplier's price and lead time", logos: ['google-sheets', 'excel'] },
      { icon: 'bell' as const, label: 'Best offer approved', sublabel: 'Team decides over WhatsApp', logos: ['whatsapp'] },
      { icon: 'check' as const, label: 'Order confirmed', sublabel: 'Email to the supplier', logos: ['gmail'] },
    ],
  },
  traceability: {
    title: 'License expiry reminders',
    steps: [
      { icon: 'document' as const, label: 'Document received', sublabel: 'License, certificate or report', logos: ['gmail', 'google-drive'] },
      { icon: 'folder' as const, label: 'Filed in the right folder', sublabel: 'With its type identified', logos: ['google-drive'] },
      { icon: 'calendar' as const, label: 'Expiry date recorded', sublabel: 'In the tracking spreadsheet', logos: ['google-sheets', 'google-calendar'] },
      { icon: 'check' as const, label: 'Reminder sent', sublabel: 'Before it expires', logos: ['gmail', 'whatsapp'] },
    ],
  },
  fieldOffice: {
    title: 'Field updates in the spreadsheet',
    steps: [
      { icon: 'mail' as const, label: 'Field report', sublabel: 'Message or photo over WhatsApp', logos: ['whatsapp'] },
      { icon: 'process' as const, label: 'Information organized', sublabel: 'Plot, date and event', logos: ['google-sheets'] },
      { icon: 'document' as const, label: 'Spreadsheet updated', sublabel: 'In the office, no retyping', logos: ['google-sheets', 'excel'] },
      { icon: 'check' as const, label: 'Team notified', sublabel: 'When something needs a decision', logos: ['gmail', 'whatsapp'] },
    ],
  },
}
