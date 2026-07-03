import conhecimentos from '../data/conhecimentos.js'

export default function Conhecimentos() {
  return (
    <section id="conhecimentos" className="section conhecimentos">
      <div className="container">
        <h2 className="section__title" data-reveal>
          <span className="grad">Conhecimentos</span>
        </h2>
        <ul className="conhecimentos__grid" data-reveal>
          {conhecimentos.map((c) => (
            <li key={c} className="badge">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
