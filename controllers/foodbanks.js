const Foodbank = require('../models/foodbank');

function foodbanksIndex(req, res, next) {
  Foodbank
    .find()
    .exec()
    .then(foodbanks => res.json(foodbanks))
    .catch(next)
}

function foodbanksCreate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Foodbank
    .create(req.body)
    .then(foodbank => res.status(201).json(foodbank))
    .catch(next);
}

function foodbanksShow(req, res, next) {
  Foodbank
    .findById(req.params.id)
    .exec()
    .then((foodbank) => {
      res.json(foodbank);
    })
    .catch(next);
}

function foodbanksUpdate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Foodbank
    .findById(req.params.id)
    .exec()
    .then((foodbank) => {
      if(!foodbank) return res.notFound();
      foodbank = Object.assign(foodbank, req.body);
      return foodbank.save();
    })
    .then(foodbank => res.json(foodbank))
    .catch(next);
}

function foodbanksDelete(req, res, next) {
  Foodbank
    .findById(req.params.id)
    .exec()
    .then((foodbank) => {
      if(!foodbank) return res.notFound();
      return foodbank.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: foodbanksIndex,
  create: foodbanksCreate,
  show: foodbanksShow,
  update: foodbanksUpdate,
  delete: foodbanksDelete
};
