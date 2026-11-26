import { LazyMotion, MotionConfig } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Problemas } from "./components/Problemas";
import { Servicos } from "./components/Servicos";
import { ComoFunciona } from "./components/ComoFunciona";
import { Projetos } from "./components/Projetos";
import { Sobre } from "./components/Sobre";
import { FAQ } from "./components/FAQ";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

const carregarAnimacoes = () => import("./lib/motionFeatures").then((m) => m.default);

export default function App() {
  return (
    // reducedMotion="user": respeita o prefers-reduced-motion do sistema
    <MotionConfig reducedMotion="user">
      {/* LazyMotion: os recursos de animação do Framer chegam num arquivo separado, depois da página */}
      <LazyMotion features={carregarAnimacoes} strict>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="conteudo">
          <Hero />
          <Problemas />
          <Servicos />
          <ComoFunciona />
          <Projetos />
          <Sobre />
          <FAQ />
          <Contato />
        </main>
        <Footer />
        <WhatsAppButton />
      </LazyMotion>
    </MotionConfig>
  );
}
