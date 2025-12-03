import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-brand-border py-16 px-10 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <span className="text-sm text-brand-muted">© 2025 mil&dez</span>
        <div className="flex gap-8">
          <Link 
            href="/" 
            className="text-sm text-brand-muted hover:text-brand-black transition-colors"
          >
            Início
          </Link>
          <a 
            href="mailto:contato@mildez.com" 
            className="text-sm text-brand-muted hover:text-brand-black transition-colors"
          >
            contato@mildez.com
          </a>
        </div>
      </div>
    </footer>
  )
}
