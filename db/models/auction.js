'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auction extends Model {
    static associate(models) {
      this.belongsTo(models.Coin, { foreignKey: 'coin_id' });
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.hasOne(models.Archive_auctions, {
        foreignKey: 'archive_auction_id',
      });
    }
  }
  Auction.init(
    {
      start: DataTypes.STRING,
      step: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      coin_id: DataTypes.INTEGER,
      number_of_bets: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Auction',
    }
  );
  return Auction;
};
