import type { Dicionario } from "./pt";

const en: Dicionario = {
  meta: {
    titulo: "Online English, Spanish and Portuguese lessons | Teacher Glauber",
    descricao:
      "Private online lessons in English, Spanish and Portuguese for your career, job interviews and moving abroad. Book your free trial lesson.",
    imagemAlt: "Teacher Glauber: online English, Spanish and Portuguese lessons",
    cargo: "Language teacher",
    servico: "Online English, Spanish and Portuguese lessons",
    unidadePreco: "month",
    ogLocale: "en_US",
  },
  mensagens: {
    aulaGratuita: "Hi Glauber! I found your website and I'd like to book my free trial lesson.",
    resultadoTeste:
      "Hi Glauber! I took the Cambridge level test and my result was ___. I'd like to talk about lessons.",
    duasAulas: "Hi Glauber! I found your website and I'd like to know the price of 2 lessons a week.",
  },
  ui: {
    pular: "Skip to content",
    abrirMenu: "Open menu",
    fecharMenu: "Close menu",
    secoes: "Sections",
    voltarTopo: "Glauber Alves, Language Teacher. Back to top",
    logoAlt: "Glauber Alves, Language Teacher",
    idiomaSite: "Site language",
    verValores: "See pricing",
    baloes: "The most common interview question, in English, Spanish and Portuguese",
    fazerTeste: "Take the English test",
    enviarResultado: "Send my result",
    escala: "Common European Framework of Reference levels, from A1 to C2",
    fotoAlt: "Glauber Alves, language teacher, in a suit and tie, smiling",
    avaliacoesGoogle: "reviews on Google",
    verTodasAvaliacoes: "See all reviews on Google",
    precoAntes: "One-to-one lessons from",
    precoMes: "/month",
    rodape: "Footer",
    whatsappAria: "Message Glauber on WhatsApp",
  },
  nav: [
    { label: "Lessons", href: "#aulas" },
    { label: "Level test", href: "#teste" },
    { label: "About me", href: "#sobre" },
    { label: "Pricing", href: "#valores" },
    { label: "FAQ", href: "#duvidas" },
  ],
  CTA: "Book a free lesson",
  hero: {
    titulo: "The language your career calls for, with a teacher who used to be a recruiter.",
    subtitulo: "1-hour lessons to use the language at work, in job interviews or when moving abroad.",
    perguntas: [
      { texto: "Tell me about yourself.", idioma: "English" },
      { texto: "Háblame de ti.", idioma: "Spanish" },
      { texto: "Fale sobre você.", idioma: "Portuguese" },
    ],
  },
  aulas: {
    titulo: "A lesson that's all yours, built around your goal.",
    cards: [
      {
        idioma: "English",
        lang: "en",
        exemplo: "“Could we move the meeting to Thursday?”",
        titulo: "English and Spanish for work",
        texto: "Meetings, presentations, emails and conversations with clients and colleagues from other countries.",
        tom: "escuro",
      },
      {
        idioma: "English",
        lang: "en",
        exemplo: "“Could you walk me through your CV?”",
        titulo: "Job interviews",
        texto: "Prepare your answers and practise with someone who has run hiring processes in English and Spanish.",
        tom: "papel",
      },
      {
        idioma: "Spanish",
        lang: "es",
        exemplo: "“¿Dónde puedo abrir una cuenta bancaria?”",
        titulo: "Moving abroad",
        texto: "Everyday and workplace language for anyone moving abroad, from renting a home to your first meeting.",
        tom: "claro",
      },
      {
        idioma: "Portuguese",
        lang: "pt",
        exemplo: "“Pode me mandar o relatório até amanhã?”",
        titulo: "Portuguese for foreigners",
        texto: "For anyone who lives or works in Brazil and wants to communicate with confidence.",
        tom: "amarelo",
      },
    ],
    passosTitulo: "How it works",
    passos: [
      { titulo: "Trial lesson", texto: "45 free minutes to understand your goal and assess your level." },
      { titulo: "Tailored plan", texto: "I set the right path and pace for your profile." },
      {
        titulo: "1-hour lessons",
        texto: "Live and online, with my own materials and activities to practise between sessions.",
      },
    ],
  },
  teste: {
    chamada: "Level test",
    titulo: "What's your English level?",
    texto:
      "Take Cambridge English's free test in a few minutes and find out where to start. The result is an initial indication and doesn't replace a certificate.",
    nota: "Studying Spanish or Portuguese? Your level is assessed in the free trial lesson.",
    niveis: ["A1", "A2", "B1", "B2", "C1", "C2"],
    faixas: ["Basic", "Intermediate", "Advanced"],
  },
  sobre: {
    abertura: "I've been on the other side of the table.",
    aberturaTexto:
      "Besides teaching, I worked in Human Resources as a coordinator and recruiter, running hiring processes in English and Spanish. I saw up close what makes a candidate stand out, and what makes them freeze.",
    saudacoes: ["Hi, I'm", "Hola, soy", "Oi, eu sou"],
    saudacoesSr: "Hi, I'm",
    nome: "Glauber.",
    texto:
      "I bring that perspective to every lesson. You learn the language you'll actually use: in the meeting, in the email and in the interview.",
    numeros: [
      { valor: 9, prefixo: "+", sufixo: " years", legenda: "of teaching" },
      { valor: 300, prefixo: "+", sufixo: "", legenda: "students taught" },
    ],
    formacao: [
      "Teaching degree in Portuguese and English",
      "Teaching degree in Portuguese and Spanish",
      "Associate degree in Human Resources Management",
    ],
  },
  depoimentos: {
    titulo: "What my students say",
    nota: 5,
    total: 29,
    traducao: "Reviews translated from Portuguese.",
    destaque: {
      texto:
        "“Glauber's teaching is excellent. He adapts his explanations to the student's pace, with no rush to move on to the next topic.”",
      nome: "Renata Borges",
    },
    outros: [
      {
        texto:
          "“A really clear and fun teacher. He teaches in a relaxed way and always tries to keep the conversation in English.”",
        nome: "Ellen Bueno",
      },
      {
        texto: "“I've been learning English with Teacher Glauber for 6 months and he teaches really well!”",
        nome: "Marcondes Santana",
      },
    ],
  },
  valores: {
    preco: 360,
    texto: "Price for 1 lesson a week. Want a faster pace? Ask about 2 lessons a week.",
    incluso: ["Live online lessons", "Own teaching materials", "Activities between lessons", "A plan for your goal"],
    secundario: "Ask about 2 lessons a week",
    secundarioCurto: "Ask about 2 lessons a week",
  },
  faq: {
    titulo: "Before you start",
    texto: "Still have a question? Message me on WhatsApp and I'll get back to you.",
    itens: [
      {
        pergunta: "Do I need to know the language already?",
        resposta: "No. Lessons are adapted to your level, from beginner to advanced.",
      },
      {
        pergunta: "How long will it take me to learn?",
        resposta:
          "It depends on your starting point, your goal and how often you have lessons. In the trial lesson we assess this together and I set a realistic plan.",
      },
      {
        pergunta: "What are the online lessons like?",
        resposta: "Live, by video call, just you and me. You can study from anywhere in the world.",
      },
      {
        pergunta: "Can I reschedule a lesson?",
        resposta: "Yes, with advance notice.",
      },
      {
        pergunta: "What materials do you use?",
        resposta: "My own materials, prepared around your goal, plus activities between lessons.",
      },
    ],
  },
  ctaFinal: {
    titulo: "Shall we start with your trial lesson?",
    texto:
      "Tell me what you want to achieve with the language. In 45 minutes, free of charge, you'll get to know my lessons and leave with a plan to get there.",
  },
};

export default en;
