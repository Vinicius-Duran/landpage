import Brand from "./Brand";

type Props = {
  /** Link do botão "Falar no WhatsApp" — cada página usa uma mensagem própria. */
  ctaHref: string;
  /** A home linka para âncoras internas; as outras páginas voltam para a home. */
  variant?: "home" | "inner";
};

export default function SiteHeader({ ctaHref, variant = "inner" }: Props) {
  const isHome = variant === "home";
  return (
    <header>
      <div className="wrap nav">
        <Brand href={isHome ? "#" : "index.html"} />
        <nav className="menu">
          <a href={isHome ? "#servicos" : "index.html#servicos"}>Serviços</a>
          {isHome && <a href="#cases">Cases</a>}
          <a href="sobre.html">Sobre</a>
          {isHome && <a href="#contato">Contato</a>}
          <a className="btn" href={ctaHref} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
