# GT Backend

Este é o backend da aplicação GT, desenvolvido utilizando Node.js, TypeScript, Express, e Prisma ORM. O projeto inclui funcionalidades de autenticação com JWT, gerenciamento de usuários e produtos, além de outras operações CRUD.

## Estrutura do Projeto

A estrutura do projeto segue boas práticas de organização para facilitar a manutenção e escalabilidade:

```
├── src
│   ├── config           # Configurações gerais do projeto
│   ├── controllers      # Controladores que lidam com as requisições HTTP
│   ├── middleware       # Middlewares para manipulação de requisições/respostas
│   ├── models           # Modelos TypeScript que representam as entidades do Prisma
│   ├── routes           # Definição das rotas da API
│   ├── services         # Lógica de negócio e integração com o Prisma
│   ├── utils            # Funções utilitárias e helpers
│   └── server.ts        # Ponto de entrada da aplicação
├── .env                 # Variáveis de ambiente
├── prisma
│   ├── schema.prisma    # Definição do schema do Prisma
│   └── migrations       # Diretório das migrações do banco de dados
├── tsconfig.json        # Configuração do TypeScript
├── package.json         # Dependências e scripts do projeto
└── README.md            # Documentação do projeto
```

## Dependências

O projeto utiliza as seguintes dependências:

- **Express**: Framework web para Node.js.
- **Prisma ORM**: Ferramenta de ORM para acessar o banco de dados PostgreSQL.
- **JWT**: Para autenticação de usuários.
- **bcrypt**: Para hashing de senhas.
- **Zod**: Biblioteca de validação de dados.
- **TypeScript**: Para tipagem estática e desenvolvimento em JavaScript moderno.

## Scripts Disponíveis

Os seguintes scripts estão disponíveis no `package.json`:

- `dev`: Executa o servidor em modo de desenvolvimento usando TSX.
- `build`: Compila o projeto TypeScript usando TSUP.
- `db:migrate`: Executa as migrações do Prisma.
- `db:studio`: Abre o Prisma Studio para gerenciar o banco de dados.

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```plaintext
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
JWT_SECRET=your_secret_key
```

Substitua `USER`, `PASSWORD`, `HOST`, `PORT` e `DATABASE` com as credenciais do seu banco de dados.

## Rodando o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/gafanhotoalexandre/gt-backend.git
   cd gt-backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute as migrações do banco de dados:

   ```bash
   npm run db:migrate
   ```

4. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

## Endpoints Disponíveis

### Criar Produto

- **Endpoint**: `POST /v1/product`
- **Headers**: `Content-type: application/json`
- **Payload**:
  ```json
  {
    "enabled": true,
    "name": "Produto 01",
    "slug": "produto-01",
    "stock": 10,
    "description": "Descrição do produto 01",
    "price": 119.9,
    "priceWithDiscount": 99.9,
    "categoryIds": [1, 15, 24, 68],
    "images": [
      {
        "type": "image/png",
        "content": "base64 da imagem 1"
      }
    ],
    "options": [
      {
        "title": "Cor",
        "shape": "square",
        "radius": "4px",
        "type": "text",
        "values": ["PP", "GG", "M"]
      }
    ]
  }
  ```

### Atualizar Produto

- **Endpoint**: `PUT /v1/product/:id`
- **Headers**: `Content-type: application/json`
- **Payload**:
  ```json
  {
    "enabled": true,
    "name": "Produto 01 atualizado",
    "slug": "produto-01-atualizado",
    "stock": 20,
    "description": "Descrição do produto 01 atualizado",
    "price": 49.9,
    "priceWithDiscount": 0,
    "categoryIds": [1, 15, 24, 68],
    "images": [
      {
        "id": 2,
        "deleted": true
      }
    ],
    "options": [
      {
        "id": 1,
        "deleted": true
      }
    ]
  }
  ```

## Contribuições

Sinta-se à vontade para contribuir com o projeto. Para começar:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature ou correção: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Minha nova feature'`.
4. Faça push para sua branch: `git push origin minha-feature`.
5. Envie um Pull Request.

## Licença

Este projeto está licenciado sob a Licença ISC.
