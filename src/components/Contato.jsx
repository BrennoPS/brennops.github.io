import contatos from '../data/contatos.js'

const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.4 8.75 22 10.9 22 14.3V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21H9z" />
  </svg>
)
const IconGithub = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.4 9.4 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.58.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z" />
  </svg>
)
const IconWhatsapp = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
    <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 00-8.6 15.06L2 22l5.05-1.32A10 10 0 1012 2z" />
  </svg>
)

export default function Contato() {
  const redes = [
    { key: 'linkedin', label: 'LinkedIn', href: contatos.linkedin, Icon: IconLinkedin },
    { key: 'github', label: 'GitHub', href: contatos.github, Icon: IconGithub },
    { key: 'whatsapp', label: 'WhatsApp', href: contatos.whatsapp, Icon: IconWhatsapp },
  ].filter((r) => r.href)

  return (
    <section id="contato" className="section contato">
      <div className="container">
        <h2 className="section__title" data-reveal>
          <span className="grad">Contato</span>
        </h2>
        <p className="contato__lead" data-reveal>
          Vamos conversar? Me encontre nos canais abaixo.
        </p>

        <div className="contato__redes" data-reveal>
          {redes.map(({ key, label, href, Icon }) => (
            <a
              key={key}
              href={href}
              className={`rede rede--${key}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon />
              <span>{label}</span>
            </a>
          ))}
        </div>

        {contatos.email && (
          <a href={`mailto:${contatos.email}`} className="contato__email" data-reveal>
            {contatos.email}
          </a>
        )}
      </div>
    </section>
  )
}
