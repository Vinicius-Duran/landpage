import ServicePage, { type ServicePageData } from "../components/ServicePage";
import { whatsapp } from "../constants";
import "../styles/service.css";

const WA = whatsapp("Oi Viviane! Quero melhorar o SEO da minha loja.");

const data: ServicePageData = {
  whatsappHref: WA,
  hero: {
    background:
      "linear-gradient(100deg,rgba(16,13,11,.95) 0%,rgba(16,13,11,.88) 44%,rgba(16,13,11,.66) 100%),url(/img/hero-seo.jpg)",
    eyebrow: "SEO para e-commerce",
    title: (
      <>
        Se a sua loja não aparece no Google, ela <span className="o">não existe</span> pra quem está procurando.
      </>
    ),
    sub: "SEO coloca a sua loja na frente de quem busca o que você vende — de forma orgânica, sem pagar por clique. Otimizamos produtos, estrutura e velocidade pra você vender enquanto dorme.",
    ctaLabel: "Quero minha loja no Google",
  },
  problem: {
    eyebrow: "A dor de quem depende só de anúncio",
    title: <>Você paga por cada clique. E quando o anúncio para, as visitas somem.</>,
    lead: (
      <>
        Anúncio traz cliente na hora — mas no minuto que você pausa, o tráfego desaparece. Enquanto isso, quem digita o seu produto no Google encontra o concorrente que trabalhou o SEO. Sem otimização, a sua loja fica escondida na segunda, terceira página… onde ninguém clica. E cada busca em que você não aparece é{" "}
        <span className="o" style={{ fontWeight: 700 }}>uma venda que vai pra outro</span>.
      </>
    ),
  },
  what: {
    eyebrow: "O que fazemos",
    title: "Sua loja achada no Google por quem já quer comprar.",
    lead: "A gente otimiza cada parte da sua loja pra ela subir nas buscas e atrair tráfego orgânico — o cliente que chega de graça e já está pronto pra comprar.",
    cards: [
      {
        icon: "/img/icon-seo.png",
        title: "SEO de produtos",
        text: "Título e descrição otimizados pra cada produto ser achado exatamente por quem procura por ele no Google.",
      },
      {
        icon: "/img/icon-seo.png",
        title: "SEO técnico",
        text: "Velocidade, versão mobile e estrutura do site arrumados pra o Google gostar e ranquear a sua loja mais alto.",
      },
      {
        icon: "/img/icon-otimizacao.png",
        title: "Palavras-chave certas",
        text: "A gente descobre o que o seu cliente digita na busca e coloca a sua loja exatamente no caminho dele.",
      },
      {
        icon: "/img/icon-seo.png",
        title: "Conteúdo que ranqueia",
        text: "Textos e páginas que atraem tráfego orgânico e trazem cliente todo dia, sem custo por clique.",
      },
    ],
  },
  how: {
    eyebrow: "Como trabalhamos",
    title: <>SEO que sobe a sua loja no Google, passo a passo.</>,
    items: [
      "Pesquisa de palavras-chave do seu nicho de mercado",
      "Otimização de títulos e descrições de produtos (meta tags)",
      "Estrutura de categorias, URLs e links internos",
      "Criação e configuração das contas Google (Analytics, Search Console e Merchant Center)",
      "SEO técnico: velocidade e experiência no celular",
      "Produção de conteúdo otimizado para busca",
      "Acompanhamento de posições no Google e tráfego orgânico",
    ],
  },
  final: {
    title: "Pronto pra sua loja ser achada no Google?",
    text: "Me conta como está a sua loja hoje. Em uma conversa a gente já te mostra por onde começar — sem compromisso.",
  },
};

export default function ServicoSeo() {
  return <ServicePage data={data} />;
}
