'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorkflowAnimation from '@/components/WorkflowAnimation'
import { icons, stepIcons } from '@/components/Icons'

export default function ServicosContent() {
  const workflows = {
    onboarding: {
      title: 'Onboarding de Clientes',
      subtitle: 'Pasta do cliente pronta desde o primeiro dia',
      steps: [
        { icon: stepIcons.user, title: 'Novo cliente', desc: 'Contrato assinado' },
        { icon: stepIcons.mail, title: 'Kit enviado', desc: 'Boas-vindas + checklist de docs' },
        { icon: stepIcons.folder, title: 'Pasta criada', desc: 'Estrutura organizada por tipo' },
        { icon: stepIcons.check, title: 'Pronto para iniciar', desc: 'Pendências sinalizadas' },
      ],
    },
    contracts: {
      title: 'Gestão de Contratos',
      subtitle: 'Nenhum contrato vence sem você saber',
      steps: [
        { icon: stepIcons.document, title: 'Contrato cadastrado', desc: 'Data de vencimento registrada' },
        { icon: stepIcons.calendar, title: 'Alertas programados', desc: '60, 30 e 15 dias antes' },
        { icon: stepIcons.document, title: 'Proposta gerada', desc: 'Renovação pré-preenchida' },
        { icon: stepIcons.check, title: 'Renovação garantida', desc: 'Status sempre atualizado' },
      ],
    },
    billing: {
      title: 'Faturamento por Projeto',
      subtitle: 'Cobrança consistente, pagamento mais rápido',
      steps: [
        { icon: stepIcons.result, title: 'Marco atingido', desc: 'Entrega ou fim do mês' },
        { icon: stepIcons.process, title: 'Dados compilados', desc: 'Horas, entregas, valores' },
        { icon: stepIcons.creditCard, title: 'Fatura enviada', desc: 'Formatada e entregue ao cliente' },
        { icon: stepIcons.check, title: 'Pagamento rastreado', desc: 'Lembretes automáticos' },
      ],
    },
    reports: {
      title: 'Relatórios para Clientes',
      subtitle: 'Profissionalismo sem esforço manual',
      steps: [
        { icon: stepIcons.calendar, title: 'Data programada', desc: 'Semanal, mensal ou por projeto' },
        { icon: stepIcons.refresh, title: 'Dados coletados', desc: 'Métricas puxadas automaticamente' },
        { icon: stepIcons.document, title: 'Relatório formatado', desc: 'Layout profissional consistente' },
        { icon: stepIcons.check, title: 'Entrega automática', desc: 'Cliente recebe no prazo' },
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
      <section className="pt-48 pb-32 px-10 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest mb-4 text-brand-muted">Serviços Profissionais</p>
          <h1 className="text-[3.5rem] font-medium leading-tight mb-8 text-brand-black tracking-[-0.03em]">
            Menos admin.<br />Mais horas faturáveis.
          </h1>
          <p className="text-xl mb-12 max-w-lg text-brand-text leading-relaxed">
            Automatizamos contratos, faturamento e organização de clientes. Você foca em entregar valor.
          </p>
          <a
            href="#contato"
            className="inline-block px-8 py-4 text-sm font-medium text-white bg-brand-black hover:bg-brand-dark transition-colors"
          >
            Agendar conversa
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Pain Points */}
      <section className="py-32 px-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">O custo do trabalho invisível</h2>
        </div>

        <div className="grid grid-cols-3 gap-20">
          <div>
            <h3 className="text-lg font-medium mb-4 text-brand-black">Horas perdidas em admin</h3>
            <p className="text-sm leading-relaxed text-brand-text">
              Tempo gasto criando propostas, organizando documentos, enviando faturas e cobrando clientes. Horas que poderiam ser faturadas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-brand-black">Contratos e prazos</h3>
            <p className="text-sm leading-relaxed text-brand-text">
              Renovações esquecidas, contratos vencidos, prazos perdidos. Informações espalhadas entre e-mails, pastas e planilhas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-brand-black">Cobrança manual</h3>
            <p className="text-sm leading-relaxed text-brand-text">
              Faturas atrasadas, clientes que esquecem de pagar, tempo perdido conciliando o que foi entregue com o que foi cobrado.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Workflows */}
      <section className="py-32 px-10 max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-[2rem] font-medium mb-4 text-brand-black tracking-[-0.02em]">O que automatizamos</h2>
          <p className="text-lg text-brand-text">Processos que funcionam sozinhos, liberando seu tempo</p>
        </div>

        <div className="space-y-24">
          {Object.entries(workflows).map(([key, workflow], index) => (
            <div key={key}>
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-2 text-brand-black">{workflow.title}</h3>
                <p className="text-brand-muted">{workflow.subtitle}</p>
              </div>
              <WorkflowAnimation steps={workflow.steps} accentStep={3} />
              {index < Object.keys(workflows).length - 1 && (
                <div className="max-w-4xl mx-auto mt-24">
                  <div className="h-px bg-brand-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Results */}
      <section className="py-32 px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-32">
          <div>
            <h2 className="text-[2rem] font-medium mb-12 text-brand-black tracking-[-0.02em]">Resultados típicos</h2>

            <div className="space-y-10">
              {[
                { value: '8h', label: 'por semana recuperadas para trabalho faturável' },
                { value: '45%', label: 'redução em atrasos de pagamento' },
                { value: '95%', label: 'taxa de renovação de contratos' },
                { value: 'Zero', label: 'contratos vencidos por esquecimento' },
              ].map((metric, i) => (
                <div key={i}>
                  <span className="text-4xl font-medium text-brand-accent">{metric.value}</span>
                  <p className="mt-2 text-brand-text">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div>
              <p className="text-xl leading-relaxed text-brand-text">
                Seu tempo volta a ser investido no que gera receita: atender clientes, fechar projetos, entregar resultados.
              </p>
              <p className="text-xl leading-relaxed mt-6 text-brand-text">
                A administração acontece em segundo plano. Contratos se renovam, faturas saem no prazo, clientes recebem relatórios sem você precisar lembrar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Also Automated */}
      <section className="py-16 px-10 max-w-6xl mx-auto">
        <p className="text-center text-brand-muted">
          Também automatizamos: agendamento de reuniões, lembretes de compromissos, follow-up pós-proposta, confirmações de agenda
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Integrations */}
      <section className="py-32 px-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[2rem] font-medium mb-4 text-brand-black tracking-[-0.02em]">Ferramentas que você já usa</h2>
          <p className="text-brand-text">Integramos sem trocar seus sistemas</p>
        </div>

        <div className="flex gap-14 max-w-4xl">
          {integrations.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="text-brand-black">{item.icon}</div>
              <span className="text-sm text-brand-muted">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-10">
        <div className="h-px bg-brand-border" />
      </div>

      {/* CTA */}
      <section id="contato" className="py-36 px-10 max-w-6xl mx-auto text-center">
        <h2 className="text-[2.5rem] font-medium mb-6 text-brand-black tracking-[-0.02em]">
          Vamos recuperar suas horas produtivas?
        </h2>
        <p className="text-lg max-w-md mx-auto mb-12 text-brand-text">
          Conversa sem compromisso. Entendemos sua operação e mostramos o que é possível automatizar.
        </p>
        <a
          href="mailto:contato@mildez.com"
          className="inline-block px-10 py-5 text-base font-medium text-white bg-brand-black hover:bg-brand-dark transition-colors"
        >
          Iniciar conversa
        </a>
      </section>

      <Footer />
    </div>
  )
}
