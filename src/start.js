const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello from ${process.version}!<br>${new Date().toISOString()}`);
});

const port = parseInt(process.env.APP_PORT);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
