import DarkFinal from "../components/DarkFinal";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { WA_CONVERSAR } from "../constants";
import "../styles/sobre.css";

const CERTS = [
  { yr: "2008", title: "Gestão de Marketing Digital", inst: "WBI Brasil" },
  { yr: "2009", title: "Gestão de e-Commerce e Marketing Digital", inst: "Escola Internet Innovation · SP" },
  { yr: "2012", title: "Facebook Marketing", inst: "ComSchool" },
  { yr: "2013", title: "Laboratório de Redes Sociais", inst: "ComSchool" },
  { yr: "2016", title: "Marketing de Conteúdo", inst: "Universidade Rock Content" },
  { yr: "2016", title: "Plataforma RD Station", inst: "Resultados Digitais" },
  { yr: "2018", title: "Google Ads · Marketing Digital", inst: "ComSchool" },
  { yr: "2018", title: "Facebook Ads & Instagram Ads", inst: "Udemy" },
  { yr: "2020", title: "ENGAJE · Produção de Conteúdo", inst: "Nowall School" },
  { yr: "2022", title: "Conversão Extrema · Google Ads", inst: "Universo Extremo" },
  { yr: "2025", title: "Imersão Google Ads", inst: "EBMD" },
];

const STATS = [
  { big: "Desde 2008", label: "dedicada exclusivamente a e-commerce" },
  { big: "Brasil + EUA", label: "lojas atendidas nos dois países" },
  { big: "Google", label: "certificada em Google Shopping" },
];

export default function Sobre() {
  return (
    <>
      <SiteHeader variant="inner" ctaHref={WA_CONVERSAR} />
      <main>
        <section className="ahero">
          <div className="wrap aheroin">
            <div>
              <p className="sec-ey">Sobre</p>
              <h1>18 anos vivendo e-commerce, todos os dias.</h1>
              <p className="intro">
                Especialista em e-commerce desde 2008. Já criei lojas do zero, estruturei catálogos com SEO, gerenciei
                verba de anúncio e montei fluxos de e-mail pra marcas que precisavam vender de verdade — no Brasil e nos
                Estados Unidos. À frente da Meta&amp;Marketing e de um time, com uma obsessão só: fazer a loja do
                cliente vender.
              </p>
              <div className="acred">
                <img
                  className="gb"
                  src="/img/google-shopping-certified.png"
                  alt="Certificada Google Shopping Ads"
                  loading="lazy"
                />
                <span className="cred">Google Ads &amp; Meta Ads</span>
                <span className="cred">18 anos em e-commerce</span>
                <span className="cred">Brasil e EUA</span>
              </div>
              <div className="acta">
                <a className="btn lg" href={WA_CONVERSAR} target="_blank" rel="noopener noreferrer">
                  Falar com a Viviane no WhatsApp
                </a>
              </div>
            </div>
            <div className="aphoto" style={{ backgroundImage: "url(/img/viviane-sobre.jpg)" }} />
          </div>
        </section>

        <section className="story">
          <div className="wrap">
            <p className="sec-ey">Trajetória</p>
            <h2>A história por trás da operação.</h2>
            <p>
              Comecei em <b>2008</b>, quando vender online no Brasil ainda era novidade. Desde então me especializei em
              lojas online de ponta a ponta: da criação da loja e da estrutura à descrição de produtos com SEO, da
              gestão de tráfego pago (certificada em Google Shopping) aos fluxos de e-mail que trazem o cliente de
              volta.
            </p>
            <p>
              Ao longo desses anos, atendi diversos e-commerces no <b>Brasil e nos Estados Unidos</b> — de nichos e
              tamanhos diferentes, sempre com o mesmo foco: transformar a loja numa máquina de vendas. Em <b>2012</b>{" "}
              fundei a <b>Meta&amp;Marketing</b>, e hoje toco isso com um time que cuida de cada frente da operação.
            </p>
            <div className="astats">
              {STATS.map((s) => (
                <div className="astat" key={s.big}>
                  <div className="big">{s.big}</div>
                  <div className="lb">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <p className="sec-ey">Formação</p>
            <h2>Sempre estudando pra entregar o melhor.</h2>
            <p className="lead">
              Marketing digital muda toda hora — e a sua loja merece quem está sempre atualizado. Uma parte da minha
              jornada de formação contínua:
            </p>
            <div className="certgrid">
              {CERTS.map((c) => (
                <div className="cert" key={`${c.yr}-${c.title}`}>
                  <span className="yr">{c.yr}</span>
                  <b>{c.title}</b>
                  <span>{c.inst}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DarkFinal
          title="Vamos fazer a sua loja vender?"
          text="Me conta onde a sua loja está hoje. Em uma conversa eu já te mostro por onde começar — sem compromisso."
          ctaHref={WA_CONVERSAR}
          ctaLabel="Falar com a Viviane no WhatsApp"
        />
      </main>
      <SiteFooter />
    </>
  );
}
