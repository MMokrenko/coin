const { User } = require('../db/models/index');

const resLocals = (req, res, next) => {
  if (req.session.userId) {
    res.locals.userId = req.session.userId;
  }
  next();
};

const getUser = async (req, res, next) => {
  if (req.session.userId) {
    const user = await User.findByPk(+req.session.userId);
    if (user.id) {
      res.locals.user = {
        login: user.login,
        id: user.id,
        balance: user.balance,
      };
    } else {
      res.status(500).redirect('/');
    }
  }
  next();
};

module.exports = { getUser, resLocals };
