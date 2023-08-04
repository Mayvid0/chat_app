# TITLE

This is a real-time chat server built using WebSocket, Socket.io, and Express. The server allows users to join specific rooms and have real-time communication with other users in the same room.

## Prerequisites

Before running the chat server, make sure you have the following installed:

- Node.js and npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash

git clone https://github.com/Mayvid0/chat_app.git
cd chat_app

```


2. Install the required dependencies:

```bash

npm  install

```

3. Start the Server

```bash
npm run dev dev2
```
The server will start running at `http://localhost:3000`.

## Real-Time Communication

To enable real-time communication, the server uses WebSocket and Socket.io. Clients can connect to the server using Socket.io's client library, and they will be able to send and receive messages in real-time with other users in the same room.

Socket.io events used:

- **connection**: This event is triggered when a client connects to the server.
- **join_room**: This event is triggered when a client wants to join a specific room.
- **leave_room**: This event is triggered when a client wants to leave a specific room.
- **message**: This event is triggered when a client sends a message in a room.

## Server-Side Rendering

The chat server incorporates server-side rendering, allowing users to access a chat room interface directly from the server. This feature provides a seamless user experience and enables search engine indexing for better discoverability.

## Contributing

If you'd like to contribute to this project, feel free to create a pull request. Any contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify this code as per the license terms.

