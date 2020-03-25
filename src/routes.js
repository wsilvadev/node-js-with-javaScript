const express = require('express');

const routes = express.Router();

routes.post("/users", (req, res) => {
    res.json(req.body);
})
module.exports = routes;
