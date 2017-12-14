const router = require('express').Router();
const users = require('../controllers/users');
const foodbanks = require('../controllers/foodbanks');
const chats = require('../controllers/chats');
const Auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

// router.route('/users')
//   .get(users.index)
//   .post(users.create);
//
router.route('/users/:id')
//   .all(secureRoute)
  .get(users.show);
//   .put(users.update)
//   .delete(users.delete);

router.route('/foodbanks')
  .get(foodbanks.index)
  .post(foodbanks.create);

router.route('/foodbanks/:id')
  // .all(secureRoute)
  .get(foodbanks.show)
  .put(foodbanks.update)
  .delete(foodbanks.delete);

router.route('/chats')
  .get(chats.index);

router.route('/chats/:id')
  .get(chats.show);

router.route('/chats/:id/messages')
  .post(secureRoute, chats.createMessage)

router.route('/register')
  .post(Auth.register);

router.route('/login')
  .post(Auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
