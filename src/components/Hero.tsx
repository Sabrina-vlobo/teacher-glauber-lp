import dynamic from "next/dynamic";
import BlurText from "./reactbits/BlurText";
import AnimatedContent from "./reactbits/AnimatedContent";
import StarBorder from "./reactbits/StarBorder";
import ButtonLink from "./ButtonLink";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { useContent } from "@/lib/content";

// WebGL só no cliente; o fundo é decorativo, então não bloqueia a primeira pintura.
const DotGrid = dynamic(() => import("./reactbits/DotGrid"), { ssr: false });

/** Balões com a pergunta de abertura de toda entrevista, nos três idiomas. */
const BALOES = [
  { cor: "bg-branco text-tinta", cauda: "left-7 border-t-branco", pos: "md:left-0 md:top-0", alinhamento: "self-start" },
  {
    cor: "bg-superficie-2 text-texto",
    cauda: "right-8 border-t-superficie-2",
    pos: "md:right-0 md:top-[84px]",
    alinhamento: "self-end",
  },
  { cor: "bg-amarelo text-tinta", cauda: "left-9 border-t-amarelo", pos: "md:left-10 md:top-[168px]", alinhamento: "self-start" },
];

export default function Hero() {
  const { CTA, hero, links, ui } = useContent();
  const ultimaPalavra = hero.titulo.split(" ").length - 1;
  return (
    <section id="topo" className="relative isolate flex flex-col justify-center overflow-hidden bg-fundo pt-[72px] lg:min-h-[100svh]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 [mask-image:radial-gradient(120%_90%_at_75%_35%,#000_25%,transparent_75%)]"
      >
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
      </div>
      <span id="nav-sentinel" aria-hidden="true" className="absolute top-0 h-px w-px" />

      <div className="mx-auto w-full max-w-[1200px] px-5 pt-14 pb-20 md:px-8 md:pt-20 md:pb-24 lg:pt-12 lg:pb-20 xl:px-0">
        <BlurText
          as="h1"
          text={hero.titulo}
          trigger="load"
          delay={70}
          stepDuration={0.32}
          blur={12}
          distance={18}
          highlightWords={[ultimaPalavra]}
          highlightClassName="text-amarelo"
          className="max-w-[1160px] font-display text-[clamp(2.2rem,5.1vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.025em] text-texto"
        />

        <div className="mt-10 grid items-center gap-14 md:mt-14 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-16">
          <AnimatedContent trigger="mount" delay={0.75} distance={24} duration={0.7} ease="expo.out">
            <p className="max-w-[500px] text-[17px] leading-[1.6] text-texto-2 md:text-[20px] md:leading-[1.5]">
              {hero.subtitulo}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <StarBorder
                as="a"
                href={links.aulaGratuita}
                target="_blank"
                rel="noopener noreferrer"
                radius={8}
                thickness={1.5}
                duration={5}
                trailLength={0.35}
                glow={0.8}
                color="#ffffff"
                backgroundColor="#ffc200"
                textColor="#0e1116"
                borderColor="rgba(255,255,255,0)"
                hover="lap"
                className="whitespace-nowrap px-7! py-[17px]! font-display transition-transform duration-150 active:scale-[0.97] text-[16px] font-semibold leading-none"
              >
                <WhatsappLogoIcon aria-hidden="true" weight="fill" className="size-5" />
                {CTA}
              </StarBorder>
              <ButtonLink href="#valores" variant="contorno-claro" whatsapp={false} external={false}>
                {ui.verValores}
              </ButtonLink>
            </div>
          </AnimatedContent>

          <div
            aria-label={ui.baloes}
            role="group"
            className="relative flex flex-col gap-5 md:h-[236px] md:block"
          >
            {hero.perguntas.map((pergunta, index) => (
              <AnimatedContent
                key={pergunta.texto}
                trigger="mount"
                delay={1 + index * 0.16}
                distance={28}
                scale={0.94}
                duration={0.8}
                ease="back.out(1.4)"
                className={`${BALOES[index].alinhamento} md:absolute ${BALOES[index].pos}`}
              >
                <p
                  lang={["en", "es", "pt"][index]}
                  className={`relative rounded-[20px] px-5 py-3.5 font-display text-[18px] font-semibold md:rounded-[24px] md:px-7 md:py-5 md:text-[22px] ${BALOES[index].cor}`}
                >
                  {pergunta.texto}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-[12px] size-0 border-x-[10px] border-t-[14px] border-x-transparent md:-bottom-[15px] md:border-x-[13px] md:border-t-[16px] ${BALOES[index].cauda}`}
                  />
                </p>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
