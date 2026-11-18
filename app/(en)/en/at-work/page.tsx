import type { Metadata } from 'next'
import AtWorkPage from '@/components/AtWorkPage'
import { getDict, alternatesFor } from '@/lib/i18n'

const copy = getDict('en').atWork

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: alternatesFor('atWork', 'en'),
}

export default function AtWorkRoute() {
  return <AtWorkPage locale="en" />
}
