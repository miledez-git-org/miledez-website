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

export const pt = {
  site: {
    title: 'mil&dez · Automação de processos',
    description:
      'Confirmação de agendamentos, cobranças, prazos e lançamento de notas no automático, nos sistemas que você já usa.',
    keywords: ['automação de processos', 'automação de tarefas', 'automação para pequenas e médias empresas', 'confirmação de agendamentos', 'Belo Horizonte', 'Brasil'],
    skipLink: 'Pular para o conteúdo',
  },

  header: {
    home: 'Início',
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
    whatsapp: 'WhatsApp',
    address: 'Belo Horizonte, MG · CNPJ: 44.584.460/0001-80',
    rights: '© 2026 mil&dez. Todos os direitos reservados.',
    privacy: 'Privacidade',
    terms: 'Termos',
  },

  contactModal: {
    close: 'Fechar',
    successTitle: 'Recebemos seu pedido.',
    successText: 'Vamos falar com você pelo WhatsApp em até 1 hora.',
    title: 'Qual tarefa você quer automatizar?',
    name: 'Nome',
    namePlaceholder: 'Seu nome',
    phone: 'WhatsApp',
    phonePlaceholder: '(31) 99999-9999',
    business: 'Tipo de negócio',
    businessPlaceholder: 'Ex.: clínica, contabilidade, loja',
    employees: 'Número de funcionários',
    employeesPlaceholder: 'Selecione',
    employeesOptions: ['1 a 5', '6 a 20', '21 a 50', '51 a 200', 'Mais de 200'],
    // Error text is followed by a WhatsApp link (`errorLink`) and a closing period.
    error: 'Não foi possível enviar seu pedido. Tente novamente ou fale com a gente pelo',
    errorLink: 'WhatsApp',
    // Privacy note: text, then a link to the privacy policy, then a closing period.
    privacy: 'Veja nossa',
    privacyLink: 'Política de Privacidade',
    sending: 'Enviando…',
    submit: 'Enviar e entramos em contato em até 1 hora',
  },

  routeError: {
    title: 'Algo deu errado',
    text: 'Esta página não carregou. Tente de novo ou volte para o início. Se o erro continuar, fale conosco pelo WhatsApp: (31) 98283-5587.',
    details: 'Detalhes técnicos',
    retry: 'Tentar de novo',
    home: 'Voltar ao início',
  },

  home: {
    meta: {
      title: 'mil&dez · Automação de processos para pequenas e médias empresas',
      description:
        'Confirmação de agendamentos, cobranças, prazos e lançamento de notas no automático, nos sistemas que você já usa.',
    },
    hero: {
      line1: 'Sua equipe para de',
      line2: 'repetir tarefa.',
      accent: 'O sistema faz por ela.',
      subtitle:
        'Agendamentos confirmados, cobranças enviadas e prazos acompanhados sem ninguém precisar lembrar. A automação funciona nos sistemas que você já usa.',
      cta: 'Solicitar diagnóstico',
      ctaNote: 'Uma conversa de 30 minutos, sem compromisso. Respondemos em até 1 hora para combinar o horário.',
      secondary: 'Ver exemplos de automação',
    },
    diagram: {
      label: 'Automação',
      items: ['Tarefas que se repetem rodam sozinhas', 'Informação reunida em um só lugar', 'Prazos checados sem ninguém lembrar'],
    },
    pipeline: {
      summary:
        'Três exemplos de automação. Cada planilha de pedidos é conferida antes de seguir para o próximo passo. As notas fiscais que chegam por e-mail são lidas e lançadas no ERP. Um novo lead é pesquisado e recebe uma proposta pronta para enviar.',
      stages: ['Entrada', 'Automação mil&dez', 'Saída'],
      scenarios: [
        {
          input: { title: 'Planilha de pedidos', text: 'Pedidos lançados pela equipe' },
          task: { title: 'Conferência de dados', text: 'Confere cadastro, valores e prazos de cada linha' },
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
    explainer: {
      titleLead: 'Tarefas do dia a dia,',
      titleAccent: 'rodando no automático',
      subtitle:
        'Exemplos que servem para qualquer setor. Na sua empresa, a automação segue o seu processo e usa os sistemas que você já tem.',
      cardLabel: 'Exemplo',
      workflows: [
        {
          title: 'Agendamento e lembretes',
          steps: [
            { title: 'Horário marcado', text: 'Na agenda da equipe' },
            { title: 'Lembrete enviado', text: 'WhatsApp um dia antes' },
            { title: 'Resposta registrada', text: 'Confirmação na planilha' },
          ],
        },
        {
          title: 'Gestão de contratos',
          steps: [
            { title: 'Vencimento próximo', text: 'Prazo identificado no CRM' },
            { title: 'Minuta enviada', text: 'E-mail com a versão revisada' },
            { title: 'Contrato assinado', text: 'Assinatura digital e arquivo' },
          ],
        },
        {
          title: 'Compras e cotações',
          steps: [
            { title: 'Pedido recebido', text: 'Mensagem no WhatsApp' },
            { title: 'Preços comparados', text: 'Fornecedores lado a lado' },
            { title: 'Compra confirmada', text: 'E-mail ao fornecedor escolhido' },
          ],
        },
        {
          title: 'Contas a pagar',
          steps: [
            { title: 'Nota recebida', text: 'Anexo no e-mail' },
            { title: 'Documento salvo', text: 'Pasta do mês no Drive' },
            { title: 'Conta lançada', text: 'Financeiro atualizado' },
          ],
        },
        {
          title: 'Atendimento comercial',
          steps: [
            { title: 'Novo contato', text: 'Formulário do site e CRM' },
            { title: 'Resposta na hora', text: 'Mensagem no WhatsApp' },
            { title: 'Reunião marcada', text: 'Horário livre na agenda' },
          ],
        },
        {
          title: 'Relatórios gerenciais',
          steps: [
            { title: 'Números da semana', text: 'Dados reunidos na planilha' },
            { title: 'Relatório montado', text: 'No modelo da empresa' },
            { title: 'Relatório entregue', text: 'E-mail para a equipe' },
          ],
        },
      ],
    },
    numbers: {
      title: 'Em números',
      items: [
        { value: '30 min', label: 'Primeira conversa, sem compromisso' },
        { value: '2–4 semanas', label: 'Até a primeira automação funcionando' },
        { value: 'R$0', label: 'Pelo desenvolvimento' },
        { value: '30 dias', label: 'Grátis na sua operação' },
      ],
    },
    profiles: {
      title: 'Nossos clientes reduziram custos e aumentaram a qualidade',
      gainLabel: 'Ganho líquido estimado',
      subscription: 'Mensalidade',
      perMonth: '/mês',
      items: [
        { automation: 'Confirmação de agendamentos', type: 'Clínica dental com 3 funcionários', subscription: 'R$500', gain: '+R$2.500' },
        { automation: 'Renovação de contratos', type: 'Escritório de contabilidade com 4 funcionários', subscription: 'R$500', gain: '+R$1.400' },
        { automation: 'Cotação com fornecedores', type: 'Distribuidor de varejo com 8 funcionários', subscription: 'R$2.000', gain: '+R$3.600' },
      ],
      ctaPrimary: 'Solicitar diagnóstico',
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
    included: {
      title: 'Nós cuidamos de tudo. Você só vê o resultado.',
      items: ['Desenvolvimento', 'Hospedagem', 'Manutenção', 'Modificações', 'Suporte'],
    },
    pricing: {
      titleLead: 'Quanto custa colocar',
      titleAccent: 'sua tarefa no automático?',
      subtitle: 'Sem cobrança pelo desenvolvimento. Os primeiros 30 dias de uso são grátis.',
      from: 'A partir de',
      perMonth: '/mês',
      examplesLabel: 'Exemplos',
      tiers: [
        { price: 'R$500', label: 'Uma automação simples', examples: ['Confirmar agendamentos', 'Avisar vencimento de contrato'] },
        { price: 'R$2.000', label: 'Uma automação com várias etapas', examples: ['Cotação com fornecedores', 'Notas fiscais lançadas no ERP'] },
        { price: 'R$6.000', label: 'Vários processos conectados', examples: ['Da compra à nota fiscal', 'Do lead ao contrato assinado'] },
      ],
      notes: ['Hospedagem e manutenção inclusas', 'Correção de erros inclusa', 'Suporte incluso'],
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
      text: 'Conte qual processo mais toma tempo da sua equipe. Respondemos em até 1 hora para marcar a conversa de 30 minutos.',
      founder: 'Quem responde é Simon Larsen, fundador da mil&dez, em Belo Horizonte.',
      founderAlt: 'Simon Larsen, fundador da mil&dez',
      button: 'Solicitar diagnóstico',
      note: 'Sem compromisso.',
    },
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
