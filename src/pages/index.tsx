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
import { IDIOMAS, SITE_URL, useContent } from "@/lib/content";

export default function Home() {
  const { meta, ui, locale, contato, links, valores } = useContent();
  const atual = IDIOMAS.find((idioma) => idioma.locale === locale) ?? IDIOMAS[0];
  const url = `${SITE_URL}${atual.caminho === "/" ? "/" : atual.caminho}`;
  const imagem = `${SITE_URL}/og/og-${atual.og}.jpg`;

  // Dados estruturados: ajudam o Google a entender quem é o professor e o que ele oferece.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#site`,
        url: `${SITE_URL}/`,
        name: "Teacher Glauber",
        inLanguage: IDIOMAS.map((idioma) => idioma.locale),
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#glauber`,
        name: "Glauber Alves",
        alternateName: "Teacher Glauber",
        jobTitle: meta.cargo,
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/glauber.webp`,
        email: contato.email,
        telephone: contato.telefone.replace(/[^+\d]/g, ""),
        knowsLanguage: ["pt-BR", "en", "es"],
        sameAs: [links.instagram],
      },
      {
        "@type": "Service",
        "@id": `${url}#aulas`,
        name: meta.servico,
        serviceType: meta.servico,
        description: meta.descricao,
        url,
        inLanguage: locale,
        provider: { "@id": `${SITE_URL}/#glauber` },
        areaServed: "Worldwide",
        availableChannel: { "@type": "ServiceChannel", serviceUrl: links.aulaGratuita },
        offers: {
          "@type": "Offer",
          url: `${url}#valores`,
          priceCurrency: "BRL",
          price: valores.preco,
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: valores.preco,
            priceCurrency: "BRL",
            unitText: meta.unidadePreco,
          },
        },
      },
    ],
  };
  return (
    <>
      <Head>
        <title>{meta.titulo}</title>
        <meta name="description" content={meta.descricao} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={url} />
        {IDIOMAS.map((idioma) => (
          <link key={idioma.locale} rel="alternate" hrefLang={idioma.locale} href={`${SITE_URL}${idioma.caminho}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Teacher Glauber" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={meta.titulo} />
        <meta property="og:description" content={meta.descricao} />
        <meta property="og:image" content={imagem} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={meta.imagemAlt} />
        <meta property="og:locale" content={meta.ogLocale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.titulo} />
        <meta name="twitter:description" content={meta.descricao} />
        <meta name="twitter:image" content={imagem} />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
