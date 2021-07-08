const express = require('express');
const cors = require('cors');

const app = express();

const http = require('http').createServer(app);

const PORT = 3001;

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3001',
    method: ['GET', 'POST']
  }
});

app.use(cors());

require('./sockets')(io);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/client.html');
});

http.listen(PORT, () => {
  console.log('App ovindo na porta ', PORT);
})
