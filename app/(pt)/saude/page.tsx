import type { Metadata } from 'next'
import SaudeContent from './SaudeContent'
import { getDict, alternatesFor } from '@/lib/i18n'

const copy = getDict('pt').industry.health

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: alternatesFor('health', 'pt'),
}

export default function SaudePage() {
  return <SaudeContent />
}
