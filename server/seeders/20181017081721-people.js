'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('people', [{
      firstName: 'Big',
      middleName: '',
      lastName: 'Boss',
      spiritAnimalId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Some',
      middleName: '',
      lastName: 'Leader',
      spiritAnimalId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Front',
      middleName: '',
      lastName: 'End',
      spiritAnimalId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Random',
      middleName: '',
      lastName: 'Oddjobs',
      spiritAnimalId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'New',
      middleName: '',
      lastName: 'Guy',
      spiritAnimalId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Other',
      middleName: '',
      lastName: 'Dept',
      spiritAnimalId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('people', null, {});
  }
};
