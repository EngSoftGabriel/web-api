require("dotenv").config();

const db = require("./db.js");

const express = require("express");

const app = express();

app.use(express.json());

app.delete("/clientes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    res.json(db.deleteCustomer(id));
    res.sendStatus(204);
})

app.put("/clientes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const customer = req.body;
    db.updateCustomer(id, customer);
    response.sendStatus(200); 
})

app.post("/clientes", (req, res) => {
    const customer = req.body;
    db.insertCustomer(customer);
    res.sendStatus(201);    
})

app.get("/clientes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    res.json(db.selectCustomer(id));
})

app.get("/clientes", (req, res) => {
    res.json(db.selectCustomers());
})

app.get("/", (req, res, next) => {
    res.json({
        message: "Teste"
    })
})

app.listen(3000, () => {
    console.log("O App está rodando!");
})