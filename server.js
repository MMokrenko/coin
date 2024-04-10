require('@babel/register');
require('dotenv').config();

const express = require('express');
const serverConfig = require('./config/serverConfig');

// routers import
const shopViewRouter = require('./src/routes/view/shop');
const registerViewRouter = require('./src/routes/view/register');
const registerApiRouter = require('./src/routes/api/register');
const logoutApiRouter = require('./src/routes/api/logout');
const loginViewRouter = require('./src/routes/view/login');
const loginApiRouter = require('./src/routes/api/login');
const profileViewRouter = require('./src/routes/view/profile');
const addCoinViewRouter = require('./src/routes/view/addCoin');
const coinApiRouter = require('./src/routes/api/coin');
const saleViewRouter = require('./src/routes/view/saleCoin');
const balanceCoinViewRouter = require('./src/routes/view/balance');
const balanceApiRouter = require('./src/routes/api/balance');
const shopApiRouter = require('./src/routes/api/shop');

const app = express();
serverConfig(app);

const PORT = process.env.PORT || 3000;

app.use('/', shopViewRouter);
app.use('/auth', registerViewRouter, loginViewRouter);
app.use('/api/auth', registerApiRouter, logoutApiRouter, loginApiRouter);
app.use('/profile', profileViewRouter, balanceCoinViewRouter);
app.use('/coin', addCoinViewRouter, saleViewRouter);
app.use('/api/coin', coinApiRouter);
app.use('/api/profile', balanceApiRouter);
app.use('/api/shop', shopApiRouter);

app.listen(PORT, () => console.log('Server up!'));
