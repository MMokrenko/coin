const React = require('react');
const Layout = require('../features/Layout');
const AddCoin = require('../features/AddCoin');

module.exports = function AddCoinPage({ auth }) {
  return (
    <Layout auth={auth}>
      <AddCoin />
    </Layout>
  );
};
