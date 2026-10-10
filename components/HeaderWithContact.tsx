'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ContactModal from '@/components/ContactModal'
import type { Locale } from '@/lib/i18n'

/**
 * Header bundled with its own ContactModal state. Use on pages that don't
 * already manage modal state themselves (legal pages, assessment) so the
 * header "Contato" button always opens the lead capture form.
 */
export default function HeaderWithContact({ locale = 'pt' }: { locale?: Locale }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <Header locale={locale} onContactClick={() => setIsContactModalOpen(true)} />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        locale={locale}
      />
    </>
  )
}
