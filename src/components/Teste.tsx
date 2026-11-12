import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import BlurText from "./reactbits/BlurText";
import AnimatedContent from "./reactbits/AnimatedContent";
import ButtonLink from "./ButtonLink";
import { useContent } from "@/lib/content";

// Alturas da escada A1-C2 (em % da altura total do gráfico)
const ALTURAS = [31, 45, 58, 72, 86, 100];

export default function Teste() {
  const { links, teste, ui } = useContent();
  return (
    <section id="teste" className="bg-fundo py-20 md:py-[120px]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_540px] lg:gap-24 xl:px-0">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-texto-2">{teste.chamada}</p>
          <BlurText
            as="h2"
            text={teste.titulo}
            delay={60}
            threshold={0.4}
            className="mt-4 font-display text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.01em] text-texto"
          />
          <p className="mt-5 max-w-[520px] text-[16px] leading-[1.65] text-texto-2 md:text-[17px]">{teste.texto}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={links.testeCambridge} whatsapp={false}>
              {ui.fazerTeste}
              <ArrowUpRightIcon aria-hidden="true" weight="bold" className="size-4" />
            </ButtonLink>
            <ButtonLink href={links.resultadoTeste} variant="contorno-claro">
              {ui.enviarResultado}
            </ButtonLink>
          </div>
          <p className="mt-6 max-w-[520px] text-[14px] leading-[1.5] text-texto-2">{teste.nota}</p>
        </div>

        <figure aria-label={ui.escala}>
          <AnimatedContent
            stagger={0.08}
            distance={36}
            duration={0.75}
            ease="expo.out"
            threshold={0.35}
            className="flex h-[200px] items-end gap-1.5 md:h-[280px] md:gap-2.5"
          >
            {teste.niveis.map((nivel, index) => {
              const destaque = nivel === "B1";
              return (
                <div
                  key={nivel}
                  style={{ height: `${ALTURAS[index]}%` }}
                  className={`flex flex-1 justify-center rounded-lg pt-3 font-display text-[15px] font-semibold md:rounded-xl md:pt-4 md:text-[17px] ${
                    destaque ? "bg-amarelo text-tinta" : "border border-borda bg-superficie text-texto"
                  }`}
                >
                  {nivel}
                </div>
              );
            })}
          </AnimatedContent>
          <figcaption className="mt-4 grid grid-cols-3 text-center text-[13px] text-texto-2 md:text-[14px]">
            {teste.faixas.map((faixa) => (
              <span key={faixa}>{faixa}</span>
            ))}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
