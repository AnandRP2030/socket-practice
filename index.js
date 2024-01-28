const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const { join } = require("node:path");
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log("message", msg);
    })
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
    socket.on('disconnect', () => {
        console.log("user disconnected");
    })

})


server.listen(PORT, () => {
  console.log("server running on http://localhost:%s", PORT);
});
