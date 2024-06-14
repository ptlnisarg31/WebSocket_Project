// server/server.js

const http = require('http');
const express = require('express');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Use the socket module
require('./socket')(io);

// Serve static files
app.use(express.static(path.resolve('./public')));

app.get('/', (req, res) => {
    return res.sendFile(path.resolve('./public/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

