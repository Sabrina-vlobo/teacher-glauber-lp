import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { useContent } from "@/lib/content";

/**
 * Botão fixo de WhatsApp. Só aparece depois que o hero sai da tela e some
 * quando a chamada final entra (lá já existe o botão principal).
 * Entrada 250ms, saída 180ms, transform + opacity.
 */
export default function WhatsAppFlutuante() {
  const { links, ui } = useContent();
  const [passouHero, setPassouHero] = useState(false);
  const [noFinal, setNoFinal] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("topo");
    const final = document.getElementById("contato");
    if (!hero || !final) return;
    const ioHero = new IntersectionObserver(([entry]) => setPassouHero(!entry.isIntersecting), { threshold: 0 });
    const ioFinal = new IntersectionObserver(([entry]) => setNoFinal(entry.isIntersecting), { threshold: 0.1 });
    ioHero.observe(hero);
    ioFinal.observe(final);
    return () => {
      ioHero.disconnect();
      ioFinal.disconnect();
    };
  }, []);

  const visivel = passouHero && !noFinal;

  return (
    <a
      href={links.aulaGratuita}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ui.whatsappAria}
      tabIndex={visivel ? 0 : -1}
      aria-hidden={!visivel}
      className={`fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-amarelo text-tinta shadow-[0_10px_30px_-8px_rgba(0,0,0,0.55)] transition-[translate,scale,opacity] md:right-8 md:bottom-8 md:size-16 ${
        visivel
          ? "translate-y-0 scale-100 opacity-100 duration-[250ms] ease-[var(--ease-out)]"
          : "pointer-events-none translate-y-3 scale-95 opacity-0 duration-[180ms] ease-[var(--ease-out)]"
      } active:scale-[0.97] motion-reduce:translate-y-0 motion-reduce:scale-100`}
    >
      <WhatsappLogoIcon aria-hidden="true" weight="fill" className="size-7 md:size-8" />
    </a>
  );
}
