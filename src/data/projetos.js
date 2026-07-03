// ============================================================
// PROJETOS
// Para adicionar um projeto novo, copie um bloco e edite.
// - destaque: true  -> aparece primeiro (projetos mais recentes)
// - linkAoVivo / linkRepo: deixe '' (string vazia) se ainda não tiver;
//   o botão correspondente fica oculto automaticamente.
// - cor: dupla de cores do gradiente da capa (visual).
// ============================================================

const projetos = [
  {
    titulo: 'Ledo e Pestana',
    descricao:
      'Site institucional de soluções elétricas: catálogo de produtos, orçamento e lista via WhatsApp.',
    linkAoVivo: 'https://brennops.github.io/ledopestana/',
    linkRepo: 'https://github.com/BrennoPS/ledopestana', // TODO: confirmar
    cor: ['#22d3ee', '#3b82f6'],
    destaque: true,
  },
  {
    titulo: 'Finanças',
    descricao: 'Aplicação para controle e organização de finanças pessoais.',
    linkAoVivo: '', // TODO: Brenno enviar link ao vivo
    linkRepo: '', // TODO: Brenno enviar link do repositório
    cor: ['#a855f7', '#22d3ee'],
    destaque: true,
  },
  {
    titulo: 'Paint Web',
    descricao:
      'Permite que os usuários criem imagens e ilustrações diretamente em uma página web.',
    linkAoVivo: 'https://brennopestana.github.io/Drawing_Canvas/',
    linkRepo: 'https://github.com/BrennoPestana/Drawing_Canvas',
    cor: ['#f472b6', '#a855f7'],
    destaque: false,
  },
  {
    titulo: 'Calculadora',
    descricao:
      'Efetua cálculos básicos na web com interface amigável e exibição de resultados.',
    linkAoVivo: 'https://brennopestana.github.io/Calculator/',
    linkRepo: 'https://github.com/BrennoPestana/Calculator',
    cor: ['#38bdf8', '#818cf8'],
    destaque: false,
  },
  {
    titulo: 'QR Code',
    descricao: 'Gerador de QR Code com uma transição de cores no plano de fundo.',
    linkAoVivo: 'https://brennopestana.github.io/QR-Code/',
    linkRepo: 'https://github.com/BrennoPestana/QR-Code',
    cor: ['#34d399', '#22d3ee'],
    destaque: false,
  },
  {
    titulo: 'Product Preview',
    descricao: 'Uma página web para apresentação de produto.',
    linkAoVivo: 'https://brennopestana.github.io/Product-preview/',
    linkRepo: 'https://github.com/BrennoPestana/Product-preview',
    cor: ['#fbbf24', '#f472b6'],
    destaque: false,
  },
]

export default projetos
