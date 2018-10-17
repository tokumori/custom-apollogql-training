'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('phones', [{
      number: '808.200.7861',
      personId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      number: '808.200.7861',
      personId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      number: '808.200.7861',
      personId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      number: '808.200.7861',
      personId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      number: '808.200.7861',
      personId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      number: '808.200.7861',
      personId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('phones', null, {});
  }
};