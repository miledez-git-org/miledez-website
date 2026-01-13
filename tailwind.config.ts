import type { Config } from 'tailwindcss'
import { designSystemTheme } from './components/ui/tokens/generated-theme'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Design system tokens (from brand-tokens.json)
      ...designSystemTheme,
      fontFamily: {
        ...(designSystemTheme?.fontFamily ?? {}),
        sans: [
          'var(--font-inter)',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          'var(--font-manrope)',
          'var(--font-inter)',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        serif: [
          'Georgia',
          'Cambria',
          'Times New Roman',
          'serif',
        ],
      },
      spacing: {
        '18': '4.5rem',
        '128': '8rem',
      },
      boxShadow: {
        ...(designSystemTheme?.boxShadow ?? {}),
        'accent-glow': '0 0 20px rgba(139, 32, 32, 0.3)',
        'accent-glow-strong': '0 0 30px rgba(139, 32, 32, 0.4)',
        'success-glow': '0 0 20px rgba(22, 163, 74, 0.3)',
      },
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(24px)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-24px)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(24px)' },
          '100%': { transform: 'translateX(0)' },
        },
        drawPath: {
          '0%': { strokeDashoffset: 'var(--path-length, 100)' },
          '100%': { strokeDashoffset: '0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        clockShrink: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.85)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        connectionPulse: {
          '0%': { strokeDashoffset: '20', opacity: '0.3' },
          '50%': { opacity: '1' },
          '100%': { strokeDashoffset: '0', opacity: '0.3' },
        },
        flowDown: {
          '0%': { top: '0', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: 'calc(100% - 8px)', opacity: '0' },
        },
        flowUp: {
          '0%': { bottom: '0', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { bottom: 'calc(100% - 8px)', opacity: '0' },
        },
        triggerPulse: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.15)', opacity: '0.6' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        },
      },
      animation: {
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left': 'slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right': 'slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'draw-path': 'drawPath 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'clock-shrink': 'clockShrink 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 4s ease-in-out infinite',
        'connection-pulse': 'connectionPulse 2s ease-in-out infinite',
        'flow-down': 'flowDown 1.2s ease-out infinite',
        'flow-up': 'flowUp 1.2s ease-out infinite',
        'trigger-pulse': 'triggerPulse 0.8s ease-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
