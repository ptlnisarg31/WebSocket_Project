// const http = require('http');
// const express = require('express');
// const path=require('path');
// const { Server }=require('socket.io');



// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// //Server.io
// io.on('connection',socket=>{
//     console.log('a user connected',socket.id);
//     socket.on('disconnect',()=>{
//         console.log('user disconnected');
//     });
//     socket.on('user-msg',msg=>{
//         console.log('new message: '+msg);
//         io.emit('server-msg',msg);
//     });
// });

// app.use(express.static(path.resolve("./public")));

// app.get("/",(req,res)=>{
//     return res.sendFile("/public/index.html");
// });
// server.listen(3000,()=>console.log('listening on port 3000'));
