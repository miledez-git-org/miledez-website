'use client'

import Link from 'next/link'
import { getDict, localePath, type Locale } from '@/lib/i18n'

interface FooterProps {
  locale?: Locale
}

export default function Footer({ locale = 'pt' }: FooterProps) {
  const t = getDict(locale).footer

  return (
    <footer className="relative min-h-[50vh] md:min-h-[40vh] py-20 md:py-28 px-6 md:px-10 text-white overflow-hidden bg-brand-black">
      {/* Geometric texture overlay */}
      <div className="footer-texture absolute inset-0" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">
        {/* Footer links */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Logo and tagline */}
            <div>
              <div className="text-2xl font-medium tracking-tight mb-2">
                mil&dez
              </div>
              <p className="text-sm text-white/80">
                {t.tagline}
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              <Link
                href={localePath(locale, 'home')}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {t.home}
              </Link>
              <Link
                href={localePath(locale, 'health')}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {t.health}
              </Link>
              <Link
                href={localePath(locale, 'services')}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {t.services}
              </Link>
              <Link
                href={localePath(locale, 'agribusiness')}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {t.agribusiness}
              </Link>
              <a
                href="mailto:contato@miledez.com.br"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                contato@miledez.com.br
              </a>
              <a
                href="https://wa.me/5531983529257"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {t.whatsapp}
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
            <div className="text-xs text-white/70 text-center md:text-left">
              {t.address}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-xs text-white/70">
                {t.rights}
              </span>
              <div className="flex items-center gap-4">
                <Link
                  href={localePath(locale, 'privacy')}
                  className="text-xs text-white/70 hover:text-white/90 transition-colors"
                >
                  {t.privacy}
                </Link>
                <Link
                  href={localePath(locale, 'terms')}
                  className="text-xs text-white/70 hover:text-white/90 transition-colors"
                >
                  {t.terms}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
