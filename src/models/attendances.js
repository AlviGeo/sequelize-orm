'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendances extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Attendances.init({
    checkin: DataTypes.DATE,
    checkout: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Attendances',
  });
  return Attendances;
};