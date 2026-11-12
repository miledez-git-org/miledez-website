'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import { getDict, localePath, type Locale } from '@/lib/i18n'

const WHATSAPP_URL = 'https://wa.me/5531982835587'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  locale?: Locale
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const LABEL = 'block text-sm font-medium text-zinc-900 mb-1.5'
const FIELD =
  'w-full px-4 py-3 border border-zinc-200 rounded-lg placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-colors'

export default function ContactModal({ isOpen, onClose, locale = 'pt' }: ContactModalProps) {
  const t = getDict(locale).contactModal
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    employees: '',
  })
  const modalRef = useRef<HTMLDivElement>(null)
  const successCloseRef = useRef<HTMLButtonElement>(null)
  const invokerRef = useRef<HTMLElement | null>(null)

  // Handle escape key and keep Tab focus inside the dialog
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFormStatus((s) => (s === 'loading' ? s : 'idle'))
        onClose()
        return
      }
      if (e.key !== 'Tab' || !modalRef.current) return
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && (document.activeElement === first || document.activeElement === modalRef.current)) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Move focus to the dialog itself on open (not a field, so mobile keyboards stay
  // closed) and back to the invoking control on close
  useEffect(() => {
    if (!isOpen) return
    invokerRef.current = document.activeElement as HTMLElement | null
    modalRef.current?.focus()
    return () => invokerRef.current?.focus()
  }, [isOpen])

  // After a confirmed submission the form unmounts; keep focus in the dialog
  useEffect(() => {
    if (formStatus === 'success') successCloseRef.current?.focus()
  }, [formStatus])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Handle click outside modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (formStatus === 'loading') return
    setFormStatus('loading')

    try {
      // Using Formspree
      const response = await fetch('https://formspree.io/f/xdaeedap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          whatsapp: formData.phone,
          business: formData.business,
          employees: formData.employees,
          language: locale,
        }),
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', phone: '', business: '', employees: '' })
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const resetAndClose = () => {
    setFormStatus('idle')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-zinc-950/50 backdrop-blur-sm"
        style={{
          animation: 'fadeIn 200ms ease-out',
        }}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        aria-labelledby="contact-modal-title"
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-full overflow-y-auto focus:outline-none"
        style={{
          animation: 'slideUp 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Close button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100 transition-colors z-10"
          aria-label={t.close}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8">
          {formStatus === 'success' ? (
            <div className="text-center py-8" role="status">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h2 id="contact-modal-title" className="text-2xl font-semibold text-zinc-900 mb-3">{t.successTitle}</h2>
              <p className="text-body mb-8">
                {t.successText}
              </p>
              <button
                ref={successCloseRef}
                onClick={resetAndClose}
                className="btn btn-primary btn-lg"
              >
                {t.close}
              </button>
            </div>
          ) : (
            <>
              <h2 id="contact-modal-title" className="text-2xl font-semibold text-zinc-900 mb-6 pr-10">
                {t.title}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className={LABEL}>{t.name}</label>
                  <input type="text" id="name" name="name" required autoComplete="name"
                    value={formData.name} onChange={handleChange} className={FIELD} placeholder={t.namePlaceholder} />
                </div>

                <div>
                  <label htmlFor="phone" className={LABEL}>{t.phone}</label>
                  <input type="tel" id="phone" name="phone" required autoComplete="tel" inputMode="tel"
                    value={formData.phone} onChange={handleChange} className={FIELD} placeholder={t.phonePlaceholder} />
                </div>

                <div>
                  <label htmlFor="business" className={LABEL}>{t.business}</label>
                  <input type="text" id="business" name="business" required autoComplete="off"
                    value={formData.business} onChange={handleChange} className={FIELD} placeholder={t.businessPlaceholder} />
                </div>

                <div>
                  <label htmlFor="employees" className={LABEL}>{t.employees}</label>
                  {/* Empty value is :invalid while required, which greys it like a placeholder */}
                  <select id="employees" name="employees" required value={formData.employees} onChange={handleChange}
                    className={`${FIELD} bg-white invalid:text-zinc-400 [&>option]:text-body`}>
                    <option value="" disabled>{t.employeesPlaceholder}</option>
                    {t.employeesOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div role="alert">
                  {formStatus === 'error' && (
                    <div className="p-4 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-sm">
                      {t.error}{' '}
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2">
                        {t.errorLink}
                      </a>
                      .
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full btn btn-primary btn-lg gap-2 !whitespace-normal text-center"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t.sending}
                    </>
                  ) : (
                    t.submit
                  )}
                </button>

                <p className="text-sm text-zinc-500">
                  {t.privacy}{' '}
                  <a href={localePath(locale, 'privacy')} className="underline underline-offset-2 hover:text-zinc-900">
                    {t.privacyLink}
                  </a>
                  .
                </p>
              </form>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  )
}
