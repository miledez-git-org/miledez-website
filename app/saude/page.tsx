import type { Metadata } from 'next'
import SaudeContent from './SaudeContent'

export const metadata: Metadata = {
  title: 'Saúde e Clínicas - mil&dez',
  description: 'Automatizamos documentação, faturamento e conformidade para clínicas e consultórios médicos.',
}

export default function SaudePage() {
  return <SaudeContent />
}
