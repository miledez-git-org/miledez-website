'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

// Logo configuration - organized by category for easy management
const LOGOS = [
  // Brazilian essentials (prioritized for local market)
  { name: 'WhatsApp', file: 'whatsapp.svg', category: 'communication' },
  { name: 'PIX', file: 'pix.svg', category: 'payment' },
  { name: 'Nubank', file: 'nubank.svg', category: 'payment' },
  { name: 'Mercado Livre', file: 'mercado-livre.svg', category: 'ecommerce' },
  { name: 'MercadoPago', file: 'mercadopago.svg', category: 'payment' },
  { name: 'iFood', file: 'ifood.svg', category: 'delivery' },
  { name: 'Correios', file: 'correios.svg', category: 'logistics' },
  
  // Global productivity
  { name: 'Gmail', file: 'gmail.svg', category: 'communication' },
  { name: 'Google Calendar', file: 'google-calendar.svg', category: 'productivity' },
  { name: 'Google Sheets', file: 'google-sheets.svg', category: 'productivity' },
  { name: 'Google Drive', file: 'google-drive.svg', category: 'storage' },
  { name: 'Outlook', file: 'outlook.svg', category: 'communication' },
  { name: 'Excel', file: 'excel.svg', category: 'productivity' },
  { name: 'Word', file: 'word.svg', category: 'productivity' },
  { name: 'OneDrive', file: 'onedrive.svg', category: 'storage' },
  
  // Collaboration & Automation
  { name: 'Slack', file: 'slack.svg', category: 'communication' },
  { name: 'Notion', file: 'notion.svg', category: 'productivity' },
  { name: 'Trello', file: 'trello.svg', category: 'productivity' },
  { name: 'Zapier', file: 'zapier.svg', category: 'automation' },
  { name: 'OpenAI', file: 'openai.svg', category: 'ai' },
  { name: 'Zoom', file: 'zoom.svg', category: 'communication' },
  
  // E-commerce
  { name: 'Shopify', file: 'shopify.svg', category: 'ecommerce' },
  { name: 'WooCommerce', file: 'woocommerce.svg', category: 'ecommerce' },
  { name: 'Amazon', file: 'amazon.svg', category: 'ecommerce' },
  
  // CRM & Business
  { name: 'Pipedrive', file: 'pipedrive.svg', category: 'crm' },
  { name: 'Instagram', file: 'instagram.svg', category: 'social' },
]

interface LogoMarqueeProps {
  /** Speed in pixels per second */
  speed?: number
  /** Pause on hover */
  pauseOnHover?: boolean
  /** Show logos in grayscale (color on hover) */
  grayscale?: boolean
  /** Filter by category */
  categories?: string[]
  /** Custom className for the container */
  className?: string
  /** Logo height in pixels */
  logoHeight?: number
  /** Gap between logos in pixels */
  gap?: number
  /** Direction of scroll */
  direction?: 'left' | 'right'
}

export default function LogoMarquee({
  speed = 40,
  pauseOnHover = true,
  grayscale = true,
  categories,
  className = '',
  logoHeight = 28,
  gap = 56,
  direction = 'left',
}: LogoMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Filter logos by category if specified
  const filteredLogos = categories
    ? LOGOS.filter((logo) => categories.includes(logo.category))
    : LOGOS

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Calculate animation duration based on content width and speed
  const animationDuration = prefersReducedMotion ? 0 : (filteredLogos.length * (120 + gap)) / speed

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      role="marquee"
      aria-label="Logos das ferramentas que integramos"
    >
      <div
        className="flex items-center"
        style={{
          gap: `${gap}px`,
          animation: prefersReducedMotion
            ? 'none'
            : `marquee-${direction} ${animationDuration}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
          width: 'max-content',
        }}
      >
        {/* Render logos twice for seamless loop */}
        {[...filteredLogos, ...filteredLogos].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className={`
              relative flex-shrink-0 transition-all duration-300
              ${grayscale ? 'grayscale opacity-50 hover:grayscale-0 hover:opacity-100' : ''}
            `}
            style={{ height: logoHeight }}
            title={logo.name}
          >
            <Image
              src={`/software-company-logos/${logo.file}`}
              alt={logo.name}
              height={logoHeight}
              width={logoHeight * 3} // Aspect ratio placeholder
              className="h-full w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}

// Convenience components for common use cases
export function LogoMarqueeHero() {
  return (
    <div className="py-6 border-t border-b border-[rgba(0,0,0,0.08)]">
      <LogoMarquee speed={35} logoHeight={24} gap={48} />
    </div>
  )
}

export function LogoMarqueeSection({ variant = 'section' }: { variant?: 'section' | 'inline' }) {
  if (variant === 'inline') {
    // Inline variant: no wrapper, for embedding in other sections
    return <LogoMarquee speed={30} logoHeight={32} gap={64} />
  }

  // Default section variant with full wrapper
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-8">
        <p className="text-xs font-medium text-brand-muted uppercase tracking-[0.15em] text-center">
          Integramos com as ferramentas que você já usa
        </p>
      </div>
      <LogoMarquee speed={30} logoHeight={32} gap={64} />
    </section>
  )
}

export function LogoMarqueeRetail() {
  return (
    <LogoMarquee
      categories={['ecommerce', 'payment', 'delivery', 'logistics']}
      speed={35}
      logoHeight={28}
    />
  )
}

export function LogoMarqueeHealthcare() {
  return (
    <LogoMarquee
      categories={['communication', 'productivity', 'payment']}
      speed={35}
      logoHeight={28}
    />
  )
}
