const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello from ${process.env.API_NAME} on Node.js ${process.version}!<br>${new Date().toISOString()}`);
});

const port = parseInt(80);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
