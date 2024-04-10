const React = require('react');
const Header = require('./Header');
const Aside = require('./Aside');

function Layout({ children, auth }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <script defer src="/js/auth.js" />
        <script defer src="/js/coin.js" />
        <script defer src="/js/shop.js" />
        <script defer src="/js/balance.js" />
        <script defer src="/js/saleCoin.js" />
        <link rel="stylesheet" href="/css/Header.css" />
        <link rel="stylesheet" href="/css/styleCoin.css" />
        <link rel="stylesheet" href="/css/Aside.css" />
        <link rel="stylesheet" href="/css/Register.css" />
        <link rel="stylesheet" href="/css/Profile.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Монетка</title>
      </head>
      <body>
        <Header auth={auth} />
        <div className="content">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;
