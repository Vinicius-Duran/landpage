import ServicePage, { type ServicePageData } from "../components/ServicePage";
import { whatsapp } from "../constants";
import "../styles/service.css";

const WA = whatsapp("Oi Viviane! Quero atrair mais clientes com tráfego pago.");

const data: ServicePageData = {
  whatsappHref: WA,
  hero: {
    background:
      "linear-gradient(100deg,rgba(16,13,11,.95) 0%,rgba(16,13,11,.88) 44%,rgba(16,13,11,.66) 100%),url(/img/hero-trafego-pago.jpg)",
    eyebrow: "Tráfego pago para e-commerce",
    title: (
      <>
        Sua loja está pronta pra vender. Só falta o <span className="o">cliente certo</span> chegar
        até ela.
      </>
    ),
    sub: "A gente coloca a sua loja na frente de quem já está pronto pra comprar — com Google Ads e Meta Ads gerenciados por quem vive de e-commerce há 18 anos.",
    ctaLabel: "Quero atrair clientes que compram",
    showCertBadge: true,
  },
  problem: {
    eyebrow: "A dor de toda loja online",
    title: (
      <>
        O seu produto é excelente. Mas sem tráfego estratégico, ele é{" "}
        <span className="o">invisível</span>.
      </>
    ),
    lead: (
      <>
        Você investiu na loja, no catálogo e no visual. Mesmo assim, o faturamento não vem — e o
        problema raramente é o produto. Sem tráfego pago otimizado, seu e-commerce fica fora do radar
        de quem está pronto para comprar. Resultado: você{" "}
        <span className="o" style={{ fontWeight: 700 }}>
          perde vendas diariamente
        </span>{" "}
        para concorrentes que aparecem primeiro, enquanto os poucos visitantes que chegam abandonam a
        loja sem converter.
      </>
    ),
  },
  what: {
    eyebrow: "O que fazemos",
    title: "Os anúncios que fazem a sua loja vender de verdade.",
    lead: "Cada tipo de anúncio tem um papel. A gente usa todos de forma integrada pra levar o cliente certo até a sua loja — e trazer de volta quem já demonstrou interesse.",
    cards: [
      {
        icon: "/img/icon-seo.png",
        title: "Google Ads — Pesquisa",
        text: "A sua loja aparece na hora exata em que a pessoa digita no Google o que você vende. É a maior intenção de compra que existe.",
      },
      {
        icon: "/img/icon-loja.png",
        title: (
          <>
            Google PMax <span className="tag">nossa especialidade</span>
          </>
        ),
        text: "Seu produto com foto e preço no topo do Google — e também no YouTube, no Gmail, no Discover e na rede de parceiros do Google. Presença máxima em todos os canais, com nossa certificação em Google Shopping.",
      },
      {
        icon: "/img/icon-social.png",
        title: "Meta Ads — Instagram e Facebook",
        text: "Coloca a sua loja na frente de quem ainda não te conhece, mas tem tudo pra amar os seus produtos. Desejo que vira visita.",
      },
      {
        icon: "/img/icon-roas.png",
        title: "Remarketing",
        text: "Traz de volta quem visitou, colocou no carrinho e não finalizou. Aquela venda que quase escapou, recuperada.",
      },
    ],
  },
  how: {
    eyebrow: "Como trabalhamos",
    title: "Uma operação de tráfego completa — não um botão de “impulsionar”.",
    items: [
      "Estratégia e estruturação das campanhas do zero",
      "Otimização do catálogo e feed para o Google Shopping",
      "Segmentação de público e estratégia de remarketing",
      "Acompanhamento diário e ajuste de lances",
      "Relatórios claros com foco no que importa: o ROAS",
      "Um time de verdade cuidando da sua conta, todo dia",
    ],
  },
  final: {
    title: "Pronto pra encher a sua loja de cliente certo?",
    text: "Me conta como está a sua loja hoje. Em uma conversa a gente já te mostra por onde começar — sem compromisso.",
  },
};

export default function ServicoTrafegoPago() {
  return <ServicePage data={data} />;
}
