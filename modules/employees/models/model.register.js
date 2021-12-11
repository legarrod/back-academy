const { db } = require('../../../models');

db.employees = require('./employees.model')(db.sequelize, db.Sequelize);

module.exports = { db };
