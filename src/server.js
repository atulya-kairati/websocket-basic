const http = require('http');
const app = require('./app');
const WebSocketServer = require('websocket').server;

const PORT = process.env.PORT;
const server = http.createServer(app);
let connection = null;

const websocket = new WebSocketServer({
    httpServer: server,
})

websocket.on('request', (request) => {
    connection = request.accept(null, request.origin);
    connection.on('open', () => console.log('connection opened...'));
    connection.on('close', () => console.log('connection closed...'));
    connection.on('message', (message) => {
        console.log('Recieved msg: ' + message.utf8Data);

        connection.send(message.utf8Data);
    });
    msgClientEvery5Seconds();
});


function msgClientEvery5Seconds() {

    connection.send("New msg for you eehehehehee");

    setTimeout(msgClientEvery5Seconds, 5000);

}

server.listen(PORT, () => {
    console.log(`listening at ${PORT}...`);
});