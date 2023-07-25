const http= require('http')
const express = require('express')
const socketIO= require('socket.io')

const app= new express()  //create express app
const server = http.createServer(app) //allow express app to handle http requests
const io = socketIO(server)  //provide it the functionality to deal with real time comm and make websockets

io.on('connection',(socket)=>{    //ek nya pathway bn gya (socket)

    console.log('A new user connected')

    socket.on('message',(data)=>{
        console.log('message received', data)

        io.emit('message:',data)
    })

    socket.on('disconnect', ()=>{
        console.log('A user disconnected')
    })
})

const port= process.env.PORT || 3000

server.listen(port,()=>{
    console.log(`Server listening at port ${port}`)
})
