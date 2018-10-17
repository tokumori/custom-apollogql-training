'use strict';
module.exports = (sequelize, DataTypes) => {
  var SpiritAnimal = sequelize.define('SpiritAnimal', {
    animal: DataTypes.STRING,
    weight: DataTypes.FLOAT
  }, {
    tableName: 'spirit_animals',
    classMethods: {
      associate: function(models) {
        SpiritAnimal.hasMany(models.Person, {
          foreignKey: 'spiritAnimalId'
        })
      }
    }
  });
  return SpiritAnimal;
};