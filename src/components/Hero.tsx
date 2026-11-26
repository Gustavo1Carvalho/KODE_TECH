import { ArrowDown } from "lucide-react";
import { hero } from "../data/content";
import { whatsappLink } from "../lib/whatsapp";
import { WhatsAppIcon } from "./ui/BrandIcons";
import { BlinkingCursor } from "./ui/Logo";

/**
 * O título (h1) não tem animação de entrada de propósito:
 * ele é o maior elemento da tela (LCP) e precisa aparecer imediatamente.
 */
export function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo-hero" className="relative overflow-hidden pb-20 pt-28 sm:pt-36 lg:pb-28 lg:pt-44">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <p className="eyebrow">
            {hero.rotulo} · <span className="whitespace-nowrap">{hero.local}</span>
          </p>
          <h1
            id="titulo-hero"
            className="mt-5 text-[2.5rem] leading-[1.05] sm:text-[3.75rem] lg:text-[4.25rem]"
          >
            {hero.titulo.antes}
            <span className="text-accent">{hero.titulo.destaque}</span>
            {hero.titulo.depois}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">{hero.subtitulo}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary min-h-[52px] px-7 text-[1.0625rem]">
              <WhatsAppIcon className="h-5 w-5" />
              {hero.botaoPrincipal}
            </a>
            <a href="#servicos" className="btn-secondary min-h-[52px] px-7 text-[1.0625rem]">
              {hero.botaoSecundario}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-6 font-mono text-[0.8125rem] text-muted">
            <span className="text-accent">→</span> {hero.nota}
          </p>
        </div>

        {/* Janela de código decorativa */}
        <div aria-hidden="true" className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="overflow-hidden rounded-2xl border border-line bg-ink-card shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="ml-3 font-mono text-xs text-muted">seu-negocio.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[0.8125rem] leading-7 text-muted sm:text-sm">
              <code>
                <span className="text-accent">const</span> <span className="text-text">site</span> = {"{"}
                {"\n"}  atendimento: <span className="text-text">"todo o Brasil"</span>,
                {"\n"}  rapidoNoCelular: <span className="text-accent">true</span>,
                {"\n"}  aparecerNoGoogle: <span className="text-accent">true</span>,
                {"\n"}  botaoWhatsApp: <span className="text-accent">true</span>,
                {"\n"}{"}"};
                {"\n"}
                {"\n"}<span className="text-text">kode</span>.<span className="text-accent">entregar</span>(site);
                {"\n"}<span className="opacity-70">// pronto para receber clientes</span>
                <BlinkingCursor />
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
