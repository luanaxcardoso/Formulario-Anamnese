const Sequelize = require('sequelize');

// (database, usuario, password)
const sequelize = new Sequelize('academia','seu_usuario','sua_senha',{
    host: 'localhost',
    dialect: 'mysql'
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
