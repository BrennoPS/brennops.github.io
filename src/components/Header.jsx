import { useState, useEffect } from 'react'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#conhecimentos', label: 'Conhecimentos' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={() => setAberto(false)}>
          Brenno<span>.</span>
        </a>

        <ul className={`nav__list ${aberto ? 'nav__list--aberto' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav__link" onClick={() => setAberto(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`nav__toggle ${aberto ? 'nav__toggle--ativo' : ''}`}
          aria-label="Abrir menu"
          aria-expanded={aberto}
          onClick={() => setAberto((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  )
}
