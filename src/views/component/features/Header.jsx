const React = require('react');

module.exports = function Header({ auth }) {
  return (
    <div className="Header">
      <img src="/img/eagle-coin.png" alt="Logo" width={100} />
      <h2 className="title">Монетка</h2>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="a" href="/">
            Магазин
          </a>
          {/* <a className="a" href="/auction">
            Аукцион
          </a> */}
          {auth ? (
            <>
              <a className="a" href="/api/auth/logout">
                Выход
              </a>
              <a className="a" href="/profile">
                Личный кабинет
              </a>
            </>
          ) : (
            <>
              <a className="a" href="/auth/login">
                Вход
              </a>
              <a className="a" href="/auth/register">
                Регистрация
              </a>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};
