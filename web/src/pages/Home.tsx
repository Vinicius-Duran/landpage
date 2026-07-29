import { Link } from "react-router-dom";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { EMAIL, WA_DIAGNOSTICO, WA_VENDER_MAIS } from "../constants";
import "../styles/home.css";

const HERO_BG =
  "linear-gradient(100deg,rgba(12,11,10,.9) 0%,rgba(12,11,10,.78) 42%,rgba(12,11,10,.55) 78%,rgba(12,11,10,.4) 100%),url(/img/hero-home.jpg)";

const BENEFITS = [
  { icon: "/img/icon-trafego.png", title: "Tráfego com retorno", sub: "ROAS no foco" },
  { icon: "/img/icon-loja.png", title: "Loja que converte", sub: "pronta pra vender" },
  { icon: "/img/icon-email.png", title: "E-mail no automático", sub: "vende sozinho" },
  { icon: "/img/icon-seo.png", title: "SEO certo", sub: "cliente que compra" },
];

const PAINS = [
  "Você investe em anúncio, mas o retorno não aparece na conta no fim do mês.",
  "A loja está no ar, bonita, mas as vendas não acompanham o esforço.",
  "Você faz um pouco de tudo sozinha — e não sobra tempo pra fazer a loja crescer.",
];

const SERVICES = [
  {
    icon: "/img/icon-trafego.png",
    title: "Tráfego pago",
    text: "Google Ads, Meta Ads e Google Shopping com estratégia, catálogo otimizado e foco em ROAS. Anúncio que vira venda, não só clique.",
    href: "/servico-trafego-pago",
  },
  {
    icon: "/img/icon-email.png",
    title: "E-mail marketing",
    text: "Fluxos automáticos de carrinho abandonado, reativação e recompra. Sua loja vendendo no automático, 24h por dia.",
    href: "/servico-email-marketing",
  },
  {
    icon: "/img/icon-loja.png",
    title: "Loja virtual & sites",
    text: "Criação de e-commerce do zero: estrutura, layout, cadastro e SEO desde o primeiro dia. Loja feita pra converter.",
    href: "/servico-loja-virtual",
  },
  {
    icon: "/img/icon-seo.png",
    title: "SEO & otimização",
    text: "Sua loja achada por quem já quer comprar. Produtos e estrutura otimizados pra aparecer no Google de forma orgânica.",
    href: "/servico-seo",
  },
  {
    icon: "/img/icon-social.png",
    title: "Mídia social",
    text: "Conteúdo no padrão da marca que engaja e transforma seguidor em cliente. Presença consistente que sustenta a venda.",
    href: "/servico-midia-social",
  },
];

const RESULTS = [
  {
    icon: "/img/icon-roas.png",
    big: "8x",
    label: <>de ROAS — retorno de 8 vezes sobre o investimento em anúncio</>,
  },
  {
    icon: "/img/icon-otimizacao.png",
    big: "98,4%",
    label: <>de pontuação de otimização da conta no Google Ads</>,
  },
  {
    icon: "/img/icon-certificado.png",
    big: "18 anos",
    label: (
      <>
        de experiência dedicada só a <span style={{ whiteSpace: "nowrap" }}>e-commerce</span>
      </>
    ),
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Empresa dinâmica, dedicada e facilitadora. Trabalhamos com eles há 5 anos e estamos mega satisfeitos. Super indico!",
    initial: "A",
    name: "Alessandra Sebestyen",
    role: "Sanatek · 5 anos de parceria",
  },
  {
    quote:
      "Domínio, meio de entrega, meio de pagamento, e-mail… tudo ok! Vivi, maravilhosa. Super obrigada por ser do jeitinho que você é — é exatamente assim que eu te vejo.",
    initial: "V",
    name: "Vanessa",
    role: "Bag2Go · lançamento de loja virtual",
  },
  {
    quote:
      "Obrigada à Meta&Marketing por toda a paciência e gentileza nesse processo de construção do site. Que bom que encontramos vocês no nosso caminho! Que tenhamos uma caminhada próspera.",
    initial: "C",
    name: "Carolina",
    role: "Minah Joias · criação de site",
  },
  {
    quote:
      "O site ficou lindo, meninas! E a Vivi, resolutiva — não teve nada que eu pedi que você não tenha resolvido, e não foram poucas demandas. Estamos muito satisfeitas com o resultado.",
    initial: "T",
    name: "Taíssa",
    role: "Minah Joias · criação de site",
  },
];

