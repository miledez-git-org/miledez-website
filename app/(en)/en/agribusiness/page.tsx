import type { Metadata } from 'next'
import IndustryPage from '@/components/industry/IndustryPage'
import { getDict, alternatesFor } from '@/lib/i18n'

const copy = getDict('en').industry.agribusiness

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: alternatesFor('agribusiness', 'en'),
}

export default function AgribusinessPage() {
  return <IndustryPage industry="agronegocio" locale="en" />
}
