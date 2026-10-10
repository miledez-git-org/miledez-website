import type { HeroWorkflowPreset, Industry } from './presets'

/** English (en-US) versions of the hero and compact workflow presets. */

export const heroPresetsEn: Record<Industry, HeroWorkflowPreset> = {
  saude: {
    title: 'Document Automation',
    steps: [
      { icon: 'user', label: 'New patient', sublabel: 'Intake starts the process', logos: ['whatsapp', 'google-sheets'] },
      { icon: 'process', label: 'Processed automatically', sublabel: 'Forms, docs and filing', logos: ['gmail', 'google-drive'] },
      { icon: 'check', label: 'Patient record complete', sublabel: 'Ready for the visit', logos: ['google-drive', 'excel'] },
    ],
  },
  servicos: {
    title: 'Contract Management',
    steps: [
      { icon: 'user', label: 'Client added', sublabel: 'Details recorded in the system', logos: ['gmail', 'google-drive'] },
      { icon: 'process', label: 'Contract managed', sublabel: 'Drafting, alerts and renewal', logos: ['docusign', 'google-calendar'] },
      { icon: 'check', label: 'Renewed automatically', sublabel: 'Continuity guaranteed', logos: ['docusign', 'gmail'] },
    ],
  },
  agronegocio: {
    title: 'Supplier Coordination',
    steps: [
      { icon: 'document', label: 'Order logged', sublabel: 'Supply request', logos: ['whatsapp', 'google-sheets'] },
      { icon: 'process', label: 'Quotes and tracking', sublabel: 'Price comparison and deadlines', logos: ['excel', 'google-drive'] },
      { icon: 'check', label: 'Inventory updated', sublabel: 'Receipt recorded', logos: ['google-sheets', 'contaazul'] },
    ],
  },
}

export const saudeWorkflowsCompactEn = {
  documents: {
    title: 'Document Collection',
    steps: [
      { icon: 'user' as const, label: 'New patient', sublabel: 'Intake starts the process', logos: ['whatsapp', 'google-sheets'] },
      { icon: 'mail' as const, label: 'Form sent', sublabel: 'Automatic intake questionnaire', logos: ['gmail', 'typeform'] },
      { icon: 'folder' as const, label: 'Docs organized', sublabel: 'Automatic filing', logos: ['google-drive', 'google-sheets'] },
      { icon: 'check' as const, label: 'Record complete', sublabel: 'Ready for the visit', logos: ['google-drive', 'excel'] },
    ],
  },
  billing: {
    title: 'Insurance Billing',
    steps: [
      { icon: 'document' as const, label: 'Visit completed', sublabel: 'Data recorded', logos: ['google-sheets', 'excel'] },
      { icon: 'file' as const, label: 'Claim formatted', sublabel: "Per the insurer's rules", logos: ['excel', 'word'] },
      { icon: 'mail' as const, label: 'Automatic submission', sublabel: 'Sent to the payer portal', logos: ['gmail', 'outlook'] },
      { icon: 'check' as const, label: 'Status tracked', sublabel: 'Until payment', logos: ['google-sheets', 'contaazul'] },
    ],
  },
  compliance: {
    title: 'Compliance and Audit',
    steps: [
      { icon: 'document' as const, label: 'Document received', sublabel: 'Any format', logos: ['gmail', 'google-drive'] },
      { icon: 'process' as const, label: 'Auto-classified', sublabel: 'AI identifies the type', logos: ['openai', 'google-drive'] },
      { icon: 'calendar' as const, label: 'Retention set', sublabel: 'Legal deadline applied automatically', logos: ['google-calendar', 'excel'] },
      { icon: 'check' as const, label: 'Alerts scheduled', sublabel: 'Notice before expiration', logos: ['google-calendar', 'gmail'] },
    ],
  },
  collections: {
    title: 'Automated Collections',
    steps: [
      { icon: 'creditCard' as const, label: 'Invoice generated', sublabel: 'Automatically after the visit', logos: ['contaazul', 'excel'] },
      { icon: 'calendar' as const, label: 'Due date monitored', sublabel: 'Countdown', logos: ['google-calendar', 'google-sheets'] },
      { icon: 'bell' as const, label: 'Reminders sent', sublabel: 'Automatic escalation', logos: ['whatsapp', 'gmail'] },
      { icon: 'check' as const, label: 'Marked as paid', sublabel: 'When payment arrives', logos: ['contaazul', 'whatsapp'] },
    ],
  },
}

