const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const path = require('path');
const prisma = require('./prismaClient');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post('/registro', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.create({
            data: { email, password }
        });
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(400).send('Erro ao registrar usuário.');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (user && user.password === password) {
            const token = jwt.sign({ email }, jwtSecret, { expiresIn: '1h' });
            return res.json({ token });
        }

        res.status(401).send('Credenciais inválidas.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro no login.');
    }
});

const autenticarJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(403).send('Token não fornecido.');

    const token = authHeader.split(" ")[1];

    try {
        const dados = jwt.verify(token, jwtSecret);
        req.user = dados;
        next();
    } catch (error) {
        res.status(400).send('Token inválido.');
    }
};

app.get('/musicas', autenticarJWT, (req, res) => {
    res.json([
        { id: 1, titulo: 'Música A', artista: 'DJ A' },
        { id: 2, titulo: 'Música B', artista: 'DJ B' }
    ]);
});

// Só sobe o servidor quando NÃO estiver em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}

module.exports = app;
