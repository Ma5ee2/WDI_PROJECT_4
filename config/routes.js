const router = require('express').Router();
const foodbanks  = require('../controllers/foodbanks');

router.route('/foodbanks')
  .get(foodbanks.index)
  .post(foodbanks.create);

router.route('/foodbanks/:id')
  .get(foodbanks.show)
  .put(foodbanks.update)
  .delete(foodbanks.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
