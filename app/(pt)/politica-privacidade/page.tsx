import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { getDict, alternatesFor } from '@/lib/i18n'

const copy = getDict('pt').privacy

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: alternatesFor('privacy', 'pt'),
}

export default function PoliticaPrivacidadePage() {
  return <LegalPage page="privacy" locale="pt" />
}
