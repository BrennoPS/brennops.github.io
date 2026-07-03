# Portfólio — Brenno Pestana

Portfólio pessoal em **React + Vite** (JavaScript, CSS puro), visual dark tech.
Publicado gratuitamente no **GitHub Pages** em https://brennops.github.io/.

## Rodar localmente

```bash
npm install
npm run dev      # abre em http://localhost:5173
```

## Build

```bash
npm run build    # gera a pasta dist/
npm run preview  # pré-visualiza o build
```

## Editar conteúdo (sem mexer no código dos componentes)

| O quê | Onde |
|---|---|
| Projetos (adicionar/editar/ordenar) | `src/data/projetos.js` |
| Contatos (LinkedIn, GitHub, WhatsApp, e-mail) | `src/data/contatos.js` |
| Conhecimentos / skills | `src/data/conhecimentos.js` |
| Textos da bio | `src/components/Sobre.jsx` e `src/components/Hero.jsx` |
| Cores / tema | `src/styles/index.css` (bloco `:root`) |

### Adicionar um projeto novo

Abra `src/data/projetos.js` e copie um bloco:

```js
{
  titulo: 'Nome do Projeto',
  descricao: 'O que ele faz.',
  linkAoVivo: 'https://...',   // '' oculta o botão "Ver ao vivo"
  linkRepo: 'https://github.com/...',
  cor: ['#22d3ee', '#a855f7'], // gradiente da capa
  destaque: true,               // true = aparece primeiro
}
```

## Publicar

O deploy é **automático**: qualquer `git push` na branch `main` dispara o
workflow em `.github/workflows/deploy.yml`, que builda e publica no GitHub Pages.

```bash
git add .
git commit -m "descreva a mudança"
git push
```

O site atualiza em ~1 minuto.

> **Pré-requisito (uma vez só):** em *Settings → Pages* do repositório,
> definir **Source = GitHub Actions**.
