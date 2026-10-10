import type { Metadata } from 'next'
import IndustryPage from '@/components/industry/IndustryPage'
import { getDict, alternatesFor } from '@/lib/i18n'

const copy = getDict('en').industry.services

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: alternatesFor('services', 'en'),
}

export default function ProfessionalServicesPage() {
  return <IndustryPage industry="servicos" locale="en" />
}
