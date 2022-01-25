const WebSocket = require('ws');

const port = 5000;

const wss = new WebSocket.Server({port});

wss.on('listening', () => {
  console.log(`WebSocket server is running on port "${port}"...`);
});

wss.on('connection', socket => {
  socket.on('message', (message) => {
    const request = JSON.parse(message);

    if (request.user === 'bennycode') {
      let i = 0;
      const interval = setInterval(() => {
        socket.send(
          JSON.stringify({
            user: request.user,
            text: i++,
          })
        );

        // Clean-up dead clients
        if (i === 3) {
          clearInterval(interval);
          socket.close();
        }
      }, 1000);
    }
  });
});
