const mongoose = require('mongoose');

const foodbankSchema = mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  telephone: { type: String, required: true },
  website: { type: String }
});

module.exports = mongoose.model('Foodbank', foodbankSchema);
