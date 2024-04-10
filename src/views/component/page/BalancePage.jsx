const React = require('react');
const Layout = require('../features/Layout');
const Balance = require('../features/Balance');

module.exports = function SalePage({ auth }) {
  return (
    <Layout auth={auth}>
      <Balance />
    </Layout>
  );
};
