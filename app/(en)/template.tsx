'use client'

import PageTransition from '@/components/PageTransition'
import { ReactNode } from 'react'

interface TemplateProps {
  children: ReactNode
}

/**
 * Template component for page transitions.
 *
 * In Next.js App Router, the template.tsx file wraps each page
 * and re-renders on navigation, enabling page transitions.
 *
 * Note: template.tsx differs from layout.tsx in that:
 * - layout.tsx persists across navigations (state preserved)
 * - template.tsx re-renders on each navigation (enables transitions)
 */
export default function Template({ children }: TemplateProps) {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  )
}
