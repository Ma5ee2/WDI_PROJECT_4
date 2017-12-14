const Chat = require('../models/chat');

const sockets = require('../lib/sockets');
const io = sockets.getConnection();

function chatsIndex(req, res, next) {
  Chat
    .find()
    .exec()
    .then(chats => res.status(200).json(chats))
    .catch(next);
}

function chatsCreate(res, req, next) {
  Chat
    .create(req.body)
    .then(chat => res.status(201).json(chat))
    .catch(next);
}

function chatsShow(req, res, next) {
  Chat
    .find({foodbank: req.params.id})
    .populate('admin messages.user')
    .exec()
    .then(chat => {
      if (!chat[0]) res.notFound();
      return res.status(200).json(chat[0]);
    })
    .catch(next);
}

function chatsDelete(req, res, next) {
  Chat
    .findById(req.params.id)
    .exec()
    .then((chat) => {
      if(!chat) return res.notFound();
      return chat.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

function createMessage(req, res, next) {
  req.body.user = req.currentUser

  Chat
    .findById(req.params.id)
    .exec()
    .then(chat => {
      if(!chat) return res.notFound();

      chat.messages.push(req.body);
      return chat.save();
    })
    .then(chat => Chat.populate(chat, { path: 'admin messages.user' }))
    .then(chat => {
      const message = chat.messages[chat.messages.length -1];

      io.emit('MESSAGE', message);
    })
    .catch(next);
}

module.exports = {
  index: chatsIndex,
  create: chatsCreate,
  show: chatsShow,
  delete: chatsDelete,
  createMessage: createMessage
};
