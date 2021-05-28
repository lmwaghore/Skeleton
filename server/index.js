const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

// run when new client connects
io.on('connection', (socket) => {
  console.log('new socket connection made...');

  socket.emit('message', 'welcome');

  socket.on('disconnect', () => {
    io.emit('message', 'user has left');
  });

  socket.on('clickIncrement', (num) => {
    num++;
    io.emit('message', num);
  });
});

app.get('/', (req, res) => {
  res.send('nice');
});

app.post('/', (req, res) => {
  let { num } = req.body;
  num++;
  res.send(`${num}`);
});

server.listen(port, () => {
  console.log(`Web server running on: http://localhost:${port}`);
});
