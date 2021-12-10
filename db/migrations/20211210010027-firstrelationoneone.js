'use strict';

const { homeSchema, HOME_TABLE } = require('./../models/home.model');

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.createTable(HOME_TABLE, homeSchema);
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable(HOME_TABLE);
  }
};
