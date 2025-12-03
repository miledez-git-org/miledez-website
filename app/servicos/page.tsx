import type { Metadata } from 'next'
import ServicosContent from './ServicosContent'

export const metadata: Metadata = {
  title: 'Serviços Profissionais - mil&dez',
  description: 'Automatizamos contratos, faturamento e relatórios para escritórios e prestadores de serviço.',
}

export default function ServicosPage() {
  return <ServicosContent />
}
