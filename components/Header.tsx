'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { getDict, localePath, resolveRoute, routes, type Locale, type RouteKey } from '@/lib/i18n'

interface HeaderProps {
  onContactClick?: () => void
  locale?: Locale
}

// Flag of the language the switch leads to (US for en, Brazil for pt); SVG files because emoji flags don't render on Windows
function Flag({ locale }: { locale: Locale }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, tiny decorative SVG
    <img src={`/flags/${locale === 'en' ? 'us' : 'br'}.svg`} alt="" width={24} height={16} className="block w-6 h-4 rounded-sm ring-1 ring-zinc-200" />
  )
}

export default function Header({ onContactClick, locale = 'pt' }: HeaderProps) {
  const pathname = usePathname()
  const t = getDict(locale).header
  const otherLocale: Locale = locale === 'pt' ? 'en' : 'pt'
  const currentRoute: RouteKey | undefined = resolveRoute(pathname)?.key
  // Language switch goes to the same page in the other language (home if unknown)
  const switchHref = routes[currentRoute ?? 'home'][otherLocale]
  // Remember an explicit language choice so the country-based redirect in vercel.json stops applying
  const rememberLocale = () => {
    document.cookie = `lang=${otherLocale}; path=/; max-age=31536000; samesite=lax`
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileMenuOpen) {
          setMobileMenuOpen(false)
          menuButtonRef.current?.focus()
        }
        if (dropdownOpen) {
          setDropdownOpen(false)
        }
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen, dropdownOpen])

  // Focus trap for mobile menu
  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }

      document.addEventListener('keydown', handleTab)
      firstElement?.focus()

      return () => document.removeEventListener('keydown', handleTab)
    }
  }, [mobileMenuOpen])

  const homeActive = currentRoute === 'home'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all ${scrolled ? 'shadow-[0_1px_0_0_theme(colors.zinc.200)]' : 'shadow-[0_1px_0_0_theme(colors.zinc.100)]'}`}>
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
        <Link href={localePath(locale, 'home')} className="flex items-center">
          <span
            className="text-body"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize: '32px',
              letterSpacing: '-0.03em',
            }}
          >
            mil<span className="text-zinc-900 font-semibold">&</span>dez
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          className="md:hidden p-2 -mr-2 text-zinc-500 hover:text-zinc-900 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? t.closeMenu : t.openMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          <Link
            href={localePath(locale, 'home')}
            className={`relative group py-2 transition-colors ${homeActive ? 'text-zinc-900 font-medium' : 'text-zinc-500 hover:text-zinc-900'}`}
          >
            {t.home}
            <span className={`absolute left-0 bottom-0 h-[1.5px] bg-zinc-900 transition-all duration-300 ${homeActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          <Link
            href={localePath(locale, 'home', 'precos')}
            className="relative group text-zinc-500 hover:text-zinc-900 transition-colors py-2"
          >
            {t.pricing}
            <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-zinc-900 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href={switchHref}
            hrefLang={otherLocale === 'en' ? 'en-US' : 'pt-BR'}
            lang={otherLocale === 'en' ? 'en-US' : 'pt-BR'}
            aria-label={t.switchAria}
            onClick={rememberLocale}
            title={t.switchAria}
            className="py-2 opacity-80 hover:opacity-100 transition-opacity"
          >
            <Flag locale={otherLocale} />
          </Link>

          <button
            onClick={onContactClick}
            className="btn btn-md btn-secondary"
          >
            {t.contact}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden border-t border-zinc-200 bg-white"
          role="menu"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            <Link
              ref={firstMenuItemRef}
              href={localePath(locale, 'home')}
              className={`py-3 min-h-[44px] flex items-center transition-colors ${homeActive ? 'text-zinc-900 font-medium' : 'text-zinc-500 hover:text-zinc-900'}`}
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
            >
              {t.home}
            </Link>
            <Link
              href={localePath(locale, 'home', 'precos')}
              className="py-3 min-h-[44px] flex items-center text-zinc-500 hover:text-zinc-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
            >
              {t.pricing}
            </Link>
            <Link
              href={switchHref}
              hrefLang={otherLocale === 'en' ? 'en-US' : 'pt-BR'}
              lang={otherLocale === 'en' ? 'en-US' : 'pt-BR'}
              className="py-3 min-h-[44px] flex items-center gap-3 text-zinc-500 hover:text-zinc-900 transition-colors"
              onClick={() => { rememberLocale(); setMobileMenuOpen(false) }}
              role="menuitem"
            >
              {t.switchLabel}
              <Flag locale={otherLocale} />
            </Link>
            <button
              className="mt-2 btn btn-lg w-full btn-secondary"
              onClick={() => { setMobileMenuOpen(false); onContactClick?.() }}
              role="menuitem"
            >
              {t.contact}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
