'use strict';
module.exports = (sequelize, DataTypes) => {
  var Email = sequelize.define('Email', {
    address: DataTypes.STRING,
    personId: DataTypes.INTEGER
  }, {
    tableName: 'emails',
    classMethods: {
      associate: function(models) {
        Email.belongsTo(models.Person, {
          foreignKey: 'personId',
          targetKey: 'id'
        })
      }
    }
  });
  return Email;
};