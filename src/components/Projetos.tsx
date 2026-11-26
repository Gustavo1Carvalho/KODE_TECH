import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projetos } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Projetos() {
  return (
    <section id="projetos" aria-labelledby="titulo-projetos" className="section">
      <div className="container-site">
        <SectionHeading
          id="titulo-projetos"
          rotulo={projetos.rotulo}
          titulo={projetos.titulo}
          subtitulo={projetos.subtitulo}
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projetos.itens.map((p, i) => (
            <Reveal as="li" key={p.titulo} delay={(i % 3) * 0.08} className="h-full">
              <m.article
                // o efeito de "levantar" só aparece em cards clicáveis, para não prometer um clique que não existe
                whileHover={p.link ? { y: -4 } : undefined}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-card transition-colors duration-300 ${
                  p.link ? "group cursor-pointer hover:border-accent/50" : ""
                }`}
              >
                <div className="relative aspect-[8/5] overflow-hidden border-b border-line bg-ink-raised">
                  <img
                    src={p.imagem}
                    alt={p.alt}
                    width={800}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  {p.selo && (
                    <span className="absolute right-3 top-3 rounded-md border border-accent/40 bg-ink/85 px-2 py-1 font-mono text-[0.6875rem] font-medium uppercase tracking-wider text-accent backdrop-blur-sm">
                      {p.selo}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <ul className="flex flex-wrap gap-2" aria-label="Categorias">
                    {p.tags.map((tag) => (
                      <li key={tag} className="rounded-md border border-line px-2 py-1 font-mono text-xs text-muted">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <h3 className="mt-4 text-xl leading-snug">{p.titulo}</h3>
                  <p className="mt-2 flex-1 text-muted">{p.descricao}</p>

                  {p.link && (
                    // Link "esticado": o ::after cobre o card todo, então qualquer clique no card abre o projeto,
                    // mas para teclado e leitor de tela continua sendo um único link com nome curto.
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 self-start font-medium text-accent after:absolute after:inset-0 after:z-10 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-accent focus-visible:after:[outline-offset:-3px]"
                    >
                      Ver projeto
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                      <span className="sr-only">: {p.titulo} (abre em nova aba)</span>
                    </a>
                  )}

                  {!p.link && p.status && (
                    <p className="mt-5 inline-flex min-h-[44px] items-center gap-2.5 font-medium text-text">
                      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent ring-4 ring-accent/20" />
                      {p.status}
                    </p>
                  )}
                </div>
              </m.article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
