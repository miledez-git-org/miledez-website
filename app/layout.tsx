import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
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
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-source-sans)' }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-brand-primary focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:font-medium focus:text-sm"
        >
          Pular para o conteúdo
        </a>
        {children}
        <SpeedInsights />
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
