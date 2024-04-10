const React = require('react');
const Layout = require('../features/Layout');
const Coin = require('../features/Coin');
const ShopButton = require('../features/ShopButton');

module.exports = function Shop({ auth, coins = [] }) {
  return (
    <Layout auth={auth}>
      {coins.map((coin) => (
        <div className="coin" id={coin.id}>
          <Coin coin={coin} key={coin.id} />
          <div>Цена: {coin.price}</div>
          <ShopButton auth={auth} coin={coin} />
        </div>
      ))}
    </Layout>
  );
};
