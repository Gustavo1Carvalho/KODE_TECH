import { INSTAGRAM } from "../config";
import { rodape } from "../data/content";
import { whatsappLink } from "../lib/whatsapp";
import { InstagramIcon, WhatsAppIcon } from "./ui/BrandIcons";
import { Logo } from "./ui/Logo";

export function Footer() {
  const ano = new Date().getFullYear();
  const social =
    "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-muted transition-colors hover:border-accent/60 hover:text-accent";

  return (
    <footer className="border-t border-line pb-28 pt-12 sm:pb-12">
      <div className="container-site flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo />
          <p className="mt-2 text-muted">{rodape.descricao}</p>
          <p className="mt-1 font-mono text-sm text-muted">{rodape.atendimento}</p>
        </div>

        <div className="flex flex-col gap-5 sm:items-end">
          <div className="flex gap-3">
            <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${INSTAGRAM.usuario}`} className={social}>
              <InstagramIcon />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp" className={social}>
              <WhatsAppIcon />
            </a>
          </div>
          <p className="font-mono text-sm text-muted">
            © <span suppressHydrationWarning>{ano}</span> Kode Tech
          </p>
        </div>
      </div>
    </footer>
  );
}
