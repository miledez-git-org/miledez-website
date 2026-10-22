// Design System Theme
// Version: 4.0.0
// Last synced: 2026-10-21 (Notus Teal migration — legacy burgundy brand/accent/neutral/semantic colors removed)

import type { Config } from 'tailwindcss'

export const designSystemTheme: NonNullable<Config['theme']>['extend'] = {
  colors: {
    // Notus Teal palette, pasted from ~/light-design-system/docs/palette-teal.js (global design reference).
    // Components use raw zinc/emerald/amber/rose/sky utilities; zinc-900 is the only brand fill.
    // Body text uses text-body (#27272a, neutral dark grey, 14.9:1), never a teal zinc shade (D-036).
    // zinc-600 (#0d9488) is 3.74:1 on white, large or decorative text only.
    body: '#27272a',
    zinc: {
      50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8', 400: '#a1a1aa',
      500: '#71717a', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a', 950: '#042f2e',
    },
    emerald: {
      50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80',
      500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d', 950: '#052e16',
    },
    amber: {
      50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74', 400: '#fb923c',
      500: '#f97316', 600: '#ea580c', 700: '#c2410c', 800: '#9a3412', 900: '#7c2d12', 950: '#431407',
    },
    rose: {
      50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171',
      500: '#ef4444', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 900: '#7f1d1d', 950: '#450a0a',
    },
    sky: {
      50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa',
      500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a', 950: '#172554',
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
