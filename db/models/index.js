const { User, UserSchema } = require('./user.model');
const { Home, homeSchema } = require('./home.model');

function setupModels(sequelize) {
  // Home.init(homeSchema, Home.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

  // User.associate(sequelize.models);
  // Home.associate(sequelize.models);
}

module.exports = setupModels;
