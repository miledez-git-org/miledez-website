'use client'

import type { ReactNode } from 'react'
import { getDict, type Locale } from '@/lib/i18n'

// One icon per item, in the order of `home.included.items` (Lucide paths).
const ICONS: ReactNode[] = [
  // Development: code
  <g key="code"><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></g>,
  // Hosting: server
  <g key="server"><rect width="20" height="8" x="2" y="2" rx="2" /><rect width="20" height="8" x="2" y="14" rx="2" /><path d="M6 6h.01" /><path d="M6 18h.01" /></g>,
  // Maintenance: wrench
  <g key="wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></g>,
  // Changes: sliders
  <g key="sliders"><path d="M4 21v-7" /><path d="M4 10V3" /><path d="M12 21v-9" /><path d="M12 8V3" /><path d="M20 21v-5" /><path d="M20 12V3" /><path d="M2 14h4" /><path d="M10 8h4" /><path d="M18 16h4" /></g>,
  // Support: chat
  <g key="chat"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" /></g>,
]

export default function IncludedSection({ locale = 'pt' }: { locale?: Locale }) {
  const t = getDict(locale).home.included

  return (
    <section id="incluso" className="bg-zinc-900 py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="heading-display text-[2.25rem] md:text-5xl lg:text-6xl text-white max-w-4xl text-balance">{t.title}</h2>
        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-8">
          {t.items.map((item, i) => (
            <li key={item} className="flex items-center gap-4 border-t-2 border-sky-300 pt-6 lg:flex-col lg:items-start">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-sky-300" aria-hidden="true">
                {ICONS[i]}
              </svg>
              <span className="text-2xl md:text-3xl lg:text-xl xl:text-2xl font-bold tracking-tight text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
