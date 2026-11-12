// Os textos ficam em src/lib/i18n/{pt,en,es}.ts. Este arquivo escolhe o idioma pela rota (/, /en, /es).
import { useRouter } from "next/router";
import pt from "./i18n/pt";
import en from "./i18n/en";
import es from "./i18n/es";

export type { Tom } from "./i18n/pt";

const WHATSAPP_NUMBER = "5548999288648";

/** Endereço definitivo do site (canonical, hreflang, Open Graph e sitemap). */
export const SITE_URL = "https://teacherglauber.com.br";

export const whatsapp = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const IDIOMAS = [
  { locale: "pt-BR", sigla: "PT", nome: "Português", caminho: "/", og: "pt" },
  { locale: "en", sigla: "EN", nome: "English", caminho: "/en", og: "en" },
  { locale: "es", sigla: "ES", nome: "Español", caminho: "/es", og: "es" },
] as const;

const DICIONARIOS = { "pt-BR": pt, en, es } as const;
type Locale = keyof typeof DICIONARIOS;

export const contato = {
  telefone: "+55 48 99928-8648",
  email: "glauberdasilvaalves1@gmail.com",
  instagram: "@teacher_glauber",
};

/** Faixa de perguntas (componente FaixaEntrevista, fora da página no momento). */
export const faixaEntrevista = [
  "Tell me about yourself.",
  "Háblame de ti.",
  "Fale sobre você.",
  "Why should we hire you?",
  "¿Por qué deberíamos contratarte?",
  "Por que devemos contratar você?",
];

export function getContent(locale: string | undefined) {
  const atual: Locale = locale && locale in DICIONARIOS ? (locale as Locale) : "pt-BR";
  const d = DICIONARIOS[atual];
  return {
    ...d,
    locale: atual,
    contato,
    links: {
      aulaGratuita: whatsapp(d.mensagens.aulaGratuita),
      resultadoTeste: whatsapp(d.mensagens.resultadoTeste),
      duasAulas: whatsapp(d.mensagens.duasAulas),
      testeCambridge: "https://www.cambridgeenglish.org/test-your-english/general-english/",
      avaliacoesGoogle: "https://share.google/tQQxqrZWfUXd1pbSd",
      instagram: "https://www.instagram.com/teacher_glauber/",
      email: `mailto:${contato.email}`,
    },
  };
}

export function useContent() {
  const { locale } = useRouter();
  return getContent(locale);
}
