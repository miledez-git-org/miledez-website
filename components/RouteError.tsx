'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { localeFromPathname } from '@/lib/i18n'

const copy = {
  pt: {
    title: 'Algo deu errado',
    text: 'Ocorreu um erro inesperado. Por favor, tente novamente ou volte para a página inicial.',
    details: 'Detalhes técnicos',
    retry: 'Tentar novamente',
    home: 'Voltar ao início',
    homeHref: '/',
  },
  en: {
    title: 'Something went wrong',
    text: 'An unexpected error occurred. Please try again or go back to the home page.',
    details: 'Technical details',
    retry: 'Try again',
    home: 'Back to home',
    homeHref: '/en',
  },
}

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

/**
 * Global error page for route-level errors
 * This file handles errors that occur during rendering of any route
 */
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const t = copy[localeFromPathname(usePathname() ?? '/')]

  useEffect(() => {
    // Log error to console (could send to analytics/error tracking)
    console.error('Route error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Error icon */}
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border-2 border-zinc-900 text-zinc-900">
          <svg
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>

        {/* Error message */}
        <h1 className="heading-section text-3xl text-zinc-900 mb-4">
          {t.title}
        </h1>
        <p className="text-body mb-8">
          {t.text}
        </p>

        {/* Error details (development only) */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mb-8 text-left">
            <summary className="text-xs text-zinc-500 cursor-pointer hover:text-zinc-900 mb-2">
              {t.details}
            </summary>
            <div className="p-4 bg-zinc-100 text-xs overflow-auto">
              <p className="font-medium text-rose-700 mb-2">{error.message}</p>
              {error.digest && (
                <p className="text-body">Digest: {error.digest}</p>
              )}
            </div>
          </details>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary px-8 py-4 text-white bg-zinc-900 hover:bg-zinc-800"
          >
            {t.retry}
          </button>
          <a
            href={t.homeHref}
            className="btn-outline px-8 py-4"
          >
            {t.home}
          </a>
        </div>
      </div>
    </div>
  )
}
