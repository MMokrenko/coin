const React = require('react');

module.exports = function HederProfile({ auth }) {
  return (
    <div className="HeaderProfile">
      <a className="a" href="/coin/add">
        Добавить монету
      </a>
      <div>Баланс: {auth.balance ? auth.balance : 0}</div>{' '}
      <a className="a" href="/profile/balance">
        пополнить баланс
      </a>
    </div>
  );
};
