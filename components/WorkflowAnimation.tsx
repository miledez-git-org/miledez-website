'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface Step {
  icon: ReactNode
  title: string
  desc: string
}

interface WorkflowAnimationProps {
  steps: Step[]
  accentStep?: number
}

export default function WorkflowAnimation({ steps, accentStep = -1 }: WorkflowAnimationProps) {
  const [isAnimated, setIsAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative py-8">
      {/* Connection lines */}
      <div className="absolute top-[60px] left-[10%] right-[10%] flex">
        {steps.slice(0, -1).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-px bg-brand-border transition-transform duration-500"
            style={{
              transformOrigin: 'left',
              transform: isAnimated ? 'scaleX(1)' : 'scaleX(0)',
              transitionDelay: `${400 + i * 300}ms`,
            }}
          />
        ))}
      </div>

      {/* Data pulses */}
      <div className="absolute top-[52px] left-[10%] right-[10%] flex h-2 overflow-hidden">
        {steps.slice(0, -1).map((_, i) => (
          <div key={i} className="flex-1 relative overflow-hidden">
            <div
              className="absolute w-2 h-2 rounded-full bg-brand-accent"
              style={{
                opacity: 0,
                left: 0,
                animation: isAnimated ? `movePulse 1.5s ${1500 + i * 500}ms infinite` : 'none',
              }}
            />
          </div>
        ))}
      </div>

      {/* Steps */}
      <div className="flex justify-between relative z-10">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex-1 text-center transition-all duration-500"
            style={{
              opacity: isAnimated ? 1 : 0,
              transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${200 + i * 200}ms`,
            }}
          >
            <div
              className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center border bg-white relative z-10 ${i === accentStep
                  ? 'border-brand-accent text-brand-accent'
                  : 'border-brand-black text-brand-black'
                }`}
            >
              {step.icon}
            </div>
            <h4 className="text-sm font-medium mb-2 text-brand-black">{step.title}</h4>
            <p className="text-xs max-w-[140px] mx-auto text-brand-text">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
