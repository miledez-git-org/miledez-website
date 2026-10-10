import type { Dict } from './index'
import type { IndustryCopy, LegalPage } from './pt'

/**
 * English (en-US) copy. Typed against the Portuguese dictionary so a missing
 * or extra key is a compile error.
 *
 * Prices are shown in USD.
 */
export const en: Dict = {
  site: {
    title: 'mil&dez - Business Process Automation',
    description:
      'Reminders, billing, quotes and deadlines on autopilot, in the systems you already use. Your first automation in up to 2 weeks, with no development cost.',
    keywords: ['automation', 'business processes', 'workflow', 'Brazil', 'n8n', 'AI'],
    skipLink: 'Skip to content',
  },

  header: {
    home: 'Home',
    industries: 'Industries',
    pricing: 'Pricing',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLabel: 'Português',
    switchAria: 'Ler esta página em português',
    switchShort: 'PT',
  },

  footer: {
    tagline: 'your work on autopilot',
    home: 'Home',
    health: 'Healthcare',
    services: 'Services',
    agribusiness: 'Agribusiness',
    whatsapp: 'WhatsApp',
    address: 'Rua Irmaos Kennedy 200 ap. 301, Belo Horizonte, MG, Brazil · CNPJ: 44.584.460/0001-80',
    rights: '© 2025 mil&dez. All rights reserved.',
    privacy: 'Privacy',
    terms: 'Terms',
  },

  contactModal: {
    close: 'Close',
    successTitle: 'Message received',
    successText: 'We reply within 1 business day to schedule the 30-minute conversation.',
    title: 'Your free automation',
    intro: "Tell us which task takes up the most of your team's time. We reply within 1 business day to schedule the 30-minute conversation.",
    name: 'Name *',
    namePlaceholder: 'Your name',
    email: 'Email *',
    emailPlaceholder: 'you@company.com',
    phone: 'Phone',
    phonePlaceholder: '(555) 123-4567',
    message: 'Message *',
    messagePlaceholder: 'E.g. we confirm 40 appointments a day by phone and many patients still miss them.',
    error: 'Something went wrong while sending your message. Please try again.',
    sending: 'Sending...',
    submit: 'Send',
  },

  home: {
    meta: {
      title: 'mil&dez · Process automation for small and mid-sized businesses',
      description:
        'Reminders, billing, quotes and deadlines on autopilot, in the systems you already use. Your first automation in up to 2 weeks, with no development cost.',
    },
    hero: {
      line1: 'Your team stops',
      line2: 'repeating tasks.',
      accent: 'The system does it for them.',
      subtitle:
        'Reminders, billing, quotes and deadlines start happening on their own, in the systems you already use. We build your first automation with no development cost, ready in up to 2 weeks.',
      cta: 'Get my free automation',
      secondary: 'See examples',
    },
    diagram: {
      label: 'Automation',
      items: ['Recurring tasks run on their own', 'Information gathered in one place', 'Deadlines checked without anyone remembering'],
    },
    // Unused since the storytelling reorder (ValuePropositionB is no longer rendered). Safe to delete with that component.
    value: {
      titleLead: 'Your first automation live in days.',
      titleAccent: 'No risk.',
      subtitle:
        'We build, host and maintain custom automations for your operation, connecting the systems you already use.',
      benefits: [
        { title: 'Delivered in days', description: 'Simple automations in 3–7 days. Larger projects in 2–4 weeks.' },
        { title: 'No upfront cost', description: 'Development and testing are on us. Monthly subscription, cancel anytime.' },
        { title: '100% managed', description: 'Your team does nothing technical. We take care of everything.' },
        { title: 'Built for you', description: "Every automation is built around your company's real workflow." },
      ],
      cta: 'Try an automation free',
    },
    pain: {
      titleLead: "How much of your team's day",
      titleAccent: 'goes into copying, pasting and remembering?',
      subtitle:
        'Three problems show up in almost every small and mid-sized business. They cost hours every week and rarely appear in any report.',
      points: [
        { title: 'The same task, every day', description: 'Confirming appointments, sending reminders, updating spreadsheets. Someone on the team does it by hand, one message at a time.' },
        { title: 'Information in five places', description: 'The order came in on WhatsApp, the price is in a spreadsheet and the invoice is in email. To answer a customer, someone has to pull it all together.' },
        { title: 'The deadline nobody remembered', description: 'A contract that expired, a bill that never went out, a license that lapsed. Every slip turns into rework, a fine or a lost customer.' },
      ],
      cta: 'See how this gets automated',
    },
    explainer: {
      titleLead: 'The same three problems,',
      titleAccent: 'solved on autopilot',
      subtitle:
        'One example for each problem above. In your company, the automation follows your process and uses the systems you already have.',
      solvesLabel: 'Solves:',
      beforeLabel: 'Before:',
      afterLabel: 'After, on autopilot',
      workflows: [
        {
          industry: 'Healthcare',
          summary: 'Appointment confirmations',
          solves: 'the same task, every day',
          before: 'the front desk messages every patient, one by one.',
          steps: [
            { title: 'Appointment booked', description: 'Patient picks a time on the calendar' },
            { title: 'Reminder sent', description: 'Automatic WhatsApp message 24h before' },
            { title: 'Patient confirmed', description: 'Status updated in the spreadsheet' },
          ],
        },
        {
          industry: 'Agribusiness',
          summary: 'Supply quotes',
          solves: 'information in five places',
          before: 'someone asks each supplier for a price and compares everything by hand.',
          steps: [
            { title: 'Order received', description: 'Grower sends it over WhatsApp' },
            { title: 'Quotes compared', description: 'Spreadsheet checks suppliers' },
            { title: 'Best price selected', description: 'Team notified on Slack' },
            { title: 'Order confirmed', description: 'Email sent to the supplier' },
            { title: 'Invoice recorded', description: 'Document saved automatically' },
          ],
        },
        {
          industry: 'Professional firms',
          summary: 'Contract renewals',
          solves: 'the deadline nobody remembered',
          before: 'renewals depend on someone remembering the date.',
          steps: [
            { title: 'Contract expiring', description: 'CRM flags an upcoming deadline' },
            { title: 'Document reviewed', description: 'Email with the updated draft' },
            { title: 'Signature requested', description: 'Digital signature link' },
            { title: 'Contract filed', description: 'Final version saved to the cloud' },
          ],
        },
      ],
    },
    profiles: {
      titleLead: 'What one of these',
      titleAccent: 'automations is worth',
      subtitle:
        'We ran the numbers for three typical businesses, one for each example above. The assumptions are in plain sight so you can compare them with your own.',
      subscription: 'Monthly fee',
      savings: 'Estimated return',
      perMonth: '/mo',
      items: [
        {
          type: 'Dental clinic',
          size: '12 staff',
          automation: 'Automation: appointment confirmations',
          subscription: '$150',
          savings: '$600',
          assumption: 'Assumption: 10 fewer no-shows a month at a $50 average ticket, plus 20 front-desk hours freed up ($5/h).',
        },
        {
          type: 'Coffee cooperative',
          size: '50 growers',
          automation: 'Automation: supply quotes',
          subscription: '$500',
          savings: '$1,120',
          assumption: 'Assumption: 1% savings on $80k of monthly purchases, plus 40 hours of quoting freed up ($8/h).',
        },
        {
          type: 'Accounting firm',
          size: '6 employees',
          automation: 'Automation: contract renewals',
          subscription: '$150',
          savings: '$380',
          assumption: 'Assumption: 15 hours a month freed up ($12/h), plus $200 a month in fees no longer lost to forgotten renewals.',
        },
      ],
      disclaimer: 'These figures are illustrative estimates. In the assessment, we redo the math with your own numbers.',
      ctaPrimary: 'Get my free automation',
      ctaSecondary: 'How to get started',
    },
    process: {
      titleLead: 'From the first conversation',
      titleAccent: 'to a working automation',
      subtitle:
        'You tell us how the work gets done today. We build it, test it and take care of everything afterwards. Your team never touches anything technical.',
      promiseTitle: 'Your first automation in up to 2 weeks, without paying for development',
      promiseItems: ['Development is on us', 'You test before you subscribe', 'Hosting, maintenance and changes in the monthly fee'],
      steps: [
        {
          title: '30-minute conversation',
          description: 'You show us how the operation works today and where time gets lost. We ask, listen and take notes.',
          duration: '30 min',
        },
        {
          title: 'Written assessment',
          description: 'You get a report with the automations that make the most sense for your business, the time each one saves and what it costs.',
          duration: '2–3 business days',
        },
        {
          title: 'Build and test',
          description: 'You choose where to start. We build the automation connected to your systems and adjust it with your team until it works the right way.',
          duration: '1–2 weeks',
        },
        {
          title: 'Live, with follow-up',
          description: 'The automation becomes part of the daily routine. If your process changes, we adjust it. That is included in the monthly fee.',
          duration: 'ongoing',
        },
      ],
    },
    pricing: {
      titleLead: 'What it costs',
      titleAccent: "and what's included",
      subtitle: 'One monthly fee covers the build, hosting, maintenance and changes. Cancel anytime.',
      from: 'Starting at',
      perMonth: '/mo',
      tiers: [
        { price: '$150', label: 'One simple automation', example: 'E.g. appointment confirmations or contract renewal reminders' },
        { price: '$500', label: 'Automations with several steps and systems', example: 'E.g. quotes across several suppliers' },
        { price: '$1,500', label: 'Several connected processes, built for you', example: 'E.g. purchasing from order to invoice' },
      ],
      includedTitle: 'Included in every plan',
      included: ['Build', 'Hosting', 'Maintenance', 'Changes when your process changes', 'Support over WhatsApp'],
      cta: 'Get my free automation',
      ctaNote: 'Development of your first automation is on us.',
    },
    faq: {
      titleLead: 'Questions',
      titleAccent: 'before you start',
      subtitle: "If your question isn't here, bring it to the 30-minute conversation.",
      items: [
        {
          question: "What if I don't like the trial?",
          answer: "You pay nothing. Development of the first automation is on us, and you only subscribe if you want to keep it.",
        },
        {
          question: 'Do I need to replace any of my systems?',
          answer: "No. The automation connects what you already use, such as WhatsApp, spreadsheets, email, calendars and your management system. If a system can't be connected, we tell you in the first conversation and suggest an alternative.",
        },
        {
          question: 'Will my team need to learn a new tool?',
          answer: 'No. The automation works in the background and your team stays in the same systems, with less manual work. When something needs a decision, the alert arrives where the team already works, such as WhatsApp or email.',
        },
        {
          question: "What about my customers' data?",
          answer: "We follow Brazil's data protection law (LGPD). The automation only accesses the data it needs, with permissions you grant and can revoke at any time. Your data stays in your systems, and we sign a data processing agreement with every client.",
        },
        {
          question: 'What happens if I cancel?',
          answer: "You give 30 days' notice and the automation is switched off at the end of the period. Your data stays in your systems and we hand over documentation of what was built.",
        },
        {
          question: 'What if the automation breaks?',
          answer: 'We monitor every automation. If something fails, we get an alert, let you know and fix it, usually within the same business day. Fixes are included in the monthly fee.',
        },
        {
          question: 'Do you use artificial intelligence?',
          answer: 'When it helps, yes: to read messages, organize documents or sort orders. When a simple rule does the job, we use the rule.',
        },
      ],
    },
    cta: {
      titleLine1: 'Pick a task that keeps repeating.',
      titleLine2: "We'll put it on autopilot.",
      text: "Tell us which process takes up the most of your team's time. We reply within 1 business day and build the first automation with no development cost.",
      founder: 'Your message goes to Simon Larsen, founder of mil&dez, in Belo Horizonte.',
      founderAlt: 'Simon Larsen, founder of mil&dez',
      button: 'Get my free automation',
      note: 'No commitment.',
    },
  },

  industries: {
    meta: {
      title: 'Industries - mil&dez',
      description: 'Custom automation for healthcare, professional services and agribusiness.',
    },
    titleLead: 'Automation for',
    titleAccent: 'your industry',
    subtitle: "Every sector has its own processes. We build custom automations around your operation's real workflow.",
    cardCta: 'See solutions →',
    cards: {
      health: {
        title: 'Healthcare & Clinics',
        description: 'We automate scheduling, appointment confirmations, documentation and billing for clinics and medical practices.',
      },
      services: {
        title: 'Professional Services',
        description: 'We automate contracts, billing, reports and communication for firms and service providers.',
      },
      agribusiness: {
        title: 'Agribusiness',
        description: 'We automate suppliers, quotes, compliance and field-to-office communication for agribusiness.',
      },
    },
  },

  industry: {
    health: {
      meta: {
        title: 'Healthcare & Clinics - mil&dez',
        description: 'We automate documentation, billing and compliance for clinics and medical practices.',
      },
      badge: 'Healthcare & Clinics',
      heroTitle: ['Less paperwork.', 'More time for patients.'],
      heroText: 'We automate documentation, billing and compliance. You focus on patient care.',
      heroCta: 'Get my free automation',
      challengesTitle: 'Everyday challenges',
      challenges: [
        { title: 'Scattered documentation', description: 'Paper charts, files on the computer, email attachments. Information spread everywhere and hard to find when you need it.' },
        { title: 'Complex billing', description: 'Every insurer has different rules, claims come back denied, and time is lost fixing and resubmitting.' },
        { title: 'Constant compliance', description: 'Retention periods, required documents, audit preparation. There is always something to organize.' },
      ],
      workflowsTitle: 'Automations for your clinic',
      workflowsText: 'Processes that run on their own, from intake to payment',
      workflowSubtitles: ['From intake to patient record, paper-free', 'Claims formatted and submitted effortlessly', 'From invoice to payment, automated'],
      resultsTitle: 'What changes day to day',
      resultsParagraphs: [
        'Your team stops chasing paper and starts focusing on what matters: patient care.',
        'Audits stop being emergencies. Billing stops being a bottleneck. Documents stop going missing.',
      ],
      integrationsTitle: 'Tools you already use',
      integrationsText: 'We integrate without replacing your systems',
      ctaTitle: 'Ready to simplify your admin?',
      ctaText: 'Tell us how your clinic works. We build the first automation with no development cost, ready in up to 2 weeks.',
      ctaButton: 'Get my free automation',
    } as IndustryCopy,
    services: {
      meta: {
        title: 'Professional Services - mil&dez',
        description: 'We automate contracts, billing and reports for firms and service providers.',
      },
      badge: 'Professional Services',
      heroTitle: ['Less admin.', 'More billable hours.'],
      heroText: 'We automate contracts, billing and client organization. You focus on delivering value.',
      heroCta: 'Get my free automation',
      challengesTitle: 'The cost of invisible work',
      challenges: [
        { title: 'Hours lost to admin', description: 'Time spent writing proposals, organizing documents, sending invoices and chasing clients. Hours that could be billed.' },
        { title: 'Contracts and deadlines', description: 'Forgotten renewals, expired contracts, missed deadlines. Information scattered across emails, folders and spreadsheets.' },
        { title: 'Manual collections', description: 'Late invoices, clients who forget to pay, time lost reconciling what was delivered with what was billed.' },
      ],
      workflowsTitle: 'What we automate',
      workflowsText: 'Processes that run on their own and free up your time',
      workflowSubtitles: ['Welcome and setup created automatically', 'Alerts and renewals on autopilot', 'From delivery to payment, on time'],
      resultsTitle: 'What changes day to day',
      resultsParagraphs: [
        'Your time goes back to what generates revenue: serving clients, closing projects, delivering results.',
        'Admin happens in the background. Contracts renew, invoices go out on time, and clients get their reports without you having to remember.',
      ],
      integrationsTitle: 'Tools you already use',
      integrationsText: 'We integrate without replacing your systems',
      ctaTitle: 'Ready to get your productive hours back?',
      ctaText: 'Tell us how your firm works. We build the first automation with no development cost, ready in up to 2 weeks.',
      ctaButton: 'Get my free automation',
    } as IndustryCopy,
    agribusiness: {
      meta: {
        title: 'Agribusiness - mil&dez',
        description: 'We automate suppliers, compliance and field-to-office communication for agribusiness.',
      },
      badge: 'Agribusiness',
      heroTitle: ['Farm management', 'on autopilot.'],
      heroText: 'We automate suppliers, documentation and field-to-office communication. You focus on production.',
      heroCta: 'Get my free automation',
      challengesTitle: 'The daily grind that slows operations',
      challenges: [
        { title: 'Suppliers on personal WhatsApp', description: 'Quotes, deadlines and confirmations scattered across personal chats. Nobody knows what was agreed or with whom.' },
        { title: 'Manual environmental paperwork', description: 'Licenses, certificates and reports in lost folders. Expiration dates go unnoticed and inspections catch you off guard.' },
        { title: 'Field and office disconnected', description: 'Field updates arrive as voice notes, photos and loose text. The office spends hours organizing what should already be ready.' },
      ],
      workflowsTitle: 'What we automate',
      workflowsText: 'Processes that keep running while you focus on production',
      workflowSubtitles: ['Quote, order and delivery without the effort', 'Licenses and certificates always up to date', 'Field data organized in the office'],
      resultsTitle: 'What changes day to day',
      resultsParagraphs: [
        'Suppliers coordinated without relying on personal WhatsApp. Documentation organized and monitored. Field and office connected.',
        'You stop putting out fires and focus on what matters: producing better, negotiating better, growing.',
      ],
      integrationsTitle: 'Tools you already use',
      integrationsText: 'We integrate without replacing your systems',
      ctaTitle: 'Ready to automate your operation?',
      ctaText: 'Tell us how your operation works. We build the first automation with no development cost, ready in up to 2 weeks.',
      ctaButton: 'Get my free automation',
    } as IndustryCopy,
  },

  terms: {
    meta: { title: 'Terms of Use - mil&dez', description: 'Terms and conditions for using mil&dez services.' },
    heading: 'Terms of Use',
    updated: 'Last updated: January 2026',
    sections: [
      { title: '1. Acceptance of Terms', paragraphs: ['By accessing and using the website and services of mil&dez Automação Ltda. ("mil&dez"), you agree to these Terms of Use. If you do not agree with any of these terms, please do not use our services.'] },
      { title: '2. Description of Services', paragraphs: ['mil&dez provides business process automation services, including the development, implementation and maintenance of automated workflows for companies.'] },
      {
        title: '3. Use of the Website',
        intro: 'You agree to use our website and services only for lawful purposes and in accordance with these terms. You must not:',
        items: [
          { text: 'Violate any applicable law or regulation' },
          { text: 'Infringe intellectual property rights' },
          { text: 'Transmit harmful or malicious content' },
          { text: 'Attempt to access systems without authorization' },
          { text: 'Interfere with the operation of the website' },
        ],
      },
      { title: '4. Intellectual Property', paragraphs: ['All website content, including text, graphics, logos, icons, images and software, is the property of mil&dez or its licensors and is protected by copyright and intellectual property laws.'] },
      { title: '5. Engaging Our Services', paragraphs: ['Engaging our automation services is subject to specific terms agreed in a separate contract. Prices shown on the website are estimates and may vary depending on the complexity of the project.'] },
      { title: '6. Limitation of Liability', paragraphs: ['mil&dez will not be liable for indirect, incidental, special or consequential damages arising from the use of, or inability to use, our services, except where provided by law.'] },
      { title: '7. Changes', paragraphs: ['We reserve the right to modify these terms at any time. Changes take effect once published on the website. Continued use of the services after changes constitutes acceptance of the new terms.'] },
      { title: '8. Governing Law', paragraphs: ['These terms are governed by the laws of the Federative Republic of Brazil. Any dispute will be submitted to the courts of the district of Belo Horizonte, MG.'] },
      {
        title: '9. Contact',
        paragraphs: ['If you have questions about these terms, please contact us:'],
        contact: { emailLabel: 'Email:', email: 'contato@miledez.com.br', addressLabel: 'Address:', address: 'Belo Horizonte, MG - Brazil' },
      },
    ],
  } as LegalPage,

  privacy: {
    meta: { title: 'Privacy Policy - mil&dez', description: 'Privacy policy and personal data handling at mil&dez, in compliance with Brazil\'s LGPD.' },
    heading: 'Privacy Policy',
    updated: 'Last updated: January 2026',
    sections: [
      { title: '1. Introduction', paragraphs: ['mil&dez Automação Ltda. ("mil&dez", "we", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share and protect your personal information in compliance with Brazil\'s General Data Protection Law (LGPD - Law No. 13,709/2018).'] },
      {
        title: '2. Data We Collect',
        intro: 'We collect the following types of information:',
        items: [
          { lead: 'Identification data:', text: 'name, email, phone, company' },
          { lead: 'Browsing data:', text: 'IP address, browser type, pages visited' },
          { lead: 'Communication data:', text: 'messages sent through contact forms' },
        ],
      },
      {
        title: '3. How We Use Your Data',
        intro: 'We use your information to:',
        items: [
          { text: 'Respond to requests and provide support' },
          { text: 'Send information about our services (with your consent)' },
          { text: 'Improve our website and services' },
          { text: 'Comply with legal obligations' },
        ],
      },
      { title: '4. Legal Basis for Processing', paragraphs: ['Personal data is processed on the basis of: the data subject\'s consent, performance of a contract, compliance with a legal obligation, or the legitimate interest of mil&dez, as applicable.'] },
      { title: '5. Data Sharing', paragraphs: ['We do not sell your personal information. We may share data with service providers that help us run our operations, always under contracts that ensure adequate protection of the data.'] },
      {
        title: '6. Your Rights (LGPD)',
        intro: 'You have the right to:',
        items: [
          { text: 'Confirm that your data is being processed' },
          { text: 'Access your data' },
          { text: 'Correct incomplete or outdated data' },
          { text: 'Request anonymization, blocking or deletion of data' },
          { text: 'Withdraw consent' },
          { text: 'Request data portability' },
        ],
      },
      { title: '7. Data Retention', paragraphs: ['We keep your personal data for as long as necessary to fulfill the purposes for which it was collected, or as required by law.'] },
      { title: '8. Security', paragraphs: ['We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure or destruction.'] },
      {
        title: '9. Contact',
        paragraphs: ['To exercise your rights or ask questions about this policy, please contact us:'],
        contact: { emailLabel: 'Email:', email: 'contato@miledez.com.br', addressLabel: 'Address:', address: 'Belo Horizonte, MG - Brazil' },
      },
      { title: '10. Changes', paragraphs: ['This policy may be updated from time to time. We recommend that you review this page regularly to stay informed about our privacy practices.'] },
    ],
  } as LegalPage,
}
