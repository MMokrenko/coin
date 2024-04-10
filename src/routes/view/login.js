const loginViewRouter = require('express').Router();
const Login = require('../../views/component/page/Login');

loginViewRouter.route('/login').get((req, res) => {
  res.send(res.renderComponent(Login, {}));
});

module.exports = loginViewRouter;
