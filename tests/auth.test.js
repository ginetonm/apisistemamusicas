/**
 * @jest-environment node
 */

const request = require("supertest");
const app = require("../server");

describe("Teste da rota POST /login", () => {
    it("deve retornar 401 para credenciais inválidas", async () => {
        const res = await request(app)
            .post("/login")
            .send({ email: "teste@teste.com", password: "errado" });

        expect(res.statusCode).toBe(401);
        expect(res.text).toBe("Credenciais inválidas.");
    });
});
