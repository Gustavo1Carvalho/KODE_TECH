import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { WHATSAPP } from "./src/config";

/** Troca %WHATSAPP% no index.html pelo número de src/config.ts (fonte única do número). */
function whatsappNoHtml(): Plugin {
  return {
    name: "whatsapp-no-html",
    transformIndexHtml: (html) => html.replaceAll("%WHATSAPP%", WHATSAPP),
  };
}

export default defineConfig({
  plugins: [react(), whatsappNoHtml()],
  build: {
    target: "es2020",
    cssCodeSplit: false,
  },
});
