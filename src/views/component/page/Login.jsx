const React = require('react');
const Layout = require('../features/Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div className="register">
        <form name="login-form" action="/api/auth/login">
          <div className="form">
            <label htmlFor="inputLogin">
              Логин:
              <br />
              <input type="text" name="login" placeholder="" />
              <br />
            </label>
          </div>
          <div className="form">
            <label htmlFor="inputPassword">
              Пароль:
              <br />
              <input type="password" name="password" placeholder="" />
              <br />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Вход
          </button>
        </form>
      </div>
    </Layout>
  );
};
