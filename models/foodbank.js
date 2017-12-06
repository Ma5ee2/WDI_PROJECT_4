const mongoose = require('mongoose');

const foodbankSchema = mongoose.Schema({
  image: { type: String },
  name: { type: String },
  geolocation: { type: String },
  telephone_number: { type: String },
  opening_time: { type: String, }
  website: { type: String }
});

module.exports = mongoose.model('Foodbank', foodbankSchema);
