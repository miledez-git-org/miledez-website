import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-brand-border py-12 md:py-16 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-sm text-brand-muted">© 2025 mil&dez</span>
        <div className="flex gap-6">
          <Link
            href="/"
            className="text-sm text-brand-muted hover:text-brand-black transition-colors py-2 -my-2 px-1"
          >
            Início
          </Link>
          <a
            href="mailto:contato@mildez.com"
            className="text-sm text-brand-muted hover:text-brand-black transition-colors py-2 -my-2 px-1"
          >
            contato@mildez.com
          </a>
        </div>
      </div>
    </footer>
  )
}
