/**
 * Pré-renderização: depois do build, gera o HTML completo da página e
 * coloca dentro de dist/index.html. Assim o conteúdo aparece antes do
 * JavaScript carregar (melhor PageSpeed e SEO).
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const raiz = process.cwd();
const ssrDir = path.join(raiz, "dist-ssr");
const entrada = fs.readdirSync(ssrDir).find((f) => /^entry-server\.(m?js)$/.test(f));
if (!entrada) throw new Error("entry-server não encontrado em dist-ssr/");

const { render } = await import(pathToFileURL(path.join(ssrDir, entrada)).href);
const arquivo = path.join(raiz, "dist", "index.html");
const html = fs.readFileSync(arquivo, "utf8");

if (!html.includes("<!--app-->")) throw new Error("Marcador <!--app--> não encontrado em dist/index.html");
fs.writeFileSync(arquivo, html.replace("<!--app-->", render()));
fs.rmSync(ssrDir, { recursive: true, force: true });

console.log("✓ dist/index.html pré-renderizado");
