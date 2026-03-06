import type { Metadata } from 'next'
import AgronegocioContent from './AgronegocioContent'

export const metadata: Metadata = {
  title: 'Agronegócio - mil&dez',
  description: 'Automatizamos fornecedores, conformidade e comunicação campo-escritório para o agronegócio.',
}

export default function AgronegocioPage() {
  return <AgronegocioContent />
}
