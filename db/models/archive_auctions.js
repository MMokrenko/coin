'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Archive_auctions extends Model {
    static associate(models) {
      this.belongsTo(models.Coin, { foreignKey: 'coin_id' });
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.hasMany(models.Basket, { foreignKey: 'archive_auction_id' });
      this.belongsTo(models.Auction, {
        foreignKey: 'archive_auction_id',
      });
    }
  }
  Archive_auctions.init(
    {
      user_id: DataTypes.INTEGER,
      coin_id: DataTypes.INTEGER,
      auction_id: DataTypes.INTEGER,
      number_of_bets: DataTypes.INTEGER,
      start_price: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Archive_auctions',
    }
  );
  return Archive_auctions;
};
