import { EnvelopeSimpleIcon, InstagramLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import BlurText from "./reactbits/BlurText";
import AnimatedContent from "./reactbits/AnimatedContent";
import StarBorder from "./reactbits/StarBorder";
import { useContent } from "@/lib/content";

export default function CtaFinal() {
  const { CTA, contato, ctaFinal, links, nav, ui } = useContent();
  return (
    <footer id="contato" className="bg-fundo pt-20 pb-10 md:pt-28 md:pb-14">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0">
        <AnimatedContent distance={40} scale={0.97} duration={0.9} ease="expo.out" threshold={0.25}>
          <div className="flex flex-col gap-10 rounded-2xl bg-amarelo p-8 text-tinta md:p-16 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[640px]">
              <BlurText
                as="h2"
                text={ctaFinal.titulo}
                delay={60}
                threshold={0.6}
                blur={8}
                className="font-display text-[clamp(1.9rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.025em]"
              />
              <p className="mt-5 text-[17px] leading-[1.6] md:text-[19px]">{ctaFinal.texto}</p>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:items-start lg:items-center">
              <StarBorder
                as="a"
                href={links.aulaGratuita}
                target="_blank"
                rel="noopener noreferrer"
                radius={8}
                thickness={1.5}
                duration={4.5}
                glow={0.7}
                color="#ffc200"
                backgroundColor="#0e1116"
                textColor="#f5f5f4"
                borderColor="rgba(255,255,255,0.08)"
                className="w-full whitespace-nowrap px-8! py-[18px]! sm:w-auto font-display text-[16px] font-semibold leading-none transition-transform duration-150 active:scale-[0.97]"
              >
                <WhatsappLogoIcon aria-hidden="true" weight="fill" className="size-5" />
                {CTA}
              </StarBorder>
              <p className="text-center text-[14px]">WhatsApp {contato.telefone}</p>
            </div>
          </div>
        </AnimatedContent>

        <div className="mt-16 grid gap-10 border-t border-borda pt-12 md:mt-24 md:grid-cols-[1fr_auto_auto] md:gap-16">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-horizontal-escuro.svg" alt={ui.logoAlt} width={195} height={60} className="h-[60px] w-auto" />
            <p className="mt-4 text-[14px] text-texto-2">© {new Date().getFullYear()} Teacher Glauber</p>
          </div>
          <ul className="flex flex-col gap-3.5 text-[16px]">
            <li>
              <a href={links.aulaGratuita} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 hover:text-amarelo">
                <WhatsappLogoIcon aria-hidden="true" className="size-5 text-texto-2" />
                {contato.telefone}
              </a>
            </li>
            <li>
              <a href={links.email} className="inline-flex items-center gap-2.5 hover:text-amarelo">
                <EnvelopeSimpleIcon aria-hidden="true" className="size-5 text-texto-2" />
                {contato.email}
              </a>
            </li>
            <li>
              <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 hover:text-amarelo">
                <InstagramLogoIcon aria-hidden="true" className="size-5 text-texto-2" />
                {contato.instagram}
              </a>
            </li>
          </ul>
          <nav aria-label={ui.rodape}>
            <ul className="flex flex-wrap gap-x-7 gap-y-3 text-[16px] md:flex-col md:gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-amarelo">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
