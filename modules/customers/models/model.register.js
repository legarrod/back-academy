const { db } = require('../../../models');

db.customers = require('./customers.model')(db.sequelize, db.Sequelize);

module.exports = { db };
