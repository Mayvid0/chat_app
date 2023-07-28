const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'login.html'))
})

io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle join room event
  socket.on("join room", ({ roomNumber, username }) => {
    

    // Add the user to the room
    socket.join(roomNumber);

    // Send the assigned port back to the client
    socket.emit("room assigned", { roomNumber, username });
  });

  

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
