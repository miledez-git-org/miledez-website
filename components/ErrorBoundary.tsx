'use client'

import React, { Component, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  /** Custom fallback component to render on error */
  fallback?: ReactNode
  /** Callback when an error occurs */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  /** Whether to show a retry button */
  showRetry?: boolean
  /** Custom retry handler */
  onRetry?: () => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

/**
 * Error Boundary component for graceful error handling
 *
 * Usage:
 * ```tsx
 * <ErrorBoundary fallback={<ErrorFallback />}>
 *   <MyComponent />
 * </ErrorBoundary>
 * ```
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    console.error('ErrorBoundary caught an error:', error, errorInfo)

    // Call optional error handler
    this.props.onError?.(error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null })
    this.props.onRetry?.()
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback provided
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default fallback UI
      return (
        <DefaultErrorFallback
          error={this.state.error}
          showRetry={this.props.showRetry ?? true}
          onRetry={this.handleRetry}
        />
      )
    }

    return this.props.children
  }
}

/**
 * Default error fallback component
 */
function DefaultErrorFallback({
  error,
  showRetry = true,
  onRetry
}: {
  error: Error | null
  showRetry?: boolean
  onRetry?: () => void
}) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[200px] p-8 text-center"
      role="alert"
    >
      {/* Error icon */}
      <div className="w-16 h-16 mb-4 flex items-center justify-center border-2 border-brand-accent text-brand-accent">
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      </div>

      {/* Error message */}
      <h3 className="text-lg font-medium text-brand-black mb-2">
        Algo deu errado
      </h3>
      <p className="text-sm text-brand-muted mb-6 max-w-md">
        Ocorreu um erro ao carregar este conteúdo. Por favor, tente novamente.
      </p>

      {/* Error details (development only) */}
      {process.env.NODE_ENV === 'development' && error && (
        <details className="mb-6 text-left w-full max-w-md">
          <summary className="text-xs text-brand-muted cursor-pointer hover:text-brand-text">
            Detalhes do erro
          </summary>
          <pre className="mt-2 p-3 bg-gray-100 text-xs overflow-auto rounded text-red-600">
            {error.message}
            {error.stack && `\n\n${error.stack}`}
          </pre>
        </details>
      )}

      {/* Retry button */}
      {showRetry && onRetry && (
        <button
          onClick={onRetry}
          className="btn-secondary px-6 py-3 text-sm font-medium border border-brand-border hover:border-brand-accent hover:text-brand-accent"
        >
          Tentar novamente
        </button>
      )}
    </div>
  )
}

/**
 * Minimal inline error fallback for smaller components
 */
export function InlineErrorFallback({
  message = 'Erro ao carregar',
  onRetry
}: {
  message?: string
  onRetry?: () => void
}) {
  return (
    <div
      className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-sm"
      role="alert"
    >
      <svg
        className="w-4 h-4 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <span className="flex-1">{message}</span>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-red-800 hover:text-red-900 underline"
        >
          Retry
        </button>
      )}
    </div>
  )
}

/**
 * Section error fallback - styled to match site design
 */
export function SectionErrorFallback({
  title = 'Seção indisponível',
  onRetry
}: {
  title?: string
  onRetry?: () => void
}) {
  return (
    <div
      className="py-16 px-6 text-center border border-brand-border bg-bg-muted"
      role="alert"
    >
      <div className="max-w-md mx-auto">
        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-brand-border text-brand-muted">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-brand-black mb-2">{title}</h3>
        <p className="text-sm text-brand-muted mb-4">
          Esta seção não pôde ser carregada. Tente recarregar a página.
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="text-sm text-brand-accent hover:text-brand-accent-dark underline"
          >
            Tentar novamente
          </button>
        )}
      </div>
    </div>
  )
}

export default ErrorBoundary
