import type { Metadata } from 'next'
import AvaliacaoContent from './AvaliacaoContent'

export const metadata: Metadata = {
  title: 'Avaliação Gratuita de Automação | mil&dez',
  description: 'Responda 4 perguntas e receba um plano personalizado de automação para seu negócio em segundos.',
}

export default function AvaliacaoPage() {
  return <AvaliacaoContent />
}
