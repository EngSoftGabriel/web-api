require("dotenv").config();

const db = require("./db.js");

const express = require("express");

const app = express();

app.get("/clientes", (req, res) => {
    res.json(db.selectCustomers());
})

app.get("/", (req, res, next) => {
    res.json({
        message: "Teste"
    })
})

app.listen(process.env.PORT, () => {
    console.log("O App está rodando!");
})