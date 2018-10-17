'use strict';
module.exports = (sequelize, DataTypes) => {
  var Phone = sequelize.define('Phone', {
    number: DataTypes.STRING,
    personId: DataTypes.INTEGER
  }, {
    tableName: 'phones',
    classMethods: {
      associate: function(models) {
        Phone.belongsTo(models.Person, {
          foreignKey: 'personId',
          targetKey: 'id'
        })
      }
    }
  });
  return Phone;
};