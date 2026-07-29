import ServicePage, { type ServicePageData } from "../components/ServicePage";
import { whatsapp } from "../constants";
import "../styles/service.css";

const WA = whatsapp("Oi Viviane! Quero criar minha loja virtual.");

const data: ServicePageData = {
  whatsappHref: WA,
  hero: {
    background:
      "linear-gradient(100deg,rgba(16,13,11,.95) 0%,rgba(16,13,11,.88) 44%,rgba(16,13,11,.66) 100%),url(/img/hero-loja-virtual.jpg)",
    eyebrow: "Criação de loja virtual & sites",
    title: (
      <>
        Uma loja linda não vende sozinha. A gente constrói a sua pra <span className="o">converter</span>.
      </>
    ),
    sub: "Loja virtual, site institucional ou landing page: a gente cria do zero, com layout, otimização e tudo integrado. Feito pra vender e otimizado pro Google — não só pra ficar bonito.",
    ctaLabel: "Quero tirar minha loja do papel",
  },
  problem: {
    eyebrow: "A dor de quem vende online",
    title: <>Você tem uma loja. Mas ela foi feita pra vender?</>,
    lead: (
      <>
        Uma loja mal feita é um problema silencioso: fica pesada, carrega devagar e o Google simplesmente não mostra ela pra quem procura. Junte a isso plataforma mal configurada, produto sem descrição e checkout complicado — e o cliente que chegou pronto pra comprar desiste no meio do caminho. Loja que vende não é sorte:{" "}
        <span className="o" style={{ fontWeight: 700 }}>é estrutura, velocidade e cada detalhe pensado</span> pra transformar visita em pedido.
      </>
    ),
  },
  what: {
    eyebrow: "O que fazemos",
    title: "Uma loja completa, feita pra vender desde o primeiro dia.",
    lead: "A gente cuida de cada etapa da criação — da escolha da plataforma à primeira venda — com tudo pensado pra converter.",
    cards: [
      {
        icon: "/img/icon-loja.png",
        title: "Loja criada do zero",
        text: "Escolhemos a plataforma ideal pro seu negócio e montamos tudo — layout, estrutura e cada página pronta pra funcionar.",
      },
      {
        icon: "/img/icon-seo.png",
        title: "Produtos com SEO",
        text: "Cadastro e descrição de produtos com técnicas de SEO, pra sua loja ser achada no Google de forma orgânica desde o começo.",
      },
      {
        icon: "/img/icon-roas.png",
        title: "Feita pra converter",
        text: "Checkout simples, carregamento rápido no celular e cada detalhe pensado pra transformar visita em venda.",
      },
      {
        icon: "/img/icon-email.png",
        title: "Tudo integrado",
        text: "Meios de pagamento, entrega, e-mail marketing e anúncios conectados. Uma operação que funciona junta, sem remendo.",
      },
    ],
  },
  extra: {
    eyebrow: "Não é só loja virtual",
    title: "Precisa de um site ou uma landing page? A gente também cria.",
    cards: [
      {
        icon: "/img/icon-loja.png",
        title: "Site institucional",
        text: "Um site que passa credibilidade e transforma o visitante em contato. Rápido, otimizado pro Google e com a cara da sua marca.",
      },
      {
        icon: "/img/icon-trafego.png",
        title: "Landing page",
        text: "Página de campanha feita pra uma coisa só: converter. Perfeita pros seus anúncios, lançamentos e captação de leads.",
      },
    ],
  },
  how: {
    eyebrow: "Como trabalhamos",
    title: <>Aqui a gente faz tudo — do domínio à primeira venda.</>,
    items: [
      "Escolha e configuração da plataforma ideal pro seu negócio",
      "Layout, banners e identidade visual no padrão da sua marca",
      "Cadastro, descrição e otimização (SEO) dos produtos",
      "Meios de pagamento e de entrega instalados",
      "Contas do Google instaladas (Analytics, Merchant e tag de conversão)",
      "Domínio próprio e e-mail profissional",
      "Ajustes, testes e otimização da loja",
      "Integração com anúncios e e-mail marketing",
    ],
  },
  final: {
    title: "Pronto pra tirar a sua loja do papel?",
    text: "Me conta a sua ideia. Em uma conversa a gente já te mostra o caminho pra colocar a sua loja pra vender — sem compromisso.",
  },
};

export default function ServicoLojaVirtual() {
  return <ServicePage data={data} />;
}
