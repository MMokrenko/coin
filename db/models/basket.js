'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Shop, { foreignKey: 'shop_id' });
      this.belongsTo(models.Archive_auctions, {
        foreignKey: 'archive_auction_id',
      });
    }
  }
  Basket.init(
    {
      user_id: DataTypes.INTEGER,
      shop_id: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      archive_auction_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Basket',
    }
  );
  return Basket;
};
