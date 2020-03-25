const express = require("express");
// crypto é para criptografia mas usaremos para criar uma string aleatória
const cripto = require("crypto");
const connection = require("./database/index");

const routes = express.Router();

routes.get("/ongs", async (req, res) => {
  const ongs = await connection("ongs").select("*");

  return res.json(ongs);
});
routes.post("/ongs", async (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body;

  // id vai gerar quatro bytes de caracteres aleatórios
  const id = cripto.randomBytes(4).toString("HEX");

  await connection("ongs").insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  });

  return res.json({ id });
});
module.exports = routes;
`