'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    static associate(models) {
      this.belongsTo(models.Coin, { foreignKey: 'coin_id' });
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.hasMany(models.Basket, { foreignKey: 'shop_id' });
    }
  }
  Shop.init(
    {
      user_id: DataTypes.INTEGER,
      coin_id: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Shop',
    }
  );
  return Shop;
};
