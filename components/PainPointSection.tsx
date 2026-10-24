'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { getDict, type Locale } from '@/lib/i18n'

const RepeatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
)

const LayersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
)

const AlertTriangleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const painIcons = [RepeatIcon, LayersIcon, AlertTriangleIcon]

export default function PainPointSection({ locale = 'pt' }: { locale?: Locale }) {
  const t = getDict(locale).home.pain
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="problemas" className="bg-zinc-100 py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        {/* Section header */}
        <div
          className="max-w-2xl"
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-zinc-900 leading-tight">
            {t.titleLead}{' '}
            <span className="text-zinc-900">{t.titleAccent}</span>
          </h2>
          <p className="mt-4 text-lg text-body leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 3-column pain points */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {t.points.map((point, index) => {
            const Icon = painIcons[index]
            const delay = 200 + index * 100

            return (
              <div
                key={index}
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
                }}
              >
                <div className="w-10 h-10 flex items-center justify-start text-zinc-900">
                  <Icon />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-base text-body leading-relaxed">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA — anchor to workflow examples */}
        <div className="mt-12">
          <a
            href="#exemplos"
            className="btn btn-outline btn-lg"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
