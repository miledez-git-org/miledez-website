'use client'

import { useState, useEffect } from 'react'

/**
 * HeroWorkflowSimple - Minimal horizontal workflow for hero section
 * Shows: Trigger → Process → Output with animated elbow connectors
 *
 * Card layout (absolute positioning):
 * - Trigger: top=0, left=0, width=200px, height~60px
 * - Process: top=100, left=140, width=200px, height~80px (with progress bar)
 * - Output:  top=210, left=280, width=200px, height~60px
 *
 * Connector routing:
 * - Line 1: Bottom-center of Trigger → Left-center of Process
 * - Line 2: Right-center of Process → Top-center of Output
 */

const ACCENT_BLUE = '#3b82f6'
const ACCENT_GREEN = '#22c55e'
const LINE_INACTIVE = '#e5e5e5'
const LINE_ACTIVE = '#d4d4d4'

export default function HeroWorkflowSimple() {
  const [step, setStep] = useState(-1)

  useEffect(() => {
    if (step === -1) {
      const timer = setTimeout(() => setStep(0), 800)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      if (step >= 2) {
        setTimeout(() => {
          setStep(-1)
        }, 2500)
      } else {
        setStep((prev) => prev + 1)
      }
    }, step === 0 ? 1000 : 1200)

    return () => clearTimeout(timer)
  }, [step])

  const triggerActive = step >= 0
  const processActive = step >= 1
  const outputActive = step >= 2

  // Calculate progress bar width based on animation state
  // Starts at 0% when process becomes active, goes to 60%, then 100% when output is active
  const getProgressWidth = () => {
    if (!processActive) return '0%'
    if (outputActive) return '100%'
    return '60%'
  }

  return (
    <div className="relative w-full max-w-lg mx-auto" style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* SVG Connectors - z-index 0 so lines render behind cards */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
        viewBox="0 0 500 320"
        preserveAspectRatio="xMidYMid meet"
      >
        {/*
          Line 1: Trigger (bottom-center) → Process (left-center)
          Trigger card: top=0, left=0, width=200, height≈60
          Bottom-center of trigger: x=100, y=60
          Process card: top=100, left=140, width=200, height≈80
          Left-center of process: x=140, y=140 (100 + 80/2)
          Path: go down from trigger, then curve right to process left edge
        */}
        <path
          d="M 100 60 L 100 100 Q 100 115 115 115 L 140 115 L 140 140"
          fill="none"
          stroke={processActive ? LINE_ACTIVE : LINE_INACTIVE}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: 'stroke 600ms ease' }}
        />
        {/* Start dot at trigger bottom */}
        <circle
          cx="100"
          cy="60"
          r="3"
          fill={processActive ? LINE_ACTIVE : LINE_INACTIVE}
          style={{ transition: 'fill 600ms ease' }}
        />

        {/*
          Line 2: Process (right-center) → Output (top-center)
          Process card: top=100, left=140, width=200, height≈80
          Right-center of process: x=340 (140+200), y=140 (100 + 80/2)
          Output card: top=210, left=280, width=200
          Top-center of output: x=380 (280+100), y=210
          Path: go right from process, then curve down to output top
        */}
        <path
          d="M 340 140 L 365 140 Q 380 140 380 155 L 380 210"
          fill="none"
          stroke={outputActive ? LINE_ACTIVE : LINE_INACTIVE}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: 'stroke 600ms ease' }}
        />
        {/* End dot at output top */}
        <circle
          cx="380"
          cy="210"
          r="3"
          fill={outputActive ? LINE_ACTIVE : LINE_INACTIVE}
          style={{ transition: 'fill 600ms ease' }}
        />
      </svg>

      {/* Cards Container - z-index 1 so cards render above lines */}
      <div className="relative" style={{ minHeight: '320px', zIndex: 1 }}>
        {/* Trigger Card */}
        <div
          className="absolute"
          style={{
            top: 0,
            left: 0,
            width: '200px',
            opacity: triggerActive ? 1 : 0.5,
            transform: triggerActive ? 'translateY(0) scale(1)' : 'translateY(0) scale(0.98)',
            transition: 'all 600ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <div
            className="bg-white rounded-xl p-4 border"
            style={{
              borderColor: triggerActive ? '#e5e5e5' : '#f5f5f5',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.06)',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: triggerActive ? `${ACCENT_BLUE}15` : '#f5f5f5' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT_BLUE} strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">Evento</p>
                <p className="text-xs text-neutral-500">Gatilho</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Card */}
        <div
          className="absolute"
          style={{
            top: '100px',
            left: '140px',
            width: '200px',
            opacity: processActive ? 1 : 0.5,
            transform: processActive ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.96)',
            transition: 'all 600ms cubic-bezier(0.22, 1, 0.36, 1) 100ms',
          }}
        >
          <div
            className="bg-white rounded-xl p-4 border"
            style={{
              borderColor: processActive ? '#e5e5e5' : '#f5f5f5',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.06)',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: processActive ? `${ACCENT_BLUE}15` : '#f5f5f5' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT_BLUE} strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">Automação</p>
                <p className="text-xs text-neutral-500">Processando</p>
              </div>
            </div>
            {/* Progress indicator - always visible, animates from 0% */}
            <div className="mt-3">
              <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: getProgressWidth(),
                    background: ACCENT_BLUE,
                    transition: 'width 800ms ease',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Output Card */}
        <div
          className="absolute"
          style={{
            top: '210px',
            left: '280px',
            width: '200px',
            opacity: outputActive ? 1 : 0.5,
            transform: outputActive ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.96)',
            transition: 'all 600ms cubic-bezier(0.22, 1, 0.36, 1) 200ms',
          }}
        >
          <div
            className="bg-white rounded-xl p-4"
            style={{
              border: outputActive ? `2px solid ${ACCENT_GREEN}` : '1px solid #e5e5e5',
              boxShadow: outputActive
                ? `0 0 0 1px rgba(34, 197, 94, 0.1), 0 4px 12px rgba(34, 197, 94, 0.15)`
                : '0 0 0 1px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.06)',
              transition: 'all 400ms ease',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: outputActive ? `${ACCENT_GREEN}15` : '#f5f5f5' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT_GREEN} strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">Resultado</p>
                <p className="text-xs text-neutral-500">Concluído</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
