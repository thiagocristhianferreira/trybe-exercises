module.exports = (io) => io.on('connection', (socket) => {
  socket.on('sendMessage', ({ nome, texto }) => {
    io.emit('createMessage', `${nome}: ${texto}`);
  })
});