const shopViewRouter = require('express').Router();
const ShopPage = require('../../views/component/page/Shop');

const { Op } = require('sequelize');
const { Coin, Shop } = require('../../../db/models');

shopViewRouter.route('/').get(async (req, res) => {
  try {
    const { user } = res.locals;
    const allCoins = await Shop.findAll();
    const saleCoins = JSON.parse(JSON.stringify(allCoins));
    const coinsId = [];
    saleCoins.forEach((el) => {
      coinsId.push(el.coin_id);
    });
    if (coinsId.length > 0) {
      const dataCoins = await Coin.findAll({
        where: { id: { [Op.or]: coinsId } },
      });
      const coinsP = JSON.parse(JSON.stringify(dataCoins));
      const coins = [];
      coinsP.forEach((element) => {
        const price = saleCoins.filter((el) => el.coin_id === element.id);
        coins.push({ ...element, price: price[0].price });
      });

      res.send(
        res.renderComponent(ShopPage, {
          auth: user ? { login: user.login, userId: user.id } : null,
          coins,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = shopViewRouter;
