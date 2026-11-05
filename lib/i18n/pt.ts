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
  ctaSecondary?: { label: string; href: string }
}

export const pt = {
  site: {
    title: 'mil&dez · Automação de processos',
    description:
      'Confirmação de consultas, cobranças, prazos e conferência do eSocial no automático, nos sistemas que você já usa.',
    keywords: ['automação de processos', 'automação para clínicas', 'confirmação de consultas', 'eSocial SST', 'Belo Horizonte', 'Brasil'],
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
  },

  footer: {
    tagline: 'seu trabalho no automático',
    home: 'Início',
    health: 'Saúde',
    services: 'Serviços',
    agribusiness: 'Agronegócio',
    esocial: 'Validador eSocial',
    whatsapp: 'WhatsApp',
    address: 'Belo Horizonte, MG · CNPJ: 44.584.460/0001-80',
    rights: '© 2026 mil&dez. Todos os direitos reservados.',
    privacy: 'Privacidade',
    terms: 'Termos',
  },

  contactModal: {
    close: 'Fechar',
    successTitle: 'Recebemos seu pedido.',
    successText: 'Vamos responder em até 1 dia útil para combinar a conversa de 30 minutos.',
    title: 'Qual tarefa você quer automatizar?',
    intro: 'Conte como essa tarefa funciona hoje. Respondemos em até 1 dia útil para marcar uma conversa de 30 minutos e entender o que pode ser automatizado.',
    name: 'Nome *',
    namePlaceholder: 'Seu nome',
    email: 'E-mail *',
    emailPlaceholder: 'Seu e-mail de contato',
    phone: 'Telefone ou WhatsApp — opcional',
    phonePlaceholder: 'Número com DDD',
    message: 'Qual tarefa toma tempo da sua equipe? *',
    messagePlaceholder: 'Ex.: recebemos pedidos pelo WhatsApp e copiamos os dados para uma planilha, um por um.',
    messageHelp: 'Não precisa saber como automatizar. Basta explicar o que sua equipe faz hoje.',
    // Error text is followed by a WhatsApp link (`errorLink`) and a closing period.
    error: 'Não foi possível enviar seu pedido. Tente novamente ou fale com a gente pelo',
    errorLink: 'WhatsApp',
    // Privacy note: text, then a link to the privacy policy, then a closing period.
    privacy: 'Usaremos seus dados para responder ao pedido. Veja nossa',
    privacyLink: 'Política de Privacidade',
    sending: 'Enviando…',
    submit: 'Enviar pedido de diagnóstico',
  },

  routeError: {
    title: 'Algo deu errado',
    text: 'Esta página não carregou. Tente de novo ou volte para o início. Se o erro continuar, fale conosco pelo WhatsApp: (31) 98352-9257.',
    details: 'Detalhes técnicos',
    retry: 'Tentar de novo',
    home: 'Voltar ao início',
  },

  home: {
    meta: {
      title: 'mil&dez · Automação de processos para pequenas e médias empresas',
      description:
        'Confirmação de consultas, cobranças, prazos e conferência do eSocial no automático, nos sistemas que você já usa.',
    },
    hero: {
      line1: 'Sua equipe para de',
      line2: 'repetir tarefa.',
      accent: 'O sistema faz por ela.',
      subtitle:
        'Consultas confirmadas, cobranças enviadas e prazos acompanhados sem ninguém precisar lembrar. A automação funciona nos sistemas que você já usa.',
      cta: 'Solicitar diagnóstico',
      ctaNote: 'Uma conversa de 30 minutos, sem compromisso. Respondemos em até 1 dia útil para combinar o horário.',
      secondary: 'Ver exemplos de automação',
    },
    diagram: {
      label: 'Automação',
      items: ['Tarefas que se repetem rodam sozinhas', 'Informação reunida em um só lugar', 'Prazos checados sem ninguém lembrar'],
    },
    pipeline: {
      summary:
        'Três exemplos de automação. Cada ASO finalizado é conferido com as regras do eSocial antes do envio. As notas fiscais que chegam por e-mail são lidas e lançadas no ERP. Um novo lead é pesquisado e recebe uma proposta pronta para enviar.',
      stages: ['Entrada', 'Automação mil&dez', 'Saída'],
      validatorLink: 'Ver o validador eSocial',
      scenarios: [
        {
          input: { title: 'ASO finalizado', text: 'Exame ocupacional lançado no sistema da clínica' },
          task: { title: 'Conferência eSocial', text: 'Confere CBO, vínculo e PCMSO de cada exame' },
          output: { title: 'Conferido antes do envio', text: 'Erros apontados com a correção sugerida' },
        },
        {
          input: { title: 'Notas fiscais por e-mail', text: 'Anexos recebidos dos fornecedores' },
          task: { title: 'Transformação de dados', text: 'Extrai valores, vencimentos e CNPJ de cada nota' },
          output: { title: 'ERP lançado', text: 'Contas a pagar atualizadas, sem digitação' },
        },
        {
          input: { title: 'Novo lead', text: 'Formulário do site e CRM' },
          task: { title: 'Pesquisa', text: 'Levanta porte, setor e site da empresa' },
          output: { title: 'Proposta gerada', text: 'Documento personalizado pronto para enviar' },
        },
      ],
    },
    pain: {
      titleLead: 'Quanto do dia da sua equipe',
      titleAccent: 'vai em copiar, colar e lembrar?',
      subtitle:
        'Três problemas aparecem em quase toda empresa de pequeno e médio porte. Eles custam horas toda semana e raramente aparecem em algum relatório.',
      points: [
        { title: 'A mesma tarefa, todo dia', description: 'Confirmar consultas, mandar lembretes, atualizar planilhas. Alguém da equipe faz isso à mão, uma mensagem de cada vez.' },
        { title: 'O prazo que ninguém lembrou', description: 'Contrato que venceu, cobrança que não saiu, licença que expirou. Cada esquecimento vira retrabalho, multa ou cliente perdido.' },
        { title: 'Informação em cinco lugares', description: 'O pedido chegou no WhatsApp, o preço está na planilha e a nota ficou no e-mail. Para responder o cliente, alguém precisa juntar tudo.' },
      ],
      cta: 'Ver como fica no automático',
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
        {
          industry: 'Agro',
          summary: 'Cotação de insumos',
          solves: 'informação em cinco lugares',
          before: 'alguém pede preço a cada fornecedor e compara tudo à mão.',
          steps: [
            { title: 'Pedido recebido', description: 'Produtor envia via WhatsApp' },
            { title: 'Cotações comparadas', description: 'Planilha consulta fornecedores' },
            { title: 'Melhor preço selecionado', description: 'Equipe avisada no WhatsApp' },
            { title: 'Pedido confirmado', description: 'E-mail enviado ao fornecedor' },
            { title: 'Nota fiscal registrada', description: 'Documento salvo automaticamente' },
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
          type: 'Escritório de contabilidade',
          size: '6 colaboradores',
          automation: 'Automação: renovação de contratos',
          subscription: 'R$500',
          savings: 'R$1.900',
          assumption: 'Premissa: 15 horas por mês liberadas (R$60/h) e R$1.000 por mês em honorários que deixam de se perder por renovação esquecida.',
        },
        {
          type: 'Cooperativa de café',
          size: '50 produtores',
          automation: 'Automação: cotação de insumos',
          subscription: 'R$2.000',
          savings: 'R$5.600',
          assumption: 'Premissa: 1% de economia em R$400 mil de compras por mês e 40 horas de cotação liberadas (R$40/h).',
        },
      ],
      disclaimer: 'Estes valores são estimativas ilustrativas. No diagnóstico, refazemos a conta com os seus números.',
      ctaPrimary: 'Solicitar diagnóstico',
      ctaSecondary: 'Ver como funciona',
    },
    process: {
      titleLead: 'Da primeira conversa',
      titleAccent: 'à automação funcionando',
      subtitle:
        'Você conta como o trabalho é feito hoje. Nós construímos, testamos e cuidamos de tudo depois. Sua equipe não precisa mexer em nada técnico.',
      promiseTitle: 'Primeira automação funcionando em 2 a 4 semanas',
      promiseItems: ['Construção e testes com a sua equipe', 'Nada técnico para aprender', 'Ajustes nas etapas previstas no projeto'],
      steps: [
        {
          title: 'Conversa de 30 minutos',
          description: ['Você mostra como a operação funciona hoje e onde o tempo se perde. Nós perguntamos, ouvimos e anotamos.'],
          duration: '30 min',
        },
        {
          title: 'Diagnóstico e proposta',
          description: ['Você recebe por escrito as automações que mais fazem sentido para o seu negócio, o tempo que cada uma economiza e a mensalidade de cada uma.'],
          duration: '3–5 dias úteis',
        },
        {
          title: 'Construção e teste',
          description: ['Você escolhe por onde começar. Construímos a automação ligada aos seus sistemas e ajustamos com a sua equipe até funcionar do jeito certo.'],
          duration: '2–4 semanas',
        },
        {
          title: '30 dias para testar na sua operação',
          description: [
            'Assinamos o contrato antes do teste, com o escopo e as condições definidos. Os 30 dias grátis começam quando a automação entra em operação, não durante a construção.',
            'Nesse período, sua equipe usa a automação no dia a dia e fazemos os ajustes necessários nas etapas previstas. Antes de começar a cobrança, falamos com você para confirmar sua aprovação.',
          ],
          duration: '30 dias',
        },
      ],
    },
    pricing: {
      titleLead: 'Quanto custa colocar',
      titleAccent: 'sua tarefa no automático?',
      subtitle:
        'A mensalidade inclui construção, hospedagem, manutenção e ajustes nas etapas previstas no projeto. Não há cobrança separada pelo desenvolvimento. Os primeiros 30 dias de uso são grátis, contados a partir da entrada da automação em operação.',
      from: 'A partir de',
      perMonth: '/mês',
      tiers: [
        { price: 'R$500', label: 'Uma automação simples', example: 'Para tarefas como confirmar consultas ou avisar sobre contratos próximos do vencimento.' },
        { price: 'R$2.000', label: 'Uma automação com várias etapas', example: 'Para processos como consultar fornecedores, comparar cotações e avisar a equipe.' },
        { price: 'R$6.000', label: 'Vários processos conectados', example: 'Para operações como acompanhar uma compra do pedido ao registro da nota fiscal.' },
      ],
      details: 'Você recebe uma proposta com as etapas da automação, os sistemas envolvidos e a mensalidade. O contrato também informa os custos de serviços de terceiros incluídos e os limites de uso aplicáveis.',
      trial: 'Teste por 30 dias a partir da entrada em operação. Antes de iniciar a cobrança, entramos em contato para confirmar sua aprovação. Se cancelar durante o teste, não há cobrança. Depois do teste, o cancelamento exige aviso prévio de 30 dias.',
      includedTitle: 'Incluso em todos os planos',
      included: ['Construção', 'Hospedagem', 'Manutenção', 'Ajustes nas etapas previstas no projeto', 'Suporte por WhatsApp'],
      cta: 'Solicitar diagnóstico',
    },
    faq: {
      titleLead: 'Perguntas',
      titleAccent: 'antes de começar',
      subtitle: 'Se a sua dúvida não estiver aqui, traga para a conversa de 30 minutos.',
      items: [
        {
          question: 'Como funciona o teste grátis?',
          answer: 'O contrato é assinado antes do teste. Você usa a automação sem pagar por 30 dias, contados a partir da entrada em operação. Antes do início da cobrança, entramos em contato para confirmar sua aprovação.',
        },
        {
          question: 'E se eu não quiser continuar?',
          answer: 'Se cancelar durante os 30 dias de teste, não há cobrança. Depois desse período, o cancelamento exige aviso prévio de 30 dias.',
        },
        {
          question: 'WhatsApp, inteligência artificial e outros serviços estão incluídos?',
          answer: 'Em geral, esses custos estão incluídos na mensalidade. A proposta e o contrato informam o que está incluído e os limites de custos variáveis. Se esses custos ultrapassarem o limite contratado, avisamos você e ajustamos a mensalidade conforme as condições do contrato.',
        },
        {
          question: 'Quais ajustes estão incluídos?',
          answer: 'Em geral, estão incluídas mudanças nas etapas que já fazem parte da automação. Novas etapas ou funções fora do escopo original podem exigir uma revisão do valor. Avaliamos cada pedido para definir se é um ajuste ou uma ampliação do projeto.',
        },
        {
          question: 'Existe cobrança separada pelo desenvolvimento?',
          answer: 'Não. A construção da automação faz parte do serviço, sem cobrança separada pelo desenvolvimento.',
        },
        {
          question: 'Quanto tempo leva para ficar pronto?',
          answer: 'A proposta chega de 3 a 5 dias úteis depois da conversa de 30 minutos. A construção e os testes levam de 2 a 4 semanas, conforme o número de etapas e sistemas.',
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
          answer: 'Seguimos a LGPD. A automação acessa só os dados de que precisa, com permissões que você autoriza e pode revogar quando quiser. Seus sistemas continuam sendo a base: a automação lê e escreve neles e guarda só o registro de execução necessário para o acompanhamento, na plataforma onde ela roda. Antes de ligar a primeira automação, formalizamos isso em um acordo de tratamento de dados.',
        },
        {
          question: 'O que acontece com meus dados se eu cancelar?',
          answer: 'A automação é desligada e os dados seguem nos seus sistemas. Removemos nossos acessos e o registro de execução da plataforma da automação, e entregamos a documentação do que foi construído.',
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
      titleLine2: 'Nós colocamos no automático.',
      text: 'Conte qual processo mais toma tempo da sua equipe. Respondemos em até 1 dia útil para marcar a conversa de 30 minutos.',
      founder: 'Quem responde é Simon Larsen, fundador da mil&dez, em Belo Horizonte.',
      founderAlt: 'Simon Larsen, fundador da mil&dez',
      button: 'Solicitar diagnóstico',
      note: 'Sem compromisso.',
    },
  },

  industries: {
    meta: {
      title: 'Setores · mil&dez',
      description: 'Automação para clínicas, escritórios e agronegócio, nos sistemas que cada setor já usa.',
    },
    titleLead: 'Automação para',
    titleAccent: 'o seu setor',
    subtitle: 'Cada setor tem as suas tarefas que se repetem. Escolha o seu para ver exemplos de automação.',
    cardCta: 'Ver automações',
    cards: {
      health: {
        title: 'Saúde e clínicas',
        description: 'Confirmação de consultas pelo WhatsApp, lembrete de retorno e conferência do eSocial antes do envio.',
      },
      services: {
        title: 'Serviços profissionais',
        description: 'Entrada de novos clientes, aviso de renovação de contratos e cobrança depois de cada entrega.',
      },
      agribusiness: {
        title: 'Agronegócio',
        description: 'Cotação de insumos, controle de licenças e informações do campo organizadas no escritório.',
      },
    },
  },

  industry: {
    health: {
      meta: {
        title: 'Saúde e clínicas · mil&dez',
        description: 'Confirmação de consultas pelo WhatsApp e conferência do eSocial SST antes do envio, para clínicas e consultórios.',
      },
      badge: 'Saúde e clínicas',
      heroTitle: ['Menos faltas na agenda.', 'eSocial conferido antes do envio.'],
      heroText: 'A confirmação de consultas sai pelo WhatsApp, sem a recepção ligar para cada paciente. Na medicina do trabalho, cada ASO é conferido com as regras do eSocial.',
      heroCta: 'Solicitar diagnóstico',
      challengesTitle: 'O que pesa na rotina da clínica',
      challenges: [
        { title: 'Paciente que não aparece', description: 'A recepção passa a manhã ligando para confirmar consultas. Mesmo assim, horários ficam vazios e não dá tempo de chamar outro paciente.' },
        { title: 'Evento do eSocial que volta', description: 'Um CBO errado ou um exame fora do PCMSO faz o evento voltar. A equipe descobre depois, reabre o ASO e corre contra o prazo.' },
        { title: 'Retorno que ninguém lembrou', description: 'O paciente devia voltar em seis meses para a revisão, mas o aviso depende de alguém olhar a agenda. Quando ninguém olha, ele não volta.' },
      ],
      workflowsTitle: 'Automações para a sua clínica',
      workflowsText: 'Três exemplos, ajustados ao jeito que a sua clínica trabalha',
      workflowSubtitles: ['Lembrete no WhatsApp e agenda atualizada', 'Erros apontados antes do envio, com a correção sugerida', 'Aviso ao paciente quando chega a hora de voltar'],
      resultsTitle: 'O que muda na rotina',
      resultsParagraphs: [
        'A recepção deixa de passar a manhã ao telefone. Os pacientes confirmam pelo WhatsApp e os horários vagos aparecem a tempo de chamar outra pessoa.',
        'No eSocial, os erros aparecem antes do envio, quando corrigir ainda leva minutos. A equipe para de reabrir ASO por causa de um código errado.',
      ],
      integrationsTitle: 'Funciona com os sistemas que você já usa',
      integrationsText: 'A automação se conecta ao que a clínica já tem, sem trocar nenhum sistema.',
      ctaTitle: 'Qual tarefa mais pesa na sua clínica?',
      ctaText: 'Conte como a sua clínica trabalha hoje. Respondemos em até 1 dia útil para marcar a conversa de 30 minutos.',
      ctaButton: 'Solicitar diagnóstico',
      ctaSecondary: { label: 'Ver o validador eSocial', href: '/validador-esocial' },
    } as IndustryCopy,
    services: {
      meta: {
        title: 'Serviços profissionais · mil&dez',
        description: 'Renovações, prazos e cobranças em dia para escritórios e prestadores de serviço, nos sistemas que você já usa.',
      },
      badge: 'Serviços profissionais',
      heroTitle: ['Nenhum prazo', 'depende de memória.'],
      heroText: 'O escritório recebe o aviso de cada renovação com tempo para decidir, e a cobrança sai quando a entrega acontece.',
      heroCta: 'Solicitar diagnóstico',
      challengesTitle: 'O custo do trabalho invisível',
      challenges: [
        { title: 'Horas que não viram faturamento', description: 'Proposta, pasta do cliente, fatura e cobrança tomam horas toda semana, e ninguém paga por esse tempo.' },
        { title: 'Contratos e prazos', description: 'A data da renovação está em algum e-mail, pasta ou planilha, mas ninguém foi avisado. O contrato vence e o honorário deixa de entrar.' },
        { title: 'Cobrança manual', description: 'A fatura atrasa, o cliente esquece de pagar e alguém passa horas conferindo o que foi entregue com o que foi cobrado.' },
      ],
      workflowsTitle: 'Automações para o seu escritório',
      workflowsText: 'Três exemplos, ajustados ao jeito que o seu escritório trabalha',
      workflowSubtitles: ['Pasta, documentos e boas-vindas prontos no primeiro dia', 'Aviso com antecedência e renovação só com a sua aprovação', 'A entrega registrada vira fatura e lembrete de pagamento'],
      resultsTitle: 'O que muda na rotina',
      resultsParagraphs: [
        'As horas que iam para proposta, pasta e cobrança voltam para o trabalho que o cliente paga.',
        'As renovações chegam com aviso e passam pela sua aprovação antes de sair. A fatura sai quando a entrega acontece, e o lembrete de pagamento vai sem ninguém precisar cobrar.',
      ],
      integrationsTitle: 'Funciona com os sistemas que você já usa',
      integrationsText: 'A automação se conecta ao que o escritório já tem, sem trocar nenhum sistema.',
      ctaTitle: 'Qual prazo mais preocupa o seu escritório?',
      ctaText: 'Conte como o seu escritório trabalha hoje. Respondemos em até 1 dia útil para marcar a conversa de 30 minutos.',
      ctaButton: 'Solicitar diagnóstico',
    } as IndustryCopy,
    agribusiness: {
      meta: {
        title: 'Agronegócio · mil&dez',
        description: 'Cotações de insumos, licenças e informações do campo organizadas num só lugar, para produtores e cooperativas.',
      },
      badge: 'Agronegócio',
      heroTitle: ['Fornecedores e campo', 'num só lugar.'],
      heroText: 'As cotações de insumos chegam comparadas numa planilha, e o que o campo manda pelo WhatsApp entra organizado no escritório.',
      heroCta: 'Solicitar diagnóstico',
      challengesTitle: 'O dia a dia que trava a operação',
      challenges: [
        { title: 'Fornecedores no WhatsApp pessoal', description: 'Cotações, prazos e confirmações espalhados em conversas pessoais. Ninguém sabe o que foi combinado nem com quem.' },
        { title: 'Licenças em pastas soltas', description: 'Licenças, certificados e laudos ficam em pastas diferentes. O vencimento passa sem ninguém ver e a fiscalização pega de surpresa.' },
        { title: 'Campo e escritório desconectados', description: 'Informações do campo chegam por foto e texto solto. O escritório gasta horas organizando o que já deveria estar pronto.' },
      ],
      workflowsTitle: 'Automações para a sua operação',
      workflowsText: 'Três exemplos, ajustados ao jeito que a sua operação trabalha',
      workflowSubtitles: ['Pedido, cotação e confirmação no mesmo lugar', 'Aviso antes de cada vencimento', 'Mensagens e fotos do campo organizadas na planilha'],
      resultsTitle: 'O que muda na rotina',
      resultsParagraphs: [
        'As cotações deixam de depender do WhatsApp pessoal de alguém. Fica registrado o que foi pedido, a quem e por quanto.',
        'Licenças e certificados avisam antes de vencer, e o escritório recebe o que vem do campo já organizado na planilha.',
      ],
      integrationsTitle: 'Funciona com os sistemas que você já usa',
      integrationsText: 'A automação se conecta ao que a operação já tem, sem trocar nenhum sistema.',
      ctaTitle: 'Onde a sua operação mais perde tempo?',
      ctaText: 'Conte como a sua operação funciona hoje. Respondemos em até 1 dia útil para marcar a conversa de 30 minutos.',
      ctaButton: 'Solicitar diagnóstico',
    } as IndustryCopy,
  },

  terms: {
    meta: { title: 'Termos de uso · mil&dez', description: 'Termos e condições de uso dos serviços da mil&dez.' },
    heading: 'Termos de uso',
    updated: 'Última atualização: janeiro de 2026',
    sections: [
      { title: '1. Aceitação dos termos', paragraphs: ['Ao acessar e utilizar o site e serviços da mil&dez Automação Ltda. ("mil&dez"), você concorda com estes Termos de Uso. Se você não concordar com algum destes termos, por favor, não utilize nossos serviços.'] },
      { title: '2. Descrição dos serviços', paragraphs: ['A mil&dez oferece serviços de automação de processos de negócios, incluindo desenvolvimento, implementação e manutenção de workflows automatizados para empresas.'] },
      {
        title: '3. Uso do site',
        intro: 'Você concorda em utilizar nosso site e serviços apenas para fins legais e de acordo com estes termos. Você não deve:',
        items: [
          { text: 'Violar qualquer lei ou regulamento aplicável' },
          { text: 'Infringir direitos de propriedade intelectual' },
          { text: 'Transmitir conteúdo prejudicial ou malicioso' },
          { text: 'Tentar acessar sistemas sem autorização' },
          { text: 'Interferir no funcionamento do site' },
        ],
      },
      { title: '4. Propriedade intelectual', paragraphs: ['Todo o conteúdo do site, incluindo textos, gráficos, logos, ícones, imagens e software, é propriedade da mil&dez ou de seus licenciadores e está protegido por leis de direitos autorais e propriedade intelectual.'] },
      { title: '5. Contratação de serviços', paragraphs: ['A contratação de serviços de automação está sujeita a termos específicos acordados em contrato separado. Os preços exibidos no site são estimativas e podem variar conforme a complexidade do projeto.'] },
      { title: '6. Limitação de responsabilidade', paragraphs: ['A mil&dez não será responsável por danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou incapacidade de uso de nossos serviços, exceto nos casos previstos em lei.'] },
      { title: '7. Modificações', paragraphs: ['Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor após publicação no site. O uso continuado dos serviços após alterações constitui aceitação dos novos termos.'] },
      { title: '8. Lei aplicável', paragraphs: ['Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será submetida ao foro da comarca de Belo Horizonte, MG.'] },
      {
        title: '9. Contato',
        paragraphs: ['Para dúvidas sobre estes termos, entre em contato:'],
        contact: { emailLabel: 'E-mail:', email: 'contato@miledez.com.br', addressLabel: 'Endereço:', address: 'Belo Horizonte, MG - Brasil' },
      },
    ],
  } as LegalPage,

  privacy: {
    meta: { title: 'Política de privacidade · mil&dez', description: 'Política de privacidade e tratamento de dados pessoais da mil&dez, em conformidade com a LGPD.' },
    heading: 'Política de privacidade',
    updated: 'Última atualização: janeiro de 2026',
    sections: [
      { title: '1. Introdução', paragraphs: ['A mil&dez Automação Ltda. ("mil&dez", "nós", "nosso") está comprometida com a proteção da sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei n. 13.709/2018).'] },
      {
        title: '2. Dados que coletamos',
        intro: 'Coletamos os seguintes tipos de informações:',
        items: [
          { lead: 'Dados de identificação:', text: 'nome, e-mail, telefone, empresa' },
          { lead: 'Dados de navegação:', text: 'endereço IP, tipo de navegador, páginas visitadas' },
          { lead: 'Dados de comunicação:', text: 'mensagens enviadas através de formulários de contato' },
        ],
      },
      {
        title: '3. Como usamos seus dados',
        intro: 'Utilizamos suas informações para:',
        items: [
          { text: 'Responder a solicitações e fornecer suporte' },
          { text: 'Enviar informações sobre nossos serviços (com seu consentimento)' },
          { text: 'Melhorar nosso site e serviços' },
          { text: 'Cumprir obrigações legais' },
        ],
      },
      { title: '4. Base legal para tratamento', paragraphs: ['O tratamento de dados pessoais é realizado com base em: consentimento do titular, execução de contrato, cumprimento de obrigação legal, ou interesse legítimo da mil&dez, conforme aplicável.'] },
      { title: '5. Compartilhamento de dados', paragraphs: ['Não vendemos suas informações pessoais. Podemos compartilhar dados com prestadores de serviços que nos auxiliam em nossas operações, sempre mediante contratos que garantam a proteção adequada dos dados.'] },
      {
        title: '6. Seus direitos (LGPD)',
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
      { title: '7. Retenção de dados', paragraphs: ['Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades para as quais foram coletados, ou conforme exigido por lei.'] },
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
