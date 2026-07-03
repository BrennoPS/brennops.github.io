export default function Footer() {
  const ano = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {ano} Brenno Pestana</span>
        <span className="footer__made">Feito com React</span>
      </div>
    </footer>
  )
}
