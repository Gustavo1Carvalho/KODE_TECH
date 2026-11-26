/**
 * TODO O CONTEÚDO DO SITE FICA AQUI.
 * Edite os textos à vontade sem mexer nos componentes.
 */

import imgAdvocacia from "../assets/projetos/advocacia.webp";
import imgVexfo from "../assets/projetos/vexfo.webp";
import imgSalao from "../assets/projetos/salao.webp"; // print provisório (tela de login): trocar pelo print da agenda com dados de exemplo

export type IconeServico = "site" | "sistema" | "automacao" | "suporte";

export type Projeto = {
  titulo: string;
  descricao: string;
  tags: string[];
  imagem: string; // imagem importada de src/assets/ ou caminho em public/ (ex.: "/images/x.webp")
  alt: string;
  link?: string; // com link, o card inteiro vira clicável e abre em nova aba
  selo?: string; // selo pequeno no canto do card, ex.: "Conceito"
  status?: string; // só para cards SEM link: texto com ponto verde no rodapé, ex.: "Sistema em uso"
};

// ---------------------------------------------------------------------------
// Menu
// ---------------------------------------------------------------------------
export const menu = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

// ---------------------------------------------------------------------------
// Hero (topo da página)
// ---------------------------------------------------------------------------
export const hero = {
  rotulo: "// desenvolvimento de software",
  local: "atendimento online para todo o Brasil",
  titulo: {
    antes: "Seu negócio merece ",
    destaque: "mais clientes",
    depois: " pela internet.",
  },
  subtitulo: "Sites, sistemas e automações feitos sob medida para a sua empresa.",
  botaoPrincipal: "Chamar no WhatsApp",
  botaoSecundario: "Ver serviços",
  nota: "Orçamento sem compromisso, direto com quem desenvolve.",
};

// ---------------------------------------------------------------------------
// Problemas
// ---------------------------------------------------------------------------
export const problemas = {
  rotulo: "// diagnóstico",
  titulo: "3 sinais de que sua empresa está perdendo clientes na internet",
  itens: [
    {
      numero: "01",
      titulo: "Quem te procura no Google não te encontra.",
      texto:
        "O cliente pesquisa pelo seu serviço na sua cidade, não acha a sua empresa e fecha com quem aparece primeiro.",
    },
    {
      numero: "02",
      titulo: "Você responde as mesmas perguntas o dia todo no WhatsApp.",
      texto:
        "Preço, horário, endereço, formas de pagamento. Um site bem feito responde antes, e você conversa com quem já quer comprar.",
    },
    {
      numero: "03",
      titulo: "Seu único “site” é o Instagram.",
      texto:
        "O Instagram ajuda, mas o alcance depende do algoritmo e o perfil não aparece bem nas buscas. Um site é seu e trabalha 24 horas.",
    },
  ],
  fechamento: "Se você se reconheceu em algum desses sinais, dá para resolver.",
  link: "Veja como",
};

