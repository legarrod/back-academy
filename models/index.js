const { Sequelize } = require('sequelize');
const sequelizeConection = require('../libs/sequelize');

const db = {};
db.Sequelize = Sequelize;
db.sequelizeConection = sequelizeConection;

module.exports = { db };
