'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-brand-border">
      <nav className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
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
            mil<span className="text-brand-accent">&</span>dez
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 -mr-2 text-brand-muted hover:text-brand-black transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
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
        <div className="hidden md:flex gap-10 text-sm">
          <Link
            href="/"
            className="relative group text-brand-muted hover:text-brand-black transition-colors"
          >
            Início
            <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-brand-black transition-all duration-300 group-hover:w-full" />
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-1 text-brand-muted hover:text-brand-black transition-colors">
              Indústrias
              <svg viewBox="0 0 24 24" className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
              <div className="bg-white border border-brand-border p-2 flex flex-col gap-1">
                <Link href="/saude" className="px-4 py-3 text-brand-muted hover:text-brand-black hover:bg-gray-50 text-left transition-colors">
                  Saúde e Clínicas
                </Link>
                <Link href="/servicos" className="px-4 py-3 text-brand-muted hover:text-brand-black hover:bg-gray-50 text-left transition-colors">
                  Serviços Profissionais
                </Link>
                <Link href="/varejo" className="px-4 py-3 text-brand-muted hover:text-brand-black hover:bg-gray-50 text-left transition-colors">
                  Varejo e E-commerce
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/#contato"
            className="text-brand-accent"
          >
            Contato
          </Link>
        </div>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brand-border bg-white">
          <div className="px-6 py-4 flex flex-col gap-1">
            <Link
              href="/"
              className="py-3 text-brand-muted hover:text-brand-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <div className="py-2">
              <span className="text-xs text-brand-light uppercase tracking-wider">Indústrias</span>
            </div>
            <Link
              href="/saude"
              className="py-3 pl-4 text-brand-muted hover:text-brand-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Saúde e Clínicas
            </Link>
            <Link
              href="/servicos"
              className="py-3 pl-4 text-brand-muted hover:text-brand-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços Profissionais
            </Link>
            <Link
              href="/varejo"
              className="py-3 pl-4 text-brand-muted hover:text-brand-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Varejo e E-commerce
            </Link>
            <Link
              href="/#contato"
              className="py-3 text-brand-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
