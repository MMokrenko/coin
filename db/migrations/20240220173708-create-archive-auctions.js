'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Archive_auctions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      coin_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Coins',
          key: 'id',
        },
      },
      auction_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Auctions',
          key: 'id',
        },
      },
      number_of_bets: {
        type: Sequelize.INTEGER,
      },
      start_price: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Archive_auctions');
  },
};
