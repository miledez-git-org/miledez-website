'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorkflowAnimation from '@/components/WorkflowAnimation'
import { icons, stepIcons } from '@/components/Icons'

export default function VarejoContent() {
  const workflows = {
    inventory: {
      title: 'Gestão de Estoque',
      subtitle: 'Nunca mais perca venda por falta de produto',
      steps: [
        { icon: stepIcons.box, title: 'Nível monitorado', desc: 'Estoque atualizado em tempo real' },
        { icon: stepIcons.bell, title: 'Alerta disparado', desc: 'Produto atingiu mínimo' },
        { icon: stepIcons.document, title: 'Pedido sugerido', desc: 'Reposição pré-calculada' },
        { icon: stepIcons.check, title: 'Estoque equilibrado', desc: 'Sem rupturas, sem excesso' },
      ],
    },
    orders: {
      title: 'Processamento de Pedidos',
      subtitle: 'Do pedido à entrega, tudo rastreado',
      steps: [
        { icon: stepIcons.cart, title: 'Pedido recebido', desc: 'Venda confirmada' },
        { icon: stepIcons.box, title: 'Separação iniciada', desc: 'Lista de picking gerada' },
        { icon: stepIcons.truck, title: 'Envio registrado', desc: 'Código de rastreio atribuído' },
        { icon: stepIcons.check, title: 'Cliente notificado', desc: 'Atualizações automáticas' },
      ],
    },
    financial: {
      title: 'Conciliação Financeira',
      subtitle: 'Vendas e pagamentos sempre em dia',
      steps: [
        { icon: stepIcons.creditCard, title: 'Venda registrada', desc: 'Dados capturados automaticamente' },
        { icon: stepIcons.sync, title: 'Pagamento verificado', desc: 'Cruzamento com extrato' },
        { icon: stepIcons.document, title: 'Relatório gerado', desc: 'Consolidação por período' },
        { icon: stepIcons.check, title: 'Divergências alertadas', desc: 'Diferenças identificadas' },
      ],
    },
    reports: {
      title: 'Relatórios de Vendas',
      subtitle: 'Visibilidade do negócio sem esforço',
      steps: [
        { icon: stepIcons.calendar, title: 'Período fechado', desc: 'Dia, semana ou mês' },
        { icon: stepIcons.refresh, title: 'Dados consolidados', desc: 'Vendas, margens, estoque' },
        { icon: stepIcons.chart, title: 'Análise pronta', desc: 'Gráficos e indicadores' },
        { icon: stepIcons.check, title: 'Relatório entregue', desc: 'No seu email, no horário' },
      ],
    },
  }

  const integrations = [
    { name: 'Excel', icon: icons.excel },
    { name: 'Google Sheets', icon: icons.googleSheets },
    { name: 'PDF', icon: icons.pdf },
    { name: 'WhatsApp', icon: icons.whatsapp },
    { name: 'Email', icon: icons.email },
    { name: 'Google Drive', icon: icons.googleDrive },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-48 pb-32 px-10 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest mb-4 text-brand-muted">Varejo e E-commerce</p>
          <h1 className="text-[3.5rem] font-medium leading-tight mb-8 text-brand-black tracking-[-0.03em]">
            Operação no piloto<br />automático.
          </h1>
          <p className="text-xl mb-12 max-w-lg text-brand-text leading-relaxed">
            Automatizamos estoque, pedidos e financeiro. Você foca em vender e crescer.
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
          <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">A operação que não para</h2>
        </div>

        <div className="grid grid-cols-3 gap-20">
          <div>
            <h3 className="text-lg font-medium mb-4 text-brand-black">Estoque descontrolado</h3>
            <p className="text-sm leading-relaxed text-brand-text">
              Produtos que faltam, outros encalhados. Planilhas desatualizadas, contagem manual, surpresas na hora de vender.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-brand-black">Pedidos acumulando</h3>
            <p className="text-sm leading-relaxed text-brand-text">
              Separação manual, etiquetas impressas uma a uma, clientes perguntando onde está o pedido. Cada venda gera trabalho.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-brand-black">Financeiro no escuro</h3>
            <p className="text-sm leading-relaxed text-brand-text">
              Vendas de um lado, pagamentos de outro. Taxas de cartão, estornos, conciliação no fim do mês que nunca fecha.
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
          <p className="text-lg text-brand-text">Processos que funcionam enquanto você vende</p>
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
                { value: '85%', label: 'menos rupturas de estoque' },
                { value: '3x', label: 'mais rápido no processamento de pedidos' },
                { value: '100%', label: 'das vendas conciliadas automaticamente' },
                { value: 'Zero', label: 'surpresas no fechamento financeiro' },
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
                Seu estoque se mantém equilibrado. Pedidos fluem sem gargalos. O financeiro fecha sozinho.
              </p>
              <p className="text-xl leading-relaxed mt-6 text-brand-text">
                Você para de apagar incêndio e começa a pensar em crescimento: novos produtos, novos canais, melhor margem.
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
          Também automatizamos: notificações de entrega, atualização de status, respostas a perguntas frequentes, alertas de avaliações
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

        <div className="flex gap-14 max-w-3xl">
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
          Vamos automatizar sua operação?
        </h2>
        <p className="text-lg max-w-md mx-auto mb-12 text-brand-text">
          Conversa sem compromisso. Entendemos seu negócio e mostramos o que é possível automatizar.
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
