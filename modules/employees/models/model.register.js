const { db } = require('../../../models');

db.employees = require('./employees.model')(
  db.sequelizeConection,
  db.Sequelize
);

module.exports = { db };
