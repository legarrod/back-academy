'use strict';

const { userSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.addColumn(USER_TABLE, 'role', userSchema.role);
  },

  down: async (queryInterface) => {
    return await queryInterface.removeColumn(USER_TABLE, 'role');
  }
};
