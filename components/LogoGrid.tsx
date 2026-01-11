'use client'

/**
 * LogoGrid - Static grid of integration logos
 * Shows 48+ colored logos in a responsive grid layout
 * Desktop: 8 columns, Tablet: 6 columns, Mobile: 4 columns
 */

const logos = [
  // Communication
  { name: 'WhatsApp', src: '/logos/whatsapp.svg' },
  { name: 'Gmail', src: '/logos/gmail.svg' },
  { name: 'Outlook', src: '/logos/outlook.svg' },
  { name: 'Slack', src: '/logos/slack.svg' },
  { name: 'Teams', src: '/logos/teams.svg' },
  { name: 'Discord', src: '/logos/discord.svg' },
  { name: 'Telegram', src: '/logos/telegram.svg' },
  { name: 'Zoom', src: '/logos/zoom.svg' },

  // Cloud Storage & Docs
  { name: 'Google Drive', src: '/logos/google-drive.svg' },
  { name: 'OneDrive', src: '/logos/onedrive.svg' },
  { name: 'Dropbox', src: '/logos/dropbox.svg' },
  { name: 'Google Sheets', src: '/logos/google-sheets.svg' },
  { name: 'Excel', src: '/logos/excel.svg' },
  { name: 'Word', src: '/logos/word.svg' },
  { name: 'PowerPoint', src: '/logos/powerpoint.svg' },
  { name: 'Notion', src: '/logos/notion.svg' },

  // Project Management
  { name: 'Trello', src: '/logos/trello.svg' },
  { name: 'Asana', src: '/logos/asana.svg' },
  { name: 'Monday', src: '/logos/monday.svg' },
  { name: 'Jira', src: '/logos/jira.svg' },
  { name: 'Airtable', src: '/logos/airtable.svg' },
  { name: 'Google Calendar', src: '/logos/google-calendar.svg' },
  { name: 'Figma', src: '/logos/figma.svg' },
  { name: 'DocuSign', src: '/logos/docusign.svg' },

  // Payments (BR focus)
  { name: 'PIX', src: '/logos/pix.svg' },
  { name: 'Nubank', src: '/logos/nubank.svg' },
  { name: 'MercadoPago', src: '/logos/mercadopago.svg' },
  { name: 'PagSeguro', src: '/logos/pagseguro.svg' },
  { name: 'Stripe', src: '/logos/stripe.svg' },
  { name: 'PayPal', src: '/logos/paypal.svg' },
  { name: 'ContaAzul', src: '/logos/contaazul.svg' },
  { name: 'Bling', src: '/logos/bling.svg' },

  // E-commerce & Logistics
  { name: 'Mercado Livre', src: '/logos/mercado-livre.svg' },
  { name: 'Amazon', src: '/logos/amazon.svg' },
  { name: 'Shopify', src: '/logos/shopify.svg' },
  { name: 'Nuvemshop', src: '/logos/nuvemshop.svg' },
  { name: 'WooCommerce', src: '/logos/woocommerce.svg' },
  { name: 'iFood', src: '/logos/ifood.svg' },
  { name: 'Correios', src: '/logos/correios.svg' },
  { name: 'Instagram', src: '/logos/instagram.svg' },

  // CRM & Sales
  { name: 'Pipedrive', src: '/logos/pipedrive.svg' },
  { name: 'HubSpot', src: '/logos/hubspot.svg' },
  { name: 'Salesforce', src: '/logos/salesforce.svg' },
  { name: 'Zendesk', src: '/logos/zendesk.svg' },
  { name: 'Intercom', src: '/logos/intercom.svg' },
  { name: 'Mailchimp', src: '/logos/mailchimp.svg' },
  { name: 'Typeform', src: '/logos/typeform.svg' },
  { name: 'Doctoralia', src: '/logos/doctoralia.svg' },

  // Automation & AI
  { name: 'Zapier', src: '/logos/zapier.svg' },
  { name: 'Make', src: '/logos/make.svg' },
  { name: 'n8n', src: '/logos/n8n.svg' },
  { name: 'OpenAI', src: '/logos/openai.svg' },
  { name: 'Claude', src: '/logos/claude.svg' },
  { name: 'iClinic', src: '/logos/iclinic.svg' },
]

export default function LogoGrid() {
  return (
    <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-9 lg:grid-cols-12 gap-x-6 gap-y-4 items-center justify-items-center">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex items-center justify-center"
          title={logo.name}
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}
