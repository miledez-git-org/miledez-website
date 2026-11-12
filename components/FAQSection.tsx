'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/layout'
import { getDict, type Locale } from '@/lib/i18n'

export default function FAQSection({ locale = 'pt' }: { locale?: Locale }) {
  const t = getDict(locale).home.faq
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="duvidas" className="bg-white py-24 md:py-36">
      <div
        className="max-w-7xl mx-auto px-6 md:px-10"
        ref={ref}
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,22rem)_1fr] gap-12 lg:gap-24 items-start">
          {/* Section header: stays in view while the list scrolls */}
          <div className="lg:sticky lg:top-28">
            <h2 className="heading-display text-[2.25rem] md:text-5xl text-zinc-900">
              {t.titleLead}{' '}
              <span className="text-zinc-900">{t.titleAccent}</span>
            </h2>
            <p className="mt-6 text-lg text-body leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <Accordion className="rounded-none border-0 border-b border-zinc-200 bg-white">
            {t.items.map((item, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger icon="plus" className="px-0 py-6 text-lg font-semibold text-zinc-900 gap-6 hover:bg-transparent hover:text-sky-700">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-0 pb-6 pr-10 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
