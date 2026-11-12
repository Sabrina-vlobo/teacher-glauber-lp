import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";

type Variant = "amarelo" | "tinta" | "contorno-claro" | "contorno-escuro";

const VARIANTS: Record<Variant, string> = {
  amarelo: "bg-amarelo text-tinta hover:bg-[#ffcd33]",
  tinta: "bg-tinta text-branco hover:bg-[#1d222b]",
  "contorno-claro": "border border-white/60 text-texto hover:border-white hover:bg-white/[0.06]",
  "contorno-escuro": "border border-tinta/80 text-tinta hover:border-tinta hover:bg-tinta/[0.05]",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  whatsapp?: boolean;
  external?: boolean;
  size?: "md" | "sm";
  className?: string;
};

export default function ButtonLink({
  href,
  children,
  variant = "amarelo",
  whatsapp = true,
  external = true,
  size = "md",
  className = "",
}: Props) {
  const sizing = size === "sm" ? "px-5 py-3 text-[15px]" : "px-7 py-[17px] text-[16px]";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`press inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg font-display font-semibold leading-none ${sizing} ${VARIANTS[variant]} ${className}`}
    >
      {whatsapp && <WhatsappLogoIcon aria-hidden="true" weight="fill" className="size-5 shrink-0" />}
      {children}
    </a>
  );
}
