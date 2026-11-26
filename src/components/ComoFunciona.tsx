import { comoFunciona } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function ComoFunciona() {
  return (
    <section id="como-funciona" aria-labelledby="titulo-como-funciona" className="section border-y border-line bg-ink-soft">
      <div className="container-site">
        <SectionHeading id="titulo-como-funciona" rotulo={comoFunciona.rotulo} titulo={comoFunciona.titulo} />

        <ol className="mt-14 grid gap-0 lg:grid-cols-4 lg:gap-8">
          {comoFunciona.passos.map((passo, i) => {
            const ultimo = i === comoFunciona.passos.length - 1;
            return (
              <Reveal as="li" key={passo.numero} delay={i * 0.1} className="relative flex gap-5 pb-10 lg:block lg:pb-0">
                {/* linha que conecta os passos (vertical no celular, horizontal no desktop) */}
                {!ultimo && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-[23px] top-12 w-px bg-line lg:left-14 lg:right-[-2rem] lg:top-6 lg:h-px lg:w-auto"
                  />
                )}
                <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/60 bg-ink font-mono text-sm font-medium text-accent">
                  {passo.numero}
                </span>
                <div className="pt-2.5 lg:pt-0">
                  <h3 className="text-xl lg:mt-6">{passo.titulo}</h3>
                  <p className="mt-2 text-muted">{passo.texto}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
