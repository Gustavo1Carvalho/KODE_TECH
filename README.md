# Kode Tech: site institucional

React + Vite + TypeScript + Tailwind CSS + Framer Motion + lucide-react.

## Comandos

```bash
npm install        # só na primeira vez
npm run dev        # desenvolvimento: http://localhost:5173 (recarrega ao salvar)
npm run build      # gera a versão final em dist/ (já pré-renderizada)
npm run preview    # abre a versão final: http://localhost:4173
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Número do WhatsApp e mensagem padrão | `src/config.ts` |
| Todos os textos, serviços, passos, projetos, FAQ | `src/data/content.ts` |
| Imagens dos projetos (800x500, .webp) | `public/images/` |
| Sua foto (640x800, .webp) | `public/images/minha-foto.webp` |
| Título, descrição, Open Graph, JSON-LD | `index.html` |
| Cores e fontes | `tailwind.config.ts` |

Procure por `[` no projeto para achar tudo que ainda falta preencher.

## Por que o cursor "_" usa CSS e não Framer Motion

Um loop infinito no Framer Motion roda quadro a quadro no JavaScript. No
Lighthouse mobile isso derrubou a Performance de 95 para 69. Em CSS, a
animação roda no compositor do navegador e não custa nada. O restante das
animações (entrada das seções, hover, menu, FAQ, botão flutuante) usa Framer Motion.
