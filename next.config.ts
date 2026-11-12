import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Rotas por idioma: / (português), /en e /es
  i18n: {
    locales: ["pt-BR", "en", "es"],
    defaultLocale: "pt-BR",
    localeDetection: false,
  },
  // A foto já é um .webp leve; sem otimização sob demanda, não depende do serviço de imagens da Cloudflare.
  images: { unoptimized: true },
  // Nos endereços provisórios (*.workers.dev da Cloudflare ou *.vercel.app) o Google
  // não indexa. No domínio teacherglauber.com.br o cabeçalho não é enviado.
  // O português mora na raiz; /pt-BR (gerado pelo i18n) redireciona para "/" e evita página duplicada.
  async redirects() {
    return [{ source: "/pt-BR/:path*", destination: "/:path*", locale: false, permanent: true }];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        locale: false,
        has: [{ type: "host", value: "(?<sub>.*)\\.(?:workers\\.dev|pages\\.dev|vercel\\.app)" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;

// Permite usar os recursos da Cloudflare durante o `npm run dev`.
initOpenNextCloudflareForDev();
