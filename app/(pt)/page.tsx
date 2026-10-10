import type { Metadata } from 'next'
import HomePage from '@/components/HomePage'
import { getDict, alternatesFor } from '@/lib/i18n'

const copy = getDict('pt').home

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: alternatesFor('home', 'pt'),
}

export default function Home() {
  return <HomePage locale="pt" />
}
