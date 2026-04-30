// Design System Theme
// Version: 4.0.0
// Last synced: 2026-04-17 (burgundy-only rebrand — replaced teal/orange; sage briefly added 2026-04-15 then removed)

import type { Config } from 'tailwindcss'

export const designSystemTheme: NonNullable<Config['theme']>['extend'] = {
  colors: {
    brand: {
      primary: '#6b0f1a',
      'primary-dark': '#4a0a12',
      'primary-light': '#8a1524',
      'primary-subtle': 'rgba(107, 15, 26, 0.08)',
      // secondary tokens removed 2026-04-17 — burgundy is the sole accent color.
      // Sage green (#87a96b) eliminated from active design system.
      black: '#1a1a1a',
      muted: '#525252',
    },
    accent: {
      slate: '#4a5568',
      'slate-light': '#718096',
      'slate-subtle': 'rgba(74, 85, 104, 0.08)',
    },
    neutral: {
      '950': '#0a0a0a',
      '900': '#171717',
      '800': '#262626',
      '700': '#404040',
      '600': '#525252',
      '500': '#737373',
      '400': '#a3a3a3',
      '300': '#d4d4d4',
      '200': '#e5e5e5',
      '100': '#f5f5f5',
      '50': '#fafafa',
      white: '#ffffff',
    },
    semantic: {
      success: '#2d6a4f',
      'success-light': '#d8f3dc',
      warning: '#b8860b',
      'warning-light': '#fff3cd',
      error: '#9d0208',
      'error-light': '#ffeaea',
      info: '#1d4e89',
      'info-light': '#e3f2fd',
    },
  },
  fontFamily: {
    // Brand update 2026-04-15: Inter replaces Manrope. Key preserved to avoid
    // cascading component edits — all `font-manrope` classes now resolve to Inter.
    manrope: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
    inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },
  lineHeight: {
    none: '1',
    tight: '1.15',
    snug: '1.3',
    normal: '1.5',
    relaxed: '1.625',
  },
  letterSpacing: {
    tight: '-0.025em',
    widest: '0.1em',
    logo: '-0.03em',
  },
  borderRadius: {
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '12px',
    full: '9999px',
  },
  boxShadow: {
    sm: '0 0 0 1px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)',
    md: '0 0 0 1px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08)',
    lg: '0 0 0 1px rgba(0,0,0,0.03), 0 4px 8px rgba(0,0,0,0.04), 0 16px 48px rgba(0,0,0,0.10)',
    xl: '0 0 0 1px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.05), 0 24px 64px rgba(0,0,0,0.12)',
    card: '0 2px 8px rgba(0,0,0,0.04)',
    'card-hover': '0 8px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
    'card-float': '0 12px 40px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.05)',
    'card-soft': '0 4px 20px rgba(0,0,0,0.06)',
    'card-icon': '0 2px 10px rgba(0,0,0,0.08)',
  },
  transitionTimingFunction: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
  },
  transitionDuration: {
    fast: '150ms',
    base: '250ms',
    slow: '400ms',
    entrance: '700ms',
  },
}

export default designSystemTheme
