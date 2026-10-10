import type { Metadata } from 'next'
import AgronegocioContent from './AgronegocioContent'
import { getDict, alternatesFor } from '@/lib/i18n'

const copy = getDict('pt').industry.agribusiness

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: alternatesFor('agribusiness', 'pt'),
}

export default function AgronegocioPage() {
  return <AgronegocioContent />
}
