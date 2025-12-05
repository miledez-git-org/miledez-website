'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionNavButton from '@/components/SectionNavButton'
import DiagnosticoAutomacao from '@/components/DiagnosticoAutomacao'
import { icons, stepIcons } from '@/components/Icons'

export default function Home() {
  const [workflowAnimated, setWorkflowAnimated] = useState(false)
  const workflowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setWorkflowAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    if (workflowRef.current) {
      observer.observe(workflowRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Staggered reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const workflowSteps = [
    { icon: stepIcons.trigger, title: 'Gatilho', desc: 'Evento inicia o processo' },
    { icon: stepIcons.process, title: 'Processamento', desc: 'Dados são transformados' },
    { icon: stepIcons.action, title: 'Ação', desc: 'Sistema executa tarefa' },
    { icon: stepIcons.result, title: 'Resultado', desc: 'Processo concluído' },
  ]

  const integrations = [
    { name: 'WhatsApp', icon: icons.whatsapp },
    { name: 'Gmail', icon: icons.gmail },
    { name: 'Outlook', icon: icons.outlook },
    { name: 'Google Drive', icon: icons.googleDrive },
    { name: 'OneDrive', icon: icons.oneDrive },
    { name: 'Excel', icon: icons.excel },
    { name: 'Word', icon: icons.word },
    { name: 'PDF', icon: icons.pdf },
    { name: 'Google Calendar', icon: icons.googleCalendar },
    { name: 'OpenAI', icon: icons.openai },
    { name: 'Google Sheets', icon: icons.googleSheets },
    { name: 'Slack', icon: icons.slack },
    { name: 'Notion', icon: icons.notion },
    { name: 'Zapier', icon: icons.zapier },
    { name: 'Trello', icon: icons.trello },
  ]

  const industries = [
    { name: 'Saúde e Clínicas', href: '/saude', desc: 'Documentação, faturamento, conformidade' },
    { name: 'Serviços Profissionais', href: '/servicos', desc: 'Contratos, cobrança, relatórios' },
    { name: 'Varejo e E-commerce', href: '/varejo', desc: 'Estoque, pedidos, financeiro' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-24 md:pb-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-[3.5rem] font-medium leading-tight mb-8 text-brand-black tracking-[-0.03em]">
            Automatizamos seus processos.<br />Você foca no que importa.
          </h1>
          <p className="text-xl mb-12 max-w-lg text-brand-text leading-relaxed">
            Conectamos seus sistemas, eliminamos trabalho manual e fazemos sua operação funcionar sozinha.
          </p>
          <a
            href="#contato"
            className="inline-block px-8 py-4 text-sm font-medium text-white bg-brand-accent hover:bg-brand-accent-dark transition-colors"
          >
            Agendar conversa
          </a>
        </div>

        <SectionNavButton href="#como-funciona" label="Como funciona" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* How it works */}
      <section id="como-funciona" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">Como funciona</h2>
          <p className="mt-4 text-lg font-medium text-brand-muted">Processos que rodam automaticamente, 24 horas por dia</p>
        </div>

        <div ref={workflowRef} className="relative py-8">
          {/* Connection lines - desktop only */}
          <div className="hidden md:flex absolute top-[60px] left-[10%] right-[10%]">
            {workflowSteps.slice(0, -1).map((_, i) => (
              <div
                key={i}
                className="flex-1 h-px bg-brand-border transition-transform duration-500"
                style={{
                  transformOrigin: 'left',
                  transform: workflowAnimated ? 'scaleX(1)' : 'scaleX(0)',
                  transitionDelay: `${400 + i * 300}ms`,
                }}
              />
            ))}
          </div>

          {/* Data pulses - desktop only */}
          <div className="hidden md:flex absolute top-[52px] left-[10%] right-[10%] h-2 overflow-hidden">
            {workflowSteps.slice(0, -1).map((_, i) => (
              <div key={i} className="flex-1 relative overflow-hidden">
                <div
                  className="absolute w-2 h-2 bg-brand-accent"
                  style={{
                    opacity: 0,
                    left: 0,
                    animation: workflowAnimated ? `movePulse 1.5s ${1500 + i * 500}ms infinite` : 'none',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Steps - vertical on mobile, horizontal on desktop */}
          <div className="flex flex-col md:flex-row md:justify-between relative z-10 gap-6 md:gap-0">
            {workflowSteps.map((step, i) => (
              <div
                key={i}
                className="flex md:flex-col md:flex-1 items-center md:text-center transition-all duration-500 gap-4 md:gap-0"
                style={{
                  opacity: workflowAnimated ? 1 : 0,
                  transform: workflowAnimated ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${200 + i * 200}ms`,
                }}
              >
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 md:mx-auto md:mb-4 flex-shrink-0 flex items-center justify-center border bg-white relative z-10 ${i === 3 ? 'border-brand-accent text-brand-accent' : 'border-brand-black text-brand-black'
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

        <SectionNavButton href="#integracoes" label="Integrações" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Integrations */}
      <section id="integracoes" className="py-32 px-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">Integrações</h2>
          <p className="mt-4 text-lg font-medium text-brand-muted">Conectamos as ferramentas que você já usa</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 md:gap-12 max-w-4xl mx-auto">
          {integrations.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="text-brand-black">{item.icon}</div>
              <span className="text-xs text-brand-muted text-center">{item.name}</span>
            </div>
          ))}
        </div>

        <SectionNavButton href="#beneficios" label="Benefícios" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Benefits */}
      <section id="beneficios" className="py-32 px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          <div>
            <h3 className="text-lg font-medium mb-4 text-brand-black">Economize tempo</h3>
            <p className="text-sm leading-relaxed text-brand-text">
              Tarefas que levavam horas passam a acontecer em segundos. Sua equipe foca no que realmente importa.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-brand-black">Zero erros</h3>
            <p className="text-sm leading-relaxed text-brand-text">
              Automações não esquecem, não erram digitação, não pulam etapas. Consistência garantida.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-brand-black">Seus sistemas</h3>
            <p className="text-sm leading-relaxed text-brand-text">
              Integramos com as ferramentas que você já usa. Sem trocar de sistema, sem curva de aprendizado.
            </p>
          </div>
        </div>

        <SectionNavButton href="#processo" label="Nosso processo" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Process */}
      <section id="processo" className="py-32 px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
          <div>
            <h2 className="text-[2rem] font-medium mb-12 text-brand-black tracking-[-0.02em]">Nosso processo</h2>
            <p className="text-lg text-brand-text leading-relaxed">
              Entendemos sua operação, identificamos oportunidades de automação e implementamos soluções que funcionam.
            </p>
          </div>
          <div className="space-y-8">
            {[
              { num: '01', title: 'Diagnóstico', desc: 'Mapeamos seus processos atuais e identificamos gargalos' },
              { num: '02', title: 'Proposta', desc: 'Apresentamos soluções específicas com ROI estimado' },
              { num: '03', title: 'Implementação', desc: 'Construímos e configuramos as automações' },
              { num: '04', title: 'Acompanhamento', desc: 'Monitoramos e otimizamos continuamente' },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 pb-8 border-b border-brand-border last:border-0">
                <span className="text-base text-brand-accent font-medium">{step.num}</span>
                <div>
                  <h4 className="text-base font-medium mb-2 text-brand-black">{step.title}</h4>
                  <p className="text-base text-brand-text">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionNavButton href="#diagnostico" label="Diagnóstico gratuito" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Diagnostic Tool */}
      <section id="diagnostico" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="inline-block text-xs font-medium text-brand-accent uppercase tracking-wider mb-4">
              Ferramenta gratuita
            </span>
            <h2 className="text-[2rem] font-medium mb-6 text-brand-black tracking-[-0.02em]">
              Diagnóstico de Automação
            </h2>
            <p className="text-lg text-brand-text leading-relaxed mb-4">
              Descubra em 2 minutos o potencial de automação do seu negócio e receba recomendações personalizadas.
            </p>
            <p className="text-sm text-brand-muted">
              5 perguntas simples. Resultado imediato.
            </p>
          </div>

          <div>
            <DiagnosticoAutomacao />
          </div>
        </div>

        <SectionNavButton href="#industrias" label="Indústrias" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Industries */}
      <section id="industrias" className="py-32 px-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">Indústrias</h2>
          <p className="mt-4 text-lg font-medium text-brand-muted">Soluções específicas para cada setor</p>
        </div>

        <div className="space-y-0">
          {industries.map((industry, i) => (
            <Link
              key={i}
              href={industry.href}
              className="flex justify-between items-center py-8 border-b border-brand-border group"
            >
              <div>
                <h3 className="text-xl font-medium text-brand-black group-hover:text-brand-accent transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-brand-muted mt-1">{industry.desc}</p>
              </div>
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-brand-muted group-hover:text-brand-accent transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        <SectionNavButton href="#contato" label="Contato" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* CTA */}
      <section id="contato" className="py-24 md:py-36 px-6 md:px-10 max-w-6xl mx-auto text-center">
        <h2 className="text-[2.5rem] font-medium mb-6 text-brand-black tracking-[-0.02em]">
          Vamos automatizar sua operação?
        </h2>
        <p className="text-lg max-w-md mx-auto mb-12 text-brand-text">
          Conversa sem compromisso. Entendemos seu negócio e mostramos o que é possível.
        </p>
        <a
          href="mailto:contato@mildez.com"
          className="inline-block px-10 py-5 text-base font-medium text-white bg-brand-accent hover:bg-brand-accent-dark transition-colors"
        >
          Iniciar conversa
        </a>
      </section>

      <Footer />
    </div>
  )
}
