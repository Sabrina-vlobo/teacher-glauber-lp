import type { CSSProperties } from "react";
import BlurText from "./reactbits/BlurText";
import AnimatedContent from "./reactbits/AnimatedContent";
import SpotlightCard from "./reactbits/SpotlightCard";
import ButtonLink from "./ButtonLink";
import { useContent, type Tom } from "@/lib/content";

const TONS: Record<
  Tom,
  { theme: "dark" | "light"; surface: string; spotlight: string; idioma: string; exemplo: string; titulo: string; texto: string }
> = {
  escuro: {
    theme: "dark",
    surface: "#0e1116",
    spotlight: "rgba(255,194,0,0.9)",
    idioma: "text-texto-2",
    exemplo: "text-texto",
    titulo: "text-texto",
    texto: "text-texto-2",
  },
  papel: {
    theme: "light",
    surface: "#f6f5f1",
    spotlight: "#0e1116",
    idioma: "text-grafite",
    exemplo: "text-tinta",
    titulo: "text-tinta",
    texto: "text-grafite",
  },
  claro: {
    theme: "light",
    surface: "#ffffff",
    spotlight: "#0e1116",
    idioma: "text-grafite",
    exemplo: "text-tinta",
    titulo: "text-tinta",
    texto: "text-grafite",
  },
  amarelo: {
    theme: "light",
    surface: "#ffc200",
    spotlight: "#ffffff",
    idioma: "text-tinta/70",
    exemplo: "text-tinta",
    titulo: "text-tinta",
    texto: "text-tinta",
  },
};

// Linha 1: largo + estreito. Linha 2: estreito + largo.
const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export default function Aulas() {
  const { CTA, aulas, links } = useContent();
  return (
    <section id="aulas" className="on-light bg-branco py-20 text-tinta md:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0">
        <BlurText
          as="h2"
          text={aulas.titulo}
          delay={60}
          threshold={0.4}
          className="max-w-[720px] font-display text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.01em]"
        />

        <AnimatedContent
          stagger={0.09}
          distance={40}
          duration={0.85}
          ease="expo.out"
          threshold={0.15}
          className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-6"
        >
          {aulas.cards.map((card, index) => {
            const tom = TONS[card.tom];
            const largo = index === 0 || index === 3;
            return (
              <SpotlightCard
                key={`${card.titulo}-${index}`}
                theme={tom.theme}
                spotlightColor={tom.spotlight}
                intensity={card.tom === "escuro" ? 0.35 : 0.18}
                spotlightSize={420}
                className={`flex min-h-[300px] flex-col rounded-2xl! p-7! md:p-10! lg:min-h-[380px] ${SPANS[index]} ${
                  card.tom === "claro" ? "ring-1 ring-nevoa" : ""
                }`}
                style={{ "--spotlight-card-surface": tom.surface, "--spotlight-card-shadow": "none" } as CSSProperties}
              >
                <p className={`text-[14px] font-semibold ${tom.idioma}`}>{card.idioma}</p>
                <p
                  lang={card.lang}
                  className={`mt-3 font-display font-semibold leading-[1.25] ${tom.exemplo} ${
                    largo ? "text-[clamp(1.4rem,2.6vw,2rem)]" : "text-[clamp(1.3rem,2.1vw,1.65rem)]"
                  }`}
                >
                  {card.exemplo}
                </p>
                <div className="mt-auto pt-10">
                  <h3 className={`font-display text-[18px] font-semibold md:text-[20px] ${tom.titulo}`}>{card.titulo}</h3>
                  <p className={`mt-2 max-w-[460px] text-[16px] leading-[1.6] md:text-[17px] ${tom.texto}`}>{card.texto}</p>
                </div>
              </SpotlightCard>
            );
          })}
        </AnimatedContent>

        <div className="mt-20 md:mt-28">
          <h3 className="font-display text-[clamp(1.6rem,2.8vw,2.1rem)] font-bold leading-[1.15] tracking-[-0.01em]">
            {aulas.passosTitulo}
          </h3>
          <AnimatedContent
            stagger={0.12}
            distance={28}
            duration={0.75}
            ease="expo.out"
            threshold={0.25}
            className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-5"
          >
            {aulas.passos.map((passo, index) => (
              <div
                key={passo.titulo}
                className="relative flex flex-col rounded-2xl bg-papel p-7 ring-1 ring-nevoa/70 md:p-9"
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-amarelo font-display text-[24px] font-bold text-tinta md:size-16 md:text-[28px]">
                    {index + 1}
                  </span>
                  {index < aulas.passos.length - 1 ? (
                    <span aria-hidden="true" className="hidden h-px flex-1 bg-tinta/15 md:block" />
                  ) : null}
                </div>
                <h4 className="mt-7 font-display text-[22px] font-bold leading-[1.2] md:mt-9 md:text-[24px]">
                  {passo.titulo}
                </h4>
                <p className="mt-3 text-[16px] leading-[1.6] text-grafite md:text-[17px]">{passo.texto}</p>
              </div>
            ))}
          </AnimatedContent>
          <div className="mt-12">
            <ButtonLink href={links.aulaGratuita} variant="tinta">
              {CTA}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
