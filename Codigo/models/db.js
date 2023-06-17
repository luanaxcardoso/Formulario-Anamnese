const Sequelize = require('sequelize');

// (database, usuario, password)
const sequelize = new Sequelize('academia','lua','123456',{
    host: 'localhost',
    dialect: 'mysql'
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}