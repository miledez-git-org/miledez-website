import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300'],
  display: 'swap',
})

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
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
