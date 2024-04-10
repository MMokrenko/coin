const React = require('react');

module.exports = function Coin({ coin }) {
  return (
    <>
      <div className="imag-coin">
        <div className="img-avers">
          {coin.imageI && (
            <img
              src={`uploads/${coin.imageI}`}
              className="img"
              alt={coin.denomination}
            />
          )}
        </div>

        <div className="img-revers">
          {coin.imageII && (
            <img
              src={`uploads/${coin.imageII}`}
              className="img"
              alt={coin.denomination}
            />
          )}
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{coin.denomination}</h5>
        <p className="card-text">
          Год: {coin.year}
          <br />
          Материал: {coin.material}
        </p>
      </div>
    </>
  );
};
