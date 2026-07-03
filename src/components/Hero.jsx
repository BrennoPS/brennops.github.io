export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <p className="hero__hello" data-reveal>
          Olá, meu nome é
        </p>
        <h1 className="hero__name" data-reveal>
          Brenno Pestana
        </h1>
        <h2 className="hero__role" data-reveal>
          Desenvolvedor <span className="grad">Full Stack .NET</span>
        </h2>
        <p className="hero__lead" data-reveal>
          Construo aplicações web do banco de dados à interface, com foco em
          código limpo e experiências responsivas.
        </p>
        <div className="hero__actions" data-reveal>
          <a href="#projetos" className="btn btn--primary">
            Ver projetos
          </a>
          <a href="#contato" className="btn btn--ghost">
            Entrar em contato
          </a>
        </div>
      </div>
      <div className="hero__glow" aria-hidden="true"></div>
    </section>
  )
}
