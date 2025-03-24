const sequelize = require("sequelize");
const connection = require("./database");

const alunos = connection.define("alunos", {
    nome: {
        type: sequelize.STRING
    },
    email: {
        type: sequelize.STRING
    }
});

alunos.sync({ force: false }).then(() => { });

module.exports = alunos;