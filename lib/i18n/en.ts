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
    title: 'mil&dez · Process automation',
    description:
      'Appointment confirmations, billing, deadlines and eSocial checks on autopilot, in the systems you already use.',
    keywords: ['process automation', 'automation for clinics', 'appointment confirmations', 'eSocial', 'Belo Horizonte', 'Brazil'],
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
  },

  footer: {
    tagline: 'your work on autopilot',
    home: 'Home',
    health: 'Healthcare',
    services: 'Services',
    agribusiness: 'Agribusiness',
    esocial: 'eSocial validator',
    whatsapp: 'WhatsApp',
    address: 'Belo Horizonte, MG, Brazil · CNPJ: 44.584.460/0001-80',
    rights: '© 2026 mil&dez. All rights reserved.',
    privacy: 'Privacy',
    terms: 'Terms',
  },

  contactModal: {
    close: 'Close',
    successTitle: 'We received your request.',
    successText: "We'll reply within 1 business day to arrange the 30-minute call.",
    title: 'Which task do you want to automate?',
    intro: 'Tell us how this task works today. We reply within 1 business day to schedule a 30-minute call and understand what can be automated.',
    name: 'Name *',
    namePlaceholder: 'Your name',
    email: 'Email *',
    emailPlaceholder: 'Your contact email',
    phone: 'Phone or WhatsApp (optional)',
    phonePlaceholder: 'Number with country code',
    message: "Which task takes up your team's time? *",
    messagePlaceholder: 'E.g. we receive orders on WhatsApp and copy the details into a spreadsheet, one by one.',
    messageHelp: "You don't need to know how to automate it. Just explain what your team does today.",
    error: "We couldn't send your request. Try again or reach us on",
    errorLink: 'WhatsApp',
    privacy: "We'll use your details to reply to your request. See our",
    privacyLink: 'Privacy Policy',
    sending: 'Sending…',
    submit: 'Send assessment request',
  },

  routeError: {
    title: 'Something went wrong',
    text: "This page didn't load. Try again or go back to the home page. If the error persists, reach us on WhatsApp: +55 31 98352-9257.",
    details: 'Technical details',
    retry: 'Try again',
    home: 'Back to home',
  },

  home: {
    meta: {
      title: 'mil&dez · Process automation for small and mid-sized businesses',
      description:
        'Appointment confirmations, billing, deadlines and eSocial checks on autopilot, in the systems you already use.',
    },
    hero: {
      line1: 'Your team stops',
      line2: 'repeating tasks.',
      accent: 'The system does it for them.',
      subtitle:
        'Appointments confirmed, invoices sent and deadlines tracked without anyone having to remember. The automation runs in the systems you already use.',
      cta: 'Request an assessment',
      ctaNote: 'A 30-minute call, no commitment. We reply within 1 business day to set up a time.',
      secondary: 'See automation examples',
    },
    diagram: {
      label: 'Automation',
      items: ['Recurring tasks run on their own', 'Information gathered in one place', 'Deadlines checked without anyone remembering'],
    },
    pipeline: {
      summary:
        'Three automation examples. Every completed occupational health exam is checked against the eSocial rules before submission. Invoices that arrive by email are read and posted to the ERP. A new lead is researched and gets a proposal ready to send.',
      stages: ['Input', 'mil&dez automation', 'Output'],
      validatorLink: 'See the eSocial validator',
      scenarios: [
        {
          input: { title: 'Health exam completed', text: "Occupational exam entered in the clinic's system" },
          task: { title: 'eSocial check', text: 'Checks job code, employment type and health program for each exam' },
          output: { title: 'Checked before submission', text: 'Errors flagged with the suggested fix' },
        },
        {
          input: { title: 'Invoices by email', text: 'Attachments sent by suppliers' },
          task: { title: 'Data extraction', text: 'Pulls amounts, due dates and tax IDs from each invoice' },
          output: { title: 'ERP updated', text: 'Accounts payable posted, no typing' },
        },
        {
          input: { title: 'New lead', text: 'Website form and CRM' },
          task: { title: 'Research', text: 'Looks up company size, industry and website' },
          output: { title: 'Proposal ready', text: 'Tailored document ready to send' },
        },
      ],
    },
    pain: {
      titleLead: "How much of your team's day",
      titleAccent: 'goes into copying, pasting and remembering?',
      subtitle:
        'Three problems show up in almost every small and mid-sized business. They cost hours every week and rarely appear in any report.',
      points: [
        { title: 'The same task, every day', description: 'Confirming appointments, sending reminders, updating spreadsheets. Someone on the team does it by hand, one message at a time.' },
        { title: 'The deadline nobody remembered', description: 'A contract that expired, a bill that never went out, a license that lapsed. Every slip turns into rework, a fine or a lost customer.' },
        { title: 'Information in five places', description: 'The order came in on WhatsApp, the price is in a spreadsheet and the invoice is in email. To answer a customer, someone has to pull it all together.' },
      ],
      cta: 'See it on autopilot',
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
        {
          industry: 'Agribusiness',
          summary: 'Supply quotes',
          solves: 'information in five places',
          before: 'someone asks each supplier for a price and compares everything by hand.',
          steps: [
            { title: 'Order received', description: 'Grower sends it over WhatsApp' },
            { title: 'Quotes compared', description: 'Spreadsheet checks suppliers' },
            { title: 'Best price selected', description: 'Team notified on WhatsApp' },
            { title: 'Order confirmed', description: 'Email sent to the supplier' },
            { title: 'Invoice recorded', description: 'Document saved automatically' },
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
          type: 'Accounting firm',
          size: '6 employees',
          automation: 'Automation: contract renewals',
          subscription: '$150',
          savings: '$380',
          assumption: 'Assumption: 15 hours a month freed up ($12/h), plus $200 a month in fees no longer lost to forgotten renewals.',
        },
        {
          type: 'Coffee cooperative',
          size: '50 growers',
          automation: 'Automation: supply quotes',
          subscription: '$500',
          savings: '$1,120',
          assumption: 'Assumption: 1% savings on $80k of monthly purchases, plus 40 hours of quoting freed up ($8/h).',
        },
      ],
      disclaimer: 'These figures are illustrative estimates. In the assessment, we redo the math with your own numbers.',
      ctaPrimary: 'Request an assessment',
      ctaSecondary: 'See how it works',
    },
    process: {
      titleLead: 'From the first conversation',
      titleAccent: 'to a working automation',
      subtitle:
        'You tell us how the work gets done today. We build it, test it and take care of everything afterwards. Your team never touches anything technical.',
      promiseTitle: 'Your first automation running in 2 to 4 weeks',
      promiseItems: ['Built and tested with your team', 'Nothing technical to learn', 'Adjustments to the steps set out in the project'],
      steps: [
        {
          title: '30-minute call',
          description: ['You show us how the operation works today and where time gets lost. We ask, listen and take notes.'],
          duration: '30 min',
        },
        {
          title: 'Assessment and proposal',
          description: ['You get, in writing, the automations that make the most sense for your business, the time each one saves and its monthly fee.'],
          duration: '3–5 business days',
        },
        {
          title: 'Build and test',
          description: ['You choose where to start. We build the automation connected to your systems and adjust it with your team until it works the right way.'],
          duration: '2–4 weeks',
        },
        {
          title: '30 days to test it in your operation',
          description: [
            'We sign the contract before the trial, with the scope and terms defined. The 30 free days start when the automation goes live, not during the build.',
            'During this period, your team uses the automation day to day and we make the necessary adjustments to the planned steps. Before billing starts, we talk to you to confirm your approval.',
          ],
          duration: '30 days',
        },
      ],
    },
    pricing: {
      titleLead: 'How much does it cost to put',
      titleAccent: 'your task on autopilot?',
      subtitle:
        'The monthly fee includes the build, hosting, maintenance and adjustments to the steps set out in the project. There is no separate development fee. The first 30 days of use are free, counted from when the automation goes live.',
      from: 'Starting at',
      perMonth: '/mo',
      tiers: [
        { price: '$150', label: 'One simple automation', example: 'For tasks like confirming appointments or flagging contracts that are about to expire.' },
        { price: '$500', label: 'One automation with several steps', example: 'For processes like checking suppliers, comparing quotes and alerting the team.' },
        { price: '$1,500', label: 'Several connected processes', example: 'For operations like tracking a purchase from order to recording the invoice.' },
      ],
      details: "You get a proposal with the automation's steps, the systems involved and the monthly fee. The contract also states the third-party service costs included and the applicable usage limits.",
      trial: "Try it for 30 days from go-live. Before billing starts, we contact you to confirm your approval. If you cancel during the trial, there is no charge. After the trial, cancellation requires 30 days' notice.",
      includedTitle: 'Included in every plan',
      included: ['Build', 'Hosting', 'Maintenance', 'Adjustments to the steps set out in the project', 'Support over WhatsApp'],
      cta: 'Request an assessment',
    },
    faq: {
      titleLead: 'Questions',
      titleAccent: 'before you start',
      subtitle: "If your question isn't here, bring it to the 30-minute call.",
      items: [
        {
          question: 'How does the free trial work?',
          answer: 'The contract is signed before the trial. You use the automation without paying for 30 days, counted from go-live. Before billing starts, we contact you to confirm your approval.',
        },
        {
          question: "What if I don't want to continue?",
          answer: "If you cancel during the 30-day trial, there is no charge. After that period, cancellation requires 30 days' notice.",
        },
        {
          question: 'Are WhatsApp, artificial intelligence and other services included?',
          answer: 'Generally, these costs are included in the monthly fee. The proposal and the contract state what is included and the limits on variable costs. If these costs exceed the contracted limit, we let you know and adjust the monthly fee according to the contract terms.',
        },
        {
          question: 'Which adjustments are included?',
          answer: 'Generally, changes to the steps that are already part of the automation are included. New steps or functions outside the original scope may require a price review. We assess each request to decide whether it is an adjustment or an expansion of the project.',
        },
        {
          question: 'Is there a separate development fee?',
          answer: 'No. Building the automation is part of the service, with no separate development fee.',
        },
        {
          question: 'How long until it is ready?',
          answer: 'The proposal arrives 3 to 5 business days after the 30-minute call. Building and testing take 2 to 4 weeks, depending on the number of steps and systems.',
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
          answer: "We follow Brazil's data protection law (LGPD). The automation only accesses the data it needs, with permissions you grant and can revoke at any time. Your systems stay the source of record: the automation reads from and writes to them, and keeps only the execution log needed for monitoring, on the platform where it runs. Before the first automation goes live, we put that in writing in a data processing agreement.",
        },
        {
          question: 'What happens to my data if I cancel?',
          answer: 'The automation is switched off and the data stays in your systems. We remove our access and the execution log from the automation platform, and hand over documentation of what was built.',
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
      text: "Tell us which process takes up the most of your team's time. We reply within 1 business day to schedule the 30-minute call.",
      founder: 'Your message goes to Simon Larsen, founder of mil&dez, in Belo Horizonte.',
      founderAlt: 'Simon Larsen, founder of mil&dez',
      button: 'Request an assessment',
      note: 'No commitment.',
    },
  },

  industries: {
    meta: {
      title: 'Industries · mil&dez',
      description: 'Automation for clinics, professional firms and agribusiness, in the systems each industry already uses.',
    },
    titleLead: 'Automation for',
    titleAccent: 'your industry',
    subtitle: 'Every industry has its own recurring tasks. Pick yours to see automation examples.',
    cardCta: 'See automations',
    cards: {
      health: {
        title: 'Healthcare and clinics',
        description: 'Appointment confirmations over WhatsApp, follow-up reminders and eSocial checks before submission.',
      },
      services: {
        title: 'Professional services',
        description: 'New client onboarding, contract renewal reminders and billing after every delivery.',
      },
      agribusiness: {
        title: 'Agribusiness',
        description: 'Supply quotes, license tracking and field updates organized in the office.',
      },
    },
  },

  industry: {
    health: {
      meta: {
        title: 'Healthcare and clinics · mil&dez',
        description: 'Appointment confirmations over WhatsApp and eSocial health and safety checks before submission, for clinics and practices.',
      },
      badge: 'Healthcare and clinics',
      heroTitle: ['Fewer no-shows.', 'eSocial checked before submission.'],
      heroText: 'Appointment confirmations go out over WhatsApp, without the front desk calling every patient. In occupational health, every exam is checked against the eSocial rules.',
      heroCta: 'Request an assessment',
      challengesTitle: "What weighs on the clinic's routine",
      challenges: [
        { title: "Patients who don't show up", description: "The front desk spends the morning calling to confirm appointments. Slots still go empty, with no time left to call another patient." },
        { title: 'eSocial events that bounce back', description: 'A wrong job code or an exam outside the health program sends the event back. The team finds out later, reopens the exam record and races the deadline.' },
        { title: 'Follow-ups nobody remembered', description: 'The patient was due back in six months, but the reminder depends on someone checking the calendar. When nobody checks, the patient never returns.' },
      ],
      workflowsTitle: 'Automations for your clinic',
      workflowsText: 'Three examples, adjusted to the way your clinic works',
      workflowSubtitles: ['WhatsApp reminder and an updated calendar', 'Errors flagged before submission, with the suggested fix', 'A message to the patient when it is time to come back'],
      resultsTitle: 'What changes day to day',
      resultsParagraphs: [
        'The front desk stops spending the morning on the phone. Patients confirm over WhatsApp and open slots show up in time to call someone else.',
        'In eSocial, errors appear before submission, when fixing them still takes minutes. The team stops reopening exam records over a wrong code.',
      ],
      integrationsTitle: 'Works with the systems you already use',
      integrationsText: 'The automation connects to what the clinic already has, without replacing any system.',
      ctaTitle: 'Which task weighs most on your clinic?',
      ctaText: 'Tell us how your clinic works today. We reply within 1 business day to schedule the 30-minute call.',
      ctaButton: 'Request an assessment',
      ctaSecondary: { label: 'See the eSocial validator', href: '/validador-esocial' },
    } as IndustryCopy,
    services: {
      meta: {
        title: 'Professional services · mil&dez',
        description: 'Renewals, deadlines and billing on time for firms and service providers, in the systems you already use.',
      },
      badge: 'Professional services',
      heroTitle: ['No deadline', 'depends on memory.'],
      heroText: 'Your firm gets a reminder for every renewal with time to decide, and the invoice goes out when the delivery happens.',
      heroCta: 'Request an assessment',
      challengesTitle: 'The cost of invisible work',
      challenges: [
        { title: "Hours that don't get billed", description: 'Proposals, client folders, invoices and collections take hours every week, and nobody pays for that time.' },
        { title: 'Contracts and deadlines', description: 'The renewal date sits in some email, folder or spreadsheet, but nobody was reminded. The contract expires and the fee stops coming in.' },
        { title: 'Manual collections', description: 'The invoice goes out late, the client forgets to pay and someone spends hours matching what was delivered with what was billed.' },
      ],
      workflowsTitle: 'Automations for your firm',
      workflowsText: 'Three examples, adjusted to the way your firm works',
      workflowSubtitles: ['Folder, documents and welcome ready on day one', 'Early reminder, and renewal only with your approval', 'A recorded delivery becomes an invoice and a payment reminder'],
      resultsTitle: 'What changes day to day',
      resultsParagraphs: [
        'The hours that went into proposals, folders and collections go back to the work clients pay for.',
        'Renewals arrive with a reminder and go through your approval before they are sent. The invoice goes out when the delivery happens, and the payment reminder follows without anyone chasing.',
      ],
      integrationsTitle: 'Works with the systems you already use',
      integrationsText: 'The automation connects to what the firm already has, without replacing any system.',
      ctaTitle: 'Which deadline worries your firm most?',
      ctaText: 'Tell us how your firm works today. We reply within 1 business day to schedule the 30-minute call.',
      ctaButton: 'Request an assessment',
    } as IndustryCopy,
    agribusiness: {
      meta: {
        title: 'Agribusiness · mil&dez',
        description: 'Supply quotes, licenses and field updates organized in one place, for growers and cooperatives.',
      },
      badge: 'Agribusiness',
      heroTitle: ['Suppliers and field', 'in one place.'],
      heroText: 'Supply quotes arrive side by side in a spreadsheet, and what the field sends over WhatsApp reaches the office already organized.',
      heroCta: 'Request an assessment',
      challengesTitle: 'The daily grind that slows the operation',
      challenges: [
        { title: 'Suppliers on personal WhatsApp', description: 'Quotes, deadlines and confirmations scattered across personal chats. Nobody knows what was agreed or with whom.' },
        { title: 'Licenses in loose folders', description: 'Licenses, certificates and reports sit in different folders. Expiration dates go unnoticed and inspections catch you off guard.' },
        { title: 'Field and office disconnected', description: 'Field updates arrive as photos and loose text. The office spends hours organizing what should already be ready.' },
      ],
      workflowsTitle: 'Automations for your operation',
      workflowsText: 'Three examples, adjusted to the way your operation works',
      workflowSubtitles: ['Order, quote and confirmation in the same place', 'A reminder before every expiration', 'Field messages and photos organized in the spreadsheet'],
      resultsTitle: 'What changes day to day',
      resultsParagraphs: [
        "Quotes stop depending on someone's personal WhatsApp. What was ordered, from whom and for how much is on record.",
        'Licenses and certificates send a reminder before they expire, and the office gets field updates already organized in the spreadsheet.',
      ],
      integrationsTitle: 'Works with the systems you already use',
      integrationsText: 'The automation connects to what the operation already has, without replacing any system.',
      ctaTitle: 'Where does your operation lose the most time?',
      ctaText: 'Tell us how your operation works today. We reply within 1 business day to schedule the 30-minute call.',
      ctaButton: 'Request an assessment',
    } as IndustryCopy,
  },

  terms: {
    meta: { title: 'Terms of use · mil&dez', description: 'Terms and conditions for using mil&dez services.' },
    heading: 'Terms of use',
    updated: 'Last updated: January 2026',
    sections: [
      { title: '1. Acceptance of terms', paragraphs: ['By accessing and using the website and services of mil&dez Automação Ltda. ("mil&dez"), you agree to these Terms of Use. If you do not agree with any of these terms, please do not use our services.'] },
      { title: '2. Description of services', paragraphs: ['mil&dez provides business process automation services, including the development, implementation and maintenance of automated workflows for companies.'] },
      {
        title: '3. Use of the website',
        intro: 'You agree to use our website and services only for lawful purposes and in accordance with these terms. You must not:',
        items: [
          { text: 'Violate any applicable law or regulation' },
          { text: 'Infringe intellectual property rights' },
          { text: 'Transmit harmful or malicious content' },
          { text: 'Attempt to access systems without authorization' },
          { text: 'Interfere with the operation of the website' },
        ],
      },
      { title: '4. Intellectual property', paragraphs: ['All website content, including text, graphics, logos, icons, images and software, is the property of mil&dez or its licensors and is protected by copyright and intellectual property laws.'] },
      { title: '5. Engaging our services', paragraphs: ['Engaging our automation services is subject to specific terms agreed in a separate contract. Prices shown on the website are estimates and may vary depending on the complexity of the project.'] },
      { title: '6. Limitation of liability', paragraphs: ['mil&dez will not be liable for indirect, incidental, special or consequential damages arising from the use of, or inability to use, our services, except where provided by law.'] },
      { title: '7. Changes', paragraphs: ['We reserve the right to modify these terms at any time. Changes take effect once published on the website. Continued use of the services after changes constitutes acceptance of the new terms.'] },
      { title: '8. Governing law', paragraphs: ['These terms are governed by the laws of the Federative Republic of Brazil. Any dispute will be submitted to the courts of the district of Belo Horizonte, MG.'] },
      {
        title: '9. Contact',
        paragraphs: ['If you have questions about these terms, please contact us:'],
        contact: { emailLabel: 'Email:', email: 'contato@miledez.com.br', addressLabel: 'Address:', address: 'Belo Horizonte, MG - Brazil' },
      },
    ],
  } as LegalPage,

  privacy: {
    meta: { title: 'Privacy policy · mil&dez', description: 'Privacy policy and personal data handling at mil&dez, in compliance with Brazil\'s LGPD.' },
    heading: 'Privacy policy',
    updated: 'Last updated: January 2026',
    sections: [
      { title: '1. Introduction', paragraphs: ['mil&dez Automação Ltda. ("mil&dez", "we", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share and protect your personal information in compliance with Brazil\'s General Data Protection Law (LGPD - Law No. 13,709/2018).'] },
      {
        title: '2. Data we collect',
        intro: 'We collect the following types of information:',
        items: [
          { lead: 'Identification data:', text: 'name, email, phone, company' },
          { lead: 'Browsing data:', text: 'IP address, browser type, pages visited' },
          { lead: 'Communication data:', text: 'messages sent through contact forms' },
        ],
      },
      {
        title: '3. How we use your data',
        intro: 'We use your information to:',
        items: [
          { text: 'Respond to requests and provide support' },
          { text: 'Send information about our services (with your consent)' },
          { text: 'Improve our website and services' },
          { text: 'Comply with legal obligations' },
        ],
      },
      { title: '4. Legal basis for processing', paragraphs: ['Personal data is processed on the basis of: the data subject\'s consent, performance of a contract, compliance with a legal obligation, or the legitimate interest of mil&dez, as applicable.'] },
      { title: '5. Data sharing', paragraphs: ['We do not sell your personal information. We may share data with service providers that help us run our operations, always under contracts that ensure adequate protection of the data.'] },
      {
        title: '6. Your rights (LGPD)',
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
      { title: '7. Data retention', paragraphs: ['We keep your personal data for as long as necessary to fulfill the purposes for which it was collected, or as required by law.'] },
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
