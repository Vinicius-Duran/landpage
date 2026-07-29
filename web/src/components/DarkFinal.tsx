/** CTA final escuro usado nas páginas de serviço e na página Sobre. */
export default function DarkFinal({
  title,
  text,
  ctaHref,
  ctaLabel = "Falar no WhatsApp",
}: {
  title: string;
  text: string;
  ctaHref: string;
  ctaLabel?: string;
}) {
  return (
    <section className="darkfinal">
      <div className="wrap" style={{ padding: "76px 40px" }}>
        <p className="sec-ey" style={{ textAlign: "center", color: "#ffb488" }}>
          Bora vender mais
        </p>
        <h2>{title}</h2>
        <p>{text}</p>
        <a className="btn lg" href={ctaHref} target="_blank" rel="noopener noreferrer">
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
