const router = require('express').Router();
const foodbanks = require('../controllers/foodbanks');
const Auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');


router.route('/foodbanks')
  .get(foodbanks.index)
  .post(foodbanks.create);

router.route('/foodbanks/:id')
  .get(foodbanks.show)
  .put(foodbanks.update)
  .delete(foodbanks.delete);

router.route('/register')
  .post(Auth.register);

router.route('/login')
  .post(Auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
