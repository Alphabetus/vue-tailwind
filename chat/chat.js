const corsOptions = {
  origin: "http://localhost:8080",
  credentials: true,
  allowEIO3: true
}
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {cors: corsOptions});
const connectedClients = new Set()
server.listen(3001);



io.on('connection', (socket) => {
  connectedClients.add(socket) // adds connected client to Set for later analysis
  console.log("User connected on socket: " + socket.id);
  socket.once('disconnect', function(){
    connectedClients.delete(socket) // removes client from Set for later analysis 
    console.log("User disconnected from socket: " + socket.id);
  })

  socket.on('new-message', (message) => {
    console.log("new message sent: " + message);
    io.emit('newMessage', message);
  })

});



