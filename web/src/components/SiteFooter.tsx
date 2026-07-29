import Brand from "./Brand";
import { EMAIL, INSTAGRAM } from "../constants";

type Props = {
  /** Só a home mostra o link de WhatsApp e "Cases" no footer. */
  variant?: "home" | "inner";
  whatsappHref?: string;
};

export default function SiteFooter({ variant = "inner", whatsappHref }: Props) {
  const isHome = variant === "home";
  return (
    <footer>
      <div className="wrap">
        <Brand href={isHome ? "#" : "index.html"} />
        <nav className="fl">
          <a href={isHome ? "#servicos" : "index.html#servicos"}>Serviços</a>
          {isHome && <a href="#cases">Cases</a>}
          <a href="sobre.html">Sobre</a>
          {isHome && whatsappHref && (
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          )}
          <a href={`mailto:${EMAIL}`}>E-mail</a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </nav>
        <div className="cop">
          metaemarketing.com.br · Marketing digital para e-commerce · © 2026 Meta&amp;Marketing.
          {isHome && " Todos os direitos reservados."}
        </div>
      </div>
    </footer>
  );
}
