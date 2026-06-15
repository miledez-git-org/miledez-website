'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ContactModal from '@/components/ContactModal'

/**
 * Header bundled with its own ContactModal state. Use on pages that don't
 * already manage modal state themselves (legal pages, assessment) so the
 * header "Contato" button always opens the lead capture form.
 */
export default function HeaderWithContact() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <Header onContactClick={() => setIsContactModalOpen(true)} />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  )
}
