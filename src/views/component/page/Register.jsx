const React = require('react');
const Layout = require('../features/Layout');

module.exports = function Register() {
  return (
    <Layout>
      <div className="register">
        <form name="register-form" action="/api/auth/register">
          <div className="form">
            <label htmlFor="mail">
              Почта:
              <br />
              <input type="text" name="mail" placeholder="" />
              <br />
            </label>
          </div>
          <div className="form">
            <label htmlFor="inputLogin">
              Телефон:
              <br />
              <input type="text" name="telephone" placeholder="" />
              <br />
            </label>
          </div>
          <div className="form">
            <label htmlFor="inputLogin">
              Имя:
              <br />
              <input type="text" name="name" placeholder="" />
              <br />
            </label>
          </div>
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
            Регистрация
          </button>
        </form>
      </div>
    </Layout>
  );
};
