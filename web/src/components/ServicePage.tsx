import type { ReactNode } from "react";
import CheckList from "./CheckList";
import DarkFinal from "./DarkFinal";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export type IconCard = {
  /** Caminho do ícone em /img */
  icon: string;
  title: ReactNode;
  text: ReactNode;
};

export type ServicePageData = {
  /** Link do WhatsApp usado no header e em todos os CTAs da página. */
  whatsappHref: string;
  hero: {
    /** Valor completo de background-image (gradiente + foto), como no layout. */
    background: string;
    eyebrow: string;
    title: ReactNode;
    sub: string;
    ctaLabel: string;
    /** Exibe o selo "Shopping Ads Certified" ao lado do CTA. */
    showCertBadge?: boolean;
  };
  problem: { eyebrow: string; title: ReactNode; lead: ReactNode };
  what: { eyebrow: string; title: string; lead: string; cards: IconCard[] };
  /** Bloco opcional de cards (usado só em "Loja virtual & sites"). */
  extra?: { eyebrow: string; title: string; cards: IconCard[] };
  how: { eyebrow: string; title: ReactNode; items: ReactNode[] };
  final: { title: string; text: string };
};

function Cards({ cards }: { cards: IconCard[] }) {
  return (
    <div className="adgrid">
      {cards.map((card, i) => (
        <div className="adcard" key={i}>
          <img loading="lazy" alt="" src={card.icon} />
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
}

/** Estrutura comum às 5 páginas de serviço: hero → dor → o que fazemos → como → CTA. */
export default function ServicePage({ data }: { data: ServicePageData }) {
  const { whatsappHref, hero, problem, what, extra, how, final } = data;

  return (
    <>
      <SiteHeader ctaHref={whatsappHref} />
      <main>
        <section className="shero" style={{ backgroundImage: hero.background }}>
          <div className="wrap sheroin">
            <div className="hcopy">
              <a className="back" href="index.html#servicos">
                ‹ Todos os serviços
              </a>
              <p className="ey">{hero.eyebrow}</p>
              <h1>{hero.title}</h1>
              <p className="sub">{hero.sub}</p>
              {hero.showCertBadge ? (
                <div className="herocta">
                  <img
                    className="gcert"
                    src="/img/google-shopping-certified.png"
                    alt="Certificada Google Shopping Ads"
                  />
                  <a className="btn lg" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    {hero.ctaLabel}
                  </a>
                </div>
              ) : (
                <a className="btn lg" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  {hero.ctaLabel}
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="problem">
          <div className="wrap">
            <p className="sec-ey">{problem.eyebrow}</p>
            <h2>{problem.title}</h2>
            <p className="lead" style={{ fontSize: 20 }}>
              {problem.lead}
            </p>
          </div>
        </section>

        <section id="tipos">
          <div className="wrap">
            <p className="sec-ey">{what.eyebrow}</p>
            <h2>{what.title}</h2>
            <p className="lead">{what.lead}</p>
            <Cards cards={what.cards} />
          </div>
        </section>

        {extra && (
          <section>
            <div className="wrap">
              <p className="sec-ey">{extra.eyebrow}</p>
              <h2>{extra.title}</h2>
              <Cards cards={extra.cards} />
            </div>
          </section>
        )}

        <section className="resultsec">
          <div className="wrap">
            <p className="sec-ey">{how.eyebrow}</p>
            <h2>{how.title}</h2>
            <CheckList items={how.items} />
          </div>
        </section>

        <DarkFinal title={final.title} text={final.text} ctaHref={whatsappHref} />
      </main>
      <SiteFooter />
    </>
  );
}
