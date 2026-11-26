import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { WHATSAPP } from "./src/config";

/** "5598984892566" -> "+55 98 98489-2566" */
const formatarTelefone = (n: string) => `+${n.slice(0, 2)} ${n.slice(2, 4)} ${n.slice(4, -4)}-${n.slice(-4)}`;

/** Troca os marcadores do index.html pelo número de src/config.ts (fonte única do número). */
function whatsappNoHtml(): Plugin {
  return {
    name: "whatsapp-no-html",
    transformIndexHtml: (html) =>
      html.replaceAll("%WHATSAPP_FORMATADO%", formatarTelefone(WHATSAPP)).replaceAll("%WHATSAPP%", WHATSAPP),
  };
}

export default defineConfig({
  plugins: [react(), whatsappNoHtml()],
  build: {
    target: "es2020",
    cssCodeSplit: false,
  },
});
