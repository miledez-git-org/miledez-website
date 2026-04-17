import type { Metadata } from 'next'
import IndustriasContent from './IndustriasContent'

export const metadata: Metadata = {
  title: 'Indústrias - mil&dez',
  description: 'Automação sob medida para saúde, serviços profissionais e agronegócio.',
}

export default function IndustriasPage() {
  return <IndustriasContent />
}
