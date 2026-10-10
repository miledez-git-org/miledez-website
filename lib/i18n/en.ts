import type { Dict } from './index'
import type { IndustryCopy, LegalPage } from './pt'

/**
 * English (en-US) copy. Typed against the Portuguese dictionary so a missing
 * or extra key is a compile error.
 *
 * Prices are shown in USD. They are straight conversions of the BRL tiers
 * (roughly 5 BRL per USD, rounded) and should be confirmed before launch.
 */
export const en: Dict = {
  site: {
    title: 'mil&dez - Business Process Automation',
    description: 'We automate your business processes so you can focus on what matters.',
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
    successTitle: 'Message sent!',
    successText: "We'll be in touch soon to schedule a conversation.",
    title: "Let's talk",
    intro: "Fill out the form and we'll get in touch to build a free test automation for your business.",
    name: 'Name *',
    namePlaceholder: 'Your name',
    email: 'Email *',
    emailPlaceholder: 'you@company.com',
    phone: 'Phone',
    phonePlaceholder: '(555) 123-4567',
    message: 'Message *',
    messagePlaceholder: "Tell us a bit about your business and the processes you'd like to automate...",
    error: 'Something went wrong while sending your message. Please try again.',
    sending: 'Sending...',
    submit: 'Send message',
  },

  home: {
    meta: {
      title: 'mil&dez - Business Process Automation',
      description: 'We automate your business processes so you can focus on what matters.',
    },
    hero: {
      line1: 'your work',
      line2: 'your way',
      accent: 'on autopilot',
      subtitle:
        'Reconnect your systems however you like and automate the processes that waste your time. We deliver results in days, not months.',
      cta: 'Book a demo',
      secondary: 'Learn more',
    },
    diagram: {
      label: 'Automation',
      items: ['Repetitive tasks run on their own', 'Data gathered in one place', 'Automatic checks'],
    },
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
      titleLead: 'Automation solves problems',
      titleAccent: 'and raises quality',
      subtitle:
        'Manual tasks, disconnected systems, information that slips through the cracks. We build custom automations that fix that.',
      points: [
        { title: 'Repetitive tasks', description: 'Your team spends hours on manual work that could happen on its own.' },
        { title: 'Scattered information', description: "Data in email, in spreadsheets, in the system. Nobody knows where anything is." },
        { title: 'Errors and rework', description: 'Missed deadlines, late payments. Small mistakes that cost time and money.' },
      ],
      cta: 'How it works',
    },
    explainer: {
      titleLead: 'How an',
      titleAccent: 'automation works',
      subtitle: "From 3 to 10+ modules. Every flow is built around your company's real process.",
      modules: 'modules',
      workflows: [
        {
          industry: 'Healthcare',
          summary: 'Appointment confirmations',
          steps: [
            { title: 'Appointment booked', description: 'Patient picks a time on the calendar' },
            { title: 'Reminder sent', description: 'Automatic WhatsApp message 24h before' },
            { title: 'Patient confirmed', description: 'Status updated in the spreadsheet' },
          ],
        },
        {
          industry: 'Legal',
          summary: 'Contract renewals',
          steps: [
            { title: 'Contract expiring', description: 'CRM flags an upcoming deadline' },
            { title: 'Document reviewed', description: 'Email with the updated draft' },
            { title: 'Signature requested', description: 'Digital signature link' },
            { title: 'Contract filed', description: 'Final version saved to the cloud' },
          ],
        },
        {
          industry: 'Agribusiness',
          summary: 'Supply quotes',
          steps: [
            { title: 'Order received', description: 'Grower sends it over WhatsApp' },
            { title: 'Quotes compared', description: 'Spreadsheet checks suppliers' },
            { title: 'Best price selected', description: 'Team notified on Slack' },
            { title: 'Order confirmed', description: 'Email sent to the supplier' },
            { title: 'Invoice recorded', description: 'Document saved automatically' },
          ],
        },
      ],
    },
    profiles: {
      titleLead: 'Businesses like yours',
      titleAccent: 'already automate with us',
      subtitle: 'From clinics to co-ops: automation that pays for itself in the first month.',
      subscription: 'Subscription',
      savings: 'Savings',
      perMonth: '/mo',
      items: [
        { type: 'Dental Clinic', size: '12 staff', subscription: '$180', savings: '$1,200', benefitDetail: 'Recovered appointments and less admin time' },
        { type: 'Accounting Firm', size: '6 employees', subscription: '$180', savings: '$900', benefitDetail: 'More productivity and less rework' },
        { type: 'Coffee Cooperative', size: '50 growers', subscription: '$600', savings: '$3,600', benefitDetail: 'Supplier coordination on autopilot' },
        { type: 'Farm Supply Distributor', size: '15 employees', subscription: '$400', savings: '$2,000', benefitDetail: 'Orders and inventory automated' },
      ],
      ctaPrimary: 'Talk to us',
      ctaSecondary: 'How to get started',
    },
    process: {
      title: 'How we work',
      subtitle: 'From the first conversation to a running system. It is that simple.',
      promiseTitle: 'First process automated in 2 weeks',
      promiseItems: ['Development at no cost', 'Free trial', 'Just the monthly fee, everything included'],
      steps: [
        {
          title: 'Intro call',
          description: 'We set up a quick call to get to know each other and understand your company and how your day-to-day operation works.',
          duration: '30 min',
        },
        {
          title: 'Ideas report',
          description: 'We prepare a report with automation ideas for your business, including practical examples and value estimates. The goal is to inspire you and show what is possible.',
          duration: '2–3 business days',
        },
        {
          title: 'Scoping and build',
          description: 'Together with you, we define exactly what will be automated. We build, test and adjust until it works the way it should.',
          duration: '1–2 weeks',
        },
        {
          title: 'Delivery and follow-up',
          description: 'We deliver the automation up and running. You test it in your daily work and we make every adjustment needed, all included in the monthly fee.',
          duration: 'ongoing',
        },
      ],
    },
    pricing: {
      titleLead: 'What it costs to automate',
      titleAccent: 'what you get back',
      subtitle: 'Every solution is built for your operation. No contract. No setup fee.',
      from: 'Starting at',
      perMonth: '/mo',
      tiers: [
        { price: '$100', label: 'Simple automations' },
        { price: '$400', label: 'Mid-complexity solutions' },
        { price: '$1,200', label: 'Complex, highly customized solutions' },
      ],
      cta: 'Talk to us',
    },
    cta: {
      titleLine1: 'Ready to automate?',
      titleLine2: "Let's talk",
      text: "We'll build a free test automation for your business. No commitment, no cost.",
      button: 'I want a free trial',
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
      heroCta: 'Book a call',
      challengesTitle: 'Everyday challenges',
      challenges: [
        { title: 'Scattered documentation', description: 'Paper charts, files on the computer, email attachments. Information spread everywhere and hard to find when you need it.' },
        { title: 'Complex billing', description: 'Every insurer has different rules, claims come back denied, and time is lost fixing and resubmitting.' },
        { title: 'Constant compliance', description: 'Retention periods, required documents, audit preparation. There is always something to organize.' },
      ],
      workflowsTitle: 'Automations for your clinic',
      workflowsText: 'Processes that run on their own, from intake to payment',
      workflowSubtitles: ['From intake to patient record, paper-free', 'Claims formatted and submitted effortlessly', 'From invoice to payment, automated'],
      resultsTitle: 'Typical results',
      resultsParagraphs: [
        'Your team stops chasing paper and starts focusing on what matters: patient care.',
        'Audits stop being emergencies. Billing stops being a bottleneck. Documents stop going missing.',
      ],
      metrics: [
        { value: '70%', label: 'less time on administrative tasks' },
        { value: '50%', label: 'fewer insurance claim denials' },
        { value: '2x', label: 'faster payment cycle' },
        { value: '100%', label: 'of documents organized and traceable' },
      ],
      integrationsTitle: 'Tools you already use',
      integrationsText: 'We integrate without replacing your systems',
      ctaTitle: 'Ready to simplify your admin?',
      ctaText: 'No-commitment conversation. We learn about your clinic and show you what can be automated.',
      ctaButton: 'Get in touch',
    } as IndustryCopy,
    services: {
      meta: {
        title: 'Professional Services - mil&dez',
        description: 'We automate contracts, billing and reports for firms and service providers.',
      },
      badge: 'Professional Services',
      heroTitle: ['Less admin.', 'More billable hours.'],
      heroText: 'We automate contracts, billing and client organization. You focus on delivering value.',
      heroCta: 'Book a call',
      challengesTitle: 'The cost of invisible work',
      challenges: [
        { title: 'Hours lost to admin', description: 'Time spent writing proposals, organizing documents, sending invoices and chasing clients. Hours that could be billed.' },
        { title: 'Contracts and deadlines', description: 'Forgotten renewals, expired contracts, missed deadlines. Information scattered across emails, folders and spreadsheets.' },
        { title: 'Manual collections', description: 'Late invoices, clients who forget to pay, time lost reconciling what was delivered with what was billed.' },
      ],
      workflowsTitle: 'What we automate',
      workflowsText: 'Processes that run on their own and free up your time',
      workflowSubtitles: ['Welcome and setup created automatically', 'Alerts and renewals on autopilot', 'From delivery to payment, on time'],
      resultsTitle: 'Typical results',
      resultsParagraphs: [
        'Your time goes back to what generates revenue: serving clients, closing projects, delivering results.',
        'Admin happens in the background. Contracts renew, invoices go out on time, and clients get their reports without you having to remember.',
      ],
      metrics: [
        { value: '8h', label: 'per week recovered for billable work' },
        { value: '45%', label: 'fewer late payments' },
        { value: '95%', label: 'contract renewal rate' },
        { value: 'Zero', label: 'contracts lapsed by oversight' },
      ],
      integrationsTitle: 'Tools you already use',
      integrationsText: 'We integrate without replacing your systems',
      ctaTitle: 'Ready to get your productive hours back?',
      ctaText: 'No-commitment conversation. We learn about your operation and show you what can be automated.',
      ctaButton: 'Get in touch',
    } as IndustryCopy,
    agribusiness: {
      meta: {
        title: 'Agribusiness - mil&dez',
        description: 'We automate suppliers, compliance and field-to-office communication for agribusiness.',
      },
      badge: 'Agribusiness',
      heroTitle: ['Farm management', 'on autopilot.'],
      heroText: 'We automate suppliers, documentation and field-to-office communication. You focus on production.',
      heroCta: 'Book a call',
      challengesTitle: 'The daily grind that slows operations',
      challenges: [
        { title: 'Suppliers on personal WhatsApp', description: 'Quotes, deadlines and confirmations scattered across personal chats. Nobody knows what was agreed or with whom.' },
        { title: 'Manual environmental paperwork', description: 'Licenses, certificates and reports in lost folders. Expiration dates go unnoticed and inspections catch you off guard.' },
        { title: 'Field and office disconnected', description: 'Field updates arrive as voice notes, photos and loose text. The office spends hours organizing what should already be ready.' },
      ],
      workflowsTitle: 'What we automate',
      workflowsText: 'Processes that keep running while you focus on production',
      workflowSubtitles: ['Quote, order and delivery without the effort', 'Licenses and certificates always up to date', 'Field data organized in the office'],
      resultsTitle: 'Typical results',
      resultsParagraphs: [
        'Suppliers coordinated without relying on personal WhatsApp. Documentation organized and monitored. Field and office connected.',
        'You stop putting out fires and focus on what matters: producing better, negotiating better, growing.',
      ],
      metrics: [
        { value: '80%', label: 'less time coordinating suppliers' },
        { value: '100%', label: 'of documents organized and monitored' },
        { value: '3x', label: 'faster report generation' },
        { value: 'Zero', label: 'messages lost between field and office' },
      ],
      integrationsTitle: 'Tools you already use',
      integrationsText: 'We integrate without replacing your systems',
      ctaTitle: 'Ready to automate your operation?',
      ctaText: 'No-commitment conversation. We learn about your business and show you what can be automated.',
      ctaButton: 'Get in touch',
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
