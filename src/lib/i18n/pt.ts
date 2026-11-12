export type Tom = "escuro" | "papel" | "claro" | "amarelo";

const pt = {
  meta: {
    titulo: "Teacher Glauber | Aulas online de inglês, espanhol e português",
    descricao:
      "Aulas individuais e online com foco em carreira, entrevistas e mudança de país. Professor com +9 anos de experiência e passagem por RH. Agende sua aula experimental gratuita.",
    ogLocale: "pt_BR",
  },
  mensagens: {
    aulaGratuita: "Olá, Glauber! Vim pelo seu site e quero agendar minha aula experimental gratuita.",
    resultadoTeste:
      "Olá, Glauber! Fiz o teste de nível da Cambridge e meu resultado foi ___. Quero conversar sobre as aulas.",
    duasAulas: "Olá, Glauber! Vim pelo seu site e quero saber o valor de 2 aulas por semana.",
  },
  ui: {
    pular: "Pular para o conteúdo",
    abrirMenu: "Abrir menu",
    fecharMenu: "Fechar menu",
    secoes: "Seções",
    voltarTopo: "Glauber Alves, Professor de Idiomas. Voltar ao topo",
    logoAlt: "Glauber Alves, Professor de Idiomas",
    idiomaSite: "Idioma do site",
    verValores: "Ver valores",
    baloes: "A pergunta mais comum em entrevistas, em inglês, espanhol e português",
    fazerTeste: "Fazer o teste de inglês",
    enviarResultado: "Enviar meu resultado",
    escala: "Escala de níveis do Quadro Europeu Comum de Referência, do A1 ao C2",
    fotoAlt: "Glauber Alves, professor de idiomas, de terno e gravata, sorrindo",
    avaliacoesGoogle: "avaliações no Google",
    verTodasAvaliacoes: "Ver todas as avaliações no Google",
    precoAntes: "Aulas individuais a partir de",
    precoMes: "/mês",
    rodape: "Rodapé",
    whatsappAria: "Falar com o Glauber no WhatsApp",
  },
  nav: [
    { label: "Aulas", href: "#aulas" },
    { label: "Teste de nível", href: "#teste" },
    { label: "Sobre mim", href: "#sobre" },
    { label: "Valores", href: "#valores" },
    { label: "Dúvidas", href: "#duvidas" },
  ],
  CTA: "Agendar aula gratuita",
  hero: {
    titulo: "O idioma que a sua carreira pede, com um professor que já foi recrutador.",
    subtitulo: "Aulas de 1 hora para usar o idioma no trabalho, em entrevistas ou numa mudança de país.",
    perguntas: [
      { texto: "Tell me about yourself.", idioma: "Inglês" },
      { texto: "Háblame de ti.", idioma: "Espanhol" },
      { texto: "Fale sobre você.", idioma: "Português" },
    ],
  },
  aulas: {
    titulo: "Uma aula só sua, a partir do seu objetivo.",
    cards: [
      {
        idioma: "Inglês",
        lang: "en",
        exemplo: "“Could we move the meeting to Thursday?”",
        titulo: "Inglês e espanhol para o trabalho",
        texto: "Reuniões, apresentações, e-mails e conversas com clientes e colegas de outros países.",
        tom: "escuro" as Tom,
      },
      {
        idioma: "Inglês",
        lang: "en",
        exemplo: "“Could you walk me through your CV?”",
        titulo: "Entrevistas de emprego",
        texto: "Prepare suas respostas e treine com quem já conduziu processos seletivos em inglês e espanhol.",
        tom: "papel" as Tom,
      },
      {
        idioma: "Espanhol",
        lang: "es",
        exemplo: "“¿Dónde puedo abrir una cuenta bancaria?”",
        titulo: "Mudança de país",
        texto: "O idioma do dia a dia e do trabalho para quem vai morar fora, do aluguel à primeira reunião.",
        tom: "claro" as Tom,
      },
      {
        idioma: "Português",
        lang: "pt",
        exemplo: "“Pode me mandar o relatório até amanhã?”",
        titulo: "Português para estrangeiros",
        texto: "Para quem vive ou trabalha no Brasil e quer se comunicar com confiança.",
        tom: "amarelo" as Tom,
      },
    ],
    passosTitulo: "Como funciona",
    passos: [
      { titulo: "Aula experimental", texto: "45 minutos gratuitos para conhecer seu objetivo e avaliar seu nível." },
      { titulo: "Plano sob medida", texto: "Defino o caminho e o ritmo certos para o seu perfil." },
      {
        titulo: "Aulas de 1 hora",
        texto: "Ao vivo e online, com material próprio e atividades para praticar entre os encontros.",
      },
    ],
  },
  teste: {
    chamada: "Teste de nível",
    titulo: "Qual é o seu nível de inglês?",
    texto:
      "Faça o teste gratuito da Cambridge English em poucos minutos e descubra por onde começar. O resultado é uma indicação inicial e não substitui uma certificação.",
    nota: "Estuda espanhol ou português? Seu nível é avaliado na aula experimental gratuita.",
    niveis: ["A1", "A2", "B1", "B2", "C1", "C2"],
    faixas: ["Básico", "Intermediário", "Avançado"],
  },
  sobre: {
    abertura: "Eu já estive do outro lado da mesa.",
    aberturaTexto:
      "Além das aulas, atuei em Recursos Humanos como coordenador e recrutador, conduzindo processos seletivos em inglês e espanhol. Vi de perto o que faz um candidato se destacar, e o que faz ele travar.",
    saudacoes: ["Oi, eu sou", "Hi, I'm", "Hola, soy"],
    saudacoesSr: "Oi, eu sou",
    nome: "Glauber.",
    texto:
      "Levo esse olhar para cada aula. Você aprende o idioma que vai usar de verdade: na reunião, no e-mail e na entrevista.",
    numeros: [
      { valor: 9, prefixo: "+", sufixo: " anos", legenda: "em sala de aula" },
      { valor: 300, prefixo: "+", sufixo: "", legenda: "alunos atendidos" },
    ],
    formacao: [
      "Licenciatura em Letras, Português, Inglês e Espanhol",
      "Tecnólogo em Gestão de Recursos Humanos",
    ],
  },
  depoimentos: {
    titulo: "Quem estuda comigo",
    nota: 5,
    total: 29,
    traducao: "",
    destaque: {
      texto:
        "“Glauber tem uma didática excelente. Ele adapta a explicação ao ritmo do aluno, sem pressa em avançar para o próximo tema.”",
      nome: "Renata Borges",
    },
    outros: [
      {
        texto:
          "“Professor super didático e divertido, ensina de forma leve, tentando sempre manter a conversa em inglês.”",
        nome: "Ellen Bueno",
      },
      {
        texto: "“Estou aprendendo inglês com o Teacher Glauber há 6 meses e ele ensina muito bem!”",
        nome: "Marcondes Santana",
      },
    ],
  },
  valores: {
    preco: 360,
    texto: "Valor para 1 aula por semana. Quer um ritmo mais intenso? Consulte o valor de 2 aulas semanais.",
    incluso: ["Aulas ao vivo e online", "Material próprio", "Atividades entre as aulas", "Plano para o seu objetivo"],
    secundario: "Consultar valor de 2 aulas por semana",
    secundarioCurto: "Consultar 2 aulas por semana",
  },
  faq: {
    titulo: "Antes de começar",
    texto: "Ficou alguma dúvida? Me chama no WhatsApp que eu respondo.",
    itens: [
      {
        pergunta: "Preciso já saber o idioma?",
        resposta: "Não. As aulas são adaptadas ao seu nível, do básico ao avançado.",
      },
      {
        pergunta: "Em quanto tempo vou aprender?",
        resposta:
          "Depende do seu ponto de partida, do seu objetivo e da frequência das aulas. Na aula experimental, avaliamos juntos e eu defino um plano realista.",
      },
      {
        pergunta: "Como são as aulas online?",
        resposta: "Ao vivo, por videochamada, só você e eu. Você pode estudar de qualquer lugar do mundo.",
      },
      {
        // TODO: confirmar com o Glauber a antecedência mínima para remarcar.
        pergunta: "Posso remarcar uma aula?",
        resposta: "Sim, avisando com antecedência.",
      },
      {
        pergunta: "Qual material é usado?",
        resposta: "Material próprio, preparado de acordo com o seu objetivo, além de atividades entre as aulas.",
      },
    ],
  },
  ctaFinal: {
    titulo: "Vamos começar pela sua aula experimental?",
    texto:
      "Me conta qual é o seu objetivo com o idioma. Em 45 minutos, sem custo, você conhece minhas aulas e sai com um plano para chegar lá.",
  },
};

export type Dicionario = typeof pt;
export default pt;
