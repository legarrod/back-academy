const { db } = require('../../../models');

db.products = require('./products.model')(db.sequelize, db.Sequelize);

module.exports = { db };
