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
  integrationsTitle: string
  integrationsText: string
  ctaTitle: string
  ctaText: string
  ctaButton: string
}

export const pt = {
  site: {
    title: 'mil&dez - Automação de Processos',
    description:
      'Lembretes, cobranças, cotações e prazos no automático, nos sistemas que você já usa. Primeira automação em até 2 semanas, sem custo de desenvolvimento.',
    keywords: ['automação', 'processos', 'workflow', 'Brasil', 'n8n', 'AI'],
    skipLink: 'Pular para o conteúdo',
  },

  header: {
    home: 'Início',
    industries: 'Setores',
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
    successTitle: 'Mensagem recebida',
    successText: 'Respondemos em até 1 dia útil para marcar a conversa de 30 minutos.',
    title: 'Sua automação grátis',
    intro: 'Conte qual tarefa mais toma tempo da sua equipe. Respondemos em até 1 dia útil para marcar a conversa de 30 minutos.',
    name: 'Nome *',
    namePlaceholder: 'Seu nome',
    email: 'E-mail *',
    emailPlaceholder: 'seu@email.com',
    phone: 'Telefone',
    phonePlaceholder: '(11) 99999-9999',
    message: 'Mensagem *',
    messagePlaceholder: 'Ex.: confirmamos 40 consultas por dia por telefone e muitos pacientes ainda faltam.',
    error: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.',
    sending: 'Enviando...',
    submit: 'Enviar',
  },

  home: {
    meta: {
      title: 'mil&dez · Automação de processos para pequenas e médias empresas',
      description:
        'Lembretes, cobranças, cotações e prazos no automático, nos sistemas que você já usa. Primeira automação em até 2 semanas, sem custo de desenvolvimento.',
    },
    hero: {
      line1: 'Sua equipe para de',
      line2: 'repetir tarefa.',
      accent: 'O sistema faz por ela.',
      subtitle:
        'Lembretes, cobranças, cotações e prazos passam a acontecer sozinhos, nos sistemas que você já usa. Construímos sua primeira automação sem custo de desenvolvimento, pronta em até 2 semanas.',
      cta: 'Quero minha automação grátis',
      secondary: 'Ver exemplos',
    },
    diagram: {
      label: 'Automação',
      items: ['Tarefas que se repetem rodam sozinhas', 'Informação reunida em um só lugar', 'Prazos checados sem ninguém lembrar'],
    },
    pain: {
      titleLead: 'Quanto do dia da sua equipe',
      titleAccent: 'vai em copiar, colar e lembrar?',
      subtitle:
        'Três problemas aparecem em quase toda empresa de pequeno e médio porte. Eles custam horas toda semana e raramente aparecem em algum relatório.',
      points: [
        { title: 'A mesma tarefa, todo dia', description: 'Confirmar consultas, mandar lembretes, atualizar planilhas. Alguém da equipe faz isso à mão, uma mensagem de cada vez.' },
        { title: 'Informação em cinco lugares', description: 'O pedido chegou no WhatsApp, o preço está na planilha e a nota ficou no e-mail. Para responder o cliente, alguém precisa juntar tudo.' },
        { title: 'O prazo que ninguém lembrou', description: 'Contrato que venceu, cobrança que não saiu, licença que expirou. Cada esquecimento vira retrabalho, multa ou cliente perdido.' },
      ],
      cta: 'Veja como isso fica automatizado',
    },
    explainer: {
      titleLead: 'Os mesmos três problemas,',
      titleAccent: 'resolvidos no automático',
      subtitle:
        'Um exemplo para cada problema acima. Na sua empresa, a automação segue o seu processo e usa os sistemas que você já tem.',
      solvesLabel: 'Resolve:',
      beforeLabel: 'Antes:',
      afterLabel: 'Depois, no automático',
      workflows: [
        {
          industry: 'Saúde',
          summary: 'Confirmação de consultas',
          solves: 'a mesma tarefa, todo dia',
          before: 'a recepção manda mensagem para cada paciente, um por um.',
          steps: [
            { title: 'Consulta agendada', description: 'Paciente marca horário na agenda' },
            { title: 'Lembrete enviado', description: 'WhatsApp automático 24h antes' },
            { title: 'Paciente confirmado', description: 'Status atualizado na planilha' },
          ],
        },
        {
          industry: 'Agro',
          summary: 'Cotação de insumos',
          solves: 'informação em cinco lugares',
          before: 'alguém pede preço a cada fornecedor e compara tudo à mão.',
          steps: [
            { title: 'Pedido recebido', description: 'Produtor envia via WhatsApp' },
            { title: 'Cotações comparadas', description: 'Planilha consulta fornecedores' },
            { title: 'Melhor preço selecionado', description: 'Equipe notificada no Slack' },
            { title: 'Pedido confirmado', description: 'E-mail enviado ao fornecedor' },
            { title: 'Nota fiscal registrada', description: 'Documento salvo automaticamente' },
          ],
        },
        {
          industry: 'Escritórios',
          summary: 'Renovação de contratos',
          solves: 'o prazo que ninguém lembrou',
          before: 'a renovação depende de alguém lembrar a data.',
          steps: [
            { title: 'Contrato vencendo', description: 'CRM detecta prazo próximo' },
            { title: 'Documento revisado', description: 'E-mail com minuta atualizada' },
            { title: 'Assinatura enviada', description: 'Link de assinatura digital' },
            { title: 'Contrato arquivado', description: 'Versão final salva na nuvem' },
          ],
        },
      ],
    },
    profiles: {
      titleLead: 'Quanto vale',
      titleAccent: 'uma automação dessas',
      subtitle:
        'Fizemos as contas para três negócios típicos, um para cada exemplo acima. As premissas ficam à vista, para você comparar com a sua realidade.',
      subscription: 'Mensalidade',
      savings: 'Retorno estimado',
      perMonth: '/mês',
      items: [
        {
          type: 'Clínica odontológica',
          size: '12 profissionais',
          automation: 'Automação: confirmação de consultas',
          subscription: 'R$500',
          savings: 'R$3.000',
          assumption: 'Premissa: 10 faltas a menos por mês, com ticket médio de R$250, e 20 horas de recepção liberadas (R$25/h).',
        },
        {
          type: 'Cooperativa de café',
          size: '50 produtores',
          automation: 'Automação: cotação de insumos',
          subscription: 'R$2.000',
          savings: 'R$5.600',
          assumption: 'Premissa: 1% de economia em R$400 mil de compras por mês e 40 horas de cotação liberadas (R$40/h).',
        },
        {
          type: 'Escritório de contabilidade',
          size: '6 colaboradores',
          automation: 'Automação: renovação de contratos',
          subscription: 'R$500',
          savings: 'R$1.900',
          assumption: 'Premissa: 15 horas por mês liberadas (R$60/h) e R$1.000 por mês em honorários que deixam de se perder por renovação esquecida.',
        },
      ],
      disclaimer: 'Estes valores são estimativas ilustrativas. No diagnóstico, refazemos a conta com os números da sua empresa.',
      ctaPrimary: 'Quero minha automação grátis',
      ctaSecondary: 'Como começar',
    },
    process: {
      titleLead: 'Da primeira conversa',
      titleAccent: 'à automação funcionando',
      subtitle:
        'Você conta como o trabalho é feito hoje. Nós construímos, testamos e cuidamos de tudo depois. Sua equipe não precisa mexer em nada técnico.',
      promiseTitle: 'Sua primeira automação em até 2 semanas, sem pagar pelo desenvolvimento',
      promiseItems: ['Desenvolvimento por nossa conta', 'Você testa antes de assinar', 'Hospedagem, manutenção e ajustes na mensalidade'],
      steps: [
        {
          title: 'Conversa de 30 minutos',
          description: 'Você mostra como a operação funciona hoje e onde o tempo se perde. Nós perguntamos, ouvimos e anotamos.',
          duration: '30 min',
        },
        {
          title: 'Diagnóstico por escrito',
          description: 'Você recebe um relatório com as automações que mais fazem sentido para o seu negócio, o tempo que cada uma economiza e quanto custa.',
          duration: '2–3 dias úteis',
        },
        {
          title: 'Construção e teste',
          description: 'Você escolhe por onde começar. Construímos a automação ligada aos seus sistemas e ajustamos com a sua equipe até funcionar do jeito certo.',
          duration: '1–2 semanas',
        },
        {
          title: 'Funcionando, com acompanhamento',
          description: 'A automação entra no dia a dia. Se o seu processo mudar, nós ajustamos. Isso está incluso na mensalidade.',
          duration: 'contínuo',
        },
      ],
    },
    pricing: {
      titleLead: 'Quanto custa',
      titleAccent: 'e o que está incluso',
      subtitle: 'Uma mensalidade cobre construção, hospedagem, manutenção e ajustes. Cancele quando quiser.',
      from: 'A partir de',
      perMonth: '/mês',
      tiers: [
        { price: 'R$500', label: 'Uma automação simples', example: 'Ex.: confirmação de consultas ou aviso de renovação de contratos' },
        { price: 'R$2.000', label: 'Automações com várias etapas e sistemas', example: 'Ex.: cotação com vários fornecedores' },
        { price: 'R$6.000', label: 'Vários processos ligados, sob medida', example: 'Ex.: compras do pedido à nota fiscal' },
      ],
      includedTitle: 'Incluso em todos os planos',
      included: ['Construção', 'Hospedagem', 'Manutenção', 'Ajustes quando seu processo mudar', 'Suporte por WhatsApp'],
      cta: 'Quero minha automação grátis',
      ctaNote: 'O desenvolvimento da primeira automação é por nossa conta.',
    },
    faq: {
      titleLead: 'Perguntas',
      titleAccent: 'antes de começar',
      subtitle: 'Se a sua dúvida não estiver aqui, traga para a conversa de 30 minutos.',
      items: [
        {
          question: 'E se eu não gostar do teste?',
          answer: 'Você não paga nada. O desenvolvimento da primeira automação é por nossa conta, e você só assina a mensalidade se quiser continuar.',
        },
        {
          question: 'Preciso trocar algum sistema?',
          answer: 'Não. A automação conecta o que você já usa, como WhatsApp, planilhas, e-mail, agenda e sistema de gestão. Se algum sistema não permitir conexão, avisamos já na primeira conversa e sugerimos uma alternativa.',
        },
        {
          question: 'Minha equipe vai precisar aprender uma ferramenta nova?',
          answer: 'Não. A automação trabalha nos bastidores e a equipe continua nos mesmos sistemas, com menos tarefa manual. Quando algo pede uma decisão, o aviso chega por onde a equipe já trabalha, como WhatsApp ou e-mail.',
        },
        {
          question: 'Como ficam os dados dos meus clientes?',
          answer: 'Seguimos a LGPD. A automação acessa só os dados de que precisa, com permissões que você autoriza e pode revogar quando quiser. Seus dados continuam nos seus sistemas, e assinamos um acordo de tratamento de dados com cada cliente.',
        },
        {
          question: 'O que acontece se eu cancelar?',
          answer: 'Você avisa com 30 dias de antecedência e a automação é desligada no fim do período. Seus dados continuam nos seus sistemas e entregamos a documentação do que foi construído.',
        },
        {
          question: 'E se a automação der erro?',
          answer: 'Acompanhamos todas as automações. Se algo falhar, recebemos um alerta, avisamos você e corrigimos, normalmente no mesmo dia útil. A correção está inclusa na mensalidade.',
        },
        {
          question: 'Vocês usam inteligência artificial?',
          answer: 'Quando ajuda, sim: para ler mensagens, organizar documentos ou classificar pedidos. Quando uma regra simples resolve, usamos a regra.',
        },
      ],
    },
    cta: {
      titleLine1: 'Escolha uma tarefa que se repete.',
      titleLine2: 'A gente coloca no automático.',
      text: 'Conte qual processo mais toma tempo da sua equipe. Respondemos em até 1 dia útil e construímos a primeira automação sem custo de desenvolvimento.',
      founder: 'Quem responde é Simon Larsen, fundador da mil&dez, em Belo Horizonte.',
      founderAlt: 'Simon Larsen, fundador da mil&dez',
      button: 'Quero minha automação grátis',
      note: 'Sem compromisso.',
    },
  },

  industries: {
    meta: {
      title: 'Indústrias - mil&dez',
      description: 'Automação sob medida para saúde, serviços profissionais e agronegócio.',
    },
    titleLead: 'Automação para',
    titleAccent: 'o seu setor',
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
      heroCta: 'Quero minha automação grátis',
      challengesTitle: 'Os desafios do dia a dia',
      challenges: [
        { title: 'Documentação dispersa', description: 'Fichas em papel, arquivos no computador, anexos no e-mail. Informação espalhada, difícil de encontrar quando precisa.' },
        { title: 'Faturamento complexo', description: 'Cada convênio com regras diferentes, guias que voltam com glosa, tempo perdido corrigindo e reenviando.' },
        { title: 'Conformidade constante', description: 'Prazos de retenção, documentos obrigatórios, preparação para auditoria. Sempre algo para organizar.' },
      ],
      workflowsTitle: 'Automações para sua clínica',
      workflowsText: 'Processos que funcionam sozinhos, do cadastro ao pagamento',
      workflowSubtitles: ['Do cadastro ao prontuário, sem papel', 'Guias formatadas e enviadas sem esforço', 'Da fatura ao recebimento, automatizado'],
      resultsTitle: 'O que muda na rotina',
      resultsParagraphs: [
        'Sua equipe para de correr atrás de papel e começa a focar no que importa: o atendimento ao paciente.',
        'Auditorias deixam de ser emergência. Faturamento deixa de ser gargalo. Documentos param de sumir.',
      ],
      integrationsTitle: 'Ferramentas que você já usa',
      integrationsText: 'Integramos sem trocar seus sistemas',
      ctaTitle: 'Vamos simplificar sua administração?',
      ctaText: 'Conte como funciona a sua clínica. Construímos a primeira automação sem custo de desenvolvimento, pronta em até 2 semanas.',
      ctaButton: 'Quero minha automação grátis',
    } as IndustryCopy,
    services: {
      meta: {
        title: 'Serviços Profissionais - mil&dez',
        description: 'Automatizamos contratos, faturamento e relatórios para escritórios e prestadores de serviço.',
      },
      badge: 'Serviços Profissionais',
      heroTitle: ['Menos admin.', 'Mais horas faturáveis.'],
      heroText: 'Automatizamos contratos, faturamento e organização de clientes. Você foca em entregar valor.',
      heroCta: 'Quero minha automação grátis',
      challengesTitle: 'O custo do trabalho invisível',
      challenges: [
        { title: 'Horas perdidas em admin', description: 'Tempo gasto criando propostas, organizando documentos, enviando faturas e cobrando clientes. Horas que poderiam ser faturadas.' },
        { title: 'Contratos e prazos', description: 'Renovações esquecidas, contratos vencidos, prazos perdidos. Informações espalhadas entre e-mails, pastas e planilhas.' },
        { title: 'Cobrança manual', description: 'Faturas atrasadas, clientes que esquecem de pagar, tempo perdido conciliando o que foi entregue com o que foi cobrado.' },
      ],
      workflowsTitle: 'O que automatizamos',
      workflowsText: 'Processos que funcionam sozinhos, liberando seu tempo',
      workflowSubtitles: ['Boas-vindas e estrutura criadas sozinhas', 'Alertas e renovações no piloto automático', 'Da entrega à cobrança, sem atraso'],
      resultsTitle: 'O que muda na rotina',
      resultsParagraphs: [
        'Seu tempo volta a ser investido no que gera receita: atender clientes, fechar projetos, entregar resultados.',
        'A administração acontece em segundo plano. Contratos se renovam, faturas saem no prazo, clientes recebem relatórios sem você precisar lembrar.',
      ],
      integrationsTitle: 'Ferramentas que você já usa',
      integrationsText: 'Integramos sem trocar seus sistemas',
      ctaTitle: 'Vamos recuperar suas horas produtivas?',
      ctaText: 'Conte como funciona o seu escritório. Construímos a primeira automação sem custo de desenvolvimento, pronta em até 2 semanas.',
      ctaButton: 'Quero minha automação grátis',
    } as IndustryCopy,
    agribusiness: {
      meta: {
        title: 'Agronegócio - mil&dez',
        description: 'Automatizamos fornecedores, conformidade e comunicação campo-escritório para o agronegócio.',
      },
      badge: 'Agronegócio',
      heroTitle: ['Gestão rural no', 'automático.'],
      heroText: 'Automatizamos fornecedores, documentação e comunicação campo-escritório. Você foca na produção.',
      heroCta: 'Quero minha automação grátis',
      challengesTitle: 'O dia a dia que trava a operação',
      challenges: [
        { title: 'Fornecedores no WhatsApp pessoal', description: 'Cotações, prazos e confirmações espalhados em conversas pessoais. Ninguém sabe o que foi combinado nem com quem.' },
        { title: 'Documentação ambiental manual', description: 'Licenças, certificados e laudos em pastas perdidas. Vencimentos passam despercebidos, fiscalização pega de surpresa.' },
        { title: 'Campo e escritório desconectados', description: 'Informações do campo chegam por áudio, foto e texto solto. O escritório gasta horas organizando o que já deveria estar pronto.' },
      ],
      workflowsTitle: 'O que automatizamos',
      workflowsText: 'Processos que funcionam enquanto você cuida da produção',
      workflowSubtitles: ['Cotação, pedido e entrega sem esforço', 'Licenças e certificados sempre em dia', 'Dados do campo organizados no escritório'],
      resultsTitle: 'O que muda na rotina',
      resultsParagraphs: [
        'Fornecedores coordenados sem depender de WhatsApp pessoal. Documentação organizada e monitorada. Campo e escritório conectados.',
        'Você para de apagar incêndio e foca no que importa: produzir melhor, negociar melhor, crescer.',
      ],
      integrationsTitle: 'Ferramentas que você já usa',
      integrationsText: 'Integramos sem trocar seus sistemas',
      ctaTitle: 'Vamos automatizar sua operação?',
      ctaText: 'Conte como funciona a sua operação. Construímos a primeira automação sem custo de desenvolvimento, pronta em até 2 semanas.',
      ctaButton: 'Quero minha automação grátis',
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
