import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'black': '#1a1a1a',
          'dark': '#2d2d2d',
          'text': '#3d3d3d',
          'muted': '#5a5a5a',
          'light': '#6e6e6e',
          'border': '#e0e0e0',
          'accent': '#8b2020',
          'accent-light': '#fef2f2',
          'accent-dark': '#7a1b1b',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

export default config
