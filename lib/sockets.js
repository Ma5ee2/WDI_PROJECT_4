const socketIo = require('socket.io');

let connection = null;

function connect(server) {
  const io = socketIo(server);
  const nsp = io.of('/socket');

  nsp.on('connection', socket => {
    console.log(Object.keys(nsp.sockets));
    console.log(`${socket.id} connected`);
    socket.on('SEND_MESSAGE', data => socket.broadcast.emit('MESSAGE', data));
  });


  connection = nsp;
  return connection;
}

function getConnection() {
  return connection;
}

module.exports = { connect, getConnection };



// io.on('connection', (socket) => {
//   socket.on('subscribeToTimer', (interval) => {
//     console.log('socket is subscribing to timer with interval ', interval);
//     setInterval(() => {
//       socket.emit('timer', new Date());
//     }, interval);
//   });
//
//   socket.on('SEND_MESSAGE', function(data){
//     io.emit('RECEIVE_MESSAGE', data);
//   })
// });
