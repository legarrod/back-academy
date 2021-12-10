const { Sequelize } = require('sequelize');
const setupModels = require("./../db/models")

const sequelizeConection = new Sequelize(
  process.env.NAME_BD,
  process.env.USER_BD,
  process.env.PASWORD_BD,
  {
    host: process.env.HOST_NAME,
    dialect: 'mysql',
    logging: false,
    define: {
      timestamps: false,
    },
  }
);
setupModels(sequelizeConection)
module.exports = sequelizeConection;
