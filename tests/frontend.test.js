/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

describe("Testes do Front-end (HTML + JS)", () => {

  let html;

  beforeAll(() => {
    const filePath = path.join(__dirname, "../public/index.html");
    html = fs.readFileSync(filePath, "utf8");
    document.documentElement.innerHTML = html.toString();
  });

  test("deve conter o título principal da página", () => {
    const title = document.querySelector("h1") || document.querySelector("h2");
    expect(title).not.toBeNull();
    expect(title.textContent.length).toBeGreaterThan(2);
  });

  test("deve conter um formulário de login ou registro", () => {
    const form = document.querySelector("form");
    expect(form).not.toBeNull();
  });

  test("botão principal deve existir", () => {
    const button = document.querySelector("button");
    expect(button).not.toBeNull();
  });
});
