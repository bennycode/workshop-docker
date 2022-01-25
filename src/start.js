const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello from ${process.version}!<br>${new Date().toISOString()}`);
});

const port = parseInt(80);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
