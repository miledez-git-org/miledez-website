import type { Metadata } from 'next'
import AtWorkPage from '@/components/AtWorkPage'
import { getDict, alternatesFor } from '@/lib/i18n'

const copy = getDict('pt').atWork

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: alternatesFor('atWork', 'pt'),
}

export default function FuncionandoPage() {
  return <AtWorkPage locale="pt" />
}
