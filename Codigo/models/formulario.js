const db = require('./db');

//criando a tabela cadastro
const dbFormulario = db.sequelize.define('cadastro', {
    nome: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    endereco: {
        type: db.Sequelize.STRING
    },
    peso:{
        type: db.Sequelize.STRING
    },
    altura:{
        type: db.Sequelize.STRING
    },
    lesoes:{
        type: db.Sequelize.STRING
    },
    objetivo:{
        type: db.Sequelize.STRING
    },
    condicionamento:{
        type: db.Sequelize.STRING
    },
    
    fumante:{
        type: db.Sequelize.STRING
    },
    medicamento:{
        type: db.Sequelize.STRING
    },
    
});

module.exports = dbFormulario;

//para criar uma nova tabela descomentar a linha abaixo e comentar a linha 41

//dbFormulario.sync({force: true});