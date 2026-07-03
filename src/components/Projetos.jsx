import projetos from '../data/projetos.js'
import CardProjeto from './CardProjeto.jsx'

export default function Projetos() {
  // Destaques primeiro, mantendo a ordem definida no arquivo de dados.
  const ordenados = [...projetos].sort(
    (a, b) => Number(b.destaque) - Number(a.destaque),
  )

  return (
    <section id="projetos" className="section projetos">
      <div className="container">
        <h2 className="section__title" data-reveal>
          <span className="grad">Projetos</span>
        </h2>
        <div className="projetos__grid">
          {ordenados.map((p) => (
            <CardProjeto key={p.titulo} projeto={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
