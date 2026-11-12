import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import { useId, useState } from "react";
import BlurText from "./reactbits/BlurText";
import { useContent } from "@/lib/content";

/**
 * Acordeão: a altura anima por grid-template-rows (0fr → 1fr), o único caso
 * em que animar altura é aceitável. Abrir: 250ms; fechar: 200ms.
 */
export default function Faq() {
  const { faq } = useContent();
  const [abertos, setAbertos] = useState<number[]>([0]);
  const baseId = useId();

  const alternar = (index: number) =>
    setAbertos((atual) => (atual.includes(index) ? atual.filter((i) => i !== index) : [...atual, index]));

  return (
    <section id="duvidas" className="on-light bg-branco py-20 text-tinta md:py-32">
      <div className="mx-auto max-w-[760px] px-5 md:px-8 xl:px-0">
        <div className="text-left md:text-center">
          <BlurText
            as="h2"
            text={faq.titulo}
            delay={70}
            threshold={0.5}
            className="font-display text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.01em] md:justify-center"
          />
          <p className="mt-3 text-[16px] text-grafite md:text-[17px]">{faq.texto}</p>
        </div>

        <ul className="mt-10 border-t border-nevoa md:mt-12">
          {faq.itens.map((item, index) => {
            const aberto = abertos.includes(index);
            const painelId = `${baseId}-painel-${index}`;
            const botaoId = `${baseId}-botao-${index}`;
            return (
              <li key={item.pergunta} className="border-b border-nevoa">
                <h3>
                  <button
                    id={botaoId}
                    type="button"
                    aria-expanded={aberto}
                    aria-controls={painelId}
                    onClick={() => alternar(index)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left font-display text-[17px] font-semibold md:py-7 md:text-[20px]"
                  >
                    {item.pergunta}
                    <span className="grid size-9 shrink-0 place-items-center rounded-full transition-colors duration-150 group-hover:bg-papel">
                      <PlusIcon
                        aria-hidden="true"
                        weight="bold"
                        className={`size-5 transition-transform duration-200 ease-[var(--ease-out)] ${aberto ? "rotate-45" : ""}`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={painelId}
                  role="region"
                  aria-labelledby={botaoId}
                  className={`grid transition-[grid-template-rows,opacity] ease-[var(--ease-out)] ${
                    aberto ? "grid-rows-[1fr] opacity-100 duration-[250ms]" : "grid-rows-[0fr] opacity-0 duration-200"
                  }`}
                >
                  <div className="overflow-hidden" inert={!aberto}>
                    <p className="max-w-[640px] pb-7 text-[16px] leading-[1.65] text-grafite md:text-[17px]">{item.resposta}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
