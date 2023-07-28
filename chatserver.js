const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const path = require("path");

const app = new express(); //create express app
const server = http.createServer(app); //allow express app to handle http requests
const io = socketIO(server); //provide it the functionality to deal with real time comm and make websockets

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'chat.html'));
});

io.on('connection',(socket)=>{    //ek nya pathway bn gya (socket)

    console.log('A new user connected')


    socket.on("chat message", (data) => {
        socket.join(data.roomNumber)
       
        console.log(`message received from ${data.userName}:`, `${data.message}`);
        
       
        io.to(data.roomNumber).emit("message", data);
      });
      
      socket.on("disconnect", () => {
        console.log("A user disconnected");
      });

})

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
