'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorkflowDemo, { exampleIcons } from '@/components/WorkflowDemo'
import ChallengeCard from '@/components/industry/ChallengeCard'
import MetricsGrid from '@/components/industry/MetricsGrid'
import IndustryHeroVisualization from '@/components/industry/IndustryHeroVisualization'
import IndustryIntegrations from '@/components/industry/IndustryIntegrations'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { icons, stepIcons } from '@/components/Icons'

const challenges = [
  {
    icon: stepIcons.box,
    title: 'Estoque descontrolado',
    description: 'Produtos que faltam, outros encalhados. Planilhas desatualizadas, contagem manual, surpresas na hora de vender.',
  },
  {
    icon: stepIcons.cart,
    title: 'Pedidos acumulando',
    description: 'Separação manual, etiquetas impressas uma a uma, clientes perguntando onde está o pedido. Cada venda gera trabalho.',
  },
  {
    icon: stepIcons.chart,
    title: 'Financeiro no escuro',
    description: 'Vendas de um lado, pagamentos de outro. Taxas de cartão, estornos, conciliação no fim do mês que nunca fecha.',
  },
]

const metrics = [
  { value: '85%', label: 'menos rupturas de estoque', type: 'percentage' as const },
  { value: '3x', label: 'mais rápido no processamento de pedidos', type: 'multiplier' as const },
  { value: '100%', label: 'das vendas conciliadas automaticamente', type: 'percentage' as const },
  { value: 'Zero', label: 'surpresas no fechamento financeiro', type: 'absolute' as const },
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

export default function VarejoContent() {
  const workflows = {
    inventory: {
      title: 'Gestão de Estoque',
      subtitle: 'Nunca mais perca venda por falta de produto',
      steps: [
        {
          icon: stepIcons.box,
          title: 'Nível monitorado',
          description: 'Estoque atualizado em tempo real.',
          examples: [
            { icon: exampleIcons.box, text: 'Quantidade atual' },
            { icon: exampleIcons.data, text: 'Histórico de vendas' },
            { icon: exampleIcons.chart, text: 'Tendência de consumo' },
          ],
        },
        {
          icon: stepIcons.bell,
          title: 'Alerta disparado',
          description: 'Produto atingiu nível mínimo.',
          examples: [
            { icon: exampleIcons.bell, text: 'Notificação enviada' },
            { icon: exampleIcons.tag, text: 'Produto identificado' },
            { icon: exampleIcons.data, text: 'Quantidade sugerida' },
          ],
        },
        {
          icon: stepIcons.document,
          title: 'Pedido sugerido',
          description: 'Reposição pré-calculada.',
          examples: [
            { icon: exampleIcons.document, text: 'Lista de compras' },
            { icon: exampleIcons.money, text: 'Custo estimado' },
            { icon: exampleIcons.calendar, text: 'Prazo de entrega' },
          ],
        },
        {
          icon: stepIcons.check,
          title: 'Estoque equilibrado',
          description: 'Sem rupturas, sem excesso.',
          examples: [
            { icon: exampleIcons.check, text: 'Níveis normalizados' },
            { icon: exampleIcons.money, text: 'Capital otimizado' },
            { icon: exampleIcons.log, text: 'Registro atualizado' },
          ],
        },
      ],
    },
    orders: {
      title: 'Processamento de Pedidos',
      subtitle: 'Do pedido à entrega, tudo rastreado',
      steps: [
        {
          icon: stepIcons.cart,
          title: 'Pedido recebido',
          description: 'Venda confirmada no sistema.',
          examples: [
            { icon: exampleIcons.receipt, text: 'Pedido registrado' },
            { icon: exampleIcons.user, text: 'Cliente identificado' },
            { icon: exampleIcons.money, text: 'Pagamento confirmado' },
          ],
        },
        {
          icon: stepIcons.box,
          title: 'Separação iniciada',
          description: 'Lista de picking gerada.',
          examples: [
            { icon: exampleIcons.document, text: 'Lista de itens' },
            { icon: exampleIcons.box, text: 'Local no estoque' },
            { icon: exampleIcons.check, text: 'Conferência orientada' },
          ],
        },
        {
          icon: stepIcons.truck,
          title: 'Envio registrado',
          description: 'Código de rastreio atribuído.',
          examples: [
            { icon: exampleIcons.truck, text: 'Transportadora' },
            { icon: exampleIcons.data, text: 'Código de rastreio' },
            { icon: exampleIcons.calendar, text: 'Previsão de entrega' },
          ],
        },
        {
          icon: stepIcons.check,
          title: 'Cliente notificado',
          description: 'Atualizações automáticas.',
          examples: [
            { icon: exampleIcons.email, text: 'Email de confirmação' },
            { icon: exampleIcons.bell, text: 'WhatsApp com rastreio' },
            { icon: exampleIcons.check, text: 'Entrega confirmada' },
          ],
        },
      ],
    },
    financial: {
      title: 'Conciliação Financeira',
      subtitle: 'Vendas e pagamentos sempre em dia',
      steps: [
        {
          icon: stepIcons.creditCard,
          title: 'Venda registrada',
          description: 'Dados capturados automaticamente.',
          examples: [
            { icon: exampleIcons.money, text: 'Valor da venda' },
            { icon: exampleIcons.calendar, text: 'Data e hora' },
            { icon: exampleIcons.data, text: 'Forma de pagamento' },
          ],
        },
        {
          icon: stepIcons.sync,
          title: 'Pagamento verificado',
          description: 'Cruzamento com extrato bancário.',
          examples: [
            { icon: exampleIcons.sync, text: 'Conciliação automática' },
            { icon: exampleIcons.money, text: 'Taxas calculadas' },
            { icon: exampleIcons.check, text: 'Valores batidos' },
          ],
        },
        {
          icon: stepIcons.document,
          title: 'Relatório gerado',
          description: 'Consolidação por período.',
          examples: [
            { icon: exampleIcons.chart, text: 'Total recebido' },
            { icon: exampleIcons.data, text: 'Por forma de pagamento' },
            { icon: exampleIcons.money, text: 'Taxas descontadas' },
          ],
        },
        {
          icon: stepIcons.check,
          title: 'Divergências alertadas',
          description: 'Diferenças identificadas na hora.',
          examples: [
            { icon: exampleIcons.bell, text: 'Alerta de diferença' },
            { icon: exampleIcons.log, text: 'Detalhes do erro' },
            { icon: exampleIcons.check, text: 'Correção orientada' },
          ],
        },
      ],
    },
    reports: {
      title: 'Relatórios de Vendas',
      subtitle: 'Visibilidade do negócio sem esforço',
      steps: [
        {
          icon: stepIcons.calendar,
          title: 'Período fechado',
          description: 'Dia, semana ou mês.',
          examples: [
            { icon: exampleIcons.calendar, text: 'Frequência definida' },
            { icon: exampleIcons.clock, text: 'Horário programado' },
            { icon: exampleIcons.bell, text: 'Disparo automático' },
          ],
        },
        {
          icon: stepIcons.refresh,
          title: 'Dados consolidados',
          description: 'Vendas, margens e estoque.',
          examples: [
            { icon: exampleIcons.money, text: 'Faturamento total' },
            { icon: exampleIcons.chart, text: 'Margem calculada' },
            { icon: exampleIcons.box, text: 'Posição de estoque' },
          ],
        },
        {
          icon: stepIcons.chart,
          title: 'Análise pronta',
          description: 'Gráficos e indicadores.',
          examples: [
            { icon: exampleIcons.chart, text: 'Comparativo período' },
            { icon: exampleIcons.tag, text: 'Produtos destaque' },
            { icon: exampleIcons.data, text: 'Tendências visíveis' },
          ],
        },
        {
          icon: stepIcons.check,
          title: 'Relatório entregue',
          description: 'No seu email, no horário.',
          examples: [
            { icon: exampleIcons.email, text: 'Email enviado' },
            { icon: exampleIcons.file, text: 'PDF anexado' },
            { icon: exampleIcons.log, text: 'Histórico guardado' },
          ],
        },
      ],
    },
  }

  const integrations = [
    { name: 'WhatsApp', icon: icons.whatsapp },
    { name: 'Shopify', icon: icons.shopify },
    { name: 'Nuvemshop', icon: icons.nuvemshop },
    { name: 'WooCommerce', icon: icons.woocommerce },
    { name: 'Mercado Livre', icon: icons.mercadoLivre },
    { name: 'Amazon', icon: icons.amazon },
    { name: 'Bling', icon: icons.bling },
    { name: 'Tiny ERP', icon: icons.tinyErp },
    { name: 'Correios', icon: icons.correios },
    { name: 'Melhor Envio', icon: icons.melhorEnvio },
    { name: 'PagSeguro', icon: icons.pagSeguro },
    { name: 'Mercado Pago', icon: icons.mercadoPago },
    { name: 'Instagram', icon: icons.instagram },
    { name: 'Excel', icon: icons.excel },
    { name: 'Google Sheets', icon: icons.googleSheets },
    { name: 'Email', icon: icons.email },
    { name: 'Google Drive', icon: icons.googleDrive },
    { name: 'PDF', icon: icons.pdf },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-24 md:pb-32 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 mb-6 border-l-4 border-brand-accent">
                <span className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
                  Varejo e E-commerce
                </span>
              </div>
              <h1 className="text-[3.5rem] font-medium leading-tight mb-8 text-brand-black tracking-[-0.03em]">
                Operação no piloto<br />automático.
              </h1>
              <p className="text-xl mb-12 max-w-lg text-brand-text leading-relaxed">
                Automatizamos estoque, pedidos e financeiro. Você foca em vender e crescer.
              </p>
              <a
                href="#contato"
                className="inline-block px-8 py-4 text-sm font-medium text-white bg-brand-accent hover:bg-brand-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
              >
                Agendar conversa
              </a>
            </div>
            <IndustryHeroVisualization industry="varejo" />
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-32 md:py-40 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[2rem] font-medium text-brand-black tracking-[-0.02em]">A operação que não para</h2>
          </div>

          <ChallengeCards />
        </div>
      </section>

      {/* Workflows */}
      <section id="workflows" className="py-32 md:py-40 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-[2rem] font-medium mb-4 text-brand-black tracking-[-0.02em]">O que automatizamos</h2>
            <p className="text-lg text-brand-text">Processos que funcionam enquanto você vende</p>
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
        </div>
      </section>

      {/* Results */}
      <section id="resultados" className="py-32 md:py-40 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <h2 className="text-[2rem] font-medium mb-12 text-brand-black tracking-[-0.02em]">Resultados típicos</h2>

          <MetricsGrid metrics={metrics} />

          <div className="mt-16 max-w-2xl">
            <p className="text-xl leading-relaxed text-brand-text">
              Seu estoque se mantém equilibrado. Pedidos fluem sem gargalos. O financeiro fecha sozinho.
            </p>
            <p className="text-xl leading-relaxed mt-6 text-brand-text">
              Você para de apagar incêndio e começa a pensar em crescimento: novos produtos, novos canais, melhor margem.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integracoes" className="py-32 md:py-40 bg-white">
        <div className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[2rem] font-medium mb-4 text-brand-black tracking-[-0.02em]">Ferramentas que você já usa</h2>
            <p className="text-brand-text">Integramos sem trocar seus sistemas</p>
          </div>

          <IndustryIntegrations integrations={integrations} />
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-32 md:py-40 bg-bg-muted">
        <div className="px-6 md:px-10 max-w-6xl mx-auto text-center">
          <h2 className="text-[2.5rem] font-medium mb-6 text-brand-black tracking-[-0.02em]">
            Vamos automatizar sua operação?
          </h2>
          <p className="text-lg max-w-md mx-auto mb-12 text-brand-text">
            Conversa sem compromisso. Entendemos seu negócio e mostramos o que é possível automatizar.
          </p>
          <a
            href="mailto:contato@miledez.com.br"
            className="inline-block px-10 py-5 text-base font-medium text-white bg-brand-accent hover:bg-brand-accent-dark transition-colors"
          >
            Iniciar conversa
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
