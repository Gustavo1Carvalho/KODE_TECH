import { sobre } from "../data/content";
import { Reveal } from "./ui/Reveal";

export function Sobre() {
  return (
    <section id="sobre" aria-labelledby="titulo-sobre" className="section border-y border-line bg-ink-soft">
      <div className="container-site grid items-center gap-12 md:grid-cols-[minmax(0,340px)_1fr] lg:gap-20">
        <Reveal className="mx-auto w-full max-w-[340px]">
          <figure className="relative">
            <img
              src={sobre.foto}
              alt={sobre.fotoAlt}
              width={640}
              height={800}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-2xl border border-line object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 rounded-xl border border-line bg-ink px-3 py-2 font-mono text-sm font-bold"
            >
              <span className="text-accent">&lt;</span>K<span className="text-accent">/&gt;</span>
            </span>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">{sobre.rotulo}</p>
          <h2 id="titulo-sobre" className="mt-4 text-[1.875rem] leading-[1.15] sm:text-[2.25rem] lg:text-[2.75rem]">
            {sobre.titulo}
          </h2>
          {sobre.paragrafos.map((texto) => (
            <p key={texto} className="mt-5 text-lg text-muted">
              {texto}
            </p>
          ))}

          <dl className="mt-8 border-t border-line">
            {sobre.fatos.map((f) => (
              <div key={f.chave} className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:gap-6">
                <dt className="font-mono text-sm text-accent sm:w-32 sm:shrink-0">{f.chave}</dt>
                <dd className="text-text">{f.valor}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
