import { Reveal } from "./Reveal";

type Props = {
  id: string;
  rotulo: string;
  titulo: string;
  subtitulo?: string;
};

export function SectionHeading({ id, rotulo, titulo, subtitulo }: Props) {
  return (
    <Reveal className="max-w-2xl">
      <p className="eyebrow">{rotulo}</p>
      <h2 id={id} className="mt-4 text-[1.875rem] leading-[1.15] sm:text-[2.25rem] lg:text-[2.75rem]">
        {titulo}
      </h2>
      {subtitulo && <p className="mt-5 text-lg text-muted">{subtitulo}</p>}
    </Reveal>
  );
}
