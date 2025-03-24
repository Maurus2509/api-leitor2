const express = require("express");
const mongoose = require("./db/database"); // Conexão com MongoDB
const bodyParser = require("body-parser");
const cors = require("cors");
const Aluno = require("./db/alunos"); // Modelo de Aluno

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connection.once("open", () => {
    console.log("Conectado ao MongoDB Atlas!");
}).on("error", (error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
});

// Rota para listar todos os alunos
app.get("/alunos", async (req, res) => {
    try {
        const alunos = await Aluno.find(); // Busca todos os alunos
        res.json(alunos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar alunos" });
    }
});

// Rota para adicionar um novo aluno
app.post("/alunos/new", async (req, res) => {
    try {
        const { nome, email } = req.body;
        const novoAluno = new Aluno({ nome, email });
        await novoAluno.save(); // Salva no banco
        res.status(201).json({ message: "Aluno cadastrado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar aluno" });
    }
});

// Inicia o servidor
app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});
