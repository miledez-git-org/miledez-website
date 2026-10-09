'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

// Measurement IDs are public (visible in page source); env var overrides the default
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-YCDQNPQ5SF'

// Only track the production domain — keeps localhost and Vercel previews out of GA
const PRODUCTION_HOSTS = ['miledez.com.br', 'www.miledez.com.br']

// Per-browser opt-out for the owner's own devices: visit any page with ?notrack
// to stop tracking this browser, or ?track to resume
const OPT_OUT_KEY = 'miledez-ga-optout'

function isOptedOut(): boolean {
  const url = new URL(window.location.href)
  const params = url.searchParams
  if (!params.has('notrack') && !params.has('track')) {
    try {
      return localStorage.getItem(OPT_OUT_KEY) === '1'
    } catch {
      return false
    }
  }

  const optOut = params.has('notrack')
  try {
    if (optOut) localStorage.setItem(OPT_OUT_KEY, '1')
    else localStorage.removeItem(OPT_OUT_KEY)
    window.alert(
      optOut
        ? 'Google Analytics desativado neste navegador.'
        : 'Google Analytics reativado neste navegador.'
    )
  } catch {
    window.alert('Não foi possível salvar a preferência neste navegador.')
  }

  // Drop the flag from the address bar so it isn't bookmarked or shared
  params.delete('notrack')
  params.delete('track')
  window.history.replaceState(null, '', url.pathname + url.search + url.hash)
  return optOut
}

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const optedOut = isOptedOut()
    setEnabled(PRODUCTION_HOSTS.includes(window.location.hostname) && !optedOut)
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
