const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:elminster585@localhost/stocks-project-api', { logging: false }); // Example for sqlite
module.exports = { sequelize };