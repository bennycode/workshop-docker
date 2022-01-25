const WebSocket = require('ws');

const port = 5000;

const wss = new WebSocket.Server({port});

wss.on('listening', () => {
  console.log(`WebSocket server is running on port "${port}"...`);
});

wss.on('connection', socket => {
  socket.on('message', (message) => {
    const request = JSON.parse(message);

    console.log('Received message on server', request);

    if (request.type === 'hello') {
      wss.clients.forEach(client =>
        client.send(
          JSON.stringify({
            text: 'Welcome to the club!',
            type: 'hello',
          })
        )
      );
    }
  });
});
