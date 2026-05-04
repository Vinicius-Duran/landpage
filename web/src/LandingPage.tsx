import { useState, type FormEvent, type ReactNode } from "react";
import {
  WHATSAPP_URL_FOOTER,
  WHATSAPP_URL_FORM,
  WHATSAPP_URL_HERO,
} from "./constants";
import { formatBrazilPhoneInput } from "./lib/phoneMask";
import { submitLead } from "./lib/submitLead";

function WordSpan({ children, delaySec }: { children: string; delaySec: number }) {
  return (
    <span className="word" style={{ animationDelay: `${delaySec}s` }}>
      {children}{" "}
    </span>
  );
}

const MARQUEE_ITEMS: Array<{ key: string; node: ReactNode }> = [
  { key: "1", node: "Clínicas & consultórios" },
  {
    key: "2",
    node: (
      <>
        Escritórios <em>de advocacia</em>
      </>
    ),
  },
  { key: "3", node: "Lojas físicas" },
  { key: "4", node: "Imobiliárias" },
  {
    key: "5",
    node: (
      <>
        Estúdios <em>& studios</em>
      </>
    ),
  },
  { key: "6", node: "Pequenas indústrias" },
  { key: "7", node: "Prestadores de serviço" },
  { key: "8", node: "Comércio local" },
];

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Quanto tempo leva para ficar pronto?",
    a: "Landing pages saem em 7 a 15 dias úteis. Sites institucionais variam de 25 a 45 dias úteis, dependendo do volume de páginas e do conteúdo. O prazo é definido no briefing e cumprido — sem surpresa.",
  },
  {
    q: "Quanto custa? Por que não tem preço aqui?",
    a: 'Cada projeto é único — depende do número de páginas, integrações, copy, e estratégia. Em vez de um "pacote pronto" que pode não servir para você, fazemos uma proposta personalizada. O orçamento sai em até 48h após o briefing inicial, sem custo e sem compromisso.',
  },
  {
    q: "Eu já tenho domínio e hospedagem. Vocês usam?",
    a: "Sim, podemos usar seus serviços atuais ou indicar opções confiáveis. Cuidamos de toda a parte técnica de migração e configuração de DNS — você não precisa se preocupar com nada disso.",
  },
  {
    q: "E depois que o site está no ar? Tem manutenção?",
    a: "Oferecemos planos de manutenção mensal opcionais que incluem alterações de conteúdo, ajustes visuais, otimizações de SEO e conversão, monitoramento de performance e atualizações técnicas. Também atendemos demandas pontuais (alteração avulsa) quando preferir. O código do site é seu — você não fica refém de nada.",
  },
  {
    q: "Vocês fazem tráfego pago também?",
    a: "Sim — gestão de Google Ads e Meta Ads é nosso core há 17 anos. É comum clientes começarem com o site e contratarem a gestão de mídia depois. A vantagem: a estrutura do site já nasce 100% preparada para campanha paga.",
  },
  {
    q: "Como funcionam as alterações no site depois de pronto?",
    a: "Nossos sites são desenvolvidos com programação dedicada (HTML/React) — o que garante performance, segurança e SEO muito superiores a sites feitos em construtores genéricos. As alterações são feitas pela nossa equipe via planos de manutenção mensal ou solicitações pontuais, com prazo combinado e sem complicação. Você foca no seu negócio, a gente cuida do site.",
  },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [tipo, setTipo] = useState("");
  const [negocio, setNegocio] = useState("");

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await submitLead({ nome, whatsapp, tipo, negocio });
  };

  return (
    <>
      <nav>
        <a href="#" className="logo" aria-label="Meta&Marketing — Marketing Digital">
          <img src="/logo-principal-versao-2.png" alt="Meta&Marketing" />
        </a>
        <a href="#orcamento" className="nav-cta">
          Solicitar orçamento →
        </a>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-inner">
          <div>
            <div className="eyebrow">Sites & Landing Pages que vendem</div>
            <h1 className="hero-title">
              <WordSpan delaySec={0.15}>Seu</WordSpan>
              <WordSpan delaySec={0.22}>cliente</WordSpan>
              <WordSpan delaySec={0.29}>está</WordSpan>
              <WordSpan delaySec={0.36}>no</WordSpan>
              <WordSpan delaySec={0.43}>Google</WordSpan>
              <em>
                <WordSpan delaySec={0.5}>agora</WordSpan>
              </em>
              .<br />
              <WordSpan delaySec={0.57}>A</WordSpan>
              <WordSpan delaySec={0.64}>questão</WordSpan>
              <WordSpan delaySec={0.71}>é:</WordSpan>
              <WordSpan delaySec={0.78}>ele</WordSpan>
              <WordSpan delaySec={0.85}>encontra</WordSpan>
              <WordSpan delaySec={0.92}>você?</WordSpan>
            </h1>
            <p className="hero-sub">
              Criamos sites institucionais e landing pages com design premium, performance de verdade e estrutura que
              transforma visitantes em clientes pagantes — não em visitas que desaparecem.
            </p>
            <div className="hero-ctas">
              <a href="#orcamento" className="btn-primary">
                Quero meu orçamento <span className="btn-arrow">→</span>
              </a>
              <a href={WHATSAPP_URL_HERO} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </div>
            <div className="hero-trust">
              <div className="trust-num">17+</div>
              <div className="trust-text">anos criando presença digital para empresas brasileiras</div>
              <div className="trust-num">200+</div>
              <div className="trust-text">projetos entregues com foco em conversão e vendas</div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="mockup-frame mockup-1">
              <div className="mockup-bar">
                <div className="mockup-dot" />
                <div className="mockup-dot" />
                <div className="mockup-dot" />
              </div>
              <div className="mockup-content">
                <div>
                  <div className="mockup-1-h">
                    Atendimento <em>de excelência</em>, agora online.
                  </div>
                  <div className="mockup-1-sub">Conheça nossos serviços e marque uma consulta em minutos.</div>
                  <div className="mockup-1-btn">Agendar agora</div>
                </div>
                <div className="mockup-1-grid">
                  <div className="mockup-card">
                    <div className="mockup-card-line" />
                    <div className="mockup-card-line" />
                    <div className="mockup-card-line" />
                  </div>
                  <div className="mockup-card">
                    <div className="mockup-card-line" />
                    <div className="mockup-card-line" />
                    <div className="mockup-card-line" />
                  </div>
                  <div className="mockup-card">
                    <div className="mockup-card-line" />
                    <div className="mockup-card-line" />
                    <div className="mockup-card-line" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mockup-frame mockup-2">
              <div className="mockup-bar">
                <div className="mockup-dot" />
                <div className="mockup-dot" />
                <div className="mockup-dot" />
              </div>
              <div className="mockup-content">
                <div className="mockup-2-h">
                  Conversões <em>este mês</em>
                </div>
                <div className="mockup-2-stat">+312%</div>
                <div className="mockup-2-cap">vs. mês anterior</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-section">
        <div className="marquee">
          {[0, 1].flatMap((round) =>
            MARQUEE_ITEMS.map((item) => (
              <span key={`${round}-${item.key}`}>{item.node}</span>
            ))
          )}
        </div>
      </div>

      <section className="content">
        <div className="section-label">Diga-nos se isso soa familiar</div>
        <h2 className="section-title">
          Você sabe que precisa de um site. Mas <em>algo sempre trava</em>.
        </h2>
        <p className="section-intro">
          Negócio bom, atendimento excelente, fila de espera — e na hora de mostrar isso online? Um site amador, lento,
          ou simplesmente <strong>nenhum site</strong>. A gente entende. E resolve.
        </p>

        <div className="problems-grid">
          <div className="problem">
            <div className="problem-num">— 01</div>
            <h3>Seu cliente pesquisa e não encontra você</h3>
            <p>Enquanto isso, encontra o concorrente — que talvez nem seja melhor que você, mas tem um site decente.</p>
          </div>
          <div className="problem">
            <div className="problem-num">— 02</div>
            <h3>Site velho, lento, que constrange</h3>
            <p>Você evita compartilhar o link. Sabe que precisa atualizar há anos. Mas mexer parece complicado e caro.</p>
          </div>
          <div className="problem">
            <div className="problem-num">— 03</div>
            <h3>Investe em anúncio e o resultado some</h3>
            <p>Visita entra, dá uma olhada e vai embora. Sem ligar, sem mandar mensagem, sem deixar contato.</p>
          </div>
          <div className="problem">
            <div className="problem-num">— 04</div>
            <h3>Tentou fazer sozinho e empacou</h3>
            <p>Plataformas &quot;fáceis&quot; que prometem milagre, mas no fim sobra uma página sem cara de profissional.</p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-inner">
          <div className="section-label">Como podemos ajudar</div>
          <h2 className="section-title">
            Dois caminhos. Um <em>resultado</em>.
          </h2>
          <p className="section-intro">
            Cada projeto é construído do zero para o seu negócio — não usamos templates prontos engessados. Tudo pensado
            para o cliente certo encontrar você e tomar a próxima ação.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <span className="service-tag">Para autoridade & credibilidade</span>
              <h3>
                Site <em>institucional</em>
              </h3>
              <p className="service-desc">
                A vitrine digital do seu negócio. Quem você é, o que oferece e por que escolher você — apresentado com a
                sofisticação que sua marca merece.
              </p>
              <ul className="service-list">
                <li>Design exclusivo, alinhado à identidade da sua marca</li>
                <li>Estrutura de SEO técnico para você ser encontrado no Google</li>
                <li>Páginas de serviços, sobre, blog e contato</li>
                <li>Integração com WhatsApp e Google Business</li>
                <li>Site rápido, responsivo e otimizado para mobile</li>
                <li>Manutenção e suporte mensal opcional</li>
              </ul>
            </div>

            <div className="service-card">
              <span className="service-tag">Para campanhas de tráfego pago</span>
              <h3>
                Landing <em>page</em> de conversão
              </h3>
              <p className="service-desc">
                Página única, focada em uma única ação: gerar lead, agendar consulta, fechar orçamento. Cada elemento
                existe para empurrar o visitante ao próximo passo.
              </p>
              <ul className="service-list">
                <li>Copywriting persuasivo escrito para o seu público</li>
                <li>Estrutura testada de funil (dor → solução → prova → CTA)</li>
                <li>Integração com Google Ads e Meta Ads (pixel + conversão)</li>
                <li>Formulário inteligente + botão WhatsApp</li>
                <li>Testes A/B configuráveis para otimizar resultado</li>
                <li>Velocidade de carregamento abaixo de 2 segundos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="section-label">Como funciona</div>
        <h2 className="section-title">
          Do briefing ao no ar, em <em>4 passos claros</em>.
        </h2>
        <p className="section-intro">
          Sem mistério, sem promessa vazia. Você sabe exatamente o que está acontecendo em cada etapa — e o prazo é
          cumprido.
        </p>

        <div className="process-grid">
          <div className="step">
            <div className="step-num">01</div>
            <h4>Briefing estratégico</h4>
            <p>Conversa para entender seu negócio, seu cliente ideal e o que você quer alcançar. Sem questionário robótico.</p>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <h4>Design & estrutura</h4>
            <p>Apresentamos o conceito visual, estrutura de páginas e copy. Você aprova antes de qualquer linha de código.</p>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <h4>Desenvolvimento</h4>
            <p>Construção técnica com SEO embutido, performance otimizada e integrações com suas ferramentas.</p>
          </div>
          <div className="step">
            <div className="step-num">04</div>
            <h4>Lançamento & suporte</h4>
            <p>Site no ar, pixels configurados, métricas validadas. E suporte continuado para alterações e otimizações.</p>
          </div>
        </div>
      </section>

      <section className="diff-section content">
        <div className="diff-grid">
          <div>
            <div className="section-label">Por que Meta&Marketing</div>
            <h2 className="section-title">
              Não somos uma fábrica de sites. <em>Somos parceiros de crescimento</em>.
            </h2>
            <p className="section-intro" style={{ marginBottom: 50 }}>
              A diferença está em quem está do outro lado: marketing digital de verdade, com cabeça de quem vive de
              tráfego pago e conversão há quase duas décadas.
            </p>

            <div className="diff-stat-block">
              <div className="diff-stat">
                <div className="diff-stat-num">
                  <em>17+</em>
                </div>
                <div className="diff-stat-label">anos de experiência em marketing digital</div>
              </div>
              <div className="diff-stat">
                <div className="diff-stat-num">
                  200<em>+</em>
                </div>
                <div className="diff-stat-label">projetos entregues com excelência</div>
              </div>
              <div className="diff-stat">
                <div className="diff-stat-num">
                  <em>★</em>
                </div>
                <div className="diff-stat-label">Certificação oficial Google Shopping</div>
              </div>
              <div className="diff-stat">
                <div className="diff-stat-num">●</div>
                <div className="diff-stat-label">Parceiros oficiais Edrone CRM</div>
              </div>
            </div>
          </div>

          <div>
            <ul className="diff-list">
              <li className="diff-item">
                <div className="diff-icon">a</div>
                <div>
                  <h5>Site pensado para gerar negócio, não troféu</h5>
                  <p>
                    Cada elemento — do título ao botão — é posicionado com a lógica de quem vive de campanha paga. Bonito
                    é consequência, não objetivo.
                  </p>
                </div>
              </li>
              <li className="diff-item">
                <div className="diff-icon">b</div>
                <div>
                  <h5>SEO técnico desde a fundação</h5>
                  <p>
                    Velocidade, estrutura, schema, meta tags, mobile-first. Seu site nasce pronto para o Google
                    encontrar e ranquear.
                  </p>
                </div>
              </li>
              <li className="diff-item">
                <div className="diff-icon">c</div>
                <div>
                  <h5>Integração nativa com seus anúncios</h5>
                  <p>Pixel da Meta, tag do Google, conversões configuradas. Seu Ads não roda no escuro.</p>
                </div>
              </li>
              <li className="diff-item">
                <div className="diff-icon">d</div>
                <div>
                  <h5>Atendimento direto com quem decide</h5>
                  <p>Você fala com sócios, não com call center. Decisão rápida, ajuste rápido, projeto sem ruído.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-inner">
          <blockquote className="testimonial">
            A Meta&Marketing entregou um site que <em>realmente trabalha pela gente</em>. Triplicamos os contatos
            qualificados em três meses, e a estrutura ficou tão sólida que conseguimos rodar Google Ads com confiança
            desde o primeiro dia.
          </blockquote>
          <div className="testimonial-author">
            <div className="author-avatar">
              <img src="/logo-3-colorido-versao-2.png" alt="Meta&Marketing" />
            </div>
            <div>
              <div className="author-name">Cliente Meta&Marketing</div>
              <div className="author-role">Pequeno negócio local · Sul do Brasil</div>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="section-label">Perguntas frequentes</div>
        <h2 className="section-title">
          Vamos tirar suas <em>dúvidas honestas</em>.
        </h2>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => (
            <div key={item.q} className={`faq-item${openFaq === index ? " open" : ""}`}>
              <button type="button" className="faq-q" onClick={() => toggleFaq(index)}>
                {item.q}
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta" id="orcamento">
        <div className="final-cta-inner">
          <div className="final-cta-content">
            <div>
              <h2>
                Pronto para um site que <em>trabalha por você</em>?
              </h2>
              <p>
                Conta o que você precisa. Em até 48h enviamos uma proposta personalizada — sem pressão, sem letra miúda.
                Se fizer sentido pra você, a gente toca o projeto. Se não fizer, ficamos amigos.
              </p>
              <p style={{ color: "var(--amber)", fontSize: 14, letterSpacing: "0.05em", marginBottom: 0 }}>
                → Resposta em até 48h úteis
              </p>
            </div>

            <div className="form-card">
              <h3 className="form-card-h">Solicite seu orçamento</h3>
              <p className="form-card-sub">Sem compromisso. Resposta em 48h.</p>

              <form id="lead-form" onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="nome">Seu nome</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Como você se chama?"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="whatsapp">WhatsApp</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="(00) 00000-0000"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(formatBrazilPhoneInput(e.target.value))}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tipo">O que você precisa?</label>
                  <select id="tipo" name="tipo" required value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option value="">Selecione...</option>
                    <option>Site institucional</option>
                    <option>Landing page para anúncios</option>
                    <option>Os dois</option>
                    <option>Ainda não sei, quero conversar</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="negocio">Qual seu tipo de negócio?</label>
                  <input
                    type="text"
                    id="negocio"
                    name="negocio"
                    placeholder="Ex: clínica, escritório, loja..."
                    required
                    value={negocio}
                    onChange={(e) => setNegocio(e.target.value)}
                  />
                </div>
                <button type="submit" className="form-submit">
                  Receber proposta <span>→</span>
                </button>
              </form>

              <div className="form-divider">ou</div>

              <a href={WHATSAPP_URL_FORM} className="form-whatsapp" target="_blank" rel="noopener noreferrer">
                Falar agora pelo WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="logo logo-footer" style={{ marginBottom: 14 }}>
          <img src="/logo-principal-versao-2.png" alt="Meta&Marketing" />
        </div>
        <p className="footer-tagline">Marketing digital com visão de quem entende de e-commerce desde 2008.</p>
        <p className="footer-contact" style={{ marginTop: 8 }}>
          <a href="mailto:viviane@metaemarketing.com.br">viviane@metaemarketing.com.br</a>
          <span className="footer-contact-sep">·</span>
          <a href={WHATSAPP_URL_FOOTER} target="_blank" rel="noopener noreferrer">
            (48) 98465-5704
          </a>
        </p>
        <p className="footer-legal" style={{ marginTop: 18, opacity: 0.5, fontSize: 11 }}>
          © Meta&Marketing · Marketing Digital desde 2008 · Certificação Google Shopping · Parceiros Edrone
        </p>
      </footer>
    </>
  );
}
