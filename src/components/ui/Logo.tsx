/**
 * Sublinhado "_" piscando como cursor de terminal.
 *
 * Por que CSS e não Framer Motion aqui: um loop infinito no Framer roda
 * quadro a quadro no JavaScript e, medido no Lighthouse mobile, derrubou a
 * nota de Performance de 95 para 69. A animação CSS roda no compositor do
 * navegador, com custo praticamente zero. Com prefers-reduced-motion, fica parado.
 */
export function BlinkingCursor({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`animate-[blink_1.1s_steps(1,end)_infinite] text-accent motion-reduce:animate-none ${className}`}
    >
      _
    </span>
  );
}

type LogoProps = { className?: string; onClick?: () => void };

/** Logo em texto: kode_ TECH */
export function Logo({ className = "", onClick }: LogoProps) {
  return (
    <a
      href="#inicio"
      onClick={onClick}
      aria-label="Kode Tech, voltar ao início"
      className={`inline-flex min-h-[44px] items-center font-mono text-xl font-medium tracking-[0.08em] text-text ${className}`}
    >
      <span aria-hidden="true">kode</span>
      <BlinkingCursor />
      <span aria-hidden="true" className="ml-2.5 text-[0.6rem] font-bold tracking-[0.32em] text-muted">
        TECH
      </span>
    </a>
  );
}
