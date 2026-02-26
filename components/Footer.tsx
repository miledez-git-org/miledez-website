'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-brand-primary min-h-[50vh] md:min-h-[40vh] py-16 md:py-24 px-6 md:px-10 text-white overflow-hidden">
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
                Automação de processos para empresas
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              <Link
                href="/"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Início
              </Link>
              <Link
                href="/saude"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Saúde
              </Link>
              <Link
                href="/servicos"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Serviços
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
            <div className="text-xs text-white/70 text-center md:text-left">
              Rua Irmaos Kennedy 200 ap. 301, Belo Horizonte, MG · CNPJ: 44.584.460/0001-80
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-xs text-white/70">
                © 2025 mil&dez. Todos os direitos reservados.
              </span>
              <div className="flex items-center gap-4">
                <Link
                  href="/politica-privacidade"
                  className="text-xs text-white/70 hover:text-white/90 transition-colors"
                >
                  Privacidade
                </Link>
                <Link
                  href="/termos"
                  className="text-xs text-white/70 hover:text-white/90 transition-colors"
                >
                  Termos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
