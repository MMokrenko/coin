const loginApiRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../../db/models/index');

loginApiRouter.route('/login').post(async (req, res) => {
  console.log('====>');
  try {
    const { login, password } = req.body;
    if (!login || !password) {
      return res.status(400).json({ massages: 'Need all fields' });
    }
    const user = await User.findOne({ where: { login } });
    const isSamePassword = await bcrypt.compare(password, user.password);
    if (user && isSamePassword) {
      req.session.userId = user.id;

      return res.status(200).json({ text: 'OK' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.massage });
  }
});

module.exports = loginApiRouter;
