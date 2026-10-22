import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { getDict, htmlLang, type Locale } from '@/lib/i18n'
import '../app/globals.css'

/**
 * Shared <html>/<body> shell for the per-language root layouts
 * (app/(pt)/layout.tsx and app/(en)/layout.tsx).
 */
export default function RootShell({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  return (
    <html lang={htmlLang[locale]}>
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-source-sans)' }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-zinc-900 focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:font-medium focus:text-sm"
        >
          {getDict(locale).site.skipLink}
        </a>
        {children}
        <SpeedInsights />
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
