'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, useCallback } from 'react'

interface HeaderProps {
  onContactClick?: () => void
}

export default function Header({ onContactClick }: HeaderProps) {
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
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all ${scrolled ? 'shadow-[0_1px_0_0_rgba(0,0,0,0.1)]' : 'shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'}`}>
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span
            className="text-brand-black"
            style={{
              fontFamily: 'var(--font-manrope)',
              fontWeight: 300,
              fontSize: '32px',
              letterSpacing: '-0.03em',
            }}
          >
            mil<span className="text-brand-primary">&</span>dez
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          className="md:hidden p-2 -mr-2 text-neutral-500 hover:text-brand-black transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
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
            className={`relative group py-2 transition-colors ${isActive('/') ? 'text-brand-black font-medium' : 'text-neutral-500 hover:text-brand-black'}`}
          >
            Início
            <span className={`absolute left-0 bottom-0 h-[1.5px] bg-brand-primary transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          <Link
            href="/industrias"
            className={`relative group py-2 transition-colors ${isActive('/industrias') || isActive('/saude') || isActive('/servicos') || isActive('/agronegocio') ? 'text-brand-black font-medium' : 'text-neutral-500 hover:text-brand-black'}`}
          >
            Indústrias
            <span className={`absolute left-0 bottom-0 h-[1.5px] bg-brand-primary transition-all duration-300 ${isActive('/industrias') || isActive('/saude') || isActive('/servicos') || isActive('/agronegocio') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          <Link
            href="/#precos"
            className="relative group text-neutral-500 hover:text-brand-black transition-colors py-2"
          >
            Preços
            <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
          </Link>

          <button
            onClick={onContactClick}
            className="btn btn-md text-white bg-brand-primary hover:bg-brand-primary-dark"
          >
            Contato
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden border-t border-neutral-200 bg-white"
          role="menu"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            <Link
              ref={firstMenuItemRef}
              href="/"
              className={`py-3 min-h-[44px] flex items-center transition-colors ${isActive('/') ? 'text-brand-black font-medium' : 'text-neutral-500 hover:text-brand-black'}`}
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
            >
              Início
            </Link>
            <Link
              href="/industrias"
              className={`py-3 min-h-[44px] flex items-center transition-colors ${isActive('/industrias') || isActive('/saude') || isActive('/servicos') || isActive('/agronegocio') ? 'text-brand-black font-medium' : 'text-neutral-500 hover:text-brand-black'}`}
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
            >
              Indústrias
            </Link>
            <Link
              href="/#precos"
              className="py-3 min-h-[44px] flex items-center text-neutral-500 hover:text-brand-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
            >
              Preços
            </Link>
            <button
              className="mt-2 btn btn-lg w-full text-white bg-brand-primary hover:bg-brand-primary-dark"
              onClick={() => { setMobileMenuOpen(false); onContactClick?.() }}
              role="menuitem"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
