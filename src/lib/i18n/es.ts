import type { Dicionario } from "./pt";

const es: Dicionario = {
  meta: {
    titulo: "Teacher Glauber | Clases online de inglés, español y portugués",
    descricao:
      "Clases individuales y online enfocadas en tu carrera, entrevistas de trabajo y mudanzas a otro país. Profesor con más de 9 años de experiencia y trayectoria en RR. HH. Reserva tu clase de prueba gratis.",
    ogLocale: "es_ES",
  },
  mensagens: {
    aulaGratuita: "¡Hola, Glauber! Vi tu sitio web y quiero reservar mi clase de prueba gratis.",
    resultadoTeste:
      "¡Hola, Glauber! Hice el test de nivel de Cambridge y mi resultado fue ___. Quiero hablar sobre las clases.",
    duasAulas: "¡Hola, Glauber! Vi tu sitio web y quiero saber el precio de 2 clases por semana.",
  },
  ui: {
    pular: "Saltar al contenido",
    abrirMenu: "Abrir menú",
    fecharMenu: "Cerrar menú",
    secoes: "Secciones",
    voltarTopo: "Glauber Alves, Profesor de Idiomas. Volver arriba",
    logoAlt: "Glauber Alves, Profesor de Idiomas",
    idiomaSite: "Idioma del sitio",
    verValores: "Ver precios",
    baloes: "La pregunta más común en entrevistas, en inglés, español y portugués",
    fazerTeste: "Hacer el test de inglés",
    enviarResultado: "Enviar mi resultado",
    escala: "Niveles del Marco Común Europeo de Referencia, del A1 al C2",
    fotoAlt: "Glauber Alves, profesor de idiomas, de traje y corbata, sonriendo",
    avaliacoesGoogle: "reseñas en Google",
    verTodasAvaliacoes: "Ver todas las reseñas en Google",
    precoAntes: "Clases individuales desde",
    precoMes: "/mes",
    rodape: "Pie de página",
    whatsappAria: "Hablar con Glauber por WhatsApp",
  },
  nav: [
    { label: "Clases", href: "#aulas" },
    { label: "Test de nivel", href: "#teste" },
    { label: "Sobre mí", href: "#sobre" },
    { label: "Precios", href: "#valores" },
    { label: "Preguntas", href: "#duvidas" },
  ],
  CTA: "Reservar clase gratis",
  hero: {
    titulo: "El idioma que tu carrera necesita, con un profesor que fue reclutador.",
    subtitulo: "Clases de 1 hora para usar el idioma en el trabajo, en entrevistas o al mudarte de país.",
    perguntas: [
      { texto: "Tell me about yourself.", idioma: "Inglés" },
      { texto: "Háblame de ti.", idioma: "Español" },
      { texto: "Fale sobre você.", idioma: "Portugués" },
    ],
  },
  aulas: {
    titulo: "Una clase solo para ti, a partir de tu objetivo.",
    cards: [
      {
        idioma: "Inglés",
        lang: "en",
        exemplo: "“Could we move the meeting to Thursday?”",
        titulo: "Inglés y español para el trabajo",
        texto: "Reuniones, presentaciones, correos y conversaciones con clientes y compañeros de otros países.",
        tom: "escuro",
      },
      {
        idioma: "Inglés",
        lang: "en",
        exemplo: "“Could you walk me through your CV?”",
        titulo: "Entrevistas de trabajo",
        texto: "Prepara tus respuestas y practica con quien ya ha dirigido procesos de selección en inglés y español.",
        tom: "papel",
      },
      {
        idioma: "Español",
        lang: "es",
        exemplo: "“¿Dónde puedo abrir una cuenta bancaria?”",
        titulo: "Mudanza a otro país",
        texto: "El idioma del día a día y del trabajo para quien se va a vivir fuera, desde el alquiler hasta la primera reunión.",
        tom: "claro",
      },
      {
        idioma: "Portugués",
        lang: "pt",
        exemplo: "“Pode me mandar o relatório até amanhã?”",
        titulo: "Portugués para extranjeros",
        texto: "Para quien vive o trabaja en Brasil y quiere comunicarse con confianza.",
        tom: "amarelo",
      },
    ],
    passosTitulo: "Cómo funciona",
    passos: [
      { titulo: "Clase de prueba", texto: "45 minutos gratis para conocer tu objetivo y evaluar tu nivel." },
      { titulo: "Plan a medida", texto: "Defino el camino y el ritmo adecuados para tu perfil." },
      {
        titulo: "Clases de 1 hora",
        texto: "En vivo y online, con material propio y actividades para practicar entre clases.",
      },
    ],
  },
  teste: {
    chamada: "Test de nivel",
    titulo: "¿Cuál es tu nivel de inglés?",
    texto:
      "Haz el test gratuito de Cambridge English en pocos minutos y descubre por dónde empezar. El resultado es una indicación inicial y no sustituye una certificación.",
    nota: "¿Estudias español o portugués? Tu nivel se evalúa en la clase de prueba gratis.",
    niveis: ["A1", "A2", "B1", "B2", "C1", "C2"],
    faixas: ["Básico", "Intermedio", "Avanzado"],
  },
  sobre: {
    abertura: "Yo ya estuve al otro lado de la mesa.",
    aberturaTexto:
      "Además de dar clases, trabajé en Recursos Humanos como coordinador y reclutador, dirigiendo procesos de selección en inglés y español. Vi de cerca lo que hace que un candidato destaque, y lo que lo hace bloquearse.",
    saudacoes: ["Hola, soy", "Hi, I'm", "Oi, eu sou"],
    saudacoesSr: "Hola, soy",
    nome: "Glauber.",
    texto:
      "Llevo esa mirada a cada clase. Aprendes el idioma que vas a usar de verdad: en la reunión, en el correo y en la entrevista.",
    numeros: [
      { valor: 9, prefixo: "+", sufixo: " años", legenda: "dando clases" },
      { valor: 300, prefixo: "+", sufixo: "", legenda: "alumnos atendidos" },
    ],
    formacao: [
      "Licenciatura en Letras, Portugués e Inglés",
      "Licenciatura en Letras, Portugués y Español",
      "Tecnólogo en Gestión de Recursos Humanos",
    ],
  },
  depoimentos: {
    titulo: "Quién estudia conmigo",
    nota: 5,
    total: 29,
    traducao: "Reseñas traducidas del portugués.",
    destaque: {
      texto:
        "“Glauber tiene una didáctica excelente. Adapta la explicación al ritmo del alumno, sin prisa por avanzar al siguiente tema.”",
      nome: "Renata Borges",
    },
    outros: [
      {
        texto:
          "“Un profesor muy didáctico y divertido, enseña de forma ligera e intenta siempre mantener la conversación en inglés.”",
        nome: "Ellen Bueno",
      },
      {
        texto: "“Llevo 6 meses aprendiendo inglés con Teacher Glauber, ¡y enseña muy bien!”",
        nome: "Marcondes Santana",
      },
    ],
  },
  valores: {
    preco: 360,
    texto: "Precio para 1 clase por semana. ¿Quieres un ritmo más intenso? Consulta el precio de 2 clases semanales.",
    incluso: ["Clases en vivo y online", "Material propio", "Actividades entre clases", "Plan para tu objetivo"],
    secundario: "Consultar precio de 2 clases por semana",
    secundarioCurto: "Consultar 2 clases por semana",
  },
  faq: {
    titulo: "Antes de empezar",
    texto: "¿Te quedó alguna duda? Escríbeme por WhatsApp y te respondo.",
    itens: [
      {
        pergunta: "¿Necesito saber ya el idioma?",
        resposta: "No. Las clases se adaptan a tu nivel, del básico al avanzado.",
      },
      {
        pergunta: "¿En cuánto tiempo voy a aprender?",
        resposta:
          "Depende de tu punto de partida, tu objetivo y la frecuencia de las clases. En la clase de prueba lo evaluamos juntos y defino un plan realista.",
      },
      {
        pergunta: "¿Cómo son las clases online?",
        resposta: "En vivo, por videollamada, solo tú y yo. Puedes estudiar desde cualquier lugar del mundo.",
      },
      {
        pergunta: "¿Puedo reprogramar una clase?",
        resposta: "Sí, avisando con antelación.",
      },
      {
        pergunta: "¿Qué material se usa?",
        resposta: "Material propio, preparado según tu objetivo, además de actividades entre clases.",
      },
    ],
  },
  ctaFinal: {
    titulo: "¿Empezamos con tu clase de prueba?",
    texto:
      "Cuéntame cuál es tu objetivo con el idioma. En 45 minutos, sin costo, conoces mis clases y sales con un plan para lograrlo.",
  },
};

export default es;
