'use client'

/**
 * LogoGrid - Floating integration logos with soft shadows
 * 8x4 grid (32 logos), 48x48px boxes with 6px padding
 * Design: Logo Cloud v2.0
 */

const logos = [
  // Row 1 - Communication & Productivity
  { name: 'WhatsApp', src: '/logos/whatsapp.svg' },
  { name: 'Gmail', src: '/logos/gmail.svg' },
  { name: 'Outlook', src: '/logos/outlook.svg' },
  { name: 'Google Sheets', src: '/logos/google-sheets.svg' },
  { name: 'Excel', src: '/logos/excel.svg' },
  { name: 'Word', src: '/logos/word.svg' },
  { name: 'Google Calendar', src: '/logos/google-calendar.svg' },
  { name: 'OneDrive', src: '/logos/onedrive.svg' },

  // Row 2 - Brazilian Payment & Finance
  { name: 'PIX', src: '/logos/pix.svg' },
  { name: 'MercadoPago', src: '/logos/mercadopago.svg' },
  { name: 'PagSeguro', src: '/logos/pagseguro.svg' },
  { name: 'ContaAzul', src: '/logos/contaazul.svg' },
  { name: 'Alelo', src: '/logos/alelo.svg' },
  { name: 'iFood', src: '/logos/ifood.svg' },
  { name: 'Mercado Livre', src: '/logos/mercado-livre.svg' },
  { name: 'Correios', src: '/logos/correios.svg' },

  // Row 3 - CRM & Sales
  { name: 'Salesforce', src: '/logos/salesforce.svg' },
  { name: 'Shopify', src: '/logos/shopify.svg' },
  { name: 'Amazon', src: '/logos/amazon.svg' },
  { name: 'LinkedIn', src: '/logos/linkedin.svg' },
  { name: 'DocuSign', src: '/logos/docusign.svg' },
  { name: 'Intercom', src: '/logos/intercom.svg' },
  { name: 'Doctoralia', src: '/logos/doctoralia.svg' },
  { name: 'iClinic', src: '/logos/iclinic.svg' },

  // Row 4 - Additional Integrations
  { name: 'Slack', src: '/logos/slack.svg' },
  { name: 'Trello', src: '/logos/trello.svg' },
  { name: 'Notion', src: '/logos/notion.svg' },
  { name: 'Stripe', src: '/logos/stripe.svg' },
  { name: 'HubSpot', src: '/logos/hubspot.svg' },
  { name: 'Pipedrive', src: '/logos/pipedrive.svg' },
  { name: 'Zendesk', src: '/logos/zendesk.svg' },
  { name: 'Zapier', src: '/logos/zapier.svg' },
]

export default function LogoGrid() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 justify-items-center">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="w-12 h-12 p-1.5 flex items-center justify-center bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow duration-200"
          title={logo.name}
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}
