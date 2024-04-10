const profileViewRouter = require('express').Router();
const Profile = require('../../views/component/page/Profile');

const { Coin } = require('../../../db/models');

profileViewRouter.route('/').get(async (req, res) => {
  try {
    const { user } = res.locals;
    const allCoin = await Coin.findAll({ where: { user_id: Number(user.id) } });
    const coins = JSON.parse(JSON.stringify(allCoin));
    res.send(
      res.renderComponent(Profile, {
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
module.exports = profileViewRouter;
