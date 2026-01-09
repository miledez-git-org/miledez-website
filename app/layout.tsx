import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'mil&dez - Automação de Processos',
  description: 'Automatizamos seus processos de negócio. Você foca no que importa.',
  keywords: ['automação', 'processos', 'workflow', 'Brasil', 'n8n', 'AI'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-inter)' }}>
        {children}
      </body>
    </html>
  )
}
