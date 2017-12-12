const mongoose = require('mongoose');

const Chat = require('./chat');

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
  email: { type: String },
  admin: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

foodbankSchema.pre('save', function(next) {
  Chat.create({ foodbank: this._id, admin: this.admin });

  next();
});

module.exports = mongoose.model('Foodbank', foodbankSchema);
