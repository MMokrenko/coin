const React = require('react');
const Layout = require('../features/Layout');
const Sale = require('../features/Sale');
const Coin = require('../features/Coin');

module.exports = function SalePage({ auth, coins }) {
  return (
    <Layout auth={auth}>
      <div className="coins">
        {coins.map((coin) => (
          <div className="coin" id={coin.id}>
            <Coin coin={coin} key={coin.id} />
            <Sale coin={coin} />
          </div>
        ))}
      </div>
    </Layout>
  );
};
