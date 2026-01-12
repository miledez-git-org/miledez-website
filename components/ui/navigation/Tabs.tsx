'use client'

import { createContext, useContext, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Tabs Component
 *
 * Tab navigation with content panels.
 * Reference: .claude/skills/frontend-design/SKILL.md
 *
 * @example
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <Tab value="tab1">Tab 1</Tab>
 *     <Tab value="tab2">Tab 2</Tab>
 *   </TabsList>
 *   <TabPanel value="tab1">Content 1</TabPanel>
 *   <TabPanel value="tab2">Content 2</TabPanel>
 * </Tabs>
 */

interface TabsContextValue {
  value: string
  onChange: (value: string) => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabsContext() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider')
  }
  return context
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Default active tab value */
  defaultValue: string
  /** Controlled value */
  value?: string
  /** Callback when tab changes */
  onValueChange?: (value: string) => void
}

export function Tabs({
  defaultValue,
  value: controlledValue,
  onValueChange,
  children,
  className,
  ...props
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const value = controlledValue ?? internalValue

  const onChange = (newValue: string) => {
    setInternalValue(newValue)
    onValueChange?.(newValue)
  }

  return (
    <TabsContext.Provider value={{ value, onChange }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TabsList({ className, children, ...props }: TabsListProps) {
  return (
    <div
      role="tablist"
      className={cn(
        'flex gap-1 border-b border-neutral-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Tab value identifier */
  value: string
}

export function Tab({ value, className, children, ...props }: TabProps) {
  const { value: activeValue, onChange } = useTabsContext()
  const isActive = value === activeValue

  return (
    <button
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      onClick={() => onChange(value)}
      className={cn(
        'px-4 py-3 text-sm font-medium -mb-px',
        'border-b-2 border-transparent',
        'transition-all duration-fast',
        isActive
          ? 'text-accent-slate border-accent-slate'
          : 'text-neutral-600 hover:text-neutral-900',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Panel value (must match corresponding Tab value) */
  value: string
}

export function TabPanel({ value, className, children, ...props }: TabPanelProps) {
  const { value: activeValue } = useTabsContext()

  if (value !== activeValue) {
    return null
  }

  return (
    <div
      role="tabpanel"
      tabIndex={0}
      className={cn('py-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default Tabs
