import { useState, useEffect } from 'react'

export default function BotaoTopo() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const subir = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`topo ${visivel ? 'topo--visivel' : ''}`}
      onClick={subir}
      aria-label="Voltar ao topo"
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}
