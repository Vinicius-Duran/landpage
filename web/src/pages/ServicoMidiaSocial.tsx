import ServicePage, { type ServicePageData } from "../components/ServicePage";
import { whatsapp } from "../constants";
import "../styles/service.css";

const WA = whatsapp("Oi Viviane! Quero melhorar a mídia social da minha loja.");

const data: ServicePageData = {
  whatsappHref: WA,
  hero: {
    background:
      "linear-gradient(100deg,rgba(16,13,11,.95) 0%,rgba(16,13,11,.88) 44%,rgba(16,13,11,.66) 100%),url(/img/hero-midia-social.jpg)",
    eyebrow: "Conteúdo e mídia social para e-commerce",
    title: (
      <>
        Conteúdo que vira <span className="o">venda</span>, não só curtida.
      </>
    ),
    sub: "Criamos as artes e o conteúdo da sua loja no padrão da marca — presença consistente que engaja o público certo e prepara o terreno pros seus anúncios venderem mais.",
    ctaLabel: "Quero conteúdo que vende",
  },
  problem: {
    eyebrow: "A dor de quem posta sem estratégia",
    title: <>Você posta, posta… e a venda não vem.</>,
    lead: (
      <>
        Feed desalinhado, arte que não tem a cara da marca, conteúdo aleatório que ninguém salva nem compartilha. Sem estratégia, a rede social vira obrigação e não traz cliente. E tem um detalhe que pouca gente vê:{" "}
        <span className="o" style={{ fontWeight: 700 }}>um perfil sem consistência derruba a confiança de quem chega pelo anúncio</span> e vai conferir a sua loja antes de comprar.
      </>
    ),
  },
  what: {
    eyebrow: "O que fazemos",
    title: "Conteúdo no padrão da marca, feito pra vender.",
    lead: "A gente cria o conteúdo da sua loja com estratégia — artes que têm a cara da marca, passam credibilidade e conversam direto com os seus anúncios.",
    cards: [
      {
        icon: "/img/icon-social.png",
        title: "Artes no padrão da marca",
        text: "Posts e stories com a identidade da sua loja, feitos pra chamar atenção e passar credibilidade em cada publicação.",
      },
      {
        icon: "/img/icon-social.png",
        title: "Conteúdo com estratégia",
        text: "Cada post com um objetivo: atrair, engajar ou levar pra compra. Nada de postar por postar.",
      },
      {
        icon: "/img/icon-social.png",
        title: "Planejamento e calendário",
        text: "A gente organiza o que publicar e quando, pra sua presença ser consistente sem virar dor de cabeça.",
      },
      {
        icon: "/img/icon-trafego.png",
        title: "Conteúdo que vira anúncio",
        text: "As artes que mais performam viram anúncio, conectando a sua rede social direto ao tráfego pago.",
      },
    ],
  },
  how: {
    eyebrow: "Como trabalhamos",
    title: <>Presença consistente, sem virar mais uma tarefa pra você.</>,
    items: [
      "Planejamento de conteúdo com foco em vendas",
      "Criação de artes e legendas no padrão da marca",
      "Calendário de publicação (feed e Stories)",
      "Linha editorial alinhada à jornada de compra",
      "Adaptação dos conteúdos para anúncios pagos",
      "Acompanhamento de engajamento e crescimento",
    ],
  },
  final: {
    title: "Pronto pra sua marca aparecer do jeito certo?",
    text: "Me conta como está a sua rede social hoje. Em uma conversa a gente já te mostra por onde começar — sem compromisso.",
  },
};

export default function ServicoMidiaSocial() {
  return <ServicePage data={data} />;
}
