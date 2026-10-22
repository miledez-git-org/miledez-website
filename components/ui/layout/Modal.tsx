'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Modal Component
 *
 * Dialog/modal overlay with header, body, and footer.
 *
 * @example
 * <Modal open={isOpen} onClose={handleClose}>
 *   <ModalHeader>Edit Profile</ModalHeader>
 *   <ModalBody>Form content here</ModalBody>
 *   <ModalFooter>
 *     <Button variant="ghost" onClick={handleClose}>Cancel</Button>
 *     <Button variant="primary">Save</Button>
 *   </ModalFooter>
 * </Modal>
 */

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the modal is open */
  open: boolean
  /** Callback when modal should close */
  onClose: () => void
  /** Max width of modal */
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
}

export function Modal({
  open,
  onClose,
  size = 'md',
  className,
  children,
  ...props
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (open) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!open) return null

  return (
    <div
      className={cn(
        'fixed inset-0 z-[1000]',
        'flex items-center justify-center',
        'bg-zinc-950/50 backdrop-blur-sm'
      )}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={modalRef}
        className={cn(
          'bg-white rounded-xl shadow-xl',
          'w-[90%] max-h-[90vh] overflow-hidden',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Close button callback (optional, renders close button) */
  onClose?: () => void
}

export function ModalHeader({
  onClose,
  className,
  children,
  ...props
}: ModalHeaderProps) {
  return (
    <div
      className={cn(
        'px-6 py-5 border-b border-zinc-200',
        'flex justify-between items-center',
        className
      )}
      {...props}
    >
      <h2 className="text-lg font-semibold text-zinc-900">{children}</h2>
      {onClose && (
        <button
          onClick={onClose}
          className={cn(
            'w-8 h-8 flex items-center justify-center',
            'text-zinc-500 hover:text-zinc-900',
            'hover:bg-zinc-100 rounded-md',
            'transition-colors'
          )}
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ModalBody({ className, children, ...props }: ModalBodyProps) {
  return (
    <div
      className={cn('p-6 overflow-y-auto', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ModalFooter({ className, children, ...props }: ModalFooterProps) {
  return (
    <div
      className={cn(
        'px-6 py-4 border-t border-zinc-200 bg-zinc-50',
        'flex justify-end gap-3',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Modal
