/**
 * @jest-environment node
 */

const request = require("supertest");
const jwt = require("jsonwebtoken");
const app = require("../server");

describe("Teste da rota GET /musicas", () => {

    it("deve retornar 403 se não houver token", async () => {
        const res = await request(app).get("/musicas");
        expect(res.statusCode).toBe(403);
    });

    it("deve retornar lista de músicas quando o token é válido", async () => {

        const token = jwt.sign({ email: "teste@teste.com" }, process.env.JWT_SECRET || "teste");

        const res = await request(app)
            .get("/musicas")
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

});
