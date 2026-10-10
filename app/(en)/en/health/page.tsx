import type { Metadata } from 'next'
import IndustryPage from '@/components/industry/IndustryPage'
import { getDict, alternatesFor } from '@/lib/i18n'

const copy = getDict('en').industry.health

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: alternatesFor('health', 'en'),
}

export default function HealthPage() {
  return <IndustryPage industry="saude" locale="en" />
}
