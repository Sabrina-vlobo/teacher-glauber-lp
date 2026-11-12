import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import AnimatedContent from "./reactbits/AnimatedContent";
import ButtonLink from "./ButtonLink";
import { useContent } from "@/lib/content";

export default function Valores() {
  const { CTA, links, valores, ui } = useContent();
  return (
    <section id="valores" className="bg-fundo py-20 md:py-32">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start px-5 text-left md:items-center md:px-8 md:text-center xl:px-0">
        <h2 className="max-w-[920px] font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.025em] text-texto">
          {ui.precoAntes}{" "}
          <span className="whitespace-nowrap text-amarelo">
            R$&nbsp;{valores.preco}
            {ui.precoMes}
          </span>
          .
        </h2>
        <p className="mt-6 max-w-[640px] text-[17px] leading-[1.6] text-texto-2 md:text-[20px]">{valores.texto}</p>

        <AnimatedContent
          stagger={0.07}
          distance={14}
          duration={0.6}
          ease="expo.out"
          threshold={0.6}
          className="mt-8 flex flex-col gap-3 md:mt-10 md:flex-row md:flex-wrap md:justify-center md:gap-x-8"
        >
          {valores.incluso.map((item) => (
            <p key={item} className="flex items-center gap-2.5 text-[16px] font-medium text-texto md:text-[17px]">
              <CheckIcon aria-hidden="true" weight="bold" className="size-4 text-amarelo" />
              {item}
            </p>
          ))}
        </AnimatedContent>

        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <ButtonLink href={links.aulaGratuita}>{CTA}</ButtonLink>
          <ButtonLink href={links.duasAulas} variant="contorno-claro">
            <span className="sm:hidden">{valores.secundarioCurto}</span>
            <span className="hidden sm:inline">{valores.secundario}</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
