import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { menu } from "../data/content";
import { whatsappLink } from "../lib/whatsapp";
import { Logo } from "./ui/Logo";

export function Navbar() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const [ativo, setAtivo] = useState<string>("");
  const botaoRef = useRef<HTMLButtonElement>(null);
  const primeiroLinkRef = useRef<HTMLAnchorElement>(null);

  // Fundo do menu ao rolar
  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 8);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Destaca o link da seção visível
  useEffect(() => {
    const secoes = menu
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) setAtivo(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    secoes.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Menu mobile: trava a rolagem, fecha com Esc e ao virar desktop
  useEffect(() => {
    if (!aberto) return;
    document.documentElement.style.overflow = "hidden";
    primeiroLinkRef.current?.focus();

    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAberto(false);
        botaoRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const aoMudar = () => desktop.matches && setAberto(false);

    window.addEventListener("keydown", aoTeclar);
    desktop.addEventListener("change", aoMudar);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", aoTeclar);
      desktop.removeEventListener("change", aoMudar);
    };
  }, [aberto]);

  const fechar = () => setAberto(false);
  const comFundo = rolou || aberto;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        comFundo ? "border-line bg-ink/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Principal" className="container-site flex h-16 items-center justify-between lg:h-[72px]">
        <Logo onClick={fechar} />

        {/* Desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {menu.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={ativo === item.href ? "true" : undefined}
                className={`inline-flex min-h-[44px] items-center rounded-lg px-4 text-[0.95rem] transition-colors hover:text-text ${
                  ativo === item.href ? "text-text" : "text-muted"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary min-h-[44px] px-5 text-[0.95rem]">
              Pedir orçamento
            </a>
          </li>
        </ul>

        {/* Botão hambúrguer */}
        <button
          ref={botaoRef}
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-text transition-colors hover:bg-ink-raised lg:hidden"
        >
          {aberto ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {aberto && (
          <m.div
            id="menu-mobile"
            key="menu-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            // absolute + altura calculada: o backdrop-blur do header faria um "fixed" ficar preso dentro dele
            className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink lg:hidden"
          >
            <ul className="container-site flex flex-col pt-4">
              {menu.map((item, i) => (
                <m.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                >
                  <a
                    ref={i === 0 ? primeiroLinkRef : undefined}
                    href={item.href}
                    onClick={fechar}
                    className="flex min-h-[56px] items-center gap-4 border-b border-line text-2xl font-medium text-text"
                  >
                    <span aria-hidden="true" className="font-mono text-sm text-accent">
                      0{i + 1}
                    </span>
                    {item.label}
                  </a>
                </m.li>
              ))}
            </ul>
            <div className="container-site py-8">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={fechar}
                className="btn-primary w-full min-h-[52px] text-lg"
              >
                Pedir orçamento
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
