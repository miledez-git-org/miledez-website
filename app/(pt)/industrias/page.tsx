import type { Metadata } from 'next'
import IndustriasContent from './IndustriasContent'
import { getDict, alternatesFor } from '@/lib/i18n'

const copy = getDict('pt').industries

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: alternatesFor('industries', 'pt'),
}

export default function IndustriasPage() {
  return <IndustriasContent />
}
