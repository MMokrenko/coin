const React = require('react');

module.exports = function Coin({ coin }) {
  return (
    <div className="col">
      <div className="card h-100">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {coin.imageI && (
                <img
                  src={`uploads/${coin.imageI}`}
                  className="card-img-top"
                  alt={coin.denomination}
                />
              )}
            </div>

            <div className="carousel-item">
              {coin.imageII && (
                <img
                  src={`uploads/${coin.imageII}`}
                  className="card-img-top"
                  alt={coin.denomination}
                />
              )}
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              claclassNamess="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="card-body">
          <h5 className="card-title">{coin.denomination}</h5>
          <p className="card-text">
            Год: {coin.year}
            <br />
            Материал: {coin.material}
          </p>
        </div>
      </div>
    </div>
  );
};
