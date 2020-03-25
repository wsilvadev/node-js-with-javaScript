const connection = require("../database/index");
// crypto é para criptografia mas usaremos para criar uma string aleatória
const cripto = require("crypto");

module.exports = {
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  },
  async create(req, res) {
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
  }
};
