'use client'

/**
 * LogoGrid - Clean icon wall
 * Boxless logo display with full color and hover effects
 */

const logos = [
  // Communication & Productivity
  { name: 'WhatsApp', src: '/logos/whatsapp.svg' },
  { name: 'Gmail', src: '/logos/gmail.svg' },
  { name: 'Google Sheets', src: '/logos/google-sheets.svg' },
  { name: 'Google Calendar', src: '/logos/google-calendar.svg' },
  { name: 'Excel', src: '/logos/excel.svg' },
  { name: 'Slack', src: '/logos/slack.svg' },
  { name: 'Notion', src: '/logos/notion.svg' },
  { name: 'Google Drive', src: '/logos/google-drive.svg' },

  // Brazilian Payment & Finance
  { name: 'PIX', src: '/logos/pix.svg' },
  { name: 'MercadoPago', src: '/logos/mercadopago.svg' },
  { name: 'ContaAzul', src: '/logos/contaazul.svg' },
  { name: 'iFood', src: '/logos/ifood.svg' },

  // CRM, Sales & Healthcare
  { name: 'Salesforce', src: '/logos/salesforce.svg' },
  { name: 'Shopify', src: '/logos/shopify.svg' },
  { name: 'LinkedIn', src: '/logos/linkedin.svg' },
  { name: 'HubSpot', src: '/logos/hubspot.svg' },
  { name: 'Doctoralia', src: '/logos/doctoralia.svg' },
  { name: 'iClinic', src: '/logos/iclinic.svg' },
]

export default function LogoGrid() {
  return (
    <div>
      {/* Section Header */}
      <div className="mb-12 md:mb-14">
        <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
          Conectamos suas ferramentas, sem complicação
        </h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-lg">
          Integração nativa com os sistemas que sua empresa já utiliza
        </p>
      </div>

      {/* Logo Grid */}
      <div className="py-8">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-5 md:gap-7 justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group flex items-center justify-center cursor-default"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-7 h-7 md:w-8 md:h-8 object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(6,57,47,0.35)]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
