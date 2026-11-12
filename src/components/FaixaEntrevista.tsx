import ScrollVelocity from "./reactbits/ScrollVelocity";
import { faixaEntrevista } from "@/lib/content";

/**
 * Faixa decorativa entre o hero e as aulas: perguntas reais de entrevista
 * correndo em duas direções. A velocidade acompanha a rolagem (única faixa
 * em movimento contínuo da página).
 */
export default function FaixaEntrevista() {
  const metade = Math.ceil(faixaEntrevista.length / 2);
  const linhas = [faixaEntrevista.slice(0, metade), faixaEntrevista.slice(metade)];
  const separador = <span className="text-amarelo">/</span>;

  return (
    <div aria-hidden="true" className="select-none border-y border-borda bg-fundo py-8 md:py-10">
      <ScrollVelocity
        texts={linhas.map((linha) => (
          <span key={linha[0]} className="inline-flex gap-[0.6em]">
            {linha.map((frase, index) => (
              <span key={frase} className="inline-flex gap-[0.6em]">
                {frase}
                {index < linha.length - 1 ? separador : null}
              </span>
            ))}
          </span>
        ))}
        velocity={38}
        numCopies={4}
        separator={separador}
        gap={28}
        fadeEdges
        outlineAlternate
        fontSize="clamp(1.75rem, 4.2vw, 3.75rem)"
        fontWeight={700}
        color="#f5f5f4"
        scrollerStyle={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em", filter: "none" }}
        parallaxStyle={{ paddingBlock: "0.22em" }}
      />
    </div>
  );
}
