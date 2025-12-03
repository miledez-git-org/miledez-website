'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-brand-border">
      <nav className="max-w-6xl mx-auto px-10 py-5 flex justify-between items-center">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-brand-black"
        >
          mil&dez
        </Link>
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
              <div className="bg-white border border-brand-border p-2 shadow-sm rounded-sm flex flex-col gap-1">
                <Link href="/saude" className="px-4 py-2 text-brand-muted hover:text-brand-black hover:bg-gray-50 text-left transition-colors">
                  Saúde e Clínicas
                </Link>
                <Link href="/servicos" className="px-4 py-2 text-brand-muted hover:text-brand-black hover:bg-gray-50 text-left transition-colors">
                  Serviços Profissionais
                </Link>
                <Link href="/varejo" className="px-4 py-2 text-brand-muted hover:text-brand-black hover:bg-gray-50 text-left transition-colors">
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
    </header>
  )
}
