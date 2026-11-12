import Head from "next/head";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Aulas from "@/components/Aulas";
import Teste from "@/components/Teste";
import Sobre from "@/components/Sobre";
import Valores from "@/components/Valores";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import WhatsAppFlutuante from "@/components/WhatsAppFlutuante";
import { IDIOMAS, useContent } from "@/lib/content";

export default function Home() {
  const { meta, ui } = useContent();
  return (
    <>
      <Head>
        <title>{meta.titulo}</title>
        <meta name="description" content={meta.descricao} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={meta.titulo} />
        <meta property="og:description" content={meta.descricao} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={meta.ogLocale} />
        {IDIOMAS.map((idioma) => (
          <link
            key={idioma.locale}
            rel="alternate"
            hrefLang={idioma.locale}
            href={idioma.locale === "pt-BR" ? "/" : `/${idioma.locale}`}
          />
        ))}
      </Head>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-amarelo focus:px-4 focus:py-3 focus:text-tinta"
      >
        {ui.pular}
      </a>
      <Nav />
      <main id="conteudo">
        <Hero />
        <Aulas />
        <Teste />
        <Sobre />
        <Valores />
        <Faq />
      </main>
      <CtaFinal />
      <WhatsAppFlutuante />
    </>
  );
}
