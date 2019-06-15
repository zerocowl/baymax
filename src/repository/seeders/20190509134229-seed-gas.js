'use strict';
const { hashSync } = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('gases', [
      {
        type: 'oxigênio',
        milliliters: 2000
      },
      {
        type: 'carbono',
        milliliters: 1000
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('gases', null, {});
  }
};