// ---------------------------------------------------------------------------
// Serviços
// ---------------------------------------------------------------------------
export const servicos = {
  rotulo: "// serviços",
  titulo: "O que a Kode Tech faz pela sua empresa",
  subtitulo: "Tudo feito sob medida, pensando em como o seu negócio funciona no dia a dia.",
  itens: [
    {
      numero: "01",
      icone: "site" as IconeServico,
      titulo: "Sites e landing pages",
      texto: "Páginas rápidas no celular que levam o cliente direto pro seu WhatsApp.",
    },
    {
      numero: "02",
      icone: "sistema" as IconeServico,
      titulo: "Sistemas sob medida",
      texto:
        "Orçamentos, agenda, controle de clientes e estoque do jeito que sua empresa trabalha.",
    },
    {
      numero: "03",
      icone: "automacao" as IconeServico,
      titulo: "Automações",
      texto: "Mensagens, planilhas e tarefas repetitivas funcionando sozinhas.",
    },
    {
      numero: "04",
      icone: "suporte" as IconeServico,
      titulo: "Suporte",
      texto: "Manutenção e ajustes depois da entrega.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Como funciona
// ---------------------------------------------------------------------------
export const comoFunciona = {
  rotulo: "// como funciona",
  titulo: "Do primeiro contato ao projeto no ar, em 4 passos",
  passos: [
    {
      numero: "01",
      titulo: "Conversa",
      texto: "Você conta como sua empresa funciona e o que precisa resolver.",
    },
    {
      numero: "02",
      titulo: "Proposta",
      texto: "Você recebe por escrito o que será feito, o prazo e o valor. Sem compromisso.",
    },
    {
      numero: "03",
      titulo: "Desenvolvimento",
      texto: "O projeto é construído com você acompanhando e dando sua opinião.",
    },
    {
      numero: "04",
      titulo: "Entrega e suporte",
      texto: "Tudo no ar, com orientação de uso e suporte para ajustes.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Projetos  →  prints em src/assets/projetos/ (1280x800, .webp), importados no topo deste arquivo
// ---------------------------------------------------------------------------
export const projetos: { rotulo: string; titulo: string; subtitulo: string; itens: Projeto[] } = {
  rotulo: "// projetos",
  titulo: "Projetos",
  subtitulo:
    "Projetos reais e conceitos que mostram como a tecnologia pode trazer mais clientes e organizar o dia a dia de um negócio.",
  itens: [
    {
      titulo: "Site para provedor de internet: VEXFO Fibra",
      descricao:
        "Site para provedor de internet no Maranhão, com apresentação dos planos, destaque para instalação grátis e contato direto para contratação.",
      tags: ["Site", "Provedor de internet", "Projeto real"],
      imagem: imgVexfo,
      alt: "Site do provedor de internet VEXFO Fibra",
      link: "https://vexfofibra.netlify.app/",
      selo: "Projeto real",
    },
    {
      titulo: "Sistema de agendamento para salão de beleza",
      descricao:
        "Sistema de agenda online para salão, com marcação de horários e organização dos atendimentos do dia. Feito sob medida para a rotina do salão.",
      tags: ["Sistema", "Agendamento", "Projeto real"],
      imagem: imgSalao,
      alt: "Tela do sistema de agendamento do salão",
      // sem link de propósito: o sistema tem dados de clientes reais
      selo: "Projeto real",
      status: "Sistema em uso",
    },
    {
      titulo: "Projeto conceito: landing page para advocacia criminal",
      descricao:
        "Página para advogado criminalista, com áreas de atuação, perguntas frequentes e contato direto pelo WhatsApp. Rápida no celular e pensada para converter visitantes em clientes.",
      tags: ["Landing page", "Advocacia", "WhatsApp"],
      imagem: imgAdvocacia,
      alt: "Landing page de advocacia criminal",
      link: "https://advocacia-page.netlify.app/",
      selo: "Conceito",
    },
  ],
};

// ---------------------------------------------------------------------------
// Sobre  →  foto em public/images/minha-foto.webp (640x800, retrato 4:5)
// ---------------------------------------------------------------------------
export const sobre = {
  rotulo: "// sobre",
  titulo: "Feita por quem entende de sistemas",
  paragrafos: [
    "A Kode Tech é uma empresa de desenvolvimento de software com atendimento online para todo o Brasil. Cria sites, sistemas e automações para pequenas e médias empresas que querem vender mais e trabalhar com menos retrabalho.",
    "Todo projeto é desenvolvido por Gustavo Carvalho, profissional formado em Sistemas de Informação. Você fala direto com quem escreve o código, do primeiro contato até o suporte.",
  ],
  foto: "/images/minha-foto.webp",
  fotoAlt: "Foto de Gustavo Carvalho, desenvolvedor da Kode Tech",
  fatos: [
    { chave: "atendimento", valor: "100% online, para todo o Brasil" },
    { chave: "formação", valor: "Sistemas de Informação" },
    { chave: "projetos", valor: "Sites, sistemas e automações" },
  ],
};

// ---------------------------------------------------------------------------
// Perguntas frequentes
// ---------------------------------------------------------------------------
export const faq = {
  rotulo: "// perguntas frequentes",
  titulo: "Perguntas frequentes",
  itens: [
    {
      pergunta: "Quanto custa um site?",
      resposta:
        "Depende do projeto: quantidade de páginas, funcionalidades e integrações. Me conte o que você precisa pelo WhatsApp e eu envio um orçamento sem compromisso.",
    },
    {
      pergunta: "Quanto tempo demora?",
      resposta:
        "Uma landing page fica pronta em média em 7 a 15 dias. Sistemas dependem do tamanho do projeto, e o prazo é combinado na proposta.",
    },
    {
      pergunta: "Preciso ter domínio e hospedagem?",
      resposta:
        "Não precisa ter antes de começar. Eu oriento o registro do domínio (.com.br) e cuido da publicação do site. Se houver algum custo de domínio ou hospedagem, ele aparece na proposta.",
    },
    {
      pergunta: "Vocês fazem manutenção depois?",
      resposta:
        "Sim. Todo projeto tem 30 dias de ajustes inclusos depois da entrega. Depois disso, você pode contratar um plano mensal de manutenção.",
    },
    {
      pergunta: "Vocês atendem minha cidade?",
      resposta:
        "Sim! Todo o atendimento é online, então atendemos empresas de qualquer lugar do Brasil.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Contato
// ---------------------------------------------------------------------------
export const contato = {
  rotulo: "// contato",
  titulo: "Vamos conversar sobre o seu projeto?",
  texto:
    "Preencha os campos e o WhatsApp abre com a sua mensagem pronta. É só tocar em enviar. O orçamento é sem compromisso.",
  atendimento: "100% online, todo o Brasil",
  formulario: {
    nome: { label: "Seu nome", placeholder: "Como posso te chamar?" },
    negocio: { label: "Tipo de negócio", placeholder: "Ex.: clínica, loja, restaurante" },
    necessidade: {
      label: "O que você precisa?",
      placeholder: "Ex.: um site para receber pedidos pelo WhatsApp",
    },
    botao: "Enviar pelo WhatsApp",
    obrigatorio: "Preencha este campo.",
    enviando: "Abrindo o WhatsApp com a sua mensagem…",
  },
};

// ---------------------------------------------------------------------------
// Rodapé
// ---------------------------------------------------------------------------
export const rodape = {
  descricao: "Sites, sistemas e automações sob medida.",
  atendimento: "Atendimento online para todo o Brasil",
};
