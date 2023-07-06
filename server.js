const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
  console.log('Novo usuário conectado');

  socket.on('chat message', message => {
    console.log('Mensagem recebida: ', message);
    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

server.listen(3000, () => {
  console.log('Servidor de chat iniciado na porta 3000');
});
