const { User, userSchema } = require('./user.model');
const { Home, homeSchema } = require('./home.model');

function setupModels(sequelize) {
  Home.init(homeSchema, Home.config(sequelize));
  User.init(userSchema, User.config(sequelize));

  User.associate(sequelize.models);
  Home.associate(sequelize.models);
}

module.exports = setupModels;
