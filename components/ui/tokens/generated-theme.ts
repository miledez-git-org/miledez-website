// Design System Theme
// Version: 6.0.0
// Last synced: 2026-11-10 from design-system v3.0 (palette v3: teal-tinted surfaces, light-blue sky accent, D-047…D-050).
// Type, radius and shadow use Tailwind's default scales, see design-system-agency/docs/tokens.json.

import type { Config } from 'tailwindcss'

export const designSystemTheme: NonNullable<Config['theme']>['extend'] = {
  colors: {
    // Notus Teal palette v3, pasted from design-system-agency/docs/palette-teal.js (global design reference).
    // Components use raw zinc/emerald/amber/rose/sky utilities. zinc-900 (teal) is ink and the fill for dark bands,
    // dark cards and secondary buttons; sky is the accent: sky-700 fills the one primary button and colors links,
    // sky-300 is the primary on dark bands; zinc-100 is the section band (D-048, D-049).
    // Body text uses text-body (#27272a, neutral dark grey, 14.9:1), never a teal zinc shade (D-036).
    // zinc-600 (#0d9488) is 3.74:1 on white, large or decorative text only.
    body: '#27272a',
    zinc: {
      50: '#f1f4f4', 100: '#dee6e6', 200: '#c6d5d4', 300: '#bdcdcc', 400: '#a1a1aa',
      500: '#62626a', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a', 950: '#042f2e',
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
      50: '#f3fafe', 100: '#b3e5fc', 200: '#81d4fa', 300: '#4fc3f7', 400: '#29b6f6',
      500: '#039be5', 600: '#0288d1', 700: '#016aa8', 800: '#01579b', 900: '#014a80', 950: '#012e4f',
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
