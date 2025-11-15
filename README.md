# 🎵 API Sistema de Músicas  
API desenvolvida com **Node.js, Express, Prisma, MongoDB** e autenticação via **JWT**.  
Conta também com um **front-end simples** em HTML/CSS/JS e testes automatizados no **Back-end e Front-end**, utilizando **Jest + Supertest + JSDOM**.

Além disso, possui **pipeline de Integração Contínua (CI/CD) com GitHub Actions** e **deploy automático no Render**.

---

## 📌 Funcionalidades da API

- Registro de usuário (`/registro`)
- Login com JWT (`/login`)
- Listagem de músicas protegida por token (`/musicas`)
- Documentação com Swagger (`/api-docs`)
- Front-end simples (HTML/CSS/JS) em `/public`

---

## 🛠️ Tecnologias Utilizadas

### **Back-end**
- Node.js
- Express
- JWT
- Prisma ORM
- MongoDB
- Dotenv

### **Front-end**
- HTML
- CSS
- JS

### **Testes**
- Jest
- Supertest (para rotas)
- JSDOM (para HTML)

### **CI/CD**
- GitHub Actions
- Render (deploy automático)

---

## 📁 Estrutura do Projeto

atividade-api-sistema-musicas-main/
│
├── public/
│ ├── index.html
│ ├── styles.css
│ └── script.js
│
├── tests/
│ ├── auth.test.js
│ ├── musicas.test.js
│ └── frontend.test.js
│
├── prisma/
│ └── schema.prisma
│
├── server.js
├── prismaClient.js
├── package.json
├── jest.config.js
└── .env (não incluso no repositório)


---

## 🚀 Como rodar o projeto localmente

### 1. Instalar dependências
```bash
npm install

2. Criar o arquivo .env

Crie um arquivo .env na raiz:

JWT_SECRET=sua_chave_jwt
DATABASE_URL=sua_url_do_mongodb
PORT=3000

3. Rodar o servidor
npm start


O projeto vai rodar em:

📍 http://localhost:3000

📄 Swagger: http://localhost:3000/api-docs

🧪 Rodando os Testes
Testes de API + Front-End
npm test


Inclui:

✔ Testes de autenticação
✔ Testes protegidos de /musicas
✔ Testes do front-end com JSDOM

🔄 Integração Contínua (CI/CD)

O projeto possui um pipeline automatizado que:

Instala dependências

Gera .env usando secrets do GitHub

Roda todos os testes

Se tudo passar → realiza deploy automático no Render

⚙️ Configuração do GitHub Actions (CI/CD)

O workflow está em:

.github/workflows/ci.yml

Ele executa:

npm install

Cria .env usando variáveis secretas

Executa npm test

Faz deploy no Render usando render-cli

🔐 Secrets necessários no GitHub

No repositório, acesse:

Settings → Secrets → Actions → New Repository Secret

Crie estes secrets:

Nome	Descrição
RENDER_API_KEY	API Key do Render
RENDER_SERVICE_ID	ID do seu serviço no Render
JWT_SECRET	Mesma chave usada localmente
DATABASE_URL	URL do MongoDB usada no Render
🚀 Deploy Automático no Render

Quando você fizer:

git add .
git commit -m "atualização"
git push origin main


O GitHub Actions irá:

🔧 Instalar dependências
🧪 Rodar testes
🟢 Se os testes passarem → Deploy automático no Render

📌 Arquivo .env.example

Inclua no repositório:

JWT_SECRET=
DATABASE_URL=
PORT=3000

📜 Licença

Este projeto é livre para uso acadêmico.

🙋🏻‍♂️ Autor

Gíneton Mota — UERN / Sistemas para Internet