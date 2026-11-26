import type { Config } from "tailwindcss";

/**
 * Identidade visual da Kode Tech.
 * Cores: bg-ink, text-accent, text-text, text-muted, border-line...
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1020", // fundo principal
          soft: "#0E1427", // faixas alternadas
          card: "#111830", // cards
          raised: "#161F3B", // hover / campos
        },
        line: "#232C47", // bordas
        accent: {
          DEFAULT: "#3DDC97", // destaque (verde)
          hover: "#5EE6AB",
        },
        text: "#F5F7FA", // texto principal
        muted: "#B8C0D0", // texto secundário
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Space Grotesk Fallback"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "Consolas", "monospace"],
      },
      maxWidth: {
        container: "72rem",
      },
      keyframes: {
        // fallback do cursor caso o JS ainda não tenha carregado
        blink: { "0%, 49%": { opacity: "1" }, "50%, 100%": { opacity: "0" } },
      },
    },
  },
  plugins: [],
} satisfies Config;
