import { Link } from "react-router-dom";
import Brand from "./Brand";

type Props = {
  ctaHref: string;
  variant?: "home" | "inner";
};

export default function SiteHeader({ ctaHref, variant = "inner" }: Props) {
  const isHome = variant === "home";
  return (
    <header>
      <div className="wrap nav">
        <Brand href={isHome ? "#" : "/"} />
        <nav className="menu">
          <a href={isHome ? "#servicos" : "/#servicos"}>Serviços</a>
          {isHome && <a href="#cases">Cases</a>}
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
