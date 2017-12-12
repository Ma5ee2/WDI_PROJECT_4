const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
})


const chatSchema = new mongoose.Schema({
  admin: { type: mongoose.Schema.ObjectId, ref: 'User' },
  foodbank: { type: mongoose.Schema.ObjectId, ref: 'Foodbank'},
  messages: [messageSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Chat', chatSchema);
