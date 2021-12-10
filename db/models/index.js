const {User, userSchema } = require('./user.model');
const { Home, homeSchema } = require('./home.model');


function setupModels(sequelizeConection) {
    Home.init(homeSchema, Home.config(sequelizeConection))
    User.init(userSchema, User.config(sequelizeConection))

    User.associate(sequelizeConection.models);
    Home.associate(sequelizeConection.models);
}

module.exports = setupModels;