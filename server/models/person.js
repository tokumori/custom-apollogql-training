'use strict';
module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define('Person', {
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    tableName: 'people',
    classMethods: {
      associate: function(models) {
        Person.belongsTo(models.SpiritAnimal, {
          foreignKey: 'spiritAnimalId'
        })
        Person.hasOne(models.Phone, {
          foreignKey: 'personId'
        })
        Person.hasOne(models.Email, {
          foreignKey: 'personId'
        })
      }
    }
  });
  return Person;
};