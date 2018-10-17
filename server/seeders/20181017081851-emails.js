'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('emails', [{
      address: 'big.boss@ourteam.com',
      personId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      address: 'some.leader@ourteam.com',
      personId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      address: 'front.end@ourteam.com',
      personId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      address: 'random.oddjobs@ourteam.com',
      personId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      address: 'new.guy@ourteam.com',
      personId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      address: 'other.dept@ourteam.com',
      personId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('emails', null, {});
  }
};
