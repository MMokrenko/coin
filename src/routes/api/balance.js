const balanceApiRouter = require('express').Router();

const { User } = require('../../../db/models');

balanceApiRouter.route('/balance').post(async (req, res) => {
  try {
    const { user } = res.locals;
    let { balance } = req.body;
    balance = Number(balance);
    balance += Number(user.balance);
    await User.update(
      { balance: Number(balance) },
      { where: { id: Number(user.id) } }
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});
module.exports = balanceApiRouter;
