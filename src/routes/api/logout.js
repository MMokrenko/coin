const logoutApiRouter = require('express').Router();

logoutApiRouter.route('/logout').get((req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res
        .status(500)
        .json({ message: 'Error while destroying session' });
    }
    res.clearCookie('database_coin').redirect('/');
  });
});

module.exports = logoutApiRouter;
