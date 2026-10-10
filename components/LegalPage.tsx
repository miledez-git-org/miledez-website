import HeaderWithContact from '@/components/HeaderWithContact'
import Footer from '@/components/Footer'
import { getDict, type Locale } from '@/lib/i18n'

/** Terms of use / privacy policy, rendered from the i18n dictionary. */
export default function LegalPage({ page, locale = 'pt' }: { page: 'terms' | 'privacy'; locale?: Locale }) {
  const content = getDict(locale)[page]

  return (
    <>
      <HeaderWithContact locale={locale} />
      <main id="main-content" className="min-h-screen bg-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h1 className="heading-display text-3xl md:text-4xl text-brand-black mb-8">
            {content.heading}
          </h1>

          <p className="text-neutral-600 mb-8">{content.updated}</p>

          <div className="prose prose-neutral max-w-none space-y-8">
            {content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-brand-black mb-4">{section.title}</h2>
                {section.intro && (
                  <p className="text-neutral-600 leading-relaxed mb-4">{section.intro}</p>
                )}
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-neutral-600 leading-relaxed">{paragraph}</p>
                ))}
                {section.items && (
                  <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                    {section.items.map((item) => (
                      <li key={item.text}>
                        {item.lead && <strong>{item.lead}</strong>} {item.text}
                      </li>
                    ))}
                  </ul>
                )}
                {section.contact && (
                  <p className="text-neutral-600 mt-4">
                    <strong>{section.contact.emailLabel}</strong> {section.contact.email}<br />
                    <strong>{section.contact.addressLabel}</strong> {section.contact.address}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  )
}
