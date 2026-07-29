import { Link } from "react-router-dom";
import Brand from "./Brand";

type Props = {
  ctaHref: string;
  variant?: "home" | "inner";
};

const SERVICES = [
  { label: "Tráfego pago", to: "/servico-trafego-pago" },
  { label: "E-mail marketing", to: "/servico-email-marketing" },
  { label: "Loja virtual & sites", to: "/servico-loja-virtual" },
  { label: "SEO & otimização", to: "/servico-seo" },
  { label: "Mídia social", to: "/servico-midia-social" },
];

export default function SiteHeader({ ctaHref, variant = "inner" }: Props) {
  const isHome = variant === "home";
  return (
    <header>
      <div className="wrap nav">
        <Brand href={isHome ? "#" : "/"} />
        <nav className="menu">
          <Link to="/">Home</Link>
          <div className="svc-drop">
            <span className="svc-drop-label">Serviços</span>
            <div className="drop-panel">
              {SERVICES.map((s) => (
                <Link key={s.to} to={s.to}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/sobre">Sobre</Link>
          {isHome && <a href="#contato">Contato</a>}
          <a className="btn" href={ctaHref} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
