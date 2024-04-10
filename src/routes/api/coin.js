const coinApiRouter = require('express').Router();

const multer = require('multer');

const { Coin, Shop } = require('../../../db/models');

const upload = multer({ dest: 'public/uploads' });

coinApiRouter.route('/add').post(upload.any(), async (req, res) => {
  try {
    const { user } = res.locals;
    const imgNameI = req.files[0]?.filename;
    const imgNameII = req.files[1]?.filename;
    const { denomination, year, material } = req.body;
    await Coin.create({
      denomination,
      year,
      material,
      imageI: imgNameI,
      imageII: imgNameII,
      user_id: user.id,
    });
    res.sendStatus(203);
  } catch (error) {
    console.log('Error Coin: ', error);
  }
});

coinApiRouter.route('/:id/sale').put(async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = res.locals;
    const { price } = req.body;
    const oneCoin = await Coin.findOne({ where: { id } });
    const coin = JSON.parse(JSON.stringify(oneCoin));

    if (user.id === coin.user_id) {
      await Coin.update({ sale: true }, { where: { id: Number(id) } });
      const addShop = await Shop.create({
        user_id: user.id,
        coin_id: Number(id),
        price,
      });
      if (addShop) {
        res.sendStatus(203);
      }
    }
  } catch (error) {
    console.log(error);
  }
});

coinApiRouter.route('/sale').put(async (req, res) => {
  try {
    const { id } = req.body;
    const { user } = res.locals;

    const oneSale = await Shop.findOne({
      where: { coin_id: Number(id) },
    });
    const oneCoin = await Coin.findOne({
      where: { id: Number(id) },
    });
    const sale = JSON.parse(JSON.stringify(oneSale));
    const coin = JSON.parse(JSON.stringify(oneCoin));
    if (sale.user_id === user.id && coin.sale) {
      await Coin.update(
        { sale: false },
        {
          where: { id: Number(id) },
        }
      );
      await Shop.destroy({ where: { coin_id: Number(id) } });
      return res.sendStatus(200);
    }
    return res.sendStatus(420);
  } catch (error) {
    res.json({ message: error.message });
  }
});

coinApiRouter.route('/delete').delete(async (req, res) => {
  try {
    const { id } = req.body;
    await Coin.destroy({ where: { id } });
    res.json({ message: 'OK' });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = coinApiRouter;
