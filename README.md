🎵 Sistema de Gerenciamento de Músicas — API + Front-end

Projeto da disciplina de Desenvolvimento de Sistemas Corporativos (UERN).

Este sistema permite autenticação via JWT, gerenciamento de músicas, integração com API, além de possuir testes automatizados de back-end (Jest + Supertest) e front-end (Jest + JSDOM).

🚀 Tecnologias Utilizadas

Node.js

Express.js

JWT (Json Web Token)

Jest & Supertest

JSDOM (testes de front-end)

Prisma (se estiver usando banco)

HTML + JavaScript (front simples)

📁 Estrutura do Projeto
/
├── public/             → arquivos HTML, CSS e JS do front-end
├── src/                → código da API
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   └── server.js
├── tests/              → testes do backend e frontend
├── .env.example        → variáveis de ambiente sem dados sensíveis
├── package.json
└── README.md

🔧 Como rodar o projeto localmente
1. Instale as dependências
npm install

2. Configure o ambiente

Crie seu .env baseado no arquivo .env.example:

JWT_SECRET=sua_chave
PORT=3000

3. Execute o servidor
npm start

4. Suba a versão de desenvolvimento:
npm run dev

🧪 Rodando os testes

Testes de backend + frontend:

npm test

🧪 Testes incluídos
✔ Backend (Jest + Supertest)

Autenticação (login)

Listagem de músicas

CRUD de músicas (dependendo da sua versão)

✔ Frontend (JSDOM)

Estrutura do HTML

Elementos essenciais (título, formulários, botões)

🌐 Deploy

O deploy pode ser feito facilmente no Render conectando este repositório.
Basta configurar:

Variáveis de ambiente

Build Command: npm install

Start Command: npm start

Se precisar, posso gerar o render.yaml também.

👨‍💻 Autor

Gíneton Mota
Projeto acadêmico da UERN.

📄 Licença

Este projeto é livre para estudo.
