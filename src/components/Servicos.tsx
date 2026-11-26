import { m } from "framer-motion";
import { CodeXml, LifeBuoy, MonitorSmartphone, Workflow, type LucideIcon } from "lucide-react";
import { servicos, type IconeServico } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const icones: Record<IconeServico, LucideIcon> = {
  site: MonitorSmartphone,
  sistema: CodeXml,
  automacao: Workflow,
  suporte: LifeBuoy,
};

export function Servicos() {
  return (
    <section id="servicos" aria-labelledby="titulo-servicos" className="section">
      <div className="container-site">
        <SectionHeading
          id="titulo-servicos"
          rotulo={servicos.rotulo}
          titulo={servicos.titulo}
          subtitulo={servicos.subtitulo}
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {servicos.itens.map((item, i) => {
            const Icone = icones[item.icone];
            return (
              <Reveal as="li" key={item.numero} delay={(i % 2) * 0.08} className="h-full">
                <m.article
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-ink-card p-7 transition-colors duration-300 hover:border-accent/50 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-ink text-accent transition-colors duration-300 group-hover:border-accent/50">
                      <Icone className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-sm text-muted">{item.numero}</span>
                  </div>
                  <h3 className="mt-7 text-2xl">{item.titulo}</h3>
                  <p className="mt-3 text-muted">{item.texto}</p>
                </m.article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
