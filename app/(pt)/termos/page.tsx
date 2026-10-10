import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { getDict, alternatesFor } from '@/lib/i18n'

const copy = getDict('pt').terms

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: alternatesFor('terms', 'pt'),
}

export default function TermosPage() {
  return <LegalPage page="terms" locale="pt" />
}
