const Message = require('../models/message');

function messagesIndex(req, res, next) {
  Message
    .find()
    .exec()
    .then(messages => res.status(200).json(messages))
    .catch(next);
}

function messagesNew(req, res, next) {
  Message
    .then(result => {
      return Message.create({
        chatId: req.body.chat,
        body: req.body.createdBy,
        user: req.body.user
      });
    })
    .then(message => {
      return res.status(201).json(message);
    })
    .catch(next);
}

function messagesDelete(req, res, next) {
  Message
    .findById({message: req.params.id})
    .exec()
    .then((message) => {
      if(!message) return res.notFound();
      return message.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: messagesIndex,
  new: messagesNew,
  delete: messagesDelete
};
