'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/layout'
import { getDict, type Locale } from '@/lib/i18n'

export default function FAQSection({ locale = 'pt' }: { locale?: Locale }) {
  const t = getDict(locale).home.faq
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="duvidas" className="bg-white py-24 md:py-32">
      <div
        className="max-w-7xl mx-auto px-6 md:px-10"
        ref={ref}
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Section header */}
        <div className="max-w-2xl">
          <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-zinc-900 leading-tight">
            {t.titleLead}{' '}
            <span className="text-zinc-900">{t.titleAccent}</span>
          </h2>
          <p className="mt-4 text-lg text-body leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <Accordion className="mt-12 max-w-3xl rounded-none bg-white">
          {t.items.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-lg text-zinc-900 gap-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
