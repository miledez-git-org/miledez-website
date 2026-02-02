'use client'

/**
 * LogoGrid - Icon Wall with dotted grid background
 * Clean, boxless logo display with full color and hover effects
 * Design: Icon Wall v1.0
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
    <div>
      {/* Section Header */}
      <div className="mb-14 md:mb-16 text-center">
        <h2 className="font-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          Conectamos suas ferramentas,<br />
          <span className="text-brand-primary">sem complicação</span>
        </h2>
        <p className="mt-4 text-lg text-brand-muted max-w-xl mx-auto">
          Integração nativa com os sistemas que sua empresa já utiliza
        </p>
      </div>

      {/* Logo Grid with Dotted Background */}
      <div
        className="relative py-12 px-6 -mx-6 rounded-2xl"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(139, 32, 32, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-8 md:gap-10 justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group flex items-center justify-center cursor-default"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(139,32,32,0.35)]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
