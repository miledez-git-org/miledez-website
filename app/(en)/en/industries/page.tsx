import type { Metadata } from 'next'
import IndustriasContent from '@/app/(pt)/industrias/IndustriasContent'
import { getDict, alternatesFor } from '@/lib/i18n'

const copy = getDict('en').industries

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: alternatesFor('industries', 'en'),
}

export default function IndustriesPage() {
  return <IndustriasContent locale="en" />
}
