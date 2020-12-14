
const Sequelize = require('sequelize');
const postgres = require('../database/db_postgres');

const Endereco = postgres.define('users',{ 
    matricula:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    cidade:{
        type: Sequelize.STRING,
    },
    estado:{
        type: Sequelize.STRING,
    },
    rua:{
        type: Sequelize.STRING,
    },
    bairro:{
        type: Sequelize.STRING,
    }
});

module.exports = Endereco;