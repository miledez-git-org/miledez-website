import { pt } from './pt'
import { en } from './en'

export type Locale = 'pt' | 'en'
export const locales: Locale[] = ['pt', 'en']
export const defaultLocale: Locale = 'pt'

export type Dict = typeof pt

const dicts: Record<Locale, Dict> = { pt, en }

export function getDict(locale: Locale = defaultLocale): Dict {
  return dicts[locale]
}

/** BCP-47 tags used for <html lang>, hreflang and Open Graph. */
export const htmlLang: Record<Locale, string> = { pt: 'pt-BR', en: 'en-US' }

export const SITE_URL = 'https://miledez.com.br'

export type RouteKey =
  | 'home'
  | 'industries'
  | 'health'
  | 'services'
  | 'agribusiness'
  | 'terms'
  | 'privacy'

/** One entry per page: the Portuguese path and its English counterpart. */
export const routes: Record<RouteKey, Record<Locale, string>> = {
  home: { pt: '/', en: '/en' },
  industries: { pt: '/industrias', en: '/en/industries' },
  health: { pt: '/saude', en: '/en/health' },
  services: { pt: '/servicos', en: '/en/professional-services' },
  agribusiness: { pt: '/agronegocio', en: '/en/agribusiness' },
  terms: { pt: '/termos', en: '/en/terms' },
  privacy: { pt: '/politica-privacidade', en: '/en/privacy-policy' },
}

/** Path of a page in the given locale, with an optional #hash. */
export function localePath(locale: Locale, key: RouteKey, hash?: string): string {
  return routes[key][locale] + (hash ? `#${hash}` : '')
}

function normalize(pathname: string): string {
  const trimmed = pathname.replace(/\.html$/, '').replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}

/** Locale and route key for a pathname, or null if it matches no known page. */
export function resolveRoute(pathname: string): { locale: Locale; key: RouteKey } | null {
  const path = normalize(pathname)
  for (const key of Object.keys(routes) as RouteKey[]) {
    for (const locale of locales) {
      if (routes[key][locale] === path) return { locale, key }
    }
  }
  return null
}

export function localeFromPathname(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'pt'
}

/** Next.js `alternates` metadata (canonical + hreflang) for a page. */
export function alternatesFor(key: RouteKey, locale: Locale) {
  return {
    canonical: routes[key][locale],
    languages: {
      'pt-BR': routes[key].pt,
      'en-US': routes[key].en,
      'x-default': routes[key].pt,
    },
  }
}
