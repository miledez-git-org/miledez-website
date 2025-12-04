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
      {/* Connection lines - horizontal on desktop, vertical on mobile */}
      <div className="hidden md:flex absolute top-[60px] left-[10%] right-[10%]">
        {steps.slice(0, -1).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-px bg-brand-border"
          />
        ))}
      </div>

      {/* Data pulses - desktop only */}
      <div className="hidden md:flex absolute top-[52px] left-[10%] right-[10%] h-2 overflow-hidden">
        {steps.slice(0, -1).map((_, i) => (
          <div key={i} className="flex-1 relative overflow-hidden">
            <div
              className="absolute w-2 h-2 bg-brand-accent"
              style={{
                opacity: 0,
                left: 0,
                animation: isAnimated ? `movePulse 1.5s ${1500 + i * 500}ms infinite` : 'none',
              }}
            />
          </div>
        ))}
      </div>

      {/* Steps - stack vertically on mobile, horizontal on desktop */}
      <div className="flex flex-col md:flex-row md:justify-between relative z-10 gap-6 md:gap-0">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex md:flex-col md:flex-1 items-center md:text-center transition-all duration-500 gap-4 md:gap-0"
            style={{
              opacity: isAnimated ? 1 : 0,
              transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${200 + i * 200}ms`,
            }}
          >
            <div
              className={`w-12 h-12 md:w-14 md:h-14 md:mx-auto md:mb-4 flex-shrink-0 flex items-center justify-center border bg-white relative z-10 ${i === accentStep
                  ? 'border-brand-accent text-brand-accent'
                  : 'border-brand-black text-brand-black'
                }`}
            >
              {step.icon}
            </div>
            <div className="md:text-center">
              <h4 className="text-sm font-medium mb-1 md:mb-2 text-brand-black">{step.title}</h4>
              <p className="text-xs md:max-w-[140px] md:mx-auto text-brand-text">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
