import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { getDict, alternatesFor } from '@/lib/i18n'

const copy = getDict('en').terms

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: alternatesFor('terms', 'en'),
}

export default function TermsPage() {
  return <LegalPage page="terms" locale="en" />
}
