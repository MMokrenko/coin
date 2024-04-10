const balanceCoinViewRouter = require('express').Router();
const BalancePage = require('../../views/component/page/BalancePage');

balanceCoinViewRouter.route('/balance').get((req, res) => {
  const { user } = res.locals;
  res.send(
    res.renderComponent(BalancePage, {
      auth: user
        ? { login: user.login, userId: user.id, balance: user.balance }
        : null,
    })
  );
});

module.exports = balanceCoinViewRouter;
