import { useState, type FormEvent } from "react";
import { Globe, Send } from "lucide-react";
import { contato } from "../data/content";
import { INSTAGRAM, WHATSAPP_MENSAGEM } from "../config";
import { whatsappLink } from "../lib/whatsapp";
import { InstagramIcon, WhatsAppIcon } from "./ui/BrandIcons";
import { Reveal } from "./ui/Reveal";

type Campos = { nome: string; negocio: string; necessidade: string };
type Erros = Partial<Record<keyof Campos, string>>;

const vazio: Campos = { nome: "", negocio: "", necessidade: "" };
const campoClasse =
  "mt-2 block w-full rounded-xl border bg-ink px-4 py-3 text-base text-text placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-accent/30";

export function Contato() {
  const [campos, setCampos] = useState<Campos>(vazio);
  const [erros, setErros] = useState<Erros>({});
  const [status, setStatus] = useState("");
  const f = contato.formulario;

  const atualizar = (campo: keyof Campos) => (e: { target: { value: string } }) => {
    setCampos((c) => ({ ...c, [campo]: e.target.value }));
    if (erros[campo]) setErros((er) => ({ ...er, [campo]: undefined }));
  };

  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const novosErros: Erros = {};
    (Object.keys(campos) as (keyof Campos)[]).forEach((k) => {
      if (!campos[k].trim()) novosErros[k] = f.obrigatorio;
    });
    setErros(novosErros);

    const primeiroErro = (Object.keys(novosErros) as (keyof Campos)[])[0];
    if (primeiroErro) {
      document.getElementById(`campo-${primeiroErro}`)?.focus();
      return;
    }

    const mensagem = [
      WHATSAPP_MENSAGEM,
      "",
      `*Nome:* ${campos.nome.trim()}`,
      `*Tipo de negócio:* ${campos.negocio.trim()}`,
      `*O que preciso:* ${campos.necessidade.trim()}`,
    ].join("\n");

    const url = whatsappLink(mensagem);
    setStatus(f.enviando);
    const janela = window.open(url, "_blank");
    if (janela) janela.opener = null;
    else window.location.href = url; // se o navegador bloquear a nova aba
  };

  const borda = (k: keyof Campos) => (erros[k] ? "border-red-400" : "border-line");
  const ajuda = (k: keyof Campos) => (erros[k] ? `erro-${k}` : undefined);

  return (
    <section id="contato" aria-labelledby="titulo-contato" className="section border-t border-line bg-ink-soft">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">{contato.rotulo}</p>
          <h2 id="titulo-contato" className="mt-4 text-[1.875rem] leading-[1.15] sm:text-[2.25rem] lg:text-[2.75rem]">
            {contato.titulo}
          </h2>
          <p className="mt-5 max-w-lg text-lg text-muted">{contato.texto}</p>

          <ul className="mt-10 space-y-2">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[48px] items-center gap-4 text-text"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-accent transition-colors group-hover:border-accent/60">
                  <WhatsAppIcon />
                </span>
                <span>
                  <span className="block font-mono text-xs text-muted">whatsapp</span>
                  Chamar no WhatsApp
                </span>
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[48px] items-center gap-4 text-text"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-accent transition-colors group-hover:border-accent/60">
                  <InstagramIcon />
                </span>
                <span>
                  <span className="block font-mono text-xs text-muted">instagram</span>
                  {INSTAGRAM.usuario}
                </span>
              </a>
            </li>
            <li className="inline-flex min-h-[48px] items-center gap-4 text-text">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-accent">
                <Globe className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-mono text-xs text-muted">atendimento</span>
                {contato.atendimento}
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={enviar}
            noValidate
            aria-label="Pedir orçamento pelo WhatsApp"
            className="rounded-2xl border border-line bg-ink-card p-6 sm:p-8"
          >
            <div>
              <label htmlFor="campo-nome" className="text-[0.95rem] font-medium">
                {f.nome.label}
              </label>
              <input
                id="campo-nome"
                name="nome"
                type="text"
                autoComplete="name"
                required
                aria-invalid={!!erros.nome}
                aria-describedby={ajuda("nome")}
                placeholder={f.nome.placeholder}
                value={campos.nome}
                onChange={atualizar("nome")}
                className={`${campoClasse} ${borda("nome")}`}
              />
              {erros.nome && (
                <p id="erro-nome" className="mt-2 text-sm text-red-300">
                  {erros.nome}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="campo-negocio" className="text-[0.95rem] font-medium">
                {f.negocio.label}
              </label>
              <input
                id="campo-negocio"
                name="negocio"
                type="text"
                autoComplete="organization"
                required
                aria-invalid={!!erros.negocio}
                aria-describedby={ajuda("negocio")}
                placeholder={f.negocio.placeholder}
                value={campos.negocio}
                onChange={atualizar("negocio")}
                className={`${campoClasse} ${borda("negocio")}`}
              />
              {erros.negocio && (
                <p id="erro-negocio" className="mt-2 text-sm text-red-300">
                  {erros.negocio}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="campo-necessidade" className="text-[0.95rem] font-medium">
                {f.necessidade.label}
              </label>
              <textarea
                id="campo-necessidade"
                name="necessidade"
                rows={4}
                required
                aria-invalid={!!erros.necessidade}
                aria-describedby={ajuda("necessidade")}
                placeholder={f.necessidade.placeholder}
                value={campos.necessidade}
                onChange={atualizar("necessidade")}
                className={`${campoClasse} ${borda("necessidade")} resize-y`}
              />
              {erros.necessidade && (
                <p id="erro-necessidade" className="mt-2 text-sm text-red-300">
                  {erros.necessidade}
                </p>
              )}
            </div>

            <button type="submit" className="btn-primary mt-7 w-full min-h-[52px] text-[1.0625rem]">
              <Send className="h-5 w-5" aria-hidden="true" />
              {f.botao}
            </button>
            <p role="status" aria-live="polite" className="mt-4 min-h-[1.5rem] text-center font-mono text-sm text-accent">
              {status}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
