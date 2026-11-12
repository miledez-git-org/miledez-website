'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { getDict, type Locale } from '@/lib/i18n'

export default function NumbersSection({ locale = 'pt' }: { locale?: Locale }) {
  const t = getDict(locale).home.numbers
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <section className="bg-white py-24 md:py-36">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="heading-display text-[2.25rem] md:text-5xl lg:text-6xl text-zinc-900">{t.title}</h2>
        <dl className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
          {t.items.map((item, i) => (
            <div
              key={item.label}
              className="flex flex-col-reverse justify-end border-t-[1.5px] border-sky-600 py-8 md:py-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${100 + i * 100}ms`,
              }}
            >
              <dt className="mt-3 text-base font-medium text-zinc-500">{item.label}</dt>
              <dd className="heading-display text-4xl md:text-5xl lg:text-[2.5rem] xl:text-[2.75rem] text-zinc-900 tabular-nums whitespace-nowrap">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
