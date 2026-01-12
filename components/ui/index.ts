/**
 * mil&dez UI Component Library
 *
 * React components that match the UI kit exactly.
 * Reference: global-resources/brand-assets/ui-kit/ui-kit.html
 *
 * Usage:
 *   import { Button, Badge, Input } from '@/components/ui'
 *
 * Token sync:
 *   npx tsx components/ui/tokens/tailwind-sync.ts
 */

// Primitives
export * from './primitives'

// Feedback
export * from './feedback'

// Re-export design tokens for programmatic use
export { designSystemTheme } from './tokens/generated-theme'
