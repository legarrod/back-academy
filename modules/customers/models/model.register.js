const { db } = require('../../../models');

db.customers = require('./customers.model')(
  db.sequelizeConection,
  db.Sequelize
);

module.exports = { db };
