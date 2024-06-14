// server/socket.js

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`User connected: ${socket.id}`);

        // Store username for this socket connection
        let username = '';

        // Handle join event to set the username
        socket.on('join', (name) => {
            username = name;
            console.log(`${username} has joined the chat.`);
            // Notify other users about the new user
            socket.broadcast.emit('server-msg', `${username} has joined the chat.`);
        });

        // Handle incoming user messages
        socket.on('user-msg', ({ username, message }) => {
            console.log(`Message from ${username}: ${message}`);

            // Basic validation of the message
            if (typeof message === 'string' && message.trim().length > 0) {
                // Broadcast the message to all connected clients, including the sender
                io.emit('server-msg', { username, message });
            } else {
                // Optionally, notify the sender of invalid input
                socket.emit('server-msg', 'Invalid message format.');
            }
        });

        // Handle user disconnection
        socket.on('disconnect', () => {
            if (username) {
                console.log(`${username} has disconnected.`);
                // Notify other users about the user leaving
                socket.broadcast.emit('server-msg', `${username} has left the chat.`);
            } else {
                console.log(`A user has disconnected: ${socket.id}`);
            }
        });
    });
};
