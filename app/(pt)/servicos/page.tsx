import type { Metadata } from 'next'
import ServicosContent from './ServicosContent'
import { getDict, alternatesFor } from '@/lib/i18n'

const copy = getDict('pt').industry.services

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: alternatesFor('services', 'pt'),
}

export default function ServicosPage() {
  return <ServicosContent />
}
