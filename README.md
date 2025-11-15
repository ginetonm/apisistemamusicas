🎵 API Sistema de Músicas

Aplicação completa construída com Node.js, Express, Prisma, MongoDB e autenticação via JWT.
Inclui ainda um front-end simples, testes automatizados, Swagger, além de CI/CD com GitHub Actions e deploy automático no Render.

📌 Funcionalidades
🔐 Autenticação

Registro de usuários (POST /registro)

Login com JWT (POST /login)

🎼 Músicas

Listagem protegida por token JWT (GET /musicas)

🖥️ Front-end

Página simples em HTML/CSS/JS para testar login e listagem.

📄 Documentação

Swagger UI → /api-docs

🛠️ Tecnologias Utilizadas
Back-end

Node.js

Express

JWT

Prisma ORM

MongoDB

Dotenv

Front-end

HTML, CSS e JavaScript

Testes Automatizados

Jest

Supertest

JSDOM

CI/CD

GitHub Actions

Render (Deploy automático)

📁 Estrutura do Projeto
atividade-api-sistema-musicas-main/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── tests/
│   ├── auth.test.js
│   ├── musicas.test.js
│   └── frontend.test.js
│
├── prisma/
│   └── schema.prisma
│
├── server.js
├── prismaClient.js
├── jest.config.js
├── package.json
└── .env (não incluso)

🚀 Rodando localmente
1️⃣ Instalar dependências
npm install

2️⃣ Criar o arquivo .env

Crie o arquivo na raiz do projeto:

JWT_SECRET=sua_chave_jwt
DATABASE_URL=sua_url_mongodb
PORT=3000

3️⃣ Rodar o servidor
npm start


Acesse:

💻 API: http://localhost:3000

📄 Swagger: http://localhost:3000/api-docs

🧪 Testes
Rodar todos os testes (API + Front-end)
npm test


Inclui:

✔ Testes de autenticação
✔ Testes da rota protegida /musicas
✔ Testes do front-end com JSDOM

🔄 Integração Contínua (CI/CD)

O projeto possui um pipeline no GitHub Actions que:

Instala dependências

Gera o .env usando GitHub Secrets

Executa todos os testes

Se tudo passar → deploy automático no Render

📂 Arquivo do workflow

.github/workflows/ci.yml

Ele executa:

npm install

Criação automática do .env

npm test

Deploy usando render-cli

🔐 Secrets necessários no GitHub

No repositório → Settings → Secrets → Actions

Nome	Descrição
RENDER_API_KEY	API Key do Render
RENDER_SERVICE_ID	ID do serviço no Render
JWT_SECRET	Mesma chave usada localmente
DATABASE_URL	URL do MongoDB
🚀 Deploy Automático no Render

Quando você executa:

git add .
git commit -m "atualização"
git push origin main


O GitHub Actions:

🔧 Instala dependências

🧪 Executa testes

🟢 Se tudo OK → Deploy no Render

📌 Arquivo .env.example

Inclua no repositório:

JWT_SECRET=
DATABASE_URL=
PORT=3000

📜 Licença

Projeto desenvolvido para fins educativos.
Livre para uso acadêmico.

🙋🏻‍♂️ Autor

Gíneton Mota
UERN — Sistemas para Internet