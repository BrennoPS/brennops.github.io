import { useEffect } from 'react'

// Adiciona a classe "is-visible" aos elementos com [data-reveal]
// quando eles entram na viewport, disparando a animação de entrada.
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')

    // Se o navegador não suportar IntersectionObserver, mostra tudo.
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
