// Design System Theme
// Version: 5.0.0
// Last synced: 2026-10-22 (type/radius/shadow overrides removed: the design system uses Tailwind's default
// fontSize, lineHeight, letterSpacing, borderRadius and boxShadow scales, see design-system-agency/docs/tokens.json)

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
