import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Projetos from './components/Projetos.jsx'
import Conhecimentos from './components/Conhecimentos.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'
import BotaoTopo from './components/BotaoTopo.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Conhecimentos />
        <Contato />
      </main>
      <Footer />
      <BotaoTopo />
    </>
  )
}
