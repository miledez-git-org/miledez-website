import type { Metadata } from 'next'
import VarejoContent from './VarejoContent'

export const metadata: Metadata = {
  title: 'Varejo e E-commerce - mil&dez',
  description: 'Automatizamos estoque, pedidos e financeiro para lojas e e-commerce.',
}

export default function VarejoPage() {
  return <VarejoContent />
}
