const express = require('express');

var app = express();
app.listen(3001);
app.get("/", (req, res) =>{
    res.send("olá");
})