const CREDS = [
  "Certificada Google Shopping",
  "Google Ads & Meta Ads",
  "18 anos em e-commerce",
  "SEO para lojas",
];

/** Ilustração do bloco CTA escuro (gráfico de barras em ascensão). */
function GrowthIllustration() {
  return (
    <div className="dctaillus">
      <svg viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="430" cy="132" r="132" fill="rgba(249,98,50,.10)" />
        <circle cx="504" cy="300" r="7" fill="#F29B30" />
        <circle cx="70" cy="120" r="8" fill="#F96232" />
        <rect x="126" y="86" width="300" height="196" rx="12" fill="#241f19" stroke="rgba(255,255,255,.12)" />
        <circle cx="146" cy="106" r="3.5" fill="#F96232" />
        <circle cx="158" cy="106" r="3.5" fill="#F29B30" />
        <circle cx="170" cy="106" r="3.5" fill="rgba(255,255,255,.25)" />
        <rect x="150" y="222" width="26" height="42" rx="4" fill="#5a4a3e" />
        <rect x="188" y="204" width="26" height="60" rx="4" fill="#7a5a44" />
        <rect x="226" y="180" width="26" height="84" rx="4" fill="#F29B30" />
        <rect x="264" y="200" width="26" height="64" rx="4" fill="#7a5a44" />
        <rect x="302" y="164" width="26" height="100" rx="4" fill="#F96232" />
        <rect x="340" y="146" width="26" height="118" rx="4" fill="#F96232" />
        <path d="M96 288 H456 L474 314 H78 Z" fill="#2b251f" stroke="rgba(255,255,255,.12)" />
        <path
          d="M150 250 C 250 220, 320 210, 470 92"
          stroke="#F96232"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M470 92 l-22 4 M470 92 l-4 22"
          stroke="#F96232"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader variant="home" ctaHref={WA_VENDER_MAIS} />
      <main>
        <section className="herobg" style={{ backgroundImage: HERO_BG }}>
          <div className="wrap heroin">
            <div className="hcopy">
              <span className="ey">● 18 anos só em e-commerce · Certificada Google Shopping</span>
              <h1>
                Você cuida da sua loja.
                <br />
                A gente cuida de tudo
                <br />
                que faz ela <span className="o">vender</span>.
              </h1>
              <p className="subw">
                Tráfego, e-mail, SEO e toda a estrutura da sua loja — a operação completa do seu
                e-commerce em um só lugar. Sem precisar gerenciar vários fornecedores.
              </p>
              <div className="cta-row">
                <a className="btn lg" href={WA_VENDER_MAIS} target="_blank" rel="noopener noreferrer">
                  Quero vender mais na minha loja
                </a>
                <a className="btn lg ghostw" href="#servicos">
                  Ver o que fazemos
                </a>
              </div>
              <div className="trustw">
                Especialista em e-commerce desde <b>2008</b> · lojas criadas do zero e colocadas pra
                vender
              </div>
            </div>
          </div>
        </section>

        <div className="benefits">
          <div className="wrap">
            {BENEFITS.map((b) => (
              <div className="ben" key={b.title}>
                <span className="cic">
                  <img className="benico" alt="" loading="lazy" src={b.icon} />
                </span>
                <div>
                  <b>{b.title}</b>
                  <small>{b.sub}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="problem" id="problema">
          <div className="wrap">
            <div className="sec-ey">O problema real</div>
            <h2>Sua loja tem tudo pra vender. Então por que não vende?</h2>
            <div className="pains">
              {PAINS.map((pain, i) => (
                <div className="pain" key={i}>
                  <div className="n">{i + 1}</div>
                  <p>{pain}</p>
                </div>
              ))}
            </div>
            <p className="pclose">
              O problema quase nunca é a sua loja. É a{" "}
              <span className="o">operação por trás dela</span> — e é exatamente disso que a gente
              cuida.
            </p>
          </div>
        </section>

        <section id="servicos" className="svcsec">
          <div className="svchead">
            <div className="wrap">
              <div className="sec-ey">A operação completa</div>
              <h2>Tudo que a sua loja precisa pra vender, com a gente.</h2>
              <p className="lead">
                Com 18 anos de experiência em e-commerce, a gente cuida de todas as frentes da sua
                loja. Você escolhe um serviço ou a operação completa.
              </p>
            </div>
          </div>
          <div className="wrap">
            <div className="svc-grid svcover">
              {SERVICES.map((s) => (
                <div className="svc" key={s.href}>
                  <img className="svcico" alt="" loading="lazy" src={s.icon} />
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Link to={s.href} className="svc-link">
                    Ver página ›
                  </Link>
                </div>
              ))}
              <div className="svc svc-all">
                <h3>Precisa de tudo isso junto?</h3>
                <p>
                  É aí que a gente faz diferença: a operação inteira da sua loja cuidada por um time
                  só, com tudo integrado.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cases" className="resultsec">
          <div className="wrap">
            <div className="sec-ey">Resultados</div>
            <h2>Números reais de contas que a gente gerencia.</h2>
            <div className="rgrid">
              {RESULTS.map((r) => (
                <div className="rstat" key={r.big}>
                  <img className="rico" alt="" loading="lazy" src={r.icon} />
                  <div>
                    <div className="big">{r.big}</div>
                    <div className="lb">{r.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="minicase">
              <div className="mc-h">
                3 agendamentos no <span className="o">1º impulsionamento</span>. 2 já fecharam.
              </div>
              <div>
                <blockquote>
                  "Achei ótimo esse primeiro impulsionamento — me chamaram e agendei 3. Dois
                  fecharam e o terceiro vai começar também. Foi investimento baixo pra esse
                  resultado."
                </blockquote>
                <div className="who">— Cliente · gestão de tráfego</div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 20 }}>
          <div className="wrap">
            <div className="sec-ey">Quem já trabalha com a gente</div>
            <h2>Cliente satisfeito é o que fala mais alto.</h2>
            <p className="lead" style={{ marginTop: 14 }}>
              Facilitadora, dedicada, dinâmica — <span className="o">as palavras que os clientes usam</span>
              . É isso que a sua loja precisa por perto.
            </p>
            <div className="tst-grid">
              {TESTIMONIALS.map((t) => (
                <div className="tst" key={t.name}>
                  <div className="quote">{t.quote}</div>
                  <div className="by">
                    <span className="av">{t.initial}</span>
                    <div>
                      <b>{t.name}</b>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="darkcta">
          <div className="wrap dctain">
            <div className="dctacopy">
              <div className="dctaey">Bora crescer</div>
              <h2>Sua loja pode vender muito mais do que vende hoje.</h2>
              <p>
                Em uma conversa a gente identifica onde a sua loja está travando e te mostra o
                caminho — sem compromisso.
              </p>
              <a className="btn lg" href={WA_DIAGNOSTICO} target="_blank" rel="noopener noreferrer">
                Quero um diagnóstico gratuito
              </a>
            </div>
            <GrowthIllustration />
          </div>
        </section>

        <section className="about" id="sobre">
          <div className="wrap">
            <div className="photo" style={{ backgroundImage: "url(/img/viviane-home.jpg)" }} />
            <div>
              <div className="sec-ey">Quem cuida da sua loja</div>
              <h2>Oi, eu sou a Viviane.</h2>
              <p>
                Trabalho com e-commerce desde <b>2008</b>. Já criei lojas do zero, estruturei
                catálogos com técnicas de SEO, gerenciei verba de anúncio e montei fluxos de e-mail
                para marcas que precisavam vender de verdade — não só ter presença bonita na
                internet.
              </p>
              <p>
                À frente da <b>Meta&amp;Marketing</b> e de um time desde 2012, com uma obsessão só:
                fazer a loja do cliente vender, em todas as frentes. Sou gestora de tráfego{" "}
                <b>certificada em Google Shopping</b> e especialista em lojas online de ponta a
                ponta.
              </p>
              <div className="creds">
                {CREDS.map((c) => (
                  <span className="cred" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="final" id="contato">
          <div className="wrap">
            <div className="sec-ey" style={{ textAlign: "center" }}>
              Vamos conversar
            </div>
            <h2>Sua loja pode vender mais a partir de agora.</h2>
            <p>
              Me conta onde a sua loja está travando. Em uma conversa a gente já te mostra por onde
              começar — sem compromisso.
            </p>
            <a className="btn lg" href={WA_VENDER_MAIS} target="_blank" rel="noopener noreferrer">
              Falar com a Viviane no WhatsApp
            </a>
            <div className="final-mail">
              Prefere e-mail? <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter variant="home" whatsappHref={WA_VENDER_MAIS} />
    </>
  );
}
