export default function CardProjeto({ projeto }) {
  const { titulo, descricao, linkAoVivo, linkRepo, cor, imagem } = projeto
  const gradiente = `linear-gradient(135deg, ${cor?.[0] ?? '#22d3ee'}, ${
    cor?.[1] ?? '#a855f7'
  })`

  return (
    <article className="card" data-reveal>
      <div className="card__capa" style={{ background: gradiente }}>
        {imagem ? (
          <img src={imagem} alt={titulo} className="card__img" loading="lazy" />
        ) : (
          <span className="card__inicial" aria-hidden="true">
            {titulo.charAt(0)}
          </span>
        )}
      </div>

      <div className="card__body">
        <h3 className="card__titulo">{titulo}</h3>
        <p className="card__desc">{descricao}</p>

        <div className="card__acoes">
          {linkAoVivo ? (
            <a
              href={linkAoVivo}
              className="btn btn--sm btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver ao vivo
            </a>
          ) : (
            <span className="btn btn--sm btn--disabled">Em breve</span>
          )}

          {linkRepo && (
            <a
              href={linkRepo}
              className="btn btn--sm btn--ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
