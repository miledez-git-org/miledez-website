'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-brand-accent min-h-[50vh] md:min-h-[40vh] py-16 md:py-24 px-6 md:px-10 text-white overflow-hidden">
      {/* Geometric texture overlay */}
      <div className="footer-texture absolute inset-0" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">
        {/* Large CTA section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white tracking-[-0.02em]">
            Pronto para automatizar?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-md">
            Comece sua jornada de automação hoje. Conversa sem compromisso.
          </p>
          <a
            href="mailto:contato@miledez.com.br"
            className="inline-block px-10 py-5 text-base font-medium bg-white text-brand-accent hover:bg-white/90 transition-colors"
          >
            Iniciar conversa
          </a>
        </div>

        {/* Footer links */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Logo and tagline */}
            <div>
              <div className="text-2xl font-medium tracking-tight mb-2">
                mil&dez
              </div>
              <p className="text-sm text-white/60">
                Automacao de processos para empresas
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              <Link
                href="/"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="/saude"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Saude
              </Link>
              <Link
                href="/servicos"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Servicos
              </Link>
              <Link
                href="/varejo"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Varejo
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
                WhatsApp
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
            <div className="text-xs text-white/50 text-center md:text-left">
              Rua Irmaos Kennedy 200 ap. 301, Belo Horizonte, MG · CNPJ: 44.584.460/0001-80
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-xs text-white/50">
                © 2025 mil&dez. Todos os direitos reservados.
              </span>
              <span className="text-xs text-white/50">
                Designed in Brazil
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
