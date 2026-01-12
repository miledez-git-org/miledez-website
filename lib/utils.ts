import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines class names with Tailwind CSS conflict resolution.
 * Use this for all className compositions in UI components.
 *
 * @example
 * cn('px-4 py-2', 'px-6') // => 'py-2 px-6' (px-4 overridden)
 * cn('text-red-500', isActive && 'text-blue-500') // conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
