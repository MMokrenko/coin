const saleCoinViewRouter = require('express').Router();
const SalePage = require('../../views/component/page/SalePage');

const { Coin } = require('../../../db/models');

saleCoinViewRouter.route('/:id/sale').get(async (req, res) => {
  try {
    const { user } = res.locals;
    const { id } = req.params;
    const oneCoin = await Coin.findAll({ where: { id: Number(id) } });
    const coins = JSON.parse(JSON.stringify(oneCoin));
    res.send(
      res.renderComponent(SalePage, {
        auth: user
          ? { login: user.login, userId: user.id, balance: user.balance }
          : null,
        coins,
      })
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = saleCoinViewRouter;
