'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coin extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.hasMany(models.Shop, { foreignKey: 'coin_id' });
      this.hasMany(models.Auction, { foreignKey: 'coin_id' });
      this.hasMany(models.Archive_auctions, { foreignKey: 'coin_id' });
    }
  }

  Coin.init(
    {
      denomination: DataTypes.STRING,
      year: DataTypes.INTEGER,
      material: DataTypes.STRING,
      sale: DataTypes.BOOLEAN,
      imageI: DataTypes.STRING,
      imageII: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Coin',
    }
  );
  return Coin;
};
