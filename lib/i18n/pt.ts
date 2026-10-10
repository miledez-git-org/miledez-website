/**
 * Portuguese (pt-BR) copy — source of truth for the dictionary shape.
 * `en.ts` is typed against this object, so a missing key is a compile error.
 */

export interface LegalItem {
  lead?: string
  text: string
}

export interface LegalSection {
  title: string
  paragraphs?: string[]
  intro?: string
  items?: LegalItem[]
  contact?: { emailLabel: string; email: string; addressLabel: string; address: string }
}

export interface LegalPage {
  meta: { title: string; description: string }
  heading: string
  updated: string
  sections: LegalSection[]
}

export interface IndustryCopy {
  meta: { title: string; description: string }
  badge: string
  heroTitle: [string, string]
  heroText: string
  heroCta: string
  challengesTitle: string
  challenges: { title: string; description: string }[]
  workflowsTitle: string
  workflowsText: string
  workflowSubtitles: [string, string, string]
  resultsTitle: string
  resultsParagraphs: [string, string]
  metrics: { value: string; label: string }[]
  integrationsTitle: string
  integrationsText: string
  ctaTitle: string
  ctaText: string
  ctaButton: string
}

export const pt = {
  site: {
    title: 'mil&dez - Automação de Processos',
    description: 'Automatizamos seus processos de negócio. Você foca no que importa.',
    keywords: ['automação', 'processos', 'workflow', 'Brasil', 'n8n', 'AI'],
    skipLink: 'Pular para o conteúdo',
  },

  header: {
    home: 'Início',
    industries: 'Indústrias',
    pricing: 'Preços',
    contact: 'Contato',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    switchLabel: 'English',
    switchAria: 'Read this page in English',
    switchShort: 'EN',
  },

  footer: {
    tagline: 'seu trabalho no automático',
    home: 'Início',
    health: 'Saúde',
    services: 'Serviços',
    agribusiness: 'Agronegócio',
    whatsapp: 'WhatsApp',
    address: 'Rua Irmaos Kennedy 200 ap. 301, Belo Horizonte, MG · CNPJ: 44.584.460/0001-80',
    rights: '© 2025 mil&dez. Todos os direitos reservados.',
    privacy: 'Privacidade',
    terms: 'Termos',
  },

  contactModal: {
    close: 'Fechar',
    successTitle: 'Mensagem enviada!',
    successText: 'Entraremos em contato em breve para agendar uma conversa.',
    title: 'Vamos conversar',
    intro: 'Preencha o formulário e entraremos em contato para criar uma automação de teste gratuita para sua empresa.',
    name: 'Nome *',
    namePlaceholder: 'Seu nome',
    email: 'E-mail *',
    emailPlaceholder: 'seu@email.com',
    phone: 'Telefone',
    phonePlaceholder: '(11) 99999-9999',
    message: 'Mensagem *',
    messagePlaceholder: 'Conte um pouco sobre sua empresa e os processos que gostaria de automatizar...',
    error: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.',
    sending: 'Enviando...',
    submit: 'Enviar mensagem',
  },

  home: {
    meta: {
      title: 'mil&dez - Automação de Processos',
      description: 'Automatizamos seus processos de negócio. Você foca no que importa.',
    },
    hero: {
      line1: 'seu trabalho',
      line2: 'do seu jeito',
      accent: 'no automático',
      subtitle:
        'Reconecte seus sistemas do jeito que quiser e automatize os processos que desperdiçam seu tempo. Criamos resultados em dias, não meses.',
      cta: 'Agendar demonstração',
      secondary: 'Descubra mais',
    },
    diagram: {
      label: 'Automação',
      items: ['Tarefas repetitivas rodam sozinhas', 'Dados reunidos em um só lugar', 'Checagem automática'],
    },
    value: {
      titleLead: 'Sua primeira automação pronta em dias.',
      titleAccent: 'Sem risco.',
      subtitle:
        'Construímos, hospedamos e mantemos automações personalizadas para sua operação — conectando os sistemas que você já usa.',
      benefits: [
        { title: 'Entrega em dias', description: 'Automações simples em 3–7 dias. Projetos maiores em 2–4 semanas.' },
        { title: 'Sem custo inicial', description: 'Desenvolvimento e testes por nossa conta. Assinatura mensal, cancele quando quiser.' },
        { title: '100% gerenciado', description: 'Sua equipe não precisa fazer nada técnico. Cuidamos de tudo.' },
        { title: 'Sob medida', description: 'Cada automação é construída para o fluxo real da sua empresa.' },
      ],
      cta: 'Teste grátis uma automação',
    },
    pain: {
      titleLead: 'Automação resolve problemas',
      titleAccent: 'e aumenta qualidade',
      subtitle:
        'Tarefas manuais, sistemas desconectados, informações que se perdem. Criamos automações sob medida que resolvem isso.',
      points: [
        { title: 'Tarefas repetitivas', description: 'Sua equipe gasta horas em tarefas manuais que poderiam acontecer sozinhas.' },
        { title: 'Informação espalhada', description: 'Dados no e-mail, na planilha, no sistema. Ninguém sabe onde está o que precisa.' },
        { title: 'Erros e retrabalho', description: 'Prazos esquecidos, cobranças atrasadas. Pequenos erros que custam tempo e dinheiro.' },
      ],
      cta: 'Como funciona',
    },
    explainer: {
      titleLead: 'Como funciona',
      titleAccent: 'uma automação',
      subtitle: 'De 3 a 10+ módulos — cada fluxo é montado para o processo real da sua empresa.',
      modules: 'módulos',
      workflows: [
        {
          industry: 'Saúde',
          summary: 'Confirmação de consultas',
          steps: [
            { title: 'Consulta agendada', description: 'Paciente marca horário na agenda' },
            { title: 'Lembrete enviado', description: 'WhatsApp automático 24h antes' },
            { title: 'Paciente confirmado', description: 'Status atualizado na planilha' },
          ],
        },
        {
          industry: 'Jurídico',
          summary: 'Renovação de contratos',
          steps: [
            { title: 'Contrato vencendo', description: 'CRM detecta prazo próximo' },
            { title: 'Documento revisado', description: 'E-mail com minuta atualizada' },
            { title: 'Assinatura enviada', description: 'Link de assinatura digital' },
            { title: 'Contrato arquivado', description: 'Versão final salva na nuvem' },
          ],
        },
        {
          industry: 'Agro',
          summary: 'Cotação de insumos',
          steps: [
            { title: 'Pedido recebido', description: 'Produtor envia via WhatsApp' },
            { title: 'Cotações comparadas', description: 'Planilha consulta fornecedores' },
            { title: 'Melhor preço selecionado', description: 'Equipe notificada no Slack' },
            { title: 'Pedido confirmado', description: 'E-mail enviado ao fornecedor' },
            { title: 'Nota fiscal registrada', description: 'Documento salvo automaticamente' },
          ],
        },
      ],
    },
    profiles: {
      titleLead: 'Negócios como o seu',
      titleAccent: 'já automatizam com a gente',
      subtitle: 'De clínicas a cooperativas — automação que se paga no primeiro mês.',
      subscription: 'Assinatura',
      savings: 'Economia',
      perMonth: '/mês',
      items: [
        { type: 'Clínica Odontológica', size: '12 profissionais', subscription: 'R$900', savings: 'R$6.000', benefitDetail: 'Consultas recuperadas e menos tempo administrativo' },
        { type: 'Escritório de Contabilidade', size: '6 colaboradores', subscription: 'R$900', savings: 'R$4.500', benefitDetail: 'Mais produtividade e menos retrabalho' },
        { type: 'Cooperativa de Café', size: '50 produtores', subscription: 'R$3.000', savings: 'R$18.000', benefitDetail: 'Coordenação de fornecedores no automático' },
        { type: 'Distribuidora de Insumos', size: '15 funcionários', subscription: 'R$2.000', savings: 'R$10.000', benefitDetail: 'Pedidos e estoque automatizados' },
      ],
      ctaPrimary: 'Falar com a gente',
      ctaSecondary: 'Como começar',
    },
    process: {
      title: 'Como trabalhamos',
      subtitle: 'Da primeira conversa ao sistema rodando — simples assim.',
      promiseTitle: 'Primeiro processo automatizado em 2 semanas',
      promiseItems: ['Desenvolvimento sem custo', 'Teste grátis', 'Só a mensalidade, tudo incluso'],
      steps: [
        {
          title: 'Conversa inicial',
          description: 'Marcamos uma conversa rápida pra nos conhecer, entender sua empresa e como funciona o dia a dia da sua operação.',
          duration: '30 min',
        },
        {
          title: 'Relatório de ideias',
          description: 'Preparamos um relatório com sugestões de automações para o seu negócio, incluindo exemplos práticos e estimativas de valor. A intenção é inspirar e mostrar o que é possível.',
          duration: '2–3 dias úteis',
        },
        {
          title: 'Definição e construção',
          description: 'Junto com você, definimos exatamente o que será automatizado. Construímos, testamos e ajustamos até ficar do jeito certo.',
          duration: '1–2 semanas',
        },
        {
          title: 'Entrega e acompanhamento',
          description: 'Entregamos a automação funcionando. Você testa no seu dia a dia e nós fazemos todos os ajustes necessários — tudo incluído na mensalidade.',
          duration: 'contínuo',
        },
      ],
    },
    pricing: {
      titleLead: 'Quanto custa automatizar',
      titleAccent: 'o que você recebe de volta',
      subtitle: 'Cada solução é sob medida pra sua operação. Sem contrato. Sem taxa de entrada.',
      from: 'A partir de',
      perMonth: '/mês',
      tiers: [
        { price: 'R$500', label: 'Automações simples' },
        { price: 'R$2.000', label: 'Soluções de complexidade média' },
        { price: 'R$6.000', label: 'Soluções complexas com alta personalização' },
      ],
      cta: 'Falar com a gente',
    },
    cta: {
      titleLine1: 'Pronto para automatizar?',
      titleLine2: 'Vamos conversar',
      text: 'Criamos uma automação de teste gratuita para seu negócio. Sem compromisso, sem custo.',
      button: 'Quero testar grátis',
    },
  },

  industries: {
    meta: {
      title: 'Indústrias - mil&dez',
      description: 'Automação sob medida para saúde, serviços profissionais e agronegócio.',
    },
    titleLead: 'Automação para',
    titleAccent: 'sua indústria',
    subtitle: 'Cada setor tem processos únicos. Criamos automações sob medida para o fluxo real da sua operação.',
    cardCta: 'Ver soluções →',
    cards: {
      health: {
        title: 'Saúde e Clínicas',
        description: 'Automatizamos agendamento, confirmação de consultas, documentação e faturamento para clínicas e consultórios.',
      },
      services: {
        title: 'Serviços Profissionais',
        description: 'Automatizamos contratos, faturamento, relatórios e comunicação para escritórios e prestadores de serviço.',
      },
      agribusiness: {
        title: 'Agronegócio',
        description: 'Automatizamos fornecedores, cotações, conformidade e comunicação campo-escritório para o agronegócio.',
      },
    },
  },

  industry: {
    health: {
      meta: {
        title: 'Saúde e Clínicas - mil&dez',
        description: 'Automatizamos documentação, faturamento e conformidade para clínicas e consultórios médicos.',
      },
      badge: 'Saúde e Clínicas',
      heroTitle: ['Menos papelada.', 'Mais tempo para pacientes.'],
      heroText: 'Automatizamos documentação, faturamento e conformidade. Você foca no atendimento.',
      heroCta: 'Agendar conversa',
      challengesTitle: 'Os desafios do dia a dia',
      challenges: [
        { title: 'Documentação dispersa', description: 'Fichas em papel, arquivos no computador, anexos no e-mail. Informação espalhada, difícil de encontrar quando precisa.' },
        { title: 'Faturamento complexo', description: 'Cada convênio com regras diferentes, guias que voltam com glosa, tempo perdido corrigindo e reenviando.' },
        { title: 'Conformidade constante', description: 'Prazos de retenção, documentos obrigatórios, preparação para auditoria. Sempre algo para organizar.' },
      ],
      workflowsTitle: 'Automações para sua clínica',
      workflowsText: 'Processos que funcionam sozinhos, do cadastro ao pagamento',
      workflowSubtitles: ['Do cadastro ao prontuário, sem papel', 'Guias formatadas e enviadas sem esforço', 'Da fatura ao recebimento, automatizado'],
      resultsTitle: 'Resultados típicos',
      resultsParagraphs: [
        'Sua equipe para de correr atrás de papel e começa a focar no que importa: o atendimento ao paciente.',
        'Auditorias deixam de ser emergência. Faturamento deixa de ser gargalo. Documentos param de sumir.',
      ],
      metrics: [
        { value: '70%', label: 'menos tempo em tarefas administrativas' },
        { value: '50%', label: 'redução em glosas de convênios' },
        { value: '2x', label: 'mais rápido no ciclo de recebimento' },
        { value: '100%', label: 'dos documentos organizados e rastreáveis' },
      ],
      integrationsTitle: 'Ferramentas que você já usa',
      integrationsText: 'Integramos sem trocar seus sistemas',
      ctaTitle: 'Vamos simplificar sua administração?',
      ctaText: 'Conversa sem compromisso. Entendemos sua clínica e mostramos o que é possível automatizar.',
      ctaButton: 'Falar conosco',
    } as IndustryCopy,
    services: {
      meta: {
        title: 'Serviços Profissionais - mil&dez',
        description: 'Automatizamos contratos, faturamento e relatórios para escritórios e prestadores de serviço.',
      },
      badge: 'Serviços Profissionais',
      heroTitle: ['Menos admin.', 'Mais horas faturáveis.'],
      heroText: 'Automatizamos contratos, faturamento e organização de clientes. Você foca em entregar valor.',
      heroCta: 'Agendar conversa',
      challengesTitle: 'O custo do trabalho invisível',
      challenges: [
        { title: 'Horas perdidas em admin', description: 'Tempo gasto criando propostas, organizando documentos, enviando faturas e cobrando clientes. Horas que poderiam ser faturadas.' },
        { title: 'Contratos e prazos', description: 'Renovações esquecidas, contratos vencidos, prazos perdidos. Informações espalhadas entre e-mails, pastas e planilhas.' },
        { title: 'Cobrança manual', description: 'Faturas atrasadas, clientes que esquecem de pagar, tempo perdido conciliando o que foi entregue com o que foi cobrado.' },
      ],
      workflowsTitle: 'O que automatizamos',
      workflowsText: 'Processos que funcionam sozinhos, liberando seu tempo',
      workflowSubtitles: ['Boas-vindas e estrutura criadas sozinhas', 'Alertas e renovações no piloto automático', 'Da entrega à cobrança, sem atraso'],
      resultsTitle: 'Resultados típicos',
      resultsParagraphs: [
        'Seu tempo volta a ser investido no que gera receita: atender clientes, fechar projetos, entregar resultados.',
        'A administração acontece em segundo plano. Contratos se renovam, faturas saem no prazo, clientes recebem relatórios sem você precisar lembrar.',
      ],
      metrics: [
        { value: '8h', label: 'por semana recuperadas para trabalho faturável' },
        { value: '45%', label: 'redução em atrasos de pagamento' },
        { value: '95%', label: 'taxa de renovação de contratos' },
        { value: 'Zero', label: 'contratos vencidos por esquecimento' },
      ],
      integrationsTitle: 'Ferramentas que você já usa',
      integrationsText: 'Integramos sem trocar seus sistemas',
      ctaTitle: 'Vamos recuperar suas horas produtivas?',
      ctaText: 'Conversa sem compromisso. Entendemos sua operação e mostramos o que é possível automatizar.',
      ctaButton: 'Falar conosco',
    } as IndustryCopy,
    agribusiness: {
      meta: {
        title: 'Agronegócio - mil&dez',
        description: 'Automatizamos fornecedores, conformidade e comunicação campo-escritório para o agronegócio.',
      },
      badge: 'Agronegócio',
      heroTitle: ['Gestão rural no', 'automático.'],
      heroText: 'Automatizamos fornecedores, documentação e comunicação campo-escritório. Você foca na produção.',
      heroCta: 'Agendar conversa',
      challengesTitle: 'O dia a dia que trava a operação',
      challenges: [
        { title: 'Fornecedores no WhatsApp pessoal', description: 'Cotações, prazos e confirmações espalhados em conversas pessoais. Ninguém sabe o que foi combinado nem com quem.' },
        { title: 'Documentação ambiental manual', description: 'Licenças, certificados e laudos em pastas perdidas. Vencimentos passam despercebidos, fiscalização pega de surpresa.' },
        { title: 'Campo e escritório desconectados', description: 'Informações do campo chegam por áudio, foto e texto solto. O escritório gasta horas organizando o que já deveria estar pronto.' },
      ],
      workflowsTitle: 'O que automatizamos',
      workflowsText: 'Processos que funcionam enquanto você cuida da produção',
      workflowSubtitles: ['Cotação, pedido e entrega sem esforço', 'Licenças e certificados sempre em dia', 'Dados do campo organizados no escritório'],
      resultsTitle: 'Resultados típicos',
      resultsParagraphs: [
        'Fornecedores coordenados sem depender de WhatsApp pessoal. Documentação organizada e monitorada. Campo e escritório conectados.',
        'Você para de apagar incêndio e foca no que importa: produzir melhor, negociar melhor, crescer.',
      ],
      metrics: [
        { value: '80%', label: 'menos tempo coordenando fornecedores' },
        { value: '100%', label: 'dos documentos organizados e monitorados' },
        { value: '3x', label: 'mais rápido para gerar relatórios' },
        { value: 'Zero', label: 'mensagens perdidas entre campo e escritório' },
      ],
      integrationsTitle: 'Ferramentas que você já usa',
      integrationsText: 'Integramos sem trocar seus sistemas',
      ctaTitle: 'Vamos automatizar sua operação?',
      ctaText: 'Conversa sem compromisso. Entendemos seu negócio e mostramos o que é possível automatizar.',
      ctaButton: 'Falar conosco',
    } as IndustryCopy,
  },

  terms: {
    meta: { title: 'Termos de Uso - mil&dez', description: 'Termos e condições de uso dos serviços da mil&dez.' },
    heading: 'Termos de Uso',
    updated: 'Última atualização: Janeiro de 2026',
    sections: [
      { title: '1. Aceitação dos Termos', paragraphs: ['Ao acessar e utilizar o site e serviços da mil&dez Automação Ltda. ("mil&dez"), você concorda com estes Termos de Uso. Se você não concordar com algum destes termos, por favor, não utilize nossos serviços.'] },
      { title: '2. Descrição dos Serviços', paragraphs: ['A mil&dez oferece serviços de automação de processos de negócios, incluindo desenvolvimento, implementação e manutenção de workflows automatizados para empresas.'] },
      {
        title: '3. Uso do Site',
        intro: 'Você concorda em utilizar nosso site e serviços apenas para fins legais e de acordo com estes termos. Você não deve:',
        items: [
          { text: 'Violar qualquer lei ou regulamento aplicável' },
          { text: 'Infringir direitos de propriedade intelectual' },
          { text: 'Transmitir conteúdo prejudicial ou malicioso' },
          { text: 'Tentar acessar sistemas sem autorização' },
          { text: 'Interferir no funcionamento do site' },
        ],
      },
      { title: '4. Propriedade Intelectual', paragraphs: ['Todo o conteúdo do site, incluindo textos, gráficos, logos, ícones, imagens e software, é propriedade da mil&dez ou de seus licenciadores e está protegido por leis de direitos autorais e propriedade intelectual.'] },
      { title: '5. Contratação de Serviços', paragraphs: ['A contratação de serviços de automação está sujeita a termos específicos acordados em contrato separado. Os preços exibidos no site são estimativas e podem variar conforme a complexidade do projeto.'] },
      { title: '6. Limitação de Responsabilidade', paragraphs: ['A mil&dez não será responsável por danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou incapacidade de uso de nossos serviços, exceto nos casos previstos em lei.'] },
      { title: '7. Modificações', paragraphs: ['Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor após publicação no site. O uso continuado dos serviços após alterações constitui aceitação dos novos termos.'] },
      { title: '8. Lei Aplicável', paragraphs: ['Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será submetida ao foro da comarca de Belo Horizonte, MG.'] },
      {
        title: '9. Contato',
        paragraphs: ['Para dúvidas sobre estes termos, entre em contato:'],
        contact: { emailLabel: 'E-mail:', email: 'contato@miledez.com.br', addressLabel: 'Endereço:', address: 'Belo Horizonte, MG - Brasil' },
      },
    ],
  } as LegalPage,

  privacy: {
    meta: { title: 'Política de Privacidade - mil&dez', description: 'Política de privacidade e tratamento de dados pessoais da mil&dez, em conformidade com a LGPD.' },
    heading: 'Política de Privacidade',
    updated: 'Última atualização: Janeiro de 2026',
    sections: [
      { title: '1. Introdução', paragraphs: ['A mil&dez Automação Ltda. ("mil&dez", "nós", "nosso") está comprometida com a proteção da sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei n. 13.709/2018).'] },
      {
        title: '2. Dados que Coletamos',
        intro: 'Coletamos os seguintes tipos de informações:',
        items: [
          { lead: 'Dados de identificação:', text: 'nome, e-mail, telefone, empresa' },
          { lead: 'Dados de navegação:', text: 'endereço IP, tipo de navegador, páginas visitadas' },
          { lead: 'Dados de comunicação:', text: 'mensagens enviadas através de formulários de contato' },
        ],
      },
      {
        title: '3. Como Usamos Seus Dados',
        intro: 'Utilizamos suas informações para:',
        items: [
          { text: 'Responder a solicitações e fornecer suporte' },
          { text: 'Enviar informações sobre nossos serviços (com seu consentimento)' },
          { text: 'Melhorar nosso site e serviços' },
          { text: 'Cumprir obrigações legais' },
        ],
      },
      { title: '4. Base Legal para Tratamento', paragraphs: ['O tratamento de dados pessoais é realizado com base em: consentimento do titular, execução de contrato, cumprimento de obrigação legal, ou interesse legítimo da mil&dez, conforme aplicável.'] },
      { title: '5. Compartilhamento de Dados', paragraphs: ['Não vendemos suas informações pessoais. Podemos compartilhar dados com prestadores de serviços que nos auxiliam em nossas operações, sempre mediante contratos que garantam a proteção adequada dos dados.'] },
      {
        title: '6. Seus Direitos (LGPD)',
        intro: 'Você tem direito a:',
        items: [
          { text: 'Confirmar a existência de tratamento de dados' },
          { text: 'Acessar seus dados' },
          { text: 'Corrigir dados incompletos ou desatualizados' },
          { text: 'Solicitar anonimização, bloqueio ou eliminação de dados' },
          { text: 'Revogar consentimento' },
          { text: 'Solicitar portabilidade dos dados' },
        ],
      },
      { title: '7. Retenção de Dados', paragraphs: ['Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades para as quais foram coletados, ou conforme exigido por lei.'] },
      { title: '8. Segurança', paragraphs: ['Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.'] },
      {
        title: '9. Contato',
        paragraphs: ['Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco:'],
        contact: { emailLabel: 'E-mail:', email: 'contato@miledez.com.br', addressLabel: 'Endereço:', address: 'Belo Horizonte, MG - Brasil' },
      },
      { title: '10. Alterações', paragraphs: ['Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre nossas práticas de privacidade.'] },
    ],
  } as LegalPage,
}
