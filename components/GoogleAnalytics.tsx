'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

// Measurement IDs are public (visible in page source); env var overrides the default
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-YCDQNPQ5SF'

// Only track the production domain — keeps localhost and Vercel previews out of GA
const PRODUCTION_HOSTS = ['miledez.com.br', 'www.miledez.com.br']

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(PRODUCTION_HOSTS.includes(window.location.hostname))
  }, [])

  if (!GA_ID || !enabled) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
