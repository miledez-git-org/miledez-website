import type { Dict } from './index'
import type { LegalPage } from './pt'

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
      'Booking confirmations, billing, deadlines and invoice entry on autopilot, in the systems you already use.',
    keywords: ['process automation', 'task automation', 'automation for small and mid-sized businesses', 'booking confirmations', 'Belo Horizonte', 'Brazil'],
    skipLink: 'Skip to content',
  },

  header: {
    home: 'Home',
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
    whatsapp: 'WhatsApp',
    address: 'Belo Horizonte, MG, Brazil · CNPJ: 44.584.460/0001-80',
    rights: '© 2026 mil&dez. All rights reserved.',
    privacy: 'Privacy',
    terms: 'Terms',
  },

  contactModal: {
    close: 'Close',
    successTitle: 'We received your request.',
    successText: "We'll reach you on WhatsApp within 1 hour.",
    title: 'Which task do you want to automate?',
    name: 'Name',
    namePlaceholder: 'Your name',
    phone: 'WhatsApp',
    phonePlaceholder: 'Number with country code',
    business: 'Type of business',
    businessPlaceholder: 'E.g. clinic, accounting firm, shop',
    employees: 'Number of employees',
    employeesPlaceholder: 'Select',
    employeesOptions: ['1 to 5', '6 to 20', '21 to 50', '51 to 200', 'More than 200'],
    error: "We couldn't send your request. Try again or reach us on",
    errorLink: 'WhatsApp',
    privacy: 'See our',
    privacyLink: 'Privacy Policy',
    sending: 'Sending…',
    submit: "Send and we'll contact you within 1 hour",
  },

  routeError: {
    title: 'Something went wrong',
    text: "This page didn't load. Try again or go back to the home page. If the error persists, reach us on WhatsApp: +55 31 98283-5587.",
    details: 'Technical details',
    retry: 'Try again',
    home: 'Back to home',
  },

  home: {
    meta: {
      title: 'mil&dez · Process automation for small and mid-sized businesses',
      description:
        'Booking confirmations, billing, deadlines and invoice entry on autopilot, in the systems you already use.',
    },
    hero: {
      line1: 'Your team stops',
      line2: 'repeating tasks.',
      accent: 'The system does it for them.',
      subtitle:
        'Bookings confirmed, invoices sent and deadlines tracked without anyone having to remember. The automation runs in the systems you already use.',
      cta: 'Request an assessment',
      ctaNote: 'A 30-minute call, no commitment. We reply within 1 hour to set up a time.',
      secondary: 'See automation examples',
    },
    diagram: {
      label: 'Automation',
      items: ['Recurring tasks run on their own', 'Information gathered in one place', 'Deadlines checked without anyone remembering'],
    },
    pipeline: {
      summary:
        'Three automation examples. Every order spreadsheet is checked before it moves on. Invoices that arrive by email are read and posted to the ERP. A new lead is researched and gets a proposal ready to send.',
      stages: ['Input', 'mil&dez automation', 'Output'],
      scenarios: [
        {
          input: { title: 'Order spreadsheet', text: 'Orders entered by the team' },
          task: { title: 'Data check', text: 'Checks customer details, amounts and dates on every row' },
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
    explainer: {
      titleLead: 'Everyday tasks,',
      titleAccent: 'running on autopilot',
      subtitle:
        'Examples that work in any industry. In your company, the automation follows your process and uses the systems you already have.',
      railLabel: 'Automation examples',
      railHint: 'use the arrow keys to move',
      cardLabel: 'Example',
      ofLabel: 'of',
      prevLabel: 'Previous example',
      nextLabel: 'Next example',
      workflows: [
        {
          title: 'Appointment scheduling and reminders',
          steps: [
            { title: 'Appointment booked', text: 'In the team calendar' },
            { title: 'Reminder sent', text: 'WhatsApp the day before' },
            { title: 'Reply logged', text: 'Confirmation in the spreadsheet' },
          ],
        },
        {
          title: 'Contract management',
          steps: [
            { title: 'Expiry coming up', text: 'Deadline flagged in the CRM' },
            { title: 'Draft sent', text: 'Email with the revised version' },
            { title: 'Contract signed', text: 'Digital signature and filing' },
          ],
        },
        {
          title: 'Purchasing and quotes',
          steps: [
            { title: 'Order received', text: 'Message on WhatsApp' },
            { title: 'Prices compared', text: 'Suppliers side by side' },
            { title: 'Purchase confirmed', text: 'Email to the chosen supplier' },
          ],
        },
        {
          title: 'Accounts payable',
          steps: [
            { title: 'Invoice received', text: 'Email attachment' },
            { title: 'Document saved', text: "This month's folder in Drive" },
            { title: 'Bill entered', text: 'Finance system updated' },
          ],
        },
        {
          title: 'Sales follow-up',
          steps: [
            { title: 'New inquiry', text: 'Website form and CRM' },
            { title: 'Instant reply', text: 'Message on WhatsApp' },
            { title: 'Meeting booked', text: 'Free slot in the calendar' },
          ],
        },
        {
          title: 'Management reporting',
          steps: [
            { title: "This week's numbers", text: 'Data pulled into the spreadsheet' },
            { title: 'Report built', text: "In your company's template" },
            { title: 'Report delivered', text: 'Emailed to the team' },
          ],
        },
      ],
    },
    profiles: {
      title: 'Our clients cut costs and raised quality',
      gainLabel: 'Estimated net gain',
      subscription: 'Monthly fee',
      perMonth: '/mo',
      items: [
        { automation: 'Booking confirmations', type: 'Dental clinic with 3 employees', subscription: '$150', gain: '+$450' },
        { automation: 'Contract renewals', type: 'Accounting firm with 4 employees', subscription: '$150', gain: '+$230' },
        { automation: 'Supplier quotes', type: 'Retail distributor with 8 employees', subscription: '$500', gain: '+$620' },
      ],
      ctaPrimary: 'Request an assessment',
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
    included: {
      title: 'We take care of everything. You just see the results.',
      items: ['Development', 'Hosting', 'Maintenance', 'Changes', 'Support'],
    },
    pricing: {
      titleLead: 'How much does it cost to put',
      titleAccent: 'your task on autopilot?',
      subtitle: 'No development fee. The first 30 days of use are free.',
      from: 'Starting at',
      perMonth: '/mo',
      examplesLabel: 'Examples',
      tiers: [
        { price: '$150', label: 'One simple automation', examples: ['Booking confirmations', 'Contract expiry alerts'] },
        { price: '$500', label: 'One automation with several steps', examples: ['Supplier quotes', 'Invoices posted to the ERP'] },
        { price: '$1,500', label: 'Several connected processes', examples: ['From purchase to invoice', 'From lead to signed contract'] },
      ],
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
      text: "Tell us which process takes up the most of your team's time. We reply within 1 hour to schedule the 30-minute call.",
      founder: 'Your message goes to Simon Larsen, founder of mil&dez, in Belo Horizonte.',
      founderAlt: 'Simon Larsen, founder of mil&dez',
      button: 'Request an assessment',
      note: 'No commitment.',
    },
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
