import { ArrowRight } from "lucide-react";
import { problemas } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Problemas() {
  return (
    <section id="problemas" aria-labelledby="titulo-problemas" className="section border-y border-line bg-ink-soft">
      <div className="container-site">
        <SectionHeading id="titulo-problemas" rotulo={problemas.rotulo} titulo={problemas.titulo} />

        <ol className="mt-14 grid overflow-hidden rounded-2xl border border-line md:grid-cols-3">
          {problemas.itens.map((item, i) => (
            <Reveal
              as="li"
              key={item.numero}
              delay={i * 0.08}
              className="border-t border-line p-7 first:border-t-0 sm:p-8 md:border-l md:border-t-0 md:first:border-l-0"
            >
              <span className="font-mono text-4xl font-medium text-accent">{item.numero}</span>
              <h3 className="mt-6 text-xl leading-snug">{item.titulo}</h3>
              <p className="mt-3 text-muted">{item.texto}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <p className="text-lg text-text">{problemas.fechamento}</p>
          <a href="#servicos" className="group inline-flex min-h-[44px] items-center gap-2 font-medium text-accent">
            {problemas.link}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
