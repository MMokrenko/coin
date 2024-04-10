const React = require('react');

module.exports = function NavCoin({ coin }) {
  return (
    <div className="nav-coin" id={coin.id}>
      {coin.sale ? (
        <button type="button" id={coin.id} className="btn btn-warning no-sale">
          не продавать
        </button>
      ) : (
        <button type="button" id={coin.id} className="btn btn-warning sale">
          продать
        </button>
      )}
      <button
        type="button"
        data-id={coin.id}
        className="btn btn-danger btn-delete"
      >
        удалить
      </button>
    </div>
  );
};
