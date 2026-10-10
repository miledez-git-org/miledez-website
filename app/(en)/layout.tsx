import type { Metadata } from 'next'
import RootShell from '@/components/RootShell'
import { getDict, SITE_URL } from '@/lib/i18n'

const site = getDict('en').site

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>
}
