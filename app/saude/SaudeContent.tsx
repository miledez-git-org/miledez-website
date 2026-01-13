'use client'

// import Link from 'next/link' // Kept for future use
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorkflowDemoLegacy, { exampleIcons } from '@/components/WorkflowDemoLegacy'
import ChallengeCard from '@/components/industry/ChallengeCard'
import MetricsGrid from '@/components/industry/MetricsGrid'
import IndustryHeroVisualization from '@/components/industry/IndustryHeroVisualization'
import IndustryIntegrations from '@/components/industry/IndustryIntegrations'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { icons, stepIcons } from '@/components/Icons'

const challenges = [
  {
    icon: stepIcons.folder,
    title: 'Documentação dispersa',
    description: 'Fichas em papel, arquivos no computador, anexos no e-mail. Informação espalhada, difícil de encontrar quando precisa.',
  },
  {
    icon: stepIcons.creditCard,
    title: 'Faturamento complexo',
    description: 'Cada convênio com regras diferentes, guias que voltam com glosa, tempo perdido corrigindo e reenviando.',
  },
  {
    icon: stepIcons.calendar,
    title: 'Conformidade constante',
    description: 'Prazos de retenção, documentos obrigatórios, preparação para auditoria. Sempre algo para organizar.',
  },
]

const metrics = [
  { value: '70%', label: 'menos tempo em tarefas administrativas', type: 'percentage' as const },
  { value: '50%', label: 'redução em glosas de convênios', type: 'percentage' as const },
  { value: '2x', label: 'mais rápido no ciclo de recebimento', type: 'multiplier' as const },
  { value: '100%', label: 'dos documentos organizados e rastreáveis', type: 'percentage' as const },
]

function ChallengeCards() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {challenges.map((challenge, index) => (
        <ChallengeCard
          key={index}
          icon={challenge.icon}
          title={challenge.title}
          description={challenge.description}
          index={index}
          isVisible={isVisible}
        />
      ))}
    </div>
  )
}

