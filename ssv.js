const express = require("express");
const connection = require("./db/database");
const bodyParser = require("body-parser");
const fetch = require("fetch");
const cors = require("cors");
const app = express();

app.use(cors())

const alunos = require("./db/alunos");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection.authenticate().then(() => {
    console.log("Conexão feita");
}).catch(error => {
    console.log(error);
});

app.get("/alunos", (req, res) => {
    alunos.findAll().then((aluno => {
        res.json(aluno);
    }))
});

app.post("/alunos/new", (req, res) => {
    var { nome, email } = req.body;
    alunos.create({
        nome: nome,
        email: email
    }).then(res.sendStatus(200));
});

app.listen(8080, () => {
    console.log("Server on");
});