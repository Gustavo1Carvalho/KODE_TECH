import { m } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
};

/**
 * Entrada suave ao rolar a página (usa IntersectionObserver por baixo).
 * Com prefers-reduced-motion, o MotionConfig do App remove o deslocamento
 * e sobra apenas um fade curto.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const Tag = as === "li" ? m.li : m.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Tag>
  );
}
