# Teacher Glauber · Landing page

Next.js 15 (pages router) + Tailwind CSS v4 + React Bits (GSAP / Motion).

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build de produção

```bash
npm run build
npm run start
```

## Onde editar

- Textos por idioma: `src/lib/i18n/pt.ts`, `en.ts`, `es.ts` (rotas /, /en, /es)
- WhatsApp e links: `src/lib/content.ts`
- Cores e fontes: `src/styles/globals.css` (bloco `@theme`)
- Seções: `src/components/*.tsx`
- Componentes React Bits (adaptados): `src/components/reactbits/`
- Imagens: `public/` (logo, favicon, foto `glauber.webp`)

## Pendências com o cliente

- Confirmar WhatsApp (+55 48 99928-8648) e e-mail
- FAQ "Posso remarcar?": resposta provisória
- Revisar as traduções EN/ES (src/lib/i18n/en.ts e es.ts)
