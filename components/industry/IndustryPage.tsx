'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ChallengeCard from '@/components/industry/ChallengeCard'
import IndustryIntegrations from '@/components/industry/IndustryIntegrations'
import { WorkflowVisualCompact, getHeroPreset, getCompactWorkflows } from '@/components/WorkflowVisual'
import type { Industry } from '@/components/WorkflowVisual'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { stepIcons } from '@/components/Icons'
import { getDict, type Locale } from '@/lib/i18n'

type Integration = { name: string; logo: string }

/** Language-independent parts of each industry page. Copy lives in lib/i18n. */
const industryMeta: Record<
  Industry,
  {
    copyKey: 'health' | 'services' | 'agribusiness'
    icons: (keyof typeof stepIcons)[]
    integrations: Integration[]
  }
> = {
  saude: {
    copyKey: 'health',
    icons: ['folder', 'creditCard', 'calendar'],
    integrations: [
      { name: 'WhatsApp', logo: 'whatsapp' },
      { name: 'Doctoralia', logo: 'doctoralia' },
      { name: 'iClinic', logo: 'iclinic' },
      { name: 'Google Calendar', logo: 'google-calendar' },
      { name: 'Gmail', logo: 'gmail' },
      { name: 'Google Drive', logo: 'google-drive' },
      { name: 'Excel', logo: 'excel' },
      { name: 'Google Sheets', logo: 'google-sheets' },
      { name: 'Zoom', logo: 'zoom' },
      { name: 'ContaAzul', logo: 'contaazul' },
      { name: 'DocuSign', logo: 'docusign' },
      { name: 'Word', logo: 'word' },
      { name: 'Outlook', logo: 'outlook' },
      { name: 'OneDrive', logo: 'onedrive' },
      { name: 'Trello', logo: 'trello' },
      { name: 'Telegram', logo: 'telegram' },
      { name: 'Typeform', logo: 'typeform' },
      { name: 'Pix', logo: 'pix' },
    ],
  },
  servicos: {
    copyKey: 'services',
    icons: ['calendar', 'document', 'creditCard'],
    integrations: [
      { name: 'WhatsApp', logo: 'whatsapp' },
      { name: 'Gmail', logo: 'gmail' },
      { name: 'Outlook', logo: 'outlook' },
      { name: 'Google Calendar', logo: 'google-calendar' },
      { name: 'Google Drive', logo: 'google-drive' },
      { name: 'OneDrive', logo: 'onedrive' },
      { name: 'Excel', logo: 'excel' },
      { name: 'Word', logo: 'word' },
      { name: 'Google Sheets', logo: 'google-sheets' },
      { name: 'Trello', logo: 'trello' },
      { name: 'Notion', logo: 'notion' },
      { name: 'Slack', logo: 'slack' },
      { name: 'Zoom', logo: 'zoom' },
      { name: 'ContaAzul', logo: 'contaazul' },
      { name: 'Pipedrive', logo: 'pipedrive' },
      { name: 'DocuSign', logo: 'docusign' },
      { name: 'HubSpot', logo: 'hubspot' },
      { name: 'Asana', logo: 'asana' },
    ],
  },
  agronegocio: {
    copyKey: 'agribusiness',
    icons: ['mail', 'document', 'sync'],
    integrations: [
      { name: 'WhatsApp', logo: 'whatsapp' },
      { name: 'Google Sheets', logo: 'google-sheets' },
      { name: 'Excel', logo: 'excel' },
      { name: 'Google Drive', logo: 'google-drive' },
      { name: 'Gmail', logo: 'gmail' },
      { name: 'ContaAzul', logo: 'contaazul' },
      { name: 'Notion', logo: 'notion' },
      { name: 'Trello', logo: 'trello' },
      { name: 'Google Calendar', logo: 'google-calendar' },
      { name: 'Word', logo: 'word' },
      { name: 'Pix', logo: 'pix' },
      { name: 'Outlook', logo: 'outlook' },
    ],
  },
}

interface IndustryPageProps {
  industry: Industry
  locale?: Locale
}

export default function IndustryPage({ industry, locale = 'pt' }: IndustryPageProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  const meta = industryMeta[industry]
  const copy = getDict(locale).industry[meta.copyKey]
  const workflows = getCompactWorkflows(industry, locale)

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} onContactClick={() => setIsContactModalOpen(true)} />

      {/* Hero */}
      <section className="min-h-screen bg-white flex items-center relative pt-24 md:pt-0">
        <div className="px-6 md:px-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-10 items-center">
            <div className="max-w-xl flex-1">
              <div className="inline-flex items-center px-4 py-2 mb-6 border-l-4 border-zinc-900">
                <span className="text-sm font-semibold uppercase tracking-widest text-zinc-900">
                  {copy.badge}
                </span>
              </div>
              <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6 text-zinc-900">
                {copy.heroTitle[0]}<br />{copy.heroTitle[1]}
              </h1>
              <p className="text-xl mb-10 max-w-lg text-body leading-relaxed">
                {copy.heroText}
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-primary btn-xl"
              >
                {copy.heroCta}
              </button>
            </div>
            <WorkflowVisualCompact
              {...getHeroPreset(industry, locale)}
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-28 md:py-40 bg-zinc-50">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-14 md:mb-16">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-zinc-900">{copy.challengesTitle}</h2>
          </div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {copy.challenges.map((challenge, index) => (
              <ChallengeCard
                key={index}
                icon={stepIcons[meta.icons[index]]}
                title={challenge.title}
                description={challenge.description}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Workflows */}
      <section id="workflows" className="py-28 md:py-40 bg-white">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-14 md:mb-16">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-zinc-900">{copy.workflowsTitle}</h2>
            <p className="mt-4 text-lg text-body">{copy.workflowsText}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {workflows.map((workflow, index) => (
              <WorkflowVisualCompact
                key={index}
                title={workflow.title}
                subtitle={copy.workflowSubtitles[index]}
                steps={workflow.steps}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="resultados" className="py-28 md:py-40 bg-zinc-50">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          {/* Metrics grid removed until real client results exist (see plans/homepage-storytelling-copy-plan.md) */}
          <div className="max-w-2xl">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] mb-6 text-zinc-900">{copy.resultsTitle}</h2>
            <p className="text-xl leading-relaxed text-body">{copy.resultsParagraphs[0]}</p>
            <p className="text-xl leading-relaxed mt-6 text-body">{copy.resultsParagraphs[1]}</p>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integracoes" className="py-28 md:py-40 bg-white">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-14 md:mb-16">
            <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-zinc-900">{copy.integrationsTitle}</h2>
            <p className="mt-4 text-base text-body">{copy.integrationsText}</p>
          </div>

          <IndustryIntegrations integrations={meta.integrations} />
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-28 md:py-40 bg-zinc-50">
        <div className="px-6 md:px-10 max-w-3xl mx-auto text-center">
          <h2 className="heading-display text-[2rem] md:text-[2.5rem] text-zinc-900">{copy.ctaTitle}</h2>
          <p className="mt-4 text-lg max-w-md mx-auto text-body">{copy.ctaText}</p>
          <div className="mt-10 md:mt-12">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="btn btn-primary btn-xl"
            >
              {copy.ctaButton}
            </button>
          </div>
        </div>
      </section>

      <Footer locale={locale} />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        locale={locale}
      />
    </div>
  )
}
