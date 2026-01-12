'use client'

import { createContext, useContext, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Accordion Component (FAQ style)
 *
 * Collapsible content sections.
 * Reference: .claude/skills/frontend-design/SKILL.md
 *
 * @example
 * <Accordion>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>What is automation?</AccordionTrigger>
 *     <AccordionContent>
 *       Automation is the process of...
 *     </AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 */

interface AccordionContextValue {
  value: string[]
  toggleItem: (itemValue: string) => void
  type: 'single' | 'multiple'
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

function useAccordionContext() {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion provider')
  }
  return context
}

interface AccordionItemContextValue {
  value: string
  isOpen: boolean
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null)

function useAccordionItemContext() {
  const context = useContext(AccordionItemContext)
  if (!context) {
    throw new Error('AccordionTrigger/Content must be used within an AccordionItem')
  }
  return context
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Allow multiple items open or only one */
  type?: 'single' | 'multiple'
  /** Default open items */
  defaultValue?: string[]
}

export function Accordion({
  type = 'single',
  defaultValue = [],
  className,
  children,
  ...props
}: AccordionProps) {
  const [value, setValue] = useState<string[]>(defaultValue)

  const toggleItem = (itemValue: string) => {
    if (type === 'single') {
      setValue(prev => (prev.includes(itemValue) ? [] : [itemValue]))
    } else {
      setValue(prev =>
        prev.includes(itemValue)
          ? prev.filter(v => v !== itemValue)
          : [...prev, itemValue]
      )
    }
  }

  return (
    <AccordionContext.Provider value={{ value, toggleItem, type }}>
      <div
        className={cn(
          'border border-neutral-200 rounded-lg overflow-hidden',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Unique value for this item */
  value: string
}

export function AccordionItem({
  value,
  className,
  children,
  ...props
}: AccordionItemProps) {
  const { value: openItems } = useAccordionContext()
  const isOpen = openItems.includes(value)

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div
        className={cn(
          'border-b border-neutral-200 last:border-b-0',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  const { toggleItem } = useAccordionContext()
  const { value, isOpen } = useAccordionItemContext()

  return (
    <button
      type="button"
      onClick={() => toggleItem(value)}
      className={cn(
        'w-full px-6 py-5',
        'flex justify-between items-center',
        'text-left text-base font-medium text-neutral-900',
        'hover:bg-neutral-50 transition-colors',
        className
      )}
      aria-expanded={isOpen}
      {...props}
    >
      {children}
      <svg
        className={cn(
          'w-5 h-5 text-neutral-500 flex-shrink-0',
          'transition-transform duration-base',
          isOpen && 'rotate-180'
        )}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
  const { isOpen } = useAccordionItemContext()

  return (
    <div
      className={cn(
        'grid transition-all duration-base',
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      )}
    >
      <div className="overflow-hidden">
        <div
          className={cn(
            'px-6 pb-5 text-sm text-neutral-600 leading-relaxed',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion
