const express = require('express');
const path = require('path');
// const WebSocketServer = require('websocket').server;



const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

/*
Websockets with express 

const PORT = process.env.PORT;


let connection = null;

const websocket = new WebSocketServer({
    httpServer: app,
})

websocket.on('request', (request) => {
    connection = request.accept(null, request.origin);
    connection.on('onopen', () => console.log('connection opened...'));
    connection.on('onclose', () => console.log('connection closed...'));
    connection.on('onmessage', (message) => {
        console.log('Recieved msg: ' + message);
    });
});

app.listen(PORT, ()=> {
    console.log(`listening at ${PORT}...`);
})
*/
module.exports = app