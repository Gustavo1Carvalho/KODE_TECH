import { useId, useState } from "react";
import { m } from "framer-motion";
import { Plus } from "lucide-react";
import { faq } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function FAQ() {
  const [aberta, setAberta] = useState<number | null>(0);
  const base = useId();

  return (
    <section id="faq" aria-labelledby="titulo-faq" className="section">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading id="titulo-faq" rotulo={faq.rotulo} titulo={faq.titulo} />

        <Reveal className="border-t border-line">
          {faq.itens.map((item, i) => {
            const estaAberta = aberta === i;
            const botaoId = `${base}-botao-${i}`;
            const painelId = `${base}-painel-${i}`;
            return (
              <div key={item.pergunta} className="border-b border-line">
                <h3 className="text-lg sm:text-xl">
                  <button
                    id={botaoId}
                    type="button"
                    aria-expanded={estaAberta}
                    aria-controls={painelId}
                    onClick={() => setAberta(estaAberta ? null : i)}
                    className="flex min-h-[64px] w-full items-center justify-between gap-6 py-4 text-left font-medium transition-colors hover:text-accent"
                  >
                    {item.pergunta}
                    <m.span
                      aria-hidden="true"
                      initial={false}
                      animate={{ rotate: estaAberta ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        estaAberta ? "border-accent text-accent" : "border-line text-muted"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </m.span>
                  </button>
                </h3>
                {/* O texto fica sempre no HTML (bom para o Google); só a altura anima. */}
                <m.div
                  id={painelId}
                  role="region"
                  aria-labelledby={botaoId}
                  aria-hidden={!estaAberta}
                  inert={!estaAberta}
                  initial={false}
                  animate={{ height: estaAberta ? "auto" : 0, opacity: estaAberta ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 pr-12 text-muted">{item.resposta}</p>
                </m.div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
