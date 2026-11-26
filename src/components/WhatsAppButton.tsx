import { m } from "framer-motion";
import { whatsappLink } from "../lib/whatsapp";
import { WhatsAppIcon } from "./ui/BrandIcons";

/** Botão flutuante, fixo no canto inferior direito em todas as telas. */
export function WhatsAppButton() {
  return (
    <m.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
      style={{
        right: "max(1.25rem, env(safe-area-inset-right))",
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
      }}
      className="fixed z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink shadow-lg shadow-black/40 ring-4 ring-ink/60 transition-colors hover:bg-accent-hover"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </m.a>
  );
}
