const User = require('../models/user');

function usersIndex(req, res, next) {
  User
    .find()
    .exec()
    .then(users => res.status(200).json(users))
    .catch((next) => res.status(500).json({ message: 'Something went wrong.' }));
}

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then(user => {
      if (!user) return res.status(404).json({ message: 'User not found.' });
      return res.status(200).json(user);
    })
    .catch((next) => res.status(500).json({ message: 'Something went wrong.' }));
}

// function usersUpdate(req, res, next) {
//   User
//     .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
//     .exec()
//     .then(user => {
//       if (!user) return res.status(404).json({ message: 'User not found.' });
//       return res.status(200).json({ user });
//     })
//     .catch((next) => res.status(500).json({ message: 'Something went wrong.' }));
// }
//
// function usersDelete(req, res, next) {
//   User
//     .findByIdAndRemove(req.params.id)
//     .exec()
//     .then(user => {
//       if (!user) return res.status(404).json({ message: 'User not found.' });
//       return res.sendStatus(204);
//     })
//     .catch((next) => res.status(500).json({ message: 'Something went wrong.' }));
// }

module.exports = {
  // index: usersIndex,
  show: usersShow
  // update: usersUpdate,
  // delete: usersDelete
};