export const servicosWorkflowsCompactEn = {
  onboarding: {
    title: 'Client Onboarding',
    steps: [
      { icon: 'user' as const, label: 'New client', sublabel: 'Contract signed', logos: ['gmail', 'google-drive'] },
      { icon: 'mail' as const, label: 'Welcome kit sent', sublabel: 'Automatic welcome', logos: ['gmail', 'notion'] },
      { icon: 'folder' as const, label: 'Folder created', sublabel: 'Structure in place', logos: ['google-drive', 'notion'] },
      { icon: 'check' as const, label: 'Ready to start', sublabel: 'Everything set up', logos: ['notion', 'gmail'] },
    ],
  },
  contracts: {
    title: 'Contract Management',
    steps: [
      { icon: 'document' as const, label: 'Contract logged', sublabel: 'Expiration recorded', logos: ['google-drive', 'docusign'] },
      { icon: 'calendar' as const, label: 'Alerts scheduled', sublabel: '60, 30 and 15 days before', logos: ['google-calendar', 'gmail'] },
      { icon: 'document' as const, label: 'Proposal generated', sublabel: 'Renewal pre-filled', logos: ['docusign', 'excel'] },
      { icon: 'check' as const, label: 'Renewal secured', sublabel: 'Status always current', logos: ['docusign', 'google-drive'] },
    ],
  },
  billing: {
    title: 'Project Billing',
    steps: [
      { icon: 'result' as const, label: 'Milestone reached', sublabel: 'Delivery triggers the process', logos: ['google-sheets', 'notion'] },
      { icon: 'process' as const, label: 'Data compiled', sublabel: 'Hours and amounts gathered', logos: ['excel', 'google-sheets'] },
      { icon: 'creditCard' as const, label: 'Invoice sent', sublabel: 'Formatted and delivered', logos: ['contaazul', 'gmail'] },
      { icon: 'check' as const, label: 'Payment tracked', sublabel: 'Reminders until paid', logos: ['contaazul', 'whatsapp'] },
    ],
  },
  reports: {
    title: 'Client Reports',
    steps: [
      { icon: 'calendar' as const, label: 'Scheduled date', sublabel: 'Weekly or monthly', logos: ['google-calendar', 'notion'] },
      { icon: 'sync' as const, label: 'Data collected', sublabel: 'Automatic metrics', logos: ['google-sheets', 'excel'] },
      { icon: 'document' as const, label: 'Report formatted', sublabel: 'Professional layout', logos: ['google-sheets', 'gmail'] },
      { icon: 'check' as const, label: 'Automatic delivery', sublabel: 'Client receives it on time', logos: ['gmail', 'google-drive'] },
    ],
  },
}

export const agronegocioWorkflowsCompactEn = {
  supplierCoordination: {
    title: 'Supplier Coordination',
    steps: [
      { icon: 'document' as const, label: 'Order logged', sublabel: 'Supply request', logos: ['whatsapp', 'google-sheets'] },
      { icon: 'sync' as const, label: 'Automatic quotes', sublabel: 'Price comparison', logos: ['excel', 'google-sheets'] },
      { icon: 'bell' as const, label: 'Delivery tracked', sublabel: 'Deadlines monitored', logos: ['google-calendar', 'whatsapp'] },
      { icon: 'check' as const, label: 'Inventory updated', sublabel: 'Receipt recorded', logos: ['google-sheets', 'contaazul'] },
    ],
  },
  traceability: {
    title: 'Traceability and Compliance',
    steps: [
      { icon: 'document' as const, label: 'Document received', sublabel: 'License or certificate', logos: ['gmail', 'google-drive'] },
      { icon: 'process' as const, label: 'Auto-classified', sublabel: 'Type identified', logos: ['google-drive', 'google-sheets'] },
      { icon: 'calendar' as const, label: 'Expiration recorded', sublabel: 'Deadline monitored', logos: ['google-calendar', 'excel'] },
      { icon: 'check' as const, label: 'Alert scheduled', sublabel: 'Notice before expiration', logos: ['gmail', 'whatsapp'] },
    ],
  },
  fieldOffice: {
    title: 'Field-to-Office Communication',
    steps: [
      { icon: 'mail' as const, label: 'Field report', sublabel: 'Message or photo received', logos: ['whatsapp', 'gmail'] },
      { icon: 'process' as const, label: 'Data extracted', sublabel: 'Information organized', logos: ['google-sheets', 'google-drive'] },
      { icon: 'document' as const, label: 'Report generated', sublabel: 'Automatic consolidation', logos: ['google-sheets', 'excel'] },
      { icon: 'check' as const, label: 'Team notified', sublabel: 'Office up to date', logos: ['gmail', 'whatsapp'] },
    ],
  },
}
