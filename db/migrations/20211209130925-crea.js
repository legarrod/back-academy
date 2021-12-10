'use strict';

const { userSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.createTable(USER_TABLE, userSchema);
  },

  down: async (queryInterface) => {
     return await queryInterface.dropTable(USER_TABLE);
  }
};
