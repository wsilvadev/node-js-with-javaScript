const express = require("express");
const cors = require("cors");
const routes = require("./routes");
// const mongoose = require('mongoose');
// iniciando app
var app = express();

// //iniciando DB (banco de dados)
// mongoose.connect("mongoose://localhost:27017/nodeapi", { useNewUrlParser = true }
// );
// req.query: acessar query params (para filtros);
// req.params: acessar route params (para edicão, delete)
// req.body: acessar corpo da requisição(para criação, edição)

// Primeira rota

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3001);
