const registerApiRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../../db/models/index');

registerApiRouter.route('/register').post(async (req, res) => {
  const { mail, telephone, name, login, password } = req.body;
  try {
    if (!mail || !telephone || !login || !name || !password) {
      return res.status(401).json({ message: "'Need all fields" });
    }
    const user = await User.findOne({ where: { login } });
    if (user) {
      return res
        .status(409)
        .json({ message: 'User with that login already exist' });
    }
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        mail,
        telephone,
        name,
        login,
        password: hashedPassword,
      });
      req.session.userId = newUser.id;
      return res.status(200).json({ text: 'OK' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = registerApiRouter;
