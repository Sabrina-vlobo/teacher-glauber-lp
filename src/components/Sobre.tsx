import Image from "next/image";
import { ArrowRightIcon, CheckIcon, StarIcon } from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "./reactbits/ScrollReveal";
import RotatingText from "./reactbits/RotatingText";
import CountUp from "./reactbits/CountUp";
import BlurText from "./reactbits/BlurText";
import AnimatedContent from "./reactbits/AnimatedContent";
import { useContent } from "@/lib/content";

export default function Sobre() {
  const { depoimentos, links, sobre, ui } = useContent();
  return (
    <section id="sobre" className="on-light bg-branco py-20 text-tinta md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0">
        {/* Abertura: a frase acende palavra por palavra conforme a rolagem */}
        <ScrollReveal
          baseOpacity={0.14}
          enableBlur
          blurStrength={4}
          baseRotation={0}
          stagger={0.06}
          containerClassName="my-0! max-w-[1000px]"
          textClassName="font-display font-bold text-[clamp(2.4rem,6.2vw,4.5rem)]! leading-[1.05]! tracking-[-0.025em] text-tinta"
          wordAnimationEnd="top 35%"
        >
          {sobre.abertura}
        </ScrollReveal>
        <AnimatedContent distance={20} duration={0.7} ease="expo.out" threshold={0.15}>
          <p className="mt-6 max-w-[820px] text-[17px] leading-[1.6] text-grafite md:text-[20px] md:leading-[1.55]">
            {sobre.aberturaTexto}
          </p>
        </AnimatedContent>

        <div className="mt-16 grid items-center gap-12 md:mt-20 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-24">
          {/* Foto revelada de baixo para cima, sobre a faixa amarela */}
          <AnimatedContent wipe="up" distance={0} duration={1.1} ease="power3.out" threshold={0.25}>
            <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl bg-tinta sm:max-w-[400px]">
              <Image
                src="/glauber.webp"
                alt={ui.fotoAlt}
                fill
                sizes="(min-width: 640px) 400px, 280px"
                className="object-cover object-top"
                priority={false}
              />
            </div>
          </AnimatedContent>

          <div>
            <h3 className="flex flex-wrap items-baseline gap-x-[0.3em] font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.01em]">
              <span className="sr-only">{sobre.saudacoesSr} </span>
              <span aria-hidden="true" className="inline-flex">
                <RotatingText
                  texts={[...sobre.saudacoes]}
                  rotationInterval={2200}
                  effect="slide"
                  staggerDuration={0.02}
                  staggerFrom="first"
                  mainClassName="overflow-hidden rounded-lg bg-amarelo px-3 pb-1 pt-0.5 text-tinta"
                  splitLevelClassName="overflow-hidden pb-0.5"
                  transition={{ type: "spring", damping: 28, stiffness: 380 }}
                />
              </span>
              <span>{sobre.nome}</span>
            </h3>
            <p className="mt-5 text-[17px] leading-[1.6] text-grafite md:text-[19px]">{sobre.texto}</p>

            <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-nevoa py-6 sm:w-fit sm:grid-cols-[auto_auto] sm:gap-14">
              {sobre.numeros.map((numero) => (
                <div key={numero.legenda}>
                  <dt className="sr-only">{numero.legenda}</dt>
                  <dd className="font-display text-[clamp(2rem,3.4vw,2.6rem)] font-bold leading-none tracking-[-0.02em]">
                    <span className="sr-only">
                      {numero.prefixo}
                      {numero.valor}
                      {numero.sufixo}
                    </span>
                    <span aria-hidden="true" className="tabular">
                      {numero.prefixo}
                      <CountUp to={numero.valor} duration={1.6} />
                      {numero.sufixo}
                    </span>
                  </dd>
                  <dd className="mt-2 text-[14px] text-grafite">{numero.legenda}</dd>
                </div>
              ))}
            </dl>

            <AnimatedContent stagger={0.08} distance={14} duration={0.6} ease="expo.out" threshold={0.15}>
              <ul className="mt-8 flex flex-col gap-3.5">
                {sobre.formacao.map((curso) => (
                  <li key={curso} className="flex items-start gap-3 text-[16px] font-medium md:text-[17px]">
                    <CheckIcon aria-hidden="true" weight="bold" className="mt-1 size-4 shrink-0" />
                    {curso}
                  </li>
                ))}
              </ul>
            </AnimatedContent>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="mt-24 border-t border-nevoa pt-16 md:mt-32 md:pt-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <BlurText
              as="h3"
              text={depoimentos.titulo}
              delay={70}
              threshold={0.5}
              className="font-display text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.01em]"
            />
            <a
              href={links.avaliacoesGoogle}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex w-fit items-center gap-3 rounded-full border border-nevoa px-4 py-2.5 hover:border-tinta/40"
            >
              <span className="font-display text-[18px] font-bold">5,0</span>
              <AnimatedContent stagger={0.06} distance={6} scale={0.9} duration={0.45} ease="back.out(2)" threshold={0.15} className="flex">
                {Array.from({ length: depoimentos.nota }, (_, index) => (
                  <StarIcon key={index} aria-hidden="true" weight="fill" className="size-4 text-amarelo" />
                ))}
              </AnimatedContent>
              <span className="text-[14px] text-grafite">
                <CountUp to={depoimentos.total} duration={1.2} /> {ui.avaliacoesGoogle}
              </span>
            </a>
          </div>

          <AnimatedContent
            stagger={0.12}
            distance={32}
            duration={0.8}
            ease="expo.out"
            threshold={0.2}
            className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-12 lg:gap-16"
          >
            <figure className="rounded-2xl bg-tinta p-8 md:p-14 lg:col-span-7">
              <blockquote className="font-display text-[clamp(1.25rem,2.2vw,1.85rem)] font-medium leading-[1.4] text-texto">
                {depoimentos.destaque.texto}
              </blockquote>
              <figcaption className="mt-8 text-[16px] font-semibold text-amarelo">{depoimentos.destaque.nome}</figcaption>
            </figure>
            <div className="flex flex-col justify-center divide-y divide-nevoa lg:col-span-5">
              {depoimentos.outros.map((item) => (
                <figure key={item.nome} className="py-7 first:pt-0 last:pb-0">
                  <blockquote className="text-[17px] leading-[1.6] md:text-[19px]">{item.texto}</blockquote>
                  <figcaption className="mt-3 text-[14px] font-semibold text-grafite">{item.nome}</figcaption>
                </figure>
              ))}
            </div>
          </AnimatedContent>

          {depoimentos.traducao ? <p className="mt-8 text-[14px] text-grafite">{depoimentos.traducao}</p> : null}

          <a
            href={links.avaliacoesGoogle}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 text-[16px] font-semibold underline decoration-1 underline-offset-4"
          >
            {ui.verTodasAvaliacoes}
            <ArrowRightIcon
              aria-hidden="true"
              className="size-4 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
