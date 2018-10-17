'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('spirit_animals', [{
      animal: 'shark',
      weight: 1700,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      animal: 'water bear',
      weight: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      animal: 'honey badger',
      weight: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      animal: 'dog',
      weight: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      animal: 'sloth',
      weight: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      animal: 'turtle',
      weight: 1500,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      animal: 'rabbit',
      weight: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      animal: 'racoon',
      weight: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      animal: 'wana',
      weight: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('people', null, {});
  }
};
