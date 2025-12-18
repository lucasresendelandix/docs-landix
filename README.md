# Website

Este site foi construído usando [Docusaurus](https://docusaurus.io/), um gerador moderno de sites estáticos.

## Instalação

```bash
yarn
```

## Desenvolvimento Local

```bash
yarn start
```

Este comando inicia um servidor de desenvolvimento local e abre uma janela do navegador. A maioria das alterações é refletida ao vivo sem precisar reiniciar o servidor.

## Build

```bash
yarn build
```

Este comando gera conteúdo estático no diretório `build` e pode ser servido usando qualquer serviço de hospedagem de conteúdo estático.

## Deployment

Usando SSH:

```bash
USE_SSH=true yarn deploy
```

Não usando SSH:

```bash
GIT_USER=<Seu nome de usuário do GitHub> yarn deploy
```

Se você estiver usando GitHub Pages para hospedagem, este comando é uma maneira conveniente de construir o site e enviar para a branch `gh-pages`.

## Como adicionar arquivos .md na pasta docs

Para adicionar novos documentos ao site, coloque seus arquivos `.md` na pasta `docs/`. Cada arquivo `.md` representa uma página de documentação.

- Crie uma nova pasta dentro de `docs/` se necessário (por exemplo, `docs/nova-secao/`).
- Adicione o arquivo `.md` dentro da pasta apropriada.
- Para organizar a navegação, edite o arquivo `sidebars.ts` para incluir o novo documento na barra lateral. Por exemplo:

```typescript
// sidebars.ts
export default {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Nova Seção',
      items: ['nova-secao/meu-documento'],
    },
  ],
};
```

Se você usar a configuração automática de sidebars, o Docusaurus pode gerar a navegação automaticamente com base na estrutura de pastas.

## Estrutura de um arquivo .md

Os arquivos `.md` no Docusaurus seguem o formato Markdown padrão, mas podem incluir metadados no topo usando frontmatter (YAML). Aqui está um exemplo básico:

```markdown
---
sidebar_position: 1
---

# Título da Página

Este é o conteúdo da página em Markdown.

## Subtítulo

- Lista de itens
- Outro item

[Link para outra página](outra-pagina.md)
```

### Metadados importantes no frontmatter:
- `sidebar_position`: Define a posição na barra lateral (número menor aparece primeiro).
- `title`: Título personalizado da página (opcional, se não definido, usa o primeiro cabeçalho #).
- `description`: Descrição para SEO.

Use Markdown padrão para formatação: cabeçalhos (# ##), listas (-), links [texto](url), imagens ![alt](url), etc.
