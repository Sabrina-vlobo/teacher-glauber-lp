import localFont from "next/font/local";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Fontes servidas pelo próprio site, com preload e fallback ajustado
// (evita o texto "pular" quando a fonte termina de carregar).
const montserrat = localFont({
  src: "../fonts/montserrat-latin-wght-normal.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const plex = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500" },
    { path: "../fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600" },
  ],
  display: "swap",
  // Só o Montserrat (título do hero) é pré-carregado; o texto corrido usa o fallback ajustado até a fonte chegar.
  preload: false,
});

const fontes = `:root{--font-display:${montserrat.style.fontFamily},ui-sans-serif,system-ui,sans-serif;--font-sans:${plex.style.fontFamily},ui-sans-serif,system-ui,sans-serif}`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontes }} />
      <Component {...pageProps} />
    </>
  );
}
