import ServicePage, { type ServicePageData } from "../components/ServicePage";
import { whatsapp } from "../constants";
import "../styles/service.css";

const WA = whatsapp("Oi Viviane! Quero configurar e-mail marketing pra minha loja.");

const data: ServicePageData = {
  whatsappHref: WA,
  hero: {
    background:
      "linear-gradient(100deg,rgba(16,13,11,.95) 0%,rgba(16,13,11,.88) 44%,rgba(16,13,11,.66) 100%),url(/img/hero-email-marketing.jpg)",
    eyebrow: "E-mail marketing para e-commerce",
    title: (
      <>
        Sua loja deixa <span className="o">dinheiro na mesa</span> todo dia. A gente traz de volta.
      </>
    ),
    sub: "Fluxos de e-mail automáticos que recuperam carrinho abandonado, reativam quem sumiu e fazem seu cliente comprar de novo. Menos achismo, mais pedido.",
    ctaLabel: "Quero minha loja vendendo no automático",
  },
  problem: {
    eyebrow: "A dor de toda loja online",
    title: <>Você atrai o cliente, ele quase compra… e some.</>,
    lead: (
      <>
        Você investe pra levar gente até a sua loja. Mas 7 de cada 10 carrinhos são abandonados — e quem compra uma vez raramente volta sozinho. Sem um fluxo de e-mail trabalhando por você, cada visita que não converte vira dinheiro que evapora, e cada cliente conquistado é esquecido no dia seguinte. A venda que estava a um passo de acontecer{" "}
        <span className="o" style={{ fontWeight: 700 }}>simplesmente some</span>.
      </>
    ),
  },
  what: {
    eyebrow: "O que fazemos",
    title: "Os fluxos de e-mail que vendem sozinhos, 24 horas por dia.",
    lead: "A gente monta uma sequência automática que age na hora certa, para a pessoa certa — recuperando vendas, reativando clientes e fazendo quem já comprou voltar.",
    cards: [
      {
        icon: "/img/icon-email.png",
        title: "Recuperação de carrinho",
        text: "Traz de volta quem colocou o produto no carrinho e não finalizou. A venda que quase escapou, recuperada no automático.",
      },
      {
        icon: "/img/icon-email.png",
        title: "Reativação de inativos",
        text: "Acorda quem comprou uma vez e sumiu, com a mensagem e a oferta certas pra trazer o cliente de volta pra loja.",
      },
      {
        icon: "/img/icon-loja.png",
        title: "Pós-compra e recompra",
        text: "Transforma quem comprou uma vez em cliente que compra sempre. Comprou um produto que acaba em 30 dias? A gente lembra o cliente antes de faltar. Comprou um item? Oferece o complemento perfeito, na hora certa.",
      },
      {
        icon: "/img/icon-email.png",
        title: "Boas-vindas e nutrição",
        text: "Recebe o novo contato, apresenta a sua marca e prepara o terreno pra primeira compra acontecer.",
      },
    ],
  },
  how: {
    eyebrow: "Como trabalhamos",
    title: <>Fluxos montados sob medida pra sua loja — não disparo de promoção pra todo mundo.</>,
    items: [
      "Mapeamento da jornada do seu cliente",
      "Criação dos fluxos automáticos (carrinho, reativação, pós-compra, boas-vindas)",
      "Segmentação da base por comportamento de compra",
      "Design dos e-mails no padrão da sua marca",
      "Configuração e integração na sua plataforma de envio",
      "Acompanhamento de aberturas, cliques e vendas geradas",
    ],
  },
  final: {
    title: "Pronto pra sua loja vender no automático?",
    text: "Me conta como está a sua base hoje. Em uma conversa a gente já te mostra por onde começar — sem compromisso.",
  },
};

export default function ServicoEmailMarketing() {
  return <ServicePage data={data} />;
}
