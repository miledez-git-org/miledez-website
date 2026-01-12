'use client'

import { cn } from '@/lib/utils'

/**
 * Pagination Component
 *
 * Page navigation with numbered pages.
 * Reference: .claude/skills/frontend-design/SKILL.md
 *
 * @example
 * <Pagination
 *   currentPage={1}
 *   totalPages={10}
 *   onPageChange={setCurrentPage}
 * />
 */

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  /** Current active page (1-indexed) */
  currentPage: number
  /** Total number of pages */
  totalPages: number
  /** Callback when page changes */
  onPageChange: (page: number) => void
  /** Number of sibling pages to show on each side */
  siblings?: number
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblings = 1,
  className,
  ...props
}: PaginationProps) {
  const getPageNumbers = (): (number | 'ellipsis')[] => {
    const pages: (number | 'ellipsis')[] = []

    // Always show first page
    pages.push(1)

    // Calculate range around current page
    const rangeStart = Math.max(2, currentPage - siblings)
    const rangeEnd = Math.min(totalPages - 1, currentPage + siblings)

    // Add ellipsis after first page if needed
    if (rangeStart > 2) {
      pages.push('ellipsis')
    }

    // Add pages in range
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i)
    }

    // Add ellipsis before last page if needed
    if (rangeEnd < totalPages - 1) {
      pages.push('ellipsis')
    }

    // Always show last page (if more than 1 page)
    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav
      aria-label="Pagination"
      className={cn('flex items-center gap-1', className)}
      {...props}
    >
      {/* Previous button */}
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </PaginationButton>

      {/* Page numbers */}
      {pageNumbers.map((page, index) =>
        page === 'ellipsis' ? (
          <span
            key={`ellipsis-${index}`}
            className="w-9 h-9 flex items-center justify-center text-neutral-400"
          >
            ...
          </span>
        ) : (
          <PaginationButton
            key={page}
            onClick={() => onPageChange(page)}
            active={page === currentPage}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </PaginationButton>
        )
      )}

      {/* Next button */}
      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </PaginationButton>
    </nav>
  )
}

interface PaginationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

function PaginationButton({
  active = false,
  className,
  children,
  ...props
}: PaginationButtonProps) {
  return (
    <button
      className={cn(
        'w-9 h-9 flex items-center justify-center',
        'text-sm font-medium rounded-md',
        'border transition-all duration-fast',
        active
          ? 'text-accent-slate border-accent-slate bg-accent-slate-subtle'
          : 'text-neutral-600 border-transparent hover:bg-neutral-100',
        props.disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Pagination
