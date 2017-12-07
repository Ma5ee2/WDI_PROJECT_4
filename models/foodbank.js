const mongoose = require('mongoose');

const foodbankSchema = mongoose.Schema({
  image: { type: String },
  name: { type: String },
  address: { type: String },
  location: {
    lat: Number,
    lng: Number
  },
  telephone_number: { type: String },
  opening_time: { type: String },
  website: { type: String },
  email: { type: String }
});


module.exports = mongoose.model('Foodbank', foodbankSchema);
