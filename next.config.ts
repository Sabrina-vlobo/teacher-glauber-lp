import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Rotas por idioma: / (português), /en e /es
  i18n: {
    locales: ["pt-BR", "en", "es"],
    defaultLocale: "pt-BR",
    localeDetection: false,
  },
};

export default nextConfig;