export default function SaudeContent() {
  const workflows = {
    documents: {
      title: 'Coleta de Documentos',
      subtitle: 'Prontuário completo sem trabalho manual',
      steps: [
        {
          icon: stepIcons.user,
          title: 'Novo paciente',
          description: 'Um cadastro inicia o processo de coleta.',
          examples: [
            { icon: exampleIcons.form, text: 'Ficha preenchida' },
            { icon: exampleIcons.calendar, text: 'Consulta agendada' },
            { icon: exampleIcons.user, text: 'Dados básicos capturados' },
          ],
        },
        {
          icon: stepIcons.mail,
          title: 'Formulário enviado',
          description: 'Ficha de anamnese enviada automaticamente.',
          examples: [
            { icon: exampleIcons.email, text: 'Email personalizado' },
            { icon: exampleIcons.form, text: 'Link para preenchimento' },
            { icon: exampleIcons.bell, text: 'Lembrete se não responder' },
          ],
        },
        {
          icon: stepIcons.folder,
          title: 'Docs organizados',
          description: 'Arquivos classificados automaticamente.',
          examples: [
            { icon: exampleIcons.folder, text: 'Pasta do paciente' },
            { icon: exampleIcons.document, text: 'Exames anexados' },
            { icon: exampleIcons.data, text: 'Histórico atualizado' },
          ],
        },
        {
          icon: stepIcons.check,
          title: 'Prontuário completo',
          description: 'Tudo pronto para o atendimento.',
          examples: [
            { icon: exampleIcons.check, text: 'Documentos validados' },
            { icon: exampleIcons.bell, text: 'Pendências sinalizadas' },
            { icon: exampleIcons.team, text: 'Equipe notificada' },
          ],
        },
      ],
    },
    billing: {
      title: 'Faturamento de Convênios',
      subtitle: 'Menos glosas, reembolso mais rápido',
      steps: [
        {
          icon: stepIcons.result,
          title: 'Consulta finalizada',
          description: 'Dados do atendimento registrados.',
          examples: [
            { icon: exampleIcons.form, text: 'Procedimento registrado' },
            { icon: exampleIcons.user, text: 'Paciente identificado' },
            { icon: exampleIcons.calendar, text: 'Data e hora capturados' },
          ],
        },
        {
          icon: stepIcons.document,
          title: 'Guia formatada',
          description: 'Documento conforme exigências do convênio.',
          examples: [
            { icon: exampleIcons.document, text: 'TISS preenchida' },
            { icon: exampleIcons.data, text: 'Códigos validados' },
            { icon: exampleIcons.check, text: 'Campos obrigatórios ok' },
          ],
        },
        {
          icon: stepIcons.mail,
          title: 'Envio automático',
          description: 'Submissão ao portal do convênio.',
          examples: [
            { icon: exampleIcons.sync, text: 'Upload ao portal' },
            { icon: exampleIcons.log, text: 'Protocolo registrado' },
            { icon: exampleIcons.clock, text: 'Prazo monitorado' },
          ],
        },
        {
          icon: stepIcons.check,
          title: 'Status rastreado',
          description: 'Acompanhamento até o pagamento.',
          examples: [
            { icon: exampleIcons.check, text: 'Aprovação confirmada' },
            { icon: exampleIcons.money, text: 'Pagamento recebido' },
            { icon: exampleIcons.bell, text: 'Glosas alertadas' },
          ],
        },
      ],
    },
    compliance: {
      title: 'Organização e Conformidade',
      subtitle: 'Pronto para auditoria, sempre',
      steps: [
        {
          icon: stepIcons.document,
          title: 'Documento recebido',
          description: 'Qualquer formato é aceito.',
          examples: [
            { icon: exampleIcons.file, text: 'PDF ou imagem' },
            { icon: exampleIcons.email, text: 'Anexo de email' },
            { icon: exampleIcons.document, text: 'Scan de papel' },
          ],
        },
        {
          icon: stepIcons.process,
          title: 'Auto-classificado',
          description: 'IA identifica o tipo do documento.',
          examples: [
            { icon: exampleIcons.data, text: 'Categoria detectada' },
            { icon: exampleIcons.user, text: 'Paciente identificado' },
            { icon: exampleIcons.calendar, text: 'Data extraída' },
          ],
        },
        {
          icon: stepIcons.calendar,
          title: 'Retenção definida',
          description: 'Prazo legal configurado automaticamente.',
          examples: [
            { icon: exampleIcons.clock, text: 'Prazo calculado' },
            { icon: exampleIcons.log, text: 'Regra aplicada' },
            { icon: exampleIcons.folder, text: 'Arquivo organizado' },
          ],
        },
        {
          icon: stepIcons.check,
          title: 'Alertas agendados',
          description: 'Aviso antes do vencimento.',
          examples: [
            { icon: exampleIcons.bell, text: 'Lembrete 30 dias antes' },
            { icon: exampleIcons.email, text: 'Notificação enviada' },
            { icon: exampleIcons.check, text: 'Renovação orientada' },
          ],
        },
      ],
    },
    collections: {
      title: 'Cobrança e Acompanhamento',
      subtitle: 'Menos inadimplência, menos trabalho',
      steps: [
        {
          icon: stepIcons.creditCard,
          title: 'Fatura gerada',
          description: 'Automática após o atendimento.',
          examples: [
            { icon: exampleIcons.document, text: 'Valor calculado' },
            { icon: exampleIcons.user, text: 'Dados do paciente' },
            { icon: exampleIcons.calendar, text: 'Vencimento definido' },
          ],
        },
        {
          icon: stepIcons.calendar,
          title: 'Prazo monitorado',
          description: 'Contagem regressiva automática.',
          examples: [
            { icon: exampleIcons.clock, text: 'Dias restantes' },
            { icon: exampleIcons.data, text: 'Status atualizado' },
            { icon: exampleIcons.log, text: 'Histórico registrado' },
          ],
        },
        {
          icon: stepIcons.bell,
          title: 'Lembretes enviados',
          description: 'Escalonamento automático de cobranças.',
          examples: [
            { icon: exampleIcons.email, text: 'Email cordial' },
            { icon: exampleIcons.bell, text: 'WhatsApp amigável' },
            { icon: exampleIcons.calendar, text: 'Segundo lembrete' },
          ],
        },
        {
          icon: stepIcons.check,
          title: 'Status atualizado',
          description: 'Baixa automática ao receber.',
          examples: [
            { icon: exampleIcons.check, text: 'Pagamento confirmado' },
            { icon: exampleIcons.money, text: 'Valor conciliado' },
            { icon: exampleIcons.log, text: 'Registro completo' },
          ],
        },
      ],
    },
  }

  const integrations = [
    { name: 'WhatsApp', icon: icons.whatsapp },
    { name: 'Doctoralia', icon: icons.doctoralia },
    { name: 'iClinic', icon: icons.iclinic },
    { name: 'Google Calendar', icon: icons.googleCalendar },
    { name: 'Gmail', icon: icons.gmail },
    { name: 'Google Drive', icon: icons.googleDrive },
    { name: 'Excel', icon: icons.excel },
    { name: 'Google Sheets', icon: icons.googleSheets },
    { name: 'Zoom', icon: icons.zoom },
    { name: 'ContaAzul', icon: icons.contaAzul },
    { name: 'ClickSign', icon: icons.clickSign },
    { name: 'Pixeon', icon: icons.pixeon },
    { name: 'Prontuário', icon: icons.prontuario },
    { name: 'PDF', icon: icons.pdf },
    { name: 'Word', icon: icons.word },
    { name: 'Outlook', icon: icons.outlook },
    { name: 'OneDrive', icon: icons.oneDrive },
    { name: 'Trello', icon: icons.trello },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-24 md:pb-32 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 mb-6 border-l-4 border-brand-primary">
                <span className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
                  Saúde e Clínicas
                </span>
              </div>
              <h1 className="heading-display text-[3.5rem] mb-8 text-brand-black">
                Menos papelada.<br />Mais tempo para pacientes.
              </h1>
              <p className="text-xl mb-12 max-w-lg text-brand-text leading-relaxed">
                Automatizamos documentação, faturamento e conformidade. Você foca no atendimento.
              </p>
              <a
                href="#contato"
                className="btn-primary inline-block px-10 py-5 text-sm font-medium text-white bg-brand-primary hover:bg-brand-primary-dark"
              >
                Agendar conversa
              </a>
            </div>
            <IndustryHeroVisualization industry="saude" />
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-32 md:py-40 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="heading-section text-[2rem] text-brand-black">Os desafios do dia a dia</h2>
          </div>

          <ChallengeCards />
        </div>
      </section>

      {/* Workflows */}
      <section id="workflows" className="py-32 md:py-40 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="heading-section text-[2rem] mb-4 text-brand-black">O que automatizamos</h2>
            <p className="text-lg text-brand-text">Processos que funcionam sozinhos, liberando sua equipe</p>
          </div>

          <div className="space-y-16">
            {Object.entries(workflows).map(([key, workflow], index) => (
              <div key={key}>
                <div className="mb-8 flex items-center gap-4">
                  <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center bg-brand-primary text-white text-sm font-medium">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium text-brand-black leading-7">{workflow.title}</h3>
                    <p className="text-brand-muted">{workflow.subtitle}</p>
                  </div>
                </div>
                <WorkflowDemoLegacy steps={workflow.steps} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="resultados" className="py-32 md:py-40 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <h2 className="heading-section text-[2rem] mb-12 text-brand-black">Resultados típicos</h2>

          <MetricsGrid metrics={metrics} />

          <div className="mt-16 max-w-2xl">
            <p className="text-xl leading-relaxed text-brand-text">
              Sua equipe para de correr atrás de papel e começa a focar no que importa: o atendimento ao paciente.
            </p>
            <p className="text-xl leading-relaxed mt-6 text-brand-text">
              Auditorias deixam de ser emergência. Faturamento deixa de ser gargalo. Documentos param de sumir.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integracoes" className="py-32 md:py-40 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="heading-section text-[2rem] mb-4 text-brand-black">Ferramentas que você já usa</h2>
            <p className="text-brand-text">Integramos sem trocar seus sistemas</p>
          </div>

          <IndustryIntegrations integrations={integrations} />
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-32 md:py-40 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto text-center">
          <h2 className="heading-section text-[2.5rem] mb-6 text-brand-black">
            Vamos simplificar sua administração?
          </h2>
          <p className="text-lg max-w-md mx-auto mb-12 text-brand-text">
            Conversa sem compromisso. Entendemos sua clínica e mostramos o que é possível automatizar.
          </p>
          <a
            href="mailto:contato@miledez.com.br"
            className="btn-primary inline-block px-10 py-5 text-base font-medium text-white bg-brand-primary hover:bg-brand-primary-dark"
          >
            Iniciar conversa
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
