const shopApiRouter = require('express').Router();

const { User, Shop, Coin } = require('../../../db/models');

shopApiRouter.route('/buy').post(async (req, res) => {
  try {
    const { user } = res.locals;
    const coinId = req.body.id;
    let balance = Number(user.balance);
    const coinOne = await Coin.findOne({ where: { id: coinId } });
    const coin = JSON.parse(JSON.stringify(coinOne));
    const saleOne = await Shop.findOne({ where: { coin_id: coinId } });
    const sale = JSON.parse(JSON.stringify(saleOne));
    if (user.balance >= sale.price) {
      balance -= Number(sale.price);
      const oneUser = await User.findOne({ where: { id: sale.user_id } });
      const userSale = JSON.parse(JSON.stringify(oneUser));
      let balanceUser = Number(userSale.balance);
      balanceUser += Number(sale.price);
      await User.update(
        { balance: Number(balanceUser) },
        { where: { id: Number(sale.user_id) } }
      );
      await User.update(
        { balance: Number(balance) },
        { where: { id: Number(user.id) } }
      );
      await Coin.update(
        { user_id: user.id, sale: false },
        { where: { id: coinId } }
      );
      await Shop.destroy({ where: { coin_id: coinId } });
      return res.status(200).json({ message: 'OK' });
    }
    return res.status(200).json({ message: 'BALANCE' });
  } catch (error) {
    console.log(error);
  }
});
module.exports = shopApiRouter;
