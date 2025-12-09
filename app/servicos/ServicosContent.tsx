'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorkflowDemo, { exampleIcons } from '@/components/WorkflowDemo'
import SectionNavButton from '@/components/SectionNavButton'
import ChallengeCard from '@/components/industry/ChallengeCard'
import MetricsGrid from '@/components/industry/MetricsGrid'
import IndustryHeroVisualization from '@/components/industry/IndustryHeroVisualization'
import IndustryIntegrations from '@/components/industry/IndustryIntegrations'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { icons, stepIcons } from '@/components/Icons'

const challenges = [
  {
    icon: stepIcons.calendar,
    title: 'Horas perdidas em admin',
    description: 'Tempo gasto criando propostas, organizando documentos, enviando faturas e cobrando clientes. Horas que poderiam ser faturadas.',
  },
  {
    icon: stepIcons.document,
    title: 'Contratos e prazos',
    description: 'Renovações esquecidas, contratos vencidos, prazos perdidos. Informações espalhadas entre e-mails, pastas e planilhas.',
  },
  {
    icon: stepIcons.creditCard,
    title: 'Cobrança manual',
    description: 'Faturas atrasadas, clientes que esquecem de pagar, tempo perdido conciliando o que foi entregue com o que foi cobrado.',
  },
]

