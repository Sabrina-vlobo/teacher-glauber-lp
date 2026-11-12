// Configuração do adaptador OpenNext para rodar o Next.js na Cloudflare (Workers).
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// O site é todo estático (sem revalidação), então as páginas pré-geradas são servidas
// direto dos assets, sem precisar de bucket R2.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
