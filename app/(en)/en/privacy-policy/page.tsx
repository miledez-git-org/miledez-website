import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { getDict, alternatesFor } from '@/lib/i18n'

const copy = getDict('en').privacy

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: alternatesFor('privacy', 'en'),
}

export default function PrivacyPolicyPage() {
  return <LegalPage page="privacy" locale="en" />
}
