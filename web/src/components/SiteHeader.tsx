import { useState } from "react";
import { Link } from "react-router-dom";
import Brand from "./Brand";

type Props = {
  ctaHref: string;
  variant?: "home" | "inner";
};

const SERVICES = [
  { label: "Tráfego Pago", to: "/servico-trafego-pago" },
  { label: "Email Marketing e Fluxos", to: "/servico-email-marketing" },
  { label: "Loja Virtual e Sites", to: "/servico-loja-virtual" },
  { label: "SEO e Otimização", to: "/servico-seo" },
  { label: "Mídias Sociais", to: "/servico-midia-social" },
];

export default function SiteHeader({ ctaHref, variant = "inner" }: Props) {
  const isHome = variant === "home";
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav">
        <Brand href={isHome ? "#" : "/"} />

        {/* Desktop nav */}
        <nav className="menu">
          <Link to="/">Home</Link>
          <div className="svc-drop">
            <span className="svc-drop-label">Serviços</span>
            <div className="drop-panel">
              {SERVICES.map((s) => (
                <Link key={s.to} to={s.to}>{s.label}</Link>
              ))}
            </div>
          </div>
          <Link to="/sobre">Sobre</Link>
          {isHome && <a href="#contato">Contato</a>}
          <a className="btn" href={ctaHref} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger${open ? " open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="mobile-menu" onClick={() => setOpen(false)}>
          <Link to="/">Home</Link>
          <div className="mob-svc-label">Serviços</div>
          {SERVICES.map((s) => (
            <Link key={s.to} to={s.to} className="mob-svc-item">{s.label}</Link>
          ))}
          <Link to="/sobre">Sobre</Link>
          {isHome && <a href="#contato">Contato</a>}
          <a className="btn" href={ctaHref} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
