const suma = require("./suma");
const gueno = require("./gueno");

test("sumar 1 + 2 es igual a 3", () => {
  expect(suma(1, 2)).toBe(3);
});

test("Validando user incorrecto", async () => {
  const getData = await gueno("1111111");
  expect(getData).toBe("El ID no existe.");
});

test("Validando user correcto", async () => {
  const getData = await gueno("11111111");
  expect(getData).toBe("Pedro F.");
});
