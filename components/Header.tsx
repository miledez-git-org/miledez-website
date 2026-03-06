'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, useCallback } from 'react'

export default function Header() {
  const pathname = usePathname()
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

  // Check if link is active
  const isActive = useCallback((href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all ${scrolled ? 'shadow-sm' : ''}`} style={{ backgroundColor: '#274855' }}>
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span
            className="text-white"
            style={{
              fontFamily: 'var(--font-manrope)',
              fontWeight: 300,
              fontSize: '32px',
              letterSpacing: '-0.03em',
            }}
          >
            mil<span className="text-[#d14800]">&</span>dez
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          className="md:hidden p-2 -mr-2 text-white/70 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
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
            href="/"
            className={`relative group py-2 transition-colors ${isActive('/') ? 'text-white' : 'text-white/70 hover:text-white'}`}
          >
            Início
            <span className={`absolute left-0 bottom-0 h-[1.5px] bg-[#d14800] transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-1 text-white/70 hover:text-white transition-colors py-2">
              Indústrias
              <svg viewBox="0 0 24 24" className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
              <div className="bg-[#274855] border border-white/10 p-2 flex flex-col gap-1">
                <Link href="/saude" className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 text-left transition-colors">
                  Saúde e Clínicas
                </Link>
                <Link href="/servicos" className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 text-left transition-colors">
                  Serviços Profissionais
                </Link>
                <Link href="/agronegocio" className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 text-left transition-colors">
                  Agronegócio
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/#precos"
            className="relative group text-white/70 hover:text-white transition-colors py-2"
          >
            Preços
            <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[#d14800] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/#contato"
            className="btn btn-md text-white"
            style={{ backgroundColor: '#d14800' }}
          >
            Contato
          </Link>
        </div>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden border-t border-white/10"
          style={{ backgroundColor: '#274855' }}
          role="menu"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            <Link
              ref={firstMenuItemRef}
              href="/"
              className={`py-3 min-h-[44px] flex items-center transition-colors ${isActive('/') ? 'text-white font-medium' : 'text-white/70 hover:text-white'}`}
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
            >
              Início
            </Link>
            <div className="py-2">
              <span className="text-xs text-white/50 uppercase tracking-wider">Indústrias</span>
            </div>
            <Link
              href="/saude"
              className={`py-3 pl-4 min-h-[44px] flex items-center transition-colors ${isActive('/saude') ? 'text-white font-medium' : 'text-white/70 hover:text-white'}`}
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
            >
              Saúde e Clínicas
            </Link>
            <Link
              href="/servicos"
              className={`py-3 pl-4 min-h-[44px] flex items-center transition-colors ${isActive('/servicos') ? 'text-white font-medium' : 'text-white/70 hover:text-white'}`}
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
            >
              Serviços Profissionais
            </Link>
            <Link
              href="/agronegocio"
              className={`py-3 pl-4 min-h-[44px] flex items-center transition-colors ${isActive('/agronegocio') ? 'text-white font-medium' : 'text-white/70 hover:text-white'}`}
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
            >
              Agronegócio
            </Link>
            <Link
              href="/#precos"
              className="py-3 min-h-[44px] flex items-center text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
            >
              Preços
            </Link>
            <Link
              href="/#contato"
              className="mt-2 btn btn-lg w-full text-white"
              style={{ backgroundColor: '#d14800' }}
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
