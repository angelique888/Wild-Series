const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.send('Welcome to Wild Series !');
});

const port = 3310;

app.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}`);
});
