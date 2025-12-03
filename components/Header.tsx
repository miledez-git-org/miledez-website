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
            href="/#como-funciona"
            className="relative group text-brand-muted hover:text-brand-black transition-colors"
          >
            Como funciona
            <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-brand-black transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/#integracoes"
            className="relative group text-brand-muted hover:text-brand-black transition-colors"
          >
            Integrações
            <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-brand-black transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/#industrias"
            className="relative group text-brand-muted hover:text-brand-black transition-colors"
          >
            Indústrias
            <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-brand-black transition-all duration-300 group-hover:w-full" />
          </Link>
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
