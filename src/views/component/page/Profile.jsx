const React = require('react');
const Layout = require('../features/Layout');
const HeaderProfile = require('../features/HeaderProfile');
const Coin = require('../features/Coin');
const NavCoin = require('../features/NavCoin');

module.exports = function Profile({ auth, coins, sale }) {
  return (
    <Layout auth={auth}>
      <div className="profile">
        <HeaderProfile auth={auth} />
        <div className="coins">
          {coins.map((coin) => (
            <div className="coin" id={coin.id}>
              <Coin coin={coin} key={coin.id} />
              <NavCoin coin={coin} sale={sale} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
