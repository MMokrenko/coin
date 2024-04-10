const addCoinViewRouter = require('express').Router();
const AddCoinPage = require('../../views/component/page/AddCoinPage');

addCoinViewRouter.route('/add').get((req, res) => {
  const { user } = res.locals;
  res.send(
    res.renderComponent(AddCoinPage, {
      auth: user
        ? { login: user.login, userId: user.id, balance: user.balance }
        : null,
    })
  );
});

module.exports = addCoinViewRouter;
