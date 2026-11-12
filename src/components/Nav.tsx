"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useRef, useState } from "react";
import ButtonLink from "./ButtonLink";
import { IDIOMAS, useContent } from "@/lib/content";

/** Seletor PT/EN/ES: troca a rota (/, /en, /es). */
function SeletorIdioma({ atual, label, onSelect }: { atual: string; label: string; onSelect?: () => void }) {
  return (
    <ul className="flex items-center gap-1" aria-label={label}>
      {IDIOMAS.map((idioma) => {
        const ativo = idioma.locale === atual;
        return (
          <li key={idioma.locale}>
            {/* Link comum (recarrega a página): as animações GSAP reiniciam limpas no novo idioma */}
            <a
              href={idioma.locale === "pt-BR" ? "/" : `/${idioma.locale}`}
              hrefLang={idioma.locale}
              lang={idioma.locale}
              title={idioma.nome}
              aria-label={idioma.nome}
              aria-current={ativo ? "true" : undefined}
              onClick={onSelect}
              className={`press block rounded-full px-2.5 py-1.5 text-[13px] font-semibold transition-colors duration-150 ${
                ativo ? "bg-superficie-2 text-texto" : "text-texto-2/80 hover:text-amarelo"
              }`}
            >
              {idioma.sigla}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Menu fixo. Ganha fundo e borda depois que o topo do hero sai da tela
 * (IntersectionObserver em um sentinela, sem listener de scroll).
 */
export default function Nav() {
  const { CTA, links, nav, ui, locale } = useContent();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const sentinel = document.getElementById("nav-sentinel");
    if (!sentinel) return;
    const io = new IntersectionObserver(([entry]) => setSolid(!entry.isIntersecting));
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color] duration-200 ease-[var(--ease-out)] ${
          solid || open
            ? "border-borda bg-fundo/85 backdrop-blur-md supports-[backdrop-filter]:bg-fundo/70"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5 md:px-8 xl:px-0">
          <a href="#topo" className="press shrink-0" aria-label={ui.voltarTopo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-horizontal-escuro.svg" alt="" width={182} height={56} className="h-[48px] w-auto md:h-[56px]" />
          </a>

          <nav aria-label={ui.secoes} className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[15px] font-medium text-texto/90 transition-colors duration-150 hover:text-amarelo"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden sm:block">
              <SeletorIdioma atual={locale} label={ui.idiomaSite} />
            </div>
            <span className="hidden md:block">
              <ButtonLink href={links.aulaGratuita} size="sm">
                {CTA}
              </ButtonLink>
            </span>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? ui.fecharMenu : ui.abrirMenu}
              className="press grid size-11 place-items-center rounded-lg bg-superficie-2 text-texto lg:hidden"
            >
              {open ? <XIcon className="size-5" aria-hidden="true" /> : <ListIcon className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile: desce do topo como uma gaveta. Entrada 400ms, saída 250ms. */}
      <div
        id="menu-mobile"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-x-0 top-[72px] bottom-0 z-30 lg:hidden ${open ? "" : "pointer-events-none"}`}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label={ui.fecharMenu}
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            open ? "opacity-100 duration-300" : "opacity-0 duration-200"
          }`}
        />
        <nav
          aria-label={ui.secoes}
          className={`relative border-b border-borda bg-fundo px-5 pt-4 pb-8 transition-[translate,opacity] ${
            open
              ? "translate-y-0 opacity-100 duration-[400ms] ease-[var(--ease-drawer)]"
              : "-translate-y-6 opacity-0 duration-200 ease-[var(--ease-out)]"
          }`}
        >
          <ul className="flex flex-col">
            {nav.map((item, index) => (
              <li key={item.href} className="border-b border-borda/70">
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-[22px] font-semibold text-texto"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={links.aulaGratuita} className="mt-6 w-full">
            {CTA}
          </ButtonLink>
          <div className="mt-6 flex justify-center sm:hidden">
            <SeletorIdioma atual={locale} label={ui.idiomaSite} onSelect={() => setOpen(false)} />
          </div>
        </nav>
      </div>
    </>
  );
}
