const React = require('react');

module.exports = function ShopButton({ auth, coin }) {
  let flag = false;
  if (auth?.userId === coin.user_id) {
    flag = true;
  }
  return (
    <div className="sh0p-nav">
      {flag ? (
        // <button type="button" id={coin.id} className="btn btn-warning no-sale">
        //   не продавать
        // </button>
        <h4>Это ваша монета </h4>
      ) : (
        <button
          type="button"
          id={coin.id}
          data-id={coin.id}
          className="btn btn-warning shop"
        >
          купить
        </button>
      )}
    </div>
  );
};
