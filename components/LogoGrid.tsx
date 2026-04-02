'use client'

/**
 * LogoGrid - Icon Wall with dotted grid background
 * Clean, boxless logo display with full color and hover effects
 * Design: Icon Wall v1.0
 */

const logos = [
  // Row 1 - Communication & Productivity
  { name: 'WhatsApp', src: '/software-company-logos/whatsapp.svg' },
  { name: 'Gmail', src: '/software-company-logos/gmail.svg' },
  { name: 'Outlook', src: '/software-company-logos/outlook.svg' },
  { name: 'Google Sheets', src: '/software-company-logos/google-sheets.svg' },
  { name: 'Excel', src: '/software-company-logos/excel.svg' },
  { name: 'Word', src: '/software-company-logos/word.svg' },
  { name: 'Google Calendar', src: '/software-company-logos/google-calendar.svg' },
  { name: 'OneDrive', src: '/software-company-logos/onedrive.svg' },

  // Row 2 - Brazilian Payment & Finance
  { name: 'PIX', src: '/software-company-logos/pix.svg' },
  { name: 'MercadoPago', src: '/software-company-logos/mercadopago.svg' },
  { name: 'PagSeguro', src: '/software-company-logos/pagseguro.svg' },
  { name: 'ContaAzul', src: '/software-company-logos/contaazul.svg' },
  { name: 'Alelo', src: '/software-company-logos/alelo.svg' },
  { name: 'iFood', src: '/software-company-logos/ifood.svg' },
  { name: 'Mercado Livre', src: '/software-company-logos/mercado-livre.svg' },
  { name: 'Correios', src: '/software-company-logos/correios.svg' },

  // Row 3 - CRM & Sales
  { name: 'Salesforce', src: '/software-company-logos/salesforce.svg' },
  { name: 'Shopify', src: '/software-company-logos/shopify.svg' },
  { name: 'Amazon', src: '/software-company-logos/amazon.svg' },
  { name: 'LinkedIn', src: '/software-company-logos/linkedin.svg' },
  { name: 'DocuSign', src: '/software-company-logos/docusign.svg' },
  { name: 'Intercom', src: '/software-company-logos/intercom.svg' },
  { name: 'Doctoralia', src: '/software-company-logos/doctoralia.svg' },
  { name: 'iClinic', src: '/software-company-logos/iclinic.svg' },

  // Row 4 - Additional Integrations
  { name: 'Slack', src: '/software-company-logos/slack.svg' },
  { name: 'Trello', src: '/software-company-logos/trello.svg' },
  { name: 'Notion', src: '/software-company-logos/notion.svg' },
  { name: 'Stripe', src: '/software-company-logos/stripe.svg' },
  { name: 'HubSpot', src: '/software-company-logos/hubspot.svg' },
  { name: 'Pipedrive', src: '/software-company-logos/pipedrive.svg' },
  { name: 'Zendesk', src: '/software-company-logos/zendesk.svg' },
  { name: 'Zapier', src: '/software-company-logos/zapier.svg' },
]

export default function LogoGrid() {
  return (
    <div>
      {/* Section Header */}
      <div className="mb-14 md:mb-16 text-center">
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          Conectamos suas ferramentas,<br />
          <span className="text-brand-black">sem complicação</span>
        </h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-xl mx-auto">
          Integração nativa com os sistemas que sua empresa já utiliza
        </p>
      </div>

      {/* Logo Grid with Dotted Background */}
      <div
        className="relative py-8 px-6 -mx-6 rounded-2xl"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-x-5 gap-y-6 md:gap-x-7 md:gap-y-8 justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group flex flex-col items-center gap-1.5 cursor-default"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-7 h-7 md:w-8 md:h-8 object-contain opacity-85 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(6,57,47,0.35)]"
                loading="lazy"
              />
              <span className="text-xs md:text-sm text-neutral-500 font-medium text-center leading-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-lg font-medium text-neutral-500 mt-10">...e muitas mais</p>
      </div>
    </div>
  )
}
