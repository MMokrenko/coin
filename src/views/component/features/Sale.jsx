const React = require('react');

module.exports = function Sale({ coin }) {
  return (
    <form name="sale-coin-form" data-id={coin.id}>
      <div className="mb-3">
        <label htmlFor="exampleInput1" className="form-label">
          Цена:
        </label>
        <input
          type="text"
          className="form-control"
          name="price"
          id="exampleInput1"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" id={coin.id} className="btn btn-primary">
        продать
      </button>
    </form>
  );
};
