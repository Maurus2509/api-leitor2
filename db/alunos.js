const mongoose = require("./database");

const alunoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const Aluno = mongoose.model("Aluno", alunoSchema);

module.exports = Aluno;
