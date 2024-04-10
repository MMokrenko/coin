const registerViewRouter = require('express').Router();
const Register = require('../../views/component/page/Register');

registerViewRouter.route('/register').get((req, res) => {
  res.send(res.renderComponent(Register, {}));
});
module.exports = registerViewRouter;
