# iGameExpert - Site Institucional

Site institucional da iGameExpert, consultoria especializada no mercado brasileiro de jogos e apostas (iGaming).

## Tecnologias Utilizadas

- React 18 com TypeScript
- Vite (build tool)
- Wouter (navegação multi-página)
- Framer Motion (animações)
- Tailwind CSS (estilização)
- tRPC (comunicação cliente-servidor)
- Express (servidor backend)

## Requisitos

- Node.js versão 18 ou superior
- npm ou pnpm

## Instalação

1. Clone ou extraia o projeto
2. Abra o terminal na pasta raiz do projeto
3. Instale as dependências:

```bash
npm install
```

ou se preferir usar pnpm:

```bash
pnpm install
```

## Executar o Projeto Localmente

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

ou com pnpm:

```bash
pnpm dev
```

O site estará disponível em: http://localhost:5000

O servidor backend estará rodando em: http://localhost:5000/api

## Estrutura do Site

### Páginas:

- **Home (/)** - Página inicial com Hero, Sobre, Equipe e Formulário de Contato
- **Serviços (/services)** - Página exclusiva com todos os serviços em cards com efeito flip 3D
- **Eventos (/events)** - Página de eventos com filtros por data e busca
- **Vagas (/jobs)** - Página de oportunidades de carreira

### Funcionalidades:

- Navegação multi-página com Wouter
- Efeito de card flip 3D nos serviços (clique para ver detalhes)
- Filtros de eventos por data (Todos, Próximos, Passados)
- Busca de eventos por nome
- Formulário de contato funcional
- Botão "CONTATE-NOS" que leva ao formulário em todas as páginas
- Design responsivo para mobile e desktop
- Animações suaves com Framer Motion

## Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

## Estrutura de Pastas

```
client/src/
├── components/     # Componentes reutilizáveis
├── pages/          # Páginas do site
├── lib/            # Utilitários e configurações
└── App.tsx         # Componente principal com rotas

server/
├── index.ts        # Servidor Express
└── routes.ts       # Rotas da API tRPC
```

## Suporte

Para dúvidas ou suporte, entre em contato:
- Email: contato@igamexpert.com
- Telefone: +55 (11) 99999-9999
