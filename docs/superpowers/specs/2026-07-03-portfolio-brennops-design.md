# Portfólio Brenno Pestana — Design

> Data: 2026-07-03
> Status: aprovado (design), aguardando revisão do spec
> URL final: https://brennops.github.io/

## Objetivo

Recriar o portfólio pessoal de desenvolvedor (hoje em HTML/CSS/JS puro em
`https://brennops.github.io/BrennoCoffe-main/`) como um **novo site em React**,
com **redesign visual moderno (dark tech)**, mantendo a estrutura de seções.
Deve ser fácil de manter (dados de projetos/contatos em arquivos separados) e
publicado **de graça** no GitHub Pages, na **raiz** do usuário.

## Stack

- **Vite + React** (JavaScript, sem TypeScript — leve e simples).
- **CSS puro** (CSS Modules ou CSS global organizado por seção), sem Tailwind.
- SPA de página única com rolagem entre seções.
- Sem backend. Todo o conteúdo é estático.

## Hospedagem e publicação

- Repositório público novo chamado **`brennops.github.io`**.
- Servido na raiz → **`https://brennops.github.io/`** (URL limpa, sem sufixo).
- Vite configurado com `base: '/'`.
- **Deploy automático via GitHub Actions**: a cada `git push` na branch `main`,
  o workflow builda e publica no GitHub Pages.
- **Custo zero**: Pages + Actions são gratuitos para repositórios públicos.

## Estrutura de seções

SPA de página única, navegação por âncoras com rolagem suave:

1. **Header fixo** — logo/nome + links (Sobre, Projetos, Conhecimentos, Contato).
2. **Hero / Quem sou** — nome, título (Dev Full Stack .NET), bio curta, CTA
   (ex.: "Ver projetos" / "Contato").
3. **Projetos** — grid de cards (ver seção Dados).
4. **Conhecimentos** — badges/ícones de habilidades (C#, .NET, SQL, JS, React,
   Git, HTML, CSS, design responsivo, acessibilidade).
5. **Contato** — links de LinkedIn, GitHub, WhatsApp (e e-mail, se confirmado).
6. **Footer + botão "voltar ao topo"**.

## Modelo de dados (conteúdo editável sem tocar em componentes)

### `src/data/projetos.js`

Lista de objetos. Adicionar/editar projeto = editar esta lista.

```js
{
  titulo: string,
  descricao: string,
  imagem: string,       // caminho em public/ ou import
  linkAoVivo: string,   // URL do site publicado
  linkRepo: string,     // URL do repositório GitHub
  destaque: boolean     // true = projetos mais recentes, aparecem primeiro
}
```

**Ordem de exibição** (destaques primeiro):

1. **Ledo e Pestana** — ao vivo: `https://brennops.github.io/ledopestana/` ·
   repo: `https://github.com/BrennoPS/ledopestana` *(confirmar)*
2. **Finanças** — ao vivo: `TODO` · repo: `TODO` *(links pendentes do Brenno)*
3. **Paint Web** — desenho online *(migrar do site atual)*
4. **Calculadora** — cálculos web *(migrar do site atual)*
5. **QR Code** — gerador com animação de cores *(migrar do site atual)*
6. **Product Preview** — apresentação de produto *(migrar do site atual)*

> Os links "ao vivo" e "repo" dos 4 projetos antigos serão extraídos do repositório
> `BrennoCoffe-main` durante a implementação.

### `src/data/contatos.js`

```js
{
  linkedin: 'TODO',   // URL do perfil
  github: 'TODO',     // URL do perfil
  whatsapp: 'TODO',   // número com DDD (link wa.me)
  email: 'brennops97@gmail.com' // confirmar se deve aparecer
}
```

Links pendentes ficam marcados com `TODO` bem visível no código, para o Brenno
preencher depois. O site funciona mesmo com TODOs (botão fica desabilitado ou
oculto quando o link não existe).

## Visual (dark tech moderno)

- Fundo escuro (grafite/quase preto).
- Acentos em **gradiente ciano → roxo**.
- Tipografia forte nos títulos; corpo de texto legível e com bom contraste.
- Cards de projeto com borda sutil + glow no hover.
- Animações discretas de entrada ao rolar (fade/slide).
- **Mobile-first** e totalmente responsivo.

## Arquitetura de componentes

```
src/
  main.jsx
  App.jsx
  data/
    projetos.js
    contatos.js
  components/
    Header.jsx
    Hero.jsx
    Projetos.jsx      // renderiza a grid a partir de projetos.js
    CardProjeto.jsx   // um card
    Conhecimentos.jsx
    Contato.jsx       // renderiza a partir de contatos.js
    Footer.jsx
    BotaoTopo.jsx
  styles/             // CSS por seção ou CSS Modules
public/
  projetos/           // imagens/thumbs dos projetos
```

Cada componente tem uma responsabilidade única e recebe dados via props ou lê
do arquivo de dados. Isso permite entender/editar cada peça isoladamente.

## Fluxo de publicação

```bash
git add .
git commit -m "descreve a mudança"
git push
```

GitHub Actions builda e publica automaticamente (~1 min). Nenhum build manual.

## Fora de escopo (YAGNI)

- Backend, banco de dados, formulário de contato com envio de e-mail.
- CMS ou painel de administração.
- Domínio próprio (fica no `brennops.github.io` gratuito).
- Modo claro/escuro (o site é dark por padrão).
- Internacionalização (só PT-BR).

## Pendências do Brenno (não bloqueiam o design)

- [ ] Links do projeto **Finanças** (ao vivo + repo) — hoje `TODO` em `src/data/projetos.js`.
- [ ] Confirmar repo do **Ledo e Pestana** (`https://github.com/BrennoPS/ledopestana`).
- [x] Links de contato migrados do site atual: LinkedIn, GitHub (`BrennoPS`),
      WhatsApp (`5513991549766`). E-mail `brennops97@gmail.com` incluído.
- [x] Links dos 4 projetos antigos migrados (conta `BrennoPestana`).

## Status da implementação

Implementado em `c:\Projects\brennops.github.io`. Build local OK (`npm run build`).
Falta: criar o repo `brennops.github.io` no GitHub, ativar Pages (Source = GitHub
Actions) e dar push.
