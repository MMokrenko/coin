'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Coin, { foreignKey: 'user_id' });
      this.hasMany(models.Shop, { foreignKey: 'user_id' });
      this.hasMany(models.Auction, { foreignKey: 'user_id' });
      this.hasMany(models.Archive_auctions, { foreignKey: 'user_id' });
      this.hasMany(models.Basket, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      login: DataTypes.TEXT,
      password: DataTypes.STRING,
      balance: DataTypes.INTEGER,
      mail: DataTypes.STRING,
      telephone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
