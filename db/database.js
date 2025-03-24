const sequelize = require("sequelize");

const connection = new sequelize("teste1", "root", "adm1234", {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;