/**
 * mil&dez UI Component Library
 *
 * React components implementing the brand design system.
 * Reference: .claude/skills/frontend-design/SKILL.md
 *
 * Usage:
 *   import { Button, Badge, Input, Card, Modal } from '@/components/ui'
 *
 * Token sync:
 *   npx tsx components/ui/tokens/tailwind-sync.ts
 */

// Primitives - Base interactive elements
export * from './primitives'

// Typography - Text and brand elements
export * from './typography'

// Feedback - Status and notification components
export * from './feedback'

// Cards - Container components for content
export * from './cards'

// Navigation - Navigation and routing components
export * from './navigation'

// Data Display - Components for displaying data
export * from './data-display'

// Layout - Structural and container components
export * from './layout'

// Re-export design tokens for programmatic use
export { designSystemTheme } from './tokens/generated-theme'
