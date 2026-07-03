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
    cor: ['#38bdf8', '#2563eb'],
    destaque: true,
  },
  {
    titulo: 'Finanças',
    descricao: 'Aplicação para controle e organização de finanças pessoais.',
    linkAoVivo: '', // TODO: Brenno enviar link ao vivo
    linkRepo: '', // TODO: Brenno enviar link do repositório
    cor: ['#ff3b3b', '#ff8a3d'],
    destaque: true,
  },
  {
    titulo: 'Paint Web',
    descricao:
      'Permite que os usuários criem imagens e ilustrações diretamente em uma página web.',
    linkAoVivo: 'https://brennopestana.github.io/Drawing_Canvas/',
    linkRepo: 'https://github.com/BrennoPestana/Drawing_Canvas',
    cor: ['#60a5fa', '#1d4ed8'],
    destaque: false,
  },
  {
    titulo: 'Calculadora',
    descricao:
      'Efetua cálculos básicos na web com interface amigável e exibição de resultados.',
    linkAoVivo: 'https://brennopestana.github.io/Calculator/',
    linkRepo: 'https://github.com/BrennoPestana/Calculator',
    cor: ['#f87171', '#dc2626'],
    destaque: false,
  },
  {
    titulo: 'QR Code',
    descricao: 'Gerador de QR Code com uma transição de cores no plano de fundo.',
    linkAoVivo: 'https://brennopestana.github.io/QR-Code/',
    linkRepo: 'https://github.com/BrennoPestana/QR-Code',
    cor: ['#38bdf8', '#0ea5e9'],
    destaque: false,
  },
  {
    titulo: 'Product Preview',
    descricao: 'Uma página web para apresentação de produto.',
    linkAoVivo: 'https://brennopestana.github.io/Product-preview/',
    linkRepo: 'https://github.com/BrennoPestana/Product-preview',
    cor: ['#ff6b3d', '#e11d48'],
    destaque: false,
  },
]

export default projetos