const metrics = [
  { value: '8h', label: 'por semana recuperadas para trabalho faturável', type: 'absolute' as const },
  { value: '45%', label: 'redução em atrasos de pagamento', type: 'percentage' as const },
  { value: '95%', label: 'taxa de renovação de contratos', type: 'percentage' as const },
  { value: 'Zero', label: 'contratos vencidos por esquecimento', type: 'absolute' as const },
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

export default function ServicosContent() {
  const workflows = {
    onboarding: {
      title: 'Onboarding de Clientes',
      subtitle: 'Pasta do cliente pronta desde o primeiro dia',
      steps: [
        {
          icon: stepIcons.user,
          title: 'Novo cliente',
          description: 'Contrato assinado inicia o processo.',
          examples: [
            { icon: exampleIcons.document, text: 'Contrato recebido' },
            { icon: exampleIcons.user, text: 'Dados cadastrados' },
            { icon: exampleIcons.calendar, text: 'Início definido' },
          ],
        },
        {
          icon: stepIcons.mail,
          title: 'Kit enviado',
          description: 'Boas-vindas e checklist automáticos.',
          examples: [
            { icon: exampleIcons.email, text: 'Email de boas-vindas' },
            { icon: exampleIcons.form, text: 'Checklist de docs' },
            { icon: exampleIcons.bell, text: 'Lembretes programados' },
          ],
        },
        {
          icon: stepIcons.folder,
          title: 'Pasta criada',
          description: 'Estrutura organizada por tipo.',
          examples: [
            { icon: exampleIcons.folder, text: 'Pasta do projeto' },
            { icon: exampleIcons.document, text: 'Templates prontos' },
            { icon: exampleIcons.data, text: 'Estrutura padronizada' },
          ],
        },
        {
          icon: stepIcons.check,
          title: 'Pronto para iniciar',
          description: 'Tudo configurado para o projeto.',
          examples: [
            { icon: exampleIcons.check, text: 'Documentos completos' },
            { icon: exampleIcons.bell, text: 'Pendências sinalizadas' },
            { icon: exampleIcons.team, text: 'Equipe notificada' },
          ],
        },
      ],
    },
    contracts: {
      title: 'Gestão de Contratos',
      subtitle: 'Nenhum contrato vence sem você saber',
      steps: [
        {
          icon: stepIcons.document,
          title: 'Contrato cadastrado',
          description: 'Data de vencimento registrada.',
          examples: [
            { icon: exampleIcons.document, text: 'Contrato digitalizado' },
            { icon: exampleIcons.calendar, text: 'Validade definida' },
            { icon: exampleIcons.money, text: 'Valor registrado' },
          ],
        },
        {
          icon: stepIcons.calendar,
          title: 'Alertas programados',
          description: 'Notificações 60, 30 e 15 dias antes.',
          examples: [
            { icon: exampleIcons.bell, text: 'Alerta 60 dias' },
            { icon: exampleIcons.bell, text: 'Alerta 30 dias' },
            { icon: exampleIcons.bell, text: 'Alerta 15 dias' },
          ],
        },
        {
          icon: stepIcons.document,
          title: 'Proposta gerada',
          description: 'Renovação pré-preenchida.',
          examples: [
            { icon: exampleIcons.document, text: 'Proposta criada' },
            { icon: exampleIcons.data, text: 'Histórico incluído' },
            { icon: exampleIcons.money, text: 'Reajuste calculado' },
          ],
        },
        {
          icon: stepIcons.check,
          title: 'Renovação garantida',
          description: 'Status sempre atualizado.',
          examples: [
            { icon: exampleIcons.check, text: 'Assinatura confirmada' },
            { icon: exampleIcons.sync, text: 'Sistema atualizado' },
            { icon: exampleIcons.log, text: 'Histórico registrado' },
          ],
        },
      ],
    },
    billing: {
      title: 'Faturamento por Projeto',
      subtitle: 'Cobrança consistente, pagamento mais rápido',
      steps: [
        {
          icon: stepIcons.result,
          title: 'Marco atingido',
          description: 'Entrega ou fim do mês dispara o processo.',
          examples: [
            { icon: exampleIcons.check, text: 'Entrega concluída' },
            { icon: exampleIcons.calendar, text: 'Fim do período' },
            { icon: exampleIcons.data, text: 'Horas registradas' },
          ],
        },
        {
          icon: stepIcons.process,
          title: 'Dados compilados',
          description: 'Horas, entregas e valores reunidos.',
          examples: [
            { icon: exampleIcons.clock, text: 'Horas totalizadas' },
            { icon: exampleIcons.document, text: 'Entregas listadas' },
            { icon: exampleIcons.money, text: 'Valores calculados' },
          ],
        },
        {
          icon: stepIcons.creditCard,
          title: 'Fatura enviada',
          description: 'Formatada e entregue ao cliente.',
          examples: [
            { icon: exampleIcons.document, text: 'NF emitida' },
            { icon: exampleIcons.email, text: 'Email enviado' },
            { icon: exampleIcons.calendar, text: 'Vencimento definido' },
          ],
        },
        {
          icon: stepIcons.check,
          title: 'Pagamento rastreado',
          description: 'Lembretes automáticos até receber.',
          examples: [
            { icon: exampleIcons.bell, text: 'Lembrete enviado' },
            { icon: exampleIcons.check, text: 'Pagamento confirmado' },
            { icon: exampleIcons.money, text: 'Valor conciliado' },
          ],
        },
      ],
    },
    reports: {
      title: 'Relatórios para Clientes',
      subtitle: 'Profissionalismo sem esforço manual',
      steps: [
        {
          icon: stepIcons.calendar,
          title: 'Data programada',
          description: 'Semanal, mensal ou por projeto.',
          examples: [
            { icon: exampleIcons.calendar, text: 'Frequência definida' },
            { icon: exampleIcons.clock, text: 'Horário agendado' },
            { icon: exampleIcons.bell, text: 'Disparo automático' },
          ],
        },
        {
          icon: stepIcons.refresh,
          title: 'Dados coletados',
          description: 'Métricas puxadas automaticamente.',
          examples: [
            { icon: exampleIcons.data, text: 'KPIs atualizados' },
            { icon: exampleIcons.chart, text: 'Gráficos gerados' },
            { icon: exampleIcons.sync, text: 'Fontes sincronizadas' },
          ],
        },
        {
          icon: stepIcons.document,
          title: 'Relatório formatado',
          description: 'Layout profissional consistente.',
          examples: [
            { icon: exampleIcons.document, text: 'Template aplicado' },
            { icon: exampleIcons.file, text: 'PDF gerado' },
            { icon: exampleIcons.check, text: 'Revisão automática' },
          ],
        },
        {
          icon: stepIcons.check,
          title: 'Entrega automática',
          description: 'Cliente recebe no prazo.',
          examples: [
            { icon: exampleIcons.email, text: 'Email enviado' },
            { icon: exampleIcons.check, text: 'Entrega confirmada' },
            { icon: exampleIcons.log, text: 'Histórico registrado' },
          ],
        },
      ],
    },
  }

  const integrations = [
    { name: 'Excel', icon: icons.excel },
    { name: 'Google Sheets', icon: icons.googleSheets },
    { name: 'PDF', icon: icons.pdf },
    { name: 'Word', icon: icons.word },
    { name: 'Google Drive', icon: icons.googleDrive },
    { name: 'Email', icon: icons.email },
    { name: 'Calendar', icon: icons.calendar },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-24 md:pb-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 mb-6 border-l-4 border-brand-accent">
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
                Serviços Profissionais
              </span>
            </div>
            <h1 className="text-[3.5rem] font-medium leading-tight mb-8 text-brand-black tracking-[-0.03em]">
              Menos admin.<br />Mais horas faturáveis.
            </h1>
            <p className="text-xl mb-12 max-w-lg text-brand-text leading-relaxed">
              Automatizamos contratos, faturamento e organização de clientes. Você foca em entregar valor.
            </p>
            <a
              href="#contato"
              className="inline-block px-8 py-4 text-sm font-medium text-white bg-brand-accent hover:bg-brand-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
            >
              Agendar conversa
            </a>
          </div>
          <IndustryHeroVisualization industry="servicos" />
        </div>
        <SectionNavButton href="#workflows" label="O que automatizamos" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Pain Points */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">O custo do trabalho invisível</h2>
        </div>

        <ChallengeCards />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Workflows */}
      <section id="workflows" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-[2rem] font-medium mb-4 text-brand-black tracking-[-0.02em]">O que automatizamos</h2>
          <p className="text-lg text-brand-text">Processos que funcionam sozinhos, liberando seu tempo</p>
        </div>

        <div className="space-y-16">
          {Object.entries(workflows).map(([key, workflow], index) => (
            <div key={key}>
              <div className="mb-8 flex items-center gap-4">
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center bg-brand-accent text-white text-sm font-medium">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-medium text-brand-black leading-7">{workflow.title}</h3>
                  <p className="text-brand-muted">{workflow.subtitle}</p>
                </div>
              </div>
              <WorkflowDemo steps={workflow.steps} />
            </div>
          ))}
        </div>
        <SectionNavButton href="#resultados" label="Resultados" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Results */}
      <section id="resultados" className="py-32">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <h2 className="text-[2rem] font-medium mb-12 text-brand-black tracking-[-0.02em]">Resultados típicos</h2>

          <MetricsGrid metrics={metrics} />

          <div className="mt-16 max-w-2xl">
            <p className="text-xl leading-relaxed text-brand-text">
              Seu tempo volta a ser investido no que gera receita: atender clientes, fechar projetos, entregar resultados.
            </p>
            <p className="text-xl leading-relaxed mt-6 text-brand-text">
              A administração acontece em segundo plano. Contratos se renovam, faturas saem no prazo, clientes recebem relatórios sem você precisar lembrar.
            </p>
          </div>
          <SectionNavButton href="#integracoes" label="Integrações" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Integrations */}
      <section id="integracoes" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[2rem] font-medium mb-4 text-brand-black tracking-[-0.02em]">Ferramentas que você já usa</h2>
          <p className="text-brand-text">Integramos sem trocar seus sistemas</p>
        </div>

        <IndustryIntegrations integrations={integrations} />
        <SectionNavButton href="#contato" label="Contato" />
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* CTA */}
      <section id="contato" className="py-24 md:py-36 px-6 md:px-10 max-w-6xl mx-auto text-center">
        <h2 className="text-[2.5rem] font-medium mb-6 text-brand-black tracking-[-0.02em]">
          Vamos recuperar suas horas produtivas?
        </h2>
        <p className="text-lg max-w-md mx-auto mb-12 text-brand-text">
          Conversa sem compromisso. Entendemos sua operação e mostramos o que é possível automatizar.
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
