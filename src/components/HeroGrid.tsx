import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// WebGL só no cliente e só depois que a página terminou de carregar.
const DotGrid = dynamic(() => import("./reactbits/DotGrid"), { ssr: false });

/**
 * Fundo do hero. Começa com pontos em CSS (custo zero) e, em telas grandes com
 * mouse, troca pelo DotGrid interativo quando o navegador fica ocioso. No celular
 * o efeito de proximidade do cursor não existe, então fica só a versão estática.
 */
export default function HeroGrid() {
  const [interativo, setInterativo] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    if (!media.matches) return;
    let idle = 0;
    let timer = 0;
    const iniciar = () => {
      const ric = window.requestIdleCallback;
      if (ric) idle = ric(() => setInterativo(true), { timeout: 2500 });
      else timer = window.setTimeout(() => setInterativo(true), 1200);
    };
    if (document.readyState === "complete") iniciar();
    else window.addEventListener("load", iniciar, { once: true });
    return () => {
      window.removeEventListener("load", iniciar);
      if (idle) window.cancelIdleCallback?.(idle);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 [mask-image:radial-gradient(120%_90%_at_75%_35%,#000_25%,transparent_75%)]"
    >
      <div className="hero-dots absolute inset-0" style={{ opacity: interativo ? 0 : 1 }} />
      {interativo ? (
        <DotGrid
          dotSize={3}
          gap={22}
          baseColor="#34343a"
          activeColor="#ffc200"
          proximity={150}
          glow={0.45}
          swell={0.9}
          shockRadius={260}
          shockStrength={4}
        />
      ) : null}
    </div>
  );
}